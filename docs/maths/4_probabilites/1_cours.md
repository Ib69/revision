# Cours — Probabilités

## :material-help-circle: Pourquoi on étudie ça ?

Les **probabilités**, c'est l'outil pour **quantifier le hasard**. On veut savoir :

- Quelle chance d'obtenir un brelan au poker ?
- Quelle proba qu'un algo de tri prenne du temps ?
- Si un test médical est positif, quelle chance d'être malade ?

C'est la **brique de base** de tout ce qui touche aux statistiques, à l'IA, à la complexité d'algorithmes en moyenne.

Bonne nouvelle : dans ce chapitre, on reste sur les **probabilités finies** (univers fini), ce qui veut dire que **tout se ramène à du dénombrement**.

---

## 1. Espace probabilisé

### 1.1 Univers et événements

- **Univers** $\Omega$ : ensemble de **toutes les issues possibles** de l'expérience aléatoire.
- **Événement** : une partie $A \subset \Omega$.
- **Événement élémentaire** : un singleton $\{\omega\}$.

**Exemple** : lancer d'un dé à 6 faces.
$\Omega = \{1, 2, 3, 4, 5, 6\}$. L'événement "obtenir un nombre pair" est $A = \{2, 4, 6\}$.

### 1.2 Mesure de probabilité

Une **probabilité** est une application $P : \mathcal{P}(\Omega) \to [0, 1]$ vérifiant les **axiomes de Kolmogorov** :

<div class="retenir" markdown>
**Axiomes**

1. $P(\Omega) = 1$
2. $\forall A,\ P(A) \geq 0$
3. Si $A \cap B = \varnothing$ : $P(A \cup B) = P(A) + P(B)$
</div>

### 1.3 Propriétés (à savoir redémontrer)

- $P(\varnothing) = 0$
- $P(\overline{A}) = 1 - P(A)$
- $0 \leq P(A) \leq 1$
- $A \subset B \Rightarrow P(A) \leq P(B)$ et $P(B \setminus A) = P(B) - P(A)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (formule des probabilités)

---

## 2. Équiprobabilité

Quand toutes les issues élémentaires ont **la même probabilité** $1/|\Omega|$, on parle d'**équiprobabilité** (ou loi uniforme).

<div class="retenir" markdown>
**Formule magique en équiprobabilité**

$$ P(A) = \frac{|A|}{|\Omega|} = \frac{\text{cas favorables}}{\text{cas possibles}} $$

Tout devient un problème de **dénombrement**.
</div>

**Exemple** : dans un jeu de 32 cartes, tirage de 5 cartes. Probabilité d'avoir 4 trèfles ?

$|\Omega| = \binom{32}{5}$ (mains possibles).
$|A| = \binom{8}{4} \times \binom{24}{1}$ (4 trèfles parmi 8, et 1 autre carte parmi 24 non-trèfles).

$P(A) = \dfrac{\binom{8}{4}\binom{24}{1}}{\binom{32}{5}}$.

---

## 3. Probabilités conditionnelles

### 3.1 Définition

Si $P(B) > 0$, la **probabilité de $A$ sachant $B$** est :

$$ P(A \mid B) = \frac{P(A \cap B)}{P(B)} $$

**Intuition** : on se met "à l'intérieur de $B$" et on calcule la proportion de $B$ qui est aussi dans $A$.

### 3.2 Formule des probabilités composées

$$ P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A) $$

### 3.3 Formule des probabilités totales

Si $\{B_1, B_2, \dots, B_n\}$ est une **partition** de $\Omega$ (chaque $B_i$ disjoint, recouvrant tout, de probabilité $> 0$) :

<div class="retenir" markdown>
**Probabilités totales**

$$ P(A) = \sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i) $$

Très utilisé avec une **partition à 2 éléments** : $\{B, \overline{B}\}$.
$$P(A) = P(A \mid B) P(B) + P(A \mid \overline{B}) P(\overline{B})$$
</div>

### 3.4 Formule de Bayes

C'est la formule de **retournement** : on connaît $P(B \mid A)$, on veut $P(A \mid B)$.

<div class="retenir" markdown>
**Bayes**

$$ P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)} $$

Souvent on calcule $P(B)$ avec les probabilités totales en bas.
</div>

### 3.5 Indépendance

Deux événements $A$ et $B$ sont **indépendants** si :

$$ P(A \cap B) = P(A) \cdot P(B) $$

Équivalent (si $P(B) > 0$) à : $P(A \mid B) = P(A)$ — savoir que $B$ s'est produit ne change pas la proba de $A$.

!!! danger "Indépendant ≠ Incompatible !"
    - **Incompatibles** : $A \cap B = \varnothing$, donc $P(A \cap B) = 0$.
    - **Indépendants** : $P(A \cap B) = P(A) P(B)$.

    Si $A$ et $B$ sont incompatibles **et** $P(A), P(B) > 0$, alors ils ne sont **PAS indépendants** (car $0 \neq P(A) P(B)$).

---

## 4. Variables aléatoires finies

### 4.1 Définition

Une **variable aléatoire** (VA) $X$ est une **fonction** $X : \Omega \to \mathbb{R}$ qui à chaque issue associe une valeur numérique.

L'ensemble des valeurs prises est noté $X(\Omega) = \{x_1, x_2, \dots, x_n\}$.

**Exemple** : dé à 6 faces. $X$ = "valeur obtenue". $X(\Omega) = \{1, 2, 3, 4, 5, 6\}$.

### 4.2 Loi de $X$

La **loi** de $X$ = liste des $P(X = x_i)$ pour chaque $x_i \in X(\Omega)$.

Vérification : $\sum_i P(X = x_i) = 1$.

### 4.3 Espérance

L'**espérance** = la moyenne pondérée des valeurs :

$$ \mathbb{E}(X) = \sum_{i} x_i \cdot P(X = x_i) $$

**Intuition** : si on répète l'expérience plein de fois, la moyenne des $X$ tend vers $\mathbb{E}(X)$.

### 4.4 Variance et écart-type

$$ \mathbb{V}(X) = \mathbb{E}\big[(X - \mathbb{E}(X))^2\big] = \mathbb{E}(X^2) - \mathbb{E}(X)^2 $$

(La seconde formule est la **formule de König–Huygens**, plus simple à calculer.)

L'écart-type est $\sigma(X) = \sqrt{\mathbb{V}(X)}$.

**Intuition** : variance = à quel point les valeurs sont **étalées** autour de la moyenne.

### 4.5 Linéarité

<div class="retenir" markdown>
**Pour $a, b \in \mathbb{R}$ :**

- $\mathbb{E}(aX + b) = a\mathbb{E}(X) + b$
- $\mathbb{V}(aX + b) = a^2 \mathbb{V}(X)$
- Pour deux VA $X, Y$ : $\mathbb{E}(X + Y) = \mathbb{E}(X) + \mathbb{E}(Y)$ (**toujours vrai**)
- Si $X$ et $Y$ sont **indépendantes** : $\mathbb{V}(X + Y) = \mathbb{V}(X) + \mathbb{V}(Y)$
</div>

---

## 5. Lois usuelles à connaître

### 5.1 Loi uniforme sur $[\![1, n]\!]$

$P(X = k) = \dfrac{1}{n}$ pour $k \in [\![1, n]\!]$.

- $\mathbb{E}(X) = \dfrac{n+1}{2}$
- $\mathbb{V}(X) = \dfrac{n^2 - 1}{12}$

### 5.2 Loi de Bernoulli $\mathcal{B}(p)$

$X$ vaut 1 (succès) avec proba $p$, 0 (échec) avec proba $1 - p$.

- $\mathbb{E}(X) = p$
- $\mathbb{V}(X) = p(1 - p)$

**Quand l'utiliser** : tout phénomène à **deux issues** (succès/échec).

### 5.3 Loi binomiale $\mathcal{B}(n, p)$

$X$ = nombre de **succès** sur $n$ répétitions **indépendantes** d'une Bernoulli.

$$ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k \in [\![0, n]\!] $$

- $\mathbb{E}(X) = np$
- $\mathbb{V}(X) = np(1 - p)$

**Quand l'utiliser** : "on répète $n$ fois la même expérience à 2 issues, comptons les succès".

### 5.4 Loi hypergéométrique (en bonus)

$X$ = nombre de "bonnes" boules tirées dans un tirage **simultané** de $k$ parmi $n$, sachant qu'il y a $a$ bonnes parmi les $n$.

$$ P(X = j) = \frac{\binom{a}{j} \binom{n-a}{k-j}}{\binom{n}{k}} $$

(Pratique au poker, au loto, etc.)

---

## 6. Pièges classiques

!!! danger "À surveiller"
    1. **Indépendant ≠ Incompatible** (déjà dit, mais c'est LE piège).

    2. **Proba toujours dans $[0, 1]$** : si tu trouves un résultat $> 1$ ou $< 0$, c'est faux.

    3. **Avec ou sans remise** ? Si avec remise : binomiale. Si simultané : hypergéométrique.

    4. **Bien choisir l'univers** $\Omega$ : si tu confonds "tirage ordonné" et "tirage simultané", tu vas mélanger numérateur et dénominateur.

    5. **Sachant** : $P(A \mid B) \neq P(B \mid A)$ en général ! Bayes existe précisément pour les relier.

---

## :material-arrow-right-bold: Va t'entraîner

1. [Exos — Modélisation](2_exos_modelisation.md) : décrire $\Omega$ et les axiomes
2. [Exos — Équiprobabilité](3_exos_equiprobabilite.md) : cartes, dés, urnes
3. [Exos — Conditionnelles](4_exos_conditionnelles.md) : arbres, totales, Bayes
4. [Exos — Variables aléatoires](5_exos_va_lois.md) : loi, espérance, variance, lois usuelles
5. [Exos — Style examen](6_exos_examen.md)
