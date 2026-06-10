setInterval(() => {
    if (paused) return; // bloque les monstres
    bougermonstres()
    console.log("truc")
}, 1000);
        let plateau = document.getElementById("plateau")
        let niveau = 0;
        let p = localStorage.getItem("perso")
        let animFrame;
        
        let separations = [8, 16, 24,24]
        let possedeclef = false
        let possedeépée = false
        // Charger les pièces depuis le localStorage (ou 0 si pas encore sauvegardé)
        let nbPieces = parseInt(localStorage.getItem("pieces")) || 0;

        let jeu = [
        [   "N",    "N",    "N",    "N", "N",     "N",     "N",    "N",
        "N",    "S",     "",     "",     "N",      "A",     "",     "N",  
        "N",    "N",    "",     "N",    "C",      "N",    "",     "N",
        "N",    "",     "",     "",     "",       "",     "P",     "N",
        "N",    "A",     "N",    "M",     "M",       "N",    "D",    "N",
        "N",    "N",    "N",    "N",    "N",      "N",    "N",    "N",
        ],
        [   "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N",
        "N","S","","N","é","","E","","","","N","","","","E","N",
        "N","N","","","N","","","N","N","","","","N","N","","N",
        "N","C","N","","","","N","","","N","","E","","N","","N",
        "N","E","N","N","M","N","N","E","","N","N","M","N","","","N",  
        "N","","","N","N","N","","","N","N","W","N","N","N","","N",
        "N","N","","","","","M","N","N","N","","","","M","","N",
        "N","N","N","","","","N","N","N","N","N","N","N","N","","N",
        "N","N","N","E","N","N","N","N","N","N","N","","N","","","N",
        "N","D","N","","","","","","","","","","E","","N","N",
        "N","","P","","","","","","","","N","","N","","","N",
        "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"
        ],
[
  "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N",

  "N","S","","A","","N","","","","","","A","","N","","","","","","","","A","","N",

  "N","M","N","N","","N","","N","N","N","","N","A","N","","N","N","N","A","N","N","N","","N",

  "N","","","","","N","","","","","","","","","","","","","","A","N","","","N",

  "N","","N","N","N","","N","N","N","","N","N","N","","N","N","N","","N","","N","","N","N",

  "N","","","","N","","E","","N","","","","N","","","","N","","N","","","","","N",

  "N","N","N","","N","N","N","","N","N","N","","N","N","N","A","N","E","N","N","N","N","","N",

  "N","","","","","","N","","E","","A","","","","N","","","","E","","","","","N",

  "N","N","N","N","N","E","N","N","N","N","N","N","N","","N","N","N","N","N","N","N","","N","N",

  "N","","","","N","","","","","","","","N","","","","E","","","N","N","E","","N",

  "N","","N","","N","N","N","N","N","","N","","N","N","N","N","N","","N","","N","N","","N",

  "N","E","N","","","","","","N","","N","","","","","","N","","N","","","","","N",

  "N","","N","N","N","N","N","","N","","N","N","N","N","N","","N","","N","N","N","N","P","N",

  "N","","","E","","C","N","","","","","","","é","N","E","","","N","","","","D","N",

  "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N",

],
[
  "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N",
    "N","S","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","N",
      "N","D","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A",,"N",
        "N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N",
]
]

        function mettreAJourPieces() {
            document.getElementById("nb-pieces").innerHTML = nbPieces;
            localStorage.setItem("pieces", nbPieces);
        }
let paused = false;

const pauseMenu = document.getElementById("pauseMenu");
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");
const menuBtn = document.getElementById("menuBtn");
const niveauBtn = document.getElementById("niveauBtn");
const openLevelsBtn = document.getElementById("niveauBtn");
const levelSelect = document.getElementById("levelSelect");

resumeBtn.addEventListener("click", () => {
    paused = false;
    pauseMenu.style.display = "none";
});

restartBtn.addEventListener("click", () => {
    location.reload();
});

menuBtn.addEventListener("click", () => {
    window.location.href = "menu.html";
});
openLevelsBtn.addEventListener("click", () => {
    levelSelect.style.display =
        levelSelect.style.display === "none" ? "block" : "none";
});

document.querySelectorAll(".levelBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        niveau = parseInt(btn.dataset.level);
        localStorage.setItem("niveau", niveau);

        resetimer();

        pauseMenu.style.display = "none";
        paused = false;
        levelSelect.style.display = "none";
    });
});
        function dessiner() {
            plateau.innerHTML = ""
            plateau.style.width = 50 * separations[niveau] + "px"
            let ligne
            ligne = document.createElement("div")
            for (let numcase = 0; numcase < jeu[niveau].length; numcase = numcase + 1) {
                if (numcase % separations[niveau] == 0) {
                    ligne = document.createElement("div")
                    plateau.appendChild(ligne)
                }
                let c = document.createElement("div")
                c.classList.add("case")
                ligne.appendChild(c)
                if (jeu[niveau][numcase] == "N") {
                    c.style.backgroundImage = "url('img/_case.png')"
                    c.style.backgroundSize = 'cover'
                } else {
                    if (jeu[niveau][numcase] == "S" || jeu[niveau][numcase] == "PS" || jeu[niveau][numcase] == "ES") {
                        c.style.backgroundImage = "url('img/" + p + "')"
                        c.style.backgroundSize = 'cover'
                    } else {
                        if (jeu[niveau][numcase] == "C") {
                            c.style.backgroundImage = "url('img/clef.png')"
                            c.style.backgroundSize = 'cover'
                        } else {
                            if (jeu[niveau][numcase] == "P") {
                                c.style.backgroundImage = "url('img/porte3.png')"
                                c.style.backgroundSize = 'cover'
                            } else {
                                if (jeu[niveau][numcase] == "D") {
                                    c.style.backgroundImage = "url('img/portail.png')"
                                    c.style.backgroundSize = 'cover'
                                } else {
                                    if (jeu[niveau][numcase] == "") {
                                        c.style.backgroundColor = "white"
                                    } else {
                                        if (jeu[niveau][numcase] == "PO") {
                                            c.style.backgroundImage = "url('img/porte.png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "E") {
                                            c.style.backgroundImage = "url('img/demogorgon.png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "é") {
                                            c.style.backgroundImage = "url('img/épée.gif')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "W") {
                                            c.style.backgroundImage = "url('img/5188 (2).png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "EO") {
                                            c.style.backgroundImage = "url('img/mort.png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "WO") {
                                            c.style.backgroundImage = "url('img/5193.png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                        if (jeu[niveau][numcase] == "A") {
                                            c.style.backgroundImage = "url('img/piece.png')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                            if (jeu[niveau][numcase] == "DO") {
                                            c.style.backgroundImage = "url('img/demodog.jpg')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                            if (jeu[niveau][numcase] == "M") {
                                            c.style.backgroundColor = "white"
                                        }
                                            if (jeu[niveau][numcase] == "MO") {
                                            c.style.backgroundImage = "url('img/demodog.jpg')"
                                            c.style.backgroundSize = 'cover'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            animFrame = requestAnimationFrame(dessiner);
        }

        const timerDisplay = document.getElementById('textetimer');
        const timerele = document.getElementById('timer')
        let timer;
        resetimer()
        timerDisplay.innerHTML = timer;

setInterval(function() {
    if (paused) return; //  met le timer en pause

    timer--;
    if (timer == 0) {
        window.location.href = "morttemps.html"
    } else {
        if (timer == 5) {
            timerele.style.backgroundColor = 'orange'
        }
        if (timer == 2) {
            timerele.style.backgroundColor = 'red'
        }
    }
    timerDisplay.innerHTML = timer;
}, 1000);

        function resetimer() {
            timerele.style.backgroundColor = 'white'
            if (niveau == 0) {
                timer = 15
            } else {
                if (niveau == 1) {
                    timer = 30
                }
                else {
                if (niveau == 2) {
                    timer = 75
                }                else {
                if (niveau == 3) {
                    timer = 15
                }
            }
        }
    }
        }

        dessiner();
        // Afficher le nombre de pièces sauvegardé dès le début
        mettreAJourPieces();

        function haut() {
            let pos = jeu[niveau].findIndex(e => e == "S" || e == "PS" || e == "ES");
            if (jeu[niveau][pos - separations[niveau]] == "D") {
                jeu[niveau][pos] = ""
                jeu[niveau][pos - separations[niveau]] = "S"
                setTimeout(() => {
                    niveau = niveau + 1
                    if (  niveau == 4) {
                        window.location.href = "partiegagné.html"
                    }
                    possedeépée = false
                    resetimer()
                }, 500)
            } else {
                if (jeu[niveau][pos - separations[niveau]] != "N" && jeu[niveau][pos - separations[niveau]] != "P") {
                    if (jeu[niveau][pos - separations[niveau]] == "C") {
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos - separations[niveau]] = "S"
                        possedeclef = true
                        let posPorte = jeu[niveau].findIndex(e => e == "P");
                        jeu[niveau][posPorte] = "PO"
                    } else if (jeu[niveau][pos - separations[niveau]] == "A") {
                        // Ramasser une pièce
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos - separations[niveau]] = "S"
                        nbPieces++
                        mettreAJourPieces()
                    } else {
                        if (jeu[niveau][pos] == "PS") {
                            jeu[niveau][pos] = "PO"
                        } else {
                            if (jeu[niveau][pos] == "ES") {
                                jeu[niveau][pos] = "EO"
                            } else {
                                jeu[niveau][pos] = ""
                            }
                        }
                        if (jeu[niveau][pos - separations[niveau]] == "PO") {
                            jeu[niveau][pos - separations[niveau]] = "PS"
                        } else {
                            if (jeu[niveau][pos - separations[niveau]] == "EO") {
                                jeu[niveau][pos - separations[niveau]] = "ES"
                            } else {
                                if (jeu[niveau][pos - separations[niveau]] == "é") {
                                    jeu[niveau][pos] = ""
                                    jeu[niveau][pos - separations[niveau]] = "S"
                                    possedeépée = true
                                } else{
                                    if (jeu[niveau][pos - separations[niveau]] == "M") {
                                        cancelAnimationFrame(animFrame);
                                        document.getElementsByClassName("case")[pos - separations[niveau]].classList.add("trou")
                                        document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                    
                                        setTimeout(()=> window.location.href = "mort.html",5000);
                                }else{
                                }if (jeu[niveau][pos - separations[niveau]] == "E") {
                                        if (possedeépée == true) {
                                            jeu[niveau][pos - separations[niveau]] = "ES"
                                        } else {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[pos - separations[niveau]].classList.add("perso")
                                              document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                                        }
                                    } else {
                                        jeu[niveau][pos - separations[niveau]] = "S"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function bas() {
            let pos = jeu[niveau].findIndex(e => e == "S" || e == "PS" || e == "ES");
            if (jeu[niveau][pos + separations[niveau]] == "D") {
                jeu[niveau][pos] = ""
                jeu[niveau][pos + separations[niveau]] = "S"
                setTimeout(() => {
                    niveau = niveau + 1
                    if (niveau  == 4) {
                        window.location.href = "partiegagné.html"
                    }
                    possedeépée = false
                    resetimer()
                }, 500)
            } else {
                if (jeu[niveau][pos + separations[niveau]] != "N" && jeu[niveau][pos + separations[niveau]] != "P") {
                    if (jeu[niveau][pos + separations[niveau]] == "C") {
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos + separations[niveau]] = "S"
                        possedeclef = true
                        let posPorte = jeu[niveau].findIndex(e => e == "P");
                        jeu[niveau][posPorte] = "PO"
                    } else if (jeu[niveau][pos + separations[niveau]] == "A") {
                        // Ramasser une pièce
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos + separations[niveau]] = "S"
                        nbPieces++
                        mettreAJourPieces()
                    } else {
                        if (jeu[niveau][pos] == "PS") {
                            jeu[niveau][pos] = "PO"
                        } else {
                            if (jeu[niveau][pos] == "ES") {
                                jeu[niveau][pos] = "EO"
                            } else {
                                jeu[niveau][pos] = ""
                            }
                        }
                        if (jeu[niveau][pos + separations[niveau]] == "PO") {
                            jeu[niveau][pos + separations[niveau]] = "PS"
                        } else {
                            if (jeu[niveau][pos + separations[niveau]] == "EO") {
                                jeu[niveau][pos + separations[niveau]] = "ES"
                            } else {
                                if (jeu[niveau][pos + separations[niveau]] == "é") {
                                    jeu[niveau][pos] = ""
                                    jeu[niveau][pos + separations[niveau]] = "S"
                                    possedeépée = true
                                    
                                } else {
                                    if (jeu[niveau][pos + separations[niveau]] == "M") {
                                        cancelAnimationFrame(animFrame);
                                        document.getElementsByClassName("case")[pos + separations[niveau]].classList.add("trou")
                                        document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                    
                                        setTimeout(()=> window.location.href = "mort.html",5000);
                                }else{
                                }
                                    if (jeu[niveau][pos + separations[niveau]] == "E") {
                                        if (possedeépée == true) {
                                            jeu[niveau][pos + separations[niveau]] = "ES"
                                        } else {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[pos + separations[niveau]].classList.add("perso")
                                              document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                                        }
                                    } else {
                                        jeu[niveau][pos + separations[niveau]] = "S"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function droite() {
            let pos = jeu[niveau].findIndex(e => e == "S" || e == "PS" || e == "ES");
            if (jeu[niveau][pos + 1] == "D") {
                jeu[niveau][pos] = ""
                jeu[niveau][pos + 1] = "S"
                setTimeout(() => {
                    niveau = niveau + 1
                    if (niveau  == 4) {
                        window.location.href = "partiegagné.html"
                    }
                    possedeépée = false
                    resetimer()
                }, 500)
            } else {
                if (jeu[niveau][pos + 1] != "N" && jeu[niveau][pos + 1] != "P") {
                    if (jeu[niveau][pos + 1] == "C") {
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos + 1] = "S"
                        possedeclef = true
                        let posPorte = jeu[niveau].findIndex(e => e == "P");
                        jeu[niveau][posPorte] = "PO"
                    } else if (jeu[niveau][pos + 1] == "A") {
                        // Ramasser une pièce
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos + 1] = "S"
                        nbPieces++
                        mettreAJourPieces()
                    } else {
                        if (jeu[niveau][pos] == "PS") {
                            jeu[niveau][pos] = "PO"
                        } else {
                            if (jeu[niveau][pos] == "ES") {
                                jeu[niveau][pos] = "EO"
                            } else {
                                jeu[niveau][pos] = ""
                            }
                        }
                        if (jeu[niveau][pos + 1] == "PO") {
                            jeu[niveau][pos + 1] = "PS"
                        } else {
                            if (jeu[niveau][pos + 1] == "EO") {
                                jeu[niveau][pos + 1] = "ES"
                            } else {
                                if (jeu[niveau][pos + 1] == "é") {
                                    jeu[niveau][pos] = ""
                                    jeu[niveau][pos + 1] = "S"
                                    possedeépée = true
                                    let posEnemy = jeu[niveau].findIndex(e => e == "E");
                                    jeu[niveau][posEnemy] = "EO"
                                } else {
                                    if (jeu[niveau][pos + 1] == "M") {
                                        cancelAnimationFrame(animFrame);
                                        document.getElementsByClassName("case")[pos + 1].classList.add("trou")
                                        document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                    
                                        setTimeout(()=> window.location.href = "mort.html",5000);
                                }else{
                                }
                                    if (jeu[niveau][pos + 1] == "E") {
                                        if (possedeépée == true) {
                                            jeu[niveau][pos + 1] = "ES"
                                        } else {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[pos + 1].classList.add("perso")
                                              document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                                        }
                                    } else {
                                        jeu[niveau][pos + 1] = "S"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function gauche() {
            let pos = jeu[niveau].findIndex(e => e == "S" || e == "PS" || e == "ES");
            if (jeu[niveau][pos - 1] == "D") {
                jeu[niveau][pos] = ""
                jeu[niveau][pos - 1] = "S"
                setTimeout(() => {
                    niveau = niveau + 1
                    if (niveau  == 4) {
                        window.location.href = "partiegagné.html"
                    }
                    possedeépée = false
                    resetimer()
                }, 500)
            } else {
                // Bloquer le mouvement si ennemis, bloc a gauche
                if (jeu[niveau][pos - 1] != "N" && jeu[niveau][pos - 1] != "P") {
                    // Si le joueur se déplace sur une clé
                    if (jeu[niveau][pos - 1] == "C") {
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos - 1] = "S"
                        possedeclef = true
                        let posPorte = jeu[niveau].findIndex(e => e == "P");
                        jeu[niveau][posPorte] = "PO"
                    } else if (jeu[niveau][pos - 1] == "A") {
                        // Ramasser une pièce
                        jeu[niveau][pos] = ""
                        jeu[niveau][pos - 1] = "S"
                        nbPieces++
                        mettreAJourPieces()
                    } else {
                        // Si le joueur est sur une porte ouverte, on remet la porte ouverte
                        if (jeu[niveau][pos] == "PS") {
                            jeu[niveau][pos] = "PO"
                        } else {
                            if (jeu[niveau][pos] == "ES") {
                                jeu[niveau][pos] = "EO"
                            } else {
                                jeu[niveau][pos] = ""
                            }
                        }
                        // Si le joueur se déplace sur une porte ouverte
                        if (jeu[niveau][pos - 1] == "PO") {
                            jeu[niveau][pos - 1] = "PS"
                        } else {
                            if (jeu[niveau][pos - 1] == "EO") {
                                jeu[niveau][pos - 1] = "ES"
                            } else {
                                // Si le joueur se déplace sur une épée
                                if (jeu[niveau][pos - 1] == "é") {
                                    jeu[niveau][pos] = ""
                                    jeu[niveau][pos - 1] = "S"
                                    possedeépée = true
                                } else {
                                    if (jeu[niveau][pos - 1] == "M") {
                                        cancelAnimationFrame(animFrame);
                                        document.getElementsByClassName("case")[pos - 1].classList.add("trou")
                                        document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                    
                                        setTimeout(()=> window.location.href = "mort.html",5000);
                                }else{
                                }
                                 // Si le joueur se déplace sur un monstre
                                    if (jeu[niveau][pos - 1] == "E") {
                                        if (possedeépée == true) {
                                            jeu[niveau][pos - 1] = "ES"
                                        } else {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[pos - 1].classList.add("perso")
                                              document.getElementsByClassName("case")[pos].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                                        }
                                    } else {
                                        jeu[niveau][pos - 1] = "S"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function bougermonstres() {
            for (let index = 0; index < jeu[niveau].length; index++) {
                if (jeu[niveau][index] == 'E') {
                    let peutbouger = false;
                    let essais = 0;// évite boucle infinie
                    while (peutbouger == false && essais < 10) {
                        essais++;
                        let nombre = Math.floor(Math.random() * 4);
                        // HAUT
                        if (nombre == 0) {
                            if (jeu[niveau][index - separations[niveau]] == "") {
                                jeu[niveau][index] = "";
                                jeu[niveau][index - separations[niveau]] = "E";
                                peutbouger = true;
                            } else if (jeu[niveau][index - separations[niveau]] == "E" || jeu[niveau][index - separations[niveau]] == "EO") {
                                peutbouger = true;
                            } else if (jeu[niveau][index - separations[niveau]] == "S") {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[index].classList.add("perso")
                                              document.getElementsByClassName("case")[index - separations[niveau]].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                            }
                        }
                        // BAS
                        if (nombre == 1) {
                            if (jeu[niveau][index + separations[niveau]] == "") {
                                jeu[niveau][index] = "";
                                jeu[niveau][index + separations[niveau]] = "E";
                                peutbouger = true;
                            } else if (jeu[niveau][index + separations[niveau]] == "E" || jeu[niveau][index + separations[niveau]] == "EO") {
                                peutbouger = true;
                            } else if (jeu[niveau][index + separations[niveau]] == "S") {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[index].classList.add("perso")
                                              document.getElementsByClassName("case")[index + separations[niveau]].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                            }
                        }
                        // GAUCHE
                        if (nombre == 2) {
                            if (jeu[niveau][index - 1] == "") {
                                jeu[niveau][index] = "";
                                jeu[niveau][index - 1] = "E";
                                peutbouger = true;
                            } else if (jeu[niveau][index - 1] == "E" || jeu[niveau][index - 1] == "EO") {
                                peutbouger = true;
                            } else if (jeu[niveau][index - 1] == "S") {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[index].classList.add("perso")
                                              document.getElementsByClassName("case")[index - 1].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                            }
                        }
                        // DROITE
                        if (nombre == 3) {
                            if (jeu[niveau][index + 1] == "") {
                                jeu[niveau][index] = "";
                                jeu[niveau][index + 1] = "E";
                                peutbouger = true;
                            } else if (jeu[niveau][index + 1] == "E" || jeu[niveau][index + 1] == "EO") {
                                peutbouger = true;
                            } else if (jeu[niveau][index + 1] == "S") {
                                            cancelAnimationFrame(animFrame);
                                             document.getElementsByClassName("case")[index].classList.add("perso")
                                              document.getElementsByClassName("case")[index + 1].style.backgroundImage = 'none'
                                             setTimeout(()=> window.location.href = "mort.html",5000);
                            }
                        }
                    }
                }
            }
        }

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        paused = !paused;

        if (paused) {
            pauseMenu.style.display = "flex";
        } else {
            pauseMenu.style.display = "none";
        }
    }

    if (paused) return; //bloque les touches

    if (event.key === 'ArrowUp') haut();
    if (event.key === 'ArrowDown') bas();
    if (event.key === 'ArrowLeft') gauche();
    if (event.key === 'ArrowRight') droite();

    event.preventDefault();
});