function retour() { // Cette fonction est appelée quand on clique sur le X
    window.location.href = "index.html"
}


// Cette fonction est appelée quand on clique sur la case Debug
function debug() {
    let debug = document.getElementById("option1") //debug = la case html 

    if (debug.checked == true) {
        // case est cochée : on sauvegarde true
        localStorage.setItem("debug", "true")
    } else {
        // case est décochée : on sauvegarde false
        localStorage.setItem("debug", "false")
    }
}


  // Cette fonction est appelée quand on clique sur la case Debug
function sound() {
    let debug = document.getElementById("option2") //debug = la case html 

    if (debug.checked == true) {
        // case est cochée : on sauvegarde true
        localStorage.setItem("sound", "true")
    } else {
        // case est décochée : on sauvegarde false
        localStorage.setItem("sound", "false")
    }
}


let valeurdebug = localStorage.getItem("debug") //regarde se qui et sauvegarder dans debug
let valeursound = localStorage.getItem("sound") //regarde se qui et sauvegarder dans sound

if (valeurdebug == "true") { //si debug et true alors coche la case sinon decoche la case
    document.getElementById("option1").checked = true
} else {
    document.getElementById("option1").checked = false
}

if (valeursound == "true") { //si sound et true alors coche la case sinon decoche la case
    document.getElementById("option2").checked = true
} else {
    document.getElementById("option2").checked = false
}


let clickSound = new Audio('sources/son/button.mp3'); // Son de clic pour les boutons
if (valeursound == "true") { 
    clickSound.play();
    clickSound.volume = 0.01; 
} else {
    let clickSound = null
}