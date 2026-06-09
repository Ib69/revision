# Cours — Dénombrement

## :material-help-circle: Pourquoi on étudie ça ?

**Dénombrer** = **compter intelligemment**. C'est utile partout :

- Combien de mots de longueur 8 sur un alphabet de 26 lettres ?
- Combien d'arrangements possibles pour un mot de passe à 4 chiffres distincts ?
- Combien de mains possibles au poker ?
- Combien d'appels récursifs effectue un algorithme ?

C'est aussi la **base directe des probabilités finies** : sous équiprobabilité, "probabilité = cas favorables / cas possibles" — donc savoir compter, c'est savoir calculer des probas.

L'idée centrale : **trouver le bon modèle** (tirage avec ou sans remise, ordonné ou non) **puis appliquer la bonne formule**.

---

## 1. Cardinaux d'ensembles finis (rappel rapide)

| | Formule |
|---|---|
| Union | $|A \cup B| = |A| + |B| - |A \cap B|$ |
| Union disjointe | $|A \sqcup B| = |A| + |B|$ |
| Produit cartésien | $|A \times B| = |A| \times |B|$ |
| Ensemble des parties | $|\mathcal{P}(E)| = 2^{|E|}$ |
| Complémentaire (dans $\Omega$) | $|\overline{A}| = |\Omega| - |A|$ |

---

## 2. Principe multiplicatif — la règle de base

Avant même les formules, il y a **une règle qui gouverne tout le dénombrement** :

<div class="retenir" markdown>
**Principe multiplicatif**

Si une action se décompose en **étapes indépendantes**, le nombre total de façons de faire l'action est le **produit** du nombre de choix à chaque étape.

Étape 1 : $a$ choix. Étape 2 : $b$ choix. Étape 3 : $c$ choix. → Total : $a \times b \times c$.
</div>

**Indépendant** = le nombre de choix d'une étape ne change pas selon ce qu'on a choisi avant.

**Exemple** : un code = 1 chiffre (10 choix) puis 1 lettre (26 choix) → $10 \times 26 = 260$ codes.

**Exemple** : équipe de foot avec 3 gardiens et 21 autres joueurs pour 10 postes :
- Étape 1 — choisir le gardien : 3 choix
- Étape 2 — remplir les 10 autres postes dans l'ordre : $A_{21}^{10}$ choix
- Total : $3 \times A_{21}^{10}$

!!! tip "Le réflexe"
    Dès que tu peux découper un problème en étapes indépendantes, tu **multiplies** les résultats. Les formules ($n^k$, $A_n^k$, $\binom{n}{k}$) ne font que compter **une étape à la fois** — c'est le principe multiplicatif qui les **combine**.

---

## 3. Les 4 types de tirage — LE tableau à connaître

On tire $k$ éléments d'un ensemble à $n$ éléments. **Quatre cas** selon :

- **Successif vs Simultané** = est-ce que l'ordre compte ?
- **Avec remise vs Sans remise** = est-ce qu'on peut tirer deux fois le même ?

<div class="retenir" markdown>
**À retenir — les 4 formules**

| Type de tirage | Ordre | Répétition | Formule |
|---|---|---|---|
| Successif **avec** remise | ✅ ordonné | ✅ peut répéter | $n^k$ |
| Successif **sans** remise | ✅ ordonné | ❌ pas de répétition | $A_n^k = \dfrac{n!}{(n-k)!}$ |
| Simultané (sans remise) | ❌ pas d'ordre | ❌ pas de répétition | $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ |
| Permutation de $n$ éléments | ✅ tous | ❌ | $n!$ |

Le 4e cas est juste le cas successif sans remise avec $k = n$.
</div>

### 2.1 Successif avec remise → $n^k$

Pour chaque tirage (1er, 2e, …, $k$-ième), on a $n$ choix indépendants. Donc $n \times n \times \dots \times n = n^k$.

**Exemple** : code à 4 chiffres → $10^4 = 10\,000$ codes possibles.

### 2.2 Successif sans remise → arrangements $A_n^k$

Au 1er tirage, $n$ choix. Au 2e, $n-1$ (on a enlevé celui d'avant). Au $k$-ième, $n-k+1$.

$$ A_n^k = n \times (n-1) \times \dots \times (n-k+1) = \frac{n!}{(n-k)!} $$

**Exemple** : 11 joueurs choisis parmi 24 **avec poste précis** → $A_{24}^{11}$.

### 2.3 Simultané = combinaisons $\binom{n}{k}$

Quand on tire **simultanément** $k$ objets dans une urne, **l'ordre ne compte pas**.

$$ \binom{n}{k} = \frac{A_n^k}{k!} = \frac{n!}{k!(n-k)!} $$

**Pourquoi diviser par $k!$ ?** Parce que pour chaque sous-ensemble de $k$ éléments, il y a $k!$ ordres possibles ; en passant de "ordonné" à "non ordonné", on divise par cette redondance.

**Exemple** : 11 joueurs choisis parmi 24 **sans poste** → $\binom{24}{11}$.

### 2.4 Permutations → $n!$

Une **permutation** de $n$ éléments distincts = un ordre de classement. Il y en a $n!$.

**Exemple** : faire passer 10 étudiants au tableau dans un ordre quelconque → $10!$ ordres possibles.

---

## 4. Anagrammes (mots avec lettres répétées)

Pour un mot de longueur $n$ dont les lettres se répètent :

$$ \text{nb d'anagrammes} = \frac{n!}{n_1! \cdot n_2! \cdots n_p!} $$

où $n_i$ est le nombre d'occurrences de la $i$-ème lettre distincte.

**Exemple** : "voiture" → 7 lettres toutes distinctes → $7! = 5040$ anagrammes.

"saperlipopette" → 14 lettres, avec : s(1), a(1), p(3), e(3), r(1), l(1), i(1), o(1), t(2). On a $\dfrac{14!}{3! \cdot 3! \cdot 2!}$.

---

## 5. Triangle de Pascal et formule de Pascal

### 4.1 La formule

<div class="retenir" markdown>
**Formule de Pascal** — pour $1 \leq k \leq n-1$ :

$$ \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} $$
</div>

**Interprétation combinatoire** : choisir $k$ éléments parmi $n$ = soit on prend le $n$-ième (et il faut $k-1$ autres parmi les $n-1$ restants), soit on ne le prend pas (et il faut $k$ parmi les $n-1$ restants).

### 4.2 Triangle de Pascal

```
n=0:        1
n=1:       1 1
n=2:      1 2 1
n=3:     1 3 3 1
n=4:    1 4 6 4 1
n=5:   1 5 10 10 5 1
```

Chaque entrée = somme des deux du dessus.

### 4.3 Symétrie

$\binom{n}{k} = \binom{n}{n-k}$

(Choisir $k$ éléments à prendre = choisir $n-k$ éléments à laisser.)

---

## 6. Formule du binôme de Newton

<div class="retenir" markdown>
**Binôme de Newton** — pour $(x, y) \in \mathbb{R}^2$ et $n \in \mathbb{N}$ :

$$ (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k} $$
</div>

**Exemple** : $(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$ (avec les coefficients du triangle).

### Conséquence : $|\mathcal{P}(E)| = 2^n$

On applique Newton avec $x = y = 1$ :

$$ 2^n = (1+1)^n = \sum_{k=0}^{n} \binom{n}{k} = |\mathcal{P}(E)| $$

(En effet, $\binom{n}{k}$ = nombre de sous-ensembles de taille $k$, et la somme totalise tous les sous-ensembles.)

---

## 7. Pièges classiques

!!! danger "Pièges à éviter"
    1. **Ordre ou pas ?** C'est la question #1 à se poser AVANT de choisir une formule.

    2. **Tirage simultané = sans ordre et sans remise.** Pas besoin de réfléchir, c'est $\binom{n}{k}$ par défaut.

    3. **"Au moins une"** : passe au complémentaire ! "Au moins un X" = "total – aucun X".

    4. **$\binom{n}{k}$ se note aussi $C_n^k$** dans certains exercices/QCM. À reconnaître.

    5. **$A_n^k = k! \binom{n}{k}$** : relation utile à retenir.

---

## 8. Mini-méthode pour aborder un problème de dénombrement

1. **Identifie l'ensemble** dont on cherche le cardinal.
2. **Y a-t-il un ordre** (successif) ou pas (simultané) ?
3. **Y a-t-il répétition** (avec remise) ou pas (sans remise) ?
4. Choisis la formule adaptée.
5. **Cas "au moins un"** : passe au complémentaire.
6. **Vérifie l'ordre de grandeur** : un nombre négatif ou non-entier = erreur.

---

## :material-arrow-right-bold: Va t'entraîner

1. [Exos — Cardinaux](2_exos_cardinaux.md) : retour aux ensembles finis, premiers calculs.
2. [Exos — Combinatoire](3_exos_combinatoire.md) : tirages, anagrammes, équipes.
3. [Exos — Binôme](4_exos_binome.md) : Pascal, Newton, sommes.
4. [Exos — Style examen](5_exos_examen.md).
