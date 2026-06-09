# Algorithmique — S2 EPITA

## Programme du B3

Deux chapitres à maîtriser :

| Chapitre | Contenu | Temps estimé |
|---|---|---|
| [1. Récursion](1_recursion/1_cours.md) | Tout résoudre sans boucle — factorielle, Fibonacci, recherche dichotomique | ~1h30 |
| [2. Arbres Binaires](2_arbres_binaires/1_cours.md) | BinTree, parcours DFS/BFS, sérialisation, tests, constructions | ~2h30 |

---

## Règles EPITA

!!! danger "Ce qui est interdit"
    - **Return débranchant** : pas de `return` au milieu d'une boucle `for`/`while`
    - **Opérateurs sur les listes** : `L1 + L2`, `L * n`, `L1 == L2` sont **interdits**
    - **Fonctions Python interdites** : pas de `sum()`, `sorted()`, `list()`, `min(L)`/`max(L)` sur une liste
    - **TD1 Récursion** : les **boucles sont interdites**, tout doit être récursif

!!! tip "Ce qui est autorisé"
    - `L.append(e)`, `len(L)`, `range(...)`
    - `min(a, b)` et `max(a, b)` avec **deux entiers seulement**
    - `print()`, `str()`
    - La classe `Queue` avec `enqueue`, `dequeue`, `isempty`
    - Écrire des fonctions intermédiaires (avec leur spécification)

---

## Comment utiliser ce site

Chaque page de cours contient des **zones de code interactives** :

1. Lis le concept
2. Écris ton code dans la zone
3. Clique **▶ Exécuter** — ton code tourne dans le navigateur
4. Compare avec la correction (dépliable)

Le premier clic charge Python dans le navigateur (~5 secondes), ensuite c'est instantané.

!!! info "Arbres pré-chargés"
    Les classes `BinTree` et `Queue` sont disponibles automatiquement, ainsi que ces arbres d'exemple :

    - `B_vide` = `None`
    - `B_feuille` = `BinTree(42, None, None)`
    - `B_petit` = `BinTree(1, BinTree(2, ...), BinTree(3, ...))`
    - `B_complet` = arbre complet de hauteur 2 (7 nœuds)
    - `B_degenere` = `BinTree(1, BinTree(2, BinTree(3, ...), None), None)`
    - `B_td` = arbre du TD (figure 1, 10 nœuds)
