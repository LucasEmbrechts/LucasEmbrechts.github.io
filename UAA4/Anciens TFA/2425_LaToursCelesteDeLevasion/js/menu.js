let noms = JSON.parse(localStorage.getItem("pseudo"));
let texte = document.getElementById("corps3");
texte.innerHTML = noms.map(nom => `<div>${nom}</div>`).join('');

