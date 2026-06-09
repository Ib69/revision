# Cours — Ensembles

## :material-help-circle: Pourquoi on étudie ça ?

Un **ensemble**, c'est juste un **paquet d'objets**. Une liste de gens dans une classe, les nombres pairs, les lettres de l'alphabet, les fonctions paires... tout ça, ce sont des ensembles.

Les ensembles, c'est le **vocabulaire** des maths. Avant de parler de fonctions, de probas, de matrices, il faut savoir dire :

- "tel objet **appartient** à tel paquet"
- "tel paquet est **inclus** dans tel autre paquet"
- "voici l'**union**, l'**intersection** de deux paquets"

Tant que ces mots ne sont pas posés, tout le reste glisse.

---

## 1. Vocabulaire de base

### 1.1 Appartenance, inclusion

Un **ensemble** $E$ est une collection d'objets, appelés ses **éléments**.

- Si $x$ est un élément de $E$, on écrit $x \in E$ ("$x$ appartient à $E$").
- Sinon, $x \notin E$.

!!! example "Exemple"
    $E = \{1, 2, 3\}$. Alors $2 \in E$, mais $5 \notin E$.

Un ensemble $A$ est **inclus** dans un ensemble $B$ si **tous les éléments de $A$ sont aussi dans $B$**. On note $A \subset B$.

$$ A \subset B \iff \forall x,\ (x \in A \Rightarrow x \in B) $$

!!! warning "Ne confonds pas $\in$ et $\subset$ !"
    - $\in$ relie **un élément** à un **ensemble**. Ex : $3 \in \{1,2,3\}$.
    - $\subset$ relie **un ensemble** à un **ensemble**. Ex : $\{3\} \subset \{1,2,3\}$.

    Donc $3 \in \{1,2,3\}$ ✅ mais $3 \subset \{1,2,3\}$ ❌ (3 n'est pas un ensemble).
    Et $\{3\} \in \{1,2,3\}$ ❌ mais $\{3\} \subset \{1,2,3\}$ ✅.

### 1.2 Égalité de deux ensembles

$$ A = B \iff A \subset B \text{ et } B \subset A $$

**Méthode standard pour démontrer $A = B$** : on montre les deux inclusions, l'une après l'autre.

### 1.3 L'ensemble vide

L'ensemble vide $\varnothing$ n'a aucun élément. Il est **inclus dans n'importe quel ensemble** ($\varnothing \subset E$ pour tout $E$).

---

## 2. Comment décrire un ensemble

Il y a **3 façons** d'écrire un ensemble. Tu dois les connaître toutes les trois.

| Méthode | Comment | Exemple |
|---|---|---|
| **Extension** | On liste tous les éléments | $\{1, 3, 5, 7, 9\}$ |
| **Compréhension** | "ensemble des $x$ tels que..." | $\{n \in \mathbb{N},\ n \text{ impair},\ n < 10\}$ |
| **Paramétrique** | "ensemble des $f(k)$ quand $k$ varie..." | $\{2k+1,\ k \in \{0,1,2,3,4\}\}$ |

!!! tip "À retenir"
    - **Extension** = tu listes. Pratique pour des petits ensembles.
    - **Compréhension** = tu donnes une **condition** que doivent vérifier les éléments.
    - **Paramétrique** = tu donnes une **formule** qui génère les éléments quand un paramètre varie.

---

## 3. Opérations sur les ensembles

Soient $A$ et $B$ deux ensembles, vivant dans un même **référentiel** $\Omega$ (l'univers).

### 3.1 Union

$$ A \cup B = \{x,\ x \in A \text{ ou } x \in B\} $$

"Les éléments qui sont dans $A$, dans $B$, ou dans les deux."

### 3.2 Intersection

$$ A \cap B = \{x,\ x \in A \text{ et } x \in B\} $$

"Les éléments qui sont dans $A$ **et** dans $B$."

Si $A \cap B = \varnothing$, on dit que $A$ et $B$ sont **disjoints** (rien en commun).

### 3.3 Complémentaire

$$ \overline{A} = \{x \in \Omega,\ x \notin A\} $$

"Tout ce qui n'est pas dans $A$ (en restant dans $\Omega$)."

### 3.4 Différence

$$ A \setminus B = A \cap \overline{B} = \{x,\ x \in A \text{ et } x \notin B\} $$

### 3.5 Produit cartésien

$$ A \times B = \{(a, b),\ a \in A,\ b \in B\} $$

C'est l'ensemble des **couples ordonnés** $(a, b)$ où $a$ vient de $A$ et $b$ vient de $B$.

!!! warning "L'ordre compte !"
    En général $A \times B \neq B \times A$.
    Exemple : $(1, 2) \in \{1,2\} \times \{2,3\}$ mais $(1, 2) \notin \{2,3\} \times \{1,2\}$ (car le premier élément doit être dans $\{2,3\}$).

### 3.6 Ensemble des parties

$$ \mathcal{P}(E) = \{A,\ A \subset E\} $$

C'est **l'ensemble de tous les sous-ensembles** de $E$ (y compris $\varnothing$ et $E$ lui-même).

!!! example "Exemple"
    Si $E = \{1, 2\}$, alors $\mathcal{P}(E) = \big\{ \varnothing,\ \{1\},\ \{2\},\ \{1, 2\} \big\}$.

    $\mathcal{P}(E)$ contient $4$ éléments, qui sont **eux-mêmes des ensembles**.

---

## 4. Cardinal d'un ensemble fini

Le **cardinal** d'un ensemble fini $E$, noté $\text{Card}(E)$, $|E|$ ou $\#E$, c'est juste son **nombre d'éléments**.

<div class="retenir" markdown>
**À retenir — les formules de cardinaux**

- $|A \cup B| = |A| + |B| - |A \cap B|$
- Si $A \cap B = \varnothing$ : $|A \sqcup B| = |A| + |B|$
- $|A \times B| = |A| \times |B|$
- $|\mathcal{P}(E)| = 2^{|E|}$
- **Formule du crible (3 ensembles)** :
  $$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$
</div>

### Mini-exemple

40 étudiants, 35 parlent anglais, 20 parlent espagnol, tous parlent au moins une des deux. Combien parlent les deux ?

$|A \cup E| = 40$, $|A| = 35$, $|E| = 20$.
$|A \cap E| = |A| + |E| - |A \cup E| = 35 + 20 - 40 = 15$.

---

## 5. Partition

Une **partition** d'un ensemble $E$, c'est une **découpe** de $E$ en sous-ensembles $A_1, A_2, \dots, A_n$ tels que :

1. Chacun est non vide : $A_i \neq \varnothing$
2. Ils sont **deux à deux disjoints** : $A_i \cap A_j = \varnothing$ pour $i \neq j$
3. Leur union recouvre tout : $A_1 \cup A_2 \cup \dots \cup A_n = E$

!!! tip "Image mentale"
    Imagine que tu coupes une pizza : chaque part est non vide, les parts ne se chevauchent pas, et ensemble elles font toute la pizza. Ça, c'est une partition.

---

## 6. Pièges classiques

!!! danger "Pièges à éviter"
    1. **$\in$ vs $\subset$** : c'est LA confusion #1. Demande-toi toujours : "à gauche, c'est un élément ou un ensemble ?"

    2. **$\varnothing$ vs $\{\varnothing\}$** : $\varnothing$ n'a aucun élément, mais $\{\varnothing\}$ en a **un** (qui est l'ensemble vide). Donc $|\{\varnothing\}| = 1$.

    3. **$A \times B \neq B \times A$** : les couples sont ordonnés.

    4. **Cardinal de $\mathcal{P}(E)$ = $2^n$**, pas $n^2$ ni $n!$.

---

## :material-arrow-right-bold: Va t'entraîner

1. [Exos — Bases](2_exos_bases.md) : appartenance, inclusion, écriture des ensembles
2. [Exos — Opérations](3_exos_operations.md) : $\cup$, $\cap$, $\setminus$, $\times$, cardinaux
3. [Exos — Style examen](4_exos_examen.md) : sujets du même niveau que les examens B3
