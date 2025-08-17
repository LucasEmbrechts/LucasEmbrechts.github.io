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
var joueur1 = new Joueur(playername1, 0, 1, "#ef5817", 1, 3, 0);
var joueur2 = new Joueur(playername2, 0, 1, "#3366ff", 1, 3, 0);
var joueur3 = new Joueur(playername3, 0, 1, "yellow", 1, 3, 0);
var joueur4 = new Joueur(playername4, 0, 1, "#66ff33", 1, 3, 0);

for (i = 1; i < 5; i++) {
    window["joueur" + i].argent = +sessionStorage.getItem("money");
}

//Get case data
function Case(nomCase, prix, prixSansMaison, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4) {
    "use strict";
    this.nomCase = nomCase;
    this.prix = prix;
    this.prixSansMaison = prixSansMaison;
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

//nomCase, prix, prixSansMaison, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4
var case1 = new Case("Depart", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case2 = new Case("6A", 80, 15, 25, 50, 75, 100, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 50, 50, 0, 0);
var case3 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case4 = new Case("6B", 100, 19, 25, 50, 75, 110, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 75, 75, 0, 0);
var case5 = new Case("Taxes", 200, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case6 = new Case("Gare1", 200, 50, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case7 = new Case("1G1", 120, 60, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case8 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case9 = new Case("1G2", 140, 60, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case10 = new Case("1G3", 140, 70, 100, 120, 140, 160, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case11 = new Case("Allerprison", 500, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case12 = new Case("2G1", 160, 80, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case13 = new Case("Eau", 180, 75, 0, 0, 0, 0, 0, 0, "#ff5000", "/images/classes/4G1.jpg0", 0, 0, 0, 0);
var case14 = new Case("2G2", 160, 80, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case15 = new Case("2G3", 180, 90, 150, 160, 180, 210, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 140, 140, 0, 0);
var case16 = new Case("Gare2", 200, 50, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case17 = new Case("3G1", 180, 100, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case18 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case19 = new Case("3G2", 180, 100, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case20 = new Case("3G3", 200, 110, 200, 210, 220, 240, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case21 = new Case("Parking", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case22 = new Case("4G1", 220, 140, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 160, 160, 0, 0);
var case23 = new Case("4G2", 220, 140, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 180, 180, 0, 0);
var case24 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case25 = new Case("4G3", 220, 150, 220, 230, 240, 260, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 200, 200, 0, 0);
var case26 = new Case("Gare3", 200, 50, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case27 = new Case("5G1", 260, 160, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 210, 210, 0, 0);
var case28 = new Case("5G2", 260, 160, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 220, 220, 0, 0);
var case29 = new Case("Electricite", 240, 75, 0, 0, 0, 0, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case30 = new Case("5G3", 280, 180, 270, 280, 290, 310, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 240, 240, 0, 0);
var case31 = new Case("Prison", 500, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case32 = new Case("6G1", 300, 200, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 300, 300, 0, 0);
var case33 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case34 = new Case("6G2", 300, 200, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case35 = new Case("6G3", 300, 220, 310, 320, 330, 350, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case36 = new Case("Gare4", 200, 50, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case37 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case38 = new Case("4TTA", 420, 300, 360, 370, 380, 400, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);
var case39 = new Case("Taxes", 100, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case40 = new Case("4TTB", 440, 330, 360, 370, 380, 410, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);

function verifyUsers() {
    if (sessionStorage.getItem("player1") == "" || sessionStorage.getItem("player2") == "" || sessionStorage.getItem("player3") == "" || sessionStorage.getItem("player4") == "") {
        alert("Un de vos joueurs n'a pas de nom, et une partie à moins de 4 joueurs n'est pas encore implémenté pour le moment");
        document.getElementsByTagName("body")[0].style.display = "none";
    }
    if (debug === 1) {
        console.log("Check if all users have a name completed");
    }
}

//Main game function, launching all side functions
function Game() {
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
                ps2.style.backgroundColor = "#a6a3a3";
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
        case 2:
            if (debug === 1) {
                console.log("case 2 in switch(playerPlayer) has been selected");
            }
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
            if (debug === 1) {
                console.log("case 3 in switch(playerPlayer) has been selected");
            }
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
            if (debug === 1) {
                console.log("case 4 in switch(playerPlayer) has been selected");
            }
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


function retreiveClickedCase(i) {
    if (window["case" + i].auteur == 0) {
        clearCase();
        titre.innerHTML = "Construction";
        boardSansMaison.innerHTML = "La case " + window["case" + i].nomCase + " n'appartient à personne.";
        boardUneMaison.innerHTML = "Essayez une autre case ou laissez votre place";
        boardDeuxMaison.innerHTML = "Au prochain joueur";
        if (debug === 1) {
            console.log("Clicked case detected, no owner");
        }
    } else {
        clearCase();
        titre.innerHTML = "Construction";
        boardSansMaison.innerHTML = "La case " + window["case" + i].nomCase + " a actuellement " + window["case" + i].maisons + " maison(s)";
        if (window["case" + i].maisons < 4) {
            boardUneMaison.innerHTML = "Voulez vous construire sur cette case?";
            displayPlayButtonsChance();
            document.getElementById('shopButton').innerHTML = "Construire";
            document.getElementById('shopButton').onclick = function () {
                build(i);
            };
        } else {
            if (debug === 1) {
                console.log("Max houses on case reached");
            }
            clearCase();
            boardSansMaison.innerHTML = "Cette case a déjà atteint";
            boardUneMaison.innerHTML = "La limite de maisons autorisés";
        }
        if (debug === 1) {
            console.log("Case with owner clicked");
        }
    }
}

function build(j) {
    window["case" + j].maisons = window["case" + j].maisons + 1;
    updateHouses();
    if (debug === 1) {
        console.log("Add houses to a case");
    }
}

function updateHouses() {
    clearHouses();
    for (j = 1; j < 41; j++) {
        if (window["case" + j].maisons != 0) {
            for (i = window["case" + j].maisons; i > 0; i--) {
                document.getElementById("ID" + j + "M" + i).style.display = "block";
            }
        }
    }
    if (debug === 1) {
        console.log("Update houses status");
    }
}

function clearHouses() {
    for (i = 0; i < 41; i++) {
        if (window["ID" + i + "M1"] != null) {
            for(i=1;i<=4;i++) {
                for(j=1;j<=4;j++) {
                    document.getElementById("ID" + i + j);
                }
            }
            if (debug == 1) {
                console.log("House from case " + "ID" + i + "M1 has been updated");
            }
        }
    }
}
//Remove buttons to play
function removePlayButtons() {
    shopButton.style.display = "none";
    doubleButton.style.display = "none";
    if (debug == 1) {
        console.log("Removed buttons");
    }
}

//Removed button for preventing the player from being able to glitch the game, sinc we're just too lazy to remove the function of the button, so instead, just remove the button
function removePlayButtonsChance() {
    doubleButton.style.display = "none";
    if (debug == 1) {
        console.log("Removed button for chance system usage")
    }
}

//Reveal hidden button
function displayPlayButtonsChance() {
    removePlayButtons();
    shopButton.style.display = "block";
    if (debug === 1) {
        console.log("Display one button for some systems");
    }
}
//Reactive buttons to play
function displayPlayButtons() {
    shopButton.style.display = "block";
    doubleButton.style.display = "block";
    if (debug == 1) {
        console.log("Revealed buttons");
    }
}

//Check number of proprities, exclude every player that don't own any cases
function checkProprityNumber(j) {
    var i = 1;
    while (window["case" + i].auteur == j) {
        i++;
    }
    return i;
    if (debug === 1) {
        console.log("Check if player had an owner");
    }
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

function checkStillAlive() {
    if (debug === 1) {
        console.log("Players alive state check");
    }
    if (joueur1.argent < 0 && joueur2.argent < 0 && joueur3.argent < 0) {
        clearCase();
        boardSansMaison.innerHTML = "Le jeu est fini!";
        boardUneMaison.innerHTML = "Félicitations à " + joueur4.nomJoueur + "!";
        removePlayButtons();
    } else if (joueur1.argent < 0 && joueur2.argent < 0 && joueur4.argent < 0) {
        clearCase();
        boardSansMaison.innerHTML = "Le jeu est fini!";
        boardUneMaison.innerHTML = "Félicitations à " + joueur3.nomJoueur + "!";
        removePlayButtons();
    } else if (joueur1.argent < 0 && joueur4.argent < 0 && joueur3.argent < 0) {
        clearCase();
        boardSansMaison.innerHTML = "Le jeu est fini!";
        boardUneMaison.innerHTML = "Félicitations à " + joueur.nomJoueur + "!";
        removePlayButtons();
    } else if (joueur4.argent < 0 && joueur2.argent < 0 && joueur2.argent < 0) {
        clearCase();
        boardSansMaison.innerHTML = "Le jeu est fini!";
        boardUneMaison.innerHTML = "Félicitations à " + joueur1.nomJoueur + "!";
        boardDeuxMaison.innerHTML = "Allez joueur à un FPS maintenant, vous avez assez";
        boardTroisMaison.innerHTML = "perdu votre temps :D";
        removePlayButtons();
    }
}

//Update player board location
function addPlayerCases() {
    if (debug == 1) {
        console.log("Updating total player cases (potition)");
    }
    for(i=1;i<=playingPlayer;i++) {
        if(playingPlayer = i) {
            window["joueur" + i].noCase =+ totalDies;
        }
    }
}

//Update player names (Visual)
function updatePlayerNames() {
    for (i = 1; i < 5; i++) {
        document.getElementById("player" + i + "name").innerHTML = window["playername" + i] + " : " + window["joueur" + i].argent + "€";
        if (debug == 1) {
            console.log("Playertag " + i + " updated");
        }
    }
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
function getPlayerLocation() {
    return window["joueur" + playingPlayer].noCase;
    if (debug === 1) {
        console.log("Searching player location");
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
    clearCase();
    boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
    boardUneMaison.innerHTML = "Vous avez fait faillite.";
    boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + window["joueur" + playingPlayer].argent + ")";
    boardTroisMaison.innerHTML = "A été donné à " + window["case" + getPlayerLocation(playingPlayer)].auteur;
    givePaidPlayerMoney(window["joueur" + playingPlayer].argent, window["case" + getPlayerLocation(playingPlayer)].auteur);
    window["joueur" + playingPlayer].argent = -10;
    boardQuatreMaison.innerHTML = "Merci d'avoir joué";
    window["joueur" + playingPlayer].status = 0;
    window["joueur" + playingPlayer].argent = -10;
    nextPlayer();
    if (debug === 1) {
        console.log("Set a player as faillite");
    }
}

//Retrieve player rent with number of houses specificated
function getCaseRent() {
    var jec = window["joueur" + playingPlayer].noCase;
    var i = window["case" + jec].maisons;
    if (i = 1) {
        return window["case" + jec].prixUneMaison;
    } else if (i = 2) {
        return window["case" + jec].prixDeuxMaison;
    } else if (i = 3) {
        return window["case" + jec].prixTroisMaison;
    } else if (i = 4) {
        return window["case" + jec].prixQuatreMaison;
    } else if (i = 0) {
        return window["case" + jec].prixSansMaison;
    }
    if (debug === 1) {
        console.log("Get case price");
    }
}
//Show no money message in card board
function noMoney(joueurEnCours) {
    if (debug === 1) {
        console.log("Alert player for no money in information board");
    }
    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
    boardDeuxMaison.innerHTML = "Il vous manque " + (getCaseRent(joueurEnCours.noCase) - joueurEnCours.argent) + "€";
    shopButton.innerHTML = "";
    document.getElementById("myBtn").style.display = "none";
    nextPlayer();
}

//Let players read text before starting the next player process
function nextPlayerWaitStat() {
    wait.setTimeout(nextPlayer, 4000);
}

//Let the next player plays
function nextPlayer() {
    if (debug === 1) {
        console.log("Set the next player");
    }
    if (des1 == des2) {
        clearCase();
        updatePlayerNames();
        removePlayButtons();
        boardSansMaison.innerHTML = "Vous avez joué double!";
        boardUneMaison.innerHTML = "Relancez les des.";
        document.getElementById('myBtn').style.display = "block";
    } else {
        playingPlayer = playingPlayer + 1;
        removePlayButtons();
        window.setTimeout(nextPlayer2, 4500);
    }
}

function nextPlayer2() {
    clearCase();
    checkMaxPlayers();
    boardSansMaison.innerHTML = "Merci d'avoir joué."
    boardUneMaison.innerHTML = "C'est au tour de " + playingPlayer;
    checkStillAlive();
    updatePlayerNames();
    document.getElementById("myBtn").style.display = "block";
    if (debug === 1) {
        console.log("Set the next player part 2");
    }
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
    removePlayButtons();
    joueurEnCours.argent = joueurEnCours.argent - window["case" + getPlayerLocation(playingPlayer)].prix;
    window["case" + getPlayerLocation(playingPlayer)].auteur = joueurEnCours.nomJoueur;
    clearCase();
    boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
    boardUneMaison.innerHTML = "De cette classe";
    setOwnColors();
    nextPlayer();
    doubleButton.innerHTML = "";
}

//Pay an owner of a class and the corresponding messages
function paidOwner(joueurEnCours) {
    if (debug === 1) {
        console.log("Pay the owner of the case and update information board");
    }
    clearCase();
    removePlayButtons();
    boardSansMaison.innerHTML = "Vous avez payé " + getCaseRent(window["case" + getPlayerLocation(playingPlayer)]) + "€";
    joueurEnCours.argent = joueurEnCours.argent - getCaseRent(window["case" + getPlayerLocation(playingPlayer)]);
    givePaidPlayerMoney(getCaseRent(window["case" + getPlayerLocation(playingPlayer)]), window["case" + getPlayerLocation(playingPlayer)].auteur);
    boardUneMaison.innerHTML = "Vous avez maintenant " + joueurEnCours.argent + "€";
    boardDeuxMaison.innerHTML = window["case" + getPlayerLocation(playingPlayer)].auteur + " a maintenant " + getPlayerMoney(window["case" + getPlayerLocation(playingPlayer)].auteur) + "€";
    nextPlayer();
    doubleButton.innerHTML = "";
}

//Ask if a player want to pay for the class he stands on
function askPay(joueurEnCours) {
    if (debug === 1) {
        console.log("Ask the player to buy a case");
    }
    displayPlayButtons();
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
    displayPlayButtonsChance();
    boardSansMaison.innerHTML = "Cette classe appartient à " + window["case" + getPlayerLocation(playingPlayer)].auteur;
    boardUneMaison.innerHTML = "vous devez payer " + getCaseRent(window["case" + getPlayerLocation(joueurEnCours)]) + "€";
    boardDeuxMaison.innerHTML = "Il vous reste " + joueurEnCours.argent + "€ à dépenser";
    shopButton.innerHTML = "Payer";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('shopButton').onclick = function () {
        if (joueurEnCours.argent < getCaseRent(window["case" + getPlayerLocation(playingPlayer)])) {
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
    displayPlayButtons();
    removePlayButtonsChance();
    clearCase();
    updateTitle();
    boardSansMaison.innerHTML = "Cliquez sur le bouton";
    boardUneMaison.innerHTML = "Pour tirer une carte";
    shopButton.innerHTML = "Tirer une carte";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('shopButton').onclick = function () {
        updateChanceCard(joueurEnCours);
        removePlayButtonsChance();
    };
}

//Ask the player to pay taxes and corresponding messages
function taxeCaseHandle(joueurEnCours) {
    if (debug === 1) {
        console.log("Handle taxe case and further updates from information board");
    }
    clearCase();
    updateTitle();
    removePlayButtons();
    displayPlayButtonsChance();
    boardSansMaison.innerHTML = "Vous devez payer " + window["case" + getPlayerLocation(playingPlayer)].prix + "€";
    boardUneMaison.innerHTML = "Vous avez encore " + joueurEnCours.argent + "€";
    removePlayButtons();
    displayPlayButtonsChance();
    shopButton.innerHTML = "Payer";
    document.getElementById("myBtn").style.display = "none";
    removePlayButtonsChance();
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
            removePlayButtons();
            nextPlayer();
        }
    };
}

function mainCaseActions(joueurEnCours) {
    clearCase();
    updateTitle();
    if (window["case" + joueurEnCours].auteur == 0) {
        boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
        if (joueurEnCours.argent < window["case" + joueurEnCours].prix) {
            noMoney(joueurEnCours);
        } else {
            askPay(joueurEnCours);
        }
    } else {
        alwaysOwned(joueurEnCours);
    }
}

function actionsThrottle(i, joueurEnCours) {
    if (debug == 1) {
        console.log("Case " + window["case" + i].nomCase + " has been initialised");
    }
    clearCase();
    updateTitle();
    if (window["case" + i].auteur == 0) {
        boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
        if (joueurEnCours.argent < window["case" + i].prix) {
            noMoney(joueurEnCours);
        } else {
            askPay(joueurEnCours);
        }
    } else {
        alwaysOwned(joueurEnCours);
    }
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
            actionsThrottle(playingPlayers.noCase, playingPlayers);
            break;
        case 3:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 4:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;

        case 5:
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            taxeCaseHandle(joueurEnCours);
            break;
        case 6:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 7:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 8:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;

        case 9:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 10:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
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
                            removePlayButtonsChance();
                            nextPlayer();
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
                            removePlayButtonsChance();
                            nextPlayer();
                        };
                    } else {
                        clearCase();
                        boardSansMaison.innerHTML = "Vous n'avez pas joué double (" + des1 + " et " + des2 + ")";
                        boardUneMaison.innerHTML = "Vous devez rester en prison"
                        boardDeuxMaison.innerHTML = "Il vous reste " + joueurEnCours.chancesPrison + " tentatives";
                        boardTroisMaison.innerHTML = "Vous passez votre tour";
                        joueurEnCours.chancesPrison = joueurEnCours.chancesPrison - 1;
                        removePlayButtonsChance();
                        nextPlayer();
                    }
                }
            } else {
                boardSansMaison.innerHTML = "Vous êtes en visite.";
                boardUneMaison.innerHTML = "Rien ne se passe";
                doubleButton.innerHTML = "";
                nextPlayerWaitStat();
            }
            break;
        case 12:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 13:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;

        case 14:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 15:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 16:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 17:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;

        case 18:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 19:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;

        case 20:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
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
            nextPlayer();
            doubleButton.innerHTML = "";
            break;
        case 22:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;

        case 23:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 24:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 25:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 26:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 27:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 28:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 29:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 30:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
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
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 33:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 34:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 35:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 36:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 37:
            if (debug == 1) {
                console.log("Chance case selected");
            }
            chanceCaseHandle(joueurEnCours);
            break;
        case 38:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
            break;
        case 39:
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            taxeCaseHandle(joueurEnCours);
            break;
        case 40:
            actionsThrottle(playingPlayers.noCase, joueurEnCours);
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

//Update chance card gui system
function updateChanceCardMech() {
    if (debug === 1) {
        console.log("Update chance card system");
    }
    shopButton.innerHTML = "";
    gestionPions();
    removePlayButtons();
    nextPlayer();
}

//Update Chance card scenario
function updateChanceCard(joueurEnCours) {
    if (debug === 1) {
        console.log("Generating chance case scenario");
    }
    switch (Math.floor((Math.random() * 3) + 1)) {
        case 1:
            clearCase();
            boardSansMaison.innerHTML = "Retrour case départ.";
            boardUneMaison.innerHTML = "Vous touchez 1000€";
            joueurEnCours.argent = joueurEnCours.argent + 1000;
            joueurEnCours.noCase = 1;
            updateChanceCardMech()
            break;
        case 2:
            clearCase();
            boardSansMaison.innerHTML = "Il fait froid et la neige";
            boardUneMaison.innerHTML = "paralyse le trafic";
            boardDeuxMaison.innerHTML = "Retournez à la gare du sud."
            boardTroisMaison.innerHTML = "Le ticket est offert, tfacon y avait interet ils sont toujours en retard!"
            joueurEnCours.noCase = 6;
            updateChanceCardMech()
            break;
        case 3:
            clearCase();
            boardSansMaison.innerHTML = "La classe de 2G3 organise un BBQ";
            boardUneMaison.innerHTML = "Rendez-vous dans leur classe et";
            boardDeuxMaison.innerHTML = "payez 15€.";
            shopButton.innerHTML = "Payer";
            document.getElementById('shopButton').onclick = function () {
                if (joueurEnCours.argent < 15) {
                    setFaillite();
                    updateChanceCardMech()
                } else {
                    joueurEnCours.argent = joueurEnCours.argent - 15;
                    argentPot = argentPot + 15;
                    if(joueurEnCours.noCase>15) {
                        joueurEnCours.argent = joueurEnCours.argent + 2000;
                    }
                    joueurEnCours.noCase = 15;
                    updateChanceCardMech();
                    clearCase();
                    boardSansMaison.innerHTML = "Merci d'avoir payé.";
                    boardUneMaison.innerHTML = "Il vous reste " + joueurEnCours.argent + "€";
                }
            };
            break;
    }
}
//Check if player case location exist
function checkPlayerCases() {
    if (debug === 1) {
        console.log("Check if player is still on the board");
    }
    for (i = 1; window["joueur" + i].noCase > 40; i++) {
        window["joueur" + i].noCase = window["joueur" + i].noCase - 40;
        window["joueur" + i].argent = window["joueur" + i].argent + 1000;
        titre.innerHTML = "Case Départ";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardUneMaison.innerHTML = "Vous avez maintenant " + window["joueur" + i].argent + "€";
    }
}

//Generate random numbers
function randomNumberGenerator() {
    des1 = Math.floor((Math.random() * 6) + 1);
    des2 = Math.floor((Math.random() * 6) + 1);
    if (debug === 1) {
        console.log("Generate random numbers for dies : " + des1 + " et " + des2);
    }
    totalDies = des1 + des2;
    if (des1 == des2) {
        if (debug == 1) {
            console.log("Detected twice dies");
        }
    }
    if (debug == 1) {
        console.log("Updating dies images");
    }
    document.getElementById("imageDes1").src = "images/des" + des1 + ".jpg";
    document.getElementById("imageDes2").src = "images/des" + des2 + ".jpg";
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
    if (debug === 1) {
        console.log("Updating playerIcons");
    }
    switch (playingPlayer) {
        case 1:
            var selectedId = "rouge" + joueur1.noCase;
            var e = document.getElementById(selectedId);
            var i = 1
            while (i < 40) {
                document.getElementById("rouge" + i).style.display = "none";
                i++;
            }
            e.style.display = "block";
            break;
        case 2:
            var selectedId = "bleu" + joueur2.noCase;
            var e = document.getElementById(selectedId);
            var i = 1
            while (i < 40) {
                document.getElementById("bleu" + i).style.display = "none";
                i++;
            }
            e.style.display = "block";
            break;
        case 3:
            var selectedId = "jaune" + joueur3.noCase;
            var e = document.getElementById(selectedId);
            var i = 1
            while (i < 40) {
                document.getElementById("jaune" + i).style.display = "none";
                i++;
            }
            e.style.display = "block";
            break;
        case 4:
            var selectedId = "vert" + joueur4.noCase;
            var e = document.getElementById(selectedId);
            var i = 1;
            while (i < 40) {
                document.getElementById("vert" + i).style.display = "none";
                i++;
            }
            e.style.display = "block";
            break;
    }
}
