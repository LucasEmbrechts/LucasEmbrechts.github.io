

titre = document.getElementById("titre")
regle = document.getElementById("regle")
regle.style.display = "none"
credit = document.getElementById("credit")
credit.style.display = "none"
menu = document.getElementById("menu")
meilleurscore = document.getElementById("Meilleurscore")

let valeursound = localStorage.getItem("sound")
let music1 = new Audio('sources/son/menu1.mp3'); // Musique de fond du menu
let clickSound = new Audio('sources/son/button.mp3'); // Son de clic pour les boutons
if (valeursound == "true") { 
    music1.loop = true;
    music1.volume = 0.1;
    music1.play();
    clickSound.play();
    clickSound.volume = 0.01; 
} else {
    let music1 = null
    let clickSound = null
}

 // Affichage de l'argent
 let argentlocal = parseFloat(localStorage.getItem('argent')) || 0; //si rien = 0
 const argentElement = document.getElementById('argent');

let meilleurscorelocal = parseInt(localStorage.getItem('score')) || 0 //si rien = 0
meilleurscore.innerHTML = "Meilleur score: " + meilleurscorelocal

function boutonregle() {
    if (valeursound == "true") { 
        clickSound.play();
    }
    menu.style.display = "none"
    regle.style.display = "flex"
}
function boutoncredit() {
    if (valeursound == "true") { 
        clickSound.play();
    }
    menu.style.display = "none"
    credit.style.display = "flex"
}
function fermermenuregle() {
    if (valeursound == "true") { 
        clickSound.play();
    }
    menu.style.display = "block"
    regle.style.display = "none"
}
function fermermenucredit() {
    if (valeursound == "true") { 
        clickSound.play();
    }
    menu.style.display = "block"
    credit.style.display = "none"
}


if (valeursound == null) { //si le son et null l activer de base
    localStorage.setItem("sound", "true"); 
}