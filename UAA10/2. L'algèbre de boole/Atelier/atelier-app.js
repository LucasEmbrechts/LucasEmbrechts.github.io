(function () {
  "use strict";
  // Configuration fournie par la page (partie 1, partie 2 ou découvertes en classe)
  var A = window.Atelier, CFG = window.ATELIER_CONFIG;
  var CH = CFG.chapitres.map(function (i) { return A.CHAPITRES[i]; });
  var ACT = [].concat.apply([], CH.map(function (c) { return c.activites; }));
  var FACULT = CFG.facultatives || [];
  var OBLIG = ACT.filter(function (a) { return FACULT.indexOf(a.id) < 0; });
  var CLE = CFG.cle;
  var etat = charger();
  (CFG.toutDebloque ? A.NOTIONS.map(function (n) { return n.id; }) : (CFG.notionsInitiales || [])).forEach(function (id) { etat.notions[id] = true; });

  function charger() {
    try { var s = JSON.parse(localStorage.getItem(CLE)); if (s && s.act) return s; } catch (e) {}
    return { courante: -1, act: {}, notions: {} };
  }
  function sauver() { try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) {} }
  function ea(id) { return etat.act[id] || (etat.act[id] = { etapes: {} }); }
  function ee(id, i) { var a = ea(id); return a.etapes[i] || (a.etapes[i] = {}); }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function echap(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function activiteFinie(a) { var s = ea(a.id); return a.etapes.every(function (e, i) { return s.etapes[i] && s.etapes[i].reussi; }); }
  function prerequisOk(a, i) {
    var s = ea(a.id);
    for (var k = 0; k < i; k++) if (a.etapes[k].type !== "fiche" && !(s.etapes[k] && s.etapes[k].reussi)) return false;
    return true;
  }
  function placeDe(index) {
    var n = 0;
    for (var c = 0; c < CH.length; c++) for (var k = 0; k < CH[c].activites.length; k++) { if (n === index) return { c: c, k: k }; n++; }
  }

  // ---------------------------------------------------------------- formulaire progressif
  function ouvreQui(id) {
    var T = A.ACTIVITES;
    for (var i = 0; i < T.length; i++) for (var k = 0; k < T[i].etapes.length; k++) {
      var e = T[i].etapes[k];
      if (e.type === "bilan" && e.debloque.indexOf(id) >= 0) return { titre: T[i].titre, ici: ACT.indexOf(T[i]) >= 0 };
    }
    return { titre: "", ici: false };
  }
  function majFormulaire() {
    var t = document.getElementById("table-notions");
    t.innerHTML = "";
    A.NOTIONS.forEach(function (n) {
      if (etat.notions[n.id]) t.appendChild(el("tr", null, "<td>" + n.titre + "</td><td>" + n.formules.map(function (f) { return '<span class="formule">' + f + "</span>"; }).join("<br>") + "</td>"));
      else {
        var o = ouvreQui(n.id);
        t.appendChild(el("tr", { class: "verrou" }, "<td>🔒 ???</td><td>" + (o.ici ? "À découvrir dans l'activité « " + o.titre + " »" : "À découvrir en classe") + "</td>"));
      }
    });
    var vv = ea("vaetvient"), connu = CFG.toutDebloque || (vv.etapes[1] && vv.etapes[1].reussi);
    document.getElementById("aide-table").innerHTML = connu
      ? "Pour chaque ligne où la sortie vaut 1, écris un terme avec ∧ : la variable telle quelle si elle vaut 1, précédée de ¬ si elle vaut 0. Relie ensuite tous ces termes par ∨.<br>Exemple : la ligne a = 1, b = 0 donne le terme <span class='formule'>a ∧ ¬b</span>."
      : "🔒 À découvrir dans la mission « Le va-et-vient du couloir ».";
  }
  function rappels(ouvrir) {
    if (ouvrir) majFormulaire();
    document.getElementById("rappels").classList.toggle("ouvert", ouvrir);
    document.getElementById("voile").classList.toggle("ouvert", ouvrir);
  }
  document.getElementById("btn-rappels").onclick = function () { rappels(true); };
  document.getElementById("fermer-rappels").onclick = function () { rappels(false); };
  document.getElementById("voile").onclick = function () { rappels(false); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") rappels(false); });

  // ---------------------------------------------------------------- navigation
  function majPlan() {
    var n = OBLIG.filter(activiteFinie).length;
    document.getElementById("barre").style.width = (100 * n / OBLIG.length) + "%";
    document.getElementById("compteur").textContent = n + " / " + OBLIG.length + " activités" + (FACULT.length ? " (+ " + FACULT.length + " facultative" + (FACULT.length > 1 ? "s" : "") + ")" : "");
    var p = document.getElementById("plan");
    var ouverts = {};
    p.querySelectorAll("details").forEach(function (d, c) { ouverts[c] = d.open; });
    var premierRendu = !p.children.length;
    p.innerHTML = "";
    p.appendChild(el("button", { class: "btn " + (etat.courante === -1 ? "" : "contour ") + "petit depart-btn", onclick: function () { aller(-1); } }, "🏁 Consignes de l'atelier"));
    var index = 0, ici = etat.courante >= 0 ? placeDe(etat.courante) : null;
    CH.forEach(function (ch, c) {
      var finies = ch.activites.filter(activiteFinie).length;
      var d = el("details", { class: "chap" + (finies === ch.activites.length ? " fini" : "") });
      d.open = (ici && ici.c === c) || (!ici && c === 0) || (!premierRendu && ouverts[c]);
      d.appendChild(el("summary", null, "<span>" + (CFG.chapitres[c] + 1) + ". " + ch.titre + "</span><span class='avance'>" + finies + " / " + ch.activites.length + "</span>"));
      var acts = el("div", { class: "acts" });
      ch.activites.forEach(function (a) {
        var i = index++;
        acts.appendChild(el("button", { class: "act" + (i === etat.courante ? " actif" : "") + (activiteFinie(a) ? " fini" : ""), onclick: function () { aller(i); } }, a.titre + (FACULT.indexOf(a.id) >= 0 ? " (facultatif)" : "")));
      });
      d.appendChild(acts);
      p.appendChild(d);
    });
  }
  function aller(i) { etat.courante = i; sauver(); afficher(); window.scrollTo({ top: 0, behavior: "smooth" }); }

  function afficher(garderPosition) {
    var y = window.scrollY;
    majPlan();
    var c = document.getElementById("contenu");
    c.innerHTML = "";
    if (etat.courante === -1) c.appendChild(accueil());
    else {
      var a = ACT[etat.courante], pl = placeDe(etat.courante);
      var carte = el("div", { class: "carte" });
      carte.appendChild(el("div", { class: "surtitre" }, "Chapitre " + (CFG.chapitres[pl.c] + 1) + " · " + CH[pl.c].titre));
      carte.appendChild(el("h2", null, a.titre + (FACULT.indexOf(a.id) >= 0 ? " <span style='font-size:.9rem;color:var(--muted);font-weight:500'>(facultatif)</span>" : "")));
      carte.appendChild(el("div", { class: "duree" }, "⏱ Durée estimée : " + a.duree));
      carte.appendChild(el("div", { class: "intro" }, a.intro));
      var avecSens = a.variables.filter(function (v) { return v[1]; }).length;
      if (a.variables.length && avecSens) {
        var leg = "<b>Les variables</b><table class='legende'>";
        a.variables.forEach(function (v) { leg += "<tr><td>" + v[0] + " = 1</td><td>si " + v[1] + "</td></tr>"; });
        if (a.sortie) leg += "<tr><td>" + a.sortie[0] + " = 1</td><td>si " + a.sortie[1] + " (c'est la <b>sortie</b>)</td></tr>";
        carte.appendChild(el("div", null, leg + "</table>"));
      } else if (a.variables.length) {
        carte.appendChild(el("p", null, "Ici, <b>" + a.variables.map(function (v) { return v[0]; }).join("</b>, <b>") + "</b> " + (a.variables.length > 1 ? "sont des variables booléennes quelconques" : "est une variable booléenne quelconque") + " : chacune vaut 0 ou 1."));
      }
      c.appendChild(carte);
      a.etapes.forEach(function (e, i) { c.appendChild(etape(a, e, i)); });
      var nav = el("div", { class: "navigation" });
      nav.appendChild(el("button", { class: "btn contour", onclick: function () { aller(etat.courante - 1); } }, "← " + (etat.courante === 0 ? "Consignes" : "Activité précédente")));
      if (etat.courante < ACT.length - 1) nav.appendChild(el("button", { class: "btn", onclick: function () { aller(etat.courante + 1); } }, "Activité suivante →"));
      c.appendChild(nav);
      bravo();
    }
    if (garderPosition) window.scrollTo(0, y);
  }

  function bravo() {
    if (etat.courante === -1 || !OBLIG.every(activiteFinie) || document.querySelector(".bravo")) return;
    document.getElementById("contenu").appendChild(el("div", { class: "carte bravo" }, CFG.bravo));
  }

  function accueil() {
    var d = el("div", { class: "carte accueil" }, CFG.accueil);
    d.appendChild(el("button", { class: "btn", onclick: function () { aller(0); } }, "Commencer la première activité →"));
    return d;
  }

  // ---------------------------------------------------------------- étapes
  function bilanDebloquable(a) {
    var n = 0;
    a.etapes.forEach(function (e, i) { if (e.type === "bilan" && prerequisOk(a, i)) n++; });
    return n;
  }

  function etape(a, e, i) {
    var s = ee(a.id, i);
    var vars = a.variables.map(function (v) { return v[0]; });
    if (e.type === "bilan") return etapeBilan(a, e, i, s);
    var d = el("div", { class: "carte etape" + (s.reussi ? " reussie" : "") });
    var tete = el("div", { class: "etape-tete" });
    tete.appendChild(el("div", { class: "pastille" }, s.reussi ? "✓" : String(i + 1)));
    tete.appendChild(el("h3", null, (e.type === "fiche" ? "✍️ " : "") + e.titre));
    d.appendChild(tete);
    d.appendChild(el("p", { class: "consigne" }, e.consigne));
    var retour = el("div", { class: "retour" });
    function dire(cls, html) { retour.className = "retour " + cls; retour.innerHTML = html; }
    function reussir(msg) {
      var avant = bilanDebloquable(a);
      s.reussi = true; sauver(); dire("ok", msg);
      d.classList.add("reussie"); tete.querySelector(".pastille").textContent = "✓"; majPlan(); bravo();
      if (bilanDebloquable(a) !== avant) {  // un cadre « Ce que tu viens de découvrir » vient de s'ouvrir
        s.dernierMessage = msg; sauver(); afficher(true);
      }
    }
    function echouer(cls, msg) {
      if (s.reussi) { s.reussi = false; d.classList.remove("reussie"); tete.querySelector(".pastille").textContent = String(i + 1); majPlan(); }
      sauver(); dire(cls, msg);
    }
    var ctx = { a: a, e: e, s: s, vars: vars, reussir: reussir, echouer: echouer, dire: dire };
    if (e.type === "expr") d.appendChild(widgetExpr(ctx));
    else if (e.type === "table") d.appendChild(widgetTable(ctx));
    else if (e.type === "simplif") d.appendChild(widgetSimplif(ctx));
    else if (e.type === "qcm") d.appendChild(widgetQcm(ctx));
    else d.appendChild(widgetFiche(ctx));
    d.appendChild(retour);
    if (s.reussi && e.type !== "fiche") dire("ok", s.dernierMessage || "✓ Étape réussie. N'oublie pas de recopier ta réponse dans ton cahier.");
    if (e.indices && e.indices.length) d.appendChild(zoneIndices(e, s));
    return d;
  }

  function etapeBilan(a, e, i, s) {
    if (!prerequisOk(a, i)) {
      return el("div", { class: "carte bilan verrou" }, "<div class='etape-tete'><div class='pastille'>🔒</div><h3>" + e.titre + "</h3></div><p>Réussis d'abord les étapes précédentes : la règle que tu as découverte apparaîtra ici.</p>");
    }
    var d = el("div", { class: "carte bilan etape" + (s.reussi ? " reussie" : "") });
    d.appendChild(el("div", { class: "etape-tete" }, "<div class='pastille'>" + (s.reussi ? "✓" : "💡") + "</div><h3>" + e.titre + "</h3>"));
    d.appendChild(el("div", null, e.html));
    var lab = el("label", { class: "fait" }), cb = el("input", { type: "checkbox" });
    cb.checked = !!s.reussi;
    cb.onchange = function () {
      s.reussi = cb.checked;
      if (cb.checked) e.debloque.forEach(function (id) { etat.notions[id] = true; });
      sauver(); afficher(true);
      if (cb.checked && e.debloque.length) toast("📘 Ajouté à ton formulaire : " + e.debloque.join(", "));
    };
    lab.appendChild(cb);
    lab.appendChild(document.createTextNode("J'ai recopié cette règle dans mon cahier" + (e.debloque.length ? " (elle s'ajoute alors à mon formulaire)" : "")));
    d.appendChild(lab);
    return d;
  }

  function toast(t) {
    var b = el("div", { style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#1f2937;color:white;padding:10px 16px;border-radius:12px;z-index:20;box-shadow:0 8px 24px rgba(0,0,0,.2);max-width:90%" }, echap(t));
    document.body.appendChild(b);
    setTimeout(function () { b.remove(); }, 3200);
  }

  function zoneIndices(e, s) {
    var z = el("div"), liste = el("div"), b = el("button", { class: "btn contour petit" });
    function maj() {
      var n = s.indices || 0;
      liste.innerHTML = "";
      for (var k = 0; k < n; k++) liste.appendChild(el("div", { class: "indice" }, "💡 <b>Coup de pouce " + (k + 1) + "</b> : " + e.indices[k]));
      var reste = e.indices.length - n;
      b.textContent = reste > 0 ? "💡 Coup de pouce (" + reste + " restant" + (reste > 1 ? "s" : "") + ")" : "Plus de coup de pouce";
      b.disabled = reste <= 0;
    }
    b.onclick = function () { s.indices = (s.indices || 0) + 1; sauver(); maj(); };
    maj();
    var act = el("div", { class: "actions" }); act.appendChild(b);
    z.appendChild(act); z.appendChild(liste);
    return z;
  }

  function champExpr(valeur, vars, onchange) {
    var box = el("div");
    var exemple = vars.length > 1 ? "(" + vars[0] + " ∨ " + vars[1] + ") ∧ ¬" + vars[vars.length - 1] : "¬" + (vars[0] || "a");
    var inp = el("input", { class: "expr", type: "text", spellcheck: "false", autocomplete: "off", autocapitalize: "off", placeholder: "Ex. : " + exemple });
    inp.value = valeur || "";
    function maj() {
      var n = A.normaliser(inp.value);
      if (n !== inp.value) { var p = inp.selectionStart; inp.value = n; inp.setSelectionRange(p, p); }
      onchange(inp.value);
    }
    inp.addEventListener("input", maj);
    var sym = el("div", { class: "symboles" });
    ["∧", "∨", "¬", "(", ")", "0", "1"].concat(vars).forEach(function (c) {
      sym.appendChild(el("button", { type: "button", title: c === "∧" ? "ET" : c === "∨" ? "OU" : c === "¬" ? "NON" : "", onclick: function () {
        var p0 = inp.selectionStart == null ? inp.value.length : inp.selectionStart, p1 = inp.selectionEnd == null ? p0 : inp.selectionEnd;
        var ins = (c === "∧" || c === "∨") ? " " + c + " " : c;
        inp.value = inp.value.slice(0, p0) + ins + inp.value.slice(p1);
        inp.focus(); inp.setSelectionRange(p0 + ins.length, p0 + ins.length); maj();
      } }, c));
    });
    box.appendChild(inp); box.appendChild(sym);
    box.input = inp;
    return box;
  }

  function decrire(a, val, vars) {
    return vars.map(function (v) {
      var d = a.variables.filter(function (x) { return x[0] === v; })[0];
      return "<b>" + v + " = " + (val[v] ? 1 : 0) + "</b>" + (d && d[1] ? " (" + d[1] + " : " + (val[v] ? "oui" : "non") + ")" : "");
    }).join(", ");
  }
  function messageAnalyse(err) { return "⚠️ Je n'arrive pas à lire ton expression : " + echap(err.message); }

  function widgetExpr(ctx) {
    var e = ctx.e, s = ctx.s, sortie = e.sortie || ctx.a.sortie;
    var w = el("div");
    var champ = champExpr(s.saisie, ctx.vars, function (v) { s.saisie = v; sauver(); });
    var ligne = el("div", { class: "ligne-expr" });
    if (e.gauche) ligne.appendChild(el("span", { class: "gauche" }, echap(e.gauche) + " ⇔"));
    else if (sortie) ligne.appendChild(el("span", { class: "gauche" }, sortie[0] + " ="));
    ligne.appendChild(champ);
    w.appendChild(ligne);
    var act = el("div", { class: "actions" });
    act.appendChild(el("button", { class: "btn", onclick: function () {
      var ar;
      try { ar = A.analyser(champ.input.value, ctx.vars); } catch (err) { ctx.echouer("ko", messageAnalyse(err)); return; }
      var cible = A.analyser(e.cible, ctx.vars);
      var diff = A.comparer(ar, cible, ctx.vars);
      if (diff) {
        var quoi = e.gauche ? "<b>" + echap(e.gauche) + "</b>" : (sortie ? "<b>" + sortie[0] + "</b>" : "l'expression attendue");
        var sens = (!e.gauche && sortie) ? " (" + sortie[1] + " : " + (diff.attendu ? "oui" : "non") + ")" : "";
        ctx.echouer("ko", "✗ Pas encore. Teste cette situation : " + decrire(ctx.a, diff.valeurs, ctx.vars) +
          ".<br>Ton expression vaut <b>" + (diff.obtenu ? 1 : 0) + "</b>, mais dans cette situation " + quoi + " vaut <b>" + (diff.attendu ? 1 : 0) + "</b>" + sens + ".");
        return;
      }
      var rem = A.verifierContraintes(ar, e.contraintes);
      if (rem.length) { ctx.echouer("info", "👍 Ton expression est juste, mais " + rem.join(" ; ") + "."); return; }
      var g = e.gauche ? echap(e.gauche) + " ⇔ " : (sortie ? sortie[0] + " = " : "");
      ctx.reussir("✓ Bravo, c'est correct : <span class='formule'>" + g + echap(A.ecrire(ar)) + "</span>. Recopie-le dans ton cahier.");
    } }, "Vérifier"));
    w.appendChild(act);
    return w;
  }

  function widgetTable(ctx) {
    var e = ctx.e, s = ctx.s, vars = ctx.vars;
    var lignes = A.combinaisons(vars);
    var cols = e.colonnes.map(function (c) { return { titre: c[0], arbre: A.analyser(c[1], vars) }; });
    s.cases = s.cases || {};
    var w = el("div", { class: "table-scroll" });
    var t = el("table", { class: "verite" });
    var h = "<tr>" + vars.map(function (v) { return "<th>" + v + "</th>"; }).join("");
    cols.forEach(function (c, k) { h += "<th class='sortie" + (k === 0 ? " sep" : "") + "'>" + c.titre + "</th>"; });
    t.appendChild(el("thead", null, h + "</tr>"));
    var tb = el("tbody"), cases = [];
    lignes.forEach(function (val, r) {
      var tr = el("tr");
      vars.forEach(function (v) { tr.appendChild(el("td", null, val[v] ? "1" : "0")); });
      cols.forEach(function (c, k) {
        var cle = r + "_" + k;
        var td = el("td", { class: "case" + (k === 0 ? " sep" : ""), title: "Clique pour changer la valeur" });
        function rendre() { var v = s.cases[cle]; td.textContent = v === undefined ? "?" : v; td.classList.toggle("vide", v === undefined); }
        td.onclick = function () { var v = s.cases[cle]; s.cases[cle] = v === undefined ? 0 : 1 - v; td.classList.remove("faux", "juste"); rendre(); sauver(); };
        rendre();
        cases.push({ td: td, cle: cle, attendu: A.evaluer(c.arbre, val) ? 1 : 0, ligne: r });
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    t.appendChild(tb); w.appendChild(t);
    var box = el("div"); box.appendChild(w);
    var act = el("div", { class: "actions" });
    act.appendChild(el("button", { class: "btn", onclick: function () {
      var vides = 0, faux = 0, lf = {};
      cases.forEach(function (c) {
        c.td.classList.remove("faux", "juste");
        var v = s.cases[c.cle];
        if (v === undefined) { vides++; return; }
        if (v !== c.attendu) { faux++; lf[c.ligne + 1] = 1; c.td.classList.add("faux"); }
      });
      if (vides) { ctx.echouer("info", "Il reste " + vides + " case" + (vides > 1 ? "s" : "") + " à compléter (marquées ?)."); return; }
      if (faux) {
        var l = Object.keys(lf);
        ctx.echouer("ko", "✗ " + faux + " case" + (faux > 1 ? "s sont fausses" : " est fausse") + " (en rouge), " + (l.length > 1 ? "sur les lignes " : "sur la ligne ") + l.join(", ") + (faux > 1 ? ". Corrige-les" : ". Corrige-la") + " et vérifie à nouveau.");
        return;
      }
      cases.forEach(function (c) { c.td.classList.add("juste"); });
      ctx.reussir("✓ Ta table de vérité est entièrement correcte. Recopie-la dans ton cahier.");
    } }, "Vérifier"));
    act.appendChild(el("button", { class: "btn contour", onclick: function () { s.cases = {}; s.reussi = false; sauver(); afficher(true); } }, "Tout effacer"));
    box.appendChild(act);
    return box;
  }

  function widgetQcm(ctx) {
    var e = ctx.e, s = ctx.s;
    var w = el("div", { class: "choix" }), labels = [];
    var nom = "q" + Math.random().toString(36).slice(2);
    e.choix.forEach(function (c, k) {
      var lab = el("label");
      var r = el("input", { type: "radio", name: nom, value: String(k) });
      if (s.choix === k) r.checked = true;
      r.onchange = function () { s.choix = k; sauver(); labels.forEach(function (l) { l.classList.remove("bon", "mauvais"); }); };
      lab.appendChild(r); lab.appendChild(el("span", null, c[0]));
      if (s.reussi && s.choix === k) lab.classList.add("bon");
      labels.push(lab); w.appendChild(lab);
    });
    var box = el("div"); box.appendChild(w);
    var act = el("div", { class: "actions" });
    act.appendChild(el("button", { class: "btn", onclick: function () {
      var k = s.choix;
      if (k === undefined) { ctx.echouer("info", "Choisis d'abord une réponse."); return; }
      labels.forEach(function (l) { l.classList.remove("bon", "mauvais"); });
      var c = e.choix[k];
      if (c[1]) { labels[k].classList.add("bon"); ctx.reussir("✓ " + c[2]); }
      else { labels[k].classList.add("mauvais"); ctx.echouer("ko", "✗ " + c[2]); }
    } }, "Vérifier"));
    box.appendChild(act);
    return box;
  }

  function proprietesConnues() { return A.PROPRIETES.filter(function (p) { return etat.notions[p.nom]; }); }

  function widgetSimplif(ctx) {
    var e = ctx.e, s = ctx.s, vars = ctx.vars;
    s.lignes = s.lignes && s.lignes.length ? s.lignes : [{ x: "", p: "" }];
    var w = el("div");
    w.appendChild(el("div", { class: "depart" }, (ctx.a.sortie ? ctx.a.sortie[0] + " = " : "") + echap(e.depart)));
    var liste = el("div"), champs = [];
    function construire() {
      liste.innerHTML = ""; champs = [];
      var connues = proprietesConnues();
      s.lignes.forEach(function (l, k) {
        var row = el("div", { class: "ligne-simplif" });
        row.appendChild(el("div", { class: "eq" }, "⇔"));
        var ch = champExpr(l.x, vars, function (v) { l.x = v; sauver(); });
        row.appendChild(ch);
        var sel = el("select", { "aria-label": "propriété utilisée" });
        sel.appendChild(el("option", { value: "" }, "Propriété utilisée…"));
        connues.forEach(function (p) { var o = el("option", { value: p.nom }, p.nom); if (l.p === p.nom) o.selected = true; sel.appendChild(o); });
        if (connues.length < A.PROPRIETES.length) sel.appendChild(el("option", { value: "", disabled: "disabled" }, "🔒 " + (A.PROPRIETES.length - connues.length) + " propriété(s) pas encore découverte(s)"));
        sel.onchange = function () { l.p = sel.value; sauver(); };
        row.appendChild(sel);
        row.appendChild(el("button", { class: "suppr", title: "Supprimer cette ligne", onclick: function () { if (s.lignes.length > 1) { s.lignes.splice(k, 1); sauver(); construire(); } } }, "✕"));
        liste.appendChild(row);
        champs.push(ch);
      });
    }
    construire();
    w.appendChild(liste);
    var act = el("div", { class: "actions" });
    act.appendChild(el("button", { class: "btn contour", onclick: function () {
      var der = s.lignes[s.lignes.length - 1];
      s.lignes.push({ x: der ? der.x : "", p: "" }); sauver(); construire();
      var c = champs[champs.length - 1]; if (c) c.input.focus();
    } }, "+ Ajouter une ligne"));
    act.appendChild(el("button", { class: "btn", onclick: function () {
      champs.forEach(function (c) { c.input.classList.remove("faux", "juste"); });
      var prec = A.analyser(e.depart, vars), precTexte = "la ligne de départ";
      for (var k = 0; k < s.lignes.length; k++) {
        var l = s.lignes[k], ar;
        try { ar = A.analyser(l.x, vars); } catch (err) { champs[k].input.classList.add("faux"); ctx.echouer("ko", "Ligne " + (k + 1) + " : " + messageAnalyse(err)); return; }
        var diff = A.comparer(ar, prec, vars);
        if (diff) {
          champs[k].input.classList.add("faux");
          ctx.echouer("ko", "✗ La ligne " + (k + 1) + " n'est pas équivalente à " + precTexte + ". Teste : " + decrire(ctx.a, diff.valeurs, vars) +
            ".<br>La ligne " + (k + 1) + " vaut <b>" + (diff.obtenu ? 1 : 0) + "</b> alors que " + precTexte + " vaut <b>" + (diff.attendu ? 1 : 0) + "</b>. Vérifie la propriété que tu as appliquée.");
          return;
        }
        champs[k].input.classList.add("juste");
        prec = ar; precTexte = "la ligne " + (k + 1);
      }
      var rem = A.verifierContraintes(prec, e.contraintes);
      if (rem.length) { ctx.echouer("info", "👍 Toutes tes lignes sont correctes, mais tu n'as pas encore fini : " + rem.join(" ; ") + ". Ajoute une ligne et continue !"); return; }
      var sansProp = s.lignes.map(function (l, k) { return l.p ? 0 : k + 1; }).filter(Boolean);
      if (sansProp.length) { ctx.echouer("info", "👍 Tes calculs sont corrects et ton résultat est assez simplifié ! Il reste à indiquer la propriété utilisée à la ligne " + sansProp.join(", ") + "."); return; }
      ctx.reussir("✓ Excellent ! Ta simplification est correcte : <span class='formule'>" + (ctx.a.sortie ? ctx.a.sortie[0] + " = " : "") + echap(A.ecrire(prec)) + "</span>. Recopie toutes les lignes et les propriétés dans ton cahier (ton professeur vérifiera les noms des propriétés).");
    } }, "Vérifier"));
    w.appendChild(act);
    return w;
  }

  function widgetFiche(ctx) {
    var w = el("div", { class: "fiche" }, "Cette question ne peut pas être corrigée automatiquement : réponds-y directement dans ton <b>cahier de l'atelier</b>.");
    var lab = el("label", { class: "fait" }), cb = el("input", { type: "checkbox" });
    cb.checked = !!ctx.s.reussi;
    cb.onchange = function () { if (cb.checked) ctx.reussir("✓ Noté ! Ton professeur corrigera cette réponse dans ton cahier."); else ctx.echouer("info", "Étape marquée comme non faite."); };
    lab.appendChild(cb); lab.appendChild(document.createTextNode("J'ai répondu dans mon cahier"));
    w.appendChild(lab);
    return w;
  }

  afficher();
})();
