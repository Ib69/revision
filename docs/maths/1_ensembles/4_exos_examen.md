# Exercices — Style examen

> :material-target: Exos calibrés au niveau des sujets B3 (mars 2024 et mars 2026). Énoncés un peu plus longs, plusieurs questions enchaînées, et il faut **rédiger proprement**.

---

## :material-numeric-1-circle: Exercice 1 — Écriture, cardinaux, diagrammes

<span class="diff diff-dur">🔴 Niveau examen</span>

Les questions sont indépendantes.

**1.** Écris en extension les ensembles suivants :

a) $A = \{n \in \mathbb{N},\ \sqrt{2} < n < 2\pi\}$
b) $B = \{x \in [0, 20],\ \exists n \in \mathbb{N},\ x = n^2\}$

**2.** Écris les ensembles suivants avec une **notation ensembliste** (compréhension ou paramétrique) :

a) $E$ : entiers naturels pairs plus petits que 200.
b) $F$ : fonctions réelles paires.

**3.** Soient $A$ et $B$ deux ensembles tels que $|A| = 6$, $|B| = 7$ et $|A \cup B| = 8$.

En mettant en évidence la **formule du cours** utilisée, calcule :

a) $|A \cap B|$
b) $|A \times B|$
c) $|\mathcal{P}(A)|$

??? success "Voir la correction"
    **1.**

    a) $\sqrt{2} \approx 1.41$ et $2\pi \approx 6.28$. Donc $A = \{2, 3, 4, 5, 6\}$.

    b) On cherche les carrés parfaits $\leq 20$ : $0, 1, 4, 9, 16$. Donc $B = \{0, 1, 4, 9, 16\}$.

    **2.**

    a) $E = \{n \in [\![0, 200]\!],\ \exists p \in \mathbb{N},\ n = 2p\}$ ou paramétrique : $\{2p,\ p \in [\![0, 100]\!]\}$.

    b) $F = \{f : \mathbb{R} \to \mathbb{R},\ \forall x \in \mathbb{R},\ f(-x) = f(x)\}$.

    **3.**

    a) Formule : $|A \cup B| = |A| + |B| - |A \cap B|$, d'où
    $$|A \cap B| = |A| + |B| - |A \cup B| = 6 + 7 - 8 = 5.$$

    b) Formule : $|A \times B| = |A| \cdot |B|$, d'où
    $$|A \times B| = 6 \times 7 = 42.$$

    c) Formule : $|\mathcal{P}(A)| = 2^{|A|}$, d'où
    $$|\mathcal{P}(A)| = 2^6 = 64.$$

---

## :material-numeric-2-circle: Exercice 2 — Diagramme, placement de symboles

<span class="diff diff-dur">🔴 Niveau examen</span>

On considère un ensemble $E$ et trois sous-ensembles $A, B, C \subset E$.

Voici le diagramme de Venn :

```
┌────────────────────────────────────────┐
│  E                                     │
│        ┌─── A ───┐    ┌─── C ───┐      │
│        │   • a   │    │   • h   │      │
│        │   ┌─────┼────┤         │      │
│        │   │  • c│  • g│  • i   │      │
│        │   │     │    │         │      │
│        │ B │ • d │ • f │         │  • k│
│        │   │     │    │         │      │
│        │   └─────┼────┤         │      │
│        │   • b   │    │   • e   │      │
│        └─────────┘    └─────────┘  • j │
└────────────────────────────────────────┘
```

(éléments approximatifs : $a \in A \setminus B \setminus C$ ; $b \in A \cap B,\ b \notin C$ ; $c, d \in A \cap B \cap C$ peut-être ; $e \in C \setminus A \setminus B$ ; $g \in A \cap C \setminus B$ ; $h \in C$ ; $j, k$ hors de $A \cup B \cup C$, etc.)

Remplace les pointillés pour créer une **assertion juste**, en n'utilisant que $A$, $B$, $C$ et leurs complémentaires/combinaisons (interdit : $E$ tout seul).

a) $\cdots \;\subset\; A \cup B$
b) $\cdots \;\in\; B \times C$
c) $\cdots \;\in\; \mathcal{P}(A)$

??? success "Voir la correction"
    (Avec le diagramme ci-dessus, plusieurs réponses possibles.)

    a) $\{a, b\} \subset A \cup B$ — n'importe quel ensemble d'éléments dans $A$ ou dans $B$.

    b) $(b, h) \in B \times C$ — un couple où le premier est dans $B$, le second dans $C$.

    c) $\{a, b\} \in \mathcal{P}(A)$ — un sous-ensemble de $A$. **Attention** : la question est un $\in$, pas un $\subset$, donc on cherche un **élément** de $\mathcal{P}(A)$, c'est-à-dire un sous-ensemble de $A$.

    **Réflexe d'examen** : avant chaque réponse, dis-toi à voix basse : "à gauche du symbole, c'est un élément ou un ensemble ?"

---

## :material-numeric-3-circle: Exercice 3 — Démontrer une inclusion stricte

<span class="diff diff-dur">🔴 Niveau examen</span>

Soit $\mathcal{F} = \{f : \mathbb{R} \to \mathbb{R}\}$ l'ensemble des fonctions réelles. On considère :

- $\mathcal{A}$ : les fonctions affines ($f(x) = ax + b$ avec $a, b \in \mathbb{R}$).
- $\mathcal{P}$ : les fonctions polynomiales.

**1.** Montre que $\mathcal{A} \subset \mathcal{P}$.

**2.** Donne un contre-exemple à $\mathcal{P} \subset \mathcal{A}$.

**3.** Soit $\mathcal{C}$ l'ensemble des fonctions constantes. Compare $\mathcal{C}$ et $\mathcal{A}$.

??? success "Voir la correction"
    **1.** Soit $f \in \mathcal{A}$ : il existe $a, b \in \mathbb{R}$ tels que $f(x) = ax + b = a x^1 + b x^0$ pour tout $x$.
    C'est un polynôme de degré $\leq 1$, donc $f \in \mathcal{P}$. Conclusion : $\mathcal{A} \subset \mathcal{P}$.

    **2.** Contre-exemple : $f(x) = x^2 \in \mathcal{P}$ mais $f \notin \mathcal{A}$ (degré 2, pas une affine).

    **3.** $\mathcal{C} \subset \mathcal{A}$ : si $f$ est constante, $f(x) = c = 0 \cdot x + c$, donc affine.

    Et $\mathcal{C} \neq \mathcal{A}$ : $g(x) = x \in \mathcal{A}$ n'est pas constante.

    Donc $\mathcal{C} \subsetneq \mathcal{A}$ (inclusion stricte).

---

## :material-numeric-4-circle: Exercice 4 — Manipulation combinée

<span class="diff diff-dur">🔴 Niveau examen</span>

Soit $E = [\![1, 6]\!]$.

**1.** Combien d'éléments dans $\mathcal{P}(E)$ ?

**2.** Soient $A = \{1, 2, 3\}$ et $B = \{3, 4, 5\}$ deux parties de $E$.
   a) Décris $A \cap B$, $A \cup B$, $A \setminus B$, $\overline{A}$ (complémentaire dans $E$).
   b) Décris $A \times B$ : combien d'éléments ?

**3.** Combien y a-t-il de couples $(X, Y) \in \mathcal{P}(E)^2$ tels que $X \cap Y = \varnothing$ ?

??? success "Voir la correction"
    **1.** $|\mathcal{P}(E)| = 2^6 = 64$.

    **2.**

    a) $A \cap B = \{3\}$, $A \cup B = \{1,2,3,4,5\}$, $A \setminus B = \{1, 2\}$, $\overline{A} = \{4,5,6\}$.

    b) $|A \times B| = 3 \times 3 = 9$ couples : $(1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,3), (3,4), (3,5)$.

    **3.** **Question plus subtile.** Pour chaque élément $i \in E$, on a trois choix mutuellement exclusifs :

    - $i \in X$ seulement
    - $i \in Y$ seulement
    - $i$ ni dans $X$ ni dans $Y$

    ($i$ ne peut pas être dans les deux car $X \cap Y = \varnothing$.)

    Donc pour $6$ éléments : $3^6 = 729$ couples possibles.

---

## :material-check-circle-outline: Ce qu'il faut savoir gérer en examen

- [ ] **Vitesse** sur les écritures en extension (calcule mentalement les $\sqrt{2}, \pi, n^2$…).
- [ ] **Citer la formule du cours** avant de l'appliquer ("D'après la formule $|A \cup B| = …$").
- [ ] **Justifier brièvement** chaque réponse, même quand l'énoncé dit "calculer".
- [ ] Distinguer $\in$ et $\subset$ même sous pression.
- [ ] Quand on demande un contre-exemple : un seul suffit, mais il doit être **explicite et vérifié**.

[:material-arrow-right-bold: Partie suivante : Fonctions](../2_fonctions/1_cours.md)
