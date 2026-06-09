# Examen blanc — S2PA B3 EFDP — Mars 2024

> :material-clock-outline: **Durée recommandée** : 1h30, sans cours, en conditions réelles.
>
> :material-file-pdf-box: Source : `Documents/Maths/S2PA_2024_B3_COR_EFDP.pdf`.
>
> :material-information-outline: **Conseil** : fais d'abord l'examen en entier sur papier, puis déplie les corrections pour comparer.

---

## :material-pencil: Énoncé

### Exercice 1 — Ensembles et fonctions 1

Soient $E = \{1, 2, 3, 4\}$ et $F = \{2, 3, 4\}$.

**1.** Quel est le cardinal de $E \times F$ ?

**2.** A-t-on $E \times F = F \times E$ ? Pourquoi ?

**3.** On définit $f : E \times F \to \mathbb{N},\ (x, y) \mapsto x + y$.

a) Remplis le tableau de valeurs de $f$.
b) Détermine $f(E \times F)$, $f(\{(2,2), (1,3), (4,3)\})$, $f^{-1}(\{1\})$, $f^{-1}(\{6\})$.
c) Écris la définition de "$f$ injective de $E \times F$ vers $\mathbb{N}$". $f$ est-elle injective ?
d) Écris la définition de "$f$ surjective". $f$ est-elle surjective ?
e) Trouve $A \subset E \times F$ et $B \subset \mathbb{N}$ (chacun avec $\geq 2$ éléments) tels que $f : A \to B$ soit **injective non surjective**.
f) Trouve $A' \subset E \times F$ et $B' \subset \mathbb{N}$ ($\geq 2$ éléments) tels que $f : A' \to B'$ soit **surjective non injective**.

### Exercice 2 — Tableau de fonctions usuelles

Complète :

| | $\exp : \mathbb{R} \to \mathbb{R}$ | $\sin : [-\pi, \pi] \to \mathbb{R}$ |
|---|---|---|
| $f(\{0\})$ | | |
| $f(]0, \pi])$ | | |
| $f^{-1}(\{0\})$ | | |
| $f^{-1}(\{1\})$ | | |
| $f^{-1}(]-\infty, 0])$ | | |

### Exercice 3 — Fonction arctan

Soit $\tan : ]-\pi/2, \pi/2[ \to \mathbb{R}$, bijective. $\arctan$ = réciproque.

**1.** Domaine et image de $\arctan$.
**2.** Expression de $\arctan'$.
**3.** Remplis :

| $\alpha$ | $0$ | $\pi/4$ | $\pi/3$ | $-\pi/3$ | $\pi/6$ | $-\pi/4$ | $\arctan(x)$ |
|---|---|---|---|---|---|---|---|
| $\tan(\alpha)$ | | | | | | | $x$ |

### Exercice 4 — Dénombrement 1

**1.** Soient $(a, b) \in \mathbb{R}^2$, $n \in \mathbb{N}^*$. Rappelle la formule du binôme de Newton.

**2.** $E$ ensemble à $n$ éléments.
a) Pour $k \in [\![0, n]\!]$, combien de sous-ensembles à $k$ éléments ?
b) En utilisant Newton, calcule $|\mathcal{P}(E)|$.

### Exercice 5 — Dénombrement 2

400 étudiants en 10 classes de 40. Échantillon de 40.

**1.** Nombre de sélections sans contrainte ?
**2.** Si on impose **autant d'étudiants par classe** ?
**3.** Si on impose les **2 délégués par classe** + reste équitable ?
**4.** Parmi 400, 50 filles. Échantillon **paritaire** ?

### Exercice 6 — Probabilités conditionnelles

40% des élèves apprennent leur cours. Parmi eux, 80% valident. Sinon, 20%.

$C$ = apprendre, $V$ = valider.

**1.** Traduis l'énoncé.
**2.** $P(V)$ pour un élève au hasard ?
**3.** Sachant que l'élève a validé, $P$ qu'il ait appris ?
**4.** Proportion minimale $p$ pour que 60% valident ?

### Exercice 7 — Variables aléatoires

Urne : 3 rouges, 2 vertes. Tirage **successif sans remise** de 3.

**1.** Arbre pondéré des issues.
**2.** $X$ = nombre de vertes.
a) Loi.
b) $\mathbb{E}, \mathbb{V}$.
**3.** $Y = 1$ si au moins une verte, 0 sinon.
a) Exprime $Y = 1$ en fonction de $X$.
b) Loi de $Y$.
c) $\mathbb{E}, \mathbb{V}$.
**4.** On répète 10 fois avec remise. $Z$ = nombre de fois où on a obtenu au moins une verte.
a) $Z(\Omega)$.
b) $P(Z = k)$ et nom de la loi.
c) $\mathbb{E}, \mathbb{V}$.

---

## :material-check-bold: Corrigés

??? success "Correction Exercice 1"
    1. $|E \times F| = 12$.

    2. Non. $(1, 2) \in E \times F$ mais $(1, 2) \notin F \times E$.

    3.

    a) Tableau : $f((x, y)) = x + y$.

    | $(x,y)$ | $(1,2)$ | $(1,3)$ | $(1,4)$ | $(2,2)$ | $(2,3)$ | $(2,4)$ |
    |---|---|---|---|---|---|---|
    | $f$ | 3 | 4 | 5 | 4 | 5 | 6 |
    | $(x,y)$ | $(3,2)$ | $(3,3)$ | $(3,4)$ | $(4,2)$ | $(4,3)$ | $(4,4)$ |
    | $f$ | 5 | 6 | 7 | 6 | 7 | 8 |

    b) $f(E \times F) = \{3, 4, 5, 6, 7, 8\}$. $f(\{(2,2),(1,3),(4,3)\}) = \{4, 7\}$. $f^{-1}(\{1\}) = \varnothing$. $f^{-1}(\{6\}) = \{(2,4), (3,3), (4,2)\}$.

    c) Définition : $\forall ((x,y),(x',y')) \in (E \times F)^2$, $f((x,y)) = f((x',y')) \Rightarrow (x,y) = (x',y')$.
    $f$ n'est pas injective : $f((1,3)) = f((2,2)) = 4$ et $(1,3) \neq (2,2)$.

    d) Définition : $\forall n \in \mathbb{N},\ \exists (x,y) \in E \times F,\ n = f((x,y))$.
    Non surjective : $10 \in \mathbb{N}$ n'a pas d'antécédent (somme max = 8).

    e) $A = \{(1,2), (1,3), (1,4)\}$, $B = \mathbb{N}$. ✅

    f) $A' = E \times F$, $B' = \{3, 4, 5, 6, 7, 8\}$. ✅

??? success "Correction Exercice 2"
    | | $\exp$ | $\sin$ sur $[-\pi, \pi]$ |
    |---|---|---|
    | $f(\{0\})$ | $\{1\}$ | $\{0\}$ |
    | $f(]0, \pi])$ | $]1, e^\pi]$ | $[0, 1]$ |
    | $f^{-1}(\{0\})$ | $\varnothing$ | $\{-\pi, 0, \pi\}$ |
    | $f^{-1}(\{1\})$ | $\{0\}$ | $\{\pi/2\}$ |
    | $f^{-1}(]-\infty, 0])$ | $\varnothing$ | $[-\pi, 0] \cup \{\pi\}$ |

??? success "Correction Exercice 3"
    1. $D_{\arctan} = \mathbb{R}$, image = $]-\pi/2, \pi/2[$.

    2. $\arctan'(x) = \dfrac{1}{1 + x^2}$.

    3. Tableau :

    | $\alpha$ | $0$ | $\pi/4$ | $\pi/3$ | $-\pi/3$ | $\pi/6$ | $-\pi/4$ |
    |---|---|---|---|---|---|---|
    | $\tan$ | $0$ | $1$ | $\sqrt{3}$ | $-\sqrt{3}$ | $1/\sqrt{3}$ | $-1$ |

??? success "Correction Exercice 4"
    1. $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$.

    2.

    a) $\binom{n}{k}$ sous-ensembles à $k$ éléments.

    b) $\mathcal{P}(E) = \bigsqcup_k \mathcal{P}_k(E)$, donc
    $|\mathcal{P}(E)| = \sum_{k=0}^n \binom{n}{k} = \sum_{k=0}^n \binom{n}{k} 1^k 1^{n-k} = (1+1)^n = 2^n$.

??? success "Correction Exercice 5"
    1. $\binom{400}{40}$.

    2. 4 élèves/classe : $\binom{40}{4}^{10}$.

    3. 2 délégués fixés + 2 autres par classe : $\binom{38}{2}^{10}$.

    4. 20 filles parmi 50, 20 garçons parmi 350 : $\binom{50}{20} \times \binom{350}{20}$.

??? success "Correction Exercice 6"
    1. $P(C) = 0.4$, $P(V \mid C) = 0.8$, $P(V \mid \overline{C}) = 0.2$.

    2. $P(V) = 0.8 \cdot 0.4 + 0.2 \cdot 0.6 = 0.44 = 11/25$.

    3. Bayes : $P(C \mid V) = \dfrac{0.8 \cdot 0.4}{0.44} = \dfrac{8}{11}$.

    4. $0.6 p + 0.2 \geq 0.6 \Rightarrow p \geq 2/3$.

??? success "Correction Exercice 7"
    1. Arbre à 3 niveaux (RR → R/V puis encore R/V).

    2.

    a) $X \in \{0, 1, 2\}$.
    $P(X=0) = P(RRR) = \dfrac{3 \cdot 2 \cdot 1}{5 \cdot 4 \cdot 3} = \dfrac{1}{10}$.
    $P(X=1) = 3 \cdot \dfrac{3 \cdot 2 \cdot 2}{5 \cdot 4 \cdot 3} = \dfrac{3}{5}$.
    $P(X=2) = 3 \cdot \dfrac{3 \cdot 2 \cdot 1}{5 \cdot 4 \cdot 3} = \dfrac{3}{10}$.

    b) $\mathbb{E}(X) = 6/5$. $\mathbb{V}(X) = 9/25$.

    3.

    a) $Y = 1 \iff X \geq 1$.

    b) $P(Y=1) = 9/10$, $P(Y=0) = 1/10$. $Y \sim \mathcal{B}(9/10)$ Bernoulli.

    c) $\mathbb{E}(Y) = 9/10$, $\mathbb{V}(Y) = 9/100$.

    4.

    a) $Z(\Omega) = [\![0, 10]\!]$.

    b) $Z \sim \mathcal{B}(10, 9/10)$ binomiale.
    $P(Z = k) = \binom{10}{k} (9/10)^k (1/10)^{10-k}$.

    c) $\mathbb{E}(Z) = 9$, $\mathbb{V}(Z) = 9/10$.

---

[:material-arrow-right-bold: Examen 2026](sujet_2026.md)
