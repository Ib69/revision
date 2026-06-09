# Exercices — Style examen

> :material-target: Exos calibrés sur les sujets B3 2024 et 2026 (Exercice 1, 2, 3 des examens). On combine ensembles + fonctions.

---

## :material-numeric-1-circle: Exercice 1 — Cartésien, image, injectivité, surjectivité

<span class="diff diff-dur">🔴 Niveau examen</span>

Soient $E = \{1, 2, 3, 4\}$ et $F = \{2, 3, 4\}$.

**1.** Quel est le cardinal de $E \times F$ ?

**2.** A-t-on $E \times F = F \times E$ ? Pourquoi ?

**3.** On définit $f : E \times F \to \mathbb{N},\ (x, y) \mapsto x + y$.

a) Remplis le tableau de valeurs de $f$ pour tous les couples $(x, y) \in E \times F$.
b) Détermine $f(E \times F)$, $f(\{(2, 2), (1, 3), (4, 3)\})$, $f^{-1}(\{1\})$, $f^{-1}(\{6\})$.
c) Écris la définition de "$f$ injective de $E \times F$ vers $\mathbb{N}$". $f$ est-elle injective ? Justifie.
d) Écris la définition de "$f$ surjective". $f$ est-elle surjective ? Justifie.
e) Trouve $A \subset E \times F$ et $B \subset \mathbb{N}$ (avec $\geq 2$ éléments chacun) tels que $f : A \to B$ soit **injective non surjective**.
f) Trouve $A' \subset E \times F$ et $B' \subset \mathbb{N}$ (avec $\geq 2$ éléments chacun) tels que $f : A' \to B'$ soit **surjective non injective**.

??? success "Voir la correction"
    **1.** $|E \times F| = |E| \times |F| = 4 \times 3 = 12$.

    **2.** Non. $(1, 2) \in E \times F$ (car $1 \in E, 2 \in F$) mais $(1, 2) \notin F \times E$ (car $1 \notin F$).

    **3.**

    a) Tableau (somme $x + y$) :

    | $(x, y)$ | $f$ | | $(x, y)$ | $f$ | | $(x, y)$ | $f$ |
    |---|---|---|---|---|---|---|---|
    | $(1,2)$ | 3 | | $(2,2)$ | 4 | | $(3,2)$ | 5 |
    | $(1,3)$ | 4 | | $(2,3)$ | 5 | | $(3,3)$ | 6 |
    | $(1,4)$ | 5 | | $(2,4)$ | 6 | | $(3,4)$ | 7 |
    | $(4,2)$ | 6 | | $(4,3)$ | 7 | | $(4,4)$ | 8 |

    b)
    - $f(E \times F) = \{3, 4, 5, 6, 7, 8\}$.
    - $f(\{(2, 2), (1, 3), (4, 3)\}) = \{4, 4, 7\} = \{4, 7\}$.
    - $f^{-1}(\{1\}) = \varnothing$ (la somme minimale est $1+2=3$).
    - $f^{-1}(\{6\}) = \{(2, 4), (3, 3), (4, 2)\}$.

    c) Définition : $\forall ((x,y), (x',y')) \in (E \times F)^2,\ f((x,y)) = f((x',y')) \Rightarrow (x,y) = (x',y')$.

    Non injective : $f((1,3)) = f((2,2)) = 4$ et $(1,3) \neq (2,2)$.

    d) Définition : $\forall n \in \mathbb{N},\ \exists (x,y) \in E \times F,\ n = f((x,y))$.

    Non surjective : $10 \in \mathbb{N}$ n'a pas d'antécédent (la somme maximale est $4+4=8$).

    e) Pour rendre $f$ injective : on prend $A$ avec **pas de doublons** dans les sommes.
       Exemple : $A = \{(1,2), (1,3), (1,4)\}$ → images $\{3, 4, 5\}$, toutes distinctes.
       Et $B = \mathbb{N}$ (gros, donc pas surjectif puisque seuls 3, 4, 5 sont atteints).

    f) Pour rendre $f$ surjective : on prend $A' = E \times F$ et on restreint $B'$ à $f(E \times F)$.
       Donc $A' = E \times F$ et $B' = \{3, 4, 5, 6, 7, 8\}$.
       Non injective (déjà vu).

---

## :material-numeric-2-circle: Exercice 2 — Fonction par morceaux et image

<span class="diff diff-dur">🔴 Niveau examen</span>

Soit $f : [\![0, 6]\!] \to \mathbb{N}$ définie par :

$$ f(n) = \begin{cases} n/2 & \text{si } n \text{ est pair} \\ n + 1 & \text{si } n \text{ est impair} \end{cases} $$

**1.** Remplis le tableau de valeurs de $f$.

**2.** Écris la définition de "$f$ injective de $[\![0, 6]\!]$ vers $\mathbb{N}$" dans ce contexte. $f$ est-elle injective ? Justifie.

**3.** Écris la définition de "$f$ surjective" dans ce contexte. Explique pourquoi $f$ n'est pas surjective. Donne deux ensembles $I \subset [\![0, 6]\!]$ et $J \subset \mathbb{N}$ ($\geq 2$ éléments chacun) tels que $f : I \to J$ soit surjective.

??? success "Voir la correction"
    **1.** Tableau :

    | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
    |---|---|---|---|---|---|---|---|
    | $f(n)$ | 0 | 2 | 1 | 4 | 2 | 6 | 3 |

    **2.** Injectivité : $\forall (n, p) \in [\![0, 6]\!]^2,\ f(n) = f(p) \Rightarrow n = p$.

    Non injective : $f(1) = 2 = f(4)$ et $1 \neq 4$.

    **3.** Surjectivité : $\forall m \in \mathbb{N},\ \exists n \in [\![0, 6]\!],\ m = f(n)$.

    Non surjective : par exemple $5 \in \mathbb{N}$ n'apparaît pas dans le tableau, pas d'antécédent.

    Pour rendre surjective : on restreint $J$ à l'image $f([\![0, 6]\!]) = \{0, 1, 2, 3, 4, 6\}$.
    Avec $I = [\![0, 6]\!]$ et $J = \{0, 1, 2, 3, 4, 6\}$, $f$ est surjective.

---

## :material-numeric-3-circle: Exercice 3 — Tableau d'images pour ln et sin

<span class="diff diff-dur">🔴 Niveau examen</span>

**1.** Dessine $x \mapsto \ln(x)$ sur $]0, +\infty[$ et $x \mapsto \sin(x)$ sur $[0, 2\pi]$.

**2.** Remplis le tableau :

| | $\ln : ]0, +\infty[ \to \mathbb{R}$ | $\sin : [0, 2\pi] \to \mathbb{R}$ |
|---|---|---|
| $f(\{\pi/3\})$ | | |
| $f([\pi/4, \pi])$ | | |
| $f^{-1}(\{0\})$ | | |
| $f^{-1}(\{-2\})$ | | |
| $f^{-1}([0, 1/2])$ | | |

??? success "Voir la correction"
    **1.** $\ln$ : croissante, $-\infty$ en $0^+$, $+\infty$ en $+\infty$, passe par $(1, 0)$.
    $\sin$ sur $[0, 2\pi]$ : monte de 0 à 1 en $\pi/2$, redescend à 0 en $\pi$, descend à $-1$ en $3\pi/2$, remonte à 0 en $2\pi$.

    **2.**

    | | $\ln$ | $\sin$ sur $[0, 2\pi]$ |
    |---|---|---|
    | $f(\{\pi/3\})$ | $\{\ln(\pi/3)\}$ | $\{\sqrt{3}/2\}$ |
    | $f([\pi/4, \pi])$ | $[\ln(\pi/4), \ln(\pi)]$ | $[0, 1]$ |
    | $f^{-1}(\{0\})$ | $\{1\}$ | $\{0, \pi, 2\pi\}$ |
    | $f^{-1}(\{-2\})$ | $\{e^{-2}\}$ | $\varnothing$ (car $\sin \geq -1$) |
    | $f^{-1}([0, 1/2])$ | $]1, e^{1/2}]$ ($= ]1, \sqrt{e}]$) | $[0, \pi/6] \cup [5\pi/6, \pi] \cup \{2\pi\}$ |

    **Explication pour la dernière case (sin)** : on cherche où $0 \leq \sin(x) \leq 1/2$ sur $[0, 2\pi]$.
    Sur $[0, \pi]$ : $\sin \geq 0$ partout, et $\sin \leq 1/2$ ⟺ $x \in [0, \pi/6] \cup [5\pi/6, \pi]$.
    Sur $[\pi, 2\pi]$ : $\sin \leq 0$, donc $\sin \in [0, 1/2]$ uniquement aux points où $\sin = 0$, c'est-à-dire $x = \pi$ (déjà compté) et $x = 2\pi$.

---

## :material-check-circle-outline: Ce qu'il faut savoir gérer en examen

- [ ] Construire un tableau de valeurs proprement
- [ ] Énoncer correctement les définitions formelles (avec quantificateurs)
- [ ] Ajuster $E$ et $F$ pour rendre injective / surjective / bijective
- [ ] Lire les images directes/réciproques sur les fonctions usuelles **sans erreur sur les bornes**
- [ ] Soigner la rédaction : citer la définition, puis vérifier avec un contre-exemple ou un raisonnement

[:material-arrow-right-bold: Partie suivante : Dénombrement](../3_denombrement/1_cours.md)
