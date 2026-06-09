# Exercices — Cardinaux d'ensembles finis

> :material-book-open-page-variant: Rappels : [Cours — section 1](1_cours.md#1-cardinaux-densembles-finis-rappel-rapide).

---

## :material-numeric-1-circle: Exercice 1 — Cardinaux de base

<span class="diff diff-facile">🟢 Facile</span>

Soit $A$ l'ensemble des entiers naturels pairs $\leq 60$, et $B$ celui des multiples de 3 $\leq 60$.

a) Écris mathématiquement $A$ et $B$.
b) Quel est $|A|$ ? $|B|$ ?
c) Que vaut $|A \cap B|$ ?
d) Que vaut $|A \times B|$ ? $|A \cup B|$ ?

??? success "Voir la correction"
    a) $A = \{2k,\ k \in [\![0, 30]\!]\} = \{0, 2, 4, \dots, 60\}$ et $B = \{3k,\ k \in [\![0, 20]\!]\}$.

    b) $|A| = 31$ (de $0$ à $60$ par pas de $2$, soit $30+1 = 31$). $|B| = 21$.

    c) $A \cap B$ = multiples communs de 2 et 3 = multiples de 6, $\leq 60$.
       $A \cap B = \{6k,\ k \in [\![0, 10]\!]\}$, donc $|A \cap B| = 11$.

    d) $|A \times B| = 31 \times 21 = 651$.
       $|A \cup B| = |A| + |B| - |A \cap B| = 31 + 21 - 11 = 41$.

---

## :material-numeric-2-circle: Exercice 2 — Tableau à double entrée

<span class="diff diff-facile">🟢 Facile</span>

Un étudiant a deux notes entières $M$ (maths) et $A$ (algo) entre 0 et 20. Il veut une moyenne fixée $k \in [\![0, 20]\!]$. Combien de couples $(M, A)$ donnent une moyenne = $k$ ?

??? success "Voir la correction"
    (Voir l'exo 7 de [Ensembles — Opérations](../1_ensembles/3_exos_operations.md#exercice-7-tableau-a-double-entree-et-cardinal). Résultat :)

    - Si $0 \leq k \leq 10$ : $2k + 1$ couples.
    - Si $10 \leq k \leq 20$ : $41 - 2k$ couples.

    **Méthode** : pour $M$ fixé, $A = 2k - M$ est imposé. On compte les $M$ valides.

---

## :material-numeric-3-circle: Exercice 3 — Cardinal de l'union (rappel)

<span class="diff diff-facile">🟢 Facile</span>

**1.** Si $E$ et $F$ sont finis et disjoints, que vaut $|E \cup F|$ ?

**2.** Sinon, donne une formule pour $|A \cup B|$ en fonction de $|A|, |B|, |A \cap B|$, avec une **représentation graphique** justificative.

??? success "Voir la correction"
    **1.** $|E \cup F| = |E| + |F|$ (notation $\sqcup$ pour souligner la disjonction).

    **2.** Dessin "deux patates qui se chevauchent" :

    ```
       ┌─── A ───┐
       │  A\B    │     B\A
       │   ┌─────┼─────┐
       │   │A∩B  │     │
       │   │     │     │
       └───┼─────┘     │
           └───────────┘
    ```

    On partitionne $A \cup B$ en trois zones disjointes : $A \setminus B$, $A \cap B$, $B \setminus A$.

    $|A| = |A \setminus B| + |A \cap B|$ et $|B| = |B \setminus A| + |A \cap B|$.

    Donc $|A| + |B| = |A \setminus B| + |B \setminus A| + 2|A \cap B| = |A \cup B| + |A \cap B|$.

    D'où $\boxed{|A \cup B| = |A| + |B| - |A \cap B|}$.

---

## :material-numeric-4-circle: Exercice 4 — Formule du crible (3 ensembles)

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $A, B, C$ trois ensembles finis. Démontre :

$$ |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| $$

(Indice : applique deux fois la formule à 2 ensembles avec $A \cup B \cup C = (A \cup B) \cup C$.)

??? success "Voir la correction"
    (Voir la solution complète dans [Ensembles — Opérations, exo 4](../1_ensembles/3_exos_operations.md#exercice-4-formule-du-crible-3-ensembles).)

    Idée :
    $|A \cup B \cup C| = |(A \cup B)| + |C| - |(A \cup B) \cap C|$
    avec $|(A \cup B)| = |A| + |B| - |A \cap B|$
    et $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$ → cardinal $= |A \cap C| + |B \cap C| - |A \cap B \cap C|$.

    On recolle et on obtient la formule.

---

## :material-numeric-5-circle: Exercice 5 — Inégalités via injection/surjection

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $E$ et $F$ deux ensembles finis de cardinaux $n$ et $p$.

**1.** S'il existe une **injection** de $E$ vers $F$, quelle inégalité a-t-on entre $n$ et $p$ ?

**2.** S'il existe une **surjection** de $E$ vers $F$, quelle inégalité ?

**3.** S'il existe une **bijection** entre $E$ et $F$ ?

??? success "Voir la correction"
    **1.** Injection : chaque élément de $E$ a une image différente, donc on consomme au moins $n$ "places" dans $F$. Donc $n \leq p$.

    **2.** Surjection : tous les éléments de $F$ sont atteints, et chaque élément de $E$ atteint au plus un élément de $F$. Donc $p \leq n$.

    **3.** Bijection : injective ET surjective ⟹ $n = p$.

---

## :material-numeric-6-circle: Exercice 6 — $|\mathcal{P}(E)|$

<span class="diff diff-moyen">🟡 Moyen</span>

Soit $E$ un ensemble fini de cardinal $n$. Propose une méthode pour déterminer $|\mathcal{P}(E)|$.

??? success "Voir la correction"
    Pour construire un sous-ensemble de $E$, on prend chaque élément un par un : il est dedans, ou pas (deux choix). Pour $n$ éléments : $2^n$ sous-ensembles.

    Donc $|\mathcal{P}(E)| = 2^n$.

    (Autre preuve via Newton dans le chapitre Pascal/Newton.)

---

## :material-check-circle-outline: Récap

- [ ] $|A \cup B|$, $|A \times B|$, $|\mathcal{P}(E)|$ : formules au bout des doigts
- [ ] Formule du crible à 3 ensembles
- [ ] Inégalités sur les cardinaux selon inj/surj/bij

[:material-arrow-right-bold: Suite : Combinatoire](3_exos_combinatoire.md)
