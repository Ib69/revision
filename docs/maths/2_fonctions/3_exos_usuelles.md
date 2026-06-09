# Exercices — Fonctions usuelles

> :material-book-open-page-variant: Cours utile : [Fonctions — sections 3 et 5](1_cours.md), notamment **arctan**.

---

## :material-numeric-1-circle: Exercice 1 — Inj/surj/bij de $x \mapsto x^2$

<span class="diff diff-facile">🟢 Facile</span>

Étudie l'injectivité et la surjectivité de $f : x \mapsto x^2$ dans les 4 cas :

a) $E = \mathbb{R}$ et $F = \mathbb{R}$
b) $E = \mathbb{R}$ et $F = \mathbb{R}_+$
c) $E = \mathbb{R}_+$ et $F = \mathbb{R}$
d) $E = \mathbb{R}_+$ et $F = \mathbb{R}_+$

??? success "Voir la correction"
    | Cas | Départ | Arrivée | Inj ? | Surj ? | Bij ? |
    |---|---|---|---|---|---|
    | a | $\mathbb{R}$ | $\mathbb{R}$ | ❌ ($f(-1)=f(1)$) | ❌ ($-1$ non atteint) | ❌ |
    | b | $\mathbb{R}$ | $\mathbb{R}_+$ | ❌ ($f(-1)=f(1)$) | ✅ ($\sqrt{y}$) | ❌ |
    | c | $\mathbb{R}_+$ | $\mathbb{R}$ | ✅ (croissante sur $\mathbb{R}_+$) | ❌ ($-1$ non atteint) | ❌ |
    | d | $\mathbb{R}_+$ | $\mathbb{R}_+$ | ✅ | ✅ | ✅ |

    **Réflexe** : pour rendre $f$ bijective, on **restreint** ce qu'il faut.

---

## :material-numeric-2-circle: Exercice 2 — Construire inj/non-surj, surj/non-inj

<span class="diff diff-facile">🟢 Facile</span>

**1.** Construis une fonction **injective** de $[\![1, 4]\!]$ vers $[\![1, 5]\!]$. Peut-elle être surjective ? Pourquoi ?

**2.** Construis une fonction **surjective** de $[\![1, 4]\!]$ vers $[\![1, 3]\!]$. Peut-elle être injective ? Pourquoi ?

**3.** Construis une fonction **bijective** de $[\![1, 4]\!]$ vers $[\![1, 4]\!]$.

??? success "Voir la correction"
    **1.** Injective : $f(1) = 1, f(2) = 2, f(3) = 3, f(4) = 4$.
    Surjective ? Non — il y a 4 éléments à gauche et 5 à droite, donc 5 n'aura aucun antécédent.
    **Règle** : injective et surjective de $E$ vers $F$ finis ⟹ $|E| = |F|$.

    **2.** Surjective : $f(1) = 1, f(2) = 2, f(3) = 3, f(4) = 1$.
    Injective ? Non — il y a 4 éléments à gauche pour 3 à droite, donc au moins deux ont la même image (principe des tiroirs).

    **3.** Bijective : $f(1) = 2, f(2) = 4, f(3) = 1, f(4) = 3$ (n'importe quelle permutation marche).

---

## :material-numeric-3-circle: Exercice 3 — Choisir $I$ et $J$ pour ajuster

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $I$ et $J$ deux intervalles de $\mathbb{R}$.

**1.** Donne $I, J$ tels que $f : I \to J$ soit **injective et non surjective**, pour :
   a) $f(x) = \cos(x)$
   b) $f(x) = |x|$

**2.** Donne $I, J$ tels que $f : I \to J$ soit **surjective et non injective**, pour les mêmes fonctions.

??? success "Voir la correction"
    **1. Injective, non surjective.**

    a) $\cos$ est injective sur $[0, \pi]$ (strictement décroissante). $\cos([0, \pi]) = [-1, 1]$.
       Pour qu'elle ne soit pas surjective, on prend une arrivée plus grande : $J = [-1, 2]$.
       Donc $I = [0, \pi]$, $J = [-1, 2]$.

    b) $|\cdot|$ est injective sur $\mathbb{R}_+$. Pour non surjective : $J = [0, +\infty[ \cup \{...\}$.
       Plus simple : $I = [0, 1]$, $J = [0, 5]$.

    **2. Surjective, non injective.**

    a) $\cos(\mathbb{R}) = [-1, 1]$. Donc $I = \mathbb{R}$, $J = [-1, 1]$.
       Non injective car périodique.

    b) $|\cdot|$ va de $\mathbb{R}$ sur $\mathbb{R}_+$. Donc $I = \mathbb{R}$, $J = \mathbb{R}_+$.
       Non injective car $|-x| = |x|$.

---

## :material-numeric-4-circle: Exercice 4 — Tableau d'images et antécédents pour exp/sin/ln

<span class="diff diff-moyen">🟡 Moyen</span>

Complète le tableau suivant. **Conseil** : dessine les graphes au brouillon.

| | $\exp : \mathbb{R} \to \mathbb{R}$ | $\sin : [-\pi, \pi] \to \mathbb{R}$ | $\ln : ]0, +\infty[ \to \mathbb{R}$ |
|---|---|---|---|
| $f(\{0\})$ | | | |
| $f(]0, \pi])$ | | | |
| $f^{-1}(\{0\})$ | | | |
| $f^{-1}(\{1\})$ | | | |
| $f^{-1}(]-\infty, 0])$ | | | |

??? success "Voir la correction"
    | | $\exp$ | $\sin$ sur $[-\pi, \pi]$ | $\ln$ |
    |---|---|---|---|
    | $f(\{0\})$ | $\{1\}$ | $\{0\}$ | non défini ($0 \notin$ domaine) |
    | $f(]0, \pi])$ | $]1, e^\pi]$ | $[0, 1]$ | $]-\infty, \ln \pi]$ |
    | $f^{-1}(\{0\})$ | $\varnothing$ (exp $> 0$) | $\{-\pi, 0, \pi\}$ | $\{1\}$ |
    | $f^{-1}(\{1\})$ | $\{0\}$ | $\{\pi/2\}$ | $\{e\}$ |
    | $f^{-1}(]-\infty, 0])$ | $\varnothing$ | $[-\pi, 0] \cup \{\pi\}$ | $]0, 1]$ |

    **Cas pénibles à comprendre**
    - $\sin$ sur $[-\pi, \pi]$ s'annule en $-\pi, 0, \pi$ : 3 antécédents pour 0.
    - $\sin([-\pi, 0])$ est $[-1, 0]$ (et $\sin(\pi) = 0$ aussi), donc l'antécédent de $]-\infty, 0]$ contient $[-\pi, 0]$ **et** le point $\pi$ isolé.

---

## :material-numeric-5-circle: Exercice 5 — Calculs d'images directes/réciproques sur fonctions usuelles

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $f, g, h$ définies par $f(x) = e^x$, $g(x) = x^2$ (sur $\mathbb{R}$) et $h(x) = \sin(x)$ (sur $[-\pi, \pi]$).

**1.** Détermine :
   a) $f(\mathbb{R})$
   b) $f^{-1}(\{0\})$

**2.** Détermine :
   a) $g([-1, 4])$
   b) $g^{-1}([-1, 4])$

**3.** Détermine :
   a) $h([-\pi, \pi])$
   b) $h([0, \pi/2])$
   c) $h^{-1}([0, 1])$
   d) $h^{-1}([1, 2])$
   e) $h^{-1}([3, 4])$

??? success "Voir la correction"
    **1.**

    a) $f(\mathbb{R}) = ]0, +\infty[$ (exp est strictement positive)

    b) $f^{-1}(\{0\}) = \varnothing$ (rien ne tombe sur 0)

    **2.**

    a) $g$ croît sur $[0, 4]$ et $g(-1) = 1, g(0) = 0, g(4) = 16$. Donc $g([-1, 4]) = [0, 16]$.

    b) On cherche $x$ avec $-1 \leq x^2 \leq 4$. La gauche est toujours vraie ($x^2 \geq 0$).
       Reste $x^2 \leq 4$ ⟺ $-2 \leq x \leq 2$. Donc $g^{-1}([-1, 4]) = [-2, 2]$.

    **3.**

    a) $h([-\pi, \pi]) = [-1, 1]$ (atteint tout son intervalle image).

    b) $h([0, \pi/2]) = [0, 1]$ ($\sin$ croît de 0 à 1).

    c) $h^{-1}([0, 1])$ : où $\sin(x) \in [0, 1]$ sur $[-\pi, \pi]$ ? Réponse : $[0, \pi]$.

    d) $h^{-1}([1, 2])$ : où $\sin(x) \geq 1$ sur $[-\pi, \pi]$ ? Seulement $x = \pi/2$. Donc $\{\pi/2\}$.

    e) $h^{-1}([3, 4])$ = $\varnothing$ ($\sin \leq 1$ partout).

---

## :material-numeric-6-circle: Exercice 6 — La fonction $\arctan$

<span class="diff diff-dur">🔴 Niveau examen</span>

**1.** Pourquoi $\tan$ est bijective de $]-\pi/2, \pi/2[$ vers $\mathbb{R}$ ?

**2.** Sa réciproque s'appelle $\arctan$.
   a) Dessine son allure (asymptotes, point d'inflexion).
   b) Démontre que pour tout $y \in \mathbb{R}$, $\arctan'(y) = \dfrac{1}{1 + y^2}$.
   c) Remplis le tableau :

   | $\alpha$ | $0$ | $\pi/3$ | $-\pi/4$ | | $\arctan(x)$ |
   |---|---|---|---|---|---|
   | $\tan(\alpha)$ | | | | | $x$ |

   Cases vides additionnelles : $\tan(\alpha) = 1$, $\tan(\alpha) = -\sqrt{3}$, $\tan(\alpha) = 1/\sqrt{3}$ → trouver $\alpha$.

**3.** Donne d'autres couples de fonctions usuelles réciproques.

??? success "Voir la correction"
    **1.** Sur $]-\pi/2, \pi/2[$, $\tan$ est **strictement croissante** (sa dérivée $1/\cos^2$ est $>0$), et atteint **tous** les réels (limites $-\infty$ et $+\infty$ aux bornes). C'est donc une bijection continue de $]-\pi/2, \pi/2[$ vers $\mathbb{R}$.

    **2.**

    a) Allure : courbe en "S" couché, passant par l'origine, avec asymptotes horizontales $y = \pm \pi/2$, strictement croissante.

    b) On part de $\tan(\arctan(y)) = y$ pour tout $y$. On dérive (composition) :
    $$ (1 + \tan^2(\arctan(y))) \cdot \arctan'(y) = 1. $$
    Or $\tan(\arctan(y)) = y$, donc $1 + \tan^2(\arctan(y)) = 1 + y^2$.
    D'où :
    $$ \arctan'(y) = \frac{1}{1 + y^2}. $$

    c) Tableau :

    | $\alpha$ | $0$ | $\pi/3$ | $-\pi/4$ | $\pi/4$ | $-\pi/3$ | $\pi/6$ |
    |---|---|---|---|---|---|---|
    | $\tan(\alpha)$ | $0$ | $\sqrt{3}$ | $-1$ | $1$ | $-\sqrt{3}$ | $1/\sqrt{3}$ |

    À connaître par cœur : $\arctan(1) = \pi/4$, $\arctan(\sqrt{3}) = \pi/3$, $\arctan(1/\sqrt{3}) = \pi/6$.

    **3.** Autres réciproques usuelles :
    - $\exp \leftrightarrow \ln$
    - $x \mapsto x^2$ (sur $\mathbb{R}_+$) $\leftrightarrow x \mapsto \sqrt{x}$
    - $\sin$ (sur $[-\pi/2, \pi/2]$) $\leftrightarrow \arcsin$
    - $\cos$ (sur $[0, \pi]$) $\leftrightarrow \arccos$

---

## :material-check-circle-outline: Ce que tu dois savoir faire après cette page

- [ ] Discuter inj/surj/bij d'une fonction selon ses ensembles
- [ ] Calculer $f(A)$, $f^{-1}(B)$ pour $\exp, \ln, \sin, \cos$ sur des intervalles
- [ ] Connaître par cœur le tableau de valeurs de $\arctan$
- [ ] Redémontrer $\arctan'(y) = \dfrac{1}{1+y^2}$
- [ ] Citer plusieurs couples de fonctions réciproques

[:material-arrow-right-bold: Suite : exercices style examen](4_exos_examen.md)
