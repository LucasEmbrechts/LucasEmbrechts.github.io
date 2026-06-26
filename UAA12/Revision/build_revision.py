#!/usr/bin/env python3
"""Génère Revision/UAA12_Revision.html à partir du dossier Markdown.
Source unique = UAA12_Exercices_Revision.md. Relancer ce script après chaque modif du .md.
"""
import html
from pathlib import Path

BASE = Path("/Users/lucas/Documents/GitHub/LucasEmbrechts.github.io/UAA12")
MD = BASE / "Exercices" / "UAA12_Exercices_Revision.md"
OUT = BASE / "Revision" / "UAA12_Revision.html"

md = MD.read_text(encoding="utf-8")
# Échappe le markdown pour l'intégrer en toute sécurité dans un <textarea>
# (gère notamment les <script> du corrigé XSS sans casser la page).
escaped = html.escape(md, quote=False)

TEMPLATE = """<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UAA12 - Dossier de révision</title>
<!-- Page générée à partir de Exercices/UAA12_Exercices_Revision.md (voir build_revision.py) -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
:root{
  --primary-color:#6366f1;--secondary-color:#8b5cf6;--accent-color:#06b6d4;
  --text-dark:#1f2937;--text-light:#6b7280;--php-color:#777bb4;
  --bg-gradient:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Inter',sans-serif;background:var(--bg-gradient);color:var(--text-dark);line-height:1.65;}

/* Barre d'outils */
.toolbar{position:sticky;top:0;z-index:1000;display:flex;gap:1rem;align-items:center;justify-content:space-between;
  padding:0.8rem 1.5rem;background:rgba(31,41,55,0.85);backdrop-filter:blur(10px);}
.toolbar .left{display:flex;gap:0.8rem;align-items:center;}
.toolbar a,.toolbar button{display:inline-flex;align-items:center;gap:0.4rem;border:none;cursor:pointer;
  font-family:'Inter',sans-serif;font-weight:600;font-size:0.9rem;padding:0.6rem 1.1rem;border-radius:12px;
  text-decoration:none;transition:all .25s ease;}
.toolbar .btn-back{background:rgba(255,255,255,0.12);color:#fff;}
.toolbar .btn-back:hover{background:rgba(255,255,255,0.22);}
.toolbar .btn-pdf{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:#fff;
  box-shadow:0 4px 15px rgba(99,102,241,.35);}
.toolbar .btn-pdf:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(99,102,241,.45);}
.toolbar .title{color:#e5e7eb;font-weight:500;font-size:0.95rem;}

/* Zone document */
.wrap{max-width:920px;margin:2.5rem auto;padding:0 1.5rem;}
.paper{background:#fff;border-radius:18px;box-shadow:0 20px 50px rgba(0,0,0,.18);padding:3.5rem 3rem;}

/* Typographie du contenu */
#content h1{font-size:2.2rem;font-weight:800;color:var(--text-dark);margin:0 0 .4rem;line-height:1.2;}
#content h2{font-size:1.6rem;font-weight:700;margin:2.6rem 0 1rem;padding-bottom:.4rem;
  border-bottom:3px solid;border-image:linear-gradient(90deg,var(--primary-color),var(--accent-color)) 1;}
#content h3{font-size:1.2rem;font-weight:700;color:var(--secondary-color);margin:1.8rem 0 .6rem;}
#content p{margin:.7rem 0;}
#content ul,#content ol{margin:.6rem 0 .6rem 1.4rem;}
#content li{margin:.3rem 0;}
#content a{color:var(--primary-color);text-decoration:none;border-bottom:1px solid rgba(99,102,241,.3);}
#content a:hover{border-bottom-color:var(--primary-color);}
#content strong{color:var(--text-dark);font-weight:700;}
#content hr{border:none;border-top:1px solid #e5e7eb;margin:2.4rem 0;}

/* Code */
#content code{font-family:'JetBrains Mono',monospace;font-size:.88em;background:#f1f0fb;color:var(--php-color);
  padding:.12em .4em;border-radius:6px;}
#content pre{background:#1e2330;border-radius:12px;padding:1.1rem 1.3rem;overflow-x:auto;margin:1rem 0;
  border-left:4px solid var(--php-color);}
#content pre code{display:block;background:none;color:#e5e7eb;padding:0;font-size:.85rem;line-height:1.55;}

/* Tableaux */
#content table{border-collapse:collapse;width:100%;margin:1.2rem 0;font-size:.92rem;}
#content th{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:#fff;
  text-align:left;padding:.6rem .8rem;}
#content td{padding:.55rem .8rem;border-bottom:1px solid #eef0f4;}
#content tr:nth-child(even) td{background:#fafafe;}

/* Citations / notes */
#content blockquote{margin:1rem 0;padding:.8rem 1.2rem;background:#f7f7ff;border-left:4px solid var(--accent-color);
  border-radius:0 10px 10px 0;color:#374151;}
#content blockquote p{margin:.3rem 0;}

@media(max-width:768px){
  .paper{padding:2rem 1.3rem;}
  .toolbar .title{display:none;}
  #content h1{font-size:1.7rem;}
}

/* Impression / PDF */
@media print{
  @page{margin:1.5cm;}
  body{background:#fff;}
  .toolbar{display:none !important;}
  .wrap{margin:0;max-width:none;padding:0;}
  .paper{box-shadow:none;border-radius:0;padding:0;}
  #content h2,#content h3{break-after:avoid;}
  #content pre,#content table,#content blockquote{break-inside:avoid;}
  #content pre{background:#f4f4f8;border-left:4px solid var(--php-color);}
  #content pre code{color:#1e2330;}
  #content a{color:var(--text-dark);border:none;}
}
</style>
</head>
<body>
<div class="toolbar">
  <div class="left">
    <a href="../index.html" class="btn-back">&larr; Retour UAA12</a>
    <span class="title">Dossier de révision &mdash; toutes les séries</span>
  </div>
  <button class="btn-pdf" onclick="window.print()">&#128424;&#65039; Télécharger en PDF</button>
</div>
<div class="wrap">
  <div class="paper">
    <article id="content">Chargement&hellip;</article>
  </div>
</div>

<textarea id="src" hidden>__MARKDOWN__</textarea>
<script src="vendor/marked.min.js"></script>
<script>
  const source = document.getElementById('src').value;
  marked.setOptions({ gfm:true, breaks:false });
  document.getElementById('content').innerHTML = marked.parse(source);
  document.title = 'UAA12 - Dossier de révision';
  // Ouvre directement la boîte d'impression / PDF si on arrive via ?print
  if (location.search.indexOf('print') !== -1 || location.hash.indexOf('print') !== -1) {
    setTimeout(() => window.print(), 400);
  }
</script>
</body>
</html>
"""

out_html = TEMPLATE.replace("__MARKDOWN__", escaped)
OUT.write_text(out_html, encoding="utf-8")
print(f"Écrit : {OUT} ({len(out_html)} octets)")
