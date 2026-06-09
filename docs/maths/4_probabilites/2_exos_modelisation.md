# Exercices — Modélisation

> :material-book-open-page-variant: Cours : [Espace probabilisé](1_cours.md#1-espace-probabilise).
>
> :material-flash: **Réflexe** : avant tout calcul, **décrire $\Omega$** clairement (liste d'issues, ou type d'objet : couple, sous-ensemble…).

---

## :material-numeric-1-circle: Exercice 1 — Démontrer les propriétés via les axiomes

<span class="diff diff-facile">🟢 Facile</span>

Soient $\Omega$ un ensemble et $f : \mathcal{P}(\Omega) \to \mathbb{R}$ vérifiant les axiomes :

(i) $f(\Omega) = 1$
(ii) $\forall A \in \mathcal{P}(\Omega),\ f(A) \geq 0$
(iii) $\forall (A, B),\ A \cap B = \varnothing \Rightarrow f(A \sqcup B) = f(A) + f(B)$

Démontre :

1. $f(\varnothing) = 0$
2. $f(\overline{A}) = 1 - f(A)$
3. $\forall A,\ 0 \leq f(A) \leq 1$
4. Si $A \subset B$ : $f(B \setminus A) = f(B) - f(A)$ et $f(A) \leq f(B)$
5. $f(A \cup B) = f(A) + f(B) - f(A \cap B)$

??? success "Voir la correction"
    **1.** $\varnothing \cap \varnothing = \varnothing$. Par (iii) : $f(\varnothing) = f(\varnothing \sqcup \varnothing) = f(\varnothing) + f(\varnothing)$. D'où $f(\varnothing) = 0$.

    **2.** $\Omega = A \sqcup \overline{A}$, par (iii) : $f(\Omega) = f(A) + f(\overline{A})$. Avec (i) : $1 = f(A) + f(\overline{A})$, soit $f(\overline{A}) = 1 - f(A)$.

    **3.** Par (ii) : $f(A) \geq 0$. Par 2., $f(\overline{A}) \geq 0$ également, soit $1 - f(A) \geq 0$, donc $f(A) \leq 1$.

    **4.** $B = A \sqcup (B \setminus A)$. Par (iii) : $f(B) = f(A) + f(B \setminus A)$, d'où $f(B \setminus A) = f(B) - f(A)$.
    Comme $f(B \setminus A) \geq 0$ (axiome ii), $f(B) \geq f(A)$.

    **5.** $A \cup B = A \sqcup (B \setminus A) = A \sqcup (B \setminus (A \cap B))$.
    $f(A \cup B) = f(A) + f(B \setminus (A \cap B)) = f(A) + f(B) - f(A \cap B)$ (par 4.).

    **À quoi sert ce qu'on vient de faire ?** $(\Omega, \mathcal{P}(\Omega), f)$ s'appelle un **espace probabilisé**, et $f$ une **probabilité** (souvent notée $P$).

---

## :material-numeric-2-circle: Exercice 2 — Décrire $\Omega$ pour des expériences

<span class="diff diff-facile">🟢 Facile</span>

Pour chaque expérience, décris l'univers $\Omega$ et la probabilité de chaque issue.

1. Lancer d'une pièce.
2. Lancer d'un dé à 6 faces.
3. Lancer de deux dés à 6 faces de couleurs différentes.
4. Tirage d'une boule dans une urne avec 5 rouges et 6 blanches.
5. Tirage **avec remise** de 3 boules dans cette urne.
6. Tirage **simultané** de 3 boules.
7. Tirage **successif sans remise** de 3 boules.

??? success "Voir la correction"
    1. $\Omega = \{P, F\}$, $P(P) = P(F) = 1/2$ (si équilibrée).

    2. $\Omega = \{1, 2, 3, 4, 5, 6\}$, chaque issue de proba $1/6$.

    3. $\Omega = [\![1, 6]\!]^2 = \{(i, j),\ 1 \leq i, j \leq 6\}$, $|\Omega| = 36$, chaque couple a proba $1/36$.

    4. $\Omega = \{R_1, ..., R_5, B_1, ..., B_6\}$ (11 boules numérotées), proba $1/11$ chacune.

    5. $\Omega = \{$boules$\}^3$, $|\Omega| = 11^3$, chaque triplet $(b_1, b_2, b_3)$ a proba $1/11^3$.

    6. $\Omega = \binom{\{boules\}}{3}$ (sous-ensembles de taille 3), $|\Omega| = \binom{11}{3}$. Chaque sous-ensemble a proba $1/\binom{11}{3}$.

    7. Comme 5 mais sans remise. $\Omega$ = arrangements de 3 boules distinctes parmi 11 : $|\Omega| = A_{11}^3 = 11 \cdot 10 \cdot 9$. Chaque arrangement : proba $1/A_{11}^3$.

    **Lien avec dénombrement** : modèle de tirage = formule de cardinal. Apprends à passer de l'énoncé au modèle.

---

## :material-numeric-3-circle: Exercice 3 — Le paradoxe de Poincaré

<span class="diff diff-moyen">🟡 Moyen</span>

Lors du jet de **deux dés indiscernables**, Poincaré observe deux calculs possibles pour la probabilité d'obtenir **au moins un 6** :

- Calcul A : $\frac{11}{36}$
- Calcul B : $\frac{6}{21}$

**1.** Explique les deux calculs.
**2.** Lequel est juste ?

??? success "Voir la correction"
    **Calcul A — univers = couples ordonnés** $(i, j) \in [\![1,6]\!]^2$. $|\Omega| = 36$.
    "Au moins un 6" : couples où $i = 6$ ou $j = 6$, soit $6 + 6 - 1 = 11$ cas.
    Donc $P = 11/36$.

    **Calcul B — univers = sous-ensembles ou multisets non ordonnés** : on identifie $(1, 2)$ et $(2, 1)$ par exemple.
    On a alors les paires non ordonnées : $\binom{6}{2} + 6 = 15 + 6 = 21$ (paires distinctes + paires identiques type $(i, i)$).
    "Au moins un 6" : on doit avoir au moins un 6. Paires contenant un 6 : $(6,1), (6,2), \dots, (6,6)$ soit 6 paires.
    Donc $P = 6/21$.

    **Le bon calcul est A.** L'erreur de B est que les 21 issues **ne sont pas équiprobables** : $(1, 2)$ "vaut" deux fois plus que $(1, 1)$ dans le vrai monde physique. La formule $|A|/|\Omega|$ ne s'applique qu'**en équiprobabilité**.

    **Leçon** : avant d'écrire $P = |A|/|\Omega|$, vérifie que les issues élémentaires sont équiprobables.

---

## :material-numeric-4-circle: Exercice 4 — Paradoxe des anniversaires

<span class="diff diff-moyen">🟡 Moyen</span>

**1.** Dans une population de $N$ individus, quelle est la valeur de $N$ qui garantit (avec certitude) qu'au moins deux personnes ont le même anniversaire ?

**2.** Quelle est la **probabilité** qu'au moins deux personnes parmi $N$ aient le même anniversaire ?

??? success "Voir la correction"
    **1.** Par le principe des tiroirs : 366 anniversaires possibles (365 + le 29 février). Avec $N = 367$, on est sûr que **deux personnes partagent un anniversaire**. (Sans le 29/02, c'est $N = 366$.)

    **2.** On suppose les anniversaires uniformément répartis sur 365 jours, indépendants.
    Univers : $\Omega = [\![1, 365]\!]^N$, $|\Omega| = 365^N$.

    Plus simple : **probabilité que TOUS aient des anniversaires DIFFÉRENTS** :
    $$ P(\text{tous distincts}) = \frac{365 \cdot 364 \cdot 363 \cdots (365 - N + 1)}{365^N} = \frac{A_{365}^N}{365^N}. $$

    Donc $P(\text{au moins deux égaux}) = 1 - \dfrac{A_{365}^N}{365^N}$.

    **Résultat surprenant** : dès $N = 23$, la probabilité dépasse $50\%$. Avec $N = 50$, elle dépasse $97\%$. C'est le fameux **paradoxe des anniversaires**.

    **Méthode-clé** : "au moins" → passe au **complémentaire** "aucun".

---

## :material-check-circle-outline: Récap

- [ ] Énoncer les 3 axiomes d'une probabilité et redémontrer les propriétés
- [ ] Décrire $\Omega$ pour les expériences classiques (couples, triplets, sous-ensembles)
- [ ] Justifier l'équiprobabilité avant d'écrire $|A|/|\Omega|$
- [ ] "Au moins un" → complémentaire

[:material-arrow-right-bold: Suite : Équiprobabilité](3_exos_equiprobabilite.md)
