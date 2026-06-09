# Examen blanc — S2PA B3 EFDP — Mars 2026

> :material-clock-outline: **Durée recommandée** : 1h30, sans cours.
>
> :material-file-pdf-box: Source : `Documents/Maths/S2PA_B3_COR_Exam_EFDP.pdf`.

---

## :material-pencil: Énoncé

### Exercice 1 — Ensembles

**1.** Écris en extension :
a) $A = \{n \in \mathbb{N},\ \sqrt{2} < n < 2\pi\}$
b) $B = \{x \in [0, 20],\ \exists n \in \mathbb{N},\ x = n^2\}$

**2.** Écris en notation ensembliste :
a) $E$ : entiers naturels pairs $\leq 200$.
b) $F$ : fonctions réelles paires.

**3.** Diagramme de Venn avec $E, A, B, C \subset E$ et points $a, b, \dots, k$. Remplis les pointillés (assertions justes, n'utilise pas $E$ tout seul) :

| Assertion |
|---|
| $\cdots \subset A \cup B$ |
| $\cdots \in B \times C$ |
| $\cdots \in \mathcal{P}(A)$ |

**4.** Soient $|A| = 6, |B| = 7, |A \cup B| = 8$. En citant la formule, calcule :
$|A \cap B|$, $|A \times B|$, $|\mathcal{P}(A)|$.

### Exercice 2 — Ensembles et fonctions

**1.** Soit $f : [\![0, 6]\!] \to \mathbb{N}$ définie par $f(n) = n/2$ si $n$ pair, $n + 1$ si $n$ impair.

a) Tableau de valeurs.
b) Définition de "$f$ injective". $f$ est-elle injective ?
c) Définition de "$f$ surjective". $f$ est-elle surjective ? Donne $I, J$ pour rendre surjective.

**2.**
a) Dessine $\ln$ sur $]0, +\infty[$.
b) Dessine $\sin$ sur $[0, 2\pi]$.
c) Complète :

| | $\ln :\ ]0, +\infty[\to \mathbb{R}$ | $\sin :\ [0, 2\pi] \to \mathbb{R}$ |
|---|---|---|
| $f(\{\pi/3\})$ | | |
| $f([\pi/4, \pi])$ | | |
| $f^{-1}(\{0\})$ | | |
| $f^{-1}(\{-2\})$ | | |
| $f^{-1}([0, 1/2])$ | | |

### Exercice 3 — Dénombrement 1

Justine dessine $n$ cases. 2 feutres (bleu, rouge). Elle forme un "ruban".
- **Choix 1** : colorier une par une.
- **Choix 2** : choisir $k$ cases à colorier en bleu, le reste en rouge, pour tous les $k$.

**1.** Combien de rubans avec le choix 1 ?
**2.** Combien avec le choix 2 ?
**3.** Égalité ?
**4.** Redémontrer par Newton.

### Exercice 4 — Cours

Soient $E, F$ ensembles finis, $f : E \to F$ surjective, $|E| = n$, $|F| = p$.

**1.** Quelle inégalité entre $n$ et $p$ ?
**2.** Cas où $n = p$ : montre que $f$ est bijective.

### Exercice 5 — Dénombrement 2

Urne : 5 bleues numérotées 1-5, 4 blanches numérotées 1-4, 3 rouges numérotées 1-3.

**1.** Tirage **simultané** de 3 boules.
a) Nombre de tirages.
b) Tirages avec 3 boules **même couleur**.
c) Tirages avec **au moins une** bleue.
d) Tirages avec **au plus une** boule à numéro pair.

**2.** On garde les 5 bleues. Tirage **successif avec remise** de 4.
a) Nombre de tirages.
b) Au moins un impair.
c) Le tirage donne 1-2-1-5 : combien de nombres possibles ?

### Exercice 6 — Probabilités conditionnelles

EPITA S2 : $P(\text{soutien } S) = 10\%$. Si soutien, $P(V \mid S) = 80\%$. Sinon, $P(V \mid \overline{S}) = 30\%$.

**1.** Traduis.
**2.** $P(V)$ ?
**3.** $P(S \mid V)$ ?

### Exercice 7 — Cours

Soit $X$ une VA finie. $X(\Omega) = \{x_1, \dots, x_n\}$.

**1.** Définitions de l'espérance et de la variance.
**2.** Pour $(a, b) \in \mathbb{R}^2$, exprime $\mathbb{E}(aX + b)$.
**3.** Démontre.

### Exercice 8 — Variables aléatoires

Dé rouge + bleu équilibrés (1-6). Règles : deux 5 → gain 3€ ; un 5 → 2€ ; sinon → perte 1€.
$X$ = gain.

**1.** Loi de $X$.
**2.** $\mathbb{E}(X)$.
**3.** $\mathbb{V}(X)$.
**4.** Loi, espérance, variance de $Y = 2X + 1$.
**5.** Nouveau jeu : gain 1€ si somme des dés > 3, sinon 0. On joue 10 fois.
a) Pour $i$, loi de $Y_i$ ?
b) $Z = Y_1 + \dots + Y_{10}$. Quelle loi suit $Z$ ?
c) $\mathbb{E}(Z), \mathbb{V}(Z)$.

---

## :material-check-bold: Corrigés

??? success "Correction Exercice 1"
    1.

    a) $A = \{2, 3, 4, 5, 6\}$ (car $\sqrt{2} \approx 1.41$, $2\pi \approx 6.28$).

    b) $B = \{0, 1, 4, 9, 16\}$.

    2.

    a) $E = \{n \in [\![0, 200]\!],\ \exists p \in \mathbb{N},\ n = 2p\}$.

    b) $F = \{f : \mathbb{R} \to \mathbb{R},\ \forall x \in \mathbb{R},\ f(-x) = f(x)\}$.

    3. Plusieurs réponses possibles (dépend du diagramme). Vérifie le **type** : $\subset$ → ensemble à gauche, $\in$ → élément à gauche.

    4. Formules :
    - $|A \cap B| = |A| + |B| - |A \cup B| = 6 + 7 - 8 = 5$.
    - $|A \times B| = 6 \times 7 = 42$.
    - $|\mathcal{P}(A)| = 2^6 = 64$.

??? success "Correction Exercice 2"
    1.

    a) Tableau :

    | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
    |---|---|---|---|---|---|---|---|
    | $f(n)$ | 0 | 2 | 1 | 4 | 2 | 6 | 3 |

    b) Définition injective : $\forall (n, p) \in [\![0,6]\!]^2,\ f(n) = f(p) \Rightarrow n = p$.
    Non injective : $f(1) = 2 = f(4)$.

    c) Définition surjective : $\forall m \in \mathbb{N},\ \exists n \in [\![0, 6]\!],\ m = f(n)$.
    Non surjective : $5 \in \mathbb{N}$ sans antécédent.
    Pour la rendre surjective : $I = [\![0, 6]\!]$, $J = \{0, 1, 2, 3, 4, 6\}$.

    2. (a, b) : dessins. c) Tableau :

    | | $\ln$ | $\sin$ sur $[0, 2\pi]$ |
    |---|---|---|
    | $f(\{\pi/3\})$ | $\{\ln(\pi/3)\}$ | $\{\sqrt{3}/2\}$ |
    | $f([\pi/4, \pi])$ | $[\ln(\pi/4), \ln \pi]$ | $[0, 1]$ |
    | $f^{-1}(\{0\})$ | $\{1\}$ | $\{0, \pi, 2\pi\}$ |
    | $f^{-1}(\{-2\})$ | $\{e^{-2}\}$ | $\varnothing$ |
    | $f^{-1}([0, 1/2])$ | $]1, \sqrt{e}]$ | $[0, \pi/6] \cup [5\pi/6, \pi] \cup \{2\pi\}$ |

??? success "Correction Exercice 3"
    1. Choix 1 : $2^n$.

    2. Choix 2 : $\sum_{k=0}^{n} \binom{n}{k}$.

    3. Égalité $2^n = \sum_{k=0}^{n} \binom{n}{k}$.

    4. Newton avec $x = y = 1$ :
    $2^n = (1+1)^n = \sum_{k=0}^n \binom{n}{k} 1^k 1^{n-k}$.

??? success "Correction Exercice 4"
    1. Surjection ⟹ chaque élément de $F$ est atteint par au moins un élément de $E$. Donc $|E| \geq |F|$, soit $n \geq p$.

    2. Si $n = p$ : la surjection $f : E \to F$ entre ensembles **finis de même cardinal** est automatiquement bijective.

    Preuve : si $f$ n'était pas injective, deux éléments de $E$ auraient la même image, donc $|f(E)| < n$. Mais comme $f$ est surjective, $f(E) = F$, soit $|f(E)| = p = n$. Contradiction. Donc $f$ est injective et donc bijective.

??? success "Correction Exercice 5"
    1.

    a) $\binom{12}{3} = 220$.

    b) $\binom{5}{3} + \binom{4}{3} + \binom{3}{3} = 10 + 4 + 1 = 15$.

    c) $\binom{12}{3} - \binom{7}{3} = 220 - 35 = 185$.

    d) "Au plus une paire" = "0 paires" + "1 paire". Paires totales : 5 (2 et 4 dans bleues, 2 et 4 dans blanches, 2 dans rouges). Impaires : 7.
    $\binom{7}{3} + \binom{5}{1}\binom{7}{2} = 35 + 105 = 140$.

    2.

    a) $5^4 = 625$.

    b) Impaires parmi 5 : 1, 3, 5 → 3 boules. Paires : 2, 4 → 2 boules.
    "Au moins un impair" = total – "aucun impair" = $625 - 2^4 = 625 - 16 = 609$.

    c) Anagrammes de 1-2-1-5 (avec le 1 répété) : $4!/2! = 12$.

??? success "Correction Exercice 6"
    1. $P(S) = 1/10$, $P(V \mid S) = 4/5$, $P(V \mid \overline{S}) = 3/10$.

    2. Totales : $P(V) = \dfrac{4}{5} \cdot \dfrac{1}{10} + \dfrac{3}{10} \cdot \dfrac{9}{10} = \dfrac{8 + 27}{100} = \dfrac{35}{100} = \dfrac{7}{20}$.

    3. Bayes : $P(S \mid V) = \dfrac{P(V \mid S) P(S)}{P(V)} = \dfrac{(4/5)(1/10)}{7/20} = \dfrac{8}{35}$.

??? success "Correction Exercice 7"
    1. $\mathbb{E}(X) = \sum x_k P(X = x_k)$. $\mathbb{V}(X) = \mathbb{E}(X^2) - \mathbb{E}(X)^2 = \sum (x_k - \mathbb{E}(X))^2 P(X = x_k)$.

    2. $\mathbb{E}(aX + b) = a \mathbb{E}(X) + b$.

    3. Voir [Probabilités — Exos VA — Ex 2 d'examen](../4_probabilites/6_exos_examen.md#exercice-2-linearite-cours-dexamen).

??? success "Correction Exercice 8"
    1. $X(\Omega) = \{-1, 2, 3\}$.
    - $P(X = 3) = 1/36$ (deux 5).
    - $P(X = 2) = 10/36$ (un seul 5 sur les deux dés).
    - $P(X = -1) = 25/36$ (aucun 5).

    2. $\mathbb{E}(X) = 3 \cdot 1/36 + 2 \cdot 10/36 - 1 \cdot 25/36 = -2/36 = -1/18$.

    3. $\mathbb{E}(X^2) = 9/36 + 40/36 + 25/36 = 74/36 = 37/18$.
    $\mathbb{V}(X) = 37/18 - 1/324 = (37 \cdot 18 - 1)/324 = 665/324$.

    4. $Y = 2X + 1$. $Y(\Omega) = \{-1, 5, 7\}$. Mêmes probas que pour $X$.
    $\mathbb{E}(Y) = 2 \cdot (-1/18) + 1 = -1/9 + 1 = 8/9$.
    $\mathbb{V}(Y) = 4 \mathbb{V}(X) = 4 \cdot 665/324 = 2660/324 = 665/81$.

    (Le corrigé officiel donne $1330/81$ — c'est $\mathbb{V}(Y) = 4 \times 665/324 = 2660/324$ qui se simplifie en $665/81$. Le corrigé officiel semble avoir un facteur 2 d'écart. À vérifier.)

    5.

    a) Sommes $\leq 3$ : $(1,1), (1,2), (2,1)$ → 3 cas / 36. Donc $P(\text{somme} > 3) = 33/36 = 11/12$.
    $Y_i \sim \mathcal{B}(11/12)$ (Bernoulli).

    b) $Z = \sum Y_i$, somme de 10 Bernoulli indépendantes de même $p$ ⟹ $Z \sim \mathcal{B}(10, 11/12)$ binomiale.

    c) $\mathbb{E}(Z) = 10 \cdot 11/12 = 110/12 = 55/6$.
    $\mathbb{V}(Z) = 10 \cdot 11/12 \cdot 1/12 = 110/144 = 55/72$.

---

## :material-trophy-outline: Et après ?

Si tu as bien tenu sur cet examen et celui de [2024](sujet_2024.md), tu es **prêt pour ton examen B3**.

Sinon, repère les exos qui t'ont posé problème et **reviens drill** sur la section correspondante :

- [Cours Ensembles](../1_ensembles/1_cours.md)
- [Cours Fonctions](../2_fonctions/1_cours.md)
- [Cours Dénombrement](../3_denombrement/1_cours.md)
- [Cours Probabilités](../4_probabilites/1_cours.md)

Bonne chance ! :four_leaf_clover:
