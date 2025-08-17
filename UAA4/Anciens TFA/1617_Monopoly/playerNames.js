//Save player names
function setPlayerNames(n1, n2, n3, n4) {
    sessionStorage.setItem("player1", n1);
    sessionStorage.setItem("player2", n2);
    sessionStorage.setItem("player3", n3);
    sessionStorage.setItem("player4", n4);
    window.location.replace("board.html");
}

//Return player money
function getPlayerMoney(name) {
    var j1 = sessionStorage.getItem("player1");
    var j2 = sessionStorage.getItem("player2");
    var j3 = sessionStorage.getItem("player3");
    var j4 = sessionStorage.getItem("player4");
    if (name == j1) {
        return joueur1.argent;
    } else if (name == j2) {
        return joueur2.argent;
    } else if (name == j3) {
        return joueur3.argent;
    } else if (name == j4) {
        return joueur4.argent;
    }
}

function getPlayerName(id) {
    var j1 = sessionStorage.getItem("player1");
    var j2 = sessionStorage.getItem("player2");
    var j3 = sessionStorage.getItem("player3");
    var j4 = sessionStorage.getItem("player4");
    if (id = 1) {
        return j1;
    } else if (id = 2) {
        return j2;
    } else if (id = 3) {
        return j3;
    } else if (id = 4) {
        return j4;
    }
}

//Return player name
function getPlayerId(name) {
    var j1 = sessionStorage.getItem("player1");
    var j2 = sessionStorage.getItem("player2");
    var j3 = sessionStorage.getItem("player3");
    var j4 = sessionStorage.getItem("player4");
    if (name == j1) {
        return joueur1.nomJoueur;
    } else if (name == j2) {
        return joueur2.nomJoueur;
    } else if (name == j3) {
        return joueur3.nomJoueur;
    } else if (name == j4) {
        return joueur4.nomJoueur;
    }
}

function setPlayerMoney(a) {
    if (document.getElementById("standard_money").checked == true) {
        sessionStorage.setItem("money", 1500);
    } else if (document.getElementById("custom_money").checked == true) {
        if (a == "") {
            alert("Votre jeu ne fonctionnera pas correctement si vous n'insérez aucun nombre");
        } else {
            sessionStorage.setItem("money", a);
        }
    }
}
//Give the owner of a class money
function givePaidPlayerMoney(moneyToPut, playerName) {
    var j1 = sessionStorage.getItem("player1");
    var j2 = sessionStorage.getItem("player2");
    var j3 = sessionStorage.getItem("player3");
    var j4 = sessionStorage.getItem("player4");
    if (playerName == j1) {
        joueur1.argent = joueur1.argent + moneyToPut;
    } else if (playerName == j2) {
        joueur2.argent = joueur2.argent + moneyToPut;
    } else if (playerName == j3) {
        joueur3.argent = joueur3.argent + moneyToPut;
    } else if (playerName == j4) {
        joueur4.argent = joueur4.argent + moneyToPut;
    }
}
