# Développement d'un site web dynamique (UAA12)

## Dossier d'exercices de révision — toutes les séries

> Ce dossier rassemble des exercices **inédits** mais de **difficulté équivalente** à
> ceux des séries 1 à 6. Son but n'est **pas** d'introduire de nouveaux concepts, mais
> de **réviser** l'ensemble des thématiques abordées au cours de l'UAA12. Chaque série
> propose au minimum 5 exercices, suivis de 2 exercices récapitulatifs qui mobilisent
> plusieurs séries à la fois.
>
> Les **corrigés** sont regroupés en **annexe**, à la fin du document. Essaie de réaliser
> chaque exercice par toi-même avant de t'y référer.

---

### Objets d'apprentissage couverts

- ✔ Élaborer un formulaire sur la base d'une structure donnée.
- ✔ Construire une page WEB dynamique à l'aide du langage PHP.
- ✔ Construire une page WEB dynamique à l'aide du langage JavaScript.
- ✔ Concevoir un formulaire répondant aux exigences d'un cahier des charges.
- ✔ Associer des balises HTML de formulaires à leur sémantique.
- ✔ Se connecter à une base de données relationnelle à l'aide du langage PHP.
- ✔ Exécuter des requêtes de lecture et d'écriture à une base de données relationnelle.
- ✔ Formuler la syntaxe des requêtes à une base de données relationnelle (SQL).
- ✔ Décrire le rôle d'un cookie et d'une session.
- ✔ Caractériser et se protéger des attaques WEB les plus courantes.

### Aperçu des séries

| Série | Thématique | Concepts révisés |
|------|-----------|------------------|
| 1 | Rappels & introduction au PHP | balises `<?php ?>`, `echo`, `date()`, CSS, JS |
| 2 | Bases de PHP | types, variables, chaînes, conditions, boucles |
| 3 | Les tableaux | tableaux indexés, associatifs, 2D, `foreach` |
| 4 | Échange de données | formulaires, `GET` / `POST`, `$_GET` / `$_POST` |
| 5 | Cookies & sessions | `setcookie`, `$_COOKIE`, `$_SESSION`, sécurité |
| 6 | Bases de données | `mysqli`, `SELECT` / `INSERT`, requêtes préparées |

---

## Série 1 — Rappels et introduction au PHP

> **Objet d'apprentissage :** Construire une page WEB dynamique à l'aide du langage PHP.

### Exercice 1.1 : la page qui dit bonjour

**Étape 1.** Crée un fichier `bonjour.php` et place-y une structure HTML5 valide (`<!doctype html>`,
`<html>`, `<head>`, `<body>`). Dans le `<body>`, affiche un titre `<h1>` contenant le texte
« Bienvenue sur mon site ! ».

**Étape 2.** Sous le titre, ajoute un paragraphe qui affiche, **à l'aide de PHP** (`echo`), la
phrase : « Cette page a été générée à HH:MM. » où `HH:MM` est l'heure courante (fonction `date`).

**Étape 3.** Ajoute un second paragraphe qui souhaite une bonne journée différente selon le moment :
« Bonne matinée ! » avant 12h, sinon « Bon après-midi ! ». Utilise `date('G')` (heure de 0 à 23)
et une structure `if / else`.

### Exercice 1.2 : carte de visite stylée

**Étape 1.** Crée `carte.php`. Affiche, dans une `<div>`, ton prénom (`<h2>`), ton métier rêvé
(`<p>`) et une adresse e-mail fictive (`<p>`).

**Étape 2.** Crée un fichier `carte.css` et lie-le à la page. Applique les règles suivantes :

- le fond de la page est de couleur `teal` ;
- la `<div>` fait 400px de largeur, est centrée, possède un rembourrage de 20px, un fond blanc et
  des coins arrondis de 10px ;
- le prénom (`<h2>`) est affiché en `teal` et centré.

**Étape 3.** À l'aide de PHP, ajoute en bas de la carte un paragraphe « Profil consulté le JJ/MM/AAAA »
en utilisant la fonction `date` avec le bon format.

### Exercice 1.3 : le compteur de mots

**Étape 1.** Dans un fichier `compteur.php`, déclare une variable `$phrase` contenant une phrase de
ton choix (au moins 6 mots).

**Étape 2.** Affiche la phrase dans un paragraphe.

**Étape 3.** Sous la phrase, affiche « Cette phrase contient N caractères. » où `N` est obtenu grâce
à la fonction `strlen`. Renseigne-toi si nécessaire :
<https://www.w3schools.com/php/func_string_strlen.asp>

### Exercice 1.4 : afficher / cacher avec JavaScript

**Étape 1.** Reprends la page `bonjour.php` de l'exercice 1.1.

**Étape 2.** Ajoute un bouton « Afficher / cacher l'heure ». Au clic, le paragraphe contenant l'heure
doit apparaître ou disparaître (utilise JavaScript et la propriété `style.display`).

**Étape 3.** Donne un identifiant (`id`) au paragraphe de l'heure afin de pouvoir le cibler depuis
JavaScript avec `document.getElementById`.

### Exercice 1.5 : pair ou impair

**Étape 1.** Dans un fichier `parite.php`, crée une variable `$nombre` initialisée à `7`.

**Étape 2.** À l'aide d'une structure conditionnelle et de l'opérateur modulo `%`, affiche un
paragraphe indiquant « 7 est un nombre impair. » (ou « pair » selon la valeur).

**Étape 3.** Teste ton code en changeant la valeur de `$nombre` (essaie `0`, `10`, `13`).

---

## Série 2 — Les bases de PHP

> **Objet d'apprentissage :** Construire une page WEB dynamique à l'aide du langage PHP.

### Exercice 2.1 : types et affichage

**Étape 1.** Utilise l'outil en ligne <https://onlinephp.io/> pour cet exercice.

**Étape 2.** Écris un script qui déclare une variable `$x = 42` et affiche, sur trois lignes :

- la valeur de `$x` et son type, à l'aide de `gettype` ;
- le résultat de `var_export($x)` ;
- le résultat de `var_dump($x)`.

**Étape 3.** Recommence l'exercice en initialisant successivement `$x` avec : `3.14`, `"coucou"`,
`true`, `false`, `null`. Observe la manière dont PHP affiche chaque type.

### Exercice 2.2 : guillemets contre apostrophes

**Étape 1.** Déclare `$prenom = 'Donald';` et `$age = 80;`.

**Étape 2.** Affiche la phrase « Donald a 80 ans. » en utilisant des **guillemets** (`"`) et
l'interpolation de variables.

**Étape 3.** Affiche exactement la même phrase, mais cette fois avec des **apostrophes** (`'`) et la
**concaténation** (`.`). Quelle est la différence entre les deux approches ?

### Exercice 2.3 : la calculatrice de TVA

**Étape 1.** Déclare une variable `$prixHT = 100;` (prix hors taxes en euros).

**Étape 2.** Calcule le montant de la TVA (21 %) dans une variable `$tva`, puis le prix TTC dans
`$prixTTC`.

**Étape 3.** Affiche un récapitulatif lisible :

```
Prix HT  : 100 €
TVA (21%): 21 €
Prix TTC : 121 €
```

### Exercice 2.4 : la table de multiplication

**Étape 1.** Déclare une variable `$n = 7;`.

**Étape 2.** À l'aide d'une boucle `for`, affiche la table de multiplication de `$n` de 1 à 10, sous
la forme « 7 x 1 = 7 », « 7 x 2 = 14 », etc. (un résultat par ligne, utilise `<br>`).

**Étape 3.** Transforme ton code pour qu'il fonctionne avec une boucle `while` à la place du `for`.

### Exercice 2.5 : deviner la mention

**Étape 1.** Déclare une variable `$note = 14;` (note sur 20).

**Étape 2.** À l'aide d'une structure `if / elseif / else`, affiche la mention correspondante :

- moins de 10 : « Échec » ;
- de 10 à 11,9 : « Satisfaction » ;
- de 12 à 13,9 : « Distinction » ;
- de 14 à 15,9 : « Grande distinction » ;
- 16 et plus : « La plus grande distinction ».

**Étape 3.** Vérifie ton code en testant plusieurs valeurs de `$note` (5, 10, 13, 14, 18).

### Exercice 2.6 : FizzBuzz

**Étape 1.** À l'aide d'une boucle, parcours les nombres de 1 à 30.

**Étape 2.** Pour chaque nombre, affiche :

- « Fizz » s'il est divisible par 3 ;
- « Buzz » s'il est divisible par 5 ;
- « FizzBuzz » s'il est divisible par 3 **et** par 5 ;
- sinon, le nombre lui-même.

### Exercice 2.7 : produire des balises avec attributs (drill)

> Générer une balise HTML qui contient des attributs (`value="..."`, `href="..."`, `src="..."`) depuis
> PHP oblige à jongler entre **guillemets** `"`, **apostrophes** `'` et **concaténation** `.`. C'est une
> source d'erreurs très fréquente : entraîne-toi sur chaque cas.

Deux techniques existent — pratique **les deux** à chaque fois :

- **apostrophes + concaténation** : `echo '<img src="' . $url . '">';`
- **guillemets + interpolation** (les `"` du HTML doivent alors être échappés en `\"`, ou remplacés
  par des `'`) : `echo "<img src=\"$url\">";`

Pour chaque ligne ci-dessous, produis **exactement** le HTML attendu, avec les deux techniques :

| Variables | HTML à produire |
|---|---|
| `$url = 'chat.jpg';` | `<img src="chat.jpg">` |
| `$c = 'blue';` | `<p style="color:blue">Texte</p>` |
| `$ville = 'Liège';` | `<input type="text" name="ville" value="Liège">` |
| `$href = 'accueil.php'; $txt = 'Retour';` | `<a href="accueil.php">Retour</a>` |

### Exercice 2.8 : des attributs dynamiques dans une boucle

**Étape 1.** Déclare `$fruits = ['pomme', 'poire', 'cerise'];`.

**Étape 2.** À l'aide d'une boucle, génère un menu déroulant : pour chaque fruit, produis une balise
`<option value="pomme">pomme</option>` (la valeur de l'attribut `value` **et** le texte affiché valent
le nom du fruit). N'oublie pas d'entourer le tout par `<select>` … `</select>`.

**Étape 3.** Même principe, mais produis cette fois une case à cocher par fruit :
`<input type="checkbox" name="fruits[]" value="pomme"> pomme<br>`.

### Exercice 2.9 : corrige les quotes (debug)

Chacune des lignes suivantes **devrait** produire une balise HTML correcte, mais contient une erreur de
guillemets / apostrophes / concaténation. Repère l'erreur et corrige-la.

```php
<?php
$nom = 'Bob';
$url = 'page.php';
$v   = 'rouge';

echo '<input type="text" value=$nom>';                       // 1
echo "<a href=$url>clic</a>";                                // 2
echo '<option value="' . $v '">' . $v . '</option>';         // 3
?>
```

Pour chacune, indique **ce qui ne va pas** puis donne la version corrigée.

### Exercice 2.10 : attribuer une classe CSS selon une condition

> Très utile en pratique : on choisit **dynamiquement** la classe CSS d'une balise selon une condition,
> pour la mettre en forme différemment. Le nom de la classe est calculé dans une variable, puis inséré
> dans l'attribut `class="..."` (encore du jonglage guillemets / concaténation !).

**Étape 1.** Dans le `<head>`, crée deux classes : `.positif { color: green; }` et
`.negatif { color: red; }`.

**Étape 2.** Soit `$temperatures = [12, -3, 8, -1, 20];`. Pour chaque température, affiche un paragraphe
dont la **classe dépend du signe** : `<p class="positif">12</p>` si la valeur est supérieure ou égale
à 0, sinon `<p class="negatif">-3</p>`. (Détermine d'abord le nom de la classe dans une variable, puis
insère-le dans l'attribut.)

**Étape 3.** Ajoute une classe `.gras { font-weight: bold; }` et affiche **en gras** uniquement les
températures dont la valeur absolue dépasse 10. Astuce : une balise peut recevoir plusieurs classes,
séparées par une espace, comme `class="positif gras"`.

---

## Série 3 — Les tableaux

> **Objet d'apprentissage :** Construire une page WEB dynamique à l'aide du langage PHP.

### Exercice 3.1 : la liste de courses

**Étape 1.** Déclare un tableau indexé `$courses` contenant : `'pain'`, `'lait'`, `'œufs'`,
`'café'`, `'pommes'`.

**Étape 2.** Affiche le contenu du tableau sous la forme d'une liste HTML à puces (`<ul>` / `<li>`)
à l'aide d'une boucle `foreach`.

**Étape 3.** Sous la liste, affiche « Tu as N articles dans ton panier. » où `N` est obtenu avec la
fonction `count`.

### Exercice 3.2 : le bulletin

**Étape 1.** Déclare un tableau associatif `$notes` reliant des matières à des notes :

```php
$notes = [
    'Mathématiques' => 14,
    'Français'      => 11,
    'Informatique'  => 18,
    'Histoire'      => 9,
];
```

**Étape 2.** Affiche un tableau HTML (`<table>`) à deux colonnes : la matière et la note.

**Étape 3.** Calcule et affiche la moyenne des notes (somme des valeurs divisée par le nombre de
matières). Utilise les fonctions `array_sum` et `count`.

### Exercice 3.3 : le top des langages

**Étape 1.** Déclare un tableau indexé `$langages` contenant au moins 6 langages de programmation,
dans le désordre.

**Étape 2.** Trie le tableau par ordre alphabétique avec la fonction `sort`, puis affiche-le sous
forme de liste numérotée (`<ol>`).

**Étape 3.** Affiche en gras le **premier** et le **dernier** élément du tableau trié (utilise les
index appropriés et la fonction `count`).

### Exercice 3.4 : annuaire 2D

**Étape 1.** Complète la définition du tableau 2D suivant pour stocker un petit annuaire :

```php
<?php
$contacts = [
    'Picsou'  => ['tel' => '0470 11 22 33', 'ville' => 'Donaldville'],
    'Donald'  => ['tel' => '0470 44 55 66', 'ville' => 'Donaldville'],
    // ajoute 'Géo Trouvetou' et 'Gontran'
];
?>
```

**Étape 2.** Affiche chaque contact sous la forme « Picsou — 0470 11 22 33 (Donaldville) » à l'aide
d'une boucle `foreach`.

**Étape 3.** Modifie ton script pour afficher uniquement les contacts habitant « Donaldville ».

### Exercice 3.5 : le panier additionné

**Étape 1.** Déclare un tableau associatif reliant des produits à leur prix :

```php
$panier = [
    'Café'      => 4.50,
    'Croissant' => 1.20,
    'Jus'       => 2.80,
];
```

**Étape 2.** Affiche chaque produit avec son prix dans un tableau HTML.

**Étape 3.** Calcule le total du panier à l'aide d'une boucle `foreach` (en additionnant les
valeurs), puis affiche-le en bas du tableau.

### Exercice 3.6 : le filtre des majeurs

**Étape 1.** Déclare un tableau 2D `$personnes`, chaque personne ayant un `nom` et un `age`
(crée-en au moins 5, avec des âges variés).

**Étape 2.** Parcours le tableau et affiche uniquement les personnes **majeures** (18 ans et plus).

**Étape 3.** Compte et affiche combien de personnes sont majeures et combien sont mineures.

### Exercice 3.7 : le bulletin de la classe

> Cet exercice utilise **deux boucles imbriquées** pour parcourir un tableau à deux niveaux.

**Étape 1.** Déclare un tableau 2D `$classe` qui associe chaque élève à un tableau de notes
(matière => note) :

```php
$classe = [
    'Alice' => ['Math' => 15, 'Français' => 12, 'Sciences' => 18],
    'Bob'   => ['Math' => 9,  'Français' => 14, 'Sciences' => 11],
    'Chloé' => ['Math' => 17, 'Français' => 16, 'Sciences' => 13],
];
```

**Étape 2.** À l'aide de **deux boucles `foreach` imbriquées**, affiche pour chaque élève son nom,
suivi de la liste de ses matières et de ses notes (une liste de listes en HTML).

**Étape 3.** Présente plutôt les mêmes données dans un tableau HTML `<table>` : une ligne par élève
et une colonne par matière.

---

## Série 4 — Échange de données (GET / POST)

> **Objets d'apprentissage :** Élaborer un formulaire sur la base d'une structure donnée ·
> Concevoir un formulaire répondant aux exigences d'un cahier des charges ·
> Associer des balises HTML de formulaires à leur sémantique.

### Exercice 4.1 : la recherche en GET

**Étape 1.** Crée un fichier `recherche.php` contenant un formulaire avec `method="GET"`, un champ
texte nommé `q` et un bouton « Rechercher ».

**Étape 2.** Côté PHP, si une recherche est reçue (`isset($_GET['q'])`), affiche « Tu as recherché :
… ». Sinon, affiche « Aucune recherche effectuée. ».

**Étape 3.** Observe l'URL après la soumission : repère le paramètre `?q=...`.

**Étape 4.** Sous le formulaire, propose trois suggestions de recherche sous forme de **liens**
(« informatique », « cuisine », « voyage »). Chaque lien doit pointer vers `recherche.php` en passant
directement le mot-clé dans l'URL (par exemple `recherche.php?q=cuisine`) : c'est donc à toi de
**construire l'URL** côté serveur. Vérifie qu'un clic relance bien la recherche.

### Exercice 4.2 : la calculatrice en POST

**Étape 1.** Crée `calcul.php` avec un formulaire `method="POST"` comportant deux champs numériques
(`a` et `b`) et un bouton « Additionner ».

**Étape 2.** Côté PHP, si les deux valeurs sont reçues, affiche « a + b = résultat ».

**Étape 3.** Ajoute un menu déroulant (`<select>`) permettant de choisir l'opération (`+`, `-`, `*`,
`/`) et adapte le calcul en conséquence. Pense à gérer la division par zéro.

### Exercice 4.3 : le formulaire d'inscription

**Étape 1.** Crée un formulaire d'inscription (`method="POST"`) avec, au minimum : un nom, un e-mail
(`type="email"`), un mot de passe (`type="password"`) et une case à cocher « J'accepte les
conditions ».

**Étape 2.** Associe correctement chaque champ à un `<label>` (attribut `for` / `id`) et utilise des
attributs `name` cohérents.

**Étape 3.** Côté PHP, après soumission, valide les données et affiche **un message d'erreur précis
selon le cas** : « Le nom est obligatoire. » si le nom est vide, « L'adresse e-mail est obligatoire. »
si l'e-mail est vide, « Tu dois accepter les conditions. » si la case n'est pas cochée. Plusieurs
erreurs peuvent s'afficher en même temps.

**Étape 4.** Si **toutes** les données sont valides, ne réaffiche pas le formulaire : redirige
l'utilisateur vers une page `merci.php` à l'aide de `header('Location: merci.php')` (suivi de
`exit;`). Rappelle-toi que `header` doit être appelée **avant** tout affichage HTML.

### Exercice 4.4 : le quiz à un formulaire

**Étape 1.** Crée un formulaire posant une question à choix multiple à l'aide de boutons radio
(`type="radio"`), par exemple : « Quel langage s'exécute côté serveur ? » avec les options PHP,
JavaScript, CSS.

**Étape 2.** Côté PHP, après soumission, compare la réponse reçue à la bonne réponse et affiche
« Bravo ! » ou « Mauvaise réponse, la bonne était : PHP. ».

**Étape 3.** Ajoute deux questions supplémentaires et affiche un score sur 3.

### Exercice 4.5 : convertisseur de température

**Étape 1.** Crée un formulaire `method="GET"` avec un champ pour saisir une température en degrés
Celsius.

**Étape 2.** Côté PHP, convertis la valeur reçue en Fahrenheit (`F = C × 9/5 + 32`) et affiche le
résultat.

**Étape 3.** Vérifie que la valeur reçue est bien numérique (`is_numeric`) avant de calculer ; sinon,
affiche un message d'erreur.

### Exercice 4.6 : le formulaire qui se souvient

**Étape 1.** Reprends le formulaire d'inscription de l'exercice 4.3.

**Étape 2.** Fais en sorte qu'après une soumission, les champs texte conservent la valeur entrée par
l'utilisateur (utilise l'attribut `value="..."` rempli avec la valeur de `$_POST`).

**Étape 3.** Protège l'affichage de ces valeurs avec la fonction `htmlspecialchars` (on verra
pourquoi en série 5 !).

### Exercice 4.7 : du catalogue à la commande

> Cet exercice met en relation **deux pages** : une page qui liste, et une page qui agit sur l'élément
> choisi. C'est un schéma que tu retrouveras partout.

**Étape 1.** Crée `menu.php` qui déclare un tableau de plats (`['Pizza', 'Burger', 'Tacos']`) et les
affiche sous forme de liste. Le **nom de chaque plat est un lien** vers `commande.php` en passant le
nom du plat en GET (par exemple `commande.php?plat=Pizza`). Pense à `urlencode` / `htmlspecialchars`
sur le nom passé dans l'URL.

**Étape 2.** Crée `commande.php`. Si **aucun** plat n'est passé en GET, l'utilisateur n'a rien à
commander : redirige-le immédiatement vers `menu.php` (`header('Location: menu.php'); exit;`).

**Étape 3.** Sinon, affiche « Tu commandes : PLAT » puis un formulaire (`method="POST"`) demandant le
nombre de portions. Astuce : le `action` du formulaire doit **conserver le plat en GET** tout en
envoyant la quantité en POST, soit `action="commande.php?plat=Pizza"`. Une même requête transporte
ainsi une donnée en GET (l'URL) **et** une donnée en POST (le formulaire).

**Étape 4.** À la soumission, affiche « Commande confirmée : 2 × Pizza ». (Récupère le plat dans
`$_GET` et la quantité dans `$_POST`.)

### Exercice 4.8 : trouve et corrige les erreurs (formulaires GET / POST)

> Chaque extrait ci-dessous contient une **erreur classique** rencontrée avec les formulaires et les
> méthodes GET / POST. Pour chacun, dis **ce qui ne va pas** puis donne la version corrigée.

Côté HTML :

```html
<!-- 1 -->
<form action="reservation.php">
    <input type="text" name="nom">
    <input type="submit">
</form>

<!-- 2 -->
<input type="text" id="ville">

<!-- 3 -->
<select name="service">
    <option>Médecine générale</option>
    <option>Kinésithérapie</option>
</select>

<!-- 4 -->
<input type="button" value="Envoyer">
```

Côté PHP :

```php
// 5
$nom = $_POST["nom"];
echo "Bonjour $nom";

// 6
$ville = $_GET[ville];

// 7  (on veut que les DEUX données existent)
if (isset($_POST["nom"]) || isset($_POST["service"])) {
    // ...
}

// 8  (rediriger avec deux paramètres)
header("Location: quiz.php?q1=" . $q1 . "q2=" . $q2);
```

### Exercice 4.9 : plusieurs cases à cocher (tableau en POST)

> Quand plusieurs cases à cocher partagent le **même `name` suivi de `[]`**, PHP reçoit leurs valeurs
> dans un **tableau**. Il faut donc le parcourir avec une boucle.

**Étape 1.** Crée un formulaire (`POST`) proposant des suppléments pour une pizza : au moins quatre
cases à cocher partageant le `name` `supplements[]`, par exemple
`<input type="checkbox" name="supplements[]" value="fromage"> Fromage`.

**Étape 2.** À la soumission, si des suppléments ont été cochés (`isset($_POST['supplements'])`),
parcours le tableau reçu avec un `foreach` et affiche la liste des suppléments choisis.

**Étape 3.** Affiche aussi le **nombre** de suppléments choisis (`count`). Si aucune case n'est cochée,
affiche « Aucun supplément. ».

---

## Série 5 — Cookies et sessions

> **Objets d'apprentissage :** Décrire le rôle d'un cookie · Construire une page dynamique avec PHP
> et JavaScript · Caractériser les attaques WEB les plus courantes.

### Exercice 5.1 : le cookie de bienvenue

**Étape 1.** Crée une page `bienvenue.php` avec un formulaire (`POST`) demandant le prénom de
l'utilisateur.

**Étape 2.** À la soumission, stocke le prénom dans un cookie `prenom` (fonction `setcookie`,
durée de validité : 7 jours).

**Étape 3.** À chaque chargement de la page, si le cookie `prenom` existe (`$_COOKIE`), affiche
« Content de te revoir, PRENOM ! » ; sinon, affiche le formulaire.

> ⚠️ Rappel : `setcookie` doit être appelée **avant** tout affichage HTML (avant `<!doctype html>`).

### Exercice 5.2 : le thème clair / sombre

**Étape 1.** Crée une page proposant deux boutons : « Thème clair » et « Thème sombre ».

**Étape 2.** Au clic, stocke le choix dans un cookie `theme` (« clair » ou « sombre »).

**Étape 3.** Côté PHP, lis le cookie `theme` et applique la couleur de fond et de texte
correspondante à la page (fond blanc / texte noir, ou fond noir / texte blanc). La valeur par défaut
est le thème clair.

### Exercice 5.3 : le compteur de visites

**Étape 1.** Crée une page `compteur.php` utilisant un cookie `visites`.

**Étape 2.** À chaque chargement, incrémente la valeur du cookie de 1 et affiche « Tu as visité
cette page N fois. ».

**Étape 3.** Ajoute un bouton « Réinitialiser » qui supprime le cookie (en lui donnant une date
d'expiration passée).

### Exercice 5.4 : mini-connexion avec session

**Étape 1.** Crée `login.php` avec un formulaire (`POST`) demandant un nom d'utilisateur et un mot de
passe. Le couple valide est `admin` / `1234` (codé en dur, c'est un exercice !).

**Étape 2.** Si les identifiants sont corrects, démarre une session (`session_start`) et stocke
`$_SESSION['connecte'] = true;` puis redirige vers `accueil.php`.

**Étape 3.** Sur `accueil.php`, vérifie que `$_SESSION['connecte']` est vrai : si oui, affiche
« Espace membre » ; sinon, renvoie vers `login.php`. Ajoute un lien « Déconnexion » qui détruit la
session (`session_destroy`).

### Exercice 5.5 : le panier de session

**Étape 1.** Crée une page listant 3 produits, chacun accompagné d'un bouton « Ajouter au panier ».

**Étape 2.** À l'aide d'une session, stocke dans `$_SESSION['panier']` (un tableau) les produits
ajoutés.

**Étape 3.** Affiche en permanence le contenu du panier ainsi que le nombre total d'articles. Ajoute
un bouton « Vider le panier ».

### Exercice 5.6 : repérer la faille XSS

**Étape 1.** Crée une page `commentaire.php` avec un formulaire (`POST`) permettant de saisir un
commentaire, qui est ensuite ré-affiché tel quel sur la page.

**Étape 2.** Saisis comme commentaire : `<script>alert('piraté');</script>`. Que se passe-t-il ?
Décris en une phrase l'attaque que tu viens de réaliser (faille **XSS**).

**Étape 3.** Corrige la faille en filtrant l'affichage avec `htmlspecialchars`. Vérifie que le script
n'est plus exécuté.

### Exercice 5.7 : ma fiche profil

> Ici on stocke en session **plusieurs informations liées** à un même utilisateur, et on fait en sorte
> qu'il ne doive pas les ré-encoder à chaque visite.

**Étape 1.** Crée `profil.php` avec un formulaire (`POST`, vers la même page) demandant le pseudo,
l'e-mail et la ville de l'utilisateur. N'oublie pas `session_start()` en tout début de fichier.

**Étape 2.** À la soumission, enregistre les trois champs en session (par exemple
`$_SESSION['pseudo']`, `$_SESSION['email']`, `$_SESSION['ville']`).

**Étape 3.** Si l'utilisateur revient sur la page alors qu'il est **déjà identifié** (les données
existent déjà en session), affiche au-dessus du formulaire : « Tu es identifié en tant que PSEUDO.
Tu peux modifier tes informations ci-dessous. ». De plus, **pré-remplis** chaque champ du formulaire
avec la valeur stockée en session (attribut `value="..."`, protégé par `htmlspecialchars`) : il peut
ainsi corriger une donnée et la **mettre à jour**.

**Étape 4.** Ajoute un bouton « Déconnexion ». Au clic, il doit : détruire la session
(`session_destroy`), **supprimer** un éventuel cookie `derniere_visite`, puis rediriger vers
`profil.php`. Vérifie qu'après déconnexion le formulaire est de nouveau vide.

---

## Série 6 — Exploitation de bases de données

> **Objets d'apprentissage :** Se connecter à une base de données relationnelle à l'aide de PHP ·
> Exécuter des requêtes de lecture et d'écriture · Formuler la syntaxe SQL · Se protéger des attaques
> WEB les plus courantes.

> **Mise en place commune.** Dans phpMyAdmin, crée une base `biblio` puis exécute :
>
> ```sql
> CREATE TABLE livres (
>     id INT AUTO_INCREMENT PRIMARY KEY,
>     titre VARCHAR(150),
>     auteur VARCHAR(100),
>     genre VARCHAR(50),
>     annee INT,
>     disponible BOOLEAN
> );
>
> INSERT INTO livres VALUES
> (NULL, 'Le Seigneur des Anneaux', 'Tolkien',   'Fantasy',     1954, 1),
> (NULL, '1984',                    'Orwell',    'Dystopie',    1949, 1),
> (NULL, 'Le Petit Prince',         'Saint-Exupéry', 'Conte',   1943, 0),
> (NULL, 'Dune',                    'Herbert',   'Science-fiction', 1965, 1),
> (NULL, 'Fahrenheit 451',          'Bradbury',  'Dystopie',    1953, 0);
> ```

### Exercice 6.1 : afficher le catalogue

**Étape 1.** Crée `catalogue.php` et établis la connexion à la base `biblio` :

```php
<?php
$conn = mysqli_connect('localhost', 'root', '', 'biblio');
if (!$conn) {
    die('Erreur de connexion : ' . mysqli_connect_error());
}
?>
```

**Étape 2.** Exécute la requête `SELECT * FROM livres` et affiche tous les livres dans un tableau
HTML (colonnes : titre, auteur, genre, année).

**Étape 3.** Ajoute une colonne « Disponible » affichant « Oui » ou « Non » selon la valeur du champ
`disponible`.

### Exercice 6.2 : le filtre du catalogue

**Étape 1.** Reprends la connexion à `biblio`. Au-dessus du tableau des livres, place un formulaire
(`POST` vers la même page) contenant une liste déroulante des genres, une case à cocher « Uniquement
les livres disponibles » et un bouton « Filtrer ».

**Étape 2.** Les options de la liste déroulante ne doivent **pas** être écrites en dur : récupère-les
depuis la base avec `SELECT DISTINCT genre FROM livres` (pour éviter les doublons) et ajoute en tête
une option « Tous les genres ».

**Étape 3.** À la soumission, affiche les livres correspondant aux filtres choisis. Quatre cas sont
possibles : un genre + la case cochée, un genre seul, la case cochée seule, ou aucun filtre. Construis
la clause `WHERE` en conséquence (et trie le résultat par année croissante avec `ORDER BY`).

### Exercice 6.3 : ajouter un livre (INSERT)

**Étape 1.** Crée un formulaire (`POST`) permettant de saisir le titre, l'auteur, le genre et l'année
d'un nouveau livre.

**Étape 2.** À la soumission, insère le livre dans la table à l'aide d'une requête `INSERT INTO`.

**Étape 3.** Après l'insertion, redirige l'utilisateur vers le catalogue (exercice 6.1) à l'aide de
`header('Location: catalogue.php'); exit;` pour vérifier que le livre apparaît bien.

### Exercice 6.4 : la recherche sécurisée (requête préparée)

**Étape 1.** Crée un formulaire de recherche (`GET`) avec un champ `auteur`.

**Étape 2.** Récupère tous les livres de cet auteur à l'aide d'une **requête préparée** (`mysqli_prepare`,
`bind_param`, `execute`). Explique en une phrase pourquoi on n'insère **jamais** directement la valeur
reçue dans la chaîne SQL.

**Étape 3.** Avant d'afficher les résultats, vérifie avec `mysqli_num_rows` s'il y en a au moins un.
Si la recherche ne renvoie **aucun** livre, affiche « Aucun livre trouvé pour cet auteur. » au lieu
d'un tableau vide.

**Étape 4.** Teste ta recherche en saisissant comme auteur : `' OR '1'='1`. Avec une requête préparée,
l'injection ne fonctionne pas : décris ce qu'il se serait passé sans protection (**injection SQL**).

### Exercice 6.5 : marquer un livre comme emprunté (UPDATE)

**Étape 1.** Dans le catalogue, ajoute à côté de chaque livre disponible un bouton « Emprunter »
(formulaire `POST` transmettant l'`id` du livre).

**Étape 2.** À la réception de l'`id`, exécute une requête `UPDATE` qui passe le champ `disponible`
à `0` pour ce livre (utilise une requête préparée).

**Étape 3.** Ajoute symétriquement un bouton « Rendre » pour les livres indisponibles, qui repasse
`disponible` à `1`.

### Exercice 6.6 : statistiques de la bibliothèque

**Étape 1.** Affiche le **nombre total** de livres (`SELECT COUNT(*) FROM livres`).

**Étape 2.** Affiche le nombre de livres **par genre** (`GROUP BY genre`).

**Étape 3.** Affiche l'**année du livre le plus ancien** et celle du plus récent (`MIN` / `MAX`).

### Exercice 6.7 : la fiche d'un livre

> Jusqu'ici tes requêtes renvoyaient **plusieurs** lignes (une boucle). Ici, tu vas en récupérer une
> **seule**.

**Étape 1.** Dans le catalogue (exercice 6.1), transforme le titre de chaque livre en lien vers
`fiche.php` en passant l'`id` du livre en GET (`fiche.php?id=3`).

**Étape 2.** Dans `fiche.php`, récupère l'`id` reçu en GET (avec une **requête préparée**) et lis le
livre correspondant. Comme la requête ne renvoie qu'une ligne, **inutile de boucler** : un seul
`mysqli_fetch_assoc` suffit. Affiche le titre, l'auteur, le genre et l'année.

**Étape 3.** Gère le cas où l'`id` ne correspond à aucun livre (par exemple `fiche.php?id=999`) :
vérifie avec `mysqli_num_rows` et, s'il n'y a pas de résultat, affiche « Livre introuvable. » ou
redirige vers le catalogue.

### Exercice 6.8 : supprimer un livre (DELETE)

**Étape 1.** Dans le catalogue (exercice 6.1), ajoute à côté de chaque livre un bouton « Supprimer »
(un formulaire `POST` transmettant l'`id` du livre).

**Étape 2.** À la réception de l'`id`, exécute une requête `DELETE FROM livres WHERE id = ?` à l'aide
d'une **requête préparée**.

**Étape 3.** Après la suppression, redirige vers le catalogue pour vérifier que le livre a bien
disparu.

### Exercice 6.9 : colorer les lignes selon la disponibilité

> On croise ici la **base de données** et le **CSS conditionnel** (exercice 2.10) : la classe d'une
> ligne du tableau dépend d'une valeur lue dans la base.

**Étape 1.** Dans le `<head>`, crée deux classes : `.dispo { background: #d4f7d4; }` (vert clair) et
`.rupture { background: #f7d4d4; }` (rouge clair).

**Étape 2.** Affiche les livres (`SELECT * FROM livres`) dans un tableau HTML. Pour chaque ligne
`<tr>`, attribue la classe `dispo` si le champ `disponible` vaut 1, sinon la classe `rupture`.
Détermine le nom de la classe dans une variable, puis insère-le dans l'attribut `class="..."`.

**Étape 3.** Dans une colonne supplémentaire, affiche le texte « Disponible » ou « Emprunté » selon le
même critère.

---

## Exercices récapitulatifs

> Ces deux exercices mobilisent **plusieurs séries** en même temps. Prends le temps de relire les
> exercices concernés avant de te lancer.

### Récap A : le mini-blog (séries 1 → 5, sans base de données)

**Cahier des charges.** Réalise un mini-blog où l'utilisateur peut écrire des billets. Les billets
sont conservés le temps de la session.

1. **(Série 4)** Crée un formulaire (`POST`) avec un champ « titre » et une zone de texte
   « contenu », plus un bouton « Publier ».
2. **(Série 5)** À la soumission, ajoute le billet (un tableau associatif `['titre' => ..., 'contenu'
   => ..., 'date' => ...]`) dans `$_SESSION['billets']`.
3. **(Séries 1 & 2)** Horodate chaque billet avec la fonction `date`.
4. **(Série 3)** Affiche tous les billets enregistrés en parcourant le tableau de session avec une
   boucle `foreach` (du plus récent au plus ancien).
5. **(Série 5 — sécurité)** Protège l'affichage du titre et du contenu avec `htmlspecialchars` pour
   éviter toute faille XSS.
6. **(Série 5)** Ajoute un cookie `auteur` retenant le pseudo de l'utilisateur, affiché en signature
   de chaque nouveau billet.
7. **Bonus (JS) :** ajoute un bouton « Mode sombre » qui inverse les couleurs de la page côté
   JavaScript.

### Récap B : le gestionnaire de tâches (séries 1 → 6, avec base de données)

> **Mise en place.** Dans phpMyAdmin, crée une base `taches` puis :
>
> ```sql
> CREATE TABLE taches (
>     id INT AUTO_INCREMENT PRIMARY KEY,
>     intitule VARCHAR(200),
>     priorite VARCHAR(20),
>     faite BOOLEAN DEFAULT 0,
>     creee_le DATE
> );
> ```

**Cahier des charges.** Réalise une « to-do list » complète et persistante.

1. **(Série 6)** Connecte-toi à la base `taches`.
2. **(Séries 4 & 6)** Crée un formulaire (`POST`) permettant d'ajouter une tâche (intitulé + priorité
   choisie dans un `<select>` : basse / moyenne / haute). À la soumission, insère la tâche via une
   **requête préparée**, en renseignant `creee_le` avec `date('Y-m-d')`.
3. **(Séries 3 & 6)** Affiche toutes les tâches dans un tableau HTML, triées par date de création
   (`ORDER BY`).
4. **(Série 6 — UPDATE)** Ajoute pour chaque tâche un bouton « Terminer » qui passe le champ `faite`
   à `1` (requête préparée). Affiche les tâches terminées d'un style différent (barrées, en gris).
5. **(Série 6 — DELETE)** Ajoute un bouton « Supprimer » qui retire la tâche de la base
   (`DELETE FROM ... WHERE id = ?`, requête préparée).
6. **(Série 5)** Avant d'accéder à la page, exige une connexion via une session (réutilise la
   mini-connexion de l'exercice 5.4).
7. **(Série 6 — sécurité)** Vérifie que **toutes** les requêtes utilisant des données utilisateur sont
   préparées, et que tout affichage de données issues de la base passe par `htmlspecialchars`.

---

## Annexe — Corrigés

> Les corrigés ci-dessous proposent **une** solution possible. D'autres approches correctes existent.
> Le code se concentre sur la logique demandée ; pense à l'intégrer dans une structure HTML complète
> lorsque c'est pertinent.

### Corrigés — Série 1

**1.1**
```php
<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body>
    <h1>Bienvenue sur mon site !</h1>
    <p>Cette page a été générée à <?php echo date('H:i'); ?>.</p>
    <p>
        <?php
        if (date('G') < 12) echo 'Bonne matinée !';
        else echo 'Bon après-midi !';
        ?>
    </p>
</body>
</html>
```

**1.2** (extrait PHP + CSS)
```php
<div class="carte">
    <h2>Lucas</h2>
    <p>Développeur web</p>
    <p>lucas@exemple.be</p>
    <p>Profil consulté le <?php echo date('d/m/Y'); ?></p>
</div>
```
```css
body { background-color: teal; }
.carte {
    width: 400px; margin: auto; padding: 20px;
    background: white; border-radius: 10px;
}
.carte h2 { color: teal; text-align: center; }
```

**1.3**
```php
<?php
$phrase = "Le PHP est un langage de programmation côté serveur.";
echo "<p>$phrase</p>";
echo "<p>Cette phrase contient " . strlen($phrase) . " caractères.</p>";
?>
```

**1.4**
```html
<button onclick="toggleHeure()">Afficher / cacher l'heure</button>
<p id="heure">Il est <?php echo date('H:i'); ?></p>
<script>
function toggleHeure() {
    var p = document.getElementById('heure');
    if (p.style.display == 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}
</script>
```

**1.5**
```php
<?php
$nombre = 7;
if ($nombre % 2 == 0) {
    echo "<p>$nombre est un nombre pair.</p>";
} else {
    echo "<p>$nombre est un nombre impair.</p>";
}
?>
```

### Corrigés — Série 2

**2.1**
```php
<?php
$x = 42;
echo "\$x vaut $x et est de type " . gettype($x) . "\n";
echo "var_export : "; var_export($x); echo "\n";
echo "var_dump : "; var_dump($x);
?>
```

**2.2**
```php
<?php
$prenom = 'Donald';
$age = 80;
echo "$prenom a $age ans.";          // guillemets : interpolation
echo $prenom . ' a ' . $age . ' ans.'; // apostrophes : concaténation
// Les guillemets interprètent les variables, pas les apostrophes.
?>
```

**2.3**
```php
<?php
$prixHT = 100;
$tva = $prixHT * 0.21;
$prixTTC = $prixHT + $tva;
echo "Prix HT  : $prixHT €<br>";
echo "TVA (21%): $tva €<br>";
echo "Prix TTC : $prixTTC €";
?>
```

**2.4**
```php
<?php
$n = 7;
for ($i = 1; $i <= 10; $i++) echo "$n x $i = " . ($n * $i) . "<br>";

// Variante while :
$i = 1;
while ($i <= 10) { echo "$n x $i = " . ($n * $i) . "<br>"; $i++; }
?>
```

**2.5**
```php
<?php
$note = 14;
if ($note < 10)        echo 'Échec';
elseif ($note < 12)    echo 'Satisfaction';
elseif ($note < 14)    echo 'Distinction';
elseif ($note < 16)    echo 'Grande distinction';
else                   echo 'La plus grande distinction';
?>
```

**2.6**
```php
<?php
for ($i = 1; $i <= 30; $i++) {
    if ($i % 15 == 0) {
        echo 'FizzBuzz';
    } elseif ($i % 3 == 0) {
        echo 'Fizz';
    } elseif ($i % 5 == 0) {
        echo 'Buzz';
    } else {
        echo $i;
    }
    echo '<br>';
}
?>
```

**2.7** — les deux techniques pour chaque cas :
```php
<?php
// a) $url = 'chat.jpg';  ->  <img src="chat.jpg">
echo '<img src="' . $url . '">';     // apostrophes + concaténation
echo "<img src=\"$url\">";           // guillemets + interpolation (" échappés)
echo "<img src='$url'>";             // variante : ' dans le HTML (pas d'échappement)

// b) $c = 'blue';  ->  <p style="color:blue">Texte</p>
echo '<p style="color:' . $c . '">Texte</p>';
echo "<p style=\"color:$c\">Texte</p>";

// c) $ville = 'Liège';  ->  <input type="text" name="ville" value="Liège">
echo '<input type="text" name="ville" value="' . $ville . '">';
echo "<input type=\"text\" name=\"ville\" value=\"$ville\">";

// d) $href='accueil.php'; $txt='Retour';  ->  <a href="accueil.php">Retour</a>
echo '<a href="' . $href . '">' . $txt . '</a>';
echo "<a href=\"$href\">$txt</a>";
?>
```

**2.8**
```php
<?php
$fruits = ['pomme', 'poire', 'cerise'];

// Étape 2 : menu déroulant
echo '<select name="fruit">';
foreach ($fruits as $fruit) {
    echo '<option value="' . $fruit . '">' . $fruit . '</option>';
}
echo '</select>';

// Étape 3 : cases à cocher
foreach ($fruits as $fruit) {
    echo '<input type="checkbox" name="fruits[]" value="' . $fruit . '"> ' . $fruit . '<br>';
}
?>
```

**2.9**
```php
<?php
$nom = 'Bob';
$url = 'page.php';
$v   = 'rouge';

// 1) FAUX : echo '<input type="text" value=$nom>';
//    -> en apostrophes $nom n'est PAS interprété, et la valeur n'a pas de guillemets
echo '<input type="text" value="' . $nom . '">';        // CORRECT

// 2) FAUX : echo "<a href=$url>clic</a>";
//    -> l'attribut href doit être entouré de guillemets
echo "<a href=\"$url\">clic</a>";                        // CORRECT

// 3) FAUX : echo '<option value="' . $v '">' . $v . '</option>';
//    -> il manque un point de concaténation après $v
echo '<option value="' . $v . '">' . $v . '</option>';  // CORRECT
?>
```

**2.10**
```html
<style>
.positif { color: green; }
.negatif { color: red; }
.gras    { font-weight: bold; }
</style>
```
```php
<?php
$temperatures = [12, -3, 8, -1, 20];
foreach ($temperatures as $t) {
    // Étape 2 : la classe dépend du signe
    if ($t >= 0) {
        $classe = 'positif';
    } else {
        $classe = 'negatif';
    }
    // Étape 3 : on ajoute la classe "gras" si |t| > 10
    if (abs($t) > 10) {
        $classe = $classe . ' gras';
    }
    echo '<p class="' . $classe . '">' . $t . '</p>';
}
?>
```

### Corrigés — Série 3

**3.1**
```php
<?php
$courses = ['pain', 'lait', 'œufs', 'café', 'pommes'];
echo '<ul>';
foreach ($courses as $article) echo "<li>$article</li>";
echo '</ul>';
echo '<p>Tu as ' . count($courses) . ' articles dans ton panier.</p>';
?>
```

**3.2**
```php
<?php
$notes = ['Mathématiques' => 14, 'Français' => 11, 'Informatique' => 18, 'Histoire' => 9];
echo '<table border="1">';
foreach ($notes as $matiere => $note) echo "<tr><td>$matiere</td><td>$note</td></tr>";
echo '</table>';
$moyenne = array_sum($notes) / count($notes);
echo "<p>Moyenne : " . round($moyenne, 2) . "</p>";
?>
```

**3.3**
```php
<?php
$langages = ['PHP', 'Python', 'C', 'JavaScript', 'Ruby', 'Go'];
sort($langages);
echo '<ol>';
foreach ($langages as $l) echo "<li>$l</li>";
echo '</ol>';
echo "<p><b>Premier :</b> {$langages[0]} — <b>Dernier :</b> {$langages[count($langages)-1]}</p>";
?>
```

**3.4**
```php
<?php
$contacts = [
    'Picsou'        => ['tel' => '0470 11 22 33', 'ville' => 'Donaldville'],
    'Donald'        => ['tel' => '0470 44 55 66', 'ville' => 'Donaldville'],
    'Géo Trouvetou' => ['tel' => '0470 77 88 99', 'ville' => 'Donaldville'],
    'Gontran'       => ['tel' => '0470 00 11 22', 'ville' => 'Riville'],
];
foreach ($contacts as $nom => $infos) {
    if ($infos['ville'] == 'Donaldville') {   // étape 3 : filtre
        echo "$nom — {$infos['tel']} ({$infos['ville']})<br>";
    }
}
?>
```

**3.5**
```php
<?php
$panier = ['Café' => 4.50, 'Croissant' => 1.20, 'Jus' => 2.80];
$total = 0;
echo '<table border="1">';
foreach ($panier as $produit => $prix) {
    echo "<tr><td>$produit</td><td>$prix €</td></tr>";
    $total += $prix;
}
echo "<tr><td><b>Total</b></td><td><b>$total €</b></td></tr></table>";
?>
```

**3.6**
```php
<?php
$personnes = [
    ['nom' => 'Alice', 'age' => 22], ['nom' => 'Bob', 'age' => 15],
    ['nom' => 'Chloé', 'age' => 19], ['nom' => 'David', 'age' => 12],
    ['nom' => 'Emma', 'age' => 31],
];
$majeurs = 0; $mineurs = 0;
foreach ($personnes as $p) {
    if ($p['age'] >= 18) { echo "{$p['nom']} ({$p['age']} ans)<br>"; $majeurs++; }
    else $mineurs++;
}
echo "<p>$majeurs majeur(s), $mineurs mineur(s).</p>";
?>
```

**3.7**
```php
<?php
$classe = [
    'Alice' => ['Math' => 15, 'Français' => 12, 'Sciences' => 18],
    'Bob'   => ['Math' => 9,  'Français' => 14, 'Sciences' => 11],
    'Chloé' => ['Math' => 17, 'Français' => 16, 'Sciences' => 13],
];

// Étape 2 : liste de listes (deux foreach imbriqués)
foreach ($classe as $eleve => $notes) {
    echo "<p><b>$eleve</b></p>";
    echo '<ul>';
    foreach ($notes as $matiere => $note) {
        echo "<li>$matiere : $note</li>";
    }
    echo '</ul>';
}

// Étape 3 : présentation en tableau HTML
echo '<table border="1">';
echo '<tr><th>Élève</th><th>Math</th><th>Français</th><th>Sciences</th></tr>';
foreach ($classe as $eleve => $notes) {
    echo "<tr><td>$eleve</td>";
    foreach ($notes as $note) {
        echo "<td>$note</td>";
    }
    echo '</tr>';
}
echo '</table>';
?>
```

### Corrigés — Série 4

**4.1**
```php
<form method="GET">
    <input type="text" name="q">
    <button type="submit">Rechercher</button>
</form>
<?php
if (isset($_GET['q']) && $_GET['q'] !== '')
    echo 'Tu as recherché : ' . htmlspecialchars($_GET['q']);
else
    echo 'Aucune recherche effectuée.';
?>
```

**4.2**
```php
<form method="POST">
    <input type="number" name="a"> <input type="number" name="b">
    <select name="op"><option>+</option><option>-</option><option>*</option><option>/</option></select>
    <button>Calculer</button>
</form>
<?php
if (isset($_POST['a']) && isset($_POST['b'])) {
    $a = (float)$_POST['a'];
    $b = (float)$_POST['b'];
    if ($_POST['op'] == '+') {
        echo $a + $b;
    } elseif ($_POST['op'] == '-') {
        echo $a - $b;
    } elseif ($_POST['op'] == '*') {
        echo $a * $b;
    } elseif ($_POST['op'] == '/') {
        if ($b == 0) {
            echo 'Division par zéro !';
        } else {
            echo $a / $b;
        }
    }
}
?>
```

**4.3** (extrait)
```php
<form method="POST">
    <label for="nom">Nom :</label><input id="nom" name="nom"><br>
    <label for="mail">E-mail :</label><input id="mail" name="mail" type="email"><br>
    <label for="mdp">Mot de passe :</label><input id="mdp" name="mdp" type="password"><br>
    <label><input type="checkbox" name="cgu"> J'accepte les conditions</label><br>
    <button>S'inscrire</button>
</form>
<?php
// Le traitement (validation + redirection) doit être placé AVANT tout HTML.
if (isset($_POST['nom'])) {
    $erreurs = [];
    if (empty($_POST['nom']))      $erreurs[] = 'Le nom est obligatoire.';
    if (empty($_POST['mail']))     $erreurs[] = "L'adresse e-mail est obligatoire.";
    if (!isset($_POST['cgu']))     $erreurs[] = 'Tu dois accepter les conditions.';

    if (empty($erreurs)) {
        header('Location: merci.php'); exit;   // étape 4 : tout est valide
    }
    foreach ($erreurs as $e) echo "<p style='color:red'>$e</p>";  // un message par cas
}
?>
```

**4.4** (principe)
```php
<form method="POST">
    <p>Quel langage s'exécute côté serveur ?</p>
    <label><input type="radio" name="q1" value="PHP"> PHP</label>
    <label><input type="radio" name="q1" value="JS"> JavaScript</label>
    <label><input type="radio" name="q1" value="CSS"> CSS</label>
    <button>Valider</button>
</form>
<?php
if (isset($_POST['q1'])) {
    if ($_POST['q1'] == 'PHP') {
        echo 'Bravo !';
    } else {
        echo 'Mauvaise réponse, la bonne était : PHP.';
    }
}
?>
```

**4.5**
```php
<form method="GET"><input name="c" type="text"><button>Convertir</button></form>
<?php
if (isset($_GET['c'])) {
    if (is_numeric($_GET['c'])) {
        $f = $_GET['c'] * 9 / 5 + 32;
        echo "$_GET[c] °C = $f °F";
    } else {
        echo 'Valeur invalide.';
    }
}
?>
```

**4.6** (principe) — pré-remplissage sécurisé :
```php
<?php
$nom = '';
if (isset($_POST['nom'])) {
    $nom = $_POST['nom'];
}
?>
<input name="nom" value="<?php echo htmlspecialchars($nom); ?>">
```

**4.7** (`menu.php`)
```php
<?php
$plats = ['Pizza', 'Burger', 'Tacos'];
echo '<ul>';
foreach ($plats as $plat) {
    echo '<li><a href="commande.php?plat=' . urlencode($plat) . '">';
    echo htmlspecialchars($plat) . '</a></li>';
}
echo '</ul>';
?>
```
(`commande.php`)
```php
<?php
if (!isset($_GET['plat'])) { header('Location: menu.php'); exit; } // étape 2
$plat = $_GET['plat'];

if (isset($_POST['quantite'])) {                                   // étape 4
    echo "Commande confirmée : " . (int)$_POST['quantite'] .
         " × " . htmlspecialchars($plat);
} else {                                                           // étape 3
    echo "<p>Tu commandes : " . htmlspecialchars($plat) . "</p>";
    // l'action garde le plat en GET et envoie la quantité en POST
    echo '<form method="POST" action="commande.php?plat=' . urlencode($plat) . '">';
    echo '<input type="number" name="quantite"><button>Commander</button></form>';
}
?>
```

**4.8** — erreur repérée puis correction :

1. Il manque `method="POST"` sur le `<form>` → sans lui les données partent en GET.
   `<form action="reservation.php" method="POST">`
2. L'input n'a pas d'attribut `name` → il n'est pas envoyé (`$_POST["ville"]` n'existera jamais).
   `<input type="text" name="ville" id="ville">`
3. Les `<option>` n'ont pas de `value` → c'est le texte (avec accents/espaces) qui est envoyé.
   `<option value="medecine">Médecine générale</option>` etc.
4. `type="button"` ne soumet pas le formulaire → utiliser `type="submit"`.
   `<input type="submit" value="Envoyer">`
5. `$_POST` utilisé sans `isset` → « Undefined array key » au premier chargement.
   ```php
   if (isset($_POST["nom"])) {
       $nom = $_POST["nom"];
       echo "Bonjour $nom";
   }
   ```
6. La clé de `$_GET` est sans guillemets → erreur. Il faut `$ville = $_GET["ville"];`.
7. `||` rend la condition vraie si **une seule** donnée existe → utiliser `&&`.
   `if (isset($_POST["nom"]) && isset($_POST["service"])) {`
8. Il manque le `&` entre les deux paramètres de l'URL.
   `header("Location: quiz.php?q1=" . $q1 . "&q2=" . $q2);`

**4.9**
```php
<form method="POST">
    <label><input type="checkbox" name="supplements[]" value="fromage"> Fromage</label>
    <label><input type="checkbox" name="supplements[]" value="champignons"> Champignons</label>
    <label><input type="checkbox" name="supplements[]" value="olives"> Olives</label>
    <label><input type="checkbox" name="supplements[]" value="piment"> Piment</label>
    <button>Commander</button>
</form>
<?php
if (isset($_POST['supplements'])) {
    echo '<p>Tu as choisi ' . count($_POST['supplements']) . ' supplément(s) :</p>';
    echo '<ul>';
    foreach ($_POST['supplements'] as $supplement) {
        echo '<li>' . htmlspecialchars($supplement) . '</li>';
    }
    echo '</ul>';
} else {
    echo '<p>Aucun supplément.</p>';
}
?>
```

### Corrigés — Série 5

**5.1**
```php
<?php
if (isset($_POST['prenom'])) {
    setcookie('prenom', $_POST['prenom'], time() + 7*24*3600);
}
echo '<!doctype html><html><body>';
if (isset($_COOKIE['prenom'])) {
    echo '<p>Content de te revoir, ' . htmlspecialchars($_COOKIE['prenom']) . ' !</p>';
} else {
    echo '<form method="POST"><input name="prenom"><button>Valider</button></form>';
}
echo '</body></html>';
?>
```

**5.2**
```php
<?php
if (isset($_POST['theme'])) {
    setcookie('theme', $_POST['theme'], time() + 3600*24*30);
}

$theme = 'clair';
if (isset($_POST['theme'])) {
    $theme = $_POST['theme'];
} elseif (isset($_COOKIE['theme'])) {
    $theme = $_COOKIE['theme'];
}

$bg = 'white';
$fg = 'black';
if ($theme == 'sombre') {
    $bg = 'black';
    $fg = 'white';
}

echo '<body style="background:' . $bg . ';color:' . $fg . '">';
echo '<form method="POST">';
echo '<button name="theme" value="clair">Thème clair</button>';
echo '<button name="theme" value="sombre">Thème sombre</button>';
echo '</form></body>';
?>
```

**5.3**
```php
<?php
if (isset($_POST['reset'])) {
    setcookie('visites', '', time() - 3600);
    $n = 0;
} else {
    $n = 1;
    if (isset($_COOKIE['visites'])) {
        $n = $_COOKIE['visites'] + 1;
    }
    setcookie('visites', $n, time() + 3600*24*365);
}
echo "<p>Tu as visité cette page $n fois.</p>";
?>
<form method="POST"><button name="reset" value="1">Réinitialiser</button></form>
```

**5.4** (`login.php`)
```php
<?php
session_start();
if (isset($_POST['user'])) {
    if ($_POST['user'] == 'admin' && $_POST['pass'] == '1234') {
        $_SESSION['connecte'] = true;
        header('Location: accueil.php');
        exit;
    } else {
        $erreur = 'Identifiants incorrects.';
    }
}
?>
<form method="POST"><input name="user"><input name="pass" type="password"><button>Connexion</button></form>
<?php
if (isset($erreur)) {
    echo $erreur;
}
?>
```
(`accueil.php`)
```php
<?php
session_start();
if (empty($_SESSION['connecte'])) { header('Location: login.php'); exit; }
echo '<h1>Espace membre</h1><a href="logout.php">Déconnexion</a>';
// logout.php : session_start(); session_destroy(); header('Location: login.php');
?>
```

**5.5**
```php
<?php
session_start();
if (!isset($_SESSION['panier'])) $_SESSION['panier'] = [];
if (isset($_POST['ajout'])) $_SESSION['panier'][] = $_POST['ajout'];
if (isset($_POST['vider'])) $_SESSION['panier'] = [];
?>
<form method="POST">
    <button name="ajout" value="Café">Ajouter Café</button>
    <button name="ajout" value="Thé">Ajouter Thé</button>
    <button name="ajout" value="Eau">Ajouter Eau</button>
    <button name="vider" value="1">Vider</button>
</form>
<p>Panier (<?php echo count($_SESSION['panier']); ?>) :
<?php echo implode(', ', $_SESSION['panier']); ?></p>
```

**5.6**
```php
<?php
// Étape 2 : affichage NON sécurisé -> le <script> s'exécute = faille XSS.
// Étape 3 : correction :
if (isset($_POST['com']))
    echo '<p>' . htmlspecialchars($_POST['com']) . '</p>';
?>
<form method="POST"><textarea name="com"></textarea><button>Envoyer</button></form>
```
> Une faille **XSS** (Cross-Site Scripting) permet à un visiteur d'injecter du code JavaScript qui
> sera exécuté dans le navigateur des autres utilisateurs. `htmlspecialchars` neutralise les
> caractères `<`, `>`, `&`, `"` et désamorce l'attaque.

**5.7** (`profil.php`)
```php
<?php
session_start();

if (isset($_POST['deconnexion'])) {           // étape 4 : déconnexion complète
    session_destroy();
    setcookie('derniere_visite', '', time() - 3600);
    header('Location: profil.php'); exit;
}
if (isset($_POST['pseudo'])) {                 // étapes 2 & 3 : stocker / mettre à jour
    $_SESSION['pseudo'] = $_POST['pseudo'];
    $_SESSION['email']  = $_POST['email'];
    $_SESSION['ville']  = $_POST['ville'];
}

$pseudo = '';
$email  = '';
$ville  = '';
if (isset($_SESSION['pseudo'])) {
    $pseudo = $_SESSION['pseudo'];
    $email  = $_SESSION['email'];
    $ville  = $_SESSION['ville'];
}

if (isset($_SESSION['pseudo'])) {
    echo '<p>Tu es identifié en tant que ' . htmlspecialchars($pseudo) . '.';
    echo ' Tu peux modifier tes informations ci-dessous.</p>';
}

echo '<form method="POST">';
echo '<input name="pseudo" value="' . htmlspecialchars($pseudo) . '">';
echo '<input name="email" value="' . htmlspecialchars($email) . '">';
echo '<input name="ville" value="' . htmlspecialchars($ville) . '">';
echo '<button>Enregistrer</button>';
echo '<button name="deconnexion" value="1">Déconnexion</button>';
echo '</form>';
?>
```

### Corrigés — Série 6

**6.1**
```php
<?php
$conn = mysqli_connect('localhost', 'root', '', 'biblio');
if (!$conn) die('Erreur : ' . mysqli_connect_error());
$res = mysqli_query($conn, 'SELECT * FROM livres');
echo '<table border="1"><tr><th>Titre</th><th>Auteur</th><th>Genre</th><th>Année</th><th>Dispo</th></tr>';
while ($l = mysqli_fetch_assoc($res)) {
    if ($l['disponible']) {
        $dispo = 'Oui';
    } else {
        $dispo = 'Non';
    }
    echo "<tr><td>{$l['titre']}</td><td>{$l['auteur']}</td><td>{$l['genre']}</td><td>{$l['annee']}</td><td>$dispo</td></tr>";
}
echo '</table>';
?>
```

**6.2**
```php
<?php
// Liste déroulante alimentée par la base (sans doublons)
$genres = mysqli_query($conn, 'SELECT DISTINCT genre FROM livres');
echo '<form method="POST"><select name="genre"><option value="">Tous les genres</option>';
while ($g = mysqli_fetch_assoc($genres)) echo "<option>{$g['genre']}</option>";
echo '</select>';
echo '<label><input type="checkbox" name="dispo"> Uniquement disponibles</label>';
echo '<button>Filtrer</button></form>';

// Construction de la clause WHERE selon les filtres reçus
$sql = 'SELECT * FROM livres';
$conditions = [];
if (!empty($_POST['genre'])) $conditions[] = "genre = '" . mysqli_real_escape_string($conn, $_POST['genre']) . "'";
if (isset($_POST['dispo']))  $conditions[] = 'disponible = 1';
if ($conditions) $sql .= ' WHERE ' . implode(' AND ', $conditions);
$sql .= ' ORDER BY annee ASC';

$res = mysqli_query($conn, $sql);
while ($l = mysqli_fetch_assoc($res)) echo "{$l['titre']} ({$l['annee']})<br>";
?>
```

**6.3**
```php
<form method="POST">
    <input name="titre"><input name="auteur"><input name="genre"><input name="annee" type="number">
    <button>Ajouter</button>
</form>
<?php
if (isset($_POST['titre'])) {
    $stmt = mysqli_prepare($conn, 'INSERT INTO livres (titre, auteur, genre, annee, disponible) VALUES (?, ?, ?, ?, 1)');
    mysqli_stmt_bind_param($stmt, 'sssi', $_POST['titre'], $_POST['auteur'], $_POST['genre'], $_POST['annee']);
    mysqli_stmt_execute($stmt);
    header('Location: catalogue.php'); exit;
}
?>
```

**6.4**
```php
<form method="GET"><input name="auteur"><button>Rechercher</button></form>
<?php
if (isset($_GET['auteur'])) {
    $stmt = mysqli_prepare($conn, 'SELECT * FROM livres WHERE auteur = ?');
    mysqli_stmt_bind_param($stmt, 's', $_GET['auteur']);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    if (mysqli_num_rows($res) == 0) {                 // étape 3 : aucun résultat
        echo 'Aucun livre trouvé pour cet auteur.';
    } else {
        while ($l = mysqli_fetch_assoc($res)) {
            echo "{$l['titre']}<br>";
        }
    }
}
?>
```
> On n'insère jamais directement une valeur reçue dans la chaîne SQL : un utilisateur malveillant
> pourrait saisir `' OR '1'='1` pour modifier le sens de la requête (**injection SQL**) et accéder à
> toutes les données. La requête préparée sépare le code SQL des données, ce qui neutralise l'attaque.

**6.5**
```php
<?php
if (isset($_POST['emprunter'])) {
    $stmt = mysqli_prepare($conn, 'UPDATE livres SET disponible = 0 WHERE id = ?');
    mysqli_stmt_bind_param($stmt, 'i', $_POST['emprunter']);
    mysqli_stmt_execute($stmt);
}
if (isset($_POST['rendre'])) {
    $stmt = mysqli_prepare($conn, 'UPDATE livres SET disponible = 1 WHERE id = ?');
    mysqli_stmt_bind_param($stmt, 'i', $_POST['rendre']);
    mysqli_stmt_execute($stmt);
}
// Dans la boucle d'affichage :
// si $l['disponible'] vaut 1 : afficher un bouton name="emprunter" value="{$l['id']}"
// sinon : afficher un bouton name="rendre" value="{$l['id']}"
?>
```

**6.6**
```php
<?php
$total = mysqli_fetch_assoc(mysqli_query($conn, 'SELECT COUNT(*) AS n FROM livres'));
echo "Total : {$total['n']} livres<br>";

$res = mysqli_query($conn, 'SELECT genre, COUNT(*) AS n FROM livres GROUP BY genre');
while ($g = mysqli_fetch_assoc($res)) echo "{$g['genre']} : {$g['n']}<br>";

$bornes = mysqli_fetch_assoc(mysqli_query($conn, 'SELECT MIN(annee) AS min, MAX(annee) AS max FROM livres'));
echo "Du plus ancien ({$bornes['min']}) au plus récent ({$bornes['max']}).";
?>
```

**6.7** (`fiche.php`) — récupération d'un **seul** résultat :
```php
<?php
// dans catalogue.php : <a href="fiche.php?id=<?php echo $l['id']; ?>"><?php echo $l['titre']; ?></a>
if (!isset($_GET['id'])) { header('Location: catalogue.php'); exit; }

$stmt = mysqli_prepare($conn, 'SELECT * FROM livres WHERE id = ?');
mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($res) == 0) {
    echo 'Livre introuvable.';
} else {
    $livre = mysqli_fetch_assoc($res);   // une seule ligne : pas de boucle
    echo "<h1>" . htmlspecialchars($livre['titre']) . "</h1>";
    echo "<p>{$livre['auteur']} — {$livre['genre']} ({$livre['annee']})</p>";
}
?>
```

**6.8**
```php
<?php
// Dans catalogue.php, à côté de chaque livre :
// <form method="POST"><button name="suppr" value="{$l['id']}">Supprimer</button></form>

if (isset($_POST['suppr'])) {
    $stmt = mysqli_prepare($conn, 'DELETE FROM livres WHERE id = ?');
    mysqli_stmt_bind_param($stmt, 'i', $_POST['suppr']);
    mysqli_stmt_execute($stmt);
    header('Location: catalogue.php');
    exit;
}
?>
```

**6.9**
```html
<style>
.dispo   { background: #d4f7d4; }
.rupture { background: #f7d4d4; }
</style>
```
```php
<?php
$res = mysqli_query($conn, 'SELECT * FROM livres');
echo '<table border="1">';
while ($l = mysqli_fetch_assoc($res)) {
    // la classe ET le texte dépendent de la disponibilité
    if ($l['disponible']) {
        $classe = 'dispo';
        $etat = 'Disponible';
    } else {
        $classe = 'rupture';
        $etat = 'Emprunté';
    }
    echo '<tr class="' . $classe . '">';
    echo '<td>' . htmlspecialchars($l['titre']) . '</td>';
    echo '<td>' . $etat . '</td>';
    echo '</tr>';
}
echo '</table>';
?>
```

### Corrigés — Exercices récapitulatifs

**Récap A — mini-blog (principe)**
```php
<?php
session_start();
if (!isset($_SESSION['billets'])) $_SESSION['billets'] = [];
if (isset($_POST['titre'])) {
    if (isset($_POST['auteur'])) {
        setcookie('auteur', $_POST['auteur'], time() + 3600*24*30);
    }

    $auteur = 'Anonyme';
    if (isset($_COOKIE['auteur'])) {
        $auteur = $_COOKIE['auteur'];
    }
    if (isset($_POST['auteur'])) {
        $auteur = $_POST['auteur'];
    }

    $_SESSION['billets'][] = [
        'titre'   => $_POST['titre'],
        'contenu' => $_POST['contenu'],
        'auteur'  => $auteur,
        'date'    => date('d/m/Y H:i'),
    ];
}

$auteurCookie = '';
if (isset($_COOKIE['auteur'])) {
    $auteurCookie = $_COOKIE['auteur'];
}
?>
<form method="POST">
    <input name="titre" placeholder="Titre">
    <input name="auteur" value="<?php echo htmlspecialchars($auteurCookie); ?>">
    <textarea name="contenu"></textarea>
    <button>Publier</button>
</form>
<?php
// Affichage du plus récent au plus ancien
foreach (array_reverse($_SESSION['billets']) as $b) {
    echo '<article><h3>' . htmlspecialchars($b['titre']) . '</h3>';
    echo '<p>' . htmlspecialchars($b['contenu']) . '</p>';
    echo '<small>' . htmlspecialchars($b['auteur']) . ' — ' . $b['date'] . '</small></article>';
}
?>
```
> Points de vigilance : `htmlspecialchars` partout où on ré-affiche une saisie (anti-XSS),
> `session_start()` tout en haut, `setcookie` avant tout HTML.

**Récap B — gestionnaire de tâches (principe)**

```php
<?php
session_start();
if (empty($_SESSION['connecte'])) { header('Location: login.php'); exit; } // série 5
$conn = mysqli_connect('localhost', 'root', '', 'taches');

// Ajout (série 4 + 6, requête préparée)
if (isset($_POST['intitule'])) {
    $stmt = mysqli_prepare($conn, 'INSERT INTO taches (intitule, priorite, faite, creee_le) VALUES (?, ?, 0, ?)');
    $aujourdhui = date('Y-m-d');
    mysqli_stmt_bind_param($stmt, 'sss', $_POST['intitule'], $_POST['priorite'], $aujourdhui);
    mysqli_stmt_execute($stmt);
}
// Terminer
if (isset($_POST['finir'])) {
    $stmt = mysqli_prepare($conn, 'UPDATE taches SET faite = 1 WHERE id = ?');
    mysqli_stmt_bind_param($stmt, 'i', $_POST['finir']);
    mysqli_stmt_execute($stmt);
}
// Supprimer
if (isset($_POST['suppr'])) {
    $stmt = mysqli_prepare($conn, 'DELETE FROM taches WHERE id = ?');
    mysqli_stmt_bind_param($stmt, 'i', $_POST['suppr']);
    mysqli_stmt_execute($stmt);
}
?>
<form method="POST">
    <input name="intitule">
    <select name="priorite"><option>basse</option><option>moyenne</option><option>haute</option></select>
    <button>Ajouter</button>
</form>
<table border="1">
<?php
$res = mysqli_query($conn, "SELECT * FROM taches ORDER BY creee_le");
while ($t = mysqli_fetch_assoc($res)) {
    $style = '';
    if ($t['faite']) {
        $style = 'text-decoration:line-through;color:gray';
    }
    echo "<tr style='$style'><td>" . htmlspecialchars($t['intitule']) . "</td><td>{$t['priorite']}</td><td>";
    if (!$t['faite']) {
        echo "<form method='POST'><button name='finir' value='{$t['id']}'>Terminer</button></form>";
    }
    echo "<form method='POST'><button name='suppr' value='{$t['id']}'>Supprimer</button></form></td></tr>";
}
?>
</table>
```
> Tous les paramètres issus de l'utilisateur passent par des **requêtes préparées**, et tout texte
> affiché depuis la base est filtré par `htmlspecialchars`.

---

## Références

Les présents exercices ont été élaborés en s'inspirant de la méthode des séries 1 à 6 de l'UAA12 et
des ressources suivantes :

- Forbes, A. (2013). *The Joy of PHP: A Beginner's Guide to Programming Interactive Web Sites.*
- Vaswani, V. (2021). *PHP: A Beginner's Guide.*
- Documentation officielle PHP : <https://www.php.net/manual/fr/>
- W3Schools — PHP Tutorial : <https://www.w3schools.com/php/>
- Cours de « Développement d'applications WEB » (2018), Hénallux.

*Dev. d'un site WEB dynamique (UAA12) — Dossier de révision (toutes séries)*
