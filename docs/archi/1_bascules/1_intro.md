# Introduction aux bascules

!!! abstract "À lire avant le cours du prof"
    Cette page te donne **une seule image mentale** qui marche pour **toutes** les bascules, plus des repères pour t'y retrouver. Une fois que tu as ça en tête, le cours devient une simple mise en forme de ce que tu comprends déjà.

---

## 1. Le problème de départ : comment un circuit se *souvient* ?

Jusqu'au S1, tu as vu la **logique combinatoire** : portes ET, OU, NON, tables de vérité, Karnaugh. Le point commun de tout ça :

> La sortie dépend **uniquement** des entrées **à l'instant présent**.

<div class="analogie" markdown>
**Analogie 🧮**

La logique combinatoire, c'est une **calculatrice**. Tu tapes `3 + 5`, elle affiche `8`. Si tu retapes la même chose, tu obtiens toujours `8`. Elle n'a **aucune mémoire** de ce que tu as fait avant.
</div>

Mais un ordinateur a besoin de **se souvenir** (la RAM, les registres, un compteur qui retient où il en est…). Il faut donc des circuits qui ont une **mémoire**. C'est la **logique séquentielle**.

L'astuce géniale : on prend un circuit combinatoire et on **reboucle une partie de la sortie vers l'entrée**. Ce bouclage crée la mémoire.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit séquentiel = combinatoire + bouclage">
  <defs>
    <marker id="arA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker>
  </defs>
  <rect x="150" y="45" width="150" height="80" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="225" y="80" text-anchor="middle" font-size="13" fill="currentColor">Circuit</text>
  <text x="225" y="98" text-anchor="middle" font-size="13" fill="currentColor">combinatoire</text>
  <line x1="60" y1="65" x2="148" y2="65" stroke="currentColor" stroke-width="2" marker-end="url(#arA)"/>
  <line x1="60" y1="85" x2="148" y2="85" stroke="currentColor" stroke-width="2" marker-end="url(#arA)"/>
  <text x="52" y="80" text-anchor="end" font-size="12" fill="currentColor">Entrées</text>
  <line x1="300" y1="65" x2="390" y2="65" stroke="currentColor" stroke-width="2" marker-end="url(#arA)"/>
  <text x="398" y="69" font-size="12" fill="currentColor">Sorties</text>
  <path d="M 330 100 L 330 165 L 120 165 L 120 105 L 148 105" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arA)"/>
  <circle cx="330" cy="65" r="3" fill="currentColor"/>
  <path d="M330 65 L330 100" stroke="currentColor" stroke-width="2"/>
  <text x="225" y="185" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">le bouclage des sorties vers les entrées = la mémoire</text>
</svg>
<figcaption>La logique séquentielle = un circuit combinatoire dont une partie de la sortie revient à l'entrée.</figcaption>
</figure>

La **brique de base** de cette mémoire, c'est la **bascule**. Une bascule retient **1 bit** (un 0 ou un 1). C'est la plus petite cellule de mémoire qui existe.

---

## 2. L'image qui marche pour tout : la *lampe à mémoire*

Voici la représentation à garder en tête **pour toute la suite du cours** :

<div class="analogie" markdown>
**Analogie 💡 — Une bascule = une lampe avec deux boutons poussoirs**

Imagine une lampe commandée par **deux boutons** :

- un bouton **S** (*Set*) qui l'**allume** (la sortie passe à **1**),
- un bouton **R** (*Reset*) qui l'**éteint** (la sortie passe à **0**).

La sortie **Q**, c'est l'**état de la lampe** (allumée = 1, éteinte = 0).
</div>

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lampe à mémoire avec boutons Set et Reset">
  <g stroke="#f9a825" stroke-width="2.5" stroke-linecap="round">
    <line x1="180" y1="14" x2="180" y2="3"/>
    <line x1="232" y1="32" x2="240" y2="24"/>
    <line x1="128" y1="32" x2="120" y2="24"/>
    <line x1="246" y1="66" x2="257" y2="66"/>
    <line x1="114" y1="66" x2="103" y2="66"/>
  </g>
  <circle cx="180" cy="66" r="40" fill="#ffd54f" fill-opacity="0.28" stroke="currentColor" stroke-width="2"/>
  <path d="M165 74 Q180 48 195 74" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="180" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Q = 1</text>
  <rect x="170" y="106" width="20" height="14" rx="2" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
  <rect x="48" y="150" width="110" height="40" rx="7" fill="#43a047" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
  <text x="103" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">S — Set</text>
  <text x="103" y="183" text-anchor="middle" font-size="11" fill="currentColor">allumer (→1)</text>
  <rect x="202" y="150" width="110" height="40" rx="7" fill="#e53935" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
  <text x="257" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">R — Reset</text>
  <text x="257" y="183" text-anchor="middle" font-size="11" fill="currentColor">éteindre (→0)</text>
</svg>
<figcaption>La bascule RS : une lampe (sortie Q) commandée par un bouton « allumer » (S) et un bouton « éteindre » (R).</figcaption>
</figure>

Maintenant, **les 4 situations possibles** — et c'est exactement la table de vérité d'une bascule RS :

| R (éteindre) | S (allumer) | Que fait la lampe ? | Nom |
|:---:|:---:|---|---|
| 0 | 0 | On ne touche à rien → elle **reste comme avant** | **État mémoire** :material-star: |
| 0 | 1 | On appuie sur « allumer » → **Q = 1** | **Set** (mise à 1) |
| 1 | 0 | On appuie sur « éteindre » → **Q = 0** | **Reset** (mise à 0) |
| 1 | 1 | On appuie sur les **deux** en même temps → absurde | **État interdit** :material-cancel: |

<div class="memo" markdown>
**Mémo 🧠**

- **S** comme **S**et / a**ll**umer → met à **1**
- **R** comme **R**eset → met à **0**
- **R = S = 0** → « je ne touche à rien » → la lampe **garde son état** : c'est **ça**, la mémoire.
- **R = S = 1** → « j'allume ET j'éteins en même temps » → **ça n'a pas de sens** → interdit.
</div>

!!! success "Le truc le plus important de tout le chapitre"
    Une bascule **garde son état tant qu'on ne lui dit pas explicitement de changer**. C'est la définition même d'une mémoire. **Tout le reste du cours** (D, JK, compteurs…) n'est qu'une variation autour de cette idée.

---

## 3. Le symbole qu'on dessine (et la sortie Q̄)

Au lieu de redessiner les portes à chaque fois, on utilise un **symbole en boîte** :

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Symbole d'une bascule RS">
  <rect x="85" y="25" width="80" height="100" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="95" y="56" font-size="15" fill="currentColor">R</text>
  <text x="95" y="110" font-size="15" fill="currentColor">S</text>
  <line x1="45" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="45" y1="100" x2="85" y2="100" stroke="currentColor" stroke-width="2"/>
  <text x="155" y="56" text-anchor="end" font-size="15" fill="currentColor">Q</text>
  <line x1="165" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="2"/>
  <text x="150" y="105" text-anchor="end" font-size="15" fill="currentColor">Q</text>
  <line x1="138" y1="93" x2="150" y2="93" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="171" cy="100" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <line x1="177" y1="100" x2="210" y2="100" stroke="currentColor" stroke-width="2"/>
</svg>
<figcaption>Symbole d'une bascule RS. La sortie du bas porte un petit rond (bulle) : c'est Q̄, l'inverse de Q.</figcaption>
</figure>

Presque toutes les bascules ont **deux sorties** :

- **Q** : la sortie normale (l'état de la lampe),
- **Q̄** (« Q barre ») : **toujours l'inverse** de Q. Si Q = 1 alors Q̄ = 0, et vice-versa.

<div class="memo" markdown>
**Repère visuel 👁️ — la bulle = « inverse »**

Un **petit rond ○** sur un fil veut **toujours** dire « on inverse le signal » (c'est une porte NON cachée). Tu le verras partout :

- ○ sur une **sortie** → c'est Q̄ (l'inverse de Q),
- ○ sur l'**entrée d'horloge** → la bascule réagit sur le front **descendant** (au lieu de montant).

Retiens : **bulle = inversion**. Ça te débloquera plein de schémas.
</div>

---

## 4. L'horloge : le chef d'orchestre

Le problème de la bascule RS toute simple : elle réagit **instantanément**, à n'importe quel moment. Dans un vrai ordinateur, on veut que **tout change en rythme**, tous ensemble, à un signal commun. Ce signal commun, c'est l'**horloge** (notée **C**, pour *Clock*).

<div class="analogie" markdown>
**Analogie 🎼 — L'horloge = le métronome / le chef d'orchestre**

L'horloge est un signal qui fait `0, 1, 0, 1, 0, 1…` régulièrement. Elle ne transporte **aucune information** : elle donne juste le **tempo**. Elle dit à toutes les bascules : *« c'est MAINTENANT que vous avez le droit de changer »*.

Entre deux « tops », les bascules sont **figées**, même si leurs entrées bougent.
</div>

Reste à définir **quel instant précis** est le « top ». C'est la notion de **front** :

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Front montant et front descendant d'une horloge">
  <line x1="30" y1="115" x2="425" y2="115" stroke="currentColor" stroke-width="1" opacity="0.35"/>
  <polyline points="35,105 95,105 95,40 175,40 175,105 255,105 255,40 335,40 335,105 415,105" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="24" y="75" text-anchor="end" font-size="14" fill="currentColor">C</text>
  <line x1="95" y1="105" x2="95" y2="40" stroke="#43a047" stroke-width="3"/>
  <polygon points="95,36 90,46 100,46" fill="#43a047"/>
  <text x="95" y="22" text-anchor="middle" font-size="11" fill="#43a047" font-weight="bold">front montant</text>
  <text x="95" y="135" text-anchor="middle" font-size="11" fill="#43a047">(0 → 1)</text>
  <line x1="175" y1="40" x2="175" y2="105" stroke="#e53935" stroke-width="3"/>
  <polygon points="175,109 170,99 180,99" fill="#e53935"/>
  <text x="200" y="135" text-anchor="middle" font-size="11" fill="#e53935">front descendant (1 → 0)</text>
</svg>
<figcaption>Un « front » est l'instant de basculement du signal. Montant = ça monte (0→1). Descendant = ça descend (1→0).</figcaption>
</figure>

<div class="memo" markdown>
**Mémo 🧠 — les fronts**

- **Front montant ↑** = le signal **monte** (0 → 1). Symbole : un petit triangle `▷` sur l'entrée d'horloge.
- **Front descendant ↓** = le signal **descend** (1 → 0). Symbole : le triangle `▷` **+ une bulle ○** (rappelle-toi : bulle = inverse).
</div>

---

## 5. Les 4 façons de « synchroniser » une bascule

C'est **le** point qui revient sans arrêt dans l'Exercice 1 de l'exam. Une même bascule peut réagir de 4 manières différentes selon **quand** elle écoute ses entrées :

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les quatre modes de synchronisation">
  <rect x="20" y="35" width="70" height="70" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <line x1="0" y1="60" x2="20" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="0" y1="80" x2="20" y2="80" stroke="currentColor" stroke-width="2"/>
  <text x="55" y="125" text-anchor="middle" font-size="11" fill="currentColor">asynchrone</text>
  <text x="55" y="140" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">(pas d'horloge)</text>
  <rect x="130" y="35" width="70" height="70" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="70" x2="130" y2="70" stroke="currentColor" stroke-width="2"/>
  <text x="138" y="74" font-size="12" fill="currentColor">E</text>
  <text x="165" y="125" text-anchor="middle" font-size="11" fill="currentColor">sur état</text>
  <text x="165" y="140" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">(niveau haut)</text>
  <rect x="240" y="35" width="70" height="70" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <line x1="220" y1="70" x2="240" y2="70" stroke="currentColor" stroke-width="2"/>
  <polyline points="240,62 250,70 240,78" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="275" y="125" text-anchor="middle" font-size="11" fill="currentColor">front montant</text>
  <text x="275" y="140" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">triangle</text>
  <rect x="350" y="35" width="70" height="70" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <line x1="324" y1="70" x2="338" y2="70" stroke="currentColor" stroke-width="2"/>
  <circle cx="344" cy="70" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <polyline points="350,62 360,70 350,78" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="385" y="125" text-anchor="middle" font-size="11" fill="currentColor">front descendant</text>
  <text x="385" y="140" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">triangle + bulle</text>
</svg>
<figcaption>Les façons de synchroniser. À l'examen, repère TOUJOURS ce symbole d'horloge en premier.</figcaption>
</figure>

| Mode | Quand la bascule écoute ses entrées | Comment le reconnaître |
|---|---|---|
| **Asynchrone** | **Tout le temps**, en continu (pas d'horloge) | Pas d'entrée C |
| **Sur état** | Pendant tout le temps où l'horloge vaut **1** | Entrée `E` (Enable), pas de triangle |
| **Sur front montant** | À l'**instant précis** où l'horloge passe 0→1 | Triangle `▷` |
| **Sur front descendant** | À l'instant où l'horloge passe 1→0 | Triangle `▷` **+ bulle ○** |
| **Sur impulsion** (maître-esclave) | Capture au front montant, applique au front descendant | Symbole `⊓` dans le coin |

<div class="analogie" markdown>
**Analogie 📸 — la bascule maître-esclave (sur impulsion)**

C'est comme un **appareil photo** : tu **prends la photo** au front montant (le « maître » capture l'instant), mais **l'image ne s'affiche** qu'au front descendant (« l'esclave » la révèle). Ça évite que la sortie change pendant qu'on la lit.
</div>

---

## 6. Pourquoi PLUSIEURS bascules ? (RS, D, JK, T)

Bonne question — et la réponse est simple : **chaque bascule corrige un défaut de la précédente.** C'est une histoire d'améliorations successives.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 470 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Évolution des bascules">
  <defs>
    <marker id="arEv" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker>
  </defs>
  <rect x="15" y="40" width="80" height="44" rx="6" fill="#e53935" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
  <text x="55" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">RS</text>
  <text x="55" y="76" text-anchor="middle" font-size="9" fill="currentColor">état interdit ✗</text>
  <line x1="98" y1="62" x2="128" y2="62" stroke="currentColor" stroke-width="2" marker-end="url(#arEv)"/>
  <rect x="130" y="40" width="80" height="44" rx="6" fill="#1e88e5" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
  <text x="170" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">D</text>
  <text x="170" y="76" text-anchor="middle" font-size="9" fill="currentColor">1 seule entrée</text>
  <line x1="213" y1="62" x2="243" y2="62" stroke="currentColor" stroke-width="2" marker-end="url(#arEv)"/>
  <rect x="245" y="40" width="80" height="44" rx="6" fill="#43a047" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
  <text x="285" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">JK</text>
  <text x="285" y="76" text-anchor="middle" font-size="9" fill="currentColor">interdit → bascule ✓</text>
  <line x1="328" y1="62" x2="358" y2="62" stroke="currentColor" stroke-width="2" marker-end="url(#arEv)"/>
  <rect x="360" y="40" width="80" height="44" rx="6" fill="#8e24aa" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
  <text x="400" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">T</text>
  <text x="400" y="76" text-anchor="middle" font-size="9" fill="currentColor">bascule = ÷2</text>
</svg>
<figcaption>Chaque bascule est une amélioration de la précédente. Comprends la logique, ne mémorise pas bêtement.</figcaption>
</figure>

### :material-numeric-1-circle: La bascule RS — l'originale

La lampe à deux boutons qu'on vient de voir. **Défaut** : l'état interdit (R = S = 1). On aimerait s'en débarrasser.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 430 158" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronogramme d'une bascule RS sur front montant">
  <g stroke="currentColor" stroke-width="1" opacity="0.3" stroke-dasharray="3,3">
    <line x1="70" y1="8" x2="70" y2="148"/>
    <line x1="150" y1="8" x2="150" y2="148"/>
    <line x1="230" y1="8" x2="230" y2="148"/>
    <line x1="310" y1="8" x2="310" y2="148"/>
  </g>
  <g fill="#43a047"><polygon points="70,8 65,18 75,18"/><polygon points="150,8 145,18 155,18"/><polygon points="230,8 225,18 235,18"/><polygon points="310,8 305,18 315,18"/></g>
  <text x="24" y="34" text-anchor="end" font-size="13" fill="currentColor">C</text>
  <polyline points="30,40 70,40 70,20 110,20 110,40 150,40 150,20 190,20 190,40 230,40 230,20 270,20 270,40 310,40 310,20 350,20 350,40 390,40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="24" y="68" text-anchor="end" font-size="13" fill="#2e7d32">S</text>
  <polyline points="30,74 50,74 50,54 110,54 110,74 290,74 290,54 390,54" fill="none" stroke="#43a047" stroke-width="2.5"/>
  <text x="24" y="102" text-anchor="end" font-size="13" fill="#c62828">R</text>
  <polyline points="30,108 210,108 210,88 270,88 270,108 390,108" fill="none" stroke="#e53935" stroke-width="2.5"/>
  <text x="24" y="136" text-anchor="end" font-size="13" fill="currentColor">Q</text>
  <polyline points="30,142 70,142 70,122 230,122 230,142 310,142 310,122 390,122" fill="none" stroke="#1e88e5" stroke-width="2.5"/>
</svg>
<figcaption>Bascule RS sur front montant. À chaque front : front 1 → S=1 (set, Q=1) · front 2 → S=R=0 (mémoire, Q reste à 1) · front 3 → R=1 (reset, Q=0) · front 4 → S=1 (set, Q=1).</figcaption>
</figure>

### :material-numeric-2-circle: La bascule D — la photocopieuse

On simplifie : **une seule entrée, D** (pour *Data*). À chaque top d'horloge, la sortie **copie** l'entrée : `Q = D`. Point.

<div class="analogie" markdown>
**Analogie 📋 — D comme « Décalque »**

La bascule D **photocopie** son entrée vers sa sortie à chaque top d'horloge. Tu mets D = 1, top, Q devient 1. Tu mets D = 0, top, Q devient 0. Entre deux tops, elle **mémorise** la dernière valeur copiée.

C'est **la bascule la plus simple à comprendre** et la plus utilisée en pratique (registres, mémoires).
</div>

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 430 145" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronogramme d'une bascule D">
  <g stroke="currentColor" stroke-width="1" opacity="0.3" stroke-dasharray="3,3">
    <line x1="70" y1="8" x2="70" y2="130"/>
    <line x1="150" y1="8" x2="150" y2="130"/>
    <line x1="230" y1="8" x2="230" y2="130"/>
    <line x1="310" y1="8" x2="310" y2="130"/>
  </g>
  <g fill="#43a047"><polygon points="70,8 65,18 75,18"/><polygon points="150,8 145,18 155,18"/><polygon points="230,8 225,18 235,18"/><polygon points="310,8 305,18 315,18"/></g>
  <text x="24" y="44" text-anchor="end" font-size="13" fill="currentColor">C</text>
  <polyline points="30,50 70,50 70,26 110,26 110,50 150,50 150,26 190,26 190,50 230,50 230,26 270,26 270,50 310,50 310,26 350,26 350,50 390,50" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="24" y="84" text-anchor="end" font-size="13" fill="currentColor">D</text>
  <polyline points="30,90 50,90 50,66 130,66 130,90 210,90 210,66 390,66" fill="none" stroke="#1e88e5" stroke-width="2.5"/>
  <text x="24" y="124" text-anchor="end" font-size="13" fill="currentColor">Q</text>
  <polyline points="30,130 70,130 70,106 150,106 150,130 230,130 230,106 390,106" fill="none" stroke="#43a047" stroke-width="2.5"/>
</svg>
<figcaption>Bascule D sur front montant : à chaque flèche (front ↑), Q recopie la valeur de D. Entre deux fronts, Q ne bouge pas.</figcaption>
</figure>

### :material-numeric-3-circle: La bascule JK — la RS sans état interdit

On reprend la RS (deux entrées **J** et **K**), mais on **récupère l'état interdit** pour en faire quelque chose d'utile : quand **J = K = 1**, la sortie **bascule** (elle change d'état : 0→1 ou 1→0).

<div class="memo" markdown>
**Mémo 🧠 — J et K**

- **J** comme « **J**'allume » (= Set) → met à **1**  *(J joue le rôle de S)*
- **K** comme « **K**ill » (= Reset) → met à **0**  *(K joue le rôle de R)*
- **J = K = 0** → mémoire (comme RS)
- **J = K = 1** → **basculement** : la sortie s'inverse à chaque top (au lieu d'être interdit !)
</div>

| J | K | Q⁺ | Nom |
|:---:|:---:|:---:|---|
| 0 | 0 | q (inchangé) | Mémoire |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | **q̄** (s'inverse) | **Basculement** :material-star: |

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 430 158" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronogramme d'une bascule JK sur front montant">
  <g stroke="currentColor" stroke-width="1" opacity="0.3" stroke-dasharray="3,3">
    <line x1="70" y1="8" x2="70" y2="148"/>
    <line x1="150" y1="8" x2="150" y2="148"/>
    <line x1="230" y1="8" x2="230" y2="148"/>
    <line x1="310" y1="8" x2="310" y2="148"/>
  </g>
  <g fill="#43a047"><polygon points="70,8 65,18 75,18"/><polygon points="150,8 145,18 155,18"/><polygon points="230,8 225,18 235,18"/><polygon points="310,8 305,18 315,18"/></g>
  <text x="24" y="34" text-anchor="end" font-size="13" fill="currentColor">C</text>
  <polyline points="30,40 70,40 70,20 110,20 110,40 150,40 150,20 190,20 190,40 230,40 230,20 270,20 270,40 310,40 310,20 350,20 350,40 390,40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="24" y="68" text-anchor="end" font-size="13" fill="#2e7d32">J</text>
  <polyline points="30,74 50,74 50,54 110,54 110,74 210,74 210,54 390,54" fill="none" stroke="#43a047" stroke-width="2.5"/>
  <text x="24" y="102" text-anchor="end" font-size="13" fill="#c62828">K</text>
  <polyline points="30,108 210,108 210,88 390,88" fill="none" stroke="#e53935" stroke-width="2.5"/>
  <text x="24" y="136" text-anchor="end" font-size="13" fill="currentColor">Q</text>
  <polyline points="30,142 70,142 70,122 230,122 230,142 310,142 310,122 390,122" fill="none" stroke="#1e88e5" stroke-width="2.5"/>
</svg>
<figcaption>Bascule JK sur front montant. À chaque front : front 1 → J=1,K=0 (set, Q=1) · front 2 → J=K=0 (mémoire, Q reste à 1) · front 3 → J=K=1 (bascule, Q passe à 0) · front 4 → J=K=1 (bascule, Q repasse à 1).</figcaption>
</figure>

### :material-numeric-4-circle: La bascule T — la machine à diviser par deux

Si tu prends une JK et que tu forces **J = K = 1** en permanence, elle **bascule à chaque top d'horloge**. On l'appelle alors une **bascule T** (*Toggle* = basculer).

<div class="analogie" markdown>
**Analogie 🔘 — T comme l'interrupteur de ta chambre**

L'interrupteur « va-et-vient » : **un seul bouton**. Tu appuies → allumé. Tu réappuies → éteint. Réappuies → allumé… À **chaque** appui, ça **bascule**.

Conséquence magique : si l'entrée fait `0,1,0,1,0,1…` (8 tops) la sortie ne fait que `0,0,1,1,0,0…` (4 cycles). **La sortie va deux fois moins vite !** C'est un **diviseur de fréquence par deux** — et c'est la **brique de base de tous les compteurs** du chapitre 2.
</div>

---

## 7. Comment les différencier en un coup d'œil

Quand tu tombes sur un schéma à l'examen, pose-toi **ces questions dans l'ordre** :

```
1. Combien d'entrées (hors horloge) ?
   • 1 entrée  → bascule D
   • 2 entrées → bascule RS ou JK
        → si "1,1" donne un basculement → JK
        → si "1,1" est interdit         → RS

2. Y a-t-il une horloge C ?
   • non            → ASYNCHRONE
   • oui, entrée E  → sur ÉTAT
   • oui, triangle ▷         → sur FRONT MONTANT
   • oui, triangle ▷ + bulle → sur FRONT DESCENDANT
   • oui, symbole ⊓          → sur IMPULSION (maître-esclave)

3. Bulle ○ sur une sortie ? → c'est Q̄ (l'inverse de Q)
```

---

## 8. La carte mentale à garder en tête

<div class="retenir" markdown>
**À retenir — l'essentiel en 6 points**

1. Une **bascule** = **1 bit de mémoire** = une **lampe** qui garde son état.
2. **S**et allume (→1), **R**eset éteint (→0), **rien** = mémoire, **les deux** = interdit.
3. L'**horloge** (C) = le métronome : elle dit **quand** la bascule a le droit de changer.
4. **Front montant ▷** (0→1) / **front descendant ▷○** (1→0). **Bulle = inverse**.
5. **D** photocopie (`Q = D`). **JK** = RS améliorée (1,1 → basculement). **T** = bascule à chaque top = **÷2**.
6. **Q̄** est toujours l'inverse de **Q**.
</div>

!!! tip "Et maintenant ?"
    Tu as le contexte. Ouvre le cours du prof (Chapitre 1) : tu vas reconnaître **chaque** section. Puis attaque les **chronogrammes du TD 1** — avec l'image de la lampe et la règle « bulle = inverse », tu vas dérouler.

    Le réflexe examen, à chaque schéma : **(1)** quel type de bascule ? **(2)** quel mode d'horloge ? **(3)** où sont les bulles ? Puis tu appliques la table de vérité, top par top.
