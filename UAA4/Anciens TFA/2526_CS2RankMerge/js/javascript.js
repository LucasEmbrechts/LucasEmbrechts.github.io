// ==============================================================================
// MAËL [PARTIE 1] : Les bases et la config
// ==============================================================================

// Correction des chemins et de la casse exacte selon ton dossier "sources"
const imagesGrades = {
    2: 'sources/SILVER III.png',
    4: 'sources/Gold Nova I.png',
    8: 'sources/Gold Nova II.png',
    16: 'sources/Gold Nova III.png',
    32: 'sources/Gold Nova master.png',
    64: 'sources/Master guardian.png',
    128: 'sources/Master Guardian II.png',
    256: 'sources/master guardian elite.png',
    512: 'sources/Distinguished Master Guardian.png',
    1024: 'sources/eagle master.png',
    2048: 'sources/global elite.png'
};

// Nos variables principales pour retenir l'état de la partie
let niveau = 0 // 0 = 4x4, 1 = 6x6, 2 = 8x8
let point = 0 // Le score
let casesAnimees = []; // Sert à retenir quelles cases viennent d'apparaître pour l'anim CSS

// La config de nos 3 tailles de grilles. 
// "" veut dire que la case est vide au départ.
let niveaux = [
    {
        "musique": "csmusique.mp3",
        "nom": "Case4x4", // Grille standard 4x4
        "plateau": ["", "", "", "",
                    "", "", "", "",
                    "", "", "", "",
                    "", "", "", ""]

    },
    {
        "musique": "csmusique.mp3",
        "nom": "Case6x6", // Grille moyenne 6x6
        "plateau": ["", "", "", "", "", "",
                    "", "", "", "", "", "",
                    "", "", "", "", "", "",
                    "", "", "", "", "", "",
                    "", "", "", "", "", "",
                    "", "", "", "", "", ""]
    },
    {
        "musique": "csmusique.mp3",
        "nom": "Case8x8", // Grande grille 8x8
        "plateau": ["", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", ""]

    },
]

// On affiche la grille vide au premier chargement de la page
dessinerPlateau()

// ==============================================================================
// TIMÉO [PARTIE 2] : La navigation dans les menus
// ==============================================================================

// Fonction pour lancer la partie quand on clique sur "Jouer"
function afficherJeu() {
    document.getElementById('ecran-menu').style.display = 'none'; // On planque le menu
    document.getElementById('ecran-jeu').style.display = 'block'; // On affiche le jeu

    // On vide bien le tableau avant de commencer
    let plateau = niveaux[niveau]['plateau'];
    for (let i = 0; i < plateau.length; i++) plateau[i] = "";
    
    casesAnimees = []; 
    
    // On fait spawner les deux premières cases pour démarrer
    ajouterNombreAleatoire();
    ajouterNombreAleatoire();
    dessinerPlateau(); 
}

// Affiche les crédits
function afficherCredits() {
    document.getElementById('ecran-menu').style.display = 'none';
    document.getElementById('ecran-credits').style.display = 'block';
}

// Affiche la page des règles
function afficherRegles() {
    document.getElementById('ecran-menu').style.display = 'none';
    document.getElementById('ecran-regles').style.display = 'block';
}

// ==============================================================================
// MAËL [PARTIE 3] : Le reset et les options de grille
// ==============================================================================

// Raccourci pour relancer une game proprement
function nouvellepartie() {
    retourAuMenu() 
    afficherJeu() 
}

// La fonction qui reset absolument tout et nous renvoie à l'accueil
function retourAuMenu() {
    // On cache toutes les vues possibles
    document.getElementById('ecran-jeu').style.display = 'none';
    document.getElementById('ecran-credits').style.display = 'none';
    document.getElementById('ecran-regles').style.display = 'none';
    document.getElementById('écran-séléction-niveau').style.display = 'none';
    document.getElementById('ecran-menu').style.display = 'block';
    
    // On vire les textes de fin et le flou
    document.getElementById('défaite-texte').style.display = 'none';
    document.getElementById('victoire-texte').style.display = 'none';
    document.getElementById('Grille-de-jeu').style.filter = 'blur(0px)';
    
    // Remise à zéro du score
    point = 0;
    document.getElementById('score').innerHTML = 0;

    let grille = document.getElementById('Grille-de-jeu');
    grille.className = '';
    grille.innerHTML = '';
}

// Affiche le menu pour choisir la taille
function Choisir_Niveau() {
    document.getElementById('ecran-jeu').style.display = 'none';
    document.getElementById('écran-séléction-niveau').style.display = 'block';
}

// Quand le joueur clique sur 4x4, 6x6 ou 8x8
function choisir(niveauIndex) {
    niveau = niveauIndex; 
    document.getElementById('écran-séléction-niveau').style.display = 'none';
    document.getElementById('ecran-jeu').style.display = 'block';

    let ecranJeu = document.getElementById('ecran-jeu');
    
    // Les chemins restent "sources/" ici car l'injection se fait depuis index.html (à la racine)
    if (niveau === 0) { ecranJeu.style.backgroundImage = "url('sources/grille-4x4.jpg')"; } 
    else if (niveau === 1) { ecranJeu.style.backgroundImage = "url('sources/grille-6x6.jpg')"; } 
    else if (niveau === 2) { ecranJeu.style.backgroundImage = "url('sources/grille-8x8.jpg')"; }

    // On vide le tableau du niveau sélectionné
    let plateau = niveaux[niveau]['plateau'];
    for (let i = 0; i < plateau.length; i++) plateau[i] = "";
    
    retourAuMenu(); 
    afficherJeu();  
}

// ==============================================================================
// TIMÉO [PARTIE 4] : Mouvements Droite / Gauche
// ==============================================================================

function droite() {
    let plateau = niveaux[niveau]['plateau'];
    let taille = Math.sqrt(plateau.length); 
    let bouge = false; // Pour savoir si on a vraiment déplacé un truc

    for (let ligne = 0; ligne < taille; ligne++) {
        for (let col = taille - 2; col >= 0; col--) {
            let index = ligne * taille + col; 
            
            if (plateau[index] != "") { 
                let indexCible = index;
                // On regarde jusqu'où la case peut glisser à droite sans rien toucher
                while (indexCible + 1 < (ligne + 1) * taille && plateau[indexCible + 1] === "") {
                    indexCible++; 
                }
                
                // Si on a bougé
                if (indexCible != index) {
                    plateau[indexCible] = plateau[index]; 
                    plateau[index] = ""; 
                    bouge = true; 
                }
                
                // Si la case touche sa jumelle, on les fusionne
                if (plateau[indexCible] == plateau[indexCible + 1]) {
                    plateau[indexCible] = "" 
                    plateau[indexCible + 1] = plateau[indexCible + 1] * 2 
                    ajouterPoint() 
                    bouge = true;
                }
            }
        }
    }
    // Si la grille a bougé, on ajoute un nouveau nombre
    if (bouge) { ajouterNombreAleatoire(); }
    gererVictoire(); gererDefaite(); dessinerPlateau();
}

function gauche() {
    let plateau = niveaux[niveau]['plateau'];
    let taille = Math.sqrt(plateau.length);
    let bouge = false; 

    for (let ligne = 0; ligne < taille; ligne++) {
        for (let col = 1; col < taille; col++) {
            let index = ligne * taille + col;
            
            if (plateau[index] !== "") {
                let indexCible = index;
                // On glisse le plus à gauche possible
                while (indexCible - 1 >= ligne * taille && plateau[indexCible - 1] === "") {
                    indexCible--;
                }
                if (indexCible !== index) {
                    plateau[indexCible] = plateau[index];
                    plateau[index] = "";
                    bouge = true; 
                }
                // Fusion
                if (plateau[indexCible] == plateau[indexCible - 1]) {
                    plateau[indexCible] = ""
                    plateau[indexCible - 1] = plateau[indexCible - 1] * 2
                    ajouterPoint()
                    bouge = true;
                }
            }
        }
    }
    if (bouge) { ajouterNombreAleatoire(); }
    gererVictoire(); gererDefaite(); dessinerPlateau();
}

// ==============================================================================
// MAËL [PARTIE 5] : Mouvements Haut / Bas
// ==============================================================================

function haut() {
    let plateau = niveaux[niveau]['plateau'];
    let taille = Math.sqrt(plateau.length);
    let bouge = false; 

    for (let col = 0; col < taille; col++) {
        for (let ligne = 1; ligne < taille; ligne++) {
            let index = ligne * taille + col;
            if (plateau[index] != "") {
                let indexCible = index;
                // On remonte la colonne tant que c'est vide au-dessus
                while (indexCible - taille >= 0 && plateau[indexCible - taille] === "") {
                    indexCible -= taille;
                }
                if (indexCible != index) {
                    plateau[indexCible] = plateau[index];
                    plateau[index] = "";
                    bouge = true; 
                }
                // Fusion verticale
                if (plateau[indexCible] == plateau[indexCible - taille]) {
                    plateau[indexCible] = ""
                    plateau[indexCible - taille] = plateau[indexCible - taille] * 2
                    ajouterPoint()
                    bouge = true;
                }
            }
        }
    }
    if (bouge) { ajouterNombreAleatoire(); }
    gererVictoire(); gererDefaite(); dessinerPlateau();
}

function bas() {
    let plateau = niveaux[niveau]['plateau'];
    let taille = Math.sqrt(plateau.length);
    let bouge = false; 

    for (let col = 0; col < taille; col++) {
        for (let ligne = taille - 2; ligne >= 0; ligne--) {
            let index = ligne * taille + col;
            if (plateau[index] != "") {
                let indexCible = index;
                // On descend la case le plus bas possible
                while (indexCible + taille < plateau.length && plateau[indexCible + taille] === "") {
                    indexCible += taille;
                }
                if (indexCible != index) {
                    plateau[indexCible] = plateau[index];
                    plateau[index] = "";
                    bouge = true; 
                }
                // Fusion avec celle du dessous
                if (plateau[indexCible] == plateau[indexCible + taille]) {
                    plateau[indexCible] = ""
                    plateau[indexCible + taille] = plateau[indexCible + taille] * 2
                    ajouterPoint()
                    bouge = true;
                }
            }
        }
    }
    if (bouge) { ajouterNombreAleatoire(); }
    gererVictoire(); gererDefaite(); dessinerPlateau();
}

// ==============================================================================
// TIMÉO [PARTIE 6] : Écoute du clavier et rendu visuel
// ==============================================================================

// On écoute le clavier (Flèches directionnelles + ZQSD pour les gamers)
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'z') haut();
    if (event.key === 'ArrowDown' || event.key === 's') bas();
    if (event.key === 'ArrowLeft' || event.key === 'q') gauche();
    if (event.key === 'ArrowRight' || event.key === 'd') droite();
    event.preventDefault(); // Empêche la page web de scroller avec les flèches
});

// La grosse fonction qui met à jour le visuel de la grille à l'écran
function dessinerPlateau() {
    let grille = document.getElementById("Grille-de-jeu");
    grille.innerHTML = ""; // On nettoie le HTML de la grille
    grille.className = ''; 
    
    // On applique la bonne classe CSS pour que les cases rentrent bien
    if (niveau === 1) { grille.classList.add("grille-6x6"); } 
    else if (niveau === 2) { grille.classList.add("grille-8x8"); }

    let plateau = niveaux[niveau]['plateau'];
    
    // On génère les divs HTML en lisant notre tableau JS
    for (let i = 0; i < plateau.length; i++) {
        let nouvelleCase = document.createElement("div"); 
        nouvelleCase.className = "grid-cell"; 

        if (plateau[i] !== "") { 
            let img = document.createElement("img"); 
            img.src = imagesGrades[plateau[i]]; // On va chercher la bonne image CS2
            img.alt = plateau[i]; 
            nouvelleCase.appendChild(img); 

            // Si la case vient de pop, on lui met son effet d'animation
            if (casesAnimees.includes(i)) {
                nouvelleCase.classList.add("pop-animation");
            }
        }
        grille.appendChild(nouvelleCase); 
    }
    casesAnimees = []; // On vide la liste maintenant que c'est affiché
}

// ==============================================================================
// MAËL [PARTIE 7] : Apparition aléatoire et check de défaite
// ==============================================================================

function ajouterNombreAleatoire() {
    let plateau = niveaux[niveau]['plateau'];
    let casesVides = []; 

    // On liste toutes les cases où y'a rien
    for (let i = 0; i < plateau.length; i++) {
        if (plateau[i] === "") { casesVides.push(i); }
    }

    if (casesVides.length > 0) {
        // On prend une case vide au pif et on y met un 2 (souvent) ou un 4 (plus rare)
        let indexHasard = casesVides[Math.floor(Math.random() * casesVides.length)];
        plateau[indexHasard] = Math.random() < 0.9 ? 2 : 4;
        casesAnimees.push(indexHasard); 
    }
}

// Check si le joueur est coincé (plus aucun mouvement possible)
function verifierDefaite() {
    let plateau = niveaux[niveau]['plateau'];
    let taille = Math.sqrt(plateau.length);

    // S'il reste de la place, c'est pas perdu
    for (let i = 0; i < plateau.length; i++) {
        if (plateau[i] === "") return false;
    }

    // On check s'il reste des fusions possibles horizontalement
    for (let ligne = 0; ligne < taille; ligne++) {
        for (let col = 0; col < taille - 1; col++) {
            let index = ligne * taille + col;
            if (plateau[index] === plateau[index + 1]) return false;
        }
    }

    // Pareil, mais verticalement
    for (let col = 0; col < taille; col++) {
        for (let ligne = 0; ligne < taille - 1; ligne++) {
            let index = ligne * taille + col;
            if (plateau[index] === plateau[index + taille]) return false;
        }
    }

    return true; // Si on arrive là, c'est game over
}

// ==============================================================================
// TIMÉO [PARTIE 8] : Fin de game et affichage du score
// ==============================================================================

function gererDefaite() {
    // Si c'est perdu, on floute le fond et on affiche l'écran de défaite
    if (verifierDefaite()) {
        document.getElementById('Grille-de-jeu').style.filter = 'blur(5px)'; 
        document.getElementById('défaite-texte').style.display = 'flex'; 
    }
}

// On check juste si le grade max (2048) est dans le tableau
function verifierVictoire() {
    let plateau = niveaux[niveau]['plateau'];
    for (let i = 0; i < plateau.length; i++) {
        if (plateau[i] === 2048) return true;
    }
    return false;
}

function gererVictoire() {
    if (verifierVictoire()) {
        document.getElementById('Grille-de-jeu').style.filter = 'blur(5px)';
        document.getElementById('victoire-texte').style.display = 'flex'; 
    }
}

// Le petit effet visuel sympa : le "+2" qui s'envole au-dessus du score
function afficherAnimationScore() {
    let scoreElement = document.getElementById('score');
    let rect = scoreElement.getBoundingClientRect(); 

    let popup = document.createElement('span'); 
    popup.textContent = '+2'; 
    popup.className = 'score-popup'; 
    
    // On place le +2 pile poil au-dessus du score
    popup.style.left = rect.left + rect.width / 2 + 'px';
    popup.style.top = rect.top + 'px';

    document.body.appendChild(popup); 

    // On nettoie le DOM après 800ms pour pas le polluer
    setTimeout(() => { popup.remove(); }, 800);
}

// Fait grimper le compteur
function ajouterPoint() {
    point += 2; 
    document.getElementById('score').textContent = point; 
    afficherAnimationScore(); 
}
