# Cours — Fonctions

## :material-help-circle: Pourquoi on étudie ça ?

Une **fonction**, c'est une **règle qui transforme** des objets d'un ensemble en objets d'un autre.

Tu connais déjà $f : x \mapsto x^2$. Le but de ce chapitre, c'est de regarder **plus en profondeur** ce que fait une fonction :

- Est-ce qu'elle **rate des valeurs** dans son arrivée ? → Surjectivité.
- Est-ce qu'elle **identifie** des éléments différents (deux entrées qui sortent au même résultat) ? → Injectivité.
- Si elle ne fait **aucun des deux**, elle est **bijective** — et là on peut la "remonter à l'envers".

Et on découvre une nouvelle fonction usuelle : $\arctan$, qui est l'inverse de $\tan$.

---

## 1. Définition formelle

Une **fonction** $f$ de $E$ vers $F$ associe à **chaque** élément $x \in E$ **un unique** élément $f(x) \in F$.

- $E$ : **ensemble de départ** (ou domaine)
- $F$ : **ensemble d'arrivée**
- On note $f : E \to F$ ou $f : E \to F,\ x \mapsto f(x)$.

!!! warning "Attention"
    Pour que ce soit une fonction, **chaque** élément de $E$ doit avoir **exactement un** correspondant dans $F$ — pas zéro, pas deux.

    Si l'élément $a \in E$ n'a pas de flèche partant de lui, ce n'est **pas** une fonction de $E$ vers $F$.

---

## 2. Image directe et image réciproque

### 2.1 Image directe

Soit $A \subset E$. L'**image directe** de $A$ par $f$ est :

$$ f(A) = \{f(x),\ x \in A\} \subset F $$

C'est l'**ensemble des résultats** quand on applique $f$ à tous les éléments de $A$.

!!! example "Exemple"
    $f : \mathbb{R} \to \mathbb{R},\ x \mapsto x^2$.
    Alors $f([-1, 2]) = [0, 4]$ (les carrés des nombres entre $-1$ et $2$).

### 2.2 Image réciproque

Soit $B \subset F$. L'**image réciproque** de $B$ par $f$ est :

$$ f^{-1}(B) = \{x \in E,\ f(x) \in B\} \subset E $$

C'est l'ensemble des **antécédents** des éléments de $B$.

!!! warning "Attention au piège de notation"
    $f^{-1}(B)$ **ne suppose pas** que $f$ est bijective ! C'est juste un **ensemble**, défini pour n'importe quelle fonction.

    Quand $f$ est bijective, on note aussi $f^{-1}$ la **fonction réciproque**. Le contexte indique de quoi on parle.

!!! example "Exemple"
    $f : \mathbb{R} \to \mathbb{R},\ x \mapsto x^2$.
    - $f^{-1}(\{4\}) = \{-2, 2\}$ (les antécédents de 4)
    - $f^{-1}(\{-1\}) = \varnothing$ (pas d'antécédent : $x^2 \geq 0$)
    - $f^{-1}([0, 4]) = [-2, 2]$

---

## 3. Injection, surjection, bijection

Trois propriétés clés.

### 3.1 Injective

$f$ est **injective** si **deux éléments différents** de $E$ donnent **deux résultats différents** dans $F$ :

$$ \forall (x_1, x_2) \in E^2,\ f(x_1) = f(x_2) \Rightarrow x_1 = x_2 $$

**Traduction simple** : "pas deux entrées qui sortent au même résultat".

### 3.2 Surjective

$f$ est **surjective** si **tout élément de $F$ a au moins un antécédent** dans $E$ :

$$ \forall y \in F,\ \exists x \in E,\ y = f(x) $$

**Traduction simple** : "tous les éléments de $F$ sont atteints".

### 3.3 Bijective

$f$ est **bijective** si elle est **à la fois** injective **et** surjective :

$$ \forall y \in F,\ \exists !\ x \in E,\ y = f(x) $$

**Traduction simple** : "chaque élément de $F$ est atteint **exactement une fois**".

<div class="retenir" markdown>
**À retenir — image visuelle (patates)**

- **Injective** : chaque flèche d'arrivée a au plus une flèche entrante.
- **Surjective** : chaque élément de $F$ a au moins une flèche entrante.
- **Bijective** : chaque élément de $F$ a exactement une flèche entrante.
</div>

### 3.4 Comment AJUSTER les ensembles ?

Souvent en examen, on demande de **modifier** $E$ ou $F$ pour rendre $f$ injective / surjective / bijective.

| Pour rendre $f$ | Stratégie |
|---|---|
| Injective | **Restreindre $E$** (enlever les éléments qui causent des conflits) |
| Surjective | **Restreindre $F$** à l'image $f(E)$ |
| Bijective | Restreindre $E$ pour l'injectivité, puis $F$ pour la surjectivité |

!!! example "Exemple typique"
    $f : \mathbb{R} \to \mathbb{R},\ x \mapsto x^2$ n'est ni injective (car $(-x)^2 = x^2$) ni surjective (les négatifs ne sont pas atteints).

    - Pour la rendre injective : on restreint à $E = \mathbb{R}_+$.
    - Pour la rendre surjective : on restreint $F$ à $\mathbb{R}_+$.
    - Pour la rendre bijective : $f : \mathbb{R}_+ \to \mathbb{R}_+,\ x \mapsto x^2$. C'est bijective ; sa réciproque est $\sqrt{\cdot}$.

---

## 4. Fonction réciproque

Si $f : E \to F$ est **bijective**, alors il existe une unique fonction $f^{-1} : F \to E$ telle que :

$$ \forall x \in E,\ f^{-1}(f(x)) = x \quad \text{et} \quad \forall y \in F,\ f(f^{-1}(y)) = y $$

**Graphiquement** : le graphe de $f^{-1}$ est obtenu par **symétrie** du graphe de $f$ par rapport à la droite $y = x$.

---

## 5. Fonctions usuelles à connaître

### 5.1 Exponentielle

$\exp : \mathbb{R} \to \mathbb{R}_+^*$. Bijective. Strictement croissante. $\exp(0) = 1$.

### 5.2 Logarithme népérien

$\ln : \mathbb{R}_+^* \to \mathbb{R}$. **Réciproque de $\exp$**. Bijective. Strictement croissante. $\ln(1) = 0$.

### 5.3 Sinus

$\sin : \mathbb{R} \to [-1, 1]$. Surjective de $\mathbb{R}$ vers $[-1, 1]$, mais **pas injective** (périodique).

Restreinte à $[-\pi/2, \pi/2]$, elle devient bijective vers $[-1, 1]$.

### 5.4 Arctangente — **à connaître par cœur**

On part de $\tan : ]-\pi/2, \pi/2[ \to \mathbb{R}$, qui est **bijective** (strictement croissante, atteint tous les réels).

Sa réciproque est $\arctan : \mathbb{R} \to ]-\pi/2, \pi/2[$.

<div class="retenir" markdown>
**À retenir — $\arctan$**

- Domaine : $\mathbb{R}$. Image : $]-\pi/2, \pi/2[$.
- Strictement croissante.
- $\arctan(0) = 0$, $\arctan(1) = \pi/4$, $\arctan(\sqrt{3}) = \pi/3$, $\arctan(1/\sqrt{3}) = \pi/6$.
- **Dérivée** : $\displaystyle \arctan'(y) = \frac{1}{1 + y^2}$.
- $\arctan(-x) = -\arctan(x)$ (impaire).
- Asymptotes horizontales : $\lim_{x \to +\infty} \arctan(x) = \pi/2$, $\lim_{x \to -\infty} \arctan(x) = -\pi/2$.
</div>

**Allure** : courbe en "S" couché, symétrique par rapport à l'origine, comprise entre les droites $y = \pm \pi/2$.

---

## 6. Pièges classiques

!!! danger "À surveiller"
    1. **Bien préciser les ensembles de départ et d'arrivée** quand on parle d'inj/surj/bij. La même formule peut être bijective, injective non surjective, etc., selon $E$ et $F$.

    2. $f^{-1}(B)$ comme **ensemble** existe toujours. La fonction $f^{-1}$ n'existe que si $f$ est bijective.

    3. $f(A \cap B) \subset f(A) \cap f(B)$ — l'égalité n'est pas garantie en général.

    4. **$\arctan(\tan(x)) \neq x$ en général** ! Vrai seulement si $x \in ]-\pi/2, \pi/2[$.

---

## :material-arrow-right-bold: Va t'entraîner

1. [Exos — Graphes](2_exos_graphes.md) : fonctions données par un dessin, calcul de $f(A)$ et $f^{-1}(B)$.
2. [Exos — Usuelles](3_exos_usuelles.md) : exp, ln, sin, **arctan**.
3. [Exos — Style examen](4_exos_examen.md) : enchaînements de questions à la difficulté B3.
