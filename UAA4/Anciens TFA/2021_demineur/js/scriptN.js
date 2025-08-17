function openPage(url){
	window.open(url,"_self");
}

function aleat(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function calculTotalBombes(){
	var i,j; 
	var total = 0;
	var elTemp;  
	for(i=0; i<10; i++){
		for(j=0; j<10; j++){
			elTemp = document.getElementById("case"+i+j); 
			if(elTemp.classList.contains("bombe")){
				total = total +1; 
			}
		}
	}
	console.log("Total des bombes" + total);
	return total; 
}

// ---------------------------------------------------------
// Au chargement
// ---------------------------------------------------------
		
		var flag = 15;
		var win = 0;
		var drapeau = 0;
		var totalBombes = 0;
// Variables pour la génération des lignes et colonnes de la grille
	var ligne; 
	var colonne;

//Gneration de
	//Variable ligne EASY
		var lbombe = aleat(10);
		var lbombe2 = aleat(10);
		var lbombe3 = aleat(10);
		var lbombe4 = aleat(10);
		var lbombe5 = aleat(10);
		var lbombe6 = aleat(10);
		var lbombe7 = aleat(10);
		var lbombe8 = aleat(10);
		var lbombe9 = aleat(10);
		var lbombe10 = aleat(10);

	//Variable ligne EASY + Normal

		var lbombe11 = aleat(10);
		var lbombe12 = aleat(10);
		var lbombe13 = aleat(10);
		var lbombe14 = aleat(10);
		var lbombe15 = aleat(10);

	


//Variable colonne Easy

	var cbombe = aleat(10);
	var cbombe2 = aleat(10);
	var cbombe3 = aleat(10);
	var cbombe4 = aleat(10);
	var cbombe5 = aleat(10);
	var cbombe6 = aleat(10);
	var cbombe7 = aleat(10);
	var cbombe8 = aleat(10);
	var cbombe9 = aleat(10);
	var cbombe10 = aleat(10);

//Variable colonne Easy + Normal 

	var cbombe11 = aleat(10);
	var cbombe12 = aleat(10);
	var cbombe13 = aleat(10);
	var cbombe14 = aleat(10);
	var cbombe15 = aleat(10);



// nombre de box souhaitées 
	var n = 100;

//variable compteur 
	var i = 0;


//sélection wrapper
	var el = document.getElementById("wrapper");

//variable pour écrire le contenu de la div (diférentes box)
	var txt = "";

//-------------------------------------
// Génération des bombes et de la grille
//-------------------------------------
while(i<n){
		ligne = Math.trunc(i/10);
		colonne = i%10; 

		if (ligne == lbombe && colonne == cbombe){

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")' " + ligne + "-" + colonne +"'> " +  "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

			

		} else if (ligne == lbombe2 && colonne == cbombe2) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe3 && colonne == cbombe3) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " +  "<div id='cbBombe"+ ligne + colonne + "' ></div>" +"</div>";

		}
		else if (ligne == lbombe4 && colonne == cbombe4) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe5 && colonne == cbombe5) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe6 && colonne == cbombe6) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else if (ligne == lbombe7 && colonne == cbombe7) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe8 && colonne == cbombe8) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe9 && colonne == cbombe9) {

			txt = txt + "<div class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe10 && colonne == cbombe10) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}
		else if (ligne == lbombe11 && colonne == cbombe11) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else if (ligne == lbombe12 && colonne == cbombe12) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else if (ligne == lbombe13 && colonne == cbombe13) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else if (ligne == lbombe14 && colonne == cbombe14) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else if (ligne == lbombe15 && colonne == cbombe15) {

			txt = txt + "<div  class='box bombe' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 1 +")'" + ligne + "-" + colonne +"'> " + "<div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div>";

		}

		else {
			txt = txt + "<div class='box' id='case" + ligne + colonne + "' onclick='jeu(" + ligne +","+ colonne + ","+ 0 +")' " + ligne + "-" + colonne +"'> "+" <div id='cbBombe"+ ligne + colonne + "' ></div>" + "</div> ";
		}
		i++;
	}
	//ecriture dans le HTML
el.innerHTML = txt;
	

	//calcul du nombre de bombes générées

	var flag = calculTotalBombes();

	
	totalBombes = calculTotalBombes(); 

	// Calcule de bombe//

	function calculbombe(ligneCase,colonneCase){
	


	var el2 = document.getElementById("cbBombe" + ligneCase + colonneCase);
	

	var l = parseInt(ligneCase);
	var c = parseInt(colonneCase);
	var nbBombes = 0; 
	
	
		
	


	// Calcul les cellules du haut

	if(ligneCase > 0 && colonneCase > 0){
	//haut gauche
		nbBombes = nbBombes + isThereABomb(l-1,c-1);
	}
	if(ligneCase > 0){
	//haut milieu
		nbBombes = nbBombes + isThereABomb(l-1,c);
	}

	if(ligneCase > 0 && colonneCase < 9){
	//haut droit
		nbBombes = nbBombes + isThereABomb(l-1,c+1);
	}
	

	// Calcul les cellules du coté
	if(colonneCase > 0){
	//gauche
		nbBombes = nbBombes + isThereABomb(l,c-1);
	}
	if(colonneCase < 9){
	//droit
		nbBombes = nbBombes + isThereABomb(l,c+1);
	}


	// Calcul les cellules du bas
	if(colonneCase > 0 && ligneCase < 9 ){
	//bas gauche
		nbBombes = nbBombes + isThereABomb(l+1,c-1);
	}

	if(ligneCase < 9 ){
	//bas milieu
		nbBombes = nbBombes + isThereABomb(l+1,c);
	}

	if(ligneCase < 9 && colonneCase < 9){
	//bas droit
		nbBombes = nbBombes + isThereABomb(l+1,c+1);
	}








	
	
	/*console.log( 
		"haut gauche : " + (l-1) + " - " + (c-1)+
		" haut  : " + (l-1) + " - " + c + 
		" haut droite : " + (l-1) + " - " + (c+1) + 
		" gauche  : " + l + " - " + (c-1) + 
		" droite : " + l + " - " + (c+1) + 
		" bas gauche : " + (l+1) + " - " + (c-1) + 
		" bas : " + (l+1) + " - " + c + 
		" bas droite : " + (l+1) + " - " + (c-1)
 
		);
	 */

var txt2 = nbBombes ;
el2.innerHTML = "<h2>" + txt2 + "</h2>";

}

// Choix entre pelle ou drapeau//
function toggleDrapeau(){
	
	if (drapeau == 1) {
		document.getElementById("Choix1").style.backgroundColor = "white";
		document.getElementById("Choix1").style.display = "block";
		document.getElementById("Choix2").style.backgroundColor = "black";
		document.getElementById("Choix2").style.display = "none";

		drapeau = 0; 
	}else if (drapeau == 0) {
		document.getElementById("Choix1").style.backgroundColor = "black";
		document.getElementById("Choix1").style.display = "none";
		document.getElementById("Choix2").style.backgroundColor = "white";
		document.getElementById("Choix2").style.display = "block";
		drapeau = 1; 
	}
	console.log(drapeau);

}

// fonction qui permet de mettre un drapeau ou de creuser la cellule//

function jeu(l,c,dead){

	var NbFlag = document.getElementById('nbflag');

	

	var el = document.getElementById('case'+l + c);

	var elIn = document.getElementById('cbBombe'+l+c);


	if (dead == 1 && drapeau == 0 ) {

			mort();

	}else if (dead == 0 && drapeau == 0){
		
		calculbombe(l,c);
	}

	if (flag >0 ) {

		if (drapeau == 1 && !(el.classList.contains("drapeau")) ) {

			el.classList.add("drapeau"); 
			elIn.innerHTML = " " ;
			flag = flag - 1;
		}

	}


	//retire drapeau qd on creuse
	if (el.classList.contains("drapeau") && drapeau == 0) {
			console.log("creuse?");
			el.classList.remove("drapeau"); 
			flag = flag +1;
			
	}

	//compte si drapeau sur mine
	if (el.classList.contains("drapeau") && dead == 1) {
		win = win + 1 ;
	}

	//Gagne si 10 drap
	if (win == calculTotalBombes()) {
		winner();
		flag = 0;
	}


	NbFlag.innerHTML = "<h3>" +"Drapeaux restants : "+ flag + "</h3>";
}




// Fonction qui regarde si il y à une bombe autours de la cellule (retourne 1 si il y une bombe)

function isThereABomb(ligne, colonne){
	var el = document.getElementById("case" +ligne + colonne); 
	var bombe = 0; 
	
	if (el.classList.contains("bombe") == true){
		bombe = 1;
	}
	return bombe;
}	 

// Fonction qui fait disparraitre la grille et qui fait apparaître la page de mort

function mort(){
	document.getElementById("Lose").style.display = "block";
	document.getElementById("wrapper").style.display = "none";

	
}

function winner(){
	document.getElementById("Win").style.display = "block";
	document.getElementById("wrapper").style.display = "none";
}

