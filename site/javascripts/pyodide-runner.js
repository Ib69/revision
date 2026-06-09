(function () {
    'use strict';

    /* ── LocalStorage helpers ────────────────────────────────────────────── */
    function storageKey(container) {
        var path = window.location.pathname;
        var all  = document.querySelectorAll('.code-exercise');
        var idx  = Array.prototype.indexOf.call(all, container);
        return 'epita_code_' + path + '_' + idx;
    }
    function saveCode(container, code) {
        try { localStorage.setItem(storageKey(container), code); } catch (e) {}
    }
    function loadCode(container) {
        try { return localStorage.getItem(storageKey(container)); } catch (e) { return null; }
    }
    function clearCode(container) {
        try { localStorage.removeItem(storageKey(container)); } catch (e) {}
    }
    function saveHeight(container, h) {
        try { localStorage.setItem(storageKey(container) + '_h', h); } catch (e) {}
    }
    function loadHeight(container) {
        try { var v = localStorage.getItem(storageKey(container) + '_h'); return v ? parseInt(v, 10) : null; } catch (e) { return null; }
    }

    /* ── CodeMirror ─────────────────────────────────────────────────────── */
    const CM = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16';
    let cmLoaded = false;
    let cmPromise = null;
    const editors = new Map();

    function loadCM() {
        if (cmLoaded)  return Promise.resolve();
        if (cmPromise) return cmPromise;

        [CM + '/codemirror.min.css',
         CM + '/theme/dracula.min.css',
         CM + '/theme/eclipse.min.css',
         CM + '/addon/hint/show-hint.min.css'].forEach(function (href) {
            var lnk = document.createElement('link');
            lnk.rel = 'stylesheet'; lnk.href = href;
            document.head.appendChild(lnk);
        });

        function loadScript(src) {
            return new Promise(function (res, rej) {
                var s = document.createElement('script');
                s.src = src; s.onload = res; s.onerror = rej;
                document.head.appendChild(s);
            });
        }

        cmPromise = loadScript(CM + '/codemirror.min.js')
            .then(function () { return loadScript(CM + '/mode/python/python.min.js'); })
            .then(function () { return loadScript(CM + '/addon/edit/closebrackets.min.js'); })
            .then(function () { return loadScript(CM + '/addon/edit/matchbrackets.min.js'); })
            .then(function () { return loadScript(CM + '/addon/selection/active-line.min.js'); })
            .then(function () { return loadScript(CM + '/addon/comment/comment.min.js'); })
            .then(function () { return loadScript(CM + '/addon/hint/show-hint.min.js'); })
            .then(function () { return loadScript(CM + '/addon/hint/anyword-hint.min.js'); })
            .then(function () { cmLoaded = true; });

        return cmPromise;
    }

    function getTheme() {
        return (document.body.getAttribute('data-md-color-scheme') === 'slate')
            ? 'dracula' : 'eclipse';
    }

    function setSaveIndicator(container, state) {
        var ind = container.querySelector('.save-indicator');
        if (!ind) return;
        if (state === 'saved') {
            ind.textContent = '💾 sauvegardé';
            ind.className   = 'save-indicator saved';
        } else if (state === 'modified') {
            ind.textContent = '✏️ modifié';
            ind.className   = 'save-indicator modified';
        } else {
            ind.textContent = '';
            ind.className   = 'save-indicator';
        }
    }

    function initEditors() {
        loadCM().then(function () {
            document.querySelectorAll('.code-exercise').forEach(function (container) {
                if (editors.has(container)) return;
                var ta = container.querySelector('.code-input');
                if (!ta) return;

                /* Sauvegarder le code original */
                var original = ta.value;
                ta.setAttribute('data-original', original);

                /* Injecter l'indicateur de sauvegarde dans les boutons */
                var btns = container.querySelector('.exercise-btns');
                if (btns && !btns.querySelector('.save-indicator')) {
                    var ind = document.createElement('span');
                    ind.className = 'save-indicator';
                    btns.appendChild(ind);
                }

                /* Restaurer le code sauvegardé (localStorage) si présent */
                var saved = loadCode(container);
                var initialCode = (saved !== null) ? saved : original;

                var savedH = loadHeight(container);
                var lines  = initialCode.split('\n').length;
                var height = savedH || Math.max(130, lines * 19 + 30);

                var cm = CodeMirror.fromTextArea(ta, {
                    mode             : 'python',
                    theme            : getTheme(),
                    lineNumbers      : true,
                    indentUnit       : 4,
                    tabSize          : 4,
                    indentWithTabs   : false,
                    autoCloseBrackets: true,
                    matchBrackets    : true,
                    styleActiveLine  : true,
                    lineWrapping     : false,
                    extraKeys: {
                        'Tab'        : function (ed) { ed.execCommand('indentMore'); },
                        'Shift-Tab'  : function (ed) { ed.execCommand('indentLess'); },
                        'Ctrl-/'     : function (ed) { ed.toggleComment(); },
                        'Cmd-/'      : function (ed) { ed.toggleComment(); },
                        'Ctrl-Space' : function (ed) {
                            CodeMirror.commands.autocomplete(ed,
                                CodeMirror.hint.anyword,
                                { completeSingle: false });
                        },
                        'Ctrl-D'     : function (ed) {
                            var cursor = ed.getCursor();
                            var line   = ed.getLine(cursor.line);
                            ed.replaceRange('\n' + line,
                                { line: cursor.line, ch: line.length });
                        }
                    }
                });

                cm.setSize('100%', height + 'px');

                /* ── Poignée de redimensionnement ──────────────────────── */
                var wrapper = cm.getWrapperElement();
                var handle  = document.createElement('div');
                handle.className = 'cm-resize-handle';
                handle.innerHTML = '<span class="cm-resize-dots"></span>';
                wrapper.parentNode.insertBefore(handle, wrapper.nextSibling);

                (function () {
                    var startY = 0, startH = 0, dragging = false;

                    function onMove(e) {
                        if (!dragging) return;
                        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
                        var newH = Math.max(80, startH + (clientY - startY));
                        cm.setSize('100%', newH + 'px');
                    }
                    function onUp() {
                        if (!dragging) return;
                        dragging = false;
                        handle.classList.remove('dragging');
                        document.removeEventListener('mousemove', onMove);
                        document.removeEventListener('mouseup',   onUp);
                        document.removeEventListener('touchmove', onMove);
                        document.removeEventListener('touchend',  onUp);
                        /* Sauvegarder la nouvelle hauteur */
                        saveHeight(container, wrapper.offsetHeight);
                    }

                    handle.addEventListener('mousedown', function (e) {
                        e.preventDefault();
                        dragging = true;
                        startY = e.clientY;
                        startH = wrapper.offsetHeight;
                        handle.classList.add('dragging');
                        document.addEventListener('mousemove', onMove);
                        document.addEventListener('mouseup',   onUp);
                    });
                    handle.addEventListener('touchstart', function (e) {
                        dragging = true;
                        startY = e.touches[0].clientY;
                        startH = wrapper.offsetHeight;
                        handle.classList.add('dragging');
                        document.addEventListener('touchmove', onMove, { passive: true });
                        document.addEventListener('touchend',  onUp);
                    });
                })();

                /* Charger le code sauvegardé si différent de l'original */
                if (saved !== null && saved !== original) {
                    cm.setValue(saved);
                    setSaveIndicator(container, 'modified');
                }

                /* Auto-save avec debounce 700ms */
                var saveTimer = null;
                cm.on('change', function () {
                    clearTimeout(saveTimer);
                    saveTimer = setTimeout(function () {
                        var code = cm.getValue();
                        saveCode(container, code);
                        if (code === original) {
                            clearCode(container);
                            setSaveIndicator(container, '');
                        } else {
                            setSaveIndicator(container, 'saved');
                            /* Faire disparaître "sauvegardé" après 2s */
                            setTimeout(function () {
                                if (cm.getValue() !== original) {
                                    setSaveIndicator(container, 'modified');
                                }
                            }, 2000);
                        }
                    }, 700);
                });

                editors.set(container, cm);
            });
        });
    }

    /* Re-thème quand l'utilisateur bascule clair/sombre */
    new MutationObserver(function (muts) {
        muts.forEach(function (m) {
            if (m.attributeName === 'data-md-color-scheme') {
                var t = getTheme();
                editors.forEach(function (cm) { cm.setOption('theme', t); });
            }
        });
    }).observe(document.body, { attributes: true });

    /* ── Pyodide ─────────────────────────────────────────────────────────── */
    var pyodideInstance    = null;
    var pyodideLoadPromise = null;

    const PRELOAD_CODE = `
class BinTree:
    def __init__(self, key, left, right):
        self.key = key
        self.left = left
        self.right = right

class Queue:
    def __init__(self):
        self._data = []
    def enqueue(self, elt):
        self._data.append(elt)
    def dequeue(self):
        if not self._data:
            raise IndexError("dequeue from empty queue")
        return self._data.pop(0)
    def isempty(self):
        return len(self._data) == 0

B_vide     = None
B_feuille  = BinTree(42, None, None)
B_petit    = BinTree(1, BinTree(2, None, None), BinTree(3, None, None))
B_complet  = BinTree(1,
    BinTree(2, BinTree(4, None, None), BinTree(5, None, None)),
    BinTree(3, BinTree(6, None, None), BinTree(7, None, None)))
B_degenere = BinTree(1, BinTree(2, BinTree(3, None, None), None), None)
B_td       = BinTree(5,
    BinTree(2,
        BinTree(-1, BinTree(4, None, None), None),
        BinTree(0, None, BinTree(11, None, None))),
    BinTree(12,
        BinTree(4, None, None),
        BinTree(1, BinTree(-2, None, BinTree(15, None, None)), None)))
`;

    function getPyodide() {
        if (pyodideInstance)    return Promise.resolve(pyodideInstance);
        if (pyodideLoadPromise) return pyodideLoadPromise;

        pyodideLoadPromise = new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
            s.onload = resolve;
            s.onerror = function () { reject(new Error('Impossible de charger Pyodide')); };
            document.head.appendChild(s);
        })
        .then(function () { return loadPyodide(); })
        .then(function (py) {
            pyodideInstance = py;
            return py.runPythonAsync(PRELOAD_CODE).then(function () { return py; });
        });

        return pyodideLoadPromise;
    }

    /* ── runCode ─────────────────────────────────────────────────────────── */
    window.runCode = async function (btn) {
        var container = btn.closest('.code-exercise');
        var editor    = editors.get(container);
        var code      = editor
            ? editor.getValue()
            : container.querySelector('.code-input').value;
        var output    = container.querySelector('.code-output');

        btn.disabled       = true;
        output.textContent = '';
        output.className   = 'code-output';
        btn.innerHTML = pyodideInstance ? '⏳ Exécution…' : '⏳ Chargement de Python…';

        try {
            var py = await getPyodide();
            btn.innerHTML = '⏳ Exécution…';

            py.runPython(
                'import sys; from io import StringIO\n' +
                '__buf = StringIO(); sys.stdout = __buf'
            );

            try {
                await py.runPythonAsync(code);
            } catch (err) {
                py.runPython('sys.stdout = sys.__stdout__');
                var msg = err.message
                    .split('\n')
                    .filter(function (l) {
                        return l.indexOf('pyodide') === -1 && l.indexOf('JsProxy') === -1;
                    })
                    .join('\n').trim();
                output.textContent = '❌ ' + msg;
                output.classList.add('error');
                return;
            }

            var captured = py.runPython(
                'sys.stdout = sys.__stdout__; __buf.getvalue()'
            );

            if (captured && captured.trim()) {
                output.textContent = captured;
                output.classList.add('success');
            } else {
                output.textContent = '✅ Code exécuté (pas de print)';
                output.classList.add('success');
            }
        } catch (err) {
            output.textContent = '❌ Erreur : ' + err.message;
            output.classList.add('error');
        } finally {
            btn.disabled  = false;
            btn.innerHTML = '▶ Exécuter';
        }
    };

    /* ── resetCode ───────────────────────────────────────────────────────── */
    window.resetCode = function (btn) {
        var container = btn.closest('.code-exercise');
        var editor    = editors.get(container);
        var ta        = container.querySelector('.code-input');
        var original  = ta ? ta.getAttribute('data-original') : null;
        if (original === null) return;

        if (editor) editor.setValue(original);
        else if (ta) ta.value = original;

        /* Effacer la sauvegarde */
        clearCode(container);
        setSaveIndicator(container, '');

        /* Effacer l'output */
        var out = container.querySelector('.code-output');
        if (out) { out.textContent = ''; out.className = 'code-output'; }
    };

    /* ── Init / navigation MkDocs ────────────────────────────────────────── */
    document.addEventListener('DOMContentLoaded', initEditors);

    if (typeof document$ !== 'undefined') {
        document$.subscribe(function () {
            editors.forEach(function (cm, container) {
                if (!document.contains(container)) editors.delete(container);
            });
            initEditors();
        });
    }
})();
