# Cours — Récursion

## C'est quoi la récursion ?

Imagine que tu te places **entre deux miroirs face à face** : tu vois ton reflet, qui contient ton reflet, qui contient ton reflet… à l'infini. C'est ça la récursion : **une fonction qui s'appelle elle-même**.

Mais contrairement aux miroirs, en informatique on a besoin que ça **s'arrête**. C'est pour ça qu'on a toujours un **cas de base** — le moment où on dit "stop, je connais la réponse directement".

!!! example "Analogie des poupées russes 🪆"
    Tu ouvres une poupée → il y en a une plus petite dedans → tu l'ouvres → encore une plus petite… jusqu'à la **dernière poupée** qui est pleine (= cas de base). Ensuite tu "remontes" en refermant chaque poupée.

**Pourquoi c'est important ?** À EPITA, la récursion est le **fondement de l'algorithmique**. Les arbres, les graphes, les tris… tout repose dessus. Si tu maîtrises la récursion, tu maîtrises le reste.

!!! danger "Règle absolue du TD1"
    **Les boucles sont interdites.** Pas de `for`, pas de `while`. Tout se fait avec des appels récursifs.

---

## 1. Le schéma récursif

Toute fonction récursive a **exactement 2 parties** :

```python
def f(params):
    if cas_de_base:       # quand s'arrêter ?
        return valeur     # résultat trivial
    else:
        # ... appel à f(...) avec des paramètres plus petits
        return ...
```

**Deux erreurs classiques à éviter :**

1. **Oublier le `return`** devant l'appel récursif → la fonction retourne `None`
2. **Mauvais cas de base** → récursion infinie → `RecursionError`

---

## 2. Factorielle — le premier exemple

La factorielle est **l'exemple parfait** pour débuter en récursion, parce que sa définition mathématique **est déjà récursive** :

> "Pour calculer 5!, j'ai besoin de 4!. Pour calculer 4!, j'ai besoin de 3!… jusqu'à 0! = 1."

C'est exactement ce que fait une fonction récursive : elle **se réduit** à un problème plus petit, jusqu'à atteindre un cas qu'on sait résoudre directement.

```
fact(5) = 5 × fact(4)
             = 5 × 4 × fact(3)
                        = 5 × 4 × 3 × fact(2)
                                       = 5 × 4 × 3 × 2 × fact(1)
                                                          = 5 × 4 × 3 × 2 × 1 × fact(0)
                                                                                 = 1  ← cas de base !
```

Ensuite Python "remonte" en multipliant tout : `1 × 1 × 2 × 3 × 4 × 5 = 120` ✅

La définition mathématique :

- fact(0) = 1 (cas de base)
- fact(n) = n × fact(n-1) (cas récursif)

### Piège : les 4 versions du TD

Le TD1 te donne 4 versions buggées. Voici les erreurs à repérer :

**(a)** — Pas de `return` devant `fact(n-1)` → retourne `None`

**(b)** — `res` n'existe pas dans `rec_fact` (variable locale à `fact`) → `NameError`

**(c)** — Pas de `return` dans le `else` de `rec_fact` ni dans `fact` → retourne `None`

**(d)** — **Ça compile mais le résultat est faux.** `res = res * rec_fact(n-1, res)` : le `res` passé en paramètre vaut toujours 1 (jamais mis à jour). Résultat : `fact(4) = 1`.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>fact(n)</code> qui calcule la factorielle de n, récursivement.
<br>🎯 <code>fact(0)</code> → <code>1</code> · <code>fact(5)</code> → <code>120</code> · <code>fact(10)</code> → <code>3628800</code>
</div>
<textarea class="code-input" rows="8">def fact(n):
    # Ton code ici
    pass

# Tests
print(fact(0))    # → 1
print(fact(5))    # → 120
print(fact(10))   # → 3628800</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def fact(n):
        if n < 2:
            return 1
        else:
            return n * fact(n - 1)
    ```

---

## 3. Accumulateur récursif

Avec la factorielle, le résultat se construit **en remontant** : on descend jusqu'au cas de base, puis on multiplie en revenant. Mais parfois, on veut **construire le résultat en descendant**.

!!! example "Analogie 🧮"
    Imagine que tu comptes des billes dans des boîtes empilées. **Sans accumulateur**, tu ouvres toutes les boîtes puis tu comptes en refermant. **Avec accumulateur**, tu gardes un compteur dans ta main et tu ajoutes les billes au fur et à mesure que tu ouvres chaque boîte.

L'accumulateur c'est cette **"main"** qui transporte le résultat partiel d'un appel à l'autre. Concrètement, c'est un **paramètre supplémentaire** dans ta fonction récursive.

**Pattern :**
```python
def __rec(params, accumulateur):
    if cas_de_base:
        return accumulateur    # le résultat final est dans l'accumulateur
    else:
        # on modifie l'accumulateur et on continue
        return __rec(params_réduits, nouvel_accumulateur)

def fonction(params):
    return __rec(params, valeur_initiale)
```

**Exemple** : inverser les chiffres de `1234` → `4321`.

L'idée : on "mange" les chiffres de droite un par un et on les accumule :

- `reverse_rec(1234, 0)` → on prend le 4 → `reverse_rec(123, 4)`
- `reverse_rec(123, 4)` → on prend le 3 → `reverse_rec(12, 43)`
- `reverse_rec(12, 43)` → on prend le 2 → `reverse_rec(1, 432)`
- `reverse_rec(1, 432)` → cas de base (1 chiffre) → `4321`

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>reverse(n)</code> qui retourne le nombre formé par les chiffres de n à l'envers.
<br>🎯 <code>reverse(1234)</code> → <code>4321</code> · <code>reverse(5089)</code> → <code>9805</code> · <code>reverse(-5089)</code> → <code>-9805</code>
<br>💡 <em>Utilise <code>n % 10</code> (dernier chiffre) et <code>n // 10</code> (supprimer le dernier chiffre). Écris une fonction auxiliaire avec accumulateur.</em>
</div>
<textarea class="code-input" rows="12">def reverse(n):
    # Gère le cas négatif puis appelle une auxiliaire
    pass

# Tests
print(reverse(1234))   # → 4321
print(reverse(5089))   # → 9805
print(reverse(-5089))  # → -9805
print(reverse(1))      # → 1
print(reverse(0))      # → 0</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def rec_reverse_pos(n, res):
        if n < 10:
            return 10 * res + n
        else:
            return rec_reverse_pos(n // 10, 10 * res + (n % 10))

    def reverse(n):
        if n < 0:
            return -rec_reverse_pos(-n, 0)
        else:
            return rec_reverse_pos(n, 0)
    ```

---

## 4. Récursion double — Fibonacci

Jusqu'ici, chaque fonction faisait **un seul** appel récursif. Mais certains problèmes nécessitent de **diviser le travail en deux** : on fait 2 appels récursifs et on combine les résultats.

C'est comme un **arbre généalogique** : pour connaître tes ancêtres, tu demandes à ton père ET ta mère, qui demandent chacun à leurs parents, etc. Chaque personne se "dédouble" en 2 branches.

!!! warning "Attention aux performances ⚡"
    La récursion double peut être **très coûteuse**. Fibonacci naïf fait `fibo(n-1) + fibo(n-2)`, ce qui recalcule plein de valeurs inutilement. Pour `fibo(5)`, on calcule `fibo(2)` **3 fois** ! C'est pour ça que la complexité est **exponentielle** O(2^n) — ça explose très vite.

Certaines fonctions font **deux appels récursifs**. C'est le cas de Fibonacci :

- fibo(0) = 0, fibo(1) = 1
- fibo(n) = fibo(n-1) + fibo(n-2)

Le piège du TD : **compter le nombre d'appels**. On ne peut pas utiliser une variable globale ou un paramètre simple (les entiers ne sont pas mutables en Python). La solution : **retourner un tuple (valeur, nb_appels)**.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>fibo_calls(n)</code> qui retourne <code>(valeur, nb_appels)</code>.
<br>🎯 <code>fibo_calls(0)</code> → <code>(0, 1)</code> · <code>fibo_calls(1)</code> → <code>(1, 1)</code> · <code>fibo_calls(4)</code> → <code>(3, 9)</code>
<br>💡 <em>Chaque appel retourne un tuple. Pour les combiner : déstructure avec <code>(v1, n1) = fibo_calls(n-1)</code>.</em>
</div>
<textarea class="code-input" rows="12">def fibo_calls(n):
    # Retourne (valeur, nombre_total_appels)
    pass

# Tests
print(fibo_calls(0))   # → (0, 1)
print(fibo_calls(1))   # → (1, 1)
print(fibo_calls(4))   # → (3, 9)</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def fibo_calls(n):
        if n < 2:
            return (n, 1)
        else:
            (f_1, nb1) = fibo_calls(n - 1)
            (f_2, nb2) = fibo_calls(n - 2)
            return (f_1 + f_2, 1 + nb1 + nb2)
    ```
    Le `1 +` dans le return compte l'appel courant.

---

## 5. Recherche récursive — dichotomie

Tu cherches un mot dans le dictionnaire. Est-ce que tu lis **toutes les pages une par une** depuis le début ? Non — tu ouvres au milieu, tu regardes si le mot est avant ou après, et tu continues dans la bonne moitié. C'est exactement la **dichotomie** (du grec "couper en deux").

!!! info "Pourquoi c'est puissant 🚀"
    Dans une liste triée de **1 million** d'éléments, la recherche linéaire (un par un) fait en moyenne **500 000** comparaisons. La dichotomie ? **20 comparaisons** maximum. À chaque étape on **divise par 2** la zone de recherche, d'où la complexité O(log n).

C'est un pattern fondamental en informatique qu'on retrouve partout : recherche dans un tableau trié, algorithmes de tri (merge sort), optimisation, etc.

La recherche dichotomique divise l'espace de recherche en 2 à chaque appel. Le TD te donne une version buggée à corriger.

**Les deux bugs :**

1. **Pas de `return`** devant les appels récursifs aux lignes 10 et 12 → retourne `None`
2. **Condition `left > right`** au lieu de `left >= right` → boucle infinie dans certains cas

**Pattern recherche récursive :**
```python
def __search(L, x, left, right):
    if left >= right:          # zone vide → pas trouvé
        return -1
    else:
        mid = left + (right - left) // 2
        if x == L[mid]:
            return mid
        else:
            if x < L[mid]:
                return __search(L, x, left, mid)      # chercher à gauche
            else:
                return __search(L, x, mid + 1, right)  # chercher à droite
```

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>binary_search_calls(L, x)</code> qui retourne <code>(nb_appels, position)</code>.
<br>Position = index de x dans L, ou -1 si absent.
<br>🎯 <code>binary_search_calls([1,3,5,7,9], 5)</code> → <code>(1, 2)</code>
<br>🎯 <code>binary_search_calls([1,3,5,7,9], 4)</code> → <code>(3, -1)</code>
<br>🎯 <code>binary_search_calls([], 3)</code> → <code>(1, -1)</code>
</div>
<textarea class="code-input" rows="16">def binary_search_calls(L, x):
    # Écris une fonction auxiliaire __bsc(L, x, left, right)
    # qui retourne (nb_appels, position)
    pass

# Tests
print(binary_search_calls([1, 3, 5, 7, 9], 5))  # → (1, 2)
print(binary_search_calls([1, 3, 5, 7, 9], 4))  # → (3, -1)
print(binary_search_calls([], 3))                # → (1, -1)</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def __bsc(L, x, left, right):
        if left >= right:
            return (1, -1)
        else:
            mid = left + (right - left) // 2
            if x == L[mid]:
                return (1, mid)
            else:
                if x < L[mid]:
                    (nb, res) = __bsc(L, x, left, mid)
                else:
                    (nb, res) = __bsc(L, x, mid + 1, right)
                return (nb + 1, res)

    def binary_search_calls(L, x):
        return __bsc(L, x, 0, len(L))
    ```

---

## 6. Diviser en sous-fonctions

En programmation, on ne met pas tout dans une seule grosse fonction. On **découpe le problème** en sous-problèmes plus simples, chacun résolu par sa propre fonction.

!!! example "Analogie 🧩"
    C'est comme cuisiner : tu ne fais pas tout en même temps. Tu prépares d'abord la sauce (= une fonction), puis la pâte (= une autre fonction), puis tu assembles (= la fonction principale qui appelle les autres).

Ici, le TD te demande :

1. **`is_prime(k)`** — savoir si un nombre est premier (sous-problème simple)
2. **`nth_prime(n)`** — trouver le n-ième premier (problème principal qui **utilise** `is_prime`)

C'est un pattern courant : **une fonction de haut niveau appelle une autre fonction récursive**.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris d'abord <code>is_prime(k)</code> puis <code>nth_prime(n)</code>.
<br>Tout en récursif, <strong>pas de boucle</strong>.
<br>🎯 <code>is_prime(2)</code> → <code>True</code> · <code>is_prime(15)</code> → <code>False</code> · <code>is_prime(17)</code> → <code>True</code>
<br>🎯 <code>nth_prime(1)</code> → <code>2</code> · <code>nth_prime(5)</code> → <code>11</code> · <code>nth_prime(10)</code> → <code>29</code>
<br>💡 <em>Pour is_prime : teste les diviseurs d de 3 en 3+2, tant que d*d ≤ k. Cas spécial : les pairs.</em>
</div>
<textarea class="code-input" rows="18">def is_prime(k):
    # Retourne True si k est premier
    pass

def nth_prime(n):
    # Retourne le n-ième nombre premier (n >= 1)
    pass

# Tests is_prime
print(is_prime(2))    # → True
print(is_prime(15))   # → False
print(is_prime(17))   # → True

# Tests nth_prime
print(nth_prime(1))   # → 2
print(nth_prime(5))   # → 11
print(nth_prime(10))  # → 29</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def rec_prime(k, d):
        if d * d > k:
            return True
        else:
            if k % d == 0:
                return False
            else:
                return rec_prime(k, d + 2)

    def is_prime(k):
        if k % 2 == 0:
            return k == 2
        else:
            return rec_prime(k, 3)

    def rec_nth_prime(d, n):
        if n == 1:
            if is_prime(d):
                return d
            else:
                return rec_nth_prime(d + 1, n)
        else:
            if is_prime(d):
                n = n - 1
            return rec_nth_prime(d + 1, n)

    def nth_prime(n):
        return rec_nth_prime(2, n)
    ```

---

## Fiche récap — Récursion

### Les 4 patterns récursifs

| Pattern | Quand | Exemple |
|---|---|---|
| **Récursion simple** | 1 appel récursif, résultat direct | `fact(n)` |
| **Accumulateur** | On construit le résultat au fur et à mesure | `reverse(n)` |
| **Récursion double** | 2 appels récursifs à combiner | `fibo(n)` |
| **Recherche** | On explore un espace qui se réduit | `binary_search` |

### Checklist avant de coder

- [ ] **Cas de base** identifié (quand s'arrêter ?)
- [ ] **`return`** présent devant chaque appel récursif
- [ ] Les paramètres **diminuent** à chaque appel (convergence)
- [ ] Pas de variable globale — tout passe par les paramètres
- [ ] Si on doit retourner 2 infos → **tuple `(a, b)`**

### Les erreurs classiques

| Erreur | Symptôme | Solution |
|---|---|---|
| Pas de `return` devant l'appel récursif | `None` | Ajouter `return` |
| Variable locale inaccessible | `NameError` | Passer en paramètre |
| Mauvais cas de base | `RecursionError` | Vérifier la condition d'arrêt |
| Paramètre non mis à jour | Résultat faux | Utiliser un accumulateur |

### Complexités à connaître

| Fonction | Complexité |
|---|---|
| `fact(n)` | O(n) |
| `fibo(n)` naïf | O(2^n) — exponentiel ! |
| `binary_search` | O(log n) |
| `reverse(n)` | O(nombre de chiffres) |
| `is_prime(k)` | O(√k) |
