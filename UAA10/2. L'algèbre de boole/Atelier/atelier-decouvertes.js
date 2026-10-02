/* Atelier d'algèbre de Boole : parcours de DÉCOUVERTE (l'élève n'a pas encore vu la théorie).
   Chaque activité : une situation → l'élève remplit / compare des tables → il formule la règle
   → la page lui révèle ensuite le nom officiel (étape « bilan ») et l'ajoute à son formulaire.

   Types d'étapes supplémentaires (en plus de expr, table, simplif, fiche) :
     qcm   : question à choix, avec un retour expliqué pour chaque réponse
     bilan : « Ce que tu viens de découvrir » — verrouillé tant que les étapes précédentes ne sont pas réussies ;
             débloque des entrées du formulaire (champ debloque).
   Champ facultatif d'une étape expr : gauche (ex. "a ∧ 1") — l'élève complète « a ∧ 1 ⇔ … ». */

(function (global) {
  "use strict";
  var A = (typeof module !== "undefined" && module.exports) ? require("./atelier-logique.js") : global.Atelier;

  var ABC = [["a", ""], ["b", ""], ["c", ""]];

  // ---------------------------------------------------------------- petits schémas (SVG en ligne)
  function interrupteur(x, y, nom) {
    return '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#1f2937"/><circle cx="' + (x + 44) + '" cy="' + y + '" r="4" fill="#1f2937"/>' +
      '<line x1="' + x + '" y1="' + y + '" x2="' + (x + 38) + '" y2="' + (y - 18) + '" stroke="#1f2937" stroke-width="3"/>' +
      '<text x="' + (x + 22) + '" y="' + (y - 24) + '" font-size="18" font-weight="700" fill="#4f46e5" text-anchor="middle" font-family="JetBrains Mono, monospace">' + nom + "</text>";
  }
  var LAMPE = function (x, y) {
    return '<circle cx="' + x + '" cy="' + y + '" r="16" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>' +
      '<line x1="' + (x - 10) + '" y1="' + (y - 10) + '" x2="' + (x + 10) + '" y2="' + (y + 10) + '" stroke="#b45309" stroke-width="2"/>' +
      '<line x1="' + (x + 10) + '" y1="' + (y - 10) + '" x2="' + (x - 10) + '" y2="' + (y + 10) + '" stroke="#b45309" stroke-width="2"/>' +
      '<text x="' + (x + 24) + '" y="' + (y + 5) + '" font-size="15" text-anchor="start" fill="#1f2937" font-family="Inter, sans-serif">lampe</text>';
  };
  var PILE = function (x, y) {
    return '<line x1="' + x + '" y1="' + (y - 16) + '" x2="' + x + '" y2="' + (y + 16) + '" stroke="#1f2937" stroke-width="3"/>' +
      '<line x1="' + (x + 10) + '" y1="' + (y - 8) + '" x2="' + (x + 10) + '" y2="' + (y + 8) + '" stroke="#1f2937" stroke-width="6"/>' +
      '<text x="' + (x + 5) + '" y="' + (y + 32) + '" font-size="15" text-anchor="middle" fill="#1f2937" font-family="Inter, sans-serif">pile</text>';
  };
  var SERIE = '<svg viewBox="0 0 440 190" width="100%" style="max-width:440px" role="img" aria-label="Deux interrupteurs a et b en série avec une lampe">' +
    '<path d="M40 60 H100 M144 60 H220 M264 60 H360 V105 M360 141 V150 H40 V60" fill="none" stroke="#1f2937" stroke-width="3"/>' +
    interrupteur(100, 60, "a") + interrupteur(220, 60, "b") + LAMPE(360, 123) + PILE(195, 150) + "</svg>";
  var PARALLELE = '<svg viewBox="0 0 440 215" width="100%" style="max-width:440px" role="img" aria-label="Deux interrupteurs a et b en parallèle avec une lampe">' +
    '<path d="M60 50 H150 M194 50 H280 V110 M60 50 V110 M60 110 H150 M194 110 H280 M280 80 H340 V115 M340 151 V170 H60 V110" fill="none" stroke="#1f2937" stroke-width="3"/>' +
    interrupteur(150, 50, "a") + interrupteur(150, 110, "b") + LAMPE(340, 133) + PILE(190, 170) + "</svg>";

  // ---------------------------------------------------------------- formulaire progressif
  // id → contenu affiché dans « Mon formulaire » une fois débloqué
  var NOTIONS = [
    { id: "valeurs", titre: "Variables booléennes", formules: ["une variable vaut 1 (VRAI) ou 0 (FAUX)", "n variables → 2ⁿ lignes dans la table"] },
    { id: "ET", titre: "ET (conjonction)", formules: ["a ∧ b vaut 1 si a ET b valent 1"] },
    { id: "OU", titre: "OU (disjonction)", formules: ["a ∨ b vaut 1 si a vaut 1, ou b, ou les deux"] },
    { id: "NON", titre: "NON (négation)", formules: ["¬a est le contraire de a"] },
    { id: "Priorité", titre: "Priorité", formules: ["d'abord ¬, puis ∧, puis ∨", "a ∨ b ∧ c ⇔ a ∨ (b ∧ c)"] }
  ].concat(A.PROPRIETES.map(function (p) { return { id: p.nom, titre: p.nom, formules: p.formules }; }));

  function table(titre, consigne, colonnes, indices) { return { type: "table", titre: titre, consigne: consigne, colonnes: colonnes, indices: indices || [] }; }
  function qcm(titre, question, choix) { return { type: "qcm", titre: titre, consigne: question, choix: choix }; }
  function bilan(html, resume, debloque) { return { type: "bilan", titre: "Ce que tu viens de découvrir", html: html, resume: resume, debloque: debloque || [] }; }
  function conj(gauche, cible, contraintes, indices) {
    return { type: "expr", titre: "Complète : " + gauche + " ⇔ …", consigne: "D'après ta table, par quoi peut-on remplacer <b>" + gauche + "</b> ? Écris l'expression la plus simple possible.", gauche: gauche, cible: cible, contraintes: contraintes, indices: indices || [] };
  }
  function formule(f) { return '<div class="formule-bilan">' + f + "</div>"; }

  // ---------------------------------------------------------------- chapitres
  var CHAPITRES = [
    {
      titre: "Le vrai, le faux et les trois opérateurs",
      activites: [
        {
          id: "vraifaux", titre: "Vrai ou faux ?", duree: "10 min",
          intro: "Au XIX<sup>e</sup> siècle, le mathématicien anglais <b>George Boole</b> a eu une idée : faire des calculs non pas avec des nombres, mais avec des phrases qui sont soit <b>vraies</b>, soit <b>fausses</b>. Ce « calcul logique » est aujourd'hui au cœur de tous les ordinateurs… et de tous les programmes que tu écriras !",
          variables: [], sortie: null,
          etapes: [
            qcm("Une phrase vraie ou fausse", "Laquelle de ces phrases peut être « calculée » par Boole, c'est-à-dire qu'elle est <b>soit vraie, soit fausse</b> ?", [
              ["Il pleut.", true, "Oui : à un moment donné, cette phrase est soit vraie, soit fausse. On peut la représenter par une variable, par exemple p, qui vaut 1 (vrai) ou 0 (faux)."],
              ["Quelle heure est-il ?", false, "Non : c'est une question, elle n'est ni vraie ni fausse."],
              ["Ferme la porte !", false, "Non : c'est un ordre, il n'est ni vrai ni faux."],
              ["La température extérieure.", false, "Non : c'est une grandeur qui peut prendre beaucoup de valeurs (12 °C, 25 °C…), pas seulement vrai ou faux. En revanche, « il fait plus de 20 °C » serait vraie ou fausse !"]
            ]),
            qcm("Compter les situations", "Une lampe est commandée par <b>un</b> interrupteur <b>a</b> (ouvert = 0, fermé = 1). Combien de situations différentes y a-t-il pour l'interrupteur ? Et avec <b>deux</b> interrupteurs a et b ?", [
              ["1 situation avec a, 2 avec a et b", false, "Compte bien : a peut être ouvert OU fermé, cela fait déjà 2 situations."],
              ["2 situations avec a, 3 avec a et b", false, "Avec deux interrupteurs : a ouvert et b ouvert, a ouvert et b fermé, a fermé et b ouvert… et a fermé et b fermé !"],
              ["2 situations avec a, 4 avec a et b", true, "Exact : 0 0, 0 1, 1 0 et 1 1. À chaque nouvelle variable, le nombre de situations double : 3 variables donnent 8 situations, 4 variables donnent 16 situations."],
              ["2 situations avec a, 2 avec a et b", false, "Avec deux interrupteurs, il y a plus de combinaisons : a peut être ouvert ou fermé, et pour chacun de ces cas, b aussi."]
            ]),
            bilan("<p>Une <b>variable booléenne</b> ne peut prendre que deux <b>valeurs de vérité</b> : <b>1</b> (VRAI) ou <b>0</b> (FAUX). L'ensemble de ces valeurs se note <b>B = {0, 1}</b>.</p>" +
                  "<p>Une <b>table de vérité</b> liste toutes les combinaisons possibles des variables, et le résultat pour chacune. Avec <b>n</b> variables, elle a <b>2ⁿ lignes</b>. On écrit les combinaisons dans l'ordre où l'on compte en binaire : 00, 01, 10, 11 (souviens-toi du chapitre sur le codage des nombres !).</p>",
                  "Une variable booléenne vaut 1 (vrai) ou 0 (faux). Une table de vérité liste les 2ⁿ combinaisons de n variables, dans l'ordre du comptage binaire.", ["valeurs"])
          ]
        },
        {
          id: "serie", titre: "Deux interrupteurs en série", duree: "10 à 15 min",
          intro: "Voici un circuit électrique : une pile, deux interrupteurs <b>a</b> et <b>b</b> placés l'un <b>après l'autre</b> (on dit « en série ») et une lampe. Le courant doit traverser les deux interrupteurs pour atteindre la lampe." + "<div class='schema'>" + SERIE + "</div>",
          variables: [["a", "l'interrupteur a est fermé"], ["b", "l'interrupteur b est fermé"]],
          sortie: ["l", "la lampe est allumée"],
          etapes: [
            table("Observer le circuit", "Pour chaque position des interrupteurs, indique si la lampe est allumée (1) ou éteinte (0). Clique sur une case pour changer sa valeur.", [["l", "a ∧ b"]],
                  ["Le courant ne passe que par un seul chemin : s'il est coupé à un endroit, la lampe s'éteint.", "Si l'un des deux interrupteurs est ouvert (0), le courant ne passe pas."]),
            qcm("Formuler la règle", "Complète : « la lampe est allumée si et seulement si… »", [
              ["… a est fermé ET b est fermé.", true, "Exactement : il faut que les DEUX conditions soient vraies en même temps."],
              ["… a est fermé OU b est fermé.", false, "Regarde ta table : quand a = 1 et b = 0, la lampe est-elle allumée ?"],
              ["… a et b sont dans la même position.", false, "Regarde la première ligne : a et b sont tous les deux ouverts (même position)… et pourtant la lampe est éteinte."]
            ]),
            bilan("<p>Tu viens de découvrir l'opérateur <b>ET</b> (on dit aussi <i>conjonction</i>).</p>" + "<p>a ET b se note :</p>" + formule("a ∧ b") +
                  "<p><b>a ∧ b</b> est VRAI si et seulement si a est VRAI <b>et</b> b est VRAI. Dans tous les autres cas, il est FAUX.</p>" +
                  "<p>Tu le rencontreras aussi sous d'autres formes : <b>a · b</b> (en électronique), <b>a &amp;&amp; b</b> (en C, JavaScript, PHP), <b>a and b</b> (en Python).</p>",
                  "a ∧ b (ET) vaut 1 si et seulement si a et b valent 1. Table : 0 0 → 0 ; 0 1 → 0 ; 1 0 → 0 ; 1 1 → 1.", ["ET"])
          ]
        },
        {
          id: "parallele", titre: "Deux interrupteurs en parallèle", duree: "10 à 15 min",
          intro: "Cette fois, les deux interrupteurs sont placés <b>côte à côte</b> (on dit « en parallèle ») : le courant a <b>deux chemins</b> possibles pour atteindre la lampe." + "<div class='schema'>" + PARALLELE + "</div>",
          variables: [["a", "l'interrupteur a est fermé"], ["b", "l'interrupteur b est fermé"]],
          sortie: ["l", "la lampe est allumée"],
          etapes: [
            table("Observer le circuit", "Complète la table de vérité de la lampe.", [["l", "a ∨ b"]],
                  ["Il suffit qu'UN chemin soit fermé pour que le courant passe.", "Et quand les deux chemins sont fermés, le courant passe… encore plus facilement !"]),
            qcm("Formuler la règle", "Complète : « la lampe est allumée si et seulement si… »", [
              ["… a est fermé ET b est fermé.", false, "Regarde la ligne a = 1, b = 0 : la lampe est allumée alors que b est ouvert."],
              ["… au moins un des deux interrupteurs est fermé.", true, "Exactement : a fermé, ou b fermé, ou les deux."],
              ["… un seul des deux interrupteurs est fermé.", false, "Regarde la dernière ligne : quand les deux sont fermés, la lampe est-elle éteinte ?"]
            ]),
            qcm("Le « ou » du français", "Au restaurant, « fromage <b>ou</b> dessert » veut dire : l'un ou l'autre, mais <b>pas les deux</b>. Le « ou » de ton circuit fonctionne-t-il de la même manière ?", [
              ["Oui, c'est pareil.", false, "Regarde la dernière ligne de ta table : quand a ET b sont fermés, la lampe s'allume quand même."],
              ["Non : dans le circuit, la lampe s'allume aussi quand les deux interrupteurs sont fermés.", true, "Bien vu ! En logique, le OU est « inclusif » : il est vrai aussi quand les deux conditions sont vraies. Le « ou » du restaurant est un OU « exclusif »."]
            ]),
            bilan("<p>Tu viens de découvrir l'opérateur <b>OU</b> (on dit aussi <i>disjonction</i>).</p>" + "<p>a OU b se note :</p>" + formule("a ∨ b") +
                  "<p><b>a ∨ b</b> est VRAI si a est VRAI, ou si b est VRAI, <b>ou si les deux sont VRAIS</b>. Il n'est FAUX que lorsque a et b sont tous les deux FAUX.</p>" +
                  "<p>Autres notations : <b>a + b</b> (en électronique), <b>a || b</b> (en C, JavaScript, PHP), <b>a or b</b> (en Python).</p>",
                  "a ∨ b (OU) vaut 1 si au moins une des deux variables vaut 1. Table : 0 0 → 0 ; 0 1 → 1 ; 1 0 → 1 ; 1 1 → 1.", ["OU"])
          ]
        },
        {
          id: "frigo", titre: "La lumière du frigo", duree: "5 à 10 min",
          intro: "Quand tu ouvres le frigo, la lumière s'allume. Quand tu refermes la porte, elle s'éteint. Un petit bouton, enfoncé par la porte, commande la lumière.",
          variables: [["p", "la porte est fermée"]],
          sortie: ["l", "la lumière est allumée"],
          etapes: [
            table("Observer", "Complète la table de vérité de la lumière.", [["l", "¬p"]], ["Quand la porte est fermée (p = 1), voit-on la lumière ?"]),
            qcm("Formuler la règle", "Que remarques-tu ?", [
              ["La lumière a toujours la même valeur que p.", false, "Regarde ta table : quand p = 1, que vaut l ?"],
              ["La lumière vaut toujours le contraire de p.", true, "Oui : quand p vaut 1, l vaut 0 et inversement."],
              ["La lumière est toujours allumée.", false, "Ce serait une très mauvaise nouvelle pour la facture d'électricité !"]
            ]),
            bilan("<p>Tu viens de découvrir l'opérateur <b>NON</b> (on dit aussi <i>négation</i>, <i>complémentaire</i> ou <i>contraire</i>).</p>" + "<p>NON a se note :</p>" + formule("¬a") +
                  "<p><b>¬a</b> est VRAI si et seulement si a est FAUX : il <b>inverse</b> la valeur de la variable.</p>" +
                  "<p>Autres notations : <b>ā</b> (une barre au-dessus), <b>!a</b> (en C, JavaScript), <b>not a</b> (en Python).</p>",
                  "¬a (NON) est le contraire de a : 0 → 1 ; 1 → 0.", ["NON"])
          ]
        },
        {
          id: "traduire", titre: "Traduire des phrases", duree: "15 à 20 min",
          intro: "Tu connais maintenant les trois opérateurs <b>∧</b>, <b>∨</b> et <b>¬</b>. On dispose de 4 interrupteurs <b>a</b>, <b>b</b>, <b>c</b>, <b>d</b> et d'une ampoule. Traduis chaque phrase en expression booléenne. Utilise les boutons de symboles sous la case, ou les touches <b>&amp;</b> (∧), <b>|</b> (∨) et <b>!</b> (¬).",
          variables: [["a", "l'interrupteur a est allumé"], ["b", "l'interrupteur b est allumé"], ["c", "l'interrupteur c est allumé"], ["d", "l'interrupteur d est allumé"]],
          sortie: ["l", "l'ampoule est allumée"],
          etapes: [
            { type: "expr", titre: "Phrase 1", consigne: "L'ampoule s'allume quand <b>a et b</b> sont allumés.", cible: "a ∧ b", indices: ["« et » se traduit par ∧."] },
            { type: "expr", titre: "Phrase 2", consigne: "L'ampoule s'allume quand <b>a est allumé ou b est éteint</b>.", cible: "a ∨ ¬b", indices: ["« b est éteint » signifie « b n'est pas allumé » : ¬b."] },
            { type: "expr", titre: "Phrase 3", consigne: "L'ampoule s'allume quand <b>un des quatre</b> interrupteurs est allumé (un seul, plusieurs, ou tous).", cible: "a ∨ b ∨ c ∨ d", indices: ["« un des quatre, ou plusieurs » : c'est le OU inclusif, utilisé trois fois."] },
            { type: "expr", titre: "Phrase 4", consigne: "L'ampoule s'allume quand <b>a et b sont éteints</b> tous les deux.", cible: "¬a ∧ ¬b", indices: ["« a est éteint » s'écrit ¬a.", "Il faut que a soit éteint ET que b soit éteint."] },
            { type: "expr", titre: "Phrase 5", consigne: "L'ampoule s'allume quand <b>tous les interrupteurs</b> sont allumés.", cible: "a ∧ b ∧ c ∧ d", indices: ["Il faut a ET b ET c ET d."] }
          ]
        }
      ]
    },
    {
      titre: "Combiner les opérateurs : la priorité",
      activites: [
        {
          id: "priorite", titre: "Une phrase, deux sens", duree: "20 à 25 min",
          intro: "Le mode d'emploi d'une lampe dit : « la lampe s'allume si <b>a ou b est allumé et c est allumé</b> ». Cette phrase peut se comprendre de deux façons :<br>① « (a ou b) est allumé, <b>et</b> c est allumé » ;<br>② « a est allumé, <b>ou bien</b> (b et c sont allumés) ».<br>Ces deux façons de lire donnent-elles le même résultat ? Pour le savoir, tu vas <b>décomposer</b> chaque expression en colonnes intermédiaires.",
          variables: [["a", "a est allumé"], ["b", "b est allumé"], ["c", "c est allumé"]],
          sortie: ["l", "la lampe s'allume"],
          etapes: [
            table("Première lecture", "Calcule d'abord la colonne a ∨ b, puis utilise-la pour calculer (a ∨ b) ∧ c.", [["a ∨ b", "a ∨ b"], ["① (a ∨ b) ∧ c", "(a ∨ b) ∧ c"]],
                  ["La deuxième colonne vaut 1 seulement si la colonne a ∨ b vaut 1 ET c vaut 1."]),
            table("Deuxième lecture", "Calcule d'abord la colonne b ∧ c, puis a ∨ (b ∧ c).", [["b ∧ c", "b ∧ c"], ["② a ∨ (b ∧ c)", "a ∨ (b ∧ c)"]],
                  ["La deuxième colonne vaut 1 si a vaut 1 OU si la colonne b ∧ c vaut 1."]),
            qcm("Comparer", "Compare les colonnes ① et ②. Que constates-tu ?", [
              ["Elles sont identiques : les parenthèses ne changent rien.", false, "Regarde par exemple la ligne a = 1, b = 0, c = 0."],
              ["Elles sont différentes : la place des parenthèses change le résultat.", true, "Exact : par exemple pour a = 1, b = 0, c = 0, la lecture ① donne 0 et la lecture ② donne 1."]
            ]),
            qcm("Et sans parenthèses ?", "En mathématiques, 2 + 3 × 4 = 14 : on calcule la multiplication <b>avant</b> l'addition. En logique, <b>∧ joue le rôle de la multiplication</b> et <b>∨ celui de l'addition</b> (essaie : 1 × 0 = 0 comme 1 ∧ 0 = 0). Alors, comment faut-il lire <b>a ∨ b ∧ c</b> ?", [
              ["Comme ① : (a ∨ b) ∧ c", false, "Si ∧ est la « multiplication », il passe avant ∨, comme × passe avant +."],
              ["Comme ② : a ∨ (b ∧ c)", true, "Oui : ∧ est prioritaire sur ∨, comme × est prioritaire sur +."]
            ]),
            bilan("<p>Comme en mathématiques, les opérateurs ont une <b>priorité</b> :</p>" + formule("¬  puis  ∧  puis  ∨") +
                  "<p>Ainsi, <b>a ∨ b ∧ c ⇔ a ∨ (b ∧ c)</b>. Pour imposer un autre ordre, on utilise des <b>parenthèses</b> : (a ∨ b) ∧ c.</p>" +
                  "<p>Pour calculer la table d'une expression compliquée, on la <b>décompose</b> en colonnes intermédiaires, comme tu viens de le faire. Le symbole <b>⇔</b> signifie « est équivalent à » : les deux expressions ont la même table de vérité.</p>",
                  "Priorité : d'abord ¬, puis ∧, puis ∨ (a ∨ b ∧ c ⇔ a ∨ (b ∧ c)). Les parenthèses changent l'ordre. ⇔ signifie « a la même table de vérité ».", ["Priorité"]),
            { type: "expr", titre: "À toi !", consigne: "Écris <b>sans aucune parenthèse</b> l'expression de : « la lampe s'allume si a et b sont allumés, ou si c est allumé ».", cible: "a ∧ b ∨ c", contraintes: { parenthesesMax: 0 },
              indices: ["Grâce à la priorité, a ∧ b est calculé en premier : pas besoin de parenthèses."] }
          ]
        },
        {
          id: "decomposer", titre: "Décomposer une expression", duree: "15 à 20 min",
          intro: "Entraîne-toi à calculer des tables de vérité en décomposant les expressions, colonne par colonne, en respectant la priorité.",
          variables: ABC, sortie: null,
          etapes: [
            table("Expression 1", "Calcule la table de <b>¬a ∧ b ∨ c</b>. D'après la priorité, on calcule d'abord ¬a, puis ¬a ∧ b, enfin le ∨.", [["¬a", "¬a"], ["¬a ∧ b", "¬a ∧ b"], ["¬a ∧ b ∨ c", "¬a ∧ b ∨ c"]],
                  ["La colonne ¬a est l'inverse de la colonne a.", "La dernière colonne vaut 1 si la colonne ¬a ∧ b vaut 1, ou si c vaut 1."]),
            table("Expression 2", "Calcule la table de <b>a ∧ (b ∨ ¬c)</b>. Ici, les parenthèses passent en premier.", [["¬c", "¬c"], ["b ∨ ¬c", "b ∨ ¬c"], ["a ∧ (b ∨ ¬c)", "a ∧ (b ∨ ¬c)"]],
                  ["Calcule d'abord ¬c, puis b ∨ ¬c, et enfin le ∧ avec a."])
          ]
        }
      ]
    },
    {
      titre: "Les propriétés : découvrir les règles de calcul",
      activites: [
        {
          id: "commut", titre: "L'ordre a-t-il de l'importance ?", duree: "10 min",
          intro: "En mathématiques, 3 + 5 = 5 + 3 et 3 × 5 = 5 × 3 : l'ordre ne compte pas. Est-ce aussi le cas en logique ? Pour le savoir, compare les tables de vérité.",
          variables: [["a", ""], ["b", ""]], sortie: null,
          etapes: [
            table("Comparer", "Complète les quatre colonnes.", [["a ∧ b", "a ∧ b"], ["b ∧ a", "b ∧ a"], ["a ∨ b", "a ∨ b"], ["b ∨ a", "b ∨ a"]]),
            qcm("Conclure", "Que constates-tu ?", [
              ["a ∧ b et b ∧ a ont la même table ; a ∨ b et b ∨ a aussi.", true, "Exact : on peut échanger les deux variables autour de ∧ ou de ∨ sans rien changer."],
              ["Seules a ∧ b et b ∧ a ont la même table.", false, "Compare aussi les deux dernières colonnes."],
              ["Aucune des colonnes n'est identique.", false, "Compare les colonnes deux par deux : a ∧ b avec b ∧ a, puis a ∨ b avec b ∨ a."]
            ]),
            bilan("<p>C'est la <b>commutativité</b> : on peut échanger l'ordre des variables.</p>" + formule("a ∧ b ⇔ b ∧ a") + formule("a ∨ b ⇔ b ∨ a"),
                  "Commutativité : a ∧ b ⇔ b ∧ a ; a ∨ b ⇔ b ∨ a.", ["Commutativité"])
          ]
        },
        {
          id: "assoc", titre: "Et avec trois variables ?", duree: "15 min",
          intro: "En mathématiques, (2 + 3) + 4 = 2 + (3 + 4) : on peut regrouper les termes comme on veut. Vérifions si c'est aussi le cas en logique.",
          variables: ABC, sortie: null,
          etapes: [
            table("Avec ∧", "Complète les deux colonnes (calcule de tête l'intérieur des parenthèses).", [["a ∧ (b ∧ c)", "a ∧ (b ∧ c)"], ["(a ∧ b) ∧ c", "(a ∧ b) ∧ c"]],
                  ["Ces deux expressions valent 1 seulement si… les trois variables valent 1 !"]),
            table("Avec ∨", "Complète les deux colonnes.", [["a ∨ (b ∨ c)", "a ∨ (b ∨ c)"], ["(a ∨ b) ∨ c", "(a ∨ b) ∨ c"]],
                  ["Ces deux expressions valent 0 seulement si les trois variables valent 0."]),
            qcm("Conclure", "Que peux-tu en déduire ?", [
              ["La place des parenthèses ne change rien quand il n'y a que des ∧ (ou que des ∨). On peut donc écrire a ∧ b ∧ c sans parenthèses.", true, "Exact ! Attention : ce n'est vrai que si tous les opérateurs sont les mêmes. Souviens-toi que (a ∨ b) ∧ c ≠ a ∨ (b ∧ c)."],
              ["Les parenthèses changent toujours le résultat.", false, "Compare les deux colonnes de chaque table : sont-elles différentes ?"]
            ]),
            bilan("<p>C'est l'<b>associativité</b> : quand un seul opérateur est utilisé, on peut regrouper les variables comme on veut, et donc supprimer les parenthèses.</p>" + formule("a ∧ (b ∧ c) ⇔ (a ∧ b) ∧ c") + formule("a ∨ (b ∨ c) ⇔ (a ∨ b) ∨ c"),
                  "Associativité : a ∧ (b ∧ c) ⇔ (a ∧ b) ∧ c ; a ∨ (b ∨ c) ⇔ (a ∨ b) ∨ c.", ["Associativité"])
          ]
        },
        {
          id: "neutres", titre: "Les constantes 0 et 1", duree: "15 à 20 min",
          intro: "Que se passe-t-il quand on combine une variable avec une constante, toujours vraie (1) ou toujours fausse (0) ? Par exemple : « Je sors si j'ai fini mes devoirs ET <b>il fait jour</b> », un jour où il fait jour toute la journée…",
          variables: [["a", ""]], sortie: null,
          etapes: [
            table("Calculer", "Complète les quatre colonnes (la table n'a que 2 lignes, puisqu'il n'y a qu'une variable).", [["a ∧ 1", "a ∧ 1"], ["a ∧ 0", "a ∧ 0"], ["a ∨ 0", "a ∨ 0"], ["a ∨ 1", "a ∨ 1"]],
                  ["Pour a ∧ 1, remplace a par 0 puis par 1 : 0 ∧ 1 = ?, 1 ∧ 1 = ?"]),
            conj("a ∧ 1", "a", { operateursMax: 0 }, ["Compare la colonne a ∧ 1 avec la colonne a."]),
            conj("a ∧ 0", "0", { operateursMax: 0, variablesMax: 0 }, ["Que vaut la colonne a ∧ 0, quelle que soit la valeur de a ?"]),
            conj("a ∨ 0", "a", { operateursMax: 0 }, ["Compare la colonne a ∨ 0 avec la colonne a."]),
            conj("a ∨ 1", "1", { operateursMax: 0, variablesMax: 0 }, ["Que vaut la colonne a ∨ 1, quelle que soit la valeur de a ?"]),
            qcm("Attention, piège !", "En mathématiques, x × 1 = x, x + 0 = x et x × 0 = 0… mais x + 1 ≠ 1. Et en logique, que vaut a ∨ 1 ?", [
              ["a ∨ 1 ⇔ a + 1, comme en mathématiques.", false, "En logique, il n'y a que 0 et 1 : regarde la colonne a ∨ 1 de ta table."],
              ["a ∨ 1 ⇔ 1 : il suffit qu'une des deux conditions soit vraie.", true, "Exact : avec un OU, si une des conditions est toujours vraie, le résultat est toujours vrai. C'est une différence importante avec l'addition !"]
            ]),
            bilan("<p>Les <b>éléments neutres</b> ne changent rien : 1 pour ∧, 0 pour ∨.</p>" + formule("a ∧ 1 ⇔ a") + formule("a ∨ 0 ⇔ a") +
                  "<p>Les <b>éléments absorbants</b> « avalent » tout : 0 pour ∧, 1 pour ∨.</p>" + formule("a ∧ 0 ⇔ 0") + formule("a ∨ 1 ⇔ 1"),
                  "Éléments neutres : a ∧ 1 ⇔ a ; a ∨ 0 ⇔ a. Éléments absorbants : a ∧ 0 ⇔ 0 ; a ∨ 1 ⇔ 1.", ["Éléments neutres", "Éléments absorbants"])
          ]
        },
        {
          id: "complement", titre: "Une variable et son contraire", duree: "10 min",
          intro: "La phrase « il pleut <b>et</b> il ne pleut pas » peut-elle être vraie ? Et « il pleut <b>ou</b> il ne pleut pas » peut-elle être fausse ?",
          variables: [["a", ""]], sortie: null,
          etapes: [
            table("Calculer", "Complète les trois colonnes.", [["¬a", "¬a"], ["a ∧ ¬a", "a ∧ ¬a"], ["a ∨ ¬a", "a ∨ ¬a"]]),
            conj("a ∧ ¬a", "0", { operateursMax: 0, variablesMax: 0 }),
            conj("a ∨ ¬a", "1", { operateursMax: 0, variablesMax: 0 }),
            bilan("<p>C'est la <b>complémentarité</b> : une variable et son contraire ne peuvent jamais être vrais en même temps, et l'un des deux est toujours vrai.</p>" + formule("a ∧ ¬a ⇔ 0") + formule("a ∨ ¬a ⇔ 1"),
                  "Complémentarité : a ∧ ¬a ⇔ 0 ; a ∨ ¬a ⇔ 1.", ["Complémentarité"])
          ]
        },
        {
          id: "idempot", titre: "Répéter ne sert à rien", duree: "5 à 10 min",
          intro: "« Je mange s'il est midi <b>et</b> qu'il est midi. » Cette phrase dit-elle plus de choses que « je mange s'il est midi » ?",
          variables: [["a", ""]], sortie: null,
          etapes: [
            table("Calculer", "Complète les deux colonnes.", [["a ∧ a", "a ∧ a"], ["a ∨ a", "a ∨ a"]]),
            conj("a ∧ a", "a", { operateursMax: 0 }),
            conj("a ∨ a", "a", { operateursMax: 0 }),
            bilan("<p>C'est l'<b>idempotence</b> : combiner une variable avec elle-même ne change rien.</p>" + formule("a ∧ a ⇔ a") + formule("a ∨ a ⇔ a") +
                  "<p>Cette règle s'utilise aussi « à l'envers » : on peut <b>répéter</b> un terme autant de fois qu'on veut (a ⇔ a ∨ a). Tu verras que c'est parfois très utile pour simplifier !</p>",
                  "Idempotence : a ∧ a ⇔ a ; a ∨ a ⇔ a (et on peut aussi répéter un terme : a ⇔ a ∨ a).", ["Idempotence"])
          ]
        },
        {
          id: "distrib", titre: "Distribuer et mettre en évidence", duree: "20 à 25 min",
          intro: "En mathématiques, 2 × (3 + 4) = 2 × 3 + 2 × 4 : la multiplication se <b>distribue</b> sur l'addition. Puisque ∧ ressemble à × et ∨ à +, voyons si c'est aussi vrai en logique… et si la logique réserve des surprises !",
          variables: ABC, sortie: null,
          etapes: [
            table("Distribuer ∧ sur ∨", "Complète les deux colonnes.", [["a ∧ (b ∨ c)", "a ∧ (b ∨ c)"], ["a ∧ b ∨ a ∧ c", "a ∧ b ∨ a ∧ c"]],
                  ["Pour la deuxième colonne, la priorité donne (a ∧ b) ∨ (a ∧ c)."]),
            qcm("Comparer", "Les deux colonnes sont-elles identiques ?", [
              ["Oui : a ∧ (b ∨ c) ⇔ a ∧ b ∨ a ∧ c, comme 2 × (3 + 4) = 2 × 3 + 2 × 4.", true, "Exact : ∧ se distribue sur ∨."],
              ["Non.", false, "Compare-les ligne par ligne : y a-t-il une seule ligne différente ?"]
            ]),
            qcm("En mathématiques…", "Et dans l'autre sens ? En mathématiques, est-ce que 2 + 3 × 4 = (2 + 3) × (2 + 4) ?", [
              ["Oui.", false, "Calcule : 2 + 3 × 4 = 14, mais (2 + 3) × (2 + 4) = 5 × 6 = 30."],
              ["Non : 14 ≠ 30. L'addition ne se distribue pas sur la multiplication.", true, "Exact. Voyons maintenant ce qui se passe en logique…"]
            ]),
            table("Distribuer ∨ sur ∧", "Complète les deux colonnes.", [["a ∨ b ∧ c", "a ∨ b ∧ c"], ["(a ∨ b) ∧ (a ∨ c)", "(a ∨ b) ∧ (a ∨ c)"]],
                  ["Pour la première colonne, la priorité donne a ∨ (b ∧ c)."]),
            qcm("Surprise !", "Et en logique, a ∨ (b ∧ c) ⇔ (a ∨ b) ∧ (a ∨ c) ?", [
              ["Non, comme en mathématiques.", false, "Compare tes deux dernières colonnes ligne par ligne."],
              ["Oui ! En logique, ∨ se distribue aussi sur ∧, contrairement à l'addition.", true, "Bien vu : c'est une vraie différence avec les mathématiques. En logique, la distributivité fonctionne dans les deux sens."]
            ]),
            bilan("<p>C'est la <b>distributivité</b>, qui fonctionne dans les deux sens en logique :</p>" + formule("a ∧ (b ∨ c) ⇔ (a ∧ b) ∨ (a ∧ c)") + formule("a ∨ (b ∧ c) ⇔ (a ∨ b) ∧ (a ∨ c)") +
                  "<p>Lue de droite à gauche, elle permet de <b>mettre en évidence</b> (factoriser) une variable commune : a ∧ b ∨ a ∧ c ⇔ a ∧ (b ∨ c).</p>",
                  "Distributivité : a ∧ (b ∨ c) ⇔ (a ∧ b) ∨ (a ∧ c) ; a ∨ (b ∧ c) ⇔ (a ∨ b) ∧ (a ∨ c). Lue à l'envers, elle permet de factoriser.", ["Distributivité"]),
            { type: "expr", titre: "À toi : mettre en évidence", consigne: "Mets la variable <b>a</b> en évidence dans <b>a ∧ b ∨ a ∧ c</b> (le résultat ne doit contenir la variable a qu'une seule fois).", gauche: "a ∧ b ∨ a ∧ c", cible: "a ∧ (b ∨ c)", contraintes: { variablesMax: 3 },
              indices: ["Comme 2 × 3 + 2 × 4 = 2 × (3 + 4)."] }
          ]
        }
      ]
    },
    {
      titre: "Les théorèmes : des raccourcis bien pratiques",
      activites: [
        {
          id: "involution", titre: "Le contraire du contraire", duree: "5 à 10 min",
          intro: "« Il n'est <b>pas faux</b> que tu as raison. » Que veut dire cette phrase ? Et « il n'est pas faux que ce n'est pas vrai » ?",
          variables: [["a", ""]], sortie: null,
          etapes: [
            table("Calculer", "Complète les trois colonnes.", [["¬a", "¬a"], ["¬¬a", "¬¬a"], ["¬¬¬a", "¬¬¬a"]], ["Chaque colonne est l'inverse de la précédente."]),
            conj("¬¬a", "a", { operateursMax: 0 }),
            conj("¬¬¬a", "¬a", { operateursMax: 1 }),
            bilan("<p>C'est l'<b>involution</b> : deux négations s'annulent.</p>" + formule("¬¬a ⇔ a") + formule("¬¬¬a ⇔ ¬a"),
                  "Involution : ¬¬a ⇔ a ; ¬¬¬a ⇔ ¬a (deux négations s'annulent).", ["Involution"])
          ]
        },
        {
          id: "absorption", titre: "Une condition qui ne sert à rien", duree: "20 à 30 min",
          intro: "Ta maman te dit : « Tu peux sortir <b>si tu as fini tes devoirs</b>, ou <b>si tu as fini tes devoirs et rangé ta chambre</b>. » As-tu vraiment besoin de ranger ta chambre ?",
          variables: [["a", "tu as fini tes devoirs"], ["b", "tu as rangé ta chambre"]],
          sortie: ["s", "tu peux sortir"],
          etapes: [
            { type: "expr", titre: "Traduire", consigne: "Traduis la phrase de ta maman.", cible: "a ∨ a ∧ b", indices: ["« si tu as fini tes devoirs » : a ; « si tu as fini tes devoirs et rangé ta chambre » : a ∧ b."] },
            table("Calculer", "Complète la table.", [["a ∧ b", "a ∧ b"], ["s = a ∨ a ∧ b", "a ∨ a ∧ b"]]),
            qcm("Conclure", "À quelle colonne ressemble la colonne s ?", [
              ["À la colonne a : ranger ta chambre ne change rien !", true, "Exact : dès que a vaut 1, s vaut 1 ; et si a vaut 0, a ∧ b vaut 0 aussi. La condition « et rangé ta chambre » est « absorbée »."],
              ["À la colonne b.", false, "Regarde la ligne a = 0, b = 1 : que vaut s ?"],
              ["À la colonne a ∧ b.", false, "Regarde la ligne a = 1, b = 0 : que vaut s ?"]
            ]),
            conj("a ∧ (a ∨ b)", "a", { variablesMax: 1, operateursMax: 0 }, ["Remplis mentalement la table : quand a = 0, que vaut a ∧ (…) ? Et quand a = 1, que vaut a ∨ b ?"]),
            bilan("<p>C'est l'<b>absorption</b> : la variable a « absorbe » le terme qui la contient.</p>" + formule("a ∨ (a ∧ b) ⇔ a") + formule("a ∧ (a ∨ b) ⇔ a"),
                  "Absorption : a ∨ (a ∧ b) ⇔ a ; a ∧ (a ∨ b) ⇔ a.", ["Absorption"]),
            { type: "simplif", titre: "Défi : le démontrer", consigne: "Les théorèmes se <b>démontrent</b> à partir des propriétés. Démontre que a ∨ a ∧ b ⇔ a en utilisant <b>uniquement</b> les propriétés découvertes au chapitre précédent, en indiquant la propriété utilisée à chaque ligne.",
              depart: "a ∨ a ∧ b", cible: "a", contraintes: { variablesMax: 1, operateursMax: 0 },
              indices: ["Astuce : a ⇔ a ∧ 1 (élément neutre). Remplace le premier a par a ∧ 1.", "Tu obtiens a ∧ 1 ∨ a ∧ b : mets a en évidence (distributivité) → a ∧ (1 ∨ b).", "1 ∨ b ⇔ 1 (élément absorbant), puis a ∧ 1 ⇔ a (élément neutre)."] }
          ]
        },
        {
          id: "inclusion", titre: "Jour ou nuit, peu importe", duree: "10 à 15 min",
          intro: "La barrière d'un parking s'ouvre « si on présente un <b>badge</b> et qu'il fait <b>jour</b>, ou si on présente un <b>badge</b> et qu'il fait <b>nuit</b> (qu'il ne fait pas jour) ».",
          variables: [["b", "on présente un badge"], ["j", "il fait jour"]],
          sortie: ["o", "la barrière s'ouvre"],
          etapes: [
            { type: "expr", titre: "Traduire", consigne: "Traduis le règlement du parking.", cible: "b ∧ j ∨ b ∧ ¬j", indices: ["« il fait nuit » = « il ne fait pas jour » = ¬j."] },
            table("Calculer", "Complète la table.", [["b ∧ j", "b ∧ j"], ["b ∧ ¬j", "b ∧ ¬j"], ["o", "b ∧ j ∨ b ∧ ¬j"]]),
            qcm("Conclure", "De quoi dépend vraiment l'ouverture de la barrière ?", [
              ["Uniquement du badge : o a la même colonne que b.", true, "Exact : qu'il fasse jour ou nuit, le badge suffit. Le jour et la nuit couvrent tous les cas possibles."],
              ["Du badge et du jour.", false, "Regarde les lignes où b = 1 : la barrière s'ouvre-t-elle aussi la nuit ?"],
              ["Uniquement du jour.", false, "Regarde les lignes où b = 0."]
            ]),
            bilan("<p>C'est l'<b>inclusion</b> : si deux termes ne diffèrent que par une variable, présente une fois telle quelle et une fois avec ¬, cette variable disparaît.</p>" + formule("a ∧ b ∨ a ∧ ¬b ⇔ a") + formule("(a ∨ b) ∧ (a ∨ ¬b) ⇔ a"),
                  "Inclusion : a ∧ b ∨ a ∧ ¬b ⇔ a ; (a ∨ b) ∧ (a ∨ ¬b) ⇔ a.", ["Inclusion"])
          ]
        },
        {
          id: "allegement", titre: "Alléger une condition", duree: "15 à 20 min",
          intro: "« Tu peux jouer à la console <b>si tu as fini tes devoirs</b>, ou <b>si tu n'as pas fini tes devoirs mais que c'est le week-end</b>. »",
          variables: [["a", "tu as fini tes devoirs"], ["b", "c'est le week-end"]],
          sortie: ["j", "tu peux jouer"],
          etapes: [
            { type: "expr", titre: "Traduire", consigne: "Traduis la règle.", cible: "a ∨ ¬a ∧ b", indices: ["« tu n'as pas fini tes devoirs mais c'est le week-end » : ¬a ∧ b."] },
            table("Calculer", "Complète la table.", [["¬a ∧ b", "¬a ∧ b"], ["j = a ∨ ¬a ∧ b", "a ∨ ¬a ∧ b"], ["a ∨ b", "a ∨ b"]]),
            qcm("Conclure", "Compare les deux dernières colonnes. Que peux-tu dire ?", [
              ["Elles sont identiques : le « mais tu n'as pas fini tes devoirs » ne sert à rien.", true, "Exact : si les devoirs sont finis, tu peux de toute façon jouer. La règle revient à « devoirs finis OU week-end »."],
              ["Elles sont différentes.", false, "Compare-les ligne par ligne."]
            ]),
            conj("a ∧ (¬a ∨ b)", "a ∧ b", { variablesMax: 2 }, ["Remplis mentalement la table : quand a = 0, que vaut l'expression ? Quand a = 1, ¬a vaut 0…"]),
            bilan("<p>C'est l'<b>allègement</b> : on peut supprimer le ¬a qui accompagne b.</p>" + formule("a ∨ ¬a ∧ b ⇔ a ∨ b") + formule("a ∧ (¬a ∨ b) ⇔ a ∧ b"),
                  "Allègement : a ∨ ¬a ∧ b ⇔ a ∨ b ; a ∧ (¬a ∨ b) ⇔ a ∧ b.", ["Allègement"])
          ]
        }
      ]
    },
    {
      titre: "Les lois de De Morgan",
      activites: [
        {
          id: "morgan1", titre: "Le contraire d'un OU", duree: "15 à 20 min",
          intro: "Dans un programme, on lit :<pre class='code'>si (a OU b) alors\n    // le programme est écrit en C ou en JavaScript\nsinon\n    // ???\n</pre>avec <b>a</b> : « le programme est écrit en C » et <b>b</b> : « le programme est écrit en JavaScript ». Dans quel cas passe-t-on dans la partie <b>sinon</b> ? C'est le cas où <b>¬(a ∨ b)</b> est vrai. Comment l'écrire plus simplement ?",
          variables: [["a", "le programme est écrit en C"], ["b", "le programme est écrit en JavaScript"]],
          sortie: ["s", "on passe dans la partie « sinon »"],
          etapes: [
            table("Calculer", "Complète la table.", [["a ∨ b", "a ∨ b"], ["¬(a ∨ b)", "¬(a ∨ b)"]]),
            table("Deux candidats", "Voici deux propositions pour simplifier ¬(a ∨ b). Complète leurs colonnes.", [["¬a ∨ ¬b", "¬a ∨ ¬b"], ["¬a ∧ ¬b", "¬a ∧ ¬b"]],
                  ["Commence par calculer ¬a et ¬b de tête pour chaque ligne."]),
            qcm("Conclure", "Quelle proposition est équivalente à ¬(a ∨ b) ?", [
              ["¬a ∨ ¬b", false, "Compare la colonne ¬a ∨ ¬b avec la colonne ¬(a ∨ b), par exemple à la ligne a = 1, b = 0."],
              ["¬a ∧ ¬b", true, "Exact : « ni en C, ni en JavaScript » = « pas en C ET pas en JavaScript ». Quand le NON entre dans la parenthèse, le ∨ devient un ∧ !"]
            ]),
            qcm("En français", "Comment dire « sinon » en français ?", [
              ["Le programme n'est pas écrit en C ou il n'est pas écrit en JavaScript.", false, "Un programme écrit en C n'est pas écrit en JavaScript : cette phrase serait vraie… alors qu'on ne devrait pas passer dans « sinon »."],
              ["Le programme n'est écrit ni en C, ni en JavaScript.", true, "Exact : « ni… ni… » signifie « pas a ET pas b »."]
            ])
          ]
        },
        {
          id: "morgan2", titre: "Le contraire d'un ET", duree: "15 à 20 min",
          intro: "Une fête est <b>réussie</b> s'il y a de la <b>musique</b> ET à <b>manger</b>. Quand est-elle <b>ratée</b> ? À toi de trouver la règle, par analogie avec l'activité précédente.",
          variables: [["m", "il y a de la musique"], ["n", "il y a à manger"]],
          sortie: ["r", "la fête est ratée"],
          etapes: [
            { type: "expr", titre: "Traduire avec ¬", consigne: "La fête est ratée quand elle n'est <b>pas</b> réussie. Écris l'expression de r en plaçant un ¬ devant l'expression « réussie » entre parenthèses.", cible: "¬(m ∧ n)", contraintes: { negGroupe: true },
              indices: ["La fête est réussie si m ∧ n. Ratée = NON réussie."] },
            { type: "expr", titre: "Faire entrer le ¬", consigne: "Par analogie avec l'activité précédente, écris r <b>sans ¬ devant une parenthèse</b>. Vérifie ensuite en français que ta réponse a du sens.", cible: "¬m ∨ ¬n", contraintes: { pasNegGroupe: true, pasDoubleNeg: true },
              indices: ["Dans l'activité précédente, en faisant entrer le ¬ dans la parenthèse, le ∨ est devenu un ∧. Que devient ici le ∧ ?", "La fête est ratée s'il manque la musique, OU s'il manque à manger (ou les deux)."] },
            table("Vérifier", "Vérifie ta règle avec les tables.", [["¬(m ∧ n)", "¬(m ∧ n)"], ["¬m ∨ ¬n", "¬m ∨ ¬n"]]),
            bilan("<p>Tu viens de découvrir les <b>lois de De Morgan</b>, du nom du mathématicien anglais Augustus De Morgan, ami de George Boole. Quand on fait entrer un ¬ dans une parenthèse, chaque variable reçoit un ¬ et <b>∨ et ∧ s'échangent</b> :</p>" +
                  formule("¬(a ∨ b) ⇔ ¬a ∧ ¬b") + formule("¬(a ∧ b) ⇔ ¬a ∨ ¬b") +
                  "<p>Cela fonctionne aussi avec plus de deux variables : ¬(a ∨ b ∨ c) ⇔ ¬a ∧ ¬b ∧ ¬c.</p>",
                  "De Morgan : ¬(a ∨ b) ⇔ ¬a ∧ ¬b ; ¬(a ∧ b) ⇔ ¬a ∨ ¬b (le ¬ entre, ∧ et ∨ s'échangent). Aussi : ¬(a ∨ b ∨ c) ⇔ ¬a ∧ ¬b ∧ ¬c.", ["De Morgan"])
          ]
        }
      ]
    },
    { titre: "Réinvestissement : la maison connectée", activites: A.MISSIONS }
  ];

  A.CHAPITRES = CHAPITRES;
  A.NOTIONS = NOTIONS;
  A.ACTIVITES = [].concat.apply([], CHAPITRES.map(function (c) { return c.activites; }));
  if (typeof module !== "undefined" && module.exports) module.exports = A;
})(this);
