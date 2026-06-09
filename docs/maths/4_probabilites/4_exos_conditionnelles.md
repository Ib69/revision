# Exercices — Probabilités conditionnelles

> :material-book-open-page-variant: Cours : [Section 3](1_cours.md#3-probabilites-conditionnelles).
>
> **Méthode-clé** : presque tout passe par un **arbre pondéré** ou par les **probabilités totales**.

---

## :material-numeric-1-circle: Exercice 1 — Indépendance ou incompatibilité ?

<span class="diff diff-facile">🟢 Facile</span>

On tire au hasard un nombre entre 1 et 20. Soient $A$ = "le nombre est pair", $B$ = "le nombre est multiple de 5".

**1.** $A$ et $B$ sont-ils incompatibles ?
**2.** $A$ et $B$ sont-ils indépendants ?
**3.** Reprends les questions si on tire entre 1 et 21.

??? success "Voir la correction"
    **Cas 1 : entre 1 et 20.** Univers $\Omega = [\![1, 20]\!]$, $|\Omega| = 20$.

    - $A = \{2, 4, ..., 20\}$, $|A| = 10$, $P(A) = 1/2$.
    - $B = \{5, 10, 15, 20\}$, $|B| = 4$, $P(B) = 1/5$.
    - $A \cap B = \{10, 20\}$, $|A \cap B| = 2$, $P(A \cap B) = 1/10$.

    **1.** $A \cap B \neq \varnothing$, donc **pas incompatibles**.

    **2.** $P(A) \cdot P(B) = 1/2 \cdot 1/5 = 1/10 = P(A \cap B)$. ✅ **Indépendants**.

    **Cas 2 : entre 1 et 21.** $|\Omega| = 21$.

    - $P(A) = 10/21$ (toujours 10 pairs).
    - $P(B) = 4/21$ (multiples de 5 : 5, 10, 15, 20).
    - $P(A \cap B) = 2/21$.

    **1.** Pas incompatibles.

    **2.** $P(A) P(B) = 40/441 \neq 2/21 = 42/441$. **Pas indépendants** !

    **Leçon** : l'indépendance dépend du **modèle probabiliste** (l'univers).

---

## :material-numeric-2-circle: Exercice 2 — Cours de soutien (Bayes)

<span class="diff diff-facile">🟢 Facile</span>

(Examen 2026 ex 6)

Dans une promo EPITA S2, $P(S) = 10\%$ d'élèves vont au soutien math.

- Si l'élève va au soutien, $P(V \mid S) = 80\%$ de valider l'UE Concevoir.
- Sinon, $P(V \mid \overline{S}) = 30\%$.

**1.** Traduis les données.
**2.** Probabilité qu'un élève au hasard valide ?
**3.** Un élève a validé : quelle proba qu'il soit allé au soutien ?

??? success "Voir la correction"
    **1.** $P(S) = 0.1 = 1/10$, $P(V \mid S) = 0.8 = 4/5$, $P(V \mid \overline{S}) = 0.3 = 3/10$.

    **2.** Formule des probabilités totales avec partition $\{S, \overline{S}\}$ :
    $$ P(V) = P(V \mid S) P(S) + P(V \mid \overline{S}) P(\overline{S}) = \dfrac{4}{5} \cdot \dfrac{1}{10} + \dfrac{3}{10} \cdot \dfrac{9}{10} = \dfrac{8}{100} + \dfrac{27}{100} = \dfrac{35}{100} = \dfrac{7}{20}. $$

    **3.** Bayes :
    $$ P(S \mid V) = \dfrac{P(V \mid S) P(S)}{P(V)} = \dfrac{(4/5)(1/10)}{7/20} = \dfrac{8/100}{35/100} = \dfrac{8}{35}. $$

    **Interprétation** : sur ceux qui valident, environ $8/35 \approx 23\%$ ont fait du soutien.

---

## :material-numeric-3-circle: Exercice 3 — Apprendre son cours (Bayes)

<span class="diff diff-facile">🟢 Facile</span>

(Examen 2024 ex 6)

Promo EPITA : 40% apprennent leur cours de maths. Parmi eux, 80% valident. Pour les autres : 20% valident.

Soit $C$ = "apprend son cours", $V$ = "valide".

**1.** Traduis l'énoncé.
**2.** Proba qu'un élève au hasard valide ?
**3.** Un élève a validé : proba qu'il ait appris ?
**4.** Quelle proportion minimale $p$ d'élèves qui apprennent faut-il pour atteindre $60\%$ de validation ?

??? success "Voir la correction"
    **1.** $P(C) = 0.4$, $P(V \mid C) = 0.8$, $P(V \mid \overline{C}) = 0.2$.

    **2.** $P(V) = 0.8 \times 0.4 + 0.2 \times 0.6 = 0.32 + 0.12 = 0.44 = 11/25$.

    **3.** Bayes : $P(C \mid V) = \dfrac{0.8 \times 0.4}{0.44} = \dfrac{0.32}{0.44} = \dfrac{32}{44} = \dfrac{8}{11}$.

    **4.** On note $p = P(C)$. Alors $P(V) = 0.8 p + 0.2 (1 - p) = 0.6 p + 0.2$.

    On veut $0.6 p + 0.2 \geq 0.6$ ⟹ $0.6 p \geq 0.4$ ⟹ $p \geq 2/3$.

    **Au moins 2/3 d'élèves** doivent apprendre leur cours pour que 60% valident.

---

## :material-numeric-4-circle: Exercice 4 — Détection de triche

<span class="diff diff-moyen">🟡 Moyen</span>

(Inspiré TD3 ex 3.10)

Une école détecte la triche avec un algo :

- $P(T) = 10\%$ des rendus contiennent de la triche.
- Parmi les rendus avec triche, l'algo classe **triche** dans 98% des cas ($P(CT \mid T) = 0.98$).
- Parmi les rendus sans triche, l'algo **n'en classe pas** dans 95% des cas ($P(\overline{CT} \mid \overline{T}) = 0.95$).

**1.** Traduis l'énoncé en probas.
**2.** Probabilité qu'un rendu au hasard soit classé triche ?
**3.** Un rendu est classé triche : probabilité que ce soit vraiment de la triche ?

??? success "Voir la correction"
    **1.** $P(T) = 0.1$, $P(CT \mid T) = 0.98$, $P(CT \mid \overline{T}) = 1 - 0.95 = 0.05$ (faux positif).

    **2.** Totales :
    $$ P(CT) = P(CT \mid T) P(T) + P(CT \mid \overline{T}) P(\overline{T}) = 0.98 \times 0.1 + 0.05 \times 0.9 = 0.098 + 0.045 = 0.143. $$

    **3.** Bayes :
    $$ P(T \mid CT) = \dfrac{P(CT \mid T) P(T)}{P(CT)} = \dfrac{0.098}{0.143} \approx 68.5\%. $$

    **Leçon contre-intuitive** : même avec un algo très bon (98% de détection), comme la triche est rare (10%), les **faux positifs** dominent et seulement ~68% des "détections" sont vraies. C'est le **problème de base rare** (paradoxe des tests médicaux).

---

## :material-numeric-5-circle: Exercice 5 — Pile/face truqué et choix de dé

<span class="diff diff-moyen">🟡 Moyen</span>

(TD3 ex 3.11)

Deux dés :
- Dé A : 4 faces rouges, 2 blanches.
- Dé B : 2 faces rouges, 4 blanches.

On lance d'abord une pièce truquée ($P(\text{pile}) = 1/3$) : si pile, on joue avec A ; si face, avec B.

**1.** Probabilité d'obtenir une face rouge au premier lancer ?
**2.** On a obtenu une face rouge aux $n$ premiers lancers. Probabilité d'avoir utilisé A ?
**3.** Sachant qu'on a obtenu rouge aux 2 premiers lancers, probabilité d'obtenir rouge au 3e ?

??? success "Voir la correction"
    Notons $A$ = "on a choisi le dé A", $R_i$ = "rouge au $i$-ème lancer".

    $P(A) = 1/3$, $P(B) = P(\overline{A}) = 2/3$.
    $P(R \mid A) = 4/6 = 2/3$, $P(R \mid B) = 2/6 = 1/3$.

    **1.** $P(R_1) = P(R \mid A) P(A) + P(R \mid B) P(B) = \dfrac{2}{3} \cdot \dfrac{1}{3} + \dfrac{1}{3} \cdot \dfrac{2}{3} = \dfrac{2}{9} + \dfrac{2}{9} = \dfrac{4}{9}$.

    **2.** Sachant le dé, les lancers sont indépendants.
    $P(R_1 \cap \dots \cap R_n \mid A) = (2/3)^n$ et $P(R_1 \cap \dots \cap R_n \mid B) = (1/3)^n$.

    Totales : $P(\text{tous rouges}) = (2/3)^n \cdot 1/3 + (1/3)^n \cdot 2/3$.

    Bayes :
    $$ P(A \mid \text{tous rouges}) = \dfrac{(2/3)^n \cdot 1/3}{(2/3)^n \cdot 1/3 + (1/3)^n \cdot 2/3} = \dfrac{2^n}{2^n + 2}. $$

    (Multiplication numérateur et dénominateur par $3^{n+1}$.)

    **3.** On veut $P(R_3 \mid R_1 \cap R_2)$.
    Décomposition par totale conditionnelle sur le dé :
    $$ P(R_3 \mid R_1 R_2) = P(R \mid A) P(A \mid R_1 R_2) + P(R \mid B) P(B \mid R_1 R_2). $$

    Avec $n = 2$ dans la formule précédente :
    $P(A \mid R_1 R_2) = \dfrac{2^2}{2^2 + 2} = \dfrac{4}{6} = \dfrac{2}{3}$.
    $P(B \mid R_1 R_2) = 1/3$.

    $P(R_3 \mid R_1 R_2) = \dfrac{2}{3} \cdot \dfrac{2}{3} + \dfrac{1}{3} \cdot \dfrac{1}{3} = \dfrac{4}{9} + \dfrac{1}{9} = \dfrac{5}{9}$.

    **Comparé à $P(R_1) = 4/9$** : on a appris quelque chose, donc la proba a changé. C'est le pouvoir des probas conditionnelles.

---

## :material-numeric-6-circle: Exercice 6 — Diagramme à 2 événements (ANAC)

<span class="diff diff-moyen">🟡 Moyen</span>

(TD3 ex 3.12)

À EPITA : 60% des élèves obtiennent des points ANAC grâce au sport, 50% via les journées portes ouvertes. Et $1/3$ des sportifs participent aussi aux portes ouvertes.

Représente graphiquement et détermine la proportion d'élèves qui n'ont **aucun** point ANAC.

??? success "Voir la correction"
    Soient $S$ = sport, $J$ = portes ouvertes. On a $P(S) = 0.6$, $P(J) = 0.5$, $P(J \mid S) = 1/3$.

    Donc $P(J \cap S) = P(J \mid S) P(S) = (1/3)(0.6) = 0.2$.

    $P(S \cup J) = P(S) + P(J) - P(S \cap J) = 0.6 + 0.5 - 0.2 = 0.9$.

    Proportion sans aucun point ANAC : $P(\overline{S \cup J}) = 1 - 0.9 = 0.1 = 10\%$.

    **10% des élèves vont devoir redoubler** (sur ce critère).

---

## :material-check-circle-outline: Récap

- [ ] $P(A \mid B) = P(A \cap B)/P(B)$
- [ ] Probabilités totales avec partition $\{B, \overline{B}\}$
- [ ] Bayes pour **retourner** $P(B \mid A) \to P(A \mid B)$
- [ ] Reconnaître le **paradoxe des faux positifs** quand la base est rare
- [ ] Différencier indépendant vs incompatible

[:material-arrow-right-bold: Suite : Variables aléatoires et lois usuelles](5_exos_va_lois.md)
