//-------------------------------------------------------- VARIABLES GLOBALES ----------------------------------------------------------
var counter = 60;

var compteur = 1;

var tour = 0;

var combinaisons = [];

var listing = "";

window.addEventListener("keydown", clavier);

//--------------------------------------------------------- AU CHARGEMENT --------------------------------------------------------------

// génération d'une combinaison

// ANTOINE

	// generation 1er nombre
	var password = [-1,-1,-1,-1];
	password[0] = aleat();

	// generation 2e nombre
	var nextNumber = aleat();
	while (reprisDansTableau(nextNumber, password)){
		nextNumber = aleat();
	}
	password[1] = nextNumber;

	//generation 3e nombre
	nextNumber = aleat();
	while (reprisDansTableau(nextNumber, password)){
		nextNumber = aleat();
	}
	password[2] = nextNumber;

	//generation 4e nombre
	nextNumber = aleat();
	while (reprisDansTableau(nextNumber, password)){
		nextNumber = aleat();
	}
	password[3] = nextNumber;

	// Concaténation des 4 chiffres aléatoires
	password = password[0] + "" + password[1] + "" + password[2] + "" + password[3] + "";
	console.log(password)
	

//--------------------------------------------------------- MENU PRINCIPAL  --------------------------------------------------------------
	
// accès à la partie$

// BENJAMIN


// accès au jeu
function playGame(){
	var el = document.getElementById('menuPrincipal');
	el.style.display = "none";
	var el2 = document.getElementById('interfaceRegles');
	el2.style.display = "none";
	var el3 = document.getElementById('interfaceCredits');
	el3.style.display = "none";
	var el4 = document.getElementById('interfaceJeu')
	el4.style.display = "block";

	// lancement timer
	timer();
}

// accès aux règles du jeu
function reglesDuJeu(){
	var el = document.getElementById('menuPrincipal');
	el.style.display = "none";
	var el2 = document.getElementById('interfaceRegles');
	el2.style.display = "block";
	var el3 = document.getElementById('interfaceCredits');
	el3.style.display = "none";
	var el4 = document.getElementById('interfaceJeu')
	el4.style.display = "none";
}

// accès aux crédits du jeu
function creditsDuJeu(){
	var el = document.getElementById('menuPrincipal');
	el.style.display = "none";
	var el2 = document.getElementById('interfaceRegles');
	el2.style.display = "none";
	var el3 = document.getElementById('interfaceCredits');
	el3.style.display = "block";
	var el4 = document.getElementById('interfaceJeu')
	el4.style.display = "none";
}

// retour au menu principal
function returnMP(){
	var el = document.getElementById('menuPrincipal');
	el.style.display = "block";
	var el2 = document.getElementById('interfaceRegles');
	el2.style.display = "none";
	var el3 = document.getElementById('interfaceCredits');
	el3.style.display = "none";
	var el4 = document.getElementById('interfaceJeu')
	el4.style.display = "none";
}

//--------------------------------------------------------- INTERFACE JEU --------------------------------------------------------------

// ANTOINE

// définition du timer
function timer(){
timerElt = document.getElementById('timer');
var timer = setInterval(function(){
	console.log(counter);
	timerElt.innerHTML = counter;
	counter--;
	if(counter == 0){
		setTimeout(function(){
		timerElt.innerHTML = "C'est terminé";
		console.log("C'est terminé");
		clearInterval(timer);
		document.getElementById('finGame').style.display = "block";
		document.getElementById('aide').style.display = "none";
		document.getElementById('aide2').style.display = "block";
		document.getElementById('recommencer').style.display = "block";
		document.getElementById('consigne').style.display = "none";
		document.getElementById('identiqueChiffre').style.display = "none";
	},1000);	
	}
}, 1000);
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN
function clavier(x){
	//alert(x.key);
	// Permet d'activer le clavier numérique
	if(x.key == 0 || x.key == 1 || x.key == 2 || x.key == 3 || x.key == 4 || x.key == 5 || x.key == 6 || x.key == 7 || x.key == 8 || x.key == 9){
		displayNB(x.key);
	}
}

// affichage des 4 chiffres pour 1 tour

// ANTOINE
function displayNB(nb){
	document.getElementById('identiqueChiffre').style.display = "none";
	console.log("tour " + tour);
	var case1 = document.getElementById("chiffre1");
	var case2 = document.getElementById("chiffre2");
	var case3 = document.getElementById("chiffre3");
	var case4 = document.getElementById("chiffre4");

	if(nb != case1.innerHTML && nb != case2.innerHTML && nb != case3.innerHTML || tour == 4 ){

	//debut de tour
	if(tour == 4){
		essais(case1.innerHTML, case2.innerHTML, case3.innerHTML, case4.innerHTML);
		couleursEssais(couleur1.innerHTML, couleur2.innerHTML, couleur3.innerHTML, couleur4.innerHTML);

		tour = 0;

		case1.innerHTML = "";
		case2.innerHTML = "";
		case3.innerHTML = "";
		case4.innerHTML = "";

		document.getElementById('couleur1').style.backgroundColor = "white";
		document.getElementById('couleur2').style.backgroundColor = "white";
		document.getElementById('couleur3').style.backgroundColor = "white";
		document.getElementById('couleur4').style.backgroundColor = "white";
	}

	if(case1.innerHTML == ""){
			case1.innerHTML = nb;
	} else {
		if(case2.innerHTML == ""){
			case2.innerHTML = nb;
	} else{
		if (case3.innerHTML == "") {
			case3.innerHTML = nb;
	}else{
		if (case4.innerHTML == "") {
			case4.innerHTML = nb;

				}
			}
		}
	}
	tour ++;
	// fin de tour
	// vérification des chiffres
	verifCouleurs();
	// vérification si la partie est gagnée
	victoire(case1.innerHTML, case2.innerHTML, case3.innerHTML, case4.innerHTML);

	// enlève la consigne qui aide le joueur à savoir comment commencer le jeu.

}else{
	document.getElementById('identiqueChiffre').style.display = "block";
}

	document.getElementById('consigne').style.display = "none";
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN 

// génération d'un chiffre aléatoire pour le password
function aleat(){
	const MIN = 0;
	const MAX = 9;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb); 
}

//--------------------------------------------------------------------------------------------------------------------------------------

// ANTOINE

// vérification si le nombre est compris dans le tableau
function reprisDansTableau(nb, tableau){
	var i;
	var dsTab = false;
	for (i=0; i<tableau.length; i++) {
		if (tableau[i] == nb) {
				dsTab = true;
		}
	}
	return dsTab;
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN

// vérification des couleurs
function verifCouleurs(){

	var nb1 = document.getElementById('chiffre1').innerHTML;
	var nb2 = document.getElementById('chiffre2').innerHTML;
	var nb3 = document.getElementById('chiffre3').innerHTML;
	var nb4 = document.getElementById('chiffre4').innerHTML;

	document.getElementById('couleur1').style.backgroundColor = definitionCouleur(nb1, password, 0);
	document.getElementById('couleur2').style.backgroundColor = definitionCouleur(nb2, password, 1);
	document.getElementById('couleur3').style.backgroundColor = definitionCouleur(nb3, password, 2);
	document.getElementById('couleur4').style.backgroundColor = definitionCouleur(nb4, password, 3);
}

//--------------------------------------------------------------------------------------------------------------------------------------

// ANTOINE

// définition des couleurs 
function definitionCouleur(nb, password, indice){
	if (nb == ""){
		return "none";
	} else if(password[indice] == nb){
		return "green";
	} else if( reprisDansTableau(nb, password)){
		return "blue";
	}else{
		return "red";
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN

// affichage des combinaisons dans le stock combinaisons
function essais(nb1, nb2, nb3, nb4){

	var el = document.getElementById('stockCombinaisons');
	var next = combinaisons.length;

	console.log("nb1 : " + nb1 + nb2 + nb3 + nb4);

	// transformer le tableau en combinaison avec les chiffres collés les uns aux autres.

	combinaisons.push(nb1 + nb2 + nb3 + nb4);

	console.log("Combinaison n°" + next + " : " + combinaisons[next]);

	// Permet l'affichage de l'essai.

	listing = listing + combinaisons[next] + "<br>" + "<br>";

	// Compteur d'essais au desssus des combinaisons précédentes.

	document.getElementById('essais').innerHTML = compteur + "/10 essais";
	compteur++;

	if(compteur < 11){
		console.log('Continue');

	}else{
		document.getElementById('finGame').style.display = "block";
		document.getElementById('aide').style.display = "none";
		document.getElementById('aide2').style.display = "block";
		document.getElementById('recommencer').style.display = "block";
		document.getElementById('consigne').style.display = "none";
		document.getElementById('identiqueChiffre').style.display = "none";
	}
	el.innerHTML = listing ;
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN

// recommencer la partie
function recommencerGame(){
	window.location.reload();
}

//--------------------------------------------------------------------------------------------------------------------------------------

// ANTOINE

// vérification si partie gagnée
function victoire(nb1, nb2, nb3, nb4){
	var el3 = document.getElementById('replace1');
	var el4 = document.getElementById('replace2');
	var el5 = document.getElementById('replace3');
	
	// Attention Chaine de caractères!
	var nombre = "";
	var nombre = nb1 + nb2 + nb3 + nb4;

	console.log(nombre);

	if(nombre == password){
		document.getElementById('victoire').style.display = "block";
		document.getElementById('txt2').style.display = "block";
		document.getElementById('txt3').style.display = "block";
		document.getElementById('aide').style.display = "none";
		document.getElementById('recommencer').style.display = "block";
		document.getElementById('returnMenuP').style.display = "block";
		document.getElementById('consigne').style.display = "none";
		document.getElementById('identiqueChiffre').style.display = "none";
	}

	// reprant les stats du jeu une fois la partie terminée si le joueur a gagné.
	el3.innerHTML = password;
	el4.innerHTML = counter + " seconde(s)";
	el5.innerHTML = compteur + " /10";
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN

// accès à la page d'aide (renvoit le joueur à la page des règles)
function aide(){

	document.getElementById('menuPrincipal').style.display = "none";
	document.getElementById('interfaceRegles').style.display = "block";
	document.getElementById('interfaceCredits').style.display = "none";
	document.getElementById('interfaceJeu').style.display = "none";
	document.getElementById('returnPlay').style.display = "block";
	document.getElementById('returnMPRegles').style.display = "none";
}

//--------------------------------------------------------------------------------------------------------------------------------------

// BENJAMIN

// retour au jeu en cours
function returnPlay(){
	document.getElementById('menuPrincipal').style.display = "none";
	document.getElementById('interfaceRegles').style.display = "none";
	document.getElementById('interfaceCredits').style.display = "none";
	document.getElementById('interfaceJeu').style.display = "block";
	document.getElementById('returnPlay').style.display = "none";
	document.getElementById('returnMPRegles').style.display = "block";
}

//--------------------------------------------------------------------------------------------------------------------------------------

// ANTOINE

// affichage des couleurs dans le stock combinaisons
function couleursEssais(){

	var nb1 = document.getElementById('chiffre1').innerHTML;
	var nb2 = document.getElementById('chiffre2').innerHTML;
	var nb3 = document.getElementById('chiffre3').innerHTML;
	var nb4 = document.getElementById('chiffre4').innerHTML;

	// vérification des chiffres avec l'apparition des couleurs.

	if(compteur == 2){

		document.getElementById('rectangle1').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle2').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle3').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle4').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 3){

		document.getElementById('rectangle5').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle6').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle7').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle8').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 4){

		document.getElementById('rectangle9').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle10').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle11').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle12').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 5){

		document.getElementById('rectangle13').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle14').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle15').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle16').style.backgroundColor = definitionCouleur(nb4, password, 3);
	
	}else if(compteur == 6){

		document.getElementById('rectangle17').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle18').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle19').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle20').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 7){

		document.getElementById('rectangle21').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle22').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle23').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle24').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 8){

		document.getElementById('rectangle25').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle26').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle27').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle28').style.backgroundColor = definitionCouleur(nb4, password, 3);

	}else if(compteur == 9){

		document.getElementById('rectangle29').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle30').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle31').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle32').style.backgroundColor = definitionCouleur(nb4, password, 3);
	
	}else if(compteur == 10){

		document.getElementById('rectangle33').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle34').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle35').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle36').style.backgroundColor = definitionCouleur(nb4, password, 3);
	
	}else if(compteur == 11){

		document.getElementById('rectangle37').style.backgroundColor = definitionCouleur(nb1, password, 0);
		document.getElementById('rectangle38').style.backgroundColor = definitionCouleur(nb2, password, 1);
		document.getElementById('rectangle39').style.backgroundColor = definitionCouleur(nb3, password, 2);
		document.getElementById('rectangle40').style.backgroundColor = definitionCouleur(nb4, password, 3);
	}
}