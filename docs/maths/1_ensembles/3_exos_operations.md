# Exercices — Opérations

> :material-book-open-page-variant: Notions du [cours](1_cours.md) section 3 et 4 : $\cup$, $\cap$, complémentaire, $\setminus$, $\times$, $\mathcal{P}(E)$, cardinaux.

---

## :material-numeric-1-circle: Exercice 1 — Opérations sur des intervalles

<span class="diff diff-facile">🟢 Facile</span>

On considère $A = [0, 3]$, $B = ]-1, 10]$ et $C = [2, 20]$.

Calcule :

a) $A \cap B$
b) $A \cup B$
c) $(A \cup C) \cap B$
d) $(A \cap B) \cup (C \cap B)$
e) $(A \cap C) \cup B$
f) $A \cup C$

??? success "Voir la correction"
    On dessine les intervalles sur la droite réelle, c'est le plus simple.

    a) $A \cap B = [0, 3]$ (car $A \subset B$)

    b) $A \cup B = ]-1, 10]$ (car $A \subset B$, donc l'union vaut $B$)

    c) $A \cup C = [0, 20]$. Puis $(A \cup C) \cap B = [0, 10]$.

    d) $A \cap B = [0, 3]$ et $C \cap B = [2, 10]$. L'union : $[0, 10]$.

    e) $A \cap C = [2, 3]$. Avec $B = ]-1, 10]$ : $(A \cap C) \cup B = ]-1, 10] = B$.

    f) $A \cup C = [0, 3] \cup [2, 20] = [0, 20]$ (les intervalles se chevauchent sur $[2, 3]$).

    **Lien avec la logique** : $\cup$ = "ou", $\cap$ = "et".

---

## :material-numeric-2-circle: Exercice 2 — Produit cartésien et ensemble des parties

<span class="diff diff-facile">🟢 Facile</span>

Soient $E = \{1, 2, 3\}$ et $F = \{a, b\}$ (avec $a, b \notin \{1, 2, 3\}$).

1. Donne $E \times F$ et $F \times E$. Combien d'éléments dans chacun ? Combien en commun ?
2. Donne $\mathcal{P}(E)$ et $\mathcal{P}(F)$. Combien d'éléments dans chacun ? Peux-tu deviner $|\mathcal{P}(X)|$ pour un $X$ quelconque ?

??? success "Voir la correction"
    **1. Produits cartésiens.**

    $E \times F = \{(1,a), (1,b), (2,a), (2,b), (3,a), (3,b)\}$ : **6 éléments**.

    $F \times E = \{(a,1), (a,2), (a,3), (b,1), (b,2), (b,3)\}$ : **6 éléments**.

    En commun : **aucun**. Un couple de $E \times F$ commence par un entier ; un couple de $F \times E$ commence par une lettre. Aucun couple n'est dans les deux.

    **2. Ensembles des parties.**

    $\mathcal{P}(E) = \big\{ \varnothing, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\} \big\}$ : **8 éléments**.

    $\mathcal{P}(F) = \big\{ \varnothing, \{a\}, \{b\}, \{a,b\} \big\}$ : **4 éléments**.

    **Intuition** : $|\mathcal{P}(E)| = 2^{|E|}$. Pour chaque élément, on a deux choix : il est dans le sous-ensemble ou non. D'où $2^n$.

---

## :material-numeric-3-circle: Exercice 3 — Cardinal de l'union (2 ensembles)

<span class="diff diff-facile">🟢 Facile</span>

1. Si $E$ et $F$ sont finis et **disjoints**, que vaut $|E \cup F|$ ?
2. Si $E$ et $F$ sont finis mais pas forcément disjoints, exprime $|E \cup F|$ en fonction de $|E|$, $|F|$ et $|E \cap F|$.
3. Une classe à EPITA a 40 étudiants. 35 parlent anglais, 20 parlent espagnol. Tous parlent au moins une des deux langues. Combien parlent les deux ?

??? success "Voir la correction"
    **1.** Disjoints : $|E \cup F| = |E| + |F|$.

    **2.** En général : $|E \cup F| = |E| + |F| - |E \cap F|$. Le $-|E \cap F|$ vient du fait qu'on aurait compté **deux fois** les éléments de l'intersection.

    **3.** Notons $A$ = "parle anglais", $E$ = "parle espagnol". On a $|A \cup E| = 40$, $|A| = 35$, $|E| = 20$.

    $$ |A \cap E| = |A| + |E| - |A \cup E| = 35 + 20 - 40 = 15. $$

    **15 étudiants parlent les deux langues.**

---

## :material-numeric-4-circle: Exercice 4 — Formule du crible (3 ensembles)

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $A$, $B$, $C$ trois ensembles finis. On veut $|A \cup B \cup C|$.

1. Dessine le diagramme de Venn et propose une formule.
2. Démontre-la en appliquant deux fois la formule à 2 ensembles : pose $A \cup B \cup C = (A \cup B) \cup C$.

??? success "Voir la correction"
    **1. Formule (à connaître par cœur)** :

    $$ |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| $$

    **2. Démonstration.**

    On applique la formule à 2 ensembles avec $X = A \cup B$ et $Y = C$ :
    $$ |A \cup B \cup C| = |A \cup B| + |C| - |(A \cup B) \cap C|. $$

    On sait que $|A \cup B| = |A| + |B| - |A \cap B|$.

    Et $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$ (distributivité). Donc :
    $$ |(A \cup B) \cap C| = |A \cap C| + |B \cap C| - |(A \cap C) \cap (B \cap C)|. $$

    Or $(A \cap C) \cap (B \cap C) = A \cap B \cap C$. En recollant :
    $$ |A \cup B \cup C| = |A| + |B| - |A \cap B| + |C| - |A \cap C| - |B \cap C| + |A \cap B \cap C|. $$

    On retrouve bien la formule. :white_check_mark:

---

## :material-numeric-5-circle: Exercice 5 — Cardinal de $\mathcal{P}(E)$

<span class="diff diff-moyen">🟡 Moyen</span>

Soit $E$ un ensemble fini de cardinal $n$.

Propose une méthode pour déterminer $|\mathcal{P}(E)|$.

??? success "Voir la correction"
    **Idée combinatoire.** Pour construire un sous-ensemble de $E$, on prend chaque élément un par un et on décide : il est dedans, ou pas. Deux choix par élément, $n$ éléments :

    $$ |\mathcal{P}(E)| = 2 \times 2 \times \dots \times 2 = 2^n. $$

    **Vérification.** Pour $n = 0$ : $E = \varnothing$, $\mathcal{P}(E) = \{\varnothing\}$, $|\mathcal{P}(E)| = 1 = 2^0$. :white_check_mark:

    Pour $n = 3$, on devrait en trouver $8$. Exemple : $E = \{1,2,3\}$, on a bien
    $\{\varnothing, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$. :white_check_mark:

    (On reverra cette formule en dénombrement, où on la démontre aussi avec la formule du binôme.)

---

## :material-numeric-6-circle: Exercice 6 — Égalité avec paramétrique

<span class="diff diff-moyen">🟡 Moyen</span>

Soient $A = \{(x, y) \in \mathbb{R}^2,\ 2x + y = 4\}$ et $B = \{(t-1, 6-2t),\ t \in \mathbb{R}\}$.

Montre que $A = B$.

??? success "Voir la correction"
    **Méthode** : double inclusion.

    **$B \subset A$.** Soit $(x, y) \in B$. Il existe $t \in \mathbb{R}$ avec $(x, y) = (t-1, 6-2t)$.
    Alors $2x + y = 2(t-1) + (6-2t) = 2t - 2 + 6 - 2t = 4$.
    Donc $(x, y) \in A$.

    **$A \subset B$.** Soit $(x, y) \in A$ : on a $2x + y = 4$, soit $y = 4 - 2x$.

    Cherche-t-on $t$ tel que $x = t - 1$ et $y = 6 - 2t$ ?
    De la première équation : $t = x + 1$.
    Vérifions la seconde : $6 - 2(x+1) = 6 - 2x - 2 = 4 - 2x = y$. :white_check_mark:

    Donc avec $t = x + 1$, on a bien $(x, y) = (t-1, 6-2t) \in B$.

    Conclusion : $A = B$. C'est la même droite, écrite de deux manières (équation cartésienne et équation paramétrique).

---

## :material-numeric-7-circle: Exercice 7 — Tableau à double entrée et cardinal

<span class="diff diff-dur">🔴 Niveau examen</span>

(Inspiré du TD2 ex 1.2)

Un étudiant a deux notes entières $M$ (maths) et $A$ (algo), chacune dans $[\![0, 20]\!]$. Les deux matières ont le même coefficient, donc sa moyenne est $\frac{M + A}{2}$.

Il veut obtenir une moyenne **fixée** $k \in [\![0, 20]\!]$. Combien de couples $(M, A)$ donnent une moyenne égale à $k$ ?

??? success "Voir la correction"
    On cherche $|\{(M, A) \in [\![0, 20]\!]^2,\ M + A = 2k\}|$.

    Si on fixe $M$, alors $A = 2k - M$ est imposé. Pour que $(M, A)$ soit valide, il faut :
    $$ 0 \leq M \leq 20 \quad \text{et} \quad 0 \leq 2k - M \leq 20. $$

    La seconde condition donne $2k - 20 \leq M \leq 2k$.

    Donc $M$ doit être dans $[\![\max(0, 2k-20),\ \min(20, 2k)]\!]$.

    **Discussion selon $k$ :**

    - Si $0 \leq k \leq 10$ : $\max(0, 2k-20) = 0$ et $\min(20, 2k) = 2k$. Donc $M \in [\![0, 2k]\!]$, ce qui donne **$2k + 1$ couples**.

    - Si $10 \leq k \leq 20$ : $\max(0, 2k-20) = 2k - 20$ et $\min(20, 2k) = 20$. Donc $M \in [\![2k-20, 20]\!]$, ce qui donne **$20 - (2k - 20) + 1 = 41 - 2k$ couples**.

    **Vérification** : pour $k = 10$, les deux formules donnent $21$. :white_check_mark:

    Le résultat est **symétrique** autour de $k = 10$ : c'est le cas qui maximise le nombre de couples possibles.

---

## :material-check-circle-outline: Ce que tu dois savoir faire après cette page

- [ ] Calculer $A \cup B$, $A \cap B$, $A \setminus B$ pour des intervalles ou ensembles finis
- [ ] Calculer $|A \cup B|$ avec la formule à 2 ensembles
- [ ] Connaître et savoir redémontrer la formule du crible à 3 ensembles
- [ ] Savoir que $|\mathcal{P}(E)| = 2^n$ et $|A \times B| = |A| \times |B|$
- [ ] Démontrer l'égalité de deux ensembles donnés en écritures différentes

[:material-arrow-right-bold: Suite : exercices style examen](4_exos_examen.md)
