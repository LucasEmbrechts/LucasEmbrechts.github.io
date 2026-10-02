/* Atelier d'algèbre de Boole : moteur logique et contenu des missions.
   Notations du cours : ∧ (ET), ∨ (OU), ¬ (NON). Priorité : ¬, puis ∧, puis ∨. */

(function (global) {
  "use strict";

  // ------------------------------------------------------------------ Lecture d'une expression
  // Raccourcis clavier acceptés : & * . pour ∧ ; | + pour ∨ ; ! ~ - pour ¬
  function normaliser(txt) {
    return txt
      .replace(/[&*.·]/g, "∧")
      .replace(/[|+]/g, "∨")
      .replace(/[!~\-]/g, "¬")
      .replace(/[\[{]/g, "(")
      .replace(/[\]}]/g, ")");
  }

  function erreur(message, position) {
    var e = new Error(message);
    e.position = position;
    return e;
  }

  function decouper(txt, variables) {
    var s = normaliser(txt), jetons = [], i = 0;
    while (i < s.length) {
      var c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if ("∧∨¬()".indexOf(c) >= 0) { jetons.push({ t: c, p: i }); i++; continue; }
      if (c === "0" || c === "1") { jetons.push({ t: "const", v: c === "1", p: i }); i++; continue; }
      var l = c.toLowerCase();
      if (variables.indexOf(l) >= 0) { jetons.push({ t: "var", v: l, p: i }); i++; continue; }
      if (/[a-zA-Z]/.test(c)) {
        throw erreur("« " + c + " » n'est pas une variable de cette mission (variables : " + variables.join(", ") + ").", i);
      }
      throw erreur("Le caractère « " + c + " » n'est pas compris.", i);
    }
    return jetons;
  }

  // Grammaire : ou := et (∨ et)* ; et := non (∧ non)* ; non := ¬ non | atome ; atome := var | 0 | 1 | ( ou )
  function analyser(txt, variables) {
    var jetons = decouper(txt, variables), k = 0;
    if (!jetons.length) throw erreur("L'expression est vide.", 0);
    function voir() { return jetons[k]; }
    function ou() {
      var g = et();
      while (voir() && voir().t === "∨") { k++; g = { op: "∨", g: g, d: et() }; }
      return g;
    }
    function et() {
      var g = non();
      while (voir() && voir().t === "∧") { k++; g = { op: "∧", g: g, d: non() }; }
      return g;
    }
    function non() {
      if (voir() && voir().t === "¬") { k++; return { op: "¬", x: non() }; }
      return atome();
    }
    function atome() {
      var j = voir();
      if (!j) throw erreur("L'expression se termine trop tôt : il manque quelque chose après le dernier opérateur.", txt.length);
      if (j.t === "var") { k++; return { op: "var", v: j.v }; }
      if (j.t === "const") { k++; return { op: "const", v: j.v }; }
      if (j.t === "(") {
        k++;
        var e = ou();
        if (!voir() || voir().t !== ")") throw erreur("Il manque une parenthèse fermante « ) ».", txt.length);
        k++;
        return { op: "()", x: e };
      }
      if (j.t === ")") throw erreur("Parenthèse fermante « ) » inattendue.", j.p);
      throw erreur("Il manque une variable avant « " + j.t + " ».", j.p);
    }
    var arbre = ou();
    if (k < jetons.length) {
      var j = jetons[k];
      if (j.t === ")") throw erreur("Parenthèse fermante « ) » en trop.", j.p);
      throw erreur("Il manque un opérateur (∧ ou ∨) avant « " + (j.v === undefined ? j.t : (j.v === true ? "1" : j.v === false ? "0" : j.v)) + " ».", j.p);
    }
    return arbre;
  }

  function evaluer(a, val) {
    switch (a.op) {
      case "var": return val[a.v];
      case "const": return a.v;
      case "()": return evaluer(a.x, val);
      case "¬": return !evaluer(a.x, val);
      case "∧": return evaluer(a.g, val) && evaluer(a.d, val);
      case "∨": return evaluer(a.g, val) || evaluer(a.d, val);
    }
    throw new Error("noeud inconnu " + a.op);
  }

  // Écriture « propre » d'une expression avec les symboles du cours
  function ecrire(a) {
    switch (a.op) {
      case "var": return a.v;
      case "const": return a.v ? "1" : "0";
      case "()": return "(" + ecrire(a.x) + ")";
      case "¬": return "¬" + ecrire(a.x);
      default: return ecrire(a.g) + " " + a.op + " " + ecrire(a.d);
    }
  }

  // Mesures utilisées pour vérifier qu'une expression est « assez simplifiée »
  function mesurer(a) {
    var m = { variables: 0, operateurs: 0, parentheses: 0, constantes: 0, negGroupe: false, doubleNeg: false };
    (function parcours(n, parent) {
      if (n.op === "var") { m.variables++; return; }
      if (n.op === "const") { m.constantes++; return; }
      if (n.op === "()") { m.parentheses++; parcours(n.x, parent); return; }
      m.operateurs++;
      if (n.op === "¬") {
        var x = n.x;
        if (x.op === "()") m.negGroupe = true;
        if (x.op === "¬") m.doubleNeg = true;
        parcours(n.x, n);
        return;
      }
      parcours(n.g, n); parcours(n.d, n);
    })(a, null);
    return m;
  }

  // Vérifie qu'une expression (déjà jugée équivalente) respecte les contraintes de forme d'une étape.
  // Renvoie la liste des remarques (vide si tout est respecté).
  function verifierContraintes(arbre, k) {
    k = k || {};
    var m = mesurer(arbre), r = [];
    if (k.variablesMax !== undefined && m.variables > k.variablesMax)
      r.push(k.variablesMax === 0 ? "le résultat ne devrait plus contenir de variable (ce n'est qu'un 0 ou un 1)" : "ton résultat contient encore " + m.variables + " variable" + (m.variables > 1 ? "s" : "") + " (objectif : " + k.variablesMax + " au maximum)");
    if (k.operateursMax !== undefined && m.operateurs > k.operateursMax)
      r.push(k.operateursMax === 0 ? "le résultat doit s'écrire sans aucun opérateur (∧, ∨, ¬)" : "ton résultat contient " + m.operateurs + " opérateurs (objectif : " + k.operateursMax + " au maximum)");
    if (k.parenthesesMax !== undefined && m.parentheses > k.parenthesesMax)
      r.push(k.parenthesesMax === 0 ? "écris-le sans aucune parenthèse (pense à la priorité des opérateurs)" : "il reste trop de parenthèses");
    if (k.pasNegGroupe && m.negGroupe) r.push("il reste un ¬ devant une parenthèse");
    if (k.pasDoubleNeg && m.doubleNeg) r.push("il reste une double négation ¬¬");
    if (k.negGroupe && !m.negGroupe) r.push("la consigne demande de placer un ¬ devant toute l'expression, entre parenthèses");
    return r;
  }

  // Toutes les combinaisons, dans l'ordre du cours (0 0 0, 0 0 1, …)
  function combinaisons(variables) {
    var lignes = [], n = variables.length;
    for (var i = 0; i < (1 << n); i++) {
      var val = {};
      for (var k = 0; k < n; k++) val[variables[k]] = !!(i & (1 << (n - 1 - k)));
      lignes.push(val);
    }
    return lignes;
  }

  // Compare deux arbres : renvoie null s'ils sont équivalents, sinon la première combinaison qui diffère
  function comparer(a, b, variables) {
    var lignes = combinaisons(variables);
    for (var i = 0; i < lignes.length; i++) {
      var x = evaluer(a, lignes[i]), y = evaluer(b, lignes[i]);
      if (x !== y) return { valeurs: lignes[i], obtenu: x, attendu: y };
    }
    return null;
  }

  // ------------------------------------------------------------------ Propriétés du cours
  var PROPRIETES = [
    { nom: "Commutativité", formules: ["a ∧ b ⇔ b ∧ a", "a ∨ b ⇔ b ∨ a"] },
    { nom: "Associativité", formules: ["a ∧ (b ∧ c) ⇔ (a ∧ b) ∧ c", "a ∨ (b ∨ c) ⇔ (a ∨ b) ∨ c"] },
    { nom: "Distributivité", formules: ["a ∧ (b ∨ c) ⇔ (a ∧ b) ∨ (a ∧ c)", "a ∨ (b ∧ c) ⇔ (a ∨ b) ∧ (a ∨ c)"] },
    { nom: "Éléments neutres", formules: ["a ∧ 1 ⇔ a", "a ∨ 0 ⇔ a"] },
    { nom: "Éléments absorbants", formules: ["a ∧ 0 ⇔ 0", "a ∨ 1 ⇔ 1"] },
    { nom: "Complémentarité", formules: ["a ∧ ¬a ⇔ 0", "a ∨ ¬a ⇔ 1"] },
    { nom: "Idempotence", formules: ["a ∧ a ⇔ a", "a ∨ a ⇔ a"] },
    { nom: "Involution", formules: ["¬¬a ⇔ a", "¬¬¬a ⇔ ¬a"] },
    { nom: "Inclusion", formules: ["a ∧ b ∨ a ∧ ¬b ⇔ a", "(a ∨ b) ∧ (a ∨ ¬b) ⇔ a"] },
    { nom: "Allègement", formules: ["a ∧ (¬a ∨ b) ⇔ a ∧ b", "a ∨ ¬a ∧ b ⇔ a ∨ b"] },
    { nom: "Absorption", formules: ["a ∧ (a ∨ b) ⇔ a", "a ∨ (a ∧ b) ⇔ a"] },
    { nom: "De Morgan", formules: ["¬(a ∨ b) ⇔ ¬a ∧ ¬b", "¬(a ∧ b) ⇔ ¬a ∨ ¬b"] }
  ];

  // ------------------------------------------------------------------ Missions
  // Types d'étapes :
  //  expr    : écrire une expression équivalente à « cible » (contraintes facultatives)
  //  table   : compléter une table de vérité (une ou plusieurs colonnes calculées)
  //  simplif : partir de « depart » et simplifier ligne par ligne jusqu'à une forme assez simple
  //  fiche   : question à rédiger uniquement sur la fiche réponse
  var MISSIONS = [
    {
      id: "portail",
      titre: "Le portail du garage",
      duree: "10 à 15 min",
      intro: "Tes parents viennent d'installer un portail de garage automatique. Le portail <b>s'ouvre</b> si on appuie sur la <b>télécommande</b> ou sur le <b>bouton intérieur</b>, mais <b>jamais</b> si la cellule détecte un <b>obstacle</b> (pour ne blesser personne).",
      variables: [["t", "on appuie sur la télécommande"], ["b", "on appuie sur le bouton intérieur"], ["o", "un obstacle est détecté"]],
      sortie: ["p", "le portail s'ouvre"],
      etapes: [
        {
          type: "expr", titre: "Traduire la situation",
          consigne: "Écris l'expression booléenne de <b>p</b> en fonction de <b>t</b>, <b>b</b> et <b>o</b>.",
          cible: "(t ∨ b) ∧ ¬o",
          indices: [
            "Découpe la phrase : le portail s'ouvre si (télécommande OU bouton) ET (PAS d'obstacle).",
            "« Pas d'obstacle » s'écrit ¬o.",
            "Attention à la priorité : ∧ est prioritaire sur ∨. Sans parenthèses, t ∨ b ∧ ¬o se lit t ∨ (b ∧ ¬o) : le portail s'ouvrirait avec la télécommande… même s'il y a un obstacle !"
          ]
        },
        {
          type: "table", titre: "La table de vérité",
          consigne: "Complète la table de vérité en décomposant l'expression. Clique sur une case pour changer sa valeur.",
          colonnes: [["t ∨ b", "t ∨ b"], ["¬o", "¬o"], ["p", "(t ∨ b) ∧ ¬o"]],
          indices: [
            "Commence par la colonne t ∨ b : elle vaut 1 dès que t ou b vaut 1.",
            "La colonne ¬o est l'inverse de la colonne o.",
            "La dernière colonne vaut 1 seulement quand les deux colonnes précédentes valent 1."
          ]
        },
        {
          type: "fiche", titre: "Interpréter",
          consigne: "Sur ta fiche réponse : dans combien de cas le portail s'ouvre-t-il ? Décris ces cas en français."
        }
      ]
    },
    {
      id: "vaetvient",
      titre: "Le va-et-vient du couloir",
      duree: "10 à 15 min",
      intro: "La lampe du couloir est commandée par <b>deux interrupteurs</b> : un en <b>haut</b> de l'escalier et un en <b>bas</b>. Au départ, les deux interrupteurs sont en position 0 et la lampe est éteinte. <b>Chaque fois qu'on bascule l'un des deux interrupteurs, la lampe change d'état</b> (elle s'allume si elle était éteinte, elle s'éteint si elle était allumée).",
      variables: [["h", "l'interrupteur du haut est en position 1"], ["b", "l'interrupteur du bas est en position 1"]],
      sortie: ["l", "la lampe est allumée"],
      etapes: [
        {
          type: "table", titre: "Partir de la situation",
          consigne: "Complète la table de vérité de la lampe <b>l</b>.",
          colonnes: [["l", "h ∧ ¬b ∨ ¬h ∧ b"]],
          indices: [
            "Première ligne : les deux interrupteurs sont à 0, c'est la situation de départ : la lampe est éteinte.",
            "Depuis la première ligne, basculer un seul interrupteur (lignes 2 et 3) allume la lampe.",
            "Dernière ligne : on a basculé les deux interrupteurs, donc la lampe a changé deux fois d'état."
          ]
        },
        {
          type: "expr", titre: "Trouver l'expression",
          consigne: "Écris l'expression de <b>l</b> à partir des lignes de ta table où la lampe est allumée.",
          cible: "h ∧ ¬b ∨ ¬h ∧ b",
          indices: [
            "Pour chaque ligne où l = 1, écris un terme avec ∧ : la variable telle quelle si elle vaut 1, avec ¬ si elle vaut 0.",
            "Par exemple, la ligne h = 0, b = 1 donne le terme ¬h ∧ b.",
            "Relie ensuite les termes par ∨ (la lampe est allumée dans le 1er cas OU dans le 2e cas)."
          ]
        },
        {
          type: "fiche", titre: "Interpréter",
          consigne: "Sur ta fiche réponse : complète la phrase « La lampe est allumée lorsque les deux interrupteurs sont… » et explique pourquoi."
        }
      ]
    },
    {
      id: "alarme",
      titre: "L'alarme de la maison",
      duree: "15 à 20 min",
      intro: "L'installateur a programmé la sirène de l'alarme ainsi : « la sirène sonne <b>si l'alarme est activée et la porte ouverte</b>, <b>ou si l'alarme est activée et une fenêtre ouverte</b>, <b>ou si l'alarme est activée et un mouvement est détecté</b> ». Son expression fonctionne… mais elle est bien trop longue !",
      variables: [["a", "l'alarme est activée"], ["p", "la porte est ouverte"], ["f", "une fenêtre est ouverte"], ["m", "un mouvement est détecté"]],
      sortie: ["s", "la sirène sonne"],
      etapes: [
        {
          type: "expr", titre: "Traduire l'installateur",
          consigne: "Écris l'expression de <b>s</b> exactement comme l'installateur l'a décrite (trois termes reliés par ∨).",
          cible: "a ∧ p ∨ a ∧ f ∨ a ∧ m",
          indices: ["Chaque partie « l'alarme est activée et … » donne un terme : a ∧ p, a ∧ f, a ∧ m.", "Relie les trois termes par ∨."]
        },
        {
          type: "simplif", titre: "Simplifier",
          consigne: "Simplifie l'expression de l'installateur. Indique à chaque ligne la propriété utilisée.",
          depart: "a ∧ p ∨ a ∧ f ∨ a ∧ m",
          cible: "a ∧ (p ∨ f ∨ m)",
          contraintes: { variablesMax: 4 },
          indices: ["La variable a apparaît dans les trois termes : peut-on la « mettre en évidence », comme en mathématiques ?",
                    "Distributivité : (a ∧ p) ∨ (a ∧ f) ⇔ a ∧ (p ∨ f). Fais-le en deux fois si nécessaire."]
        },
        {
          type: "table", titre: "Vérifier par la table",
          consigne: "Montre que les deux expressions sont équivalentes : complète leurs deux colonnes (16 lignes !).",
          colonnes: [["installateur", "a ∧ p ∨ a ∧ f ∨ a ∧ m"], ["simplifiée", "a ∧ (p ∨ f ∨ m)"]],
          indices: ["Quand a = 0, que valent les deux expressions ? Cela règle déjà la moitié des lignes.", "Quand a = 1, la sirène sonne dès que p, f ou m vaut 1."]
        },
        {
          type: "fiche", titre: "Conclure",
          consigne: "Sur ta fiche réponse : combien d'opérateurs (∧ et ∨) chaque expression contient-elle ? Pourquoi est-il intéressant de simplifier ?"
        }
      ]
    },
    {
      id: "jardin",
      titre: "La lumière du jardin",
      duree: "15 à 20 min",
      intro: "Le mode d'emploi de la lampe du jardin indique : « La lumière <b>reste éteinte</b> s'il fait <b>jour</b> ou si <b>personne n'est détecté</b>. » Pas très pratique pour savoir quand elle s'allume… Les lois de De Morgan vont t'aider !",
      variables: [["j", "il fait jour"], ["d", "quelqu'un est détecté"]],
      sortie: ["l", "la lumière est allumée"],
      etapes: [
        {
          type: "expr", titre: "Quand est-elle éteinte ?",
          consigne: "Écris l'expression de <b>e</b> (« la lumière est éteinte »), en traduisant le mode d'emploi.",
          cible: "j ∨ ¬d",
          sortie: ["e", "la lumière est éteinte"],
          indices: ["« Personne n'est détecté » s'écrit ¬d.", "Éteinte s'il fait jour OU si personne n'est détecté."]
        },
        {
          type: "expr", titre: "Quand est-elle allumée ?",
          consigne: "La lumière est allumée quand elle n'est <b>pas</b> éteinte. Écris l'expression de <b>l</b> en plaçant un ¬ devant toute l'expression précédente.",
          cible: "¬(j ∨ ¬d)",
          contraintes: { negGroupe: true },
          indices: ["l = NON e. Il faut donc mettre l'expression de e entre parenthèses, précédée de ¬."]
        },
        {
          type: "simplif", titre: "Simplifier avec De Morgan",
          consigne: "Simplifie l'expression de <b>l</b> pour qu'il ne reste plus de ¬ devant une parenthèse ni de double négation.",
          depart: "¬(j ∨ ¬d)",
          cible: "¬j ∧ d",
          contraintes: { variablesMax: 2, pasNegGroupe: true, pasDoubleNeg: true },
          indices: ["De Morgan : ¬(a ∨ b) ⇔ ¬a ∧ ¬b. Ici, a = j et b = ¬d.", "Tu obtiens ¬j ∧ ¬¬d. Quelle propriété permet de supprimer la double négation ?", "Involution : ¬¬d ⇔ d."]
        },
        {
          type: "table", titre: "Vérifier par la table",
          consigne: "Vérifie que l'expression de départ et ton résultat sont équivalents.",
          colonnes: [["¬(j ∨ ¬d)", "¬(j ∨ ¬d)"], ["¬j ∧ d", "¬j ∧ d"]],
          indices: ["Calcule d'abord j ∨ ¬d de tête pour chaque ligne, puis prends l'inverse."]
        },
        {
          type: "fiche", titre: "Traduire",
          consigne: "Sur ta fiche réponse : traduis ton résultat en français (« La lumière s'allume lorsque… »). Est-ce plus clair que le mode d'emploi ?"
        }
      ]
    },
    {
      id: "vote",
      titre: "Le vote familial",
      duree: "25 à 35 min",
      intro: "Pour décider de la destination des vacances, la famille vote : <b>maman</b>, <b>papa</b> et l'<b>enfant</b> votent chacun oui (1) ou non (0). La proposition est <b>acceptée si au moins deux personnes votent oui</b>.",
      variables: [["m", "maman vote oui"], ["p", "papa vote oui"], ["e", "l'enfant vote oui"]],
      sortie: ["v", "la proposition est acceptée"],
      etapes: [
        {
          type: "table", titre: "La table de vérité",
          consigne: "Complète la table de vérité de <b>v</b>.",
          colonnes: [["v", "m ∧ p ∨ m ∧ e ∨ p ∧ e"]],
          indices: ["Pour chaque ligne, compte le nombre de 1 dans les colonnes m, p et e. Si ce nombre est 2 ou 3, v vaut 1."]
        },
        {
          type: "expr", titre: "L'expression « longue »",
          consigne: "Écris l'expression de <b>v</b> avec un terme pour chaque ligne où v = 1 (comme dans la mission du va-et-vient).",
          cible: "m ∧ p ∧ e ∨ m ∧ p ∧ ¬e ∨ m ∧ ¬p ∧ e ∨ ¬m ∧ p ∧ e",
          indices: ["Il y a 4 lignes où v = 1, donc 4 termes de 3 variables chacun.", "Exemple : la ligne m = 0, p = 1, e = 1 donne le terme ¬m ∧ p ∧ e."]
        },
        {
          type: "simplif", titre: "Simplifier pas à pas",
          consigne: "Simplifie l'expression longue jusqu'à obtenir au maximum 6 variables. Indique la propriété utilisée à chaque ligne.",
          depart: "¬m ∧ p ∧ e ∨ m ∧ ¬p ∧ e ∨ m ∧ p ∧ ¬e ∨ m ∧ p ∧ e",
          cible: "m ∧ p ∨ m ∧ e ∨ p ∧ e",
          contraintes: { variablesMax: 6 },
          indices: [
            "Astuce : le terme m ∧ p ∧ e « va bien » avec chacun des trois autres. L'idempotence (x ∨ x ⇔ x) permet de l'écrire trois fois !",
            "Écris : (¬m ∧ p ∧ e ∨ m ∧ p ∧ e) ∨ (m ∧ ¬p ∧ e ∨ m ∧ p ∧ e) ∨ (m ∧ p ∧ ¬e ∨ m ∧ p ∧ e).",
            "Dans chaque parenthèse, deux termes ne diffèrent que par une variable. Inclusion : a ∧ b ∨ a ∧ ¬b ⇔ a. Par exemple, p ∧ e ∧ ¬m ∨ p ∧ e ∧ m ⇔ p ∧ e (après commutativité)."
          ]
        },
        {
          type: "fiche", titre: "Traduire",
          consigne: "Sur ta fiche réponse : traduis ton résultat en français. Combien de variables contenait l'expression longue ? Et l'expression simplifiée ?"
        }
      ]
    },
    {
      id: "chauffage",
      titre: "Défi : le chauffage",
      duree: "15 à 25 min",
      intro: "Un installateur maladroit a programmé le chauffage avec l'expression suivante : <b>c = f ∨ f ∧ p ∨ ¬f ∧ g</b>. Ton défi : la simplifier au maximum, puis t'entraîner sur trois expressions « pièges ».",
      variables: [["f", "il fait froid"], ["p", "quelqu'un est présent"], ["g", "le mode hors-gel est activé"]],
      sortie: ["c", "le chauffage s'allume"],
      etapes: [
        {
          type: "simplif", titre: "Le chauffage",
          consigne: "Simplifie l'expression de l'installateur jusqu'à obtenir au maximum 2 variables.",
          depart: "f ∨ f ∧ p ∨ ¬f ∧ g",
          cible: "f ∨ g",
          contraintes: { variablesMax: 2 },
          indices: ["Regarde d'abord f ∨ f ∧ p : quelle propriété du cours ressemble à a ∨ (a ∧ b) ?", "Absorption : f ∨ f ∧ p ⇔ f.", "Il reste f ∨ ¬f ∧ g. Allègement : a ∨ ¬a ∧ b ⇔ a ∨ b."]
        },
        {
          type: "fiche", titre: "Traduire",
          consigne: "Sur ta fiche réponse : traduis le résultat en français. La présence de quelqu'un (p) a-t-elle une influence ?"
        },
        {
          type: "simplif", titre: "Piège 1",
          consigne: "Simplifie jusqu'à obtenir une seule variable.",
          depart: "(f ∨ p) ∧ (f ∨ ¬p)",
          cible: "f",
          contraintes: { variablesMax: 1 },
          indices: ["Cherche dans le tableau des propriétés une formule de la forme (a ∨ b) ∧ (a ∨ ¬b).", "C'est l'inclusion."]
        },
        {
          type: "simplif", titre: "Piège 2",
          consigne: "Simplifie jusqu'à obtenir au maximum 2 variables.",
          depart: "f ∧ (¬f ∨ g)",
          cible: "f ∧ g",
          contraintes: { variablesMax: 2 },
          indices: ["Forme a ∧ (¬a ∨ b) : c'est l'allègement."]
        },
        {
          type: "simplif", titre: "Piège 3",
          consigne: "Simplifie pour qu'il ne reste plus de ¬ devant une parenthèse ni de double négation.",
          depart: "¬(¬f ∧ ¬p)",
          cible: "f ∨ p",
          contraintes: { variablesMax: 2, pasNegGroupe: true, pasDoubleNeg: true },
          indices: ["De Morgan : ¬(a ∧ b) ⇔ ¬a ∨ ¬b.", "Puis l'involution supprime les doubles négations."]
        }
      ]
    }
  ];

  var API = {
    normaliser: normaliser, analyser: analyser, evaluer: evaluer, ecrire: ecrire, mesurer: mesurer, verifierContraintes: verifierContraintes,
    combinaisons: combinaisons, comparer: comparer, PROPRIETES: PROPRIETES, MISSIONS: MISSIONS
  };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else global.Atelier = API;
})(this);
