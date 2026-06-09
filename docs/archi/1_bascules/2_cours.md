# Cours complet — Logique séquentielle (Chapitre 1)

!!! abstract "Ce que cette page ajoute à l'introduction"
    L'[introduction](1_intro.md) t'a expliqué **ce que font** les bascules (la lampe à mémoire). Ici on va voir **comment elles sont construites** et **pourquoi** elles se souviennent. C'est le niveau « sous le capot » — utile pour comprendre les chronogrammes et ne plus jamais être surpris à l'examen.

---

## 1. Rappel express

Un circuit **séquentiel** = un circuit **combinatoire** dont on **reboucle** une partie de la sortie vers l'entrée. Ce bouclage crée la **mémoire**. La plus petite cellule de mémoire = la **bascule** (1 bit).

> :material-book-open-page-variant: Si ces mots ne te parlent pas, relis [l'introduction](1_intro.md#1-le-probleme-de-depart-comment-un-circuit-se-souvient) avant de continuer.

---

## 2. La bascule RS asynchrone : la mémoire qui naît du bouclage

### Construction avec deux portes NON-OU

On prend **deux portes NON-OU** (NOR) et on **croise** leurs sorties vers les entrées de l'autre. C'est ce **croisement** qui crée la mémoire.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 330 176" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bascule RS construite avec deux portes NON-OU croisées">
  <rect x="160" y="28" width="64" height="44" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="192" y="55" text-anchor="middle" font-size="14" fill="currentColor">&#8805;1</text>
  <rect x="160" y="104" width="64" height="44" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="192" y="131" text-anchor="middle" font-size="14" fill="currentColor">&#8805;1</text>
  <text x="78" y="44" text-anchor="end" font-size="13" fill="#c62828">R</text>
  <line x1="84" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="2"/>
  <text x="78" y="140" text-anchor="end" font-size="13" fill="#2e7d32">S</text>
  <line x1="84" y1="136" x2="160" y2="136" stroke="currentColor" stroke-width="2"/>
  <circle cx="230" cy="50" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <line x1="236" y1="50" x2="306" y2="50" stroke="currentColor" stroke-width="2"/>
  <text x="312" y="55" font-size="13" fill="currentColor">Q</text>
  <circle cx="230" cy="126" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <line x1="236" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="2"/>
  <text x="312" y="131" font-size="13" fill="currentColor">Q</text>
  <line x1="300" y1="46" x2="312" y2="46" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="270" cy="50" r="2.5" fill="currentColor"/>
  <polyline points="270,50 270,116 160,116" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="252" cy="126" r="2.5" fill="currentColor"/>
  <polyline points="252,126 252,60 160,60" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
<figcaption>Bascule RS active à l'état haut : deux portes NON-OU (« ≥1 » + bulle) dont les sorties sont croisées vers les entrées. La sortie de chaque porte revient nourrir l'autre → bouclage → mémoire.</figcaption>
</figure>

**Pourquoi ça mémorise ?** Rappel d'une règle de la porte NON-OU : *si l'une de ses entrées vaut 1, sa sortie vaut 0, quoi qu'il arrive sur l'autre entrée.* Déroulons :

- **S = 1, R = 0** → la porte du bas est forcée → on obtient **Q = 1** (mise à 1, *set*).
- **R = 1, S = 0** → la porte du haut est forcée → **Q = 0** (mise à 0, *reset*).
- **R = S = 0** → aucune porte n'est forcée : chacune **recopie ce qui était déjà là** grâce au croisement → **Q ne change pas** (état mémoire). C'est là qu'est la magie du bouclage.
- **R = S = 1** → les deux portes sont forcées à 0 en même temps : **incohérent** → état **interdit**.

| R | S | Q | |
|:--:|:--:|:--:|---|
| 0 | 0 | q | état mémoire |
| 0 | 1 | 1 | mise à 1 (set) |
| 1 | 0 | 0 | mise à 0 (reset) |
| 1 | 1 | ✗ | interdit |

!!! warning "Pourquoi l'état interdit est dangereux (au-delà de l'incohérence)"
    Si on quitte l'état interdit (R et S repassent à 0 « en même temps »), la sortie devient **imprévisible** : en pratique les deux signaux ne changent jamais exactement au même instant, et le résultat dépend de quelle porte réagit en premier. Conclusion : **on n'utilise JAMAIS R = S = 1**.

### La version NON-ET (active à l'état bas)

On peut faire la **même chose avec deux portes NON-ET** (NAND). Le circuit fonctionne « à l'envers » : les entrées sont alors **actives à l'état bas** (c'est un 0 qui déclenche l'action). On la note $\overline{R}\overline{S}$, et on la reconnaît à des **bulles sur les entrées**.

<div class="memo" markdown>
**Repère 🧠**

- Deux **NON-OU** (≥1) croisées → RS **active à l'état haut** (un **1** commande).
- Deux **NON-ET** (&) croisées → RS **active à l'état bas** (un **0** commande, bulles sur les entrées).
</div>

### Chronogramme — la RS est *asynchrone* (elle réagit tout de suite)

Sans horloge, la sortie réagit **instantanément** à chaque changement des entrées :

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 410 158" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronogramme d'une bascule RS asynchrone">
  <g stroke="currentColor" stroke-width="1" opacity="0.25" stroke-dasharray="3,3">
    <line x1="60" y1="8" x2="60" y2="148"/>
    <line x1="160" y1="8" x2="160" y2="148"/>
    <line x1="240" y1="8" x2="240" y2="148"/>
    <line x1="320" y1="8" x2="320" y2="148"/>
  </g>
  <text x="24" y="70" text-anchor="end" font-size="13" fill="#2e7d32">S</text>
  <polyline points="20,74 60,74 60,58 100,58 100,74 240,74 240,58 300,58 300,74 390,74" fill="none" stroke="#43a047" stroke-width="2.5"/>
  <text x="24" y="104" text-anchor="end" font-size="13" fill="#c62828">R</text>
  <polyline points="20,108 160,108 160,88 200,88 200,108 320,108 320,88 360,88 360,108 390,108" fill="none" stroke="#e53935" stroke-width="2.5"/>
  <text x="24" y="138" text-anchor="end" font-size="13" fill="currentColor">Q</text>
  <polyline points="20,142 60,142 60,122 160,122 160,142 240,142 240,122 320,122 320,142 390,142" fill="none" stroke="#1e88e5" stroke-width="2.5"/>
</svg>
<figcaption>RS asynchrone : dès que S=1, Q monte (set) ; dès que R=1, Q descend (reset) ; quand S=R=0, Q garde sa valeur (mémoire). Aucune horloge : la réaction est immédiate.</figcaption>
</figure>

---

## 3. La synchronisation : ajouter une horloge

Le défaut de la RS asynchrone : elle réagit **à n'importe quel moment**. Dans un ordinateur on veut que tout change **en rythme**. On ajoute donc une **horloge** (C) qui décide **quand** la bascule a le droit de changer.

> :material-book-open-page-variant: Cours lié : [l'horloge & les fronts](1_intro.md#4-lhorloge-le-chef-dorchestre) · [les 4 modes de synchronisation](1_intro.md#5-les-4-facons-de-synchroniser-une-bascule).

### a) Synchronisée sur état (avec une entrée *Enable*)

On place **deux portes ET** devant la bascule RS : elles ne laissent passer R et S **que lorsque** l'entrée d'activation E vaut 1.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 360 176" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bascule RS synchronisée sur état avec entrée Enable">
  <rect x="120" y="26" width="52" height="40" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="146" y="51" text-anchor="middle" font-size="14" fill="currentColor">&amp;</text>
  <rect x="120" y="110" width="52" height="40" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="146" y="135" text-anchor="middle" font-size="14" fill="currentColor">&amp;</text>
  <text x="30" y="40" text-anchor="end" font-size="13" fill="#c62828">R</text>
  <line x1="36" y1="36" x2="120" y2="36" stroke="currentColor" stroke-width="2"/>
  <text x="30" y="140" text-anchor="end" font-size="13" fill="#2e7d32">S</text>
  <line x1="36" y1="140" x2="120" y2="140" stroke="currentColor" stroke-width="2"/>
  <text x="30" y="92" text-anchor="end" font-size="13" fill="currentColor">E</text>
  <line x1="36" y1="88" x2="90" y2="88" stroke="currentColor" stroke-width="2"/>
  <circle cx="90" cy="88" r="2.5" fill="currentColor"/>
  <polyline points="90,88 90,56 120,56" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="90,88 90,120 120,120" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="240" y="50" width="64" height="76" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="250" y="74" font-size="12" fill="currentColor">R</text>
  <text x="250" y="116" font-size="12" fill="currentColor">S</text>
  <line x1="172" y1="46" x2="240" y2="68" stroke="currentColor" stroke-width="2"/>
  <line x1="172" y1="130" x2="240" y2="108" stroke="currentColor" stroke-width="2"/>
  <line x1="304" y1="68" x2="338" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="320" y="62" text-anchor="middle" font-size="12" fill="currentColor">Q</text>
</svg>
<figcaption>RS synchronisée sur état : les portes ET « ouvrent la porte » à R et S uniquement quand E = 1. Quand E = 0, la bascule est figée (état mémoire), quelles que soient R et S.</figcaption>
</figure>

| E | R | S | Comportement |
|:--:|:--:|:--:|---|
| 0 | Φ | Φ | mémoire (figée) |
| 1 | 0 | 0 | mémoire |
| 1 | 0 | 1 | set (Q=1) |
| 1 | 1 | 0 | reset (Q=0) |
| 1 | 1 | 1 | interdit |

**Inconvénient :** tant que E = 1, **tout** changement de R/S passe. On voudrait ne réagir qu'à un **instant précis** → la synchro sur **front**.

### b) Synchronisée sur front (montant ou descendant)

Astuce de conception : on fabrique une **toute petite impulsion** à l'instant du front. En envoyant l'horloge C dans un **inverseur** puis dans une porte ET avec C elle-même, le minuscule **retard** de l'inverseur fait qu'à l'instant du front, $C$ et $\overline{C}$ valent **1 en même temps** pendant quelques nanosecondes → une impulsion ultra-brève qui n'autorise le changement **qu'au front**.

<div class="memo" markdown>
**Repère visuel 🧠**

- **Triangle** sur l'entrée d'horloge → **front montant**.
- **Triangle + bulle** → **front descendant**.
</div>

> :material-book-open-page-variant: Tu as déjà les chronogrammes vérifiés des bascules **RS**, **D** et **JK** sur front montant dans [l'introduction, section 6](1_intro.md#6-pourquoi-plusieurs-bascules-rs-d-jk-t). Va les revoir : ce sont exactement ceux qui tombent à l'examen.

### c) Synchronisée sur impulsion (maître-esclave)

On met **deux bascules en série** : la première (le **maître**) capture les entrées au **front montant**, la seconde (l'**esclave**) recopie le résultat au **front descendant**.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bascule maître-esclave : deux bascules en série">
  <rect x="70" y="35" width="90" height="76" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="115" y="28" text-anchor="middle" font-size="11" fill="currentColor">MAÎTRE</text>
  <text x="115" y="78" text-anchor="middle" font-size="11" fill="currentColor">front &#8593;</text>
  <rect x="230" y="35" width="90" height="76" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="275" y="28" text-anchor="middle" font-size="11" fill="currentColor">ESCLAVE</text>
  <text x="275" y="78" text-anchor="middle" font-size="11" fill="currentColor">front &#8595;</text>
  <line x1="20" y1="60" x2="70" y2="60" stroke="currentColor" stroke-width="2"/>
  <text x="14" y="64" text-anchor="end" font-size="12" fill="currentColor">S,R</text>
  <line x1="160" y1="73" x2="230" y2="73" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="73" x2="360" y2="73" stroke="currentColor" stroke-width="2"/>
  <text x="366" y="77" font-size="12" fill="currentColor">Q</text>
  <line x1="40" y1="130" x2="115" y2="130" stroke="currentColor" stroke-width="2"/>
  <text x="34" y="134" text-anchor="end" font-size="12" fill="currentColor">C</text>
  <circle cx="115" cy="130" r="2.5" fill="currentColor"/>
  <line x1="115" y1="130" x2="115" y2="111" stroke="currentColor" stroke-width="2"/>
  <polyline points="115,130 275,130 275,111" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="275" cy="105" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
</svg>
<figcaption>Maître-esclave : le maître lit les entrées au front montant, l'esclave applique au front descendant (sa bulle sur l'horloge). La sortie Q ne change donc qu'à la fin de l'impulsion d'horloge.</figcaption>
</figure>

<div class="analogie" markdown>
**Analogie 📸**

C'est un **appareil photo** : tu **déclenches** (front montant → le maître capture l'instant), mais **l'image ne s'affiche** qu'au front descendant (l'esclave la révèle). Avantage : la sortie ne bouge jamais pendant qu'on la lit.
</div>

---

## 4. La bascule D — construite à partir d'une RS

Pour supprimer l'état interdit **et** n'avoir qu'**une seule entrée**, on relie R et S par un **inverseur** : on pose $S = D$ et $R = \overline{D}$. Comme ça, R et S sont **toujours opposés** → jamais R = S = 1.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bascule D construite à partir d'une RS">
  <text x="20" y="60" text-anchor="end" font-size="13" fill="currentColor">D</text>
  <line x1="26" y1="56" x2="70" y2="56" stroke="currentColor" stroke-width="2"/>
  <circle cx="70" cy="56" r="2.5" fill="currentColor"/>
  <line x1="70" y1="56" x2="150" y2="56" stroke="currentColor" stroke-width="2"/>
  <text x="118" y="50" text-anchor="middle" font-size="11" fill="currentColor">S</text>
  <polyline points="70,56 70,104 95,104" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="95" y="92" width="34" height="24" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="112" y="109" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="135" cy="104" r="5" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <line x1="140" y1="104" x2="150" y2="104" stroke="currentColor" stroke-width="2"/>
  <text x="138" y="126" text-anchor="middle" font-size="11" fill="currentColor">R</text>
  <rect x="150" y="34" width="70" height="84" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="60" font-size="12" fill="currentColor">S</text>
  <text x="160" y="104" font-size="12" fill="currentColor">R</text>
  <line x1="220" y1="56" x2="300" y2="56" stroke="currentColor" stroke-width="2"/>
  <text x="306" y="60" font-size="12" fill="currentColor">Q</text>
</svg>
<figcaption>Bascule D : une seule entrée D, recopiée vers S, et son inverse vers R. Résultat : Q = D (à chaque instant autorisé par l'horloge), et plus jamais d'état interdit.</figcaption>
</figure>

| E (ou front) | D | Q |
|:--:|:--:|:--:|
| inactif | Φ | q (mémoire) |
| actif | 0 | 0 |
| actif | 1 | 1 |

> :material-book-open-page-variant: Chronogramme vérifié de la bascule **D** sur front montant : [section 6 de l'intro](1_intro.md#la-bascule-d-la-photocopieuse).

---

## 5. La bascule JK — la RS qui récupère l'état interdit

On part d'une RS et on **reboucle les sorties** vers les entrées : $S = J \cdot \overline{Q}$ et $R = K \cdot Q$. Conséquence : quand $J = K = 1$, le bouclage fait que la bascule **bascule** au lieu d'être interdite.

| J | K | $Q^{+}$ | |
|:--:|:--:|:--:|---|
| 0 | 0 | q | mémoire |
| 0 | 1 | 0 | reset |
| 1 | 0 | 1 | set |
| 1 | 1 | $\overline{q}$ | **basculement** |

<div class="memo" markdown>
**Mémo 🧠** — **J** = « J'allume » (set, →1) · **K** = « Kill » (reset, →0) · **J = K = 1** = bascule.
</div>

> :material-book-open-page-variant: Chronogramme vérifié de la bascule **JK** : [section 6 de l'intro](1_intro.md#la-bascule-jk-la-rs-sans-etat-interdit). Et la **bascule T** (JK avec J = K = 1) = [le diviseur ÷2](1_intro.md#la-bascule-t-la-machine-a-diviser-par-deux), brique des compteurs.

---

## 6. Preset et Clear — le forçage asynchrone

Les bascules réelles (D, JK) ont souvent **deux entrées en plus**, **prioritaires** et **asynchrones** (elles agissent **immédiatement**, sans attendre l'horloge) :

- **Preset** (ou *Set*) → force **Q = 1** tout de suite.
- **Clear** (ou *Reset*) → force **Q = 0** tout de suite.

Elles sont souvent **actives à l'état bas** (une **bulle** sur le symbole) : c'est un **0** qui déclenche le forçage. En fonctionnement normal, on les laisse **désactivées** (à 1).

<div class="retenir" markdown>
**À retenir**

- **Preset / Clear = prioritaires sur tout** (horloge, J/K, D). Elles servent à **initialiser** une bascule (mettre un compteur à 0 au démarrage, par exemple).
- Ne jamais activer **Preset et Clear en même temps** (mettre à 1 ET à 0 → interdit).
- On les retrouvera au **chapitre 2** pour tronquer les compteurs (modulo m).
</div>

---

## Récap — Chapitre 1

<div class="retenir" markdown>
**L'essentiel**

1. **Bouclage = mémoire.** Deux portes NON-OU (ou NON-ET) croisées → bascule **RS**.
2. **RS** : set (S=1), reset (R=1), mémoire (0,0), **interdit** (1,1).
3. **Synchroniser** = ajouter une horloge : sur **état** (E), sur **front** (▷ / ▷○), sur **impulsion** (maître-esclave 📸).
4. **D** = RS avec $R = \overline{S}$ → une entrée, $Q = D$, plus d'interdit.
5. **JK** = RS rebouclée → $J=K=1$ donne le **basculement** (plus d'interdit).
6. **Preset/Clear** = forçage **asynchrone prioritaire** (Q→1 / Q→0 immédiat).
</div>

[:material-arrow-right-bold: Suite : Chapitre 2 — Les compteurs](../2_compteurs/1_cours.md)
