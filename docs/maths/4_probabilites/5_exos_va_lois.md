# Exercices — Variables aléatoires et lois usuelles

> :material-book-open-page-variant: Cours : [Sections 4 et 5](1_cours.md#4-variables-aleatoires-finies).
>
> **Méthode-clé** : (1) déterminer $X(\Omega)$, (2) calculer $P(X = k)$ pour chaque $k$, (3) vérifier $\sum P(X = k) = 1$, (4) appliquer les formules d'espérance et de variance.

---

## :material-numeric-1-circle: Exercice 1 — VA et transformation affine

<span class="diff diff-facile">🟢 Facile</span>

On lance un dé équilibré une fois.
$T$ = "numéro de la face apparue", $X$ = "double du numéro moins 6".

**1.** Donne la loi de $T$. Calcule $\mathbb{E}(T)$ et $\mathbb{V}(T)$.
**2.** Quelles valeurs prend $X$ ? Relie $X$ à $T$.
**3.** En déduis $\mathbb{E}(X)$ et $\mathbb{V}(X)$.

??? success "Voir la correction"
    **1.** Loi uniforme sur $[\![1, 6]\!]$ : $P(T = k) = 1/6$ pour $k \in [\![1, 6]\!]$.

    $\mathbb{E}(T) = \sum_{k=1}^6 k \cdot 1/6 = (1+2+\dots+6)/6 = 21/6 = 7/2$.

    $\mathbb{E}(T^2) = (1+4+9+16+25+36)/6 = 91/6$.

    $\mathbb{V}(T) = 91/6 - (7/2)^2 = 91/6 - 49/4 = 182/12 - 147/12 = 35/12$.

    **2.** $X = 2T - 6$. Valeurs : $X(\Omega) = \{-4, -2, 0, 2, 4, 6\}$.

    **3.** Linéarité :
    $\mathbb{E}(X) = 2 \mathbb{E}(T) - 6 = 7 - 6 = 1$.
    $\mathbb{V}(X) = 4 \mathbb{V}(T) = 4 \cdot 35/12 = 35/3$.

---

## :material-numeric-2-circle: Exercice 2 — Urne tricolore (jeu de gain)

<span class="diff diff-facile">🟢 Facile</span>

Urne : 4 boules bleues numérotées 1-4, 3 rouges numérotées 1-3, 2 vertes numérotées 1-2. On tire une boule.

**1.** $X$ = numéro de la boule. Donne la loi, $\mathbb{E}(X)$, $\mathbb{V}(X)$.
**2.** Règle de gain : boule bleue paire → 2€, autre couleur paire → 3€, sinon 0€. $Y$ = gain.
   a) Donne la loi de $Y$.
   b) Probabilité de gagner de l'argent ?

??? success "Voir la correction"
    Total : 9 boules. Équiprobabilité, chaque boule a proba $1/9$.

    **1.** Numéros présents : 1 (bleue), 2 (bleue), 3 (bleue), 4 (bleue), 1 (rouge), 2 (rouge), 3 (rouge), 1 (verte), 2 (verte).

    Comptage par numéro :
    - $X = 1$ : 3 boules (1 bleue + 1 rouge + 1 verte). $P(X=1) = 3/9 = 1/3$.
    - $X = 2$ : 3 boules. $P = 1/3$.
    - $X = 3$ : 2 boules. $P = 2/9$.
    - $X = 4$ : 1 boule. $P = 1/9$.

    $\mathbb{E}(X) = 1 \cdot 1/3 + 2 \cdot 1/3 + 3 \cdot 2/9 + 4 \cdot 1/9 = 3/9 + 6/9 + 6/9 + 4/9 = 19/9$.

    $\mathbb{E}(X^2) = 1 \cdot 1/3 + 4 \cdot 1/3 + 9 \cdot 2/9 + 16 \cdot 1/9 = 3/9 + 12/9 + 18/9 + 16/9 = 49/9$.

    $\mathbb{V}(X) = 49/9 - (19/9)^2 = 49/9 - 361/81 = (441 - 361)/81 = 80/81$.

    **2.**

    a)
    - $Y = 2$ : bleue paire (numéros 2 ou 4) → 2 boules. $P = 2/9$.
    - $Y = 3$ : non-bleue paire (rouge 2, verte 2) → 2 boules. $P = 2/9$.
    - $Y = 0$ : 5 boules restantes. $P = 5/9$.

    Vérif : $2/9 + 2/9 + 5/9 = 1$ ✅.

    b) $P(Y > 0) = 4/9$.

---

## :material-numeric-3-circle: Exercice 3 — Tirage hypergéométrique

<span class="diff diff-moyen">🟡 Moyen</span>

(TD3 ex 4.15)

Main de 5 cartes dans un jeu de 32. $X$ = nombre de cœurs obtenus.

**1.** Valeurs prises ?
**2.** Loi de $X$ ?
**3.** Calcule $\mathbb{E}(X)$. (On admet **Vandermonde** : $\sum_{k=0}^n \binom{a}{k}\binom{b}{n-k} = \binom{a+b}{n}$.)

??? success "Voir la correction"
    **1.** Il y a 8 cœurs, on tire 5 cartes : $X \in [\![0, 5]\!]$.

    **2.** Loi hypergéométrique :
    $$ P(X = k) = \dfrac{\binom{8}{k} \binom{24}{5-k}}{\binom{32}{5}}, \quad k \in [\![0, 5]\!]. $$

    **3.** Espérance :
    $\mathbb{E}(X) = \sum_{k=0}^5 k P(X = k) = \dfrac{1}{\binom{32}{5}} \sum_{k=1}^5 k \binom{8}{k} \binom{24}{5-k}$.

    On utilise $k \binom{8}{k} = 8 \binom{7}{k-1}$. Substitue $j = k - 1$ :
    $\sum_{k=1}^5 k \binom{8}{k} \binom{24}{5-k} = 8 \sum_{j=0}^{4} \binom{7}{j} \binom{24}{4-j} = 8 \binom{31}{4}$ (Vandermonde).

    $\mathbb{E}(X) = \dfrac{8 \binom{31}{4}}{\binom{32}{5}}$.

    On simplifie : $\binom{32}{5} = \dfrac{32}{5} \binom{31}{4}$. Donc $\mathbb{E}(X) = \dfrac{8 \cdot 5}{32} = \dfrac{40}{32} = \dfrac{5}{4}$.

    **Intuition** : 8 cœurs sur 32 cartes = proportion $1/4$. Sur 5 cartes : $5 \times 1/4 = 5/4$ en moyenne. ✅

---

## :material-numeric-4-circle: Exercice 4 — Loi uniforme (cours)

<span class="diff diff-facile">🟢 Facile</span>

$X$ suit la loi uniforme sur $[\![1, n]\!]$.

**1.** Calcule $\mathbb{E}(X)$.
**2.** Calcule $\mathbb{V}(X)$.

On admet : $\sum_{k=1}^n k = n(n+1)/2$ et $\sum_{k=1}^n k^2 = n(n+1)(2n+1)/6$.

??? success "Voir la correction"
    **1.** $\mathbb{E}(X) = \dfrac{1}{n} \sum_{k=1}^n k = \dfrac{n+1}{2}$.

    **2.** $\mathbb{E}(X^2) = \dfrac{1}{n} \sum k^2 = \dfrac{(n+1)(2n+1)}{6}$.

    $\mathbb{V}(X) = \dfrac{(n+1)(2n+1)}{6} - \left(\dfrac{n+1}{2}\right)^2 = \dfrac{(n+1)}{12} \big(2(2n+1) - 3(n+1)\big) = \dfrac{(n+1)(n-1)}{12} = \dfrac{n^2 - 1}{12}$.

    **À retenir** : $\mathbb{E} = (n+1)/2$, $\mathbb{V} = (n^2 - 1)/12$.

---

## :material-numeric-5-circle: Exercice 5 — Notation aléatoire (binomiale)

<span class="diff diff-moyen">🟡 Moyen</span>

(TD3 ex 5.19)

Un prof a 40 copies. Pour chacune, il lance un dé à 20 faces et **assigne le résultat** comme note.

**1.** Pour l'élève $i$, $N_i$ = note. Loi, espérance, probabilité d'avoir la moyenne ($\geq 10$) ?

**2.** $X$ = nombre d'élèves qui ont la moyenne. Donne la loi de $X$.

??? success "Voir la correction"
    **1.** $N_i$ suit la loi uniforme sur $[\![1, 20]\!]$.

    $\mathbb{E}(N_i) = 21/2 = 10.5$.

    $P(N_i \geq 10) = P(N_i \in \{10, 11, \dots, 20\}) = 11/20$.

    **2.** Chaque élève a une probabilité $p = 11/20$ d'avoir la moyenne, indépendamment des autres.

    Donc $X$ suit $\mathcal{B}(40, 11/20)$.

    $\mathbb{E}(X) = 40 \cdot 11/20 = 22$. $\mathbb{V}(X) = 40 \cdot 11/20 \cdot 9/20 = 198/20 = 9.9$.

---

## :material-numeric-6-circle: Exercice 6 — QCM aléatoire (Bernoulli → binomiale)

<span class="diff diff-moyen">🟡 Moyen</span>

(TD3 ex 5.20)

QCM à 20 questions, $1$ point chacune. Un étudiant répond au hasard, $P(\text{juste}) = 1/3$, réponses indépendantes.

**1.** Pour la question $k$, $X_k$ = note. Loi de $X_k$ ? Nom ? $\mathbb{E}, \mathbb{V}$ ?
**2.** $Y$ = note totale. Exprime $Y$ en fonction des $X_k$. Loi de $Y$ ?
**3.** Probabilité d'avoir la moyenne $Y \geq 10$ ?

??? success "Voir la correction"
    **1.** $X_k \in \{0, 1\}$ avec $P(X_k = 1) = 1/3$. C'est une **Bernoulli** $\mathcal{B}(1/3)$.

    $\mathbb{E}(X_k) = 1/3$. $\mathbb{V}(X_k) = (1/3)(2/3) = 2/9$.

    **2.** $Y = \sum_{k=1}^{20} X_k$. Somme de 20 Bernoulli indépendantes de même paramètre $1/3$ ⟹ $Y \sim \mathcal{B}(20, 1/3)$.

    $\mathbb{E}(Y) = 20/3 \approx 6.67$. $\mathbb{V}(Y) = 20 \cdot 2/9 = 40/9$.

    $$ P(Y = i) = \binom{20}{i} (1/3)^i (2/3)^{20-i}. $$

    **3.** $P(Y \geq 10) = \sum_{i=10}^{20} \binom{20}{i} (1/3)^i (2/3)^{20-i}$. (Formule, calcul à la machine. Valeur ≈ 1.4%.)

---

## :material-numeric-7-circle: Exercice 7 — Variable centrée réduite

<span class="diff diff-dur">🔴 Niveau examen</span>

(TD3 ex 4.16)

Soit $X$ une VA d'espérance $\mu = \mathbb{E}(X)$ et écart-type $\sigma = \sigma(X) > 0$. On pose :

$$ \widehat{X} = \dfrac{X - \mu}{\sigma}. $$

Vérifie que $\mathbb{E}(\widehat{X}) = 0$ et $\mathbb{V}(\widehat{X}) = 1$.

??? success "Voir la correction"
    Par linéarité (avec $a = 1/\sigma$, $b = -\mu/\sigma$) :

    $\mathbb{E}(\widehat{X}) = \dfrac{1}{\sigma} \mathbb{E}(X) - \dfrac{\mu}{\sigma} = \dfrac{\mu - \mu}{\sigma} = 0$. ✅

    $\mathbb{V}(\widehat{X}) = \left(\dfrac{1}{\sigma}\right)^2 \mathbb{V}(X) = \dfrac{\sigma^2}{\sigma^2} = 1$. ✅

    **Pourquoi c'est utile** : en machine learning et stats, on **standardise** souvent les données ($\mu = 0, \sigma = 1$) avant d'appliquer un algo.

---

## :material-numeric-8-circle: Exercice 8 — Indépendance d'un couple de VA

<span class="diff diff-dur">🔴 Niveau examen</span>

(TD3 ex 4.17)

Jeu de 32 cartes. $X$ = nombre de dames obtenues, $Y$ = nombre de cœurs.

**1.** On tire **une** carte.
   a) Lois de $X$ et $Y$.
   b) Loi du couple $(X, Y)$ (tableau).
   c) $X$ et $Y$ sont-elles indépendantes ?

**2.** On tire **deux** cartes (simultanées).
   a) Lois de $X$ et $Y$.
   b) Tableau de la loi couple.
   c) $X$ et $Y$ sont-elles indépendantes ?

??? success "Voir la correction"
    **1.** Une carte.

    a) $X \in \{0, 1\}$ : $P(X=1) = 4/32 = 1/8$. $P(X=0) = 7/8$.
    $Y \in \{0, 1\}$ : $P(Y=1) = 8/32 = 1/4$. $P(Y=0) = 3/4$.

    b) Tableau du couple :

    | | $Y=0$ | $Y=1$ |
    |---|---|---|
    | $X=0$ | 21/32 (non-dame non-cœur) | 7/32 (cœur non-dame) |
    | $X=1$ | 3/32 (dame non-cœur) | 1/32 (dame de cœur) |

    c) Vérif : $P(X=0) P(Y=0) = (7/8)(3/4) = 21/32 = P(X=0, Y=0)$. ✅
    Idem pour les 3 autres cases. **Indépendantes**.

    **2.** Deux cartes (simultanées). $X, Y \in \{0, 1, 2\}$.

    a) Lois (hypergéométriques) :
    $P(X = k) = \dfrac{\binom{4}{k}\binom{28}{2-k}}{\binom{32}{2}}$, $P(Y = k) = \dfrac{\binom{8}{k}\binom{24}{2-k}}{\binom{32}{2}}$.

    Avec $\binom{32}{2} = 496$ :
    $P(X=0) = \binom{28}{2}/496 = 378/496$, $P(X=1) = 4 \cdot 28/496 = 112/496$, $P(X=2) = 6/496$.

    b) Tableau plus complexe (9 cases). On compte par couple $(X = i, Y = j)$ le nombre de mains.

    Par exemple $P(X=1, Y=1)$ : la main contient 1 dame ET 1 cœur. Soit la dame est de cœur (1 dame de cœur, l'autre carte parmi 31 sans cœur sans dame = 21) : $1 \times 21 / \binom{32}{2}$. Soit la dame n'est pas de cœur (3 dames non-cœur × 7 cœurs non-dame) : $3 \times 7 = 21$. Total : $42/496$.

    c) Pour montrer la non-indépendance, il suffit d'**une case** où la formule produit ≠ loi jointe. On constate que $P(X=1) P(Y=1) \neq P(X=1, Y=1)$. ⟹ **Pas indépendantes**.

    **Intuition** : avec 2 cartes, savoir qu'on a 1 dame change la proba d'avoir 1 cœur (effet de "sans remise").

---

## :material-check-circle-outline: Récap

- [ ] Loi, $\mathbb{E}, \mathbb{V}$ à partir d'un univers simple
- [ ] Linéarité de l'espérance et de la variance (avec coefficient $a^2$)
- [ ] Reconnaître **Bernoulli** vs **binomiale** vs **hypergéométrique** vs **uniforme**
- [ ] Standardisation $\widehat{X}$
- [ ] Vérifier l'indépendance d'un couple par le **tableau**

[:material-arrow-right-bold: Suite : exercices style examen](6_exos_examen.md)
