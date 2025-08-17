//Global variables for main system
var totalDies = 0;
var playingPlayer = 1;
var debug = 0;
var des1;
var des2;
var titre = document.getElementById("boardTitle");
var boardSansMaison = document.getElementById("boardSansMaison");
var boardUneMaison = document.getElementById("boardUneMaison");
var boardDeuxMaison = document.getElementById("boardDeuxMaison");
var boardTroisMaison = document.getElementById("boardTroisMaison");
var boardQuatreMaison = document.getElementById("boardQuatreMaison");
var shopButton = document.getElementById("shopButton");
var doubleButton = document.getElementById("doubleButton");
var playername1 = sessionStorage.getItem("player1");
var playername2 = sessionStorage.getItem("player2");
var playername3 = sessionStorage.getItem("player3");
var playername4 = sessionStorage.getItem("player4");
var argentPot = 0;
var unlockBuild = 0;

//Get players data
function Joueur(nomJoueur, argent, noCase, couleur, status, chancesPrison, statusPrison) {
    "use strict";
    this.nomJoueur = nomJoueur;
    this.argent = argent;
    this.noCase = noCase;
    this.couleur = couleur;
    this.status = status;
    this.chancesPrison = chancesPrison;
    this.statusPrison = statusPrison;

    if (debug === 1) {
        console.log("Function Joueur() has been loaded to get player data");
    }
}

//Initiate players
//nomJoueur, sommeDepart, noCase, couleur, status, chancesPrison, statusPrison
var joueur1 = new Joueur(playername1, 1250, 1, "#ef5817", 1, 3, 0);
var joueur2 = new Joueur(playername2, 1250, 1, "#3366ff", 1, 3, 0);
var joueur3 = new Joueur(playername3, 1250, 1, "yellow", 1, 3, 0);
var joueur4 = new Joueur(playername4, 1250, 1, "#66ff33", 1, 3, 0);

//Get case data
function Case(nomCase, prix, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4) {
    "use strict";
    this.nomCase = nomCase;
    this.prix = prix;
    this.prixUneMaison = prixUneMaison;
    this.prixDeuxMaison = prixDeuxMaison;
    this.prixTroisMaison = prixTroisMaison;
    this.prixQuatreMaison = prixQuatreMaison;
    this.maisons = maisons;
    this.auteur = auteur;
    this.couleur = couleur;
    this.image = image;
    this.prixConstruire1 = prixConstruire1;
    this.prixConstruire2 = prixConstruire2;
    this.prixConstruire3 = prixConstruire3;
    this.prixConstruire4 = prixConstruire4;
    if (debug === 1) {
        console.log("Function Case() has been loaded to get case data");
    }
}

//nomCase, prix, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4
var case1 = new Case("Depart", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case2 = new Case("6A", 80, 25, 50, 75, 100, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 50, 50, 0, 0);
var case3 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case4 = new Case("6B", 100, 25, 50, 75, 110, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 75, 75, 0, 0);
var case5 = new Case("Taxes", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case6 = new Case("Gare1", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case7 = new Case("1G1", 120, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case8 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case9 = new Case("1G2", 140, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case10 = new Case("1G3", 140, 100, 120, 140, 160, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case11 = new Case("Allerprison", 500, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case12 = new Case("2G1", 160, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case13 = new Case("Eau", 180, 0, 0, 0, 0, 0, 0, "#ff5000", "/images/classes/4G1.jpg0", 0, 0, 0, 0);
var case14 = new Case("2G2", 160, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case15 = new Case("2G3", 180, 150, 160, 180, 210, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 140, 140, 0, 0);
var case16 = new Case("Gare2", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case17 = new Case("3G1", 180, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case18 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case19 = new Case("3G2", 180, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case20 = new Case("3G3", 200, 200, 210, 220, 240, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case21 = new Case("Parking", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case22 = new Case("4G1", 220, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 160, 160, 0, 0);
var case23 = new Case("4G2", 220, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 180, 180, 0, 0);
var case24 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case25 = new Case("4G3", 220, 220, 230, 240, 260, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 200, 200, 0, 0);
var case26 = new Case("Gare3", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case27 = new Case("5G1", 260, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 210, 210, 0, 0);
var case28 = new Case("5G2", 260, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 220, 220, 0, 0);
var case29 = new Case("Electricite", 240, 0, 0, 0, 0, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case30 = new Case("5G3", 280, 270, 280, 290, 310, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 240, 240, 0, 0);
var case31 = new Case("Prison", 500, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case32 = new Case("6G1", 300, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 300, 300, 0, 0);
var case33 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case34 = new Case("6G2", 300, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case35 = new Case("6G3", 300, 310, 320, 330, 350, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case36 = new Case("Gare4", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case37 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case38 = new Case("4TTA", 420, 360, 370, 380, 400, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);
var case39 = new Case("Taxes", 100, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case40 = new Case("4TTB", 440, 360, 370, 380, 410, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);


//Main game function, launching all side functions
function Game() {
    "use strict";
    var ps1 = document.getElementById("player1name");
    var ps2 = document.getElementById("player2name");
    var ps3 = document.getElementById("player3name");
    var ps4 = document.getElementById("player4name");
    if (debug === 1) {
        console.log("Player names are loaded");
    }
    randomNumberGenerator();
    if (debug === 1) {
        console.log("Function Game() called the randomNumberGenerator() function");
    }
    switch (playingPlayer) {
        case 1:
            if (debug === 1) {
                console.log("case 1 in switch(playerPlayer) has been selected");
            }
            if (joueur1.status == 1) {
                ps1.style.backgroundColor = joueur1.couleur;
                ps1.style.transition = "1s";
                ps2.style.backgroundColor = "#a6a3a3";
                ps2.style.transition = "1s";
                ps3.style.backgroundColor = "#a6a3a3";
                ps3.style.transition = "1s";
                ps4.style.backgroundColor = "#a6a3a3";
                ps4.style.transition = "1s";
                if (debug == 1) {
                    console.log("Playing player background colors are updated");
                }
                handleDefaultActions();
            } else {
                playingPlayer = playingPlayer + 1;
                Game();
            }
            break;
        case 2:
            if (joueur2.status == 1) {
                ps1.style.backgroundColor = "#a6a3a3";
                ps2.style.backgroundColor = joueur2.couleur;
                ps3.style.backgroundColor = "#a6a3a3";
                ps4.style.backgroundColor = "#a6a3a3";
                if (debug == 1) {
                    console.log("Playing player background colors are updated");
                }
                handleDefaultActions();
            } else {
                playingPlayer = playingPlayer + 1;
                Game();
            }
            break;
        case 3:
            if (joueur3.status == 1) {
                ps1.style.backgroundColor = "#a6a3a3";
                ps2.style.backgroundColor = "#a6a3a3";
                ps3.style.backgroundColor = joueur3.couleur;
                ps4.style.backgroundColor = "#a6a3a3";
                if (debug == 1) {
                    console.log("Playing player background colors are updated");
                }
                handleDefaultActions();
            } else {
                playingPlayer = playingPlayer + 1;
                Game();
            }
            break;
        case 4:
            if (joueur4.status == 1) {
                ps1.style.backgroundColor = "#a6a3a3";
                ps2.style.backgroundColor = "#a6a3a3";
                ps3.style.backgroundColor = "#a6a3a3";
                ps4.style.backgroundColor = joueur4.couleur;
                if (debug == 1) {
                    console.log("Playing player background colors are updated");
                }
                handleDefaultActions();
            } else {
                playingPlayer = playingPlayer + 1;
                Game();
            }
            break;
    }
}

//Launch default actions for each player
function handleDefaultActions() {
    addPlayerCases();
    checkPlayerCases();
    gestionPions();
    handleCases();
    if (debug === 1) {
        console.log("Handleling default actions for all cases");
    }
}

function startBuilding() {
    switch (playingPlayer) {
        case 1:
            build(joueur1);
            break;
        case 2:
            build(joueur2);
            break;
        case 3:
            build(joueur3);
            break;
        case 4:
            build(joueur4);
            break;
    }
    
}

function build(joueurEnCours) {
    var j = joueurEnCours;
    if (debug == 1) {
        console.log("Start building process");
    }
    if(checkProprityNumber(j) < 2) {
        clearCase();
        titre.innerHTML = "Construction";
        titre.style.backgroundColor = "#9ba2c9";
        boardSansMaison.innerHTML = "Vous n'avez pas de propriétés";
        boardUneMaison.innerHTML = "Essayez plus tard";
    } else {
        clearCase();
        titre.innerHTML = "Construction";
        titre.style.backgroundColor = "#9ba2c9";
        boardSansMaison.innerHTML = "Cliquez sur une case où vous";
        boardUneMaison.innerHTML = "voulez construire";
        unlockBuild = 1;
        retreiveClickedCase();
    }
}

function retreiveClickedCase(caseId) {
    switch(caseId) {
        case 2:
            alert("Case 6A selected");
            clearCase();
            boardSansMaison.innerHTML = "Êtes vous sure de vouloir";
            boardUneMaison.innerHTML = "construire sur cette parcelle?";
            break;
    }
    
}

function checkProprityNumber(j) {
    var i = 1;
    while(window["case" + i].auteur == j) {
        i++;
    }
    return i;
}

//Check if playing player is not undefined
function checkMaxPlayers() {
    if (playingPlayer > 4) {
        playingPlayer = 1;
    }
    if (debug == 1) {
        console.log("Checking if max players is reached");
    }
}

//Update player board location
function addPlayerCases() {
    if (debug == 1) {
        console.log("Updating total player cases (potition)");
    }
    switch (playingPlayer) {
        case 1:
            joueur1.noCase = joueur1.noCase + totalDies;
            break;
        case 2:
            joueur2.noCase = joueur2.noCase + totalDies;
            break;
        case 3:
            joueur3.noCase = joueur3.noCase + totalDies;
            break;
        case 4:
            joueur4.noCase = joueur4.noCase + totalDies;
            break;
    }
}

//Update player names
function updatePlayerNames() {
    document.getElementById("player1name").innerHTML = playername1 + " : " + joueur1.argent + "€";
    document.getElementById("player2name").innerHTML = playername2 + " : " + joueur2.argent + "€";
    document.getElementById("player3name").innerHTML = playername3 + " : " + joueur3.argent + "€";
    document.getElementById("player4name").innerHTML = playername4 + " : " + joueur4.argent + "€";
    document.getElementById("pricePotIndicator").innerHTML = argentPot + "€";
    if (debug === 1) {
        console.log("Updated player names and player money");
    }
}

//Remove all content from card holder
function clearCase() {
    titre.innerHTML = "";
    boardSansMaison.innerHTML = "";
    boardUneMaison.innerHTML = "";
    boardDeuxMaison.innerHTML = "";
    boardTroisMaison.innerHTML = "";
    boardQuatreMaison.innerHTML = "";
    shopButton.innerHTML = "";
    if (debug === 1) {
        console.log("Cleared information board");
    }
}

//Chance case title and color
function updateTitle() {
    titre.innerHTML = getNameCase();
    titre.style.backgroundColor = getTitleColor();
    if (debug === 1) {
        console.log("Update information board title");
    }
}

//Retreive the coresponding color from the player
function getTitleColor() {
    if (debug === 1) {
        console.log("Retrieve player color");
    }
    var p = window["case" + getPlayerLocation(playingPlayer)].couleur;
    return p;
}

//Retreive the location of the playing player
function getPlayerLocation(playingPlayer) {
    if (debug === 1) {
        console.log("Searching player location");
    }
    switch (playingPlayer) {
        case 1:
            return joueur1.noCase;
        case 2:
            return joueur2.noCase;
        case 3:
            return joueur3.noCase;
        case 4:
            return joueur4.noCase;
    }
}

//Retreive the name of the case where the currently playing player stands on
function getNameCase() {
    if (debug === 1) {
        console.log("Retrieve case name");
    }
    var p = window["case" + getPlayerLocation(playingPlayer)].nomCase;
    return p;
}

//Remove a player from the game
function setFaillite() {
    if (debug === 1) {
        console.log("Set a player as faillite");
    }
    clearCase();
    boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
    boardUneMaison.innerHTML = "Vous avez fait faillite.";
    boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + window["joueur" + playingPlayer].argent + ")";
    boardTroisMaison.innerHTML = "A été donné à " + window["case" + getPlayerLocation(playingPlayer)].auteur;
    givePaidPlayerMoney(window["joueur" + playingPlayer].argent, window["case" + getPlayerLocation(playingPlayer)].auteur);
    window["joueur" + playingPlayer].argent = 0;
    boardQuatreMaison.innerHTML = "Merci d'avoir joué";
    window["joueur" + playingPlayer].status = 0;
    window["joueur" + playingPlayer].argent = "Perdu : 0";
    document.getElementById("myBtn").style.display = "block";
    updatePlayerNames();
    nextPlayer();
}

//Show no money message in card board
function noMoney(joueurEnCours) {
    if (debug === 1) {
        console.log("Alert player for no money in information board");
    }
    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
    boardDeuxMaison.innerHTML = "Il vous manque " + (window["case" + getPlayerLocation(playingPlayer)].prix - joueurEnCours.argent) + "€";
    shopButton.innerHTML = "";
    document.getElementById("myBtn").style.display = "none";
    nextPlayer();
}


//Let the next player plays
function nextPlayer() {
    if (debug === 1) {
        console.log("Set the next player");
    }
    playingPlayer = playingPlayer + 1;
    checkMaxPlayers();
    updatePlayerNames();
    document.getElementById("myBtn").style.display = "block";
}

//Change the background color of the price tag
function setOwnColors() {
    if (debug === 1) {
        console.log("Set player color on board");
    }
    var i = document.getElementById("priceTag" + getPlayerLocation(playingPlayer));
    i.style.backgroundColor = window["joueur" + playingPlayer].couleur;
}

//Set the owner of a case with the coresponding text
function setProprety(joueurEnCours) {
    if (debug === 1) {
        console.log("Set the owner of the case and update information board");
    }
    joueurEnCours.argent = joueurEnCours.argent - window["case" + getPlayerLocation(playingPlayer)].prix;
    case4.auteur = joueurEnCours.nomJoueur;
    clearCase();
    boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
    boardUneMaison.innerHTML = "De cette classe";
    updatePlayerNames();
    setOwnColors();
    nextPlayer();
    doubleButton.innerHTML = "";
    document.getElementById("myBtn").style.display = "block";
}

//Pay an owner of a class and the corresponding messages
function paidOwner(joueurEnCours) {
    if (debug === 1) {
        console.log("Pay the owner of the case and update information board");
    }
    clearCase();
    boardSansMaison.innerHTML = "Vous avez payé " + window["case" + getPlayerLocation(playingPlayer)].prix + "€";
    joueurEnCours.argent = joueurEnCours.argent - window["case" + getPlayerLocation(playingPlayer)].prix;
    givePaidPlayerMoney(window["case" + getPlayerLocation(playingPlayer)].prix, window["case" + getPlayerLocation(playingPlayer)].auteur);
    boardUneMaison.innerHTML = "Vous avez maintenant " + joueurEnCours.argent + "€";
    boardDeuxMaison.innerHTML = window["case" + getPlayerLocation(playingPlayer)].auteur + "a maintenant " + getPlayerMoney(window["case" + getPlayerLocation(playingPlayer)].auteur) + "€";
    updatePlayerNames();
    nextPlayer();
    doubleButton.innerHTML = "";
    document.getElementById("myBtn").style.display = "block";
}

//Ask if a player want to pay for the class he stands on
function askPay(joueurEnCours) {
    if (debug === 1) {
        console.log("Ask the player to buy a case");
    }
    boardUneMaison.innerHTML = "Voulez-vous payer " + window["case" + getPlayerLocation(playingPlayer)].prix + "€ ?";
    boardDeuxMaison.innerHTML = "Il vous reste " + joueurEnCours.argent + "€ à dépenser";
    shopButton.innerHTML = "Acheter";
    doubleButton.innerHTML = "Rien faire";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('shopButton').onclick = function () {
        setProprety(joueurEnCours);
    };
}

//Alert a player that he has to pay an owner
function alwaysOwned(joueurEnCours) {
    if (debug === 1) {
        console.log("Alert player that case is already ownerd and update information board");
    }
    boardSansMaison.innerHTML = "Cette classe appartient à " + window["case" + getPlayerLocation(playingPlayer)].auteur;
    boardUneMaison.innerHTML = "vous devez payer " + window["case" + getPlayerLocation(playingPlayer)].prix + "€";
    boardDeuxMaison.innerHTML = "Il vous reste " + joueurEnCours.argent + "€ à dépenser";
    shopButton.innerHTML = "Payer";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('shopButton').onclick = function () {
        if (joueurEnCours.argent < window["case" + getPlayerLocation(playingPlayer)].prix) {
            setFaillite();
        } else {
            paidOwner(joueurEnCours);
        }
    };
}

//Ask to take a chance card
function chanceCaseHandle(joueurEnCours) {
    if (debug === 1) {
        console.log("Retrieve chance card information");
    }
    clearCase();
    updateTitle();
    doubleButton.innerHTML = "";
    boardSansMaison.innerHTML = "Cliquez sur le bouton";
    boardUneMaison.innerHTML = "Pour tirer une carte";
    shopButton.innerHTML = "Tirer une carte";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('shopButton').onclick = function () {
        updateChanceCard(joueurEnCours);
        doubleButton.innerHTML = "";
    };
}

//Ask the player to pay taxes and corresponding messages
function taxeCaseHandle(joueurEnCours) {
    if (debug === 1) {
        console.log("Handle taxe case and further updates from information board");
    }
    clearCase();
    updateTitle();
    boardSansMaison.innerHTML = "Vous devez payer " + window["case" + getPlayerLocation(playingPlayer)].prix + "€";
    boardUneMaison.innerHTML = "Vous avez encore " + joueurEnCours.argent + "€";
    shopButton.innerHTML = "Payer";
    document.getElementById("myBtn").style.display = "none";
    doubleButton.innerHTML = "";
    document.getElementById('shopButton').onclick = function () {
        if (joueurEnCours.argent < window["case" + getPlayerLocation(playingPlayer)].prix) {
            setFaillite();
        } else {
            clearCase();
            argentPot = argentPot + window["case" + getPlayerLocation(playingPlayer)].prix;
            boardSansMaison.innerHTML = "Vous avez payé " + window["case" + getPlayerLocation(playingPlayer)].prix + "€";
            joueurEnCours.argent = joueurEnCours.argent - window["case" + getPlayerLocation(playingPlayer)].prix;
            boardUneMaison.innerHTML = "Vous avez maintenant " + joueurEnCours.argent + "€";
            boardDeuxMaison.innerHTML = "Merci d'avoir payé";
            updatePlayerNames();
            nextPlayer();
            document.getElementById("myBtn").style.display = "block";
        }
    };
}

//Handle all cases actions
function actions(playingPlayers) {
    if (debug === 1) {
        console.log("Start handling main case system");
    }
    var joueurEnCours = playingPlayers;
    switch (playingPlayers.noCase) {
        case 1:
            if (debug == 1) {
                console.log("Start case selected");
            }
            clearCase();
            joueurEnCours.argent = joueurEnCours.argent + 1000;
            updateTitle();
            boardSansMaison.innerHTML = "Vous avez reçu 2000€";
            boardUneMaison.innerHTML = "Vous avez maintenant " + joueurEnCours.argent + "€";
            nextPlayer();
            break;
        case 2:
            clearCase();
            updateTitle();
            if (case2.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
                if (joueurEnCours.argent < case2.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 3:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 4:
            clearCase();
            updateTitle();
            if (case4.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
                if (joueurEnCours.argent < case4.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;

        case 5:
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            taxeCaseHandle(joueurEnCours);
            break;
        case 6:
            if (debug == 1) {
                console.log("Gare case selected");
            }
            clearCase();
            updateTitle();
            if (case6.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case6.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 7:
            if (debug == 1) {
                console.log("1G1 case selected");
            }
            clearCase();
            updateTitle();
            if (case7.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case7.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 8:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;

        case 9:
            if (debug == 1) {
                console.log("1G2 case selected");
            }
            clearCase();
            updateTitle();
            if (case9.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case9.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 10:
            if (debug == 1) {
                console.log("1G3 case selected");
            }
            clearCase();
            updateTitle();
            if (case10.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case10.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 11:
            if (debug == 1) {
                console.log("Prison case selected");
            }
            clearCase();
            updateTitle();
            if (joueurEnCours.statusPrison == 1) {
                document.getElementById("myBtn").style.display = "none";
                boardSansMaison.innerHTML = "Vous êtes en prison.";
                if (joueurEnCours.chancesPrison <= 0) {
                    boardUneMaison.innerHTML = "Vous devez payer pour sortir";
                    boardDeuxMaison.innerHTML = "Le montant s'élève à " + case11.prix + "€";
                    document.getElementById('shopButton').onclick = function () {
                        if (joueurEnCours.argent < case11.prix) {
                            clearCase();
                            boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                            boardUneMaison.innerHTML = "Vous avez fait faillite.";
                            boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueurEnCours.argent + ")";
                            boardTroisMaison.innerHTML = "A été donné à la banque";
                            joueurEnCours.argent = 0;
                            boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                            updatePlayerNames();
                            setFaillite();
                        } else {
                            clearCase();
                            boardSansMaison.innerHTML = "Vous avez payé " + case11.prix + "€";
                            joueurEnCours.argent = joueurEnCours.argent - case11.prix;
                            boardUneMaison.innerHTML = "Vous avez maintenant " + joueurEnCours.argent + "€";
                            boardDeuxMaison.innerHTML = "Vous êtes maintenant libre";
                            joueurEnCours.statusPrison = 0;
                            joueurEnCours.chancesPrison = 3;
                            updatePlayerNames();
                            nextPlayer();
                            doubleButton.innerHTML = "";
                            document.getElementById("myBtn").style.display = "block";
                        }
                    };
                } else {
                    boardSansMaison.innerHTML = "Vous pouvez jouer double";
                    boardUneMaison.innerHTML = "Cliquez pour continuer";
                    randomNumberGenerator();
                    if (des1 == des2) {
                        document.getElementsById('doubleButton').onclick = function () {
                            clearCase();
                            boardSansMaison.innerHTML = "Vous avez joué double (" + des1 + " et " + des2 + ")";
                            boardUneMaison.innerHTML = "Vous êtes maintenant libre";
                            boardDeuxMaison.innerHTML = "Vous pouvez rejouer au prochain tour";
                            joueurEnCours.statusPrison = 0;
                            joueurEnCours.chancesPrison = 3;
                            nextPlayer();
                            doubleButton.innerHTML = "";
                            document.getElementById("myBtn").style.display = "block";
                        };
                    } else {
                        clearCase();
                        boardSansMaison.innerHTML = "Vous n'avez pas joué double (" + des1 + " et " + des2 + ")";
                        boardUneMaison.innerHTML = "Vous devez rester en prison"
                        boardDeuxMaison.innerHTML = "Il vous reste " + joueurEnCours.chancesPrison + " tentatives";
                        boardTroisMaison.innerHTML = "Vous passez votre tour";
                        joueurEnCours.chancesPrison = joueurEnCours.chancesPrison - 1;
                        nextPlayer();
                        doubleButton.innerHTML = "";
                        document.getElementById("myBtn").style.display = "block";
                    }
                }
            } else {
                boardSansMaison.innerHTML = "Vous êtes en visite.";
                boardUneMaison.innerHTML = "Rien ne se passe";
                doubleButton.innerHTML = "";
                nextPlayer();
                document.getElementById("myBtn").style.display = "block";
            }
            break;
        case 12:
            if (debug == 1) {
                console.log("2G1 case selected");
            }
            clearCase();
            updateTitle();
            if (case12.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case12.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 13:
            if (debug == 1) {
                console.log("Water case selected");
            }
            clearCase();
            updateTitle();
            if (case13.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case13.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;

        case 14:
            if (debug == 1) {
                console.log("2G2 case selected");
            }
            clearCase();
            updateTitle();
            if (case14.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case14.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 15:
            if (debug == 1) {
                console.log("2G3 case selected");
            }
            clearCase();
            updateTitle();
            if (case15.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case15.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 16:
            if (debug == 1) {
                console.log("Gare case selected");
            }
            clearCase();
            updateTitle();
            if (case16.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case16.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 17:
            if (debug == 1) {
                console.log("3G1 case selected");
            }
            clearCase();
            updateTitle();
            if (case17.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case17.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;

        case 18:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 19:
            if (debug == 1) {
                console.log("3G2 case selected");
            }
            clearCase();
            updateTitle();
            if (case19.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case19.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;

        case 20:
            if (debug == 1) {
                console.log("3G3 case selected");
            }
            clearCase();
            updateTitle();
            if (case20.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case20.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 21:
            if (debug == 1) {
                console.log("Parking gratuit case selected");
            }
            clearCase();
            updateTitle();
            boardSansMaison.innerHTML = "Vous avez reçu " + argentPot + "€";
            boardUneMaison.innerHTML = "Votre tour est terminé";
            joueurEnCours.argent = joueurEnCours.argent + argentPot;
            argentPot = 0;
            updatePlayerNames();
            nextPlayer();
            doubleButton.innerHTML = "";
            break;
        case 22:
            if (debug == 1) {
                console.log("4G1 case selected");
            }
            clearCase();
            updateTitle();
            if (case22.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case22.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;

        case 23:
            if (debug == 1) {
                console.log("4G2 case selected");
            }
            clearCase();
            updateTitle();
            if (case23.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case23.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 24:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 25:
            if (debug == 1) {
                console.log("4G3 case selected");
            }
            clearCase();
            updateTitle();
            if (case25.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case25.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 26:
            if (debug == 1) {
                console.log("Gare case selected");
            }
            clearCase();
            updateTitle();
            if (case26.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case26.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 27:
            if (debug == 1) {
                console.log("5G1 Case selected");
            }
            clearCase();
            updateTitle();
            if (case27.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case27.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 28:
            if (debug == 1) {
                console.log("5G2 Case selected");
            }
            clearCase();
            updateTitle();
            if (case28.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case28.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 29:
            if (debug == 1) {
                console.log("Electricty Case selected");
            }
            clearCase();
            updateTitle();
            if (case29.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueurEnCours.argent < case29.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 30:
            if (debug == 1) {
                console.log("5G3 Case selected");
            }
            clearCase();
            updateTitle();
            if (case30.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case30.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 31:
            if (debug == 1) {
                console.log("GoPrison Case selected");
            }
            clearCase();
            updateTitle();
            boardSansMaison.innerHTML = "Vous allez directement en prison";
            boardUneMaison.innerHTML = "Votre tour est terminé";
            joueurEnCours.statusPrison = 1;
            joueurEnCours.noCase = 11;
            gestionPions();
            nextPlayer();
            doubleButton.innerHTML = "";
            break;
        case 32:
            if (debug == 1) {
                console.log("6G1 Case selected");
            }
            clearCase();
            updateTitle();
            if (case32.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case32.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 33:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 34:
            if (debug == 1) {
                console.log("6G2 Case selected");
            }
            clearCase();
            updateTitle();
            if (case34.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case34.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 35:
            if (debug == 1) {
                console.log("6G3 Case selected");
            }
            clearCase();
            updateTitle();
            if (case35.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case35.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 36:
            if (debug == 1) {
                console.log("Gare Case selected");
            }
            clearCase();
            updateTitle();
            if (case36.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case36.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 37:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 38:
            if (debug == 1) {
                console.log("4TTA Case selected");
            }
            clearCase();
            updateTitle();
            if (case38.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case38.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
        case 39:
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            taxeCaseHandle(joueurEnCours);
            break;
        case 40:
            if (debug == 1) {
                console.log("4TTA Case selected");
            }
            clearCase();
            updateTitle();
            if (case40.auteur == 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                if (joueurEnCours.argent < case40.prix) {
                    noMoney(joueurEnCours);
                } else {
                    askPay(joueurEnCours);
                }
            } else {
                alwaysOwned(joueurEnCours);
            }
            break;
    }
}

//Handle all cases (with help of function above)
function handleCases() {
    if (debug == 1) {
        console.log("Started handleling specific case actions (More details later)");
    }
    switch (playingPlayer) {
        case 1:
            actions(joueur1);
            break;
        case 2:
            actions(joueur2);
            break;
        case 3:
            actions(joueur3);
            break;
        case 4:
            actions(joueur4);
            break;
    }
}

//Update Chance card scenario
function updateChanceCard(nmPlayer) {
    var rn = Math.floor((Math.random() * 3) + 1);
    if (debug == 1) {
        console.log("Generating chance case scenario");
    }
    switch (rn) {
        case 1:
            boardSansMaison.innerHTML = "Retrour case départ.";
            boardUneMaison.innerHTML = "Vous touchez 1000€";
            nmPlayer.argent = nmPlayer.argent + 1000;
            nmPlayer.noCase = 1;
            shopButton.innerHTML = "";
            updatePlayerNames();
            gestionPions();
            nextPlayer();
            document.getElementById("myBtn").style.display = "block";
            break;
        case 2:
            boardSansMaison.innerHTML = "Il fait froid et la neige";
            boardUneMaison.innerHTML = "paralyse le trafic";
            boardDeuxMaison.innerHTML = "Retournez à la gare du sud."
            nmPlayer.noCase = 6;
            shopButton.innerHTML = "";
            gestionPions();
            nextPlayer();
            document.getElementById("myBtn").style.display = "block";
            break;
        case 3:
            boardSansMaison.innerHTML = "La classe de 2G3 organise un BBQ";
            boardUneMaison.innerHTML = "Rendez-vous dans leur classe et";
            boardDeuxMaison.innerHTML = "payez 15€.";
            boardTroisMaison.innerHTML = "Vous ne touchez pas l'argent";
            boardQuatreMaison.innerHTML = "de la case chance";
            shopButton.innerHTML = "Payer";
            document.getElementById('shopButton').onclick = function () {
                if (nmPlayer.argent < 15) {
                    setFaillite();
                    shopButton.innerHTML = "";
                    nextPlayer();
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    nmPlayer.argent = nmPlayer.argent - 15;
                    argentPot = argentPot + 15;
                    nmPlayer.noCase = 15;
                    shopButton.innerHTML = "";
                    updatePlayerNames();
                    gestionPions();
                    clearCase();
                    boardSansMaison.innerHTML = "Merci d'avoir payé.";
                    boardUneMaison.innerHTML = "Il vous reste " + nmPlayer.argent + "€";
                    nextPlayer();
                    document.getElementById("myBtn").style.display = "block";
                }
            };
            break;
    }
}
//Check if player case location exist
function checkPlayerCases() {
    if (debug == 1) {
        console.log("Check if player is still on the board");
    }
    while (joueur1.noCase > 40) {
        joueur1.noCase = joueur1.noCase - 40;
        joueur1.argent = joueur1.argent + 1000;
        titre.innerHTML = "Case Départ";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur2.noCase > 40) {
        joueur2.noCase = joueur2.noCase - 40;
        joueur2.argent = joueur2.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur2.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur3.noCase > 40) {
        joueur3.noCase = joueur3.noCase - 40;
        joueur3.argent = joueur3.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur3.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur4.noCase > 40) {
        joueur4.noCase = joueur4.noCase - 40;
        joueur4.argent = joueur4.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur4.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
}

//Generate random numbers
function randomNumberGenerator() {
    if (debug == 1) {
        console.log("Generate random numbers for dies");
    }
    des1 = Math.floor((Math.random() * 6) + 1);
    des2 = Math.floor((Math.random() * 6) + 1);
    totalDies = des1 + des2;
    if (des1 == des2) {
        if (debug == 1) {
            console.log("Detected twice dies");
        }
    }
    if (debug == 1) {
        console.log("Updating dies images");
    }
    switch (des1) {
        case 1:
            document.getElementById("imageDes1").src = "images/des1.jpg";
            break;
        case 2:
            document.getElementById("imageDes1").src = "images/des2.jpg";
            break;
        case 3:
            document.getElementById("imageDes1").src = "images/des3.jpg";
            break;
        case 4:
            document.getElementById("imageDes1").src = "images/des4.jpg";
            break;
        case 5:
            document.getElementById("imageDes1").src = "images/des5.jpg";
            break;
        case 6:
            document.getElementById("imageDes1").src = "images/des6.jpg";
            break;
    }
    switch (des2) {
        case 1:
            document.getElementById("imageDes2").src = "images/des1.jpg";
            break;
        case 2:
            document.getElementById("imageDes2").src = "images/des2.jpg";
            break;
        case 3:
            document.getElementById("imageDes2").src = "images/des3.jpg";
            break;
        case 4:
            document.getElementById("imageDes2").src = "images/des4.jpg";
            break;
        case 5:
            document.getElementById("imageDes2").src = "images/des5.jpg";
            break;
        case 6:
            document.getElementById("imageDes2").src = "images/des6.jpg";
            break;
    }
}

//Enable/Disable debug mode
function toggleDebug() {
    if (debug == 0) {
        debug = 1;
        console.log("Debug enabled");
    } else {
        debug = 0;
        console.log("Debug disabled");
    }
}

//Update player position (visual part)
function gestionPions() {
    if (debug == 1) {
        console.log("Updating playerIcons");
    }
    switch (playingPlayer) {
        case 1:
            var selectedId = "rouge" + joueur1.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("rouge1").style.display = "none";
            document.getElementById("rouge2").style.display = "none";
            document.getElementById("rouge3").style.display = "none";
            document.getElementById("rouge4").style.display = "none";
            document.getElementById("rouge5").style.display = "none";
            document.getElementById("rouge6").style.display = "none";
            document.getElementById("rouge7").style.display = "none";
            document.getElementById("rouge8").style.display = "none";
            document.getElementById("rouge9").style.display = "none";
            document.getElementById("rouge10").style.display = "none";
            document.getElementById("rouge11").style.display = "none";
            document.getElementById("rouge12").style.display = "none";
            document.getElementById("rouge13").style.display = "none";
            document.getElementById("rouge14").style.display = "none";
            document.getElementById("rouge15").style.display = "none";
            document.getElementById("rouge16").style.display = "none";
            document.getElementById("rouge17").style.display = "none";
            document.getElementById("rouge18").style.display = "none";
            document.getElementById("rouge19").style.display = "none";
            document.getElementById("rouge20").style.display = "none";
            document.getElementById("rouge21").style.display = "none";
            document.getElementById("rouge22").style.display = "none";
            document.getElementById("rouge23").style.display = "none";
            document.getElementById("rouge24").style.display = "none";
            document.getElementById("rouge25").style.display = "none";
            document.getElementById("rouge26").style.display = "none";
            document.getElementById("rouge27").style.display = "none";
            document.getElementById("rouge28").style.display = "none";
            document.getElementById("rouge29").style.display = "none";
            document.getElementById("rouge30").style.display = "none";
            document.getElementById("rouge31").style.display = "none";
            document.getElementById("rouge32").style.display = "none";
            document.getElementById("rouge33").style.display = "none";
            document.getElementById("rouge34").style.display = "none";
            document.getElementById("rouge35").style.display = "none";
            document.getElementById("rouge36").style.display = "none";
            document.getElementById("rouge37").style.display = "none";
            document.getElementById("rouge38").style.display = "none";
            document.getElementById("rouge39").style.display = "none";
            document.getElementById("rouge40").style.display = "none";
            e.style.display = "block";
            break;
        case 2:
            var selectedId = "bleu" + joueur2.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("bleu1").style.display = "none";
            document.getElementById("bleu2").style.display = "none";
            document.getElementById("bleu3").style.display = "none";
            document.getElementById("bleu4").style.display = "none";
            document.getElementById("bleu5").style.display = "none";
            document.getElementById("bleu6").style.display = "none";
            document.getElementById("bleu7").style.display = "none";
            document.getElementById("bleu8").style.display = "none";
            document.getElementById("bleu9").style.display = "none";
            document.getElementById("bleu10").style.display = "none";
            document.getElementById("bleu11").style.display = "none";
            document.getElementById("bleu12").style.display = "none";
            document.getElementById("bleu13").style.display = "none";
            document.getElementById("bleu14").style.display = "none";
            document.getElementById("bleu15").style.display = "none";
            document.getElementById("bleu16").style.display = "none";
            document.getElementById("bleu17").style.display = "none";
            document.getElementById("bleu18").style.display = "none";
            document.getElementById("bleu19").style.display = "none";
            document.getElementById("bleu20").style.display = "none";
            document.getElementById("bleu21").style.display = "none";
            document.getElementById("bleu22").style.display = "none";
            document.getElementById("bleu23").style.display = "none";
            document.getElementById("bleu24").style.display = "none";
            document.getElementById("bleu25").style.display = "none";
            document.getElementById("bleu26").style.display = "none";
            document.getElementById("bleu27").style.display = "none";
            document.getElementById("bleu28").style.display = "none";
            document.getElementById("bleu29").style.display = "none";
            document.getElementById("bleu30").style.display = "none";
            document.getElementById("bleu31").style.display = "none";
            document.getElementById("bleu32").style.display = "none";
            document.getElementById("bleu33").style.display = "none";
            document.getElementById("bleu34").style.display = "none";
            document.getElementById("bleu35").style.display = "none";
            document.getElementById("bleu36").style.display = "none";
            document.getElementById("bleu37").style.display = "none";
            document.getElementById("bleu38").style.display = "none";
            document.getElementById("bleu39").style.display = "none";
            document.getElementById("bleu40").style.display = "none";
            e.style.display = "block";
            break;
        case 3:
            var selectedId = "jaune" + joueur3.noCase;
            var e = document.getElementById(selectedId);
            for(var i;i<40;i++) {
                document.getElementById(window["jaune" + i]).style.display = "none";
            }
            e.style.display = "block";
            break;
        case 4:
            var selectedId = "vert" + joueur4.noCase;
            var e = document.getElementById(selectedId);
            for(var i;i<40;i++) {
                document.getElementById(window["vert" + i]).style.display = "none";
            }
            e.style.display = "block";
            break;
    }
}
