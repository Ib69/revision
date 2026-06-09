# Exercices — Bases ensemblistes

> :material-book-open-page-variant: Avant de commencer, relis le [cours](1_cours.md) si besoin (sections 1 et 2).
>
> **Notation utile** : $[\![a, b]\!]$ désigne l'ensemble des entiers entre $a$ et $b$ inclus.

---

## :material-numeric-1-circle: Exercice 1 — Reconnaître l'appartenance ou l'inclusion

<span class="diff diff-facile">🟢 Facile</span>

Soit $A = [\![0, 10]\!]$. Place le bon symbole ($\in$, $\notin$, $\subset$, $\not\subset$) à la place des pointillés.

| | | |
|---|---|---|
| a) $-1 \;\cdots\; A$ | b) $2 \;\cdots\; A$ | c) $\varnothing \;\cdots\; A$ |
| d) $\{5\} \;\cdots\; A$ | e) $\{3\} \;\cdots\; \{1, 2, 3\}$ | f) $\{3\} \;\cdots\; \mathcal{P}(A)$ |

??? success "Voir la correction"
    a) $-1 \notin A$ (car $A \subset \mathbb{N}$, pas de négatifs)

    b) $2 \in A$

    c) $\varnothing \subset A$ (l'ensemble vide est inclus dans tout)

    d) $\{5\} \subset A$ (c'est un ensemble, donc inclusion ; et $5 \in A$)

    e) $\{3\} \subset \{1,2,3\}$ (à gauche c'est un ensemble)

    f) $\{3\} \in \mathcal{P}(A)$ (car $\{3\}$ est un sous-ensemble de $A$, donc c'est un élément de $\mathcal{P}(A)$)

    **Réflexe à acquérir** : regarde **ce qui est à gauche** du symbole.
    - Élément simple à gauche → $\in$
    - Ensemble à gauche → $\subset$

---

## :material-numeric-2-circle: Exercice 2 — Écrire en extension, en compréhension, en paramétrique

<span class="diff diff-facile">🟢 Facile</span>

Pour chacun de ces ensembles, donne **les trois écritures** (extension, compréhension, paramétrique) quand c'est possible.

a) L'ensemble des entiers naturels impairs strictement plus petits que 20.
b) L'ensemble des entiers strictement compris entre 2 et 30 et multiples de 4.
c) L'ensemble des solutions réelles de $(x-1)(x^2 - 5x + 6) = 0$.
d) L'ensemble des réels compris entre $-3\pi$ et $3\pi$ dont le sinus est nul.

??? success "Voir la correction"
    **a) Impairs $< 20$**
    - Extension : $\{1, 3, 5, 7, 9, 11, 13, 15, 17, 19\}$
    - Compréhension : $\{n \in \mathbb{N},\ n \text{ impair},\ n < 20\}$
    - Paramétrique : $\{2k + 1,\ k \in [\![0, 9]\!]\}$

    **b) Multiples de 4 entre 2 et 30 strictement**
    - Extension : $\{4, 8, 12, 16, 20, 24, 28\}$
    - Compréhension : $\{n \in \mathbb{Z},\ 2 < n < 30,\ 4 \mid n\}$
    - Paramétrique : $\{4k,\ k \in [\![1, 7]\!]\}$

    **c) Solutions de $(x-1)(x^2 - 5x + 6) = 0$**

    On factorise $x^2 - 5x + 6 = (x-2)(x-3)$.
    Donc les solutions sont $1, 2, 3$.
    - Extension : $\{1, 2, 3\}$
    - Compréhension : $\{x \in \mathbb{R},\ (x-1)(x^2 - 5x + 6) = 0\}$
    - Pas de paramétrique évidente.

    **d) Réels dans $[-3\pi, 3\pi]$ avec $\sin(x) = 0$**

    $\sin(x) = 0 \iff x = k\pi,\ k \in \mathbb{Z}$. On garde $k \in \{-3, -2, -1, 0, 1, 2, 3\}$.
    - Extension : $\{-3\pi, -2\pi, -\pi, 0, \pi, 2\pi, 3\pi\}$
    - Compréhension : $\{x \in [-3\pi, 3\pi],\ \sin(x) = 0\}$
    - Paramétrique : $\{k\pi,\ k \in [\![-3, 3]\!]\}$

---

## :material-numeric-3-circle: Exercice 3 — Que veulent dire ces ensembles ?

<span class="diff diff-moyen">🟡 Moyen</span>

Pour chacun, **explique** ce que l'ensemble contient, puis donne **un élément qui appartient** et **un élément qui n'appartient pas**.

a) $E = \{f : \mathbb{R} \to \mathbb{R},\ \forall x \in \mathbb{R},\ f(x) \geq 0\}$
b) $F = \{(u_n) \in \mathbb{R}^{\mathbb{N}},\ \forall n \in \mathbb{N},\ u_{n+1} - u_n \geq 0\}$
c) $G = \{x \in \mathbb{R},\ \exists y \in \mathbb{R},\ x = y^2\}$

??? success "Voir la correction"
    **a) $E$** = ensemble des **fonctions positives ou nulles** sur $\mathbb{R}$.
    - Appartient : $f : x \mapsto x^2$ (toujours $\geq 0$)
    - N'appartient pas : $f : x \mapsto x$ (négatif pour $x < 0$)

    **b) $F$** = ensemble des **suites réelles croissantes** (au sens large).
    - Appartient : $u_n = n$
    - N'appartient pas : $u_n = (-1)^n$

    **c) $G$** = ensemble des **réels qui s'écrivent comme un carré**.
    Or $y^2 \geq 0$ toujours, et tout réel positif est un carré ($x = (\sqrt{x})^2$).
    Donc $G = \mathbb{R}_+$.
    - Appartient : $4 \in G$ (car $4 = 2^2$)
    - N'appartient pas : $-1 \notin G$

---

## :material-numeric-4-circle: Exercice 4 — Comparer deux ensembles

<span class="diff diff-moyen">🟡 Moyen</span>

Compare les deux ensembles suivants :
$$ E = \{n \in \mathbb{N},\ \exists k \in \mathbb{N},\ n = 2k\} \quad \text{et} \quad F = \{2p,\ p \in \mathbb{N}\} $$

??? success "Voir la correction"
    **Lecture des deux écritures.**
    - $E$ (compréhension) : "les $n$ dans $\mathbb{N}$ tels qu'il existe un $k$ entier avec $n = 2k$"
    - $F$ (paramétrique) : "tous les $2p$ quand $p$ parcourt $\mathbb{N}$"

    **Les deux décrivent exactement les entiers naturels pairs.** Donc $E = F$.

    **Preuve formelle.**
    - $E \subset F$ : soit $n \in E$. Il existe $k \in \mathbb{N}$ avec $n = 2k$. En prenant $p = k$, on a $n = 2p$, donc $n \in F$.
    - $F \subset E$ : soit $n \in F$. Il existe $p \in \mathbb{N}$ avec $n = 2p$. En prenant $k = p$, on a $n = 2k$, donc $n \in E$.

    Conclusion : $E = F$.

---

## :material-numeric-5-circle: Exercice 5 — Remplir des assertions vraies

<span class="diff diff-moyen">🟡 Moyen</span>

On considère $A = \{x \in \mathbb{R},\ -1 < x < 10\}$ et $B = \{n \in \mathbb{N},\ n + 1 \leq 8\}$.

1. De quel ensemble commun de référence $A$ et $B$ sont-ils tous deux des sous-ensembles ?
2. Remplace les pointillés pour rendre les assertions vraies (remplacer par $\varnothing$ est interdit) :
   - a) $\cdots \in A$
   - b) $\cdots \notin A \cup B$
   - c) $\cdots \subset A \cup B$
   - d) $\cdots \in A \cap B$
   - e) $\cdots \subset A \times B$
3. Quel est le complémentaire de $B$ dans $\mathbb{Z}$ ?

??? success "Voir la correction"
    Notons d'abord : $A = ]-1, 10[$ (un intervalle ouvert dans $\mathbb{R}$) et $B = \{0, 1, 2, 3, 4, 5, 6, 7\}$.

    **1.** $\mathbb{R}$ (car $B \subset \mathbb{N} \subset \mathbb{R}$).

    **2.** (plusieurs réponses possibles, voici des exemples)
    - a) $\pi \in A$
    - b) $-2 \notin A \cup B$ (car $-2 \notin A$ et $-2 \notin B$)
    - c) $\{0, 1, 2\} \subset A \cup B$
    - d) $3 \in A \cap B$ (car $3 \in A$ et $3 \in B$)
    - e) $\{(0, 0), (1, 1)\} \subset A \times B$

    **3.** Complémentaire de $B$ dans $\mathbb{Z}$ :
    $$ \overline{B}^{\,\mathbb{Z}} = \{n \in \mathbb{Z},\ n < 0 \text{ ou } n \geq 8\} = \mathbb{Z} \setminus [\![0, 7]\!] $$

---

## :material-numeric-6-circle: Exercice 6 — Démontrer une inclusion (méthode)

<span class="diff diff-dur">🔴 Niveau examen</span>

1. Soient $A$ et $B$ deux ensembles. Comment s'y prend-on pour démontrer $A \subset B$ ? Pour démontrer $A = B$ ?
2. Soit $A$ l'ensemble des fonctions constantes de $\mathbb{R}$ dans $\mathbb{R}$ et $B$ l'ensemble des fonctions paires. Montre que $A \subset B$. A-t-on $A = B$ ?

??? success "Voir la correction"
    **1. Méthode.**
    - Pour montrer $A \subset B$ : on prend un **élément quelconque** $x \in A$ et on montre que $x \in B$.
    - Pour montrer $A = B$ : on montre **les deux inclusions** $A \subset B$ et $B \subset A$.

    **2. $A \subset B$ ?**

    Soit $f \in A$ : $f$ est constante, donc il existe $c \in \mathbb{R}$ avec $f(x) = c$ pour tout $x$.
    Alors pour tout $x \in \mathbb{R}$ : $f(-x) = c = f(x)$.
    Donc $f$ est paire, soit $f \in B$. Conclusion : $A \subset B$. :white_check_mark:

    **A-t-on $A = B$ ?** Non.

    Contre-exemple : $f : x \mapsto x^2$ est paire ($f \in B$) mais pas constante ($f \notin A$).

---

## :material-check-circle-outline: Ce que tu dois savoir faire après cette page

- [ ] Placer correctement $\in$, $\subset$, $\varnothing$
- [ ] Écrire un ensemble en extension, compréhension, paramétrique
- [ ] Comparer deux écritures différentes et démontrer qu'elles définissent le même ensemble
- [ ] Démontrer une inclusion par la méthode "soit $x \in A$, montrons que $x \in B$"
- [ ] Donner un contre-exemple à une égalité d'ensembles

[:material-arrow-right-bold: Suite : Opérations sur les ensembles](3_exos_operations.md)
