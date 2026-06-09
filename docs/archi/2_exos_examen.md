# Exercices — Spécial Examen

Cette page couvre **les 4 types d'exercices** de l'examen B3, rangés **du plus dur au plus facile**. Si tu maîtrises les 7 exos ci-dessous, tu maîtrises l'examen.

À chaque exo : un **badge de difficulté**, le **cours lié** (clique pour réviser la notion), l'énoncé, puis une **correction détaillée** qui t'explique la méthode pas-à-pas.

| Exo | Type d'exam | Compétence |
|---|---|---|
| **1** | Ex 2 (~6 pts) | Compteur synchrone **JK** |
| **2** | Ex 3 (~4 pts) | Compteur synchrone **D** |
| **3** | Ex 4 (~3 pts) | **Câbler** un compteur asynchrone modulo m |
| **4** | Ex 4 (~3 pts) | **Reconnaître** un montage |
| **5** | Ex 1 (~7 pts) | **Chronogramme** d'un montage |
| **6** | Ex 1 (~7 pts) | **Chronogramme** de bascules (modes de synchro) |
| **7** | base | Tables de vérité & réflexes |

---

!!! note "Rappel express — les 2 tables de transition (à connaître par cœur)"
    Pour concevoir un **compteur synchrone**, on part de la séquence voulue et on se demande, pour chaque bit, **comment piloter l'entrée de la bascule pour obtenir la bonne transition**. C'est le rôle des **tables de transition** :

    **Bascule JK** — `Φ` = « peu importe » (0 ou 1) :

    | Q(t) → Q(t+1) | J | K |
    |:---:|:---:|:---:|
    | 0 → 0 | 0 | Φ |
    | 0 → 1 | 1 | Φ |
    | 1 → 0 | Φ | 1 |
    | 1 → 1 | Φ | 0 |

    **Bascule D** — trivial, car `D = Q(t+1)` :

    | Q(t) → Q(t+1) | D |
    |:---:|:---:|
    | 0 → 0 | 0 |
    | 0 → 1 | 1 |
    | 1 → 0 | 0 |
    | 1 → 1 | 1 |

    Les `Φ` sont tes **meilleurs amis** : ils permettent de simplifier énormément les tableaux de Karnaugh.

---

## Exercice 1 — Compteur synchrone modulo 5 (bascules JK) <span class="diff diff-dur">🔴 Niveau examen</span>

> :material-book-open-page-variant: **Cours lié :** [La bascule JK](1_bascules/1_intro.md#la-bascule-jk-la-rs-sans-etat-interdit) · rappel des tables de transition ci-dessus.

On veut un **compteur synchrone modulo 5** (il compte `0 → 1 → 2 → 3 → 4 → 0 …`) avec des **bascules JK synchronisées sur front montant**. Les sorties sont $Q_2 Q_1 Q_0$ (poids fort → poids faible).

**1.** Écris la séquence en binaire, puis remplis le tableau des entrées $J_2 K_2 J_1 K_1 J_0 K_0$.

**2.** Donne les expressions les plus simplifiées (tableaux de Karnaugh, **les états 5, 6, 7 sont des `Φ`**).

??? success "Voir la correction détaillée"
    **Étape 1 — la séquence et les transitions**

    | $Q_2$ | $Q_1$ | $Q_0$ | $J_2$ | $K_2$ | $J_1$ | $K_1$ | $J_0$ | $K_0$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    | 0 | 0 | 0 | 0 | Φ | 0 | Φ | 1 | Φ |
    | 0 | 0 | 1 | 0 | Φ | 1 | Φ | Φ | 1 |
    | 0 | 1 | 0 | 0 | Φ | Φ | 0 | 1 | Φ |
    | 0 | 1 | 1 | 1 | Φ | Φ | 1 | Φ | 1 |
    | 1 | 0 | 0 | Φ | 1 | 0 | Φ | 0 | Φ |

    *(Lecture d'une ligne : on regarde l'état actuel et l'état suivant dans la séquence, puis on applique la table de transition JK pour chaque bit.)*

    **Étape 2 — simplification (Karnaugh, avec Φ aux états 5, 6, 7)**

    - $J_0 = \overline{Q_2}$  ·  $K_0 = 1$
    - $J_1 = Q_0$  ·  $K_1 = Q_0$
    - $J_2 = Q_1 \cdot Q_0$  ·  $K_2 = 1$

    **Vérification rapide (super important — fais-le toujours)** : on simule depuis 000.

    | État | $J_0K_0$ | $J_1K_1$ | $J_2K_2$ | → état suivant |
    |---|---|---|---|---|
    | 000 | 1,1 bascule | 0,0 mémoire | 0,1 reset | **001** ✓ |
    | 001 | 1,1 bascule | 1,1 bascule | 0,1 reset | **010** ✓ |
    | 010 | 1,1 bascule | 0,0 mémoire | 0,1 reset | **011** ✓ |
    | 011 | 1,1 bascule | 1,1 bascule | 1,1 bascule | **100** ✓ |
    | 100 | 0,1 reset | 0,0 mémoire | 0,1 reset | **000** ✓ |

    Le cycle boucle bien sur 5 états. 🎯

    !!! tip "La méthode en 4 temps (vraie pour TOUS les compteurs synchrones)"
        1. **Écris la séquence** en binaire.
        2. Pour chaque bit, déduis $J/K$ (ou $D$) avec la **table de transition**.
        3. **Karnaugh** chaque entrée (profite des `Φ` des états inutilisés !).
        4. **Simule** ta solution pour vérifier que le cycle boucle.

---

## Exercice 2 — Le MÊME compteur, mais en bascules D <span class="diff diff-dur">🔴 Niveau examen</span>

> :material-book-open-page-variant: **Cours lié :** [La bascule D](1_bascules/1_intro.md#la-bascule-d-la-photocopieuse) · rappel des tables de transition ci-dessus.

On refait **exactement le même compteur modulo 5** (`0 → 1 → 2 → 3 → 4 → 0`), mais cette fois avec des **bascules D**. Compare avec l'exo 1 : tu verras que la partie « table de transition » est **triviale** pour les D (puisque $D = Q^{+}$), mais la simplification Karnaugh reste à faire.

**1.** Remplis le tableau $D_2 D_1 D_0$. **2.** Donne les expressions simplifiées **sans utiliser le OU EXCLUSIF** (interdit à l'examen).

??? success "Voir la correction détaillée"
    **Étape 1 — le tableau (rappel : $D = $ la valeur de Q à l'état suivant)**

    | $Q_2$ | $Q_1$ | $Q_0$ | $D_2$ | $D_1$ | $D_0$ |
    |:--:|:--:|:--:|:--:|:--:|:--:|
    | 0 | 0 | 0 | 0 | 0 | 1 |
    | 0 | 0 | 1 | 0 | 1 | 0 |
    | 0 | 1 | 0 | 0 | 1 | 1 |
    | 0 | 1 | 1 | 1 | 0 | 0 |
    | 1 | 0 | 0 | 0 | 0 | 0 |

    *(Chaque colonne $D$ est juste la colonne $Q$ correspondante de la ligne **suivante**.)*

    **Étape 2 — simplification (Karnaugh, états 5, 6, 7 = `Φ`)**

    - $D_0 = \overline{Q_2} \cdot \overline{Q_0}$
    - $D_1 = \overline{Q_1}\cdot Q_0 + Q_1 \cdot \overline{Q_0}$  *(c'est $Q_1 \oplus Q_0$, mais on l'écrit en somme de produits car le XOR est interdit)*
    - $D_2 = Q_1 \cdot Q_0$

    **Vérification par simulation** (rappel : avec une bascule D, $Q^{+} = D$) :

    | État | $D_2 D_1 D_0$ | → état suivant |
    |---|---|---|
    | 000 | 0 0 1 | **001** ✓ |
    | 001 | 0 1 0 | **010** ✓ |
    | 010 | 0 1 1 | **011** ✓ |
    | 011 | 1 0 0 | **100** ✓ |
    | 100 | 0 0 0 | **000** ✓ |

    Le cycle modulo 5 est correct. 🎯

    !!! info "À retenir : D vs JK"
        - **D** : table de transition triviale ($D = Q^{+}$), donc plus rapide à remplir, mais souvent **un peu plus de portes** après Karnaugh.
        - **JK** : table de transition à connaître, mais les nombreux `Φ` donnent souvent des **expressions plus simples**.

---

## Exercice 3 — Câbler un compteur asynchrone modulo 12 <span class="diff diff-moyen">🟡 Moyen-dur</span>

> :material-book-open-page-variant: **Cours lié :** [La bascule T (diviseur ÷2)](1_bascules/1_intro.md#la-bascule-t-la-machine-a-diviser-par-deux) · [L'horloge & les fronts](1_bascules/1_intro.md#4-lhorloge-le-chef-dorchestre) · [Le symbole & la bulle](1_bascules/1_intro.md#3-le-symbole-quon-dessine-et-la-sortie-q).

On dispose de **4 bascules JK synchronisées sur front montant**, avec entrées asynchrones `Preset` et `Clear` (actives à l'état bas). **Câble un compteur asynchrone modulo 12** (il compte `0 → 11` puis repart à `0`).

??? success "Voir la correction détaillée"
    **Méthode en 2 temps : (A) faire un compteur complet, (B) tronquer au bon modulo.**

    **A. Le compteur asynchrone (modulo 16) :**

    1. Câble chaque bascule en **mode T** (basculement) : $J = K = 1$ en permanence.
    2. **Mise en cascade** : la sortie d'une bascule pilote l'**horloge** de la suivante.
    3. Comme les bascules sont sur **front montant** et qu'un compteur a besoin de basculer sur le **front descendant** de la sortie précédente : on relie $\overline{Q}$ (la sortie barrée) à l'horloge suivante.

    !!! tip "Repère « bulles » (cours, section 3)"
        - **Compteur** = il faut **1 seule bulle** sur le fil sortie → horloge suivante.
        - **Décompteur** = **0 ou 2 bulles** sur ce fil.

        Ici, bascules front montant (triangle sans bulle) + on prend $\overline{Q}$ (1 bulle) = **1 bulle au total** → bien un **compteur**. ✓

    **B. Tronquer à modulo 12 :**

    Un compteur modulo 12 compte de **0 à 11**. Il faut **détecter la valeur 12** et **remettre à 0** (Clear).

    - $12 = 1100_2$, soit $Q_3 = 1$ et $Q_2 = 1$.
    - Entre 0 et 11, est-ce que $Q_2$ et $Q_3$ valent 1 **en même temps** ? Non (le max, $11 = 1011$, a $Q_3=1$ mais $Q_2=0$). Donc « $Q_2 \cdot Q_3$ » n'arrive **que** sur 12.
    - On branche $Q_2$ et $Q_3$ sur une porte **NON-ET**. Sa sortie $M$ passe à **0** pile quand on atteint 12.
    - On relie $M$ aux entrées **Clear** de **toutes** les bascules.

    **Ce qui se passe :** dès que le compteur atteint 12, $M = 0$ → Clear actif → toutes les sorties forcées à **0**. La valeur 12 n'apparaît qu'une fraction de nanoseconde, immédiatement remplacée par 0. $M$ repasse à 1 et le comptage reprend. Résultat : la séquence est **0, 1, …, 11, 0, 1, …** → **modulo 12**. 🎯

    !!! note "Variante décompteur"
        Pour un **décompteur** modulo m : on détecte la valeur **15** (`1111`) et on la remplace par **m − 1**, en utilisant à la fois `Clear` (pour les bits à 0) et `Preset` (pour les bits à 1). Le reste de la logique est identique.

---

## Exercice 4 — Reconnaître un montage <span class="diff diff-moyen">🟡 Moyen</span>

> :material-book-open-page-variant: **Cours lié :** [Comment différencier les bascules](1_bascules/1_intro.md#7-comment-les-differencier-en-un-coup-dil) · [La bascule T](1_bascules/1_intro.md#la-bascule-t-la-machine-a-diviser-par-deux).

On te donne le montage suivant : **4 bascules JK**, toutes avec $J = K = 1$, **synchronisées sur front descendant** (triangle + bulle), et la sortie **$Q$** de chaque bascule est reliée à l'**horloge** de la bascule suivante.

Donne les **3 caractéristiques** : (a) compteur ou décompteur ? (b) synchrone ou asynchrone ? (c) modulo ?

??? success "Voir la correction détaillée"
    On répond aux 3 questions méthodiquement :

    **(b) Synchrone ou asynchrone ?** Les bascules ne partagent **pas** la même horloge : chacune est cadencée par la sortie de la précédente. → **Asynchrone**.

    **(a) Compteur ou décompteur ?** On compte les **bulles** sur le fil sortie → horloge suivante :

    - bascule sur **front descendant** = 1 bulle (sur l'entrée d'horloge),
    - on prend la sortie **$Q$** (sans bulle) = 0 bulle,
    - **total = 1 bulle**.

    1 bulle → **compteur** (rappel cours : compteur = 1 bulle, décompteur = 0 ou 2). 

    *Autre façon de le voir :* une bascule front descendant déclenche quand son horloge passe de 1→0, c'est-à-dire sur le **front descendant de $Q$** de la précédente → c'est la définition d'un compteur.

    **(c) Modulo ?** Aucune porte de détection (pas de NON-ET sur les sorties) → cycle **complet** sur 4 bits → **modulo 16**.

    **Réponse : compteur asynchrone modulo 16.** 🎯

    !!! tip "Réflexe examen"
        Pour CE type de question, déroule toujours : **(1)** horloge commune ? (synchrone/asynchrone) → **(2)** compte les bulles (compteur/décompteur) → **(3)** une porte de détection ? (modulo complet ou tronqué).

---

## Exercice 5 — Chronogramme d'un montage à bascules D <span class="diff diff-moyen">🟡 Moyen</span>

> :material-book-open-page-variant: **Cours lié :** [La bascule D](1_bascules/1_intro.md#la-bascule-d-la-photocopieuse) · [L'horloge & les fronts](1_bascules/1_intro.md#4-lhorloge-le-chef-dorchestre).

Soit **2 bascules D synchronisées sur front montant**, montées en **cascade** : l'entrée $D_0$ reçoit un signal $E$, la sortie $Q_0$ alimente $D_1$ ($D_1 = Q_0$), et on observe $Q_0$ et $Q_1$.

L'entrée $E$ vaut, période par période : `1, 0, 1, 1, 0`. Les deux bascules partent à 0. Donne $Q_0$ et $Q_1$ à chaque front montant.

??? success "Voir la correction détaillée"
    **Principe :** à chaque front montant, $Q_0$ copie $E$ (qui vaut $D_0$), et $Q_1$ copie l'**ancienne** valeur de $Q_0$ (car $D_1 = Q_0$). C'est un **registre à décalage** : l'information avance d'un cran à chaque top.

    | Front n° | $E$ (= $D_0$) | $Q_0$ après | $Q_1$ après (= ancien $Q_0$) |
    |:--:|:--:|:--:|:--:|
    | départ | – | 0 | 0 |
    | 1 | 1 | **1** | 0 |
    | 2 | 0 | **0** | **1** |
    | 3 | 1 | **1** | 0 |
    | 4 | 1 | **1** | **1** |
    | 5 | 0 | **0** | **1** |

    On voit le signal $E$ **se décaler** : ce qui entre dans $Q_0$ se retrouve dans $Q_1$ au top suivant. 🎯

    !!! tip "Le piège classique des montages en cascade"
        $Q_1$ copie l'**ancienne** valeur de $Q_0$ (celle **juste avant** le front), pas la nouvelle. Tout change « en même temps » sur le front : chaque bascule lit l'entrée **telle qu'elle était avant** le top. Calcule toujours **toutes** les nouvelles sorties à partir des **anciennes** valeurs.

---

## Exercice 6 — Chronogrammes : les 4 modes de synchronisation <span class="diff diff-facile">🟢 Plus accessible</span>

> :material-book-open-page-variant: **Cours lié :** [Les 4 façons de synchroniser](1_bascules/1_intro.md#5-les-4-facons-de-synchroniser-une-bascule) · [La lampe à mémoire (RS)](1_bascules/1_intro.md#2-limage-qui-marche-pour-tout-la-lampe-a-memoire).

C'est **le** réflexe de l'Exercice 1 de l'examen. On donne les mêmes entrées à une **bascule RS** et on demande $Q$ selon le mode de synchro.

Le signal d'horloge $C$ fait 4 impulsions. Les entrées valent, période par période :

| Période | 1 | 2 | 3 | 4 |
|:--:|:--:|:--:|:--:|:--:|
| $S$ | 1 | 0 | 0 | 1 |
| $R$ | 0 | 0 | 1 | 0 |

$Q$ part à 0. Donne $Q$ pour : **(a)** synchro sur **état haut**, **(b)** sur **front montant**, **(c)** sur **front descendant**.

??? success "Voir la correction détaillée"
    On applique la table RS — `S=1`→met à 1, `R=1`→met à 0, `S=R=0`→**mémoire** — mais **seulement aux instants autorisés** par le mode.

    **(a) Sur état haut** — la bascule écoute **pendant toute la durée où $C = 1$.**

    | Période | $S,R$ | Action pendant $C=1$ | $Q$ |
    |:--:|:--:|---|:--:|
    | 1 | 1,0 | set | **1** |
    | 2 | 0,0 | mémoire | **1** |
    | 3 | 0,1 | reset | **0** |
    | 4 | 1,0 | set | **1** |

    **(b) Sur front montant** — la bascule lit les entrées **uniquement à l'instant 0→1 de $C$** (début de chaque période). Ici les entrées sont stables pendant la période, donc on obtient le **même résultat** que (a) : $Q = $ **1, 1, 0, 1**.

    **(c) Sur front descendant** — la bascule lit **à l'instant 1→0 de $C$** (fin de période). Le résultat est décalé d'un demi-temps mais, les entrées étant stables, on lit les mêmes valeurs : $Q$ devient 1 (fin P1), reste 1 (fin P2), passe 0 (fin P3), passe 1 (fin P4).

    !!! warning "Ce qui FAIT la différence à l'examen"
        Le mode compte vraiment quand les **entrées changent au milieu d'une période**. Exemple : si $S$ fait une impulsion brève **pendant** que $C=1$ :

        - **sur état** → la bascule la « voit » et réagit tout de suite ;
        - **sur front** → si l'impulsion ne tombe pas **pile sur le front**, elle est **ignorée**.

        D'où l'intérêt des **bascules sur front** : elles ne regardent qu'un instant précis, donc elles sont **insensibles au bruit** entre deux tops. Entraîne-toi sur les chronogrammes du **TD 1**, c'est exactement ça.

---

## Exercice 7 — Les réflexes de base <span class="diff diff-facile">🟢 Échauffement</span>

> :material-book-open-page-variant: **Cours lié :** [La lampe à mémoire](1_bascules/1_intro.md#2-limage-qui-marche-pour-tout-la-lampe-a-memoire) · [Le symbole & la bulle](1_bascules/1_intro.md#3-le-symbole-quon-dessine-et-la-sortie-q) · [Pourquoi plusieurs bascules](1_bascules/1_intro.md#6-pourquoi-plusieurs-bascules-rs-d-jk-t).

Réponds de tête (ce sont les fondations — si un point coince, clique sur le cours lié) :

1. Remplis la table de vérité d'une bascule **JK** synchrone.
2. Que fait une bascule **RS** quand $R = S = 1$ ? Et une **JK** quand $J = K = 1$ ?
3. Que signifie une **bulle ○** sur un fil ?
4. Quelle bascule « **photocopie** » son entrée ? Quelle est sa relation entrée/sortie ?
5. Comment obtient-on un **diviseur de fréquence par deux** ?

??? success "Voir les réponses"
    **1.** Table JK :

    | $J$ | $K$ | $Q^{+}$ | Nom |
    |:--:|:--:|:--:|---|
    | 0 | 0 | $q$ (inchangé) | mémoire |
    | 0 | 1 | 0 | reset |
    | 1 | 0 | 1 | set |
    | 1 | 1 | $\overline{q}$ | **basculement** |

    **2.** RS avec $R=S=1$ → **état interdit** (allumer et éteindre en même temps : absurde). JK avec $J=K=1$ → **basculement** : la sortie **s'inverse** à chaque top. *(C'est tout l'intérêt de la JK : elle récupère l'état interdit de la RS pour en faire quelque chose d'utile.)*

    **3.** Une **bulle = une inversion** (une porte NON cachée). Sur une **sortie** → c'est $\overline{Q}$. Sur une **entrée d'horloge** → la bascule réagit sur le front **descendant**.

    **4.** La bascule **D** (« Décalque »). Relation : $Q^{+} = D$ — à chaque top, la sortie copie l'entrée.

    **5.** En forçant une bascule **JK** (ou **T**) en **basculement permanent** : $J = K = 1$. La sortie change d'état à chaque top → elle va **deux fois moins vite** que l'horloge. C'est la **brique de base des compteurs**.

---

## :material-flag-checkered: Tu as fini ?

Si tu as fait les 7 exos **sans regarder la correction**, tu as couvert :

- [x] Compteur synchrone **JK** (Ex 1) → exam Ex 2
- [x] Compteur synchrone **D** (Ex 2) → exam Ex 3
- [x] **Câblage** compteur asynchrone modulo m (Ex 3) → exam Ex 4
- [x] **Reconnaissance** de montage (Ex 4) → exam Ex 4
- [x] **Chronogrammes** de montages et de bascules (Ex 5 & 6) → exam Ex 1
- [x] Les **réflexes de base** (Ex 7) → indispensable partout

Pour finir, refais les **chronogrammes du TD 1** et l'**exercice 3 du TD 2** sur papier, en conditions réelles. Tu es prêt. 💪
