# Exercices — Combinatoire

> :material-book-open-page-variant: Cours : [Principe multiplicatif + tirages — sections 2, 3 et 4](1_cours.md#2-principe-multiplicatif-la-regle-de-base).
>
> :material-flash: **Le réflexe à acquérir** : avant de calculer, demande-toi **(1) ordre ?** **(2) répétition ?** — puis applique la formule du tableau.

---

## :material-numeric-1-circle: Exercice 1 — Les 4 types de tirage

<span class="diff diff-facile">🟢 Facile</span>

On dispose d'un sac de $n$ billes numérotées de 1 à $n$.

**1.** On tire **successivement avec remise** $k$ billes. Combien de tirages possibles ?

**2.** On tire **successivement sans remise** **les $n$ billes**. Combien de tirages ?

**3.** On tire **successivement sans remise** $k$ billes ($k \leq n$). Combien de tirages ?

**4.** On tire **simultanément** $k$ billes. Combien de tirages possibles ?

??? success "Voir la correction"
    **1.** Successif avec remise : à chaque tirage, $n$ choix indépendants. **Total : $n^k$**.

    **2.** Successif sans remise de toutes les billes = **permutation**. **Total : $n!$**.

    **3.** Arrangement de $k$ parmi $n$ : $A_n^k = \dfrac{n!}{(n-k)!}$.

    **4.** Simultané = combinaison : $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$.

    **Lien à retenir** : $A_n^k = k! \cdot \binom{n}{k}$ — la différence entre "ordonné" et "non ordonné" est un facteur $k!$.

---

## :material-numeric-2-circle: Exercice 2 — Anagrammes et ordre de passage

<span class="diff diff-facile">🟢 Facile</span>

**1.** Combien d'anagrammes du mot **voiture** ?
**2.** Combien d'anagrammes du mot **saperlipopette** ?
**3.** Combien de façons de faire passer 5 étudiants au tableau, parmi 30, en spécifiant l'ordre ?
**4.** Combien de façons de faire passer **tous** les 30 étudiants au tableau, dans un ordre quelconque ?
**5.** Et si parmi ces 30, **les deux qui dorment** doivent être appelés deux fois ?

??? success "Voir la correction"
    **1.** "voiture" = 7 lettres toutes distinctes. Anagrammes : $7! = 5040$.

    **2.** "saperlipopette" = 14 lettres. Comptons : s(1), a(1), p(3), e(3), r(1), l(1), i(1), o(1), t(2). Total : $1+1+3+3+1+1+1+1+2 = 14$ ✓.
    Anagrammes : $\dfrac{14!}{3! \cdot 3! \cdot 2!} = \dfrac{14!}{72}$.

    **3.** Choisir + ordonner 5 parmi 30 : arrangement $A_{30}^{5} = 30 \times 29 \times 28 \times 27 \times 26$.

    **4.** Permutation de 30 étudiants : $30!$.

    **5.** On a 30 étudiants distincts mais 2 ont la même fonction "à appeler deux fois" : ça donne une séquence de 32 passages, mais avec deux paires d'étudiants identiques.
    Sur 32 places, le nombre de séquences = $\dfrac{32!}{2! \cdot 2!} = \dfrac{32!}{4}$.

---

## :material-numeric-3-circle: Exercice 3 — Sélection d'équipe de foot

<span class="diff diff-moyen">🟡 Moyen</span>

24 joueurs disponibles, 11 postes à pourvoir (gardien, défenseurs, etc.).

**1.** Tous les joueurs peuvent jouer à tous les postes. La sélection ne spécifie que **qui** sont les 11 sur le terrain (peu importe le poste). Combien de sélections ?

**2.** Tous les joueurs peuvent jouer partout. La sélection spécifie **qui** ET **à quel poste**. Combien ?

**3.** Maintenant, parmi les 24 joueurs, **3 sont gardiens uniquement**, les 21 autres peuvent tout faire **sauf gardien**.
   a) Reprendre la question 1.
   b) Reprendre la question 2.

??? success "Voir la correction"
    **1.** On choisit 11 joueurs parmi 24, sans ordre : $\binom{24}{11}$.

    **2.** On choisit 11 joueurs **et leur poste** = arrangement : $A_{24}^{11} = \dfrac{24!}{13!}$.

    **3.**

    a) Le gardien doit venir des 3 gardiens : $3$ choix. Les 10 autres viennent des 21 non-gardiens : $\binom{21}{10}$. Total : $3 \times \binom{21}{10}$.

    b) Le gardien : 3 choix. Pour les 10 autres postes, arrangement des 21 non-gardiens : $A_{21}^{10}$. Total : $3 \times A_{21}^{10}$.

---

## :material-numeric-4-circle: Exercice 4 — Bureau d'association

<span class="diff diff-moyen">🟡 Moyen</span>

100 adhérents. Bureau composé : 1 président, 1 trésorier, 8 autres membres (postes différenciés ou pas).

**1.** Nombre de bureaux possibles, sans contrainte ?

**2.** Maintenant 50 femmes et 50 hommes. On veut : si président → trésorière, si présidente → trésorier. Et parmi les 8 autres : 4 femmes et 4 hommes.

??? success "Voir la correction"
    **1.** Président : 100 choix. Trésorier : 99. Les 8 autres : $\binom{98}{8}$ (sans ordre entre eux).
    Total : $100 \times 99 \times \binom{98}{8}$.

    **2.** Deux cas symétriques :
    - Président homme (50 choix) → trésorière femme (50 choix).
    - Présidente femme (50) → trésorier homme (50).

    Dans les deux cas, il reste à choisir 4 femmes parmi 49 et 4 hommes parmi 49 : $\binom{49}{4}^2$.

    Total : $2 \times 50 \times 50 \times \binom{49}{4}^2 = 5000 \times \binom{49}{4}^2$.

---

## :material-numeric-5-circle: Exercice 5 — Cadenas à 4 chiffres

<span class="diff diff-moyen">🟡 Moyen</span>

Un cadenas a un code à 4 chiffres (0 à 9).

**1. Sans contrainte sur la répétition** :
   a) Nombre de codes possibles ?
   b) Codes se terminant par un chiffre pair ?
   c) Codes contenant **au moins une fois** le chiffre 2 ?

**2. Avec 4 chiffres distincts** :
   a) Nombre de codes ?
   b) Se terminant par un chiffre pair ?
   c) Contenant le chiffre 2 ?

??? success "Voir la correction"
    **1.** Successif avec remise (4 fois parmi 10).

    a) $10^4 = 10\,000$.

    b) Dernier chiffre dans $\{0, 2, 4, 6, 8\}$ : 5 choix. Trois autres : $10^3$ chacun. Total : $5 \times 10^3 = 5000$.

    c) **Complémentaire** : codes **sans** le 2. Chaque chiffre dans $\{0,1,3,4,5,6,7,8,9\}$ : $9^4 = 6561$.
       Donc avec au moins un 2 : $10\,000 - 6561 = 3439$.

    **2.** Successif sans remise (arrangements $A_{10}^4$).

    a) $A_{10}^4 = 10 \times 9 \times 8 \times 7 = 5040$.

    b) Dernier chiffre pair : 5 choix. Reste à choisir 3 chiffres distincts parmi les 9 restants, dans l'ordre : $A_9^3 = 9 \times 8 \times 7 = 504$. Total : $5 \times 504 = 2520$.

    c) Avec le 2 : on compte total - sans le 2.
       Sans le 2 : on choisit 4 chiffres distincts parmi 9 dans l'ordre : $A_9^4 = 9 \times 8 \times 7 \times 6 = 3024$.
       Avec le 2 : $5040 - 3024 = 2016$.

---

## :material-numeric-6-circle: Exercice 6 — Étagère de révision

<span class="diff diff-moyen">🟡 Moyen</span>

Étagère avec 4 livres d'algo, 6 livres de maths, 3 livres de physique. Les livres sont **groupés par matière**. Combien d'ordres de rangement possibles ?

??? success "Voir la correction"
    **Étape 1 — choisir l'ordre des "blocs" de matière** : 3 matières, donc $3! = 6$ ordres.

    **Étape 2 — à l'intérieur de chaque bloc** :
    - Algo : $4!$ ordres
    - Maths : $6!$
    - Physique : $3!$

    **Total** : $3! \times 4! \times 6! \times 3! = 6 \times 24 \times 720 \times 6 = 622\,080$.

---

## :material-numeric-7-circle: Exercice 7 — Tirage de boules numérotées

<span class="diff diff-moyen">🟡 Moyen</span>

Urne avec $n$ boules numérotées 1 à $n$. On tire simultanément $k$ boules.

a) Nombre de tirages possibles.
b) Nombre de tirages contenant la boule 1.
c) Nombre de tirages **ne contenant pas** la boule 1.
d) En déduire la **relation de Pascal** : $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.

??? success "Voir la correction"
    a) $\binom{n}{k}$.

    b) On force la boule 1 dans le tirage. Il reste à choisir $k - 1$ boules parmi les $n - 1$ restantes : $\binom{n-1}{k-1}$.

    c) On exclut la boule 1. On choisit $k$ parmi les $n - 1$ restantes : $\binom{n-1}{k}$.

    d) Tout tirage est soit "contient la boule 1", soit "ne la contient pas" — c'est une partition.

    $$ \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} $$

    C'est la **formule de Pascal**, démontrée ici **combinatoirement**.

---

## :material-numeric-8-circle: Exercice 8 — Groupe de responsables

<span class="diff diff-dur">🔴 Niveau examen</span>

(Travail personnel obligatoire du TD2 — typique d'examen)

Classe de 20 élèves : 12 garçons, 8 filles. On forme un groupe de 4 responsables : un chef, un sous-chef, deux assistants (qui assistent indifféremment chef ou sous-chef).

**1.** Combien de groupes possibles, sans contrainte ?

**2.** Chef = fille, sous-chef = garçon, parmi les assistants : une fille et un garçon. Combien ?

**3.** Marie sera la chef. Combien ?

**4.** Si Marie est chef, alors Pierre veut être dans le groupe. Combien ?

??? success "Voir la correction"
    **1.** Chef : 20 choix. Sous-chef : 19. Assistants (2 sans distinction d'ordre entre eux) : $\binom{18}{2}$.
    Total : $20 \times 19 \times \binom{18}{2} = 20 \times 19 \times 153 = 58\,140$.

    **2.** Chef fille : 8. Sous-chef garçon : 12. Assistant fille : 7 (il en reste 7). Assistant garçon : 11.
    Mais les deux assistants ne sont pas distingués entre eux, et là on choisit une fille et un garçon (distincts par sexe donc déjà différenciés).
    Total : $8 \times 12 \times 7 \times 11 = 7392$.

    **3.** Chef = Marie (fixé). Sous-chef : 19 choix. Assistants : $\binom{18}{2} = 153$.
    Total : $19 \times 153 = 2907$.

    **4.** Chef = Marie. Pierre dans le groupe, **soit** sous-chef, **soit** assistant.

    Cas A — Pierre sous-chef : assistants = $\binom{18}{2} = 153$.
    Cas B — Pierre assistant : sous-chef = 18 choix (pas Marie, pas Pierre), autre assistant = 17.
    Mais ici les deux assistants ne sont pas ordonnés, alors on compte directement les paires d'assistants contenant Pierre :
    "Pierre + un autre" = 18 choix (les autres assistants possibles).
    Cas B = $18 \times 18 = 324$.

    Total : $153 + 324 = 477$.

---

## :material-check-circle-outline: Récap

- [ ] Tableau des 4 types de tirage maîtrisé
- [ ] Anagrammes avec lettres répétées
- [ ] "Au moins un X" → passer au complémentaire
- [ ] Démonstration combinatoire de la formule de Pascal
- [ ] Découper un problème complexe en cas disjoints

[:material-arrow-right-bold: Suite : Pascal et Newton](4_exos_binome.md)
