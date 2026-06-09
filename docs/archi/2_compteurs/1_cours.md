# Cours complet — Les compteurs (Chapitre 2)

!!! abstract "L'idée du chapitre"
    Un **compteur** est un circuit qui **compte** : à chaque coup d'horloge, sa sortie (un nombre binaire) **augmente de 1**. C'est l'application directe des bascules du chapitre 1. Tout repose sur **une seule brique** : le diviseur de fréquence par deux.

> :material-book-open-page-variant: Pré-requis : [la bascule T / diviseur ÷2](../1_bascules/1_intro.md#la-bascule-t-la-machine-a-diviser-par-deux) et [les fronts d'horloge](../1_bascules/1_intro.md#4-lhorloge-le-chef-dorchestre).

---

## 1. Compteur, décompteur, modulo

<div class="analogie" markdown>
**Analogie 🚗 — le compteur kilométrique**

Un compteur, c'est l'**odomètre** d'une voiture : les roues tournent (l'horloge) et le nombre affiché **monte de 1** à chaque cran. Quand il atteint son maximum, il **repart à 0** (il « boucle »).
</div>

- **Compteur** : il **monte** `0 → 1 → 2 → …`
- **Décompteur** : il **descend** `… → 2 → 1 → 0`
- **Modulo m** : il compte de **0 à m − 1** puis recommence. Exemples : modulo 8 (0→7), modulo 10 (0→9, dit *BCD*), modulo 16 (0→15).

Voici le chronogramme d'un **compteur modulo 8** (3 bits $Q_2 Q_1 Q_0$). Lis les colonnes de bas en haut : tu vois le nombre binaire augmenter de 0 à 7, puis revenir à 0.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 365 158" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronogramme d'un compteur modulo 8">
  <g font-size="10" fill="currentColor" opacity="0.7" text-anchor="middle">
    <text x="63" y="150">0</text><text x="101" y="150">1</text><text x="139" y="150">2</text><text x="177" y="150">3</text><text x="215" y="150">4</text><text x="253" y="150">5</text><text x="291" y="150">6</text><text x="329" y="150">7</text>
  </g>
  <text x="14" y="30" text-anchor="end" font-size="12" fill="currentColor">C</text>
  <polyline points="20,34 44,34 44,18 63,18 63,34 82,34 82,18 101,18 101,34 120,34 120,18 139,18 139,34 158,34 158,18 177,18 177,34 196,34 196,18 215,18 215,34 234,34 234,18 253,18 253,34 272,34 272,18 291,18 291,34 310,34 310,18 329,18 329,34 348,34" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="14" y="62" text-anchor="end" font-size="12" fill="#1e88e5">Q0</text>
  <polyline points="20,66 44,66 44,50 82,50 82,66 120,66 120,50 158,50 158,66 196,66 196,50 234,50 234,66 272,66 272,50 310,50 310,66 348,66" fill="none" stroke="#1e88e5" stroke-width="2"/>
  <text x="14" y="94" text-anchor="end" font-size="12" fill="#8e24aa">Q1</text>
  <polyline points="20,98 44,98 82,98 82,82 158,82 158,98 196,98 234,98 234,82 310,82 310,98 348,98" fill="none" stroke="#8e24aa" stroke-width="2"/>
  <text x="14" y="126" text-anchor="end" font-size="12" fill="#43a047">Q2</text>
  <polyline points="20,130 158,130 158,114 310,114 310,130 348,130" fill="none" stroke="#43a047" stroke-width="2"/>
</svg>
<figcaption>Compteur modulo 8. Observe : Q0 bascule à chaque coup, Q1 deux fois moins vite, Q2 encore deux fois moins vite. Les chiffres en bas donnent la valeur décimale (0 à 7).</figcaption>
</figure>

**L'observation clé :** chaque sortie va **deux fois moins vite** que la précédente. $Q_1$ bascule sur chaque **front descendant** de $Q_0$, $Q_2$ sur chaque front descendant de $Q_1$, etc. C'est exactement une **division de fréquence par deux** en cascade.

---

## 2. La brique de base : le diviseur de fréquence ÷2 (bascule T)

Pour diviser une fréquence par deux, on prend une bascule **JK avec $J = K = 1$** (ou une **D avec $D = \overline{Q}$**) : elle **bascule à chaque front d'horloge**. On l'appelle **bascule T** (*Toggle*).

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 430 88" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diviseur de fréquence par deux">
  <text x="14" y="30" text-anchor="end" font-size="12" fill="currentColor">C</text>
  <polyline points="20,34 50,34 50,18 69,18 69,34 110,34 110,18 129,18 129,34 170,34 170,18 189,18 189,34 230,34 230,18 249,18 249,34 290,34 290,18 309,18 309,34 350,34 350,18 369,18 369,34 410,34" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="14" y="62" text-anchor="end" font-size="12" fill="#43a047">Q</text>
  <polyline points="20,66 50,66 50,50 110,50 110,66 170,66 170,50 230,50 230,66 290,66 290,50 350,50 350,66 410,66" fill="none" stroke="#43a047" stroke-width="2.5"/>
</svg>
<figcaption>Diviseur ÷2 : la sortie Q bascule à chaque front montant de C. Résultat : Q a une fréquence deux fois plus petite que C. C'est LA brique des compteurs.</figcaption>
</figure>

En **cascadant** plusieurs diviseurs ÷2, chaque étage divise encore par deux → on obtient `÷2, ÷4, ÷8, ÷16…` : c'est un **compteur**.

---

## 3. Compteurs asynchrones

### Le principe : la cascade (ripple)

On met des bascules T en série : **la sortie de l'une sert d'horloge à la suivante**. On parle d'**asynchrone** car les bascules ne partagent **pas** la même horloge (le « top » se propage de proche en proche, comme une vague — *ripple*).

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compteur asynchrone : bascules T en cascade">
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="70" y="75">T</text><text x="170" y="75">T</text><text x="270" y="75">T</text><text x="370" y="75">T</text>
  </g>
  <rect x="40" y="45" width="60" height="50" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="45" width="60" height="50" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <rect x="240" y="45" width="60" height="50" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <rect x="340" y="45" width="60" height="50" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <g fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="40,64 48,70 40,76"/><polyline points="140,64 148,70 140,76"/><polyline points="240,64 248,70 240,76"/><polyline points="340,64 348,70 340,76"/>
  </g>
  <line x1="10" y1="70" x2="40" y2="70" stroke="currentColor" stroke-width="2"/>
  <text x="14" y="64" font-size="12" fill="currentColor">C</text>
  <line x1="100" y1="70" x2="140" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="70" x2="240" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="300" y1="70" x2="340" y2="70" stroke="currentColor" stroke-width="2"/>
  <g fill="currentColor"><circle cx="100" cy="70" r="2.5"/><circle cx="200" cy="70" r="2.5"/><circle cx="300" cy="70" r="2.5"/></g>
  <g stroke="currentColor" stroke-width="2"><line x1="100" y1="70" x2="100" y2="24"/><line x1="200" y1="70" x2="200" y2="24"/><line x1="300" y1="70" x2="300" y2="24"/><line x1="400" y1="70" x2="400" y2="24"/></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="100" y="18">Q0</text><text x="200" y="18">Q1</text><text x="300" y="18">Q2</text><text x="400" y="18">Q3</text></g>
</svg>
<figcaption>Compteur asynchrone 4 bits : chaque sortie pilote l'horloge de la bascule suivante. Le comptage se « propage » d'étage en étage.</figcaption>
</figure>

<div class="memo" markdown>
**La règle des bulles 🫧 (à connaître absolument)**

Sur le fil qui relie une sortie à l'horloge de la bascule suivante, compte les **bulles** (sorties barrées + bulles d'horloge) :

- **1 bulle au total → COMPTEUR** (bascule sur le front descendant de la sortie précédente)
- **0 ou 2 bulles → DÉCOMPTEUR** (front montant)
</div>

### Cycle complet (modulo $2^n$)

Avec **n bascules** sans rien d'autre, on compte de 0 à $2^n - 1$. Exemple : 4 bascules → **modulo 16**. C'est un compteur **à cycle complet**.

### Cycle incomplet (modulo m ≠ $2^n$)

Pour un modulo qui n'est pas une puissance de 2 (ex. **modulo 10**), on part d'un compteur complet et on **détecte la valeur de trop** pour **forcer un retour à 0**.

**Méthode (compteur modulo 10) :** on veut compter 0→9. À la valeur **10** (`1010`), il faut remettre à 0.

1. **Détecter 10** : sur 0→9, les sorties $Q_1$ et $Q_3$ ne valent **jamais 1 en même temps**. Elles le font **pour la première fois à 10**. On branche $Q_1$ et $Q_3$ sur une porte **NON-ET** → sa sortie $M$ tombe à **0** pile à 10.
2. **Forcer 0** : on relie $M$ aux entrées **Clear** de toutes les bascules.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Détection de modulo avec NON-ET et Clear">
  <rect x="40" y="35" width="130" height="60" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="105" y="60" text-anchor="middle" font-size="11" fill="currentColor">Compteur</text>
  <text x="105" y="76" text-anchor="middle" font-size="11" fill="currentColor">4 bits</text>
  <line x1="10" y1="65" x2="40" y2="65" stroke="currentColor" stroke-width="2"/>
  <text x="14" y="59" font-size="11" fill="currentColor">C</text>
  <line x1="170" y1="50" x2="210" y2="50" stroke="currentColor" stroke-width="2"/>
  <text x="184" y="44" font-size="10" fill="currentColor">Q3</text>
  <line x1="170" y1="80" x2="210" y2="80" stroke="currentColor" stroke-width="2"/>
  <text x="184" y="94" font-size="10" fill="currentColor">Q1</text>
  <rect x="210" y="40" width="44" height="50" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="232" y="70" text-anchor="middle" font-size="13" fill="currentColor">&amp;</text>
  <circle cx="260" cy="65" r="6" fill="var(--md-code-bg-color)" stroke="currentColor" stroke-width="2"/>
  <line x1="266" y1="65" x2="300" y2="65" stroke="currentColor" stroke-width="2"/>
  <text x="284" y="59" font-size="11" fill="currentColor">M</text>
  <polyline points="300,65 300,125 105,125 105,95" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="120" y="120" font-size="10" fill="currentColor">Clear</text>
</svg>
<figcaption>Modulo 10 : la porte NON-ET détecte que Q1 et Q3 valent 1 (valeur 10), sa sortie M tombe à 0 et déclenche le Clear de toutes les bascules → retour immédiat à 0.</figcaption>
</figure>

!!! note "Pour un décompteur modulo m"
    On détecte la valeur **15** (`1111`) et on la remplace par **m − 1**, en combinant **Clear** (pour les bits à 0) et **Preset** (pour les bits à 1). Même principe, juste la valeur forcée qui change.

---

## 4. Compteurs synchrones

### Le principe

Toutes les bascules partagent **la même horloge** → elles changent **toutes en même temps** (plus de propagation « ripple », donc plus rapide et plus fiable). Un **circuit combinatoire** calcule les entrées des bascules en fonction de leurs sorties, pour produire **n'importe quelle séquence voulue**.

<figure class="circuit-figure" markdown="span">
<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compteur synchrone : circuit combinatoire et bascules">
  <rect x="40" y="20" width="280" height="38" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
  <text x="180" y="44" text-anchor="middle" font-size="12" fill="currentColor">Circuit combinatoire</text>
  <g fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2">
    <rect x="60" y="90" width="60" height="44" rx="4"/><rect x="150" y="90" width="60" height="44" rx="4"/><rect x="240" y="90" width="60" height="44" rx="4"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="90" y="116">bascule</text><text x="180" y="116">bascule</text><text x="270" y="116">bascule</text></g>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polyline points="90,90 90,58"/><polyline points="180,90 180,58"/><polyline points="270,90 270,58"/>
    <polyline points="110,58 110,90"/><polyline points="200,58 200,90"/><polyline points="290,58 290,90"/>
  </g>
  <g fill="currentColor"><polygon points="110,88 106,80 114,80"/><polygon points="200,88 196,80 204,80"/><polygon points="290,88 286,80 294,80"/></g>
  <g fill="currentColor"><polygon points="90,60 86,68 94,68"/><polygon points="180,60 176,68 184,68"/><polygon points="270,60 266,68 274,68"/></g>
  <line x1="20" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="2"/>
  <text x="14" y="154" text-anchor="end" font-size="11" fill="currentColor">C</text>
  <g stroke="currentColor" stroke-width="2"><line x1="90" y1="150" x2="90" y2="134"/><line x1="180" y1="150" x2="180" y2="134"/><line x1="270" y1="150" x2="270" y2="134"/></g>
</svg>
<figcaption>Compteur synchrone : une même horloge C pour toutes les bascules. Le circuit combinatoire lit les sorties (Q) et calcule les entrées (J/K ou D) pour générer la séquence voulue.</figcaption>
</figure>

### Les tables de transition

Concevoir le circuit combinatoire = trouver, pour chaque bit, quelle **entrée** produit la bonne **transition**. D'où les tables de transition (les `Φ` = « peu importe ») :

**Bascule JK :**

| Q(t) → Q(t+1) | J | K |
|:---:|:---:|:---:|
| 0 → 0 | 0 | Φ |
| 0 → 1 | 1 | Φ |
| 1 → 0 | Φ | 1 |
| 1 → 1 | Φ | 0 |

**Bascule D** (trivial, $D = Q^{+}$) :

| Q(t) → Q(t+1) | D |
|:---:|:---:|
| 0 → 0 | 0 |
| 0 → 1 | 1 |
| 1 → 0 | 0 |
| 1 → 1 | 1 |

### La méthode en 4 temps

<div class="methode" markdown>
**La recette (vraie pour TOUS les compteurs synchrones)**

1. **Écris la séquence** voulue en binaire ($Q_2 Q_1 Q_0$, ligne par ligne).
2. Pour chaque bit, déduis $J/K$ (ou $D$) avec la **table de transition**.
3. **Karnaugh** chaque entrée — profite des `Φ` des états inutilisés pour simplifier.
4. **Simule** ta solution pour vérifier que le cycle boucle bien.
</div>

> :material-book-open-page-variant: **Exemples entièrement corrigés et vérifiés** (le même compteur modulo 5 en JK puis en D, avec tableaux de Karnaugh) : voir les **[Exercices 1 et 2 de la page Spécial Examen](../2_exos_examen.md)**.

---

## Récap — Chapitre 2

<div class="retenir" markdown>
**L'essentiel**

1. **Compteur** = compte 0→m−1 et boucle. **Modulo m** = nombre de valeurs.
2. **Brique de base** : le diviseur **÷2** = bascule **T** (JK avec $J=K=1$).
3. **Asynchrone** : bascules en **cascade** (la sortie de l'une = horloge de la suivante). Règle des **bulles** : 1 bulle = compteur, 0/2 = décompteur.
4. **Cycle incomplet** (modulo m) : **détecter** la valeur de trop (NON-ET) et **forcer** un retour (Clear / Preset).
5. **Synchrone** : **même horloge** partout + circuit combinatoire. Méthode : séquence → table de transition → Karnaugh → simulation.
</div>

[:material-arrow-left-bold: Retour : Chapitre 1 — Bascules](../1_bascules/2_cours.md) · [:material-arrow-right-bold: S'entraîner : Spécial Examen](../2_exos_examen.md)
