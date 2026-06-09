# Exercices — Style examen

> :material-target: Style B3. Conditionnelles, arbre, variable aléatoire avec loi et espérance, et binomiale.

---

## :material-numeric-1-circle: Exercice 1 — Urne avec tirage successif

<span class="diff diff-dur">🔴 Niveau examen</span>

(Examen 2024 ex 7)

Urne : 3 rouges, 2 vertes. Tirage **successif sans remise** de 3 boules.

**1.** Schéma (arbre pondéré) des issues.

**2.** $X$ = nombre de boules vertes.
   a) Loi de $X$.
   b) $\mathbb{E}(X)$, $\mathbb{V}(X)$.

**3.** $Y = 1$ si au moins une boule verte, sinon $Y = 0$.
   a) Exprime $Y = 1$ en fonction de $X$.
   b) Loi de $Y$.
   c) $\mathbb{E}(Y)$, $\mathbb{V}(Y)$.

**4.** On répète l'expérience 10 fois avec remise des boules entre. $Z$ = nombre de fois où on a obtenu au moins une verte.
   a) $Z(\Omega)$.
   b) Loi de $Z$.
   c) $\mathbb{E}(Z)$, $\mathbb{V}(Z)$.

??? success "Voir la correction"
    **1.** Arbre à 3 niveaux. Chaque branche : R ou V, proba dépend de l'état de l'urne.

    Au niveau 1 : $P(R) = 3/5$, $P(V) = 2/5$.
    Au niveau 2 (conditionné) : varie selon ce qui reste.
    Et ainsi de suite.

    **2.**

    a) $X \in [\![0, 2]\!]$ (max 2 vertes).

    Calculons :
    - $P(X = 0) = P(RRR) = \dfrac{3}{5} \cdot \dfrac{2}{4} \cdot \dfrac{1}{3} = \dfrac{6}{60} = \dfrac{1}{10}$.
    - $P(X = 1) = P(\text{une V parmi 3 tirages}) = 3 \cdot \dfrac{3}{5} \cdot \dfrac{2}{4} \cdot \dfrac{2}{3} = 3 \cdot \dfrac{12}{60} = \dfrac{3}{5}$.
      (Coefficient 3 pour les 3 positions possibles de la V ; les 3 séquences ont la même proba.)
    - $P(X = 2) = 3 \cdot \dfrac{2}{5} \cdot \dfrac{1}{4} \cdot \dfrac{3}{3} = 3 \cdot \dfrac{6}{60} = \dfrac{3}{10}$.

    Vérif : $1/10 + 6/10 + 3/10 = 10/10$ ✅.

    b) $\mathbb{E}(X) = 0 \cdot 1/10 + 1 \cdot 3/5 + 2 \cdot 3/10 = 6/10 + 6/10 = 12/10 = 6/5$.

    $\mathbb{E}(X^2) = 0 + 1 \cdot 3/5 + 4 \cdot 3/10 = 6/10 + 12/10 = 18/10 = 9/5$.

    $\mathbb{V}(X) = 9/5 - 36/25 = 45/25 - 36/25 = 9/25$.

    **3.**

    a) $Y = 1 \iff X \geq 1 \iff X \in \{1, 2\}$.

    b) $P(Y = 1) = P(X=1) + P(X=2) = 6/10 + 3/10 = 9/10$. $P(Y = 0) = 1/10$.
    Donc $Y \sim \mathcal{B}(9/10)$ (Bernoulli).

    c) $\mathbb{E}(Y) = 9/10$. $\mathbb{V}(Y) = p(1-p) = 9/10 \cdot 1/10 = 9/100$.

    **4.** Tirages indépendants entre eux (avec remise des boules), $p = 9/10$ pour chacun.

    a) $Z \in [\![0, 10]\!]$.

    b) $Z \sim \mathcal{B}(10, 9/10)$. $P(Z = k) = \binom{10}{k} (9/10)^k (1/10)^{10-k}$.

    c) $\mathbb{E}(Z) = np = 9$. $\mathbb{V}(Z) = np(1-p) = 10 \cdot 9/10 \cdot 1/10 = 9/10$.

---

## :material-numeric-2-circle: Exercice 2 — Linéarité (cours d'examen)

<span class="diff diff-dur">🔴 Niveau examen</span>

(Examen 2026 ex 7)

Soit $X$ une VA finie avec $X(\Omega) = \{x_1, \dots, x_n\}$.

**1.** Définitions formelles de l'espérance et de la variance.

**2.** Pour $(a, b) \in \mathbb{R}^2$, exprime $\mathbb{E}(aX + b)$ en fonction de $\mathbb{E}(X), a, b$.

**3.** Démontre.

??? success "Voir la correction"
    **1.**
    - $\mathbb{E}(X) = \sum_{k=1}^n x_k P(X = x_k)$.
    - $\mathbb{V}(X) = \sum_{k=1}^n (x_k - \mathbb{E}(X))^2 P(X = x_k) = \mathbb{E}(X^2) - \mathbb{E}(X)^2$.

    **2.** $\mathbb{E}(aX + b) = a \mathbb{E}(X) + b$.

    **3.** Démonstration.

    Posons $Y = aX + b$. Alors $Y(\Omega) = \{ax_k + b,\ k \in [\![1, n]\!]\}$, et $P(Y = ax_k + b) = P(X = x_k)$.

    \begin{aligned}
    \mathbb{E}(Y) &= \sum_k (ax_k + b) P(X = x_k) \\
    &= a \sum_k x_k P(X = x_k) + b \sum_k P(X = x_k) \\
    &= a \mathbb{E}(X) + b \cdot 1 = a \mathbb{E}(X) + b. \quad \square
    \end{aligned}

---

## :material-numeric-3-circle: Exercice 3 — Jeu à deux dés colorés

<span class="diff diff-dur">🔴 Niveau examen</span>

(Examen 2026 ex 8)

Dé rouge + dé bleu, équilibrés, 1-6. On lance les deux. Règle :

- Si le 5 sort **deux fois** → 3€ gagnés.
- Si le 5 sort **une fois** → 2€ gagnés.
- Sinon → 1€ perdu.

$X$ = gain algébrique (peut être négatif).

**1.** Loi de $X$.
**2.** Espérance. Le jeu est-il favorable au joueur ?

??? success "Voir la correction"
    **1.** Univers $[\![1,6]\!]^2$, $|\Omega| = 36$, équiprobabilité.

    - $X = 3$ : deux 5. Une seule issue $(5, 5)$. $P = 1/36$.
    - $X = 2$ : un seul 5. Issues : $(5, *)$ et $(*, 5)$ avec $* \neq 5$. $5 + 5 = 10$ cas. $P = 10/36 = 5/18$.
    - $X = -1$ : aucun 5. Issues $\{1,2,3,4,6\}^2$, soit $25$ cas. $P = 25/36$.

    Vérif : $1/36 + 10/36 + 25/36 = 36/36$ ✅.

    **2.** $\mathbb{E}(X) = 3 \cdot 1/36 + 2 \cdot 10/36 + (-1) \cdot 25/36 = (3 + 20 - 25)/36 = -2/36 = -1/18$.

    $\mathbb{E}(X) < 0$ ⟹ le jeu est **défavorable** au joueur (perte moyenne ≈ 5.6 centimes par partie).

---

## :material-numeric-4-circle: Exercice 4 — Bayes et test médical

<span class="diff diff-dur">🔴 Niveau examen</span>

Une maladie rare touche $0.5\%$ de la population. Un test détecte :

- $99\%$ de sensibilité (positif sachant malade).
- $98\%$ de spécificité (négatif sachant sain).

Un patient teste positif. Quelle proba qu'il soit malade ?

??? success "Voir la correction"
    Soient $M$ = malade, $+$ = positif.
    $P(M) = 0.005$, $P(+ \mid M) = 0.99$, $P(- \mid \overline{M}) = 0.98$, donc $P(+ \mid \overline{M}) = 0.02$.

    **Totale** :
    $P(+) = P(+ \mid M) P(M) + P(+ \mid \overline{M}) P(\overline{M}) = 0.99 \cdot 0.005 + 0.02 \cdot 0.995 = 0.00495 + 0.01990 = 0.02485$.

    **Bayes** :
    $P(M \mid +) = \dfrac{P(+ \mid M) P(M)}{P(+)} = \dfrac{0.00495}{0.02485} \approx 19.9\%$.

    **Choc** : test très précis (99%), maladie rare → patient positif n'a qu'**20%** de chance d'être réellement malade. C'est pourquoi on **refait** toujours un test positif rare.

---

## :material-numeric-5-circle: Exercice 5 — Question synthèse (modèle examen complet)

<span class="diff diff-dur">🔴 Niveau examen</span>

Une urne contient 6 jetons numérotés 1 à 6. On effectue $n$ tirages successifs **avec remise**.

**1.** Décris $\Omega$ pour $n = 3$.

**2.** Soit $X$ = somme des numéros pour $n = 3$. Donne $X(\Omega)$.

**3.** Calcule $P(X = 3)$, $P(X = 18)$.

**4.** Soit $Y$ = nombre de "6" obtenus sur les $n$ tirages.
   a) Quelle loi suit $Y$ ?
   b) $\mathbb{E}(Y)$, $\mathbb{V}(Y)$.
   c) Pour $n = 12$, probabilité d'obtenir exactement deux 6 ?

**5.** Pour $n = 4$, probabilité d'obtenir au moins un 6 ?

??? success "Voir la correction"
    **1.** $\Omega = [\![1, 6]\!]^3$, $|\Omega| = 216$, équiprobabilité.

    **2.** $X(\Omega) = [\![3, 18]\!]$ (minimum $1+1+1$, max $6+6+6$).

    **3.** $X = 3$ ⟺ $(1,1,1)$ : 1 cas. $P = 1/216$.
    $X = 18$ ⟺ $(6,6,6)$ : 1 cas. $P = 1/216$.

    **4.** Chaque tirage : succès ($6$) avec proba $1/6$, indépendamment.

    a) $Y \sim \mathcal{B}(n, 1/6)$.

    b) $\mathbb{E}(Y) = n/6$. $\mathbb{V}(Y) = n \cdot 1/6 \cdot 5/6 = 5n/36$.

    c) Pour $n = 12$ : $P(Y = 2) = \binom{12}{2} (1/6)^2 (5/6)^{10} = 66 \cdot \dfrac{5^{10}}{6^{12}}$.

    **5.** Pour $n = 4$, $Y \sim \mathcal{B}(4, 1/6)$. $P(Y \geq 1) = 1 - P(Y = 0) = 1 - (5/6)^4 = 1 - 625/1296 = 671/1296 \approx 51.8\%$.

---

## :material-check-circle-outline: Récap examen

- [ ] Construire l'**arbre pondéré** dès qu'il y a 2 niveaux de hasard
- [ ] Reconnaître la **loi** ($\mathcal{B}(n, p)$, Bernoulli, etc.) au lieu de tout recalculer à la main
- [ ] Maîtriser les formules $\mathbb{E}, \mathbb{V}$ des lois usuelles
- [ ] Linéarité de $\mathbb{E}$, et $\mathbb{V}(aX + b) = a^2 \mathbb{V}(X)$
- [ ] **Faux positifs** et le réflexe Bayes

[:material-arrow-right-bold: Examens blancs](../5_examens_blancs/sujet_2024.md)
