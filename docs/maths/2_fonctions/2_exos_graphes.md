# Exercices — Fonctions par graphes

> :material-book-open-page-variant: Cours utile : [Fonctions — sections 2 et 3](1_cours.md).
>
> **Convention de notation** : une fonction "donnée par graphe" est définie par un dessin de flèches entre deux paquets de points. On note les images en lisant les flèches.

---

## :material-numeric-1-circle: Exercice 1 — Reconnaître une fonction

<span class="diff diff-facile">🟢 Facile</span>

Parmi les trois "graphes" suivants (flèches entre éléments de $E$ et $F$), lesquels représentent une **fonction** de $E$ vers $F$ ?

**Graphe 1** : tous les éléments de $E$ ont **exactement une** flèche sortante.
**Graphe 2** : un élément $a \in E$ n'a **aucune** flèche sortante.
**Graphe 3** : un élément $c \in E$ a **deux** flèches sortantes vers $F$.

??? success "Voir la correction"
    **Définition rappel** : une fonction associe à **chaque** élément de $E$ **un unique** élément de $F$.

    - **Graphe 1** : ✅ chaque élément a une flèche, c'est une fonction.
    - **Graphe 2** : ❌ $a$ n'a pas d'image, ce n'est pas une fonction sur tout $E$.
    - **Graphe 3** : ❌ $c$ a deux images, ce n'est pas une fonction (ambiguïté).

    **Réflexe** : pour reconnaître une fonction, regarde **le départ** : chaque point doit avoir **exactement une** flèche sortante.

---

## :material-numeric-2-circle: Exercice 2 — Calculer $f(A)$ et $f^{-1}(B)$

<span class="diff diff-facile">🟢 Facile</span>

Soit $f : \{a, b, c, d\} \to \{1, 2, 3, 4, 5\}$ donnée par :

| $x$ | $a$ | $b$ | $c$ | $d$ |
|---|---|---|---|---|
| $f(x)$ | $2$ | $4$ | $2$ | $3$ |

Calcule :

a) $f(\{a, b, c\})$
b) $f(\{a, b, c, d\})$
c) $f^{-1}(\{2, 3\})$
d) $f^{-1}(\{1, 5\})$

??? success "Voir la correction"
    a) $f(\{a, b, c\}) = \{f(a), f(b), f(c)\} = \{2, 4, 2\} = \{2, 4\}$.
       (On ne répète pas un élément dans un ensemble.)

    b) $f(\{a, b, c, d\}) = \{2, 4, 3\} = \{2, 3, 4\}$.

    c) $f^{-1}(\{2, 3\})$ = "antécédents de 2 ou de 3". On regarde le tableau :
       $a, c$ donnent 2 ; $d$ donne 3. Donc $f^{-1}(\{2, 3\}) = \{a, c, d\}$.

    d) $f^{-1}(\{1, 5\}) = \varnothing$ (ni 1 ni 5 ne sont images).

    **Méthode-clé** :
    - $f(A)$ : on **applique $f$ à chaque élément de $A$** et on rassemble les résultats.
    - $f^{-1}(B)$ : on **cherche dans $E$** ceux qui tombent dans $B$.

---

## :material-numeric-3-circle: Exercice 3 — Construire un graphe vérifiant des contraintes

<span class="diff diff-moyen">🟡 Moyen</span>

Pour chacune des propriétés suivantes, dessine (ou décris) le graphe d'une fonction $f : [\![1, 4]\!] \to [\![1, 5]\!]$ qui la vérifie.

a) $f([\![1, 4]\!]) = \{1, 4\}$
b) $f^{-1}(\{3, 4\}) = \{1, 2\}$
c) $f(\{1, 2, 3\}) = \{3\}$ et $f^{-1}(\{3, 5\}) = \{1, 2, 3\}$
d) $f^{-1}(\{2\}) = \{2, 3\}$ et $f(\{1, 2\}) = \{2, 5\}$

??? success "Voir la correction"
    Plusieurs réponses sont possibles. En voici une par question.

    a) $f(1) = 1, f(2) = 4, f(3) = 1, f(4) = 4$. L'image est $\{1, 4\}$. ✅

    b) On veut que **seuls** 1 et 2 aient pour image 3 ou 4.
       Exemple : $f(1) = 3, f(2) = 4, f(3) = 1, f(4) = 2$.

    c) $f(\{1,2,3\}) = \{3\}$ veut dire $f(1) = f(2) = f(3) = 3$.
       $f^{-1}(\{3, 5\}) = \{1, 2, 3\}$ veut dire qu'aucun autre antécédent n'arrive sur 3 ou 5. Donc $f(4) \neq 3$ et $f(4) \neq 5$.
       Exemple : $f(1) = f(2) = f(3) = 3, f(4) = 1$.

    d) $f^{-1}(\{2\}) = \{2, 3\}$ veut dire $f(2) = f(3) = 2$ et personne d'autre n'a image 2.
       $f(\{1, 2\}) = \{2, 5\}$ veut dire $\{f(1), f(2)\} = \{2, 5\}$. Comme $f(2) = 2$, on a $f(1) = 5$.
       Reste $f(4)$ : doit être $\neq 2$. Disons $f(4) = 1$.
       Vérification : $f(1) = 5, f(2) = 2, f(3) = 2, f(4) = 1$. ✅

    **Méthode** : décortique chaque condition une par une, vois ce qu'elle **impose** sur les images, et complète librement les éléments restants.

---

## :material-numeric-4-circle: Exercice 4 — Image directe vs image réciproque

<span class="diff diff-moyen">🟡 Moyen</span>

Soit $f : E \to F$ une fonction et $A \subset E$, $B \subset F$.

**1.** Démontre que $A \subset f^{-1}(f(A))$.

**2.** Donne un exemple où l'inclusion est **stricte** (pas l'égalité).

**3.** Démontre que $f(f^{-1}(B)) \subset B$.

??? success "Voir la correction"
    **1.** Soit $x \in A$. Alors $f(x) \in f(A)$ (par définition de l'image directe).
    Donc $x$ est un antécédent d'un élément de $f(A)$, ce qui veut dire $x \in f^{-1}(f(A))$.

    Conclusion : $A \subset f^{-1}(f(A))$. ✅

    **2.** Prends $f : \mathbb{R} \to \mathbb{R},\ x \mapsto x^2$ et $A = \{1\}$.
    $f(A) = \{1\}$, et $f^{-1}(\{1\}) = \{-1, 1\}$.
    Donc $A = \{1\} \subsetneq \{-1, 1\} = f^{-1}(f(A))$. Strict !

    (Géométriquement : $f$ "écrase" $-1$ et $1$ sur le même point ; quand on remonte avec $f^{-1}$, on récupère **les deux**.)

    **3.** Soit $y \in f(f^{-1}(B))$. Il existe $x \in f^{-1}(B)$ tel que $y = f(x)$.
    Comme $x \in f^{-1}(B)$, on a $f(x) \in B$, soit $y \in B$.

    Conclusion : $f(f^{-1}(B)) \subset B$. ✅

    **Quand y a-t-il égalité ?**
    - $A = f^{-1}(f(A))$ pour tout $A$ ⟺ $f$ injective.
    - $f(f^{-1}(B)) = B$ pour tout $B$ ⟺ $f$ surjective.

---

## :material-numeric-5-circle: Exercice 5 — Composition (graphes)

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $f : \{a, b, c\} \to \{1, 2, 3\}$ et $g : \{1, 2, 3\} \to \{x, y\}$ données par :

| $f$ | $a$ | $b$ | $c$ | | $g$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|---|
|  | $1$ | $3$ | $2$ | |  | $x$ | $y$ | $x$ |

**1.** Calcule $g \circ f(a)$, $g \circ f(b)$, $g \circ f(c)$.
**2.** $g \circ f$ est-elle surjective ?

??? success "Voir la correction"
    **1.**
    - $g \circ f(a) = g(f(a)) = g(1) = x$
    - $g \circ f(b) = g(f(b)) = g(3) = x$
    - $g \circ f(c) = g(f(c)) = g(2) = y$

    **2.** $g \circ f$ atteint $\{x, y\}$ tout entier (image de $a, b$ → $x$, image de $c$ → $y$).

    Donc $g \circ f$ est surjective. ✅

---

## :material-check-circle-outline: Ce que tu dois savoir faire après cette page

- [ ] Lire un graphe de fonction et reconnaître si c'est bien une fonction
- [ ] Calculer $f(A)$ et $f^{-1}(B)$ à partir d'un tableau de valeurs
- [ ] Construire un graphe respectant des contraintes
- [ ] Démontrer $A \subset f^{-1}(f(A))$ et $f(f^{-1}(B)) \subset B$
- [ ] Composer deux fonctions $g \circ f$

[:material-arrow-right-bold: Suite : Fonctions usuelles](3_exos_usuelles.md)
