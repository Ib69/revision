# Cours — Arbres Binaires

## Qu'est-ce qu'un arbre binaire ?

Tu connais les **listes** : chaque élément a un seul voisin (le suivant). Un arbre, c'est une structure où chaque élément peut avoir **deux voisins** (un fils gauche et un fils droit). Ça crée une forme de **branchement** au lieu d'une simple ligne.

!!! example "Analogie 🌳"
    Pense à un **arbre généalogique inversé** : une personne (la racine, en haut) a 2 enfants, qui ont chacun 2 enfants, etc. Les personnes sans enfant sont les **feuilles**.

**Pourquoi les arbres sont importants en informatique ?** On les retrouve **partout** :

- **Système de fichiers** : dossiers et sous-dossiers = arbre
- **HTML / DOM** : chaque balise contient d'autres balises = arbre
- **Expressions mathématiques** : `(3 + 5) × 2` se représente comme un arbre
- **Recherche efficace** : les arbres binaires de recherche permettent de chercher en O(log n)

Un arbre binaire c'est :

- Soit **vide** (`None`)
- Soit un **nœud** qui contient : une clé, un sous-arbre gauche, un sous-arbre droit

```
        5            ← racine
       / \
      2   12         ← fils gauche, fils droit
     / \    \
   -1   0    1       ← nœuds internes ou feuilles
   /     \   /
  4      11 -2
              \
              15
```

!!! tip "Le lien avec la récursion 🪆"
    Un arbre est une **structure récursive par nature** : chaque sous-arbre (gauche ou droit) est lui-même un arbre binaire. C'est pour ça que presque toutes les fonctions sur les arbres sont récursives — on traite la racine, puis on rappelle la même fonction sur le fils gauche et le fils droit.

### La classe BinTree (imposée par EPITA)

```python
class BinTree:
    def __init__(self, key, left, right):
        self.key = key
        self.left = left
        self.right = right
```

**L'arbre vide = `None`**, pas un objet BinTree spécial.

Pour créer l'arbre `<1, <2, _, _>, <3, _, _>>` :
```python
B = BinTree(1, BinTree(2, None, None), BinTree(3, None, None))
```

!!! danger "Règles EPITA — Arbres Binaires"
    **Sur les listes :** seulement `append`, `len`, `range`

    **Interdit :** `L1 + L2`, `L * n`, `L1 == L2`, `min(L)`, `max(L)`, `sum(L)`

    **Autorisé :** `min(a, b)` et `max(a, b)` avec 2 entiers seulement

    **Files :** utiliser la classe `Queue` avec `enqueue`, `dequeue`, `isempty`

---

## Vocabulaire

| Terme | Définition |
|---|---|
| **Racine** | Le nœud tout en haut |
| **Feuille** | Nœud sans enfant (left = right = None) |
| **Point simple** | Nœud avec exactement 1 enfant |
| **Point double** | Nœud avec 2 enfants |
| **Taille** | Nombre total de nœuds |
| **Hauteur** | Longueur du plus long chemin racine → feuille. Arbre vide = -1 |
| **Profondeur** | Distance d'un nœud à la racine (racine = profondeur 0) |
| **Arbre dégénéré** | Chaque nœud a au plus 1 enfant (= liste chaînée) |
| **Arbre complet** (perfect) | Toutes les feuilles au même niveau, pas de point simple |
| **Arbre parfait** (complete) | Tous les niveaux remplis sauf éventuellement le dernier (rempli de gauche à droite) |

---

## 1. Mesures — Taille et Hauteur

Avant de pouvoir manipuler un arbre, il faut savoir le **mesurer**. Les deux mesures de base sont la **taille** (combien de nœuds ?) et la **hauteur** (quelle profondeur maximum ?).

Ces mesures servent partout : pour estimer la **complexité** d'un algorithme, pour **tester la forme** d'un arbre (dégénéré, complet…), ou pour comparer deux arbres.

!!! info "Le réflexe à avoir"
    Ces deux fonctions suivent exactement le **squelette DFS** : cas de base (arbre vide), puis appels récursifs sur gauche et droite, puis on combine les résultats.

### Taille

Le schéma récursif pour la taille :

- Arbre vide → 0
- Sinon → 1 + taille(gauche) + taille(droite)

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>size(B)</code> qui retourne la taille de l'arbre B.
<br>🎯 <code>size(None)</code> → <code>0</code> · <code>size(B_feuille)</code> → <code>1</code> · <code>size(B_petit)</code> → <code>3</code> · <code>size(B_td)</code> → <code>10</code>
</div>
<textarea class="code-input" rows="8">def size(B):
    pass

# Tests (B_feuille, B_petit, B_td sont pré-chargés)
print(size(None))       # → 0
print(size(B_feuille))  # → 1
print(size(B_petit))    # → 3
print(size(B_td))       # → 10</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def size(B):
        if B == None:
            return 0
        else:
            return 1 + size(B.left) + size(B.right)
    ```

### Hauteur

- Arbre vide → -1
- Sinon → 1 + max(hauteur(gauche), hauteur(droite))

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>height(B)</code> qui retourne la hauteur de l'arbre B.
<br>🎯 <code>height(None)</code> → <code>-1</code> · <code>height(B_feuille)</code> → <code>0</code> · <code>height(B_petit)</code> → <code>1</code> · <code>height(B_td)</code> → <code>4</code>
</div>
<textarea class="code-input" rows="8">def height(B):
    pass

# Tests
print(height(None))       # → -1
print(height(B_feuille))  # → 0
print(height(B_petit))    # → 1
print(height(B_td))       # → 4</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def height(B):
        if B == None:
            return -1
        else:
            return 1 + max(height(B.left), height(B.right))
    ```

---

## 2. Parcours en profondeur (DFS)

Comment **visiter tous les nœuds** d'un arbre ? Il y a deux grandes stratégies. La première : le **DFS** (Depth-First Search = parcours en profondeur).

!!! example "Analogie 🏰"
    Imagine un château avec des couloirs qui bifurquent. Le DFS c'est : tu prends toujours le **premier couloir** devant toi, tu vas **jusqu'au bout** (cul-de-sac = feuille), puis tu **reviens en arrière** et tu prends le couloir suivant. Tu explores en **profondeur** avant d'explorer en **largeur**.

Le DFS est **naturellement récursif** : visiter un arbre = traiter la racine + visiter le sous-arbre gauche + visiter le sous-arbre droit. La seule question c'est : **quand** traite-t-on la racine ?

Le DFS visite l'arbre en "descendant" le plus profondément possible avant de remonter. Il y a **3 ordres** selon quand on traite la racine :

```python
def dfs(B):
    if B != None:
        # ICI = préfixe  (racine AVANT les fils)
        dfs(B.left)
        # ICI = infixe   (racine ENTRE les fils)
        dfs(B.right)
        # ICI = suffixe  (racine APRÈS les fils)
```

Sur l'arbre `B_td` (racine 5) :

| Ordre | Résultat |
|---|---|
| Préfixe | 5, 2, -1, 4, 0, 11, 12, 4, 1, -2, 15 |
| Infixe | 4, -1, 2, 0, 11, 5, 4, 12, -2, 15, 1 |
| Suffixe | 4, -1, 11, 0, 2, 4, 15, -2, 1, 12, 5 |

### Affichage en type abstrait `<r, G, D>`

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>display_aa(B)</code> qui <strong>retourne</strong> la représentation <code>&lt;r, G, D&gt;</code> avec <code>_</code> pour l'arbre vide.
<br>🎯 <code>display_aa(None)</code> → <code>"_"</code>
<br>🎯 <code>display_aa(B_petit)</code> → <code>"&lt;1,&lt;2,_,_&gt;,&lt;3,_,_&gt;&gt;"</code>
<br>💡 <em>Utilise la concaténation de chaînes avec <code>str(B.key)</code></em>
</div>
<textarea class="code-input" rows="10">def display_aa(B):
    # Retourne une chaîne "<r, G, D>" ou "_"
    pass

# Tests
print(display_aa(None))       # → _
print(display_aa(B_feuille))  # → <42,_,_>
print(display_aa(B_petit))    # → <1,<2,_,_>,<3,_,_>></textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def display_aa(B):
        if B == None:
            return '_'
        else:
            return '<' + str(B.key) + ',' + display_aa(B.left) + ',' + display_aa(B.right) + '>'
    ```

---

## 3. Parcours en largeur (BFS)

La deuxième stratégie de visite : le **BFS** (Breadth-First Search = parcours en largeur). Au lieu de descendre au fond, on visite **tous les nœuds d'un même niveau** avant de passer au niveau suivant.

!!! example "Analogie 🏢"
    Imagine un immeuble : le DFS c'est prendre l'escalier et visiter **un appartement par étage** en montant puis redescendant. Le BFS c'est visiter **tous les appartements du rez-de-chaussée** d'abord, puis **tous ceux du 1er étage**, etc.

!!! warning "Différence fondamentale avec le DFS"
    Le BFS **n'est pas récursif** ! Il utilise une **file (Queue)** pour se souvenir des nœuds à visiter. C'est le seul algorithme du TD qui utilise une boucle `while`.

Le BFS visite l'arbre **niveau par niveau**, de gauche à droite. Il utilise une **file** (FIFO).

**Algorithme :**
```
1. Enfiler la racine
2. Tant que la file n'est pas vide :
   a. Défiler un nœud
   b. Traiter ce nœud
   c. Enfiler son fils gauche (s'il existe)
   d. Enfiler son fils droit (s'il existe)
```

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>bfs(B)</code> qui <strong>affiche</strong> les clés de l'arbre en ordre hiérarchique (BFS).
<br>🎯 <code>bfs(B_petit)</code> affiche <code>1 2 3</code>
<br>🎯 <code>bfs(B_complet)</code> affiche <code>1 2 3 4 5 6 7</code>
<br>💡 <em>Utilise <code>Queue()</code> avec <code>.enqueue()</code>, <code>.dequeue()</code>, <code>.isempty()</code></em>
</div>
<textarea class="code-input" rows="14">def bfs(B):
    # Affiche les clés en ordre hiérarchique
    if B != None:
        q = Queue()
        # À toi de compléter
        pass

# Tests
bfs(B_petit)     # → 1 2 3
print()
bfs(B_complet)   # → 1 2 3 4 5 6 7</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def bfs(B):
        if B != None:
            q = Queue()
            q.enqueue(B)
            while not q.isempty():
                node = q.dequeue()
                print(node.key, end=' ')
                if node.left != None:
                    q.enqueue(node.left)
                if node.right != None:
                    q.enqueue(node.right)
    ```

---

## 4. Sérialisation — `to_linear`

Un arbre existe en mémoire comme des objets liés entre eux. Mais comment le **sauvegarder dans un fichier** ou le **transmettre sur un réseau** ? Il faut le convertir en **texte** — c'est ce qu'on appelle la **sérialisation**.

!!! info "Pourquoi c'est utile 💾"
    C'est le même principe que quand tu sauvegardes une partie dans un jeu : l'état du jeu (objets, positions, scores) est transformé en texte dans un fichier, qu'on peut relire plus tard pour reconstruire l'état.

On transforme un arbre en chaîne de caractères pour le sauvegarder :

- Arbre vide → `"()"`
- Arbre `<r, G, D>` → `"(r GD)"` (G et D sont eux-mêmes sérialisés)

Exemple : `B_petit` = `BinTree(1, BinTree(2, None, None), BinTree(3, None, None))` → `"(1(2()())(3()()))"`

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>to_linear(B)</code> qui retourne la représentation linéaire.
<br>🎯 <code>to_linear(None)</code> → <code>"()"</code>
<br>🎯 <code>to_linear(B_feuille)</code> → <code>"(42()())"</code>
<br>🎯 <code>to_linear(B_petit)</code> → <code>"(1(2()())(3()()))"</code>
</div>
<textarea class="code-input" rows="10">def to_linear(B):
    pass

# Tests
print(to_linear(None))       # → ()
print(to_linear(B_feuille))  # → (42()())
print(to_linear(B_petit))    # → (1(2()())(3()()))</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def to_linear(B):
        if B == None:
            return "()"
        else:
            return '(' + str(B.key) + to_linear(B.left) + to_linear(B.right) + ')'
    ```

---

## 5. Profondeur moyenne

La profondeur moyenne te donne une idée de **l'efficacité** de ton arbre. Un arbre "bien équilibré" a une profondeur moyenne faible (les nœuds sont proches de la racine = accès rapide). Un arbre dégénéré a une profondeur moyenne élevée (il faut descendre loin pour atteindre certains nœuds).

!!! example "Analogie 🏢"
    C'est comme la **distance moyenne** entre l'entrée d'un immeuble et tous les appartements. Un immeuble large et bas (= arbre complet) : tout le monde est proche de l'entrée. Un immeuble en forme de tour étroite (= arbre dégénéré) : les derniers étages sont très loin.

!!! tip "Technique : retourner un tuple 🎯"
    Cet exercice introduit un pattern très utile : quand tu as besoin de **calculer 2 choses en même temps** (ici la longueur de cheminement ET la taille), tu fais une **fonction auxiliaire qui retourne un tuple** `(a, b)`. C'est le même principe que `fibo_calls` en récursion.

La **longueur de cheminement** = somme des profondeurs de tous les nœuds.
La **profondeur moyenne** = longueur de cheminement / taille.

Pour calculer ça en un seul parcours, on utilise une **fonction auxiliaire qui retourne un tuple** `(longueur, taille)` et qui transporte la profondeur courante en paramètre.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>pm(B)</code> qui retourne la profondeur moyenne de l'arbre B (0 si vide).
<br>🎯 <code>pm(B_feuille)</code> → <code>0.0</code> (un seul nœud à profondeur 0)
<br>🎯 <code>pm(B_petit)</code> → <code>0.666...</code> (profondeurs : 0, 1, 1 → somme 2 / 3 nœuds)
<br>💡 <em>Écris <code>__lc(B, prof)</code> qui retourne <code>(longueur_cheminement, nb_noeuds)</code>.</em>
</div>
<textarea class="code-input" rows="14">def pm(B):
    # Retourne la profondeur moyenne
    pass

# Tests
print(pm(None))       # → 0
print(pm(B_feuille))  # → 0.0
print(pm(B_petit))    # → 0.666...</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def __lc(B, prof):
        if B == None:
            return (0, 0)
        else:
            (lg, ng) = __lc(B.left, prof + 1)
            (ld, nd) = __lc(B.right, prof + 1)
            return (lg + ld + prof, ng + nd + 1)

    def pm(B):
        if B == None:
            return 0
        else:
            (l, n) = __lc(B, 0)
            return l / n
    ```

---

## 6. Tests d'arbres

Tous les arbres ne se ressemblent pas. Certains sont **équilibrés** (bien répartis), d'autres sont **dégénérés** (en forme de liste), d'autres encore sont **complets** (parfaitement symétriques). Savoir reconnaître la **forme** d'un arbre est important car elle détermine les **performances** des algorithmes qui travaillent dessus.

!!! info "Pourquoi c'est important ⚡"
    Sur un arbre **complet** de 1 million de nœuds, la hauteur est ~20. Sur un arbre **dégénéré** de 1 million de nœuds, la hauteur est 999 999. Chercher un élément prend 20 étapes vs 1 million d'étapes — c'est la différence entre O(log n) et O(n) !

### Arbre dégénéré

Un arbre **dégénéré** = chaque nœud a **au plus 1 enfant** (c'est une liste chaînée déguisée).

Propriété : taille = hauteur + 1.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>degenerate(B)</code> qui retourne <code>True</code> si B est dégénéré.
<br>🎯 <code>degenerate(None)</code> → <code>True</code> · <code>degenerate(B_feuille)</code> → <code>True</code>
<br>🎯 <code>degenerate(B_degenere)</code> → <code>True</code> · <code>degenerate(B_petit)</code> → <code>False</code>
<br>💡 <em>Un nœud avec 2 enfants non-vides → pas dégénéré.</em>
</div>
<textarea class="code-input" rows="12">def degenerate(B):
    pass

# Tests
print(degenerate(None))       # → True
print(degenerate(B_feuille))  # → True
print(degenerate(B_degenere)) # → True
print(degenerate(B_petit))    # → False
print(degenerate(B_complet))  # → False</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def __degenerate(B):
        if B.left == None:
            if B.right == None:
                return True
            else:
                return __degenerate(B.right)
        else:
            if B.right == None:
                return __degenerate(B.left)
            else:
                return False

    def degenerate(B):
        return B == None or __degenerate(B)
    ```

### Arbre complet (perfect)

Un arbre **complet** = toutes les feuilles sont au même niveau ET pas de point simple.

Propriété : taille = 2^(h+1) - 1.

**Méthode :** on mesure la hauteur attendue (branche gauche), puis on vérifie que toutes les feuilles sont à cette hauteur.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>perfect(B)</code> qui retourne <code>True</code> si B est complet (perfect tree).
<br>🎯 <code>perfect(None)</code> → <code>True</code> · <code>perfect(B_feuille)</code> → <code>True</code>
<br>🎯 <code>perfect(B_complet)</code> → <code>True</code> · <code>perfect(B_petit)</code> → <code>True</code>
<br>🎯 <code>perfect(B_td)</code> → <code>False</code> · <code>perfect(B_degenere)</code> → <code>False</code>
<br>💡 <em>Écris <code>__perfect(B, h)</code> où h = hauteur attendue. Feuille → h doit être 0. Point simple → False. Point double → vérifie les deux fils avec h-1.</em>
</div>
<textarea class="code-input" rows="16">def perfect(B):
    pass

# Tests
print(perfect(None))       # → True
print(perfect(B_feuille))  # → True
print(perfect(B_complet))  # → True
print(perfect(B_petit))    # → True
print(perfect(B_td))       # → False
print(perfect(B_degenere)) # → False</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def __perfect(B, h):
        if B.left == None:
            if B.right == None:
                return h == 0       # feuille au bon niveau ?
            else:
                return False        # point simple
        else:
            if B.right == None:
                return False        # point simple
            else:
                return __perfect(B.left, h - 1) and __perfect(B.right, h - 1)

    def perfect(B):
        if B == None:
            return True
        else:
            # Calculer la hauteur attendue via la branche gauche
            h = 0
            T = B.left
            while T != None:
                h = h + 1
                T = T.left
            return __perfect(B, h)
    ```

---

## 7. Constructions

Jusqu'ici, on a **analysé** des arbres existants (mesurer, parcourir, tester). Maintenant on va apprendre à **construire** de nouveaux arbres — soit en transformant un arbre existant, soit en en créant un à partir de données brutes.

!!! tip "Le réflexe construction 🏗️"
    Quand on construit un arbre récursivement, on crée un **nouveau** `BinTree(...)` à chaque appel. On ne modifie **jamais** l'arbre original (sauf si explicitement demandé). C'est comme faire une photocopie transformée plutôt que de modifier l'original.

### Transposer un arbre

Transposer = miroir + transformation de la clé :

- Arbre vide → arbre vide
- `<r, G, D>` → `<2*r, transpose(D), transpose(G)>` (on échange gauche/droite)

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>transpose(B)</code> qui retourne le nouvel arbre transposé.
<br>💡 <em>Crée un nouveau <code>BinTree</code> — ne modifie pas l'original.</em>
<br>🎯 <code>transpose(None)</code> → <code>None</code>
</div>
<textarea class="code-input" rows="12">def transpose(B):
    pass

# Test : transpose B_petit = <1, <2,_,_>, <3,_,_>>
# Attendu : <2, <6,_,_>, <4,_,_>>
result = transpose(B_petit)
if result:
    print(result.key)          # → 2
    print(result.left.key)     # → 6  (ancien droit 3 * 2)
    print(result.right.key)    # → 4  (ancien gauche 2 * 2)
print(transpose(None))         # → None</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def transpose(B):
        if B == None:
            return None
        else:
            return BinTree(2 * B.key, transpose(B.right), transpose(B.left))
    ```

### Liste → Objet (list2obj)

Comment stocker un arbre dans un simple **tableau** ? On utilise la **numérotation hiérarchique** : chaque nœud a un numéro, et on peut calculer les numéros des fils avec une formule simple.

```
Numérotation hiérarchique :
         1             ← racine = index 1
        / \
       2   3           ← fils gauche = 2×1, fils droit = 2×1+1
      / \ / \
     4  5 6  7         ← fils de 2 : 2×2=4, 2×2+1=5
```

**Règle :** racine = index 1, fils gauche = 2i, fils droit = 2i+1.

Donnée : une liste `L` où `L[i]` = clé du nœud i (ou `None`). Construire l'arbre.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>list2obj(L)</code> qui construit l'arbre à partir de sa représentation hiérarchique.
<br>🎯 <code>list2obj([None, 1, 2, 3])</code> → arbre <code>&lt;1, &lt;2,_,_&gt;, &lt;3,_,_&gt;&gt;</code>
<br>💡 <em>Écris <code>build(L, i, n)</code> récursif. Si i ≥ n ou L[i] = None → None. Sinon → BinTree(L[i], build(..., 2*i, n), build(..., 2*i+1, n))</em>
</div>
<textarea class="code-input" rows="14">def list2obj(L):
    pass

# Test
B = list2obj([None, 1, 2, 3])
print(B.key)         # → 1
print(B.left.key)    # → 2
print(B.right.key)   # → 3

# Test plus gros : arbre complet
B2 = list2obj([None, 1, 2, 3, 4, 5, 6, 7])
print(B2.left.left.key)   # → 4
print(B2.right.right.key) # → 7</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def build_tree(L, i, n):
        if i >= n or L[i] == None:
            return None
        else:
            return BinTree(L[i], build_tree(L, 2 * i, n), build_tree(L, 2 * i + 1, n))

    def list2obj(L):
        return build_tree(L, 1, len(L))
    ```

---

## 8. Numérotation hiérarchique — search_hier

On a vu dans `list2obj` comment passer d'un **numéro** à un **nœud**. Maintenant on fait l'inverse : à partir d'une **valeur**, retrouver son **numéro hiérarchique** dans l'arbre.

!!! tip "Pattern recherche 🔍"
    Cet exercice utilise le **pattern de recherche** dans un arbre : on cherche à gauche, si on trouve on retourne le résultat, sinon on cherche à droite. C'est le même squelette que tu retrouveras dans `search_code`, `get_kinship`, etc. — c'est **LE** pattern à retenir pour l'examen.

Retrouver le **numéro hiérarchique** d'une valeur dans l'arbre. La racine = 1, fils gauche = 2*num, fils droit = 2*num+1.

<div class="code-exercise">
<div class="exercise-prompt">
✏️ <strong>À toi</strong> — Écris <code>search_hier(B, x)</code> qui retourne le numéro hiérarchique de x dans B, ou <code>None</code> si absent.
<br>🎯 Sur <code>B_td</code> : <code>search_hier(B_td, 5)</code> → <code>1</code> · <code>search_hier(B_td, 2)</code> → <code>2</code> · <code>search_hier(B_td, 10)</code> → <code>None</code>
</div>
<textarea class="code-input" rows="14">def search_hier(B, x):
    pass

# Tests sur B_td (racine=5, gauche=2, droite=12)
print(search_hier(B_td, 5))    # → 1
print(search_hier(B_td, 2))    # → 2
print(search_hier(B_td, 12))   # → 3
print(search_hier(B_td, 10))   # → None</textarea>
<div class="exercise-btns">
<button class="run-btn" onclick="runCode(this)">▶ Exécuter</button>
<button class="reset-btn" onclick="resetCode(this)">↺ Reset</button>
</div>
<pre class="code-output"></pre>
</div>

??? success "Voir la correction"
    ```python
    def rec_hier(B, x, num):
        if B == None:
            return None
        else:
            if B.key == x:
                return num
            else:
                res = rec_hier(B.left, x, 2 * num)
                if res != None:
                    return res
                else:
                    return rec_hier(B.right, x, 2 * num + 1)

    def search_hier(B, x):
        return rec_hier(B, x, 1)
    ```

---

## Fiche récap — Arbres Binaires

### Toutes les fonctions à connaître

| Fonction | Type | Complexité | Schéma |
|---|---|---|---|
| `size(B)` | DFS | O(n) | `1 + size(G) + size(D)` |
| `height(B)` | DFS | O(n) | `1 + max(h(G), h(D))` |
| `display_aa(B)` | DFS préfixe | O(n) | Concaténation de chaînes |
| `bfs(B)` | BFS | O(n) | File : enfiler / défiler |
| `to_linear(B)` | DFS préfixe | O(n) | `"(" + key + G + D + ")"` |
| `pm(B)` | DFS | O(n) | Tuple `(longueur, taille)` |
| `degenerate(B)` | DFS | O(n) | Point double → False |
| `perfect(B)` | DFS | O(n) | Toutes les feuilles à même hauteur |
| `transpose(B)` | DFS | O(n) | Nouveau BinTree inversé |
| `list2obj(L)` | DFS | O(n) | `BinTree(L[i], build(2i), build(2i+1))` |
| `search_hier(B, x)` | DFS | O(n) | Transporter `num`, doubler à chaque niveau |

### DFS vs BFS

| | DFS (profondeur) | BFS (largeur) |
|---|---|---|
| Structure | **Pile** (= récursion) | **File** (Queue) |
| Ordre | Descend jusqu'aux feuilles | Niveau par niveau |
| 3 ordres | Préfixe, infixe, suffixe | Un seul ordre |
| Quand l'utiliser | Presque toujours | Parcours hiérarchique, tests de forme |

### Le squelette DFS (à connaître par cœur)

```python
def f(B):
    if B == None:
        return valeur_vide
    else:
        res_g = f(B.left)
        res_d = f(B.right)
        return combiner(B.key, res_g, res_d)
```

### Le squelette BFS (à connaître par cœur)

```python
def bfs(B):
    if B != None:
        q = Queue()
        q.enqueue(B)
        while not q.isempty():
            node = q.dequeue()
            # traiter node.key
            if node.left != None:
                q.enqueue(node.left)
            if node.right != None:
                q.enqueue(node.right)
```

### Relations taille / hauteur

| Type d'arbre | Relation |
|---|---|
| Quelconque | h ≤ n - 1 |
| Dégénéré | n = h + 1 |
| Complet (perfect) | n = 2^(h+1) - 1 |
| Quelconque | h ≥ log2(n+1) - 1 |

### Pattern "chercher une valeur dans l'arbre"

```python
def search(B, x):
    if B == None:
        return None        # pas trouvé
    else:
        if B.key == x:
            return ...     # trouvé !
        else:
            res = search(B.left, x)
            if res != None:
                return res
            else:
                return search(B.right, x)
```

Ce pattern est réutilisé dans : `search_hier`, `search_code`, `get_kinship`, etc.
