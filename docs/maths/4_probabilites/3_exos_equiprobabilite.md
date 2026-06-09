# Exercices — Équiprobabilité

> :material-book-open-page-variant: Cours : [Section 2](1_cours.md#2-equiprobabilite).
>
> Le réflexe : **trouver $|\Omega|$ et $|A|$**, puis $P(A) = |A|/|\Omega|$. C'est presque toujours du **dénombrement déguisé**.

---

## :material-numeric-1-circle: Exercice 1 — Mains au jeu de 32 cartes

<span class="diff diff-facile">🟢 Facile</span>

Jeu de 32 cartes. On tire une main de 5 cartes. Probabilité que la main contienne :

1. Exactement un as.
2. Au moins un as.
3. La dame de trèfle.
4. 4 trèfles dont la dame.
5. Exactement un trèfle et une dame.

??? success "Voir la correction"
    Univers : mains de 5 cartes, $|\Omega| = \binom{32}{5}$.

    Rappel : 32 cartes = 8 valeurs × 4 couleurs. 4 as, 4 dames, 8 trèfles.

    **1.** 1 as parmi 4, et 4 non-as parmi 28 : $|A| = \binom{4}{1}\binom{28}{4}$.
    $$P_1 = \dfrac{\binom{4}{1}\binom{28}{4}}{\binom{32}{5}}.$$

    **2.** "Au moins un as" : complémentaire = "aucun as".
    Sans as : $\binom{28}{5}$ mains. $P_2 = 1 - \dfrac{\binom{28}{5}}{\binom{32}{5}}$.

    **3.** "Contient la dame de trèfle" : on fixe cette carte, on choisit 4 parmi les 31 restantes.
    $$P_3 = \dfrac{\binom{31}{4}}{\binom{32}{5}} = \dfrac{5}{32}.$$
    (Vérification : $P_3 = 5/32$ car la dame de trèfle est dans 5 mains sur les 32.)

    **4.** 4 trèfles dont la dame : on prend la dame de trèfle (fixée), 3 autres trèfles parmi 7, et 1 carte non-trèfle parmi 24.
    $$P_4 = \dfrac{\binom{7}{3}\binom{24}{1}}{\binom{32}{5}}.$$

    **5.** Exactement un trèfle ET une dame. Décomposons selon que la carte trèfle est la dame de trèfle ou non.
    - **Cas A** — la carte trèfle est la dame de trèfle (et c'est la seule dame). 1 dame de trèfle (fixée), pas d'autre trèfle, pas d'autre dame. On choisit 4 cartes parmi (cartes non trèfles non dames) = $32 - 8 - 3 = 21$ cartes (les non-trèfles non dames). Donc $\binom{21}{4}$.
    - **Cas B** — la carte trèfle n'est pas la dame de trèfle, donc trèfle parmi $\{2, 3, 4, ..., R, A\}$ trèfles non dame = 7. Et il y a exactement une dame ailleurs : 3 dames non trèfle (pique, cœur, carreau) parmi lesquelles on en prend 1. Reste 3 cartes parmi les non-trèfles non-dames = $\binom{21}{3}$.
    
    Total : $7 \cdot 3 \cdot \binom{21}{3} + \binom{21}{4}$. Donc
    $$P_5 = \dfrac{\binom{21}{4} + 21 \cdot \binom{21}{3}}{\binom{32}{5}}.$$

---

## :material-numeric-2-circle: Exercice 2 — Deux dés

<span class="diff diff-facile">🟢 Facile</span>

On lance simultanément deux dés à 6 faces équilibrés. Probabilité que :

1. Les deux résultats soient identiques.
2. La somme soit paire.
3. La somme soit $\leq 8$.
4. Le **plus grand** des deux résultats soit $\leq 4$.

??? success "Voir la correction"
    Univers : $\Omega = [\![1, 6]\!]^2$, $|\Omega| = 36$. Équiprobabilité.

    **1.** Issues identiques : $(1,1), (2,2), \dots, (6,6)$. 6 cas.
    $P = 6/36 = 1/6$.

    **2.** Somme paire = (deux pairs) ou (deux impairs).
    Deux pairs : $3 \times 3 = 9$. Deux impairs : $3 \times 3 = 9$. Total : 18.
    $P = 18/36 = 1/2$.

    **3.** Compter directement les couples avec somme $\leq 8$. Plus simple : passer au complémentaire (somme $\geq 9$).
    Somme = 9 : $(3,6), (4,5), (5,4), (6,3)$ → 4 cas.
    Somme = 10 : $(4,6), (5,5), (6,4)$ → 3 cas.
    Somme = 11 : $(5,6), (6,5)$ → 2 cas.
    Somme = 12 : $(6,6)$ → 1 cas.
    Total $\geq 9$ : $4 + 3 + 2 + 1 = 10$.
    $P(\text{somme} \leq 8) = 1 - 10/36 = 26/36 = 13/18$.

    **4.** Plus grand $\leq 4$ ⟺ les deux dés sont dans $[\![1, 4]\!]$. Couples : $4 \times 4 = 16$.
    $P = 16/36 = 4/9$.

---

## :material-numeric-3-circle: Exercice 3 — Tirage simultané d'urne tricolore

<span class="diff diff-moyen">🟡 Moyen</span>

Urne avec 5 boules bleues, 4 blanches, 3 rouges (12 boules au total). On tire simultanément 3 boules.

1. Probabilité d'avoir 3 boules de la même couleur.
2. Probabilité d'avoir une boule de chaque couleur.
3. Probabilité d'avoir au moins une bleue.

??? success "Voir la correction"
    $|\Omega| = \binom{12}{3} = 220$.

    **1.** $\binom{5}{3} + \binom{4}{3} + \binom{3}{3} = 10 + 4 + 1 = 15$.
    $P_1 = 15/220 = 3/44$.

    **2.** 1 bleue × 1 blanche × 1 rouge : $5 \times 4 \times 3 = 60$.
    $P_2 = 60/220 = 3/11$.

    **3.** Complémentaire : aucune bleue. Tirer 3 parmi 7 non-bleues : $\binom{7}{3} = 35$.
    $P_3 = 1 - 35/220 = 185/220 = 37/44$.

---

## :material-numeric-4-circle: Exercice 4 — Permutation aléatoire

<span class="diff diff-moyen">🟡 Moyen</span>

On choisit au hasard une permutation de $\{1, 2, 3, 4, 5\}$.

1. Probabilité que le 1 soit à la première position ?
2. Probabilité que **personne ne soit à sa place** (dérangement) ? (Le 1 n'est pas en position 1, le 2 pas en position 2, etc.)

> Indice (q. 2) : formule du crible.

??? success "Voir la correction"
    $|\Omega| = 5! = 120$.

    **1.** Position du 1 = 1 ; les autres permutent librement : $4! = 24$.
    $P = 24/120 = 1/5$.

    **2.** Notons $A_i$ = "le $i$ est à sa place". Cherche $P(\overline{A_1 \cup A_2 \cup A_3 \cup A_4 \cup A_5})$.

    Par crible : $P(\bigcup A_i) = \sum P(A_i) - \sum P(A_i \cap A_j) + \dots$

    - $P(A_i) = 4!/5! = 1/5$. Somme : $5 \times 1/5 = 1$.
    - $P(A_i \cap A_j) = 3!/5! = 1/20$. Nombre de paires : $\binom{5}{2} = 10$. Somme : $10/20 = 1/2$.
    - $P(\text{3 points fixes}) = 2!/5! = 1/60$, nb : $\binom{5}{3} = 10$. Somme : $10/60 = 1/6$.
    - $P(\text{4 points fixes}) = 1/5! = 1/120$, nb : $\binom{5}{4} = 5$. Somme : $5/120 = 1/24$.
    - $P(\text{tous fixes}) = 1/120$. Somme : $1/120$.

    $P(\bigcup A_i) = 1 - 1/2 + 1/6 - 1/24 + 1/120 = \dfrac{120 - 60 + 20 - 5 + 1}{120} = \dfrac{76}{120} = \dfrac{19}{30}$.

    $P(\text{dérangement}) = 1 - 19/30 = 11/30 \approx 0.367$.

    (À l'infini, ce ratio tend vers $1/e \approx 0.368$.)

---

## :material-check-circle-outline: Récap

- [ ] Identifier l'univers équiprobable adapté (mains, tirages, couples)
- [ ] Décomposer un événement complexe en cas disjoints
- [ ] "Au moins" → complémentaire
- [ ] Formule du crible pour des unions multiples

[:material-arrow-right-bold: Suite : Conditionnelles](4_exos_conditionnelles.md)
