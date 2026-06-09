# Exercices — Pascal et Newton

> :material-book-open-page-variant: Cours : [Triangle de Pascal et Binôme de Newton](1_cours.md#5-triangle-de-pascal-et-formule-de-pascal).

---

## :material-numeric-1-circle: Exercice 1 — Symétrie des combinaisons

<span class="diff diff-facile">🟢 Facile</span>

Pour $n \in \mathbb{N}^*$ et $k \in [\![0, n]\!]$, compare le nombre de façons de choisir $k$ éléments dans un ensemble à $n$ éléments, et celui de choisir $n - k$ éléments.

??? success "Voir la correction"
    **Réponse** : ces deux nombres sont **égaux** :

    $$ \binom{n}{k} = \binom{n}{n-k}. $$

    **Intuition** : choisir les $k$ éléments à **garder** revient à choisir les $n-k$ à **éliminer**. Bijection naturelle entre les deux types de choix.

    **Vérification par formule** :
    $$ \binom{n}{n-k} = \frac{n!}{(n-k)! \cdot k!} = \binom{n}{k}. $$ ✅

---

## :material-numeric-2-circle: Exercice 2 — Formule de Pascal (combinatoire)

<span class="diff diff-facile">🟢 Facile</span>

Dans une urne, $n$ boules numérotées 1 à $n$. On tire simultanément $k$ boules.

a) Nombre de tirages.
b) Tirages contenant la boule 1.
c) Tirages ne contenant pas la boule 1.
d) En déduire $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.
e) Redémontrer cette relation **par le calcul**.

??? success "Voir la correction"
    a) $\binom{n}{k}$.

    b) On fixe la boule 1, on choisit $k-1$ parmi les $n-1$ restantes : $\binom{n-1}{k-1}$.

    c) On exclut la boule 1, on choisit $k$ parmi les $n-1$ restantes : $\binom{n-1}{k}$.

    d) Tout tirage est soit dans b), soit dans c), de manière **disjointe**. Donc

    $$ \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}. $$

    e) Calcul :
    \begin{aligned}
    \binom{n-1}{k-1} + \binom{n-1}{k} &= \frac{(n-1)!}{(k-1)!(n-k)!} + \frac{(n-1)!}{k!(n-k-1)!} \\
    &= \frac{k \cdot (n-1)!}{k!(n-k)!} + \frac{(n-k) \cdot (n-1)!}{k!(n-k)!} \\
    &= \frac{(n-1)! \cdot (k + n - k)}{k!(n-k)!} = \frac{n!}{k!(n-k)!} = \binom{n}{k}.
    \end{aligned}

    ✅

---

## :material-numeric-3-circle: Exercice 3 — Formule du binôme de Newton

<span class="diff diff-moyen">🟡 Moyen</span>

**1.** Pour $(x, y) \in \mathbb{R}^2$ et $n \in \mathbb{N}$, démontre :

$$ (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}. $$

Propose au moins **deux** justifications (combinatoire et par récurrence).

**2.** Développe $(x + y)^4$ et $(a - b)^5$ avec le triangle de Pascal.

**3.** Calcule $\sum_{k=0}^{n} \binom{n}{k}$.

??? success "Voir la correction"
    **1.** Deux justifications.

    **Justification combinatoire**. On développe $(x+y)^n = (x+y)(x+y)\cdots(x+y)$. Chaque terme du développement correspond à un choix : dans chaque facteur, on prend $x$ ou $y$.
    Pour obtenir $x^k y^{n-k}$, on choisit $k$ facteurs (parmi $n$) qui donneront un $x$, les autres donneront un $y$. Il y a $\binom{n}{k}$ tels choix.
    Donc le coefficient de $x^k y^{n-k}$ est $\binom{n}{k}$.

    **Justification par récurrence sur $n$**. Vraie pour $n = 0$. Si c'est vrai au rang $n$, on multiplie par $(x+y)$ et on utilise la formule de Pascal pour regrouper les termes.

    **2.** Coefficients pour $n = 4$ : $1, 4, 6, 4, 1$.
    $$(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4.$$

    Pour $n = 5$ avec $b$ négatif : signes alternés.
    Coefficients : $1, 5, 10, 10, 5, 1$.
    $$(a-b)^5 = a^5 - 5a^4 b + 10 a^3 b^2 - 10 a^2 b^3 + 5 a b^4 - b^5.$$

    **3.** En posant $x = y = 1$ dans Newton :
    $$ \sum_{k=0}^{n} \binom{n}{k} = (1 + 1)^n = 2^n. $$

    **Interprétation** : $2^n$ = nombre total de sous-ensembles, et $\binom{n}{k}$ = nombre de sous-ensembles de taille $k$. La somme par taille = total.

---

## :material-numeric-4-circle: Exercice 4 — Somme avec coefficient $2^k$

<span class="diff diff-moyen">🟡 Moyen</span>

Calcule $S = \displaystyle\sum_{k=0}^{n} 2^k \binom{n}{k}$.

Puis trouve un **problème combinatoire** dont la réponse est $S$.

??? success "Voir la correction"
    **Calcul**. On pose $x = 2$ et $y = 1$ dans Newton :
    $$ (2 + 1)^n = \sum_{k=0}^{n} \binom{n}{k} 2^k 1^{n-k} = \sum_{k=0}^{n} 2^k \binom{n}{k}. $$
    Donc $S = 3^n$.

    **Problème associé**. $3^n$ = nombre de fonctions de $[\![1, n]\!]$ vers $\{a, b, c\}$ (un alphabet à 3 lettres).
    Autrement dit : $3^n$ = nombre de mots de longueur $n$ sur un alphabet de 3 lettres.

    **Lecture combinatoire de la somme** : on partitionne ces mots selon le nombre $k$ de lettres "$a$" qu'ils contiennent. Pour chaque $k$ : $\binom{n}{k}$ positions choisies pour les $a$, et $2^k$ choix pour les positions restantes (parmi $\{b, c\}$). Erreur dans cette lecture — corrigeons : pour les positions **restantes** (au nombre de $n - k$), il y a $2^{n-k}$ choix.

    Donc la lecture exacte est $\sum_k \binom{n}{k} 2^{n-k}$ — qui par symétrie de Pascal vaut aussi $\sum_k \binom{n}{k} 2^k$.

---

## :material-numeric-5-circle: Exercice 5 — Coloriage de cases

<span class="diff diff-moyen">🟡 Moyen</span>

(Style examen 2026 ex 3)

Justine dessine $n$ cases sur une feuille. Elle a deux feutres (bleu, rouge). Elle veut former un "ruban".

**Choix 1** : colorier les $n$ cases une par une (bleu ou rouge à chaque fois).

**Choix 2** : choisir $k$ cases à colorier en bleu (le reste en rouge), pour $k = 0, 1, \dots, n$, en envisageant **tous les cas**.

**1.** Combien de rubans avec le choix 1 ?
**2.** Combien avec le choix 2 ?
**3.** Quelle égalité en déduire ?
**4.** Redémontrer l'égalité avec Newton.

??? success "Voir la correction"
    **1.** Choix 1 : 2 couleurs pour chaque case, donc $2^n$ rubans.

    **2.** Choix 2 : pour $k$ fixé, $\binom{n}{k}$ façons. En sommant : $\sum_{k=0}^{n} \binom{n}{k}$.

    **3.** Comme les deux choix décrivent **la même chose** :

    $$ 2^n = \sum_{k=0}^{n} \binom{n}{k}. $$

    **4.** Newton avec $x = y = 1$ : $(1+1)^n = \sum_{k=0}^n \binom{n}{k} 1^k 1^{n-k} = \sum_{k=0}^n \binom{n}{k}$. ✅

---

## :material-numeric-6-circle: Exercice 6 — Problèmes inversés

<span class="diff diff-dur">🔴 Niveau examen</span>

Pour chaque quantité ci-dessous, propose un problème de dénombrement dont la réponse est cette quantité.

a) $2^n$
b) $\sum_{k=0}^{n} \binom{n}{k}$
c) $k \cdot n!$

??? success "Voir la correction"
    a) $2^n$ : nombre de sous-ensembles d'un ensemble à $n$ éléments. Ou : nombre de mots binaires de longueur $n$.

    b) $\sum_{k=0}^{n} \binom{n}{k}$ : nombre total de sous-ensembles, en sommant par taille. (= $2^n$).

    c) $k \cdot n!$ : nombre de permutations de $n+k$ objets dont $k$ sont indistinguables ? Difficile.
    Réponse plus simple : $k \cdot n!$ = nombre de **listes ordonnées de $n+1$ éléments** où le dernier est dans $\{1, \dots, k\}$ et les $n$ premiers forment une permutation d'un ensemble à $n$ éléments.

    Ou : "le nombre de permutations de $n$ objets, avec un choix supplémentaire parmi $k$ couleurs pour un objet distingué". Toujours possible de trouver une interprétation.

---

## :material-check-circle-outline: Récap

- [ ] Symétrie $\binom{n}{k} = \binom{n}{n-k}$
- [ ] Formule de Pascal — démonstration combinatoire **et** par calcul
- [ ] Binôme de Newton — démonstration combinatoire **et** par récurrence
- [ ] Reconnaître $2^n$, $3^n$, etc. dans les sommes $\sum \binom{n}{k} x^k y^{n-k}$
- [ ] Donner un problème combinatoire pour une expression donnée

[:material-arrow-right-bold: Suite : exercices style examen](5_exos_examen.md)
