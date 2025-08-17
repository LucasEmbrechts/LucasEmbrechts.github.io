// ---------------- Couleur ----------------  //

function genCoul(){
	const MIN = 1 ; 
	const MAX = 6 ;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	nb = Math.floor(nb);

	if (nb == 1){
		return "rouge";
	}else if (nb == 2) {
		return "vert";
	}else if (nb == 3){
		return "jaune";
	}else if (nb == 4){
		return "bleu";
	}else if (nb == 5){
		return "orange";
	}else if (nb == 6){
		return "mauve";
	}
}


//*******************************************************

var coul1 = genCoul();
var coul2 = genCoul();
var coul3 = genCoul();
var coul4 = genCoul();

ligne = "";

function generate(){

		var newPion = new Image(50, 50);
		newPion.src = './img/Cnoir.png';
		newPion.id = "C1" + score;
		newPion.style.marginTop = "28px";
		newPion.style.cssFloat = "left";
		document.getElementById("colonne" + score).appendChild(newPion);

		var newPion2 = new Image(50, 50);
		newPion2.src = './img/Cnoir.png';
		newPion2.id = "C2" + score;
		newPion.style.marginTop = "28px";
		newPion2.style.cssFloat = "left";
		document.getElementById("colonne" + score).appendChild(newPion2)

		var newPion3 = new Image(50, 50);
		newPion3.src = './img/Cnoir.png';
		newPion3.id = "C3" + score;
		newPion.style.marginTop = "28px";
		newPion3.style.cssFloat = "left";
		document.getElementById("colonne" + score).appendChild(newPion3)

		var newPion4 = new Image(50, 50);
		newPion4.src = './img/Cnoir.png';
		newPion4.id = "C4" + score;
		newPion.style.marginTop = "28px";
		newPion4.style.cssFloat = "left";
		document.getElementById("colonne" + score).appendChild(newPion4);	

	console.log("couleur 1 = " + coul1);
	console.log("couleur 2 = " + coul2);
	console.log("couleur 3 = " + coul3);
	console.log("couleur 4 = " + coul4);
	console.log("*****************************")

	var el = document.getElementById("CouleurChoisir");
	el.style.display = "none";

	var bl = document.getElementById("bL");
	bl.style.display = "block";

	var BoutonRetour = document.getElementById("BoutonR");
	BoutonRetour.style.display = "block";

	var imgJouer = document.getElementById("MMvide");
	imgJouer.style.display ="block";

	var menuCoul = document.getElementById("MenuCoul");
	menuCoul.style.display ="block";

	var boutonTour = document.getElementById("boutonScore");
	boutonTour.style.display = "block";
}

//************************************************************

function start(){

	console.log("couleur 1 = " + coul1);
	console.log("couleur 2 = " + coul2);
	console.log("couleur 3 = " + coul3);
	console.log("couleur 4 = " + coul4);
	console.log("*****************************")

}

function retour(){
	var bl = document.getElementById("bL");
	bl.style.display = "none";

	var BoutonRetour = document.getElementById("BoutonR");
	BoutonRetour.style.display = "none";

	var el = document.getElementById("game");
	el.style.display = "block";

	var imgJouer = document.getElementById("MMvide");
	imgJouer.style.display = "none";

	var menuCoul = document.getElementById("MenuCoul");
	menuCoul.style.display ="none";

	var tourC = document.getElementById("boutonScore");
	tourC.style.display = "block";

	var jouer = document.getElementById("jouer");
	jouer.style.display = "none";

	var continuer = document.getElementById("continuer");
	continuer.style.display = "block";
	continuer.style.marginTop = "60px";

	var relancer = document.getElementById("relancer");
	relancer.style.display = "block";
	relancer.style.marginTop = "20px";


	var boutondisp1 = document.getElementById("Bcacher");
	boutondisp1.style.display = "none";

	var boutondisp2 = document.getElementById("Bcacher2");
	boutondisp2.style.display = "none";

	var boutondisp3 = document.getElementById("boutonScore");
	boutondisp3.style.display = "none";
}

function SelecL1() {
	var CouleurPion = document.getElementById("C1" + score);
	CouleurPion.style.opacity = "0.5";

	var CouleurAutre1 = document.getElementById("C2" + score);
	CouleurAutre1.style.opacity = "1.0";
	var CouleurAutre2 = document.getElementById("C3" + score);
	CouleurAutre2.style.opacity = "1.0";
	var CouleurAutre3 = document.getElementById("C4" + score);
	CouleurAutre3.style.opacity = "1.0";
	ligne = "premiereL";
}

function SelecL2() {
	var CouleurPion = document.getElementById("C2" + score);
	CouleurPion.style.opacity = "0.5";

	var CouleurAutre1 = document.getElementById("C1" + score);
	CouleurAutre1.style.opacity = "1.0";
	var CouleurAutre2 = document.getElementById("C3" + score);
	CouleurAutre2.style.opacity = "1.0";
	var CouleurAutre3 = document.getElementById("C4" + score);
	CouleurAutre3.style.opacity = "1.0";
	ligne = "deuxiemeL";
}

function SelecL3() {
	var CouleurPion = document.getElementById("C3" + score);
	CouleurPion.style.opacity = "0.5";

	var CouleurAutre1 = document.getElementById("C1" + score);
	CouleurAutre1.style.opacity = "1.0";
	var CouleurAutre2 = document.getElementById("C2" + score);
	CouleurAutre2.style.opacity = "1.0";
	var CouleurAutre3 = document.getElementById("C4" + score);
	CouleurAutre3.style.opacity = "1.0";
	ligne = "troisiemeL";
}

function SelecL4() {
	var CouleurPion = document.getElementById("C4" + score);
	CouleurPion.style.opacity = "0.5";

	var CouleurAutre1 = document.getElementById("C1" + score);
	CouleurAutre1.style.opacity = "1.0";
	var CouleurAutre2 = document.getElementById("C3" + score);
	CouleurAutre2.style.opacity = "1.0";
	var CouleurAutre3 = document.getElementById("C2" + score);
	CouleurAutre3.style.opacity = "1.0";
	ligne = "quatriemeL";
}
//**********************************************

var verifC1 = 0;
var verifC2 = 0;
var verifC3 = 0;
var verifC4 = 0;

var CouleurPion1if = "none";
var CouleurPion2if = "none";
var CouleurPion3if = "none";
var CouleurPion4if = "none";

function ChangeCouleur(nomCouleur) {
		var CouleurPion1 = document.getElementById("C1" + score);
		var CouleurPion2 = document.getElementById("C2" + score);
		var CouleurPion3 = document.getElementById("C3" + score);
		var CouleurPion4 = document.getElementById("C4" + score);
	if (ligne == "premiereL") {

		verifC1 = 1;
		CouleurPion1if = nomCouleur;
		CouleurPion1.src = "./img/pion_"+ nomCouleur +".png";
		var reponseL1 = "bleu";
		CouleurPion1.style.cssFloat = "right";
	}else if (ligne == "deuxiemeL") {
		verifC2 = 1;
		CouleurPion2if = nomCouleur;
		CouleurPion2.src = "./img/pion_"+ nomCouleur +".png";
		CouleurPion2.style.cssFloat = "right";
	}else if (ligne =="troisiemeL") {
		verifC3 = 1;
		CouleurPion3if = nomCouleur;
		CouleurPion3.src = "./img/pion_"+ nomCouleur +".png";
		CouleurPion3.style.cssFloat = "right";
	}else if (ligne == "quatriemeL") {
		verifC4 = 1;
		CouleurPion4if = nomCouleur;
		CouleurPion4.src = "./img/pion_"+ nomCouleur +".png";
		CouleurPion4.style.cssFloat = "right";
	}
}

var score = 1;

function tourClick(){
	if ((verifC1 == 0) || (verifC2 == 0) || (verifC3 == 0) || (verifC4 == 0)){
			alert("il manque une/plusieurs couleur(s)")
	}else {

		/*****************Barre*****************/

		if ( ((coul1 == CouleurPion1if) && (coul2 == CouleurPion2if) && (coul3 == CouleurPion3if)) || ((coul1 == CouleurPion1if) && (coul2 == CouleurPion2if) && (coul4 == CouleurPion4if)) || ((coul1 == CouleurPion1if) && (coul3 == CouleurPion3if) && (coul4 == CouleurPion4if)) || ((coul3 == CouleurPion2if) && (coul3 == CouleurPion3if) && (coul4 == CouleurPion4if)) ) {
			
			var barre = new Image (10,35);
			barre.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre);
			barre.style.cssFloat = "left";
			barre.id = "barreC1" + score;
			barre.style.marginRight = "3px";
			barre.style.marginTop = "25px";

			var barre2 = new Image (10,35);
			barre2.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre2);
			barre2.style.cssFloat = "left";
			barre2.id = "barreC2" + score;
			barre2.style.marginRight = "3px";
			barre2.style.marginTop = "25px";

			var barre3 = new Image (10,35);
			barre3.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre3);
			barre3.style.cssFloat = "left";
			barre3.id = "barreC3" + score;
			barre3.style.marginTop = "25px";

			} else if (((coul1 == CouleurPion1if) && (coul2 == CouleurPion2if)) || ((coul1 == CouleurPion1if) && (coul3 == CouleurPion3if)) || ((coul1 == CouleurPion1if) && (coul4 == CouleurPion4if)) || ((coul2 == CouleurPion2if) && (coul3 == CouleurPion3if)) || ((coul2 == CouleurPion2if) && (coul4 == CouleurPion4if)) || ((coul3 == CouleurPion3if) && (coul4 == CouleurPion4if))) {
			
			var barre = new Image (10,35);
			barre.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre);
			barre.style.cssFloat = "left";
			barre.id = "barreC1" + score;
			barre.style.marginRight = "3px";
			barre.style.marginTop = "25px";

			var barre2 = new Image (10,35);
			barre2.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre2);
			barre2.style.cssFloat = "left";
			barre2.id = "barreC2" + score;
			barre2.style.marginRight = "3px";
			barre2.style.marginTop = "25px";

		} else if ((coul1 == CouleurPion1if) || (coul2 == CouleurPion2if) || (coul3 == CouleurPion3if) || (coul4 == CouleurPion4if)) {
			
			var barre = new Image (10,35);
			barre.src = './img/barreR.jpg';
			document.getElementById("colonne" + score).appendChild(barre);
			barre.style.cssFloat = "left";
			barre.id = "barreC1" + score;
			barre.style.marginRight = "3px";
			barre.style.marginTop = "25px";
		}

		/*****************Barre*****************/

		verifC1 = 0;
		verifC2 = 0;
		verifC3 = 0;
		verifC4 = 0;

		score++;
		document.getElementById("score").innerHTML = score;
		console.log("tour " + score);
		console.log("*****************************")

		if (score <= 15) {

			var scoreM1 = score - 1;

			var CouleurPion1 = document.getElementById("C1" + scoreM1);
			CouleurPion1.style.opacity = "1";

			var CouleurPion2 = document.getElementById("C2" + scoreM1);
			CouleurPion2.style.opacity = "1";

			var CouleurPion3 = document.getElementById("C3" + scoreM1);
			CouleurPion3.style.opacity = "1";

			var CouleurPion4 = document.getElementById("C4" + scoreM1);
			CouleurPion4.style.opacity = "1";
		
			var newPion = new Image(50, 50);
			newPion.src = './img/Cnoir.png';
			newPion.style.display = "block";
			newPion.style.marginTop = "28px";
			newPion.id = "C1" + score;
			newPion.style.cssFloat = "left";
			newPion.style.marginLeft = "3px";
			newPion.style.marginRight = "2px";
			document.getElementById("colonne" + score).appendChild(newPion);

			var newPion2 = new Image(50, 50);
			newPion2.src = './img/Cnoir.png';
			newPion2.style.display = "block";
			newPion2.style.marginTop = "46px";
			newPion2.id = "C2" + score;
			newPion2.style.cssFloat = "left";
			newPion2.style.marginLeft = "3px";
			newPion2.style.marginRight = "2px";
			document.getElementById("colonne" + score).appendChild(newPion2);

			var newPion3 = new Image(50, 50);
			newPion3.src = './img/Cnoir.png';
			newPion3.style.display = "block";
			newPion3.style.marginTop = "52px";
			newPion3.id = "C3" + score;
			newPion3.style.cssFloat = "left";
			newPion3.style.marginLeft = "3px";
			newPion3.style.marginRight = "2px";
			document.getElementById("colonne" + score).appendChild(newPion3)

			var newPion4 = new Image(50, 50);
			newPion4.src = './img/Cnoir.png';
			newPion4.style.marginTop = "46px";
			newPion4.style.display = "block";
			newPion4.id = "C4" + score;
			newPion4.style.cssFloat = "left";
			newPion3.style.marginLeft = "3px";
			newPion4.style.marginRight = "2px";
			document.getElementById("colonne" + score).appendChild(newPion4);
		}
	}

	if ((coul1 == CouleurPion1if) && (coul2 == CouleurPion2if) && (coul3 == CouleurPion3if) && (coul4 == CouleurPion4if)) {

			var ele1 = document.getElementById("MMvide");
			ele1.style.display ="none";

			var ele2 = document.getElementById("bL");
			ele2.style.display ="none";

			var ele3 = document.getElementById("boutonScore");
			ele3.style.display ="none";

			var ele4 = document.getElementById("MenuCoul");
			ele4.style.display ="none";

			var ele5 = document.getElementById("BoutonR");
			ele5.style.display ="none";

			var ele6 = document.getElementById("Fin");
			ele6.style.display ="block";

			var ele7 = document.getElementById("V");
			ele7.style.display ="block";

			var ele8 = document.getElementById("D");
			ele8.style.display ="none";

			var ele9 = document.getElementById("boutonScore");
			ele9.st

		}else if (score > 15){
			var ele1 = document.getElementById("MMvide");
			ele1.style.display ="none";

			var ele2 = document.getElementById("bL");
			ele2.style.display ="none";

			var ele3 = document.getElementById("boutonScore");
			ele3.style.display ="block";

			var ele4 = document.getElementById("MenuCoul");
			ele4.style.display ="none";

			var ele5 = document.getElementById("BoutonR");
			ele5.style.display ="none";

			var ele6 = document.getElementById("Fin");
			ele6.style.display ="block";

			var ele7 = document.getElementById("D");
			ele7.style.display ="block";

			var ele8 = document.getElementById("V");
			ele8.style.display ="none";
		}
}

function AfficheBouton(){
	if ((verifC1 = "ok") || (verifC2 = "ok") || (verifC3 = "ok") || (verifC4 = "ok")) {
		var boutonTour = document.getElementById("boutonScore");
		boutonTour.style.display = "block";
	}
}

function choisirCouleur(){

	var el = document.getElementById("game");
	el.style.display = "none";

	var couleurChoisir = document.getElementById("CouleurChoisir");
	couleurChoisir.style.display = "block";
}

function continuer(){
	
var el = document.getElementById("CouleurChoisir");
	el.style.display = "none";

	var bl = document.getElementById("bL");
	bl.style.display = "block";

	var BoutonRetour = document.getElementById("BoutonR");
	BoutonRetour.style.display = "block";

	var imgJouer = document.getElementById("MMvide");
	imgJouer.style.display ="block";

	var menuCoul = document.getElementById("MenuCoul");
	menuCoul.style.display ="block";

	var tourC = document.getElementById("boutonScore");
	tourC.style.display = "block";

	var el = document.getElementById("game");
	el.style.display = "none";
}

function joueurChoisir(){

	var el = document.getElementById("CouleurChoisir");
	el.style.display = "none";

	var el2 = document.getElementById("PionChoisir");
	el2.style.display = "block";

	var boutonTour = document.getElementById("boutonScore");
	boutonTour.style.display = "block";

	var ele10 = document.getElementById("boutonScore");
	ele10.style.display = "none";
}

/*////////////////////////////////////////////////////////////////////////////////*/

var Couleur2Pion1if = "none";
var Couleur2Pion2if = "none";
var Couleur2Pion3if = "none";
var Couleur2Pion4if = "none";

function Selec2L1() {
	var Couleur2Pion = document.getElementById("R1");
	Couleur2Pion.style.opacity = "0.5";

	var Couleur2Autre1 = document.getElementById("R2");
	Couleur2Autre1.style.opacity = "1.0";
	var Couleur2Autre2 = document.getElementById("R3");
	Couleur2Autre2.style.opacity = "1.0";
	var Couleur2Autre3 = document.getElementById("R4");
	Couleur2Autre3.style.opacity = "1.0";
	ligne = "premiere2L";
}

function Selec2L2() {
	var Couleur2Pion = document.getElementById("R2");
	Couleur2Pion.style.opacity = "0.5";

	var Couleur2Autre1 = document.getElementById("R1");
	Couleur2Autre1.style.opacity = "1.0";
	var Couleur2Autre2 = document.getElementById("R3");
	Couleur2Autre2.style.opacity = "1.0";
	var Couleur2Autre3 = document.getElementById("R4");
	Couleur2Autre3.style.opacity = "1.0";
	ligne = "deuxieme2L";
}

function Selec2L3() {
	var Couleur2Pion = document.getElementById("R3");
	Couleur2Pion.style.opacity = "0.5";

	var Couleur2Autre1 = document.getElementById("R1");
	Couleur2Autre1.style.opacity = "1.0";
	var Couleur2Autre2 = document.getElementById("R2");
	Couleur2Autre2.style.opacity = "1.0";
	var Couleur2Autre3 = document.getElementById("R4");
	Couleur2Autre3.style.opacity = "1.0";
	ligne = "troisieme2L";
}

function Selec2L4() {
	var Couleur2Pion = document.getElementById("R4");
	Couleur2Pion.style.opacity = "0.5";

	var Couleur2Autre1 = document.getElementById("R1");
	Couleur2Autre1.style.opacity = "1.0";
	var Couleur2Autre2 = document.getElementById("R3");
	Couleur2Autre2.style.opacity = "1.0";
	var Couleur2Autre3 = document.getElementById("R2");
	Couleur2Autre3.style.opacity = "1.0";
	ligne = "quatrieme2L";
}
 var CouleurChoisi1;
 var CouleurChoisi2;
 var CouleurChoisi3;
 var CouleurChoisi4;

function ChangeCouleur2(nomCouleur) {
	if (ligne == "premiere2L") {
		var Couleur2Pion1 = document.getElementById("R1");
		Couleur2Pion1if = nomCouleur;
		CouleurChoisi1 = nomCouleur;
		Couleur2Pion1.src = "./img/pion_"+ nomCouleur +".png";
	}else if (ligne == "deuxieme2L") {
		var Couleur2Pion2 = document.getElementById("R2");
		Couleur2Pion2if = nomCouleur;
		CouleurChoisi2 = nomCouleur;
		Couleur2Pion2.src = "./img/pion_"+ nomCouleur +".png";
	}else if (ligne =="troisieme2L") {
		var Couleur2Pion3 = document.getElementById("R3");
		Couleur2Pion3if = nomCouleur;
		CouleurChoisi3 = nomCouleur;
		Couleur2Pion3.src = "./img/pion_"+ nomCouleur +".png";
	}else if (ligne == "quatrieme2L") {
		var Couleur2Pion4 = document.getElementById("R4");
		Couleur2Pion4if = nomCouleur;
		Couleur2Pion4.src = "./img/pion_"+ nomCouleur +".png";
		CouleurChoisi4 = nomCouleur;
	}
	coul1 = CouleurChoisi1;
	coul2 = CouleurChoisi2;
	coul3 = CouleurChoisi3;
	coul4 = CouleurChoisi4;
}

function continuer2(){

if ((Couleur2Pion1if != "none") && (Couleur2Pion2if != "none") && (Couleur2Pion3if != "none") && (Couleur2Pion4if != "none")) {
	
	var menudisp = document.getElementById("PionChoisir");
	menudisp.style.display ="none";

	var bl = document.getElementById("bL");
	bl.style.display = "block";

	var BoutonRetour = document.getElementById("BoutonR");
	BoutonRetour.style.display = "block";

	var imgJouer = document.getElementById("MMvide");
	imgJouer.style.display ="block";

	var menuCoul = document.getElementById("MenuCoul");
	menuCoul.style.display ="block";

	var tourC = document.getElementById("boutonScore");
	tourC.style.display = "block";
	
	console.log("couleur 1 = " + coul1);
	console.log("couleur 2 = " + coul2);
	console.log("couleur 3 = " + coul3);
	console.log("couleur 4 = " + coul4);
	console.log("*****************************")

	var newPion = new Image(50, 50);
	newPion.src = './img/Cnoir.png';
	newPion.id = "C1" + score;
	newPion.style.marginTop = "28px";
	newPion.style.cssFloat = "left";
	document.getElementById("colonne" + score).appendChild(newPion);

	var newPion2 = new Image(50, 50);
	newPion2.src = './img/Cnoir.png';
	newPion2.id = "C2" + score;
	newPion.style.marginTop = "28px";
	newPion2.style.cssFloat = "left";
	document.getElementById("colonne" + score).appendChild(newPion2)

	var newPion3 = new Image(50, 50);
	newPion3.src = './img/Cnoir.png';
	newPion3.id = "C3" + score;
	newPion.style.marginTop = "28px";
	newPion3.style.cssFloat = "left";
	document.getElementById("colonne" + score).appendChild(newPion3)

	var newPion4 = new Image(50, 50);
	newPion4.src = './img/Cnoir.png';
	newPion4.id = "C4" + score;
	newPion.style.marginTop = "28px";
	newPion4.style.cssFloat = "left";
	document.getElementById("colonne" + score).appendChild(newPion4);

	}else {
		alert("il manque une/plusieurs couleur(s)")
		}
}