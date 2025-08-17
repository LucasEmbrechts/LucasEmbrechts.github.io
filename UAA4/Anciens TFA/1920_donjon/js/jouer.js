// --------------- Iniatilisations

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

document.addEventListener("keydown", downHandler);
document.addEventListener("keyup", upHandler);

// Chargement de l'image du héros

var heroes = new Image();
heroes.src = "Sources/Boutons/Heros7.png";


var garde = new Image();
garde.src = "Sources/Boutons/Garde.png";
var garde2 = new Image();
garde2.src = "Sources/Boutons/Garde.png";
var garde3 = new Image();
garde3.src = "Sources/Boutons/Garde.png";
var garde4 = new Image();
garde4.src = "Sources/Boutons/Garde.png";
var garde5 = new Image();
garde5.src = "Sources/Boutons/Garde.png";
var garde6 = new Image();
garde6.src = "Sources/Boutons/Garde.png";
var garde7 = new Image();
garde7.src = "Sources/Boutons/Garde.png";




// Position du héros


var x = 395;
var y = 800;

var xGarde = -30;
var yGarde = 660;
vecteurGarde = 4;

var xGarde2 = 500;
var yGarde2 = 660;
vecteurGarde2 = 4;

var xGarde3 = 550;
var yGarde3 = 660;
vecteurGarde3 = 4;

var xGarde4 = -30;
var yGarde4 = 200;
vecteurGarde4 = 5;

var xGarde5 = 400;
var yGarde5 = 200;
vecteurGarde5 = 5;

var xGarde6 = 700;
var yGarde6 = 200;
vecteurGarde6 = 5;

var xGarde7 = 800;
var yGarde7 = 200;
vecteurGarde7 = 5;

var upPressed = false;
var downPressed = false;

// ---------- Fonctions de jeu

//Lancement de la fonction tte les 10 millisec

setInterval(draw, 10);

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPersonnage();
	drawGarde();
	drawGarde2();
	drawGarde3();
	drawGarde4();
	drawGarde5();
	drawGarde6();
	drawGarde7();
	
	if (upPressed == true) {
		y = y-5; 
		 heroes.src = "Sources/Boutons/Heros7.png";
	}

	if (downPressed == true){
		y = y+5;
		 heroes.src = "Sources/Boutons/herosface2.png";



	}

	 if ((y < 730 && y > 550) && (xGarde > x-20 && xGarde < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	 if ((y < 730 && y > 550) && (xGarde2 > x-20 && xGarde2 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	 if ((y < 730 && y > 550) && (xGarde3 > x-20 && xGarde3 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	 if ((y < 280 && y > 100) && (xGarde4 > x-20 && xGarde4 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	if ((y < 280 && y > 100) && (xGarde5 > x-20 && xGarde5 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	if ((y < 280 && y > 100) && (xGarde6 > x-20 && xGarde6 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	if ((y < 280 && y > 100) && (xGarde7 > x-20 && xGarde7 < x+20)) {
		

		heroes.src = "Sources/Boutons/mort.png"

		alert("Vous avez perdu !");	

		window.location.href="index.html";

	}

	if (y < 10) {

		alert("Vous avez gagné !");
		window.location.href="index.html";


	}






	

	console.log("ArrowUp " + upPressed);
	console.log("ArrowDown " + downPressed);
}

//Fonction qui dessine le perso
function drawPersonnage(){
	ctx.drawImage(heroes, x , y, 150, 150);

}


//Fonction pour les listeners
function downHandler(e){

	if(e.key == "ArrowUp"){
		upPressed = true;
		
	}
	if(e.key == "ArrowDown"){
		downPressed = true;
		
	}

}

function upHandler(e){
	if(e.key == "ArrowUp"){
		upPressed = false;
	}
	if(e.key == "ArrowDown"){
		downPressed = false;
	}
}

function drawGarde(){
	
	if (xGarde <= -50) {
		vecteurGarde = -vecteurGarde;
	}

	 if (xGarde > 800) {
	 	vecteurGarde = -vecteurGarde;
	 }
	  xGarde = xGarde + vecteurGarde;
	ctx.drawImage(garde, xGarde , yGarde, 160, 140);
}

function drawGarde2(){

	if (xGarde2 <= 100) {
		vecteurGarde2 = -vecteurGarde2;
	}

	 if (xGarde2 > 500) {
	 	vecteurGarde2 = -vecteurGarde2;
	 }
	  xGarde2 = xGarde2 + vecteurGarde2;
	ctx.drawImage(garde2, xGarde2 , yGarde2, 160, 140);
}

function drawGarde3(){

	if (xGarde3 <= 200) {
		vecteurGarde3 = -vecteurGarde3;
	}

	 if (xGarde3 > 700) {
	 	vecteurGarde3 = -vecteurGarde3;
	 }
	  xGarde3 = xGarde3 + vecteurGarde3;
	ctx.drawImage(garde3, xGarde3 , yGarde3, 160, 140);
}

function drawGarde4(){

	if (xGarde4 <= -50) {
		vecteurGarde4 = -vecteurGarde4;
	}

	 if (xGarde4 > 400) {
	 	vecteurGarde4 = -vecteurGarde4;
	 }
	  xGarde4 = xGarde4 + vecteurGarde4;
	ctx.drawImage(garde4, xGarde4 , yGarde4, 160, 140);
}



function drawGarde5(){

	if (xGarde5 <= 200) {
		vecteurGarde5 = -vecteurGarde5;
	}

	 if (xGarde5 > 700) {
	 	vecteurGarde5 = -vecteurGarde5;
	 }
	  xGarde5 = xGarde5 + vecteurGarde5;
	ctx.drawImage(garde5, xGarde5 , yGarde5, 160, 140);
}

function drawGarde6(){

	if (xGarde6 <= 100) {
		vecteurGarde6 = -vecteurGarde6;
	}

	 if (xGarde6 > 800) {
	 	vecteurGarde6 = -vecteurGarde6;
	 }
	  xGarde6 = xGarde6 + vecteurGarde6;
	ctx.drawImage(garde6, xGarde6 , yGarde6, 160, 140);
}

function drawGarde7(){

	if (xGarde7 <= 200) {
		vecteurGarde7 = -vecteurGarde7;
	}

	 if (xGarde7 > 800) {
	 	vecteurGarde7 = -vecteurGarde7;
	 }
	  xGarde7 = xGarde7 + vecteurGarde7;
	ctx.drawImage(garde7, xGarde7 , yGarde7, 160, 140);
}




