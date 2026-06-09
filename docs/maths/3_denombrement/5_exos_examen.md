# Exercices — Style examen

> :material-target: Style B3 (mars 2024 et 2026). Sondages, échantillonnages, urnes avec contraintes.

---

## :material-numeric-1-circle: Exercice 1 — Échantillon dans une promo

<span class="diff diff-dur">🔴 Niveau examen</span>

(Inspiré examen 2024 ex 5)

400 étudiants de sup à EPITA, répartis en 10 classes de 40 élèves. On veut un échantillon de 40 étudiants pour un sondage.

> N.B. : on ne demande pas d'effectuer les calculs (laisse les $\binom{}{}$ sous leur forme symbolique).

**1.** Nombre de façons de sélectionner l'échantillon ?

**2.** Combien si on impose qu'il contienne **autant d'étudiants par classe** ?

**3.** Chaque classe a 2 délégués qu'on impose dans l'échantillon. Combien d'échantillons si les autres étudiants doivent être **équitablement répartis** par classe ?

**4.** Parmi les 400, il y a 50 filles. Combien d'échantillons **paritaires** (autant de filles que de garçons) ?

??? success "Voir la correction"
    **1.** Tirage simultané de 40 parmi 400 (sans ordre, sans remise) :
    $$ \binom{400}{40}. $$

    **2.** 4 élèves par classe. Pour chaque classe : $\binom{40}{4}$ choix.
    Total : $\displaystyle\binom{40}{4}^{10}$.

    **3.** 4 par classe, dont 2 délégués (imposés). Pour la classe : 1 façon pour les délégués, $\binom{38}{2}$ pour les 2 autres.
    Total : $\displaystyle\binom{38}{2}^{10}$.

    **4.** 20 filles parmi 50, 20 garçons parmi 350 :
    $$ \binom{50}{20} \times \binom{350}{20}. $$

---

## :material-numeric-2-circle: Exercice 2 — Urne à 3 couleurs

<span class="diff diff-dur">🔴 Niveau examen</span>

(Inspiré examen 2026 ex 5)

Urne : 5 boules bleues numérotées 1 à 5, 4 boules blanches numérotées 1 à 4, 3 boules rouges numérotées 1 à 3. Total : 12 boules.

**1.** On tire 3 boules **simultanément**.
a) Nombre de tirages possibles ?
b) Nombre de tirages avec 3 boules de **même couleur** ?
c) Nombre de tirages avec **au moins une** boule bleue ?
d) Nombre de tirages avec **au plus une** boule à numéro pair ?

**2.** On garde uniquement les 5 boules bleues. On fait un tirage **successif avec remise** de 4 boules.
a) Nombre de tirages possibles ?
b) Tirages avec **au moins un** numéro impair ?
c) Le tirage a donné les chiffres $1, 2, 1, 5$. Combien de nombres à 4 chiffres peut-on former avec ?

??? success "Voir la correction"
    **1.**

    a) $\binom{12}{3} = 220$.

    b) Cas bleues : $\binom{5}{3} = 10$. Blanches : $\binom{4}{3} = 4$. Rouges : $\binom{3}{3} = 1$.
    Total : $10 + 4 + 1 = 15$.

    c) Complémentaire : tirages **sans** bleue = $\binom{7}{3} = 35$.
    Avec au moins une bleue : $\binom{12}{3} - \binom{7}{3} = 220 - 35 = 185$.

    d) Boules à numéro pair : 2 et 4 dans les bleues (2 boules) ; 2 et 4 dans les blanches (2) ; 2 dans les rouges (1). Total : **5 boules paires**, donc **7 boules impaires**.

    "Au plus une" = "0 pairs" OU "1 pair" (disjoint).
    - 0 pair = 3 impaires : $\binom{7}{3} = 35$.
    - 1 pair + 2 impaires : $\binom{5}{1} \times \binom{7}{2} = 5 \times 21 = 105$.

    Total : $35 + 105 = 140$.

    **2.** Successif avec remise, 4 tirages dans un sac de 5.

    a) $5^4 = 625$.

    b) Boules à numéro pair (parmi les 5 bleues 1-5) : 2 et 4, soit **2 boules**.
    Sans aucun numéro impair = tirages uniquement parmi pairs : $2^4 = 16$.
    Avec au moins un impair : $625 - 16 = 609$.

    c) Anagrammes du nombre "1-2-1-5". 4 chiffres avec le 1 qui apparaît deux fois :
    $$\dfrac{4!}{2!} = 12.$$

---

## :material-numeric-3-circle: Exercice 3 — $|\mathcal{P}(E)|$ via Newton

<span class="diff diff-dur">🔴 Niveau examen</span>

(Examen 2024 ex 4)

**1.** Rappelle la formule du binôme de Newton.

**2.** Soit $E$ un ensemble à $n$ éléments.
a) Soit $k \in [\![0, n]\!]$. Combien de sous-ensembles de $E$ ont $k$ éléments ?
b) En utilisant a) et Newton, calcule $|\mathcal{P}(E)|$.

??? success "Voir la correction"
    **1.** $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$.

    **2.**

    a) Choisir un sous-ensemble de $k$ éléments parmi $n$ : $\binom{n}{k}$.

    b) Partitionnons $\mathcal{P}(E) = \mathcal{P}_0(E) \sqcup \mathcal{P}_1(E) \sqcup \dots \sqcup \mathcal{P}_n(E)$, où $\mathcal{P}_k(E)$ = sous-ensembles de taille $k$.

    $$|\mathcal{P}(E)| = \sum_{k=0}^n |\mathcal{P}_k(E)| = \sum_{k=0}^n \binom{n}{k}.$$

    Avec Newton ($a = b = 1$) :
    $$|\mathcal{P}(E)| = \sum_{k=0}^n \binom{n}{k} 1^k 1^{n-k} = (1+1)^n = 2^n.$$ ✅

---

## :material-numeric-4-circle: Exercice 4 — Code à chiffres distincts

<span class="diff diff-dur">🔴 Niveau examen</span>

Un cadenas a 5 chiffres (0 à 9) **distincts**.

**1.** Combien de codes possibles ?
**2.** Codes commençant par un chiffre impair ?
**3.** Codes contenant **au moins une fois** le chiffre 9 ?
**4.** Codes formés **uniquement** de chiffres pairs ?

??? success "Voir la correction"
    **1.** Arrangement $A_{10}^5 = 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 30\,240$.

    **2.** Premier chiffre : 5 choix impairs (1, 3, 5, 7, 9). Reste : $A_9^4 = 9 \cdot 8 \cdot 7 \cdot 6 = 3024$.
    Total : $5 \times 3024 = 15\,120$.

    **3.** Complémentaire : codes **sans** le 9. On choisit 5 chiffres distincts parmi $\{0, 1, ..., 8\}$ : $A_9^5 = 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 = 15\,120$.
    Avec 9 : $30\,240 - 15\,120 = 15\,120$.

    **4.** Chiffres pairs : $\{0, 2, 4, 6, 8\}$ = 5 chiffres. On en choisit 5 distincts : $A_5^5 = 5! = 120$.

---

## :material-check-circle-outline: À garder en tête pour l'examen

- [ ] **Réflexe ordre/répétition** appliqué sans hésiter
- [ ] **Au moins un** → complémentaire systématique
- [ ] **Au plus n** → décomposition en cas disjoints (0, 1, …, n)
- [ ] Garder les $\binom{}{}$ sous forme symbolique quand le calcul n'est pas demandé
- [ ] Citer "tirage simultané = combinaison" / "successif sans remise = arrangement" pour justifier

[:material-arrow-right-bold: Partie suivante : Probabilités](../4_probabilites/1_cours.md)
