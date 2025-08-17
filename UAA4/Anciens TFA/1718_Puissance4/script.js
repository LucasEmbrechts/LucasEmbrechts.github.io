alert('Joueur ayant choisi la couleur ROUGE commence.')
const IMGPIONROUGE = 'url("Images/pionsRouge.jpg")';
const IMGPIONJAUNE = 'url("Images/pionsJaune.jpg")';


// Var globale
var noJoueur = 1; 

var case36 = document.getElementById("case36");
var case29 = document.getElementById("case29");
var case22 = document.getElementById("case22");
var case15 = document.getElementById("case15");
var case8 = document.getElementById("case8");
var case1 = document.getElementById("case1");

var case37 = document.getElementById("case37");
var case30 = document.getElementById("case30");
var case23 = document.getElementById("case23");
var case16 = document.getElementById("case16");
var case9 = document.getElementById("case9");
var case2 = document.getElementById("case2");

var case38 = document.getElementById("case38");
var case31 = document.getElementById("case31");
var case24 = document.getElementById("case24");
var case17 = document.getElementById("case17");
var case10 = document.getElementById("case10");
var case3 = document.getElementById("case3");

var case39 = document.getElementById("case39");
var case32 = document.getElementById("case32");
var case25 = document.getElementById("case25");
var case18 = document.getElementById("case18");
var case11 = document.getElementById("case11");
var case4 = document.getElementById("case4");

var case40 = document.getElementById("case40");
var case33 = document.getElementById("case33");
var case26 = document.getElementById("case26");
var case19 = document.getElementById("case19");
var case12 = document.getElementById("case12");
var case5 = document.getElementById("case5");

var case41 = document.getElementById("case41");
var case34 = document.getElementById("case34");
var case27 = document.getElementById("case27");
var case20 = document.getElementById("case20");
var case13 = document.getElementById("case13");
var case6 = document.getElementById("case6");

var case42 = document.getElementById("case42");
var case35 = document.getElementById("case35");
var case28 = document.getElementById("case28");
var case21 = document.getElementById("case21");
var case14 = document.getElementById("case14");
var case7 = document.getElementById("case7");

function inserpion(numcol){
	var imagePion;

	if(noJoueur == 1){
		imagePion = IMGPIONROUGE;
		noJoueur = 2;
	} else {
		imagePion = IMGPIONJAUNE;
		noJoueur = 1;
	}




	// Inserer un pion en colonne 1
	if (numcol == 1) {


		if (case36.style.backgroundImage == "") {
			 case36.style.backgroundImage = imagePion;
		}
		else if (case29.style.backgroundImage == "") {
			 case29.style.backgroundImage = imagePion;
		}
		 else if (case22.style.backgroundImage == "") {
			 case22.style.backgroundImage = imagePion;
		}
		else if (case15.style.backgroundImage == "") {
			 case15.style.backgroundImage = imagePion;
		}
		else if (case8.style.backgroundImage == "") {
			 case8.style.backgroundImage = imagePion;
		}
		else if (case1.style.backgroundImage == "") {
			 case1.style.backgroundImage = imagePion;
		
	}
}




	// Inserer un pion en colonne 2
	if (numcol == 2) {


		if (case37.style.backgroundImage == "") {
			 case37.style.backgroundImage = imagePion;
		}
		else if (case30.style.backgroundImage == "") {
			 case30.style.backgroundImage = imagePion;
		}
		 else if (case23.style.backgroundImage == "") {
			 case23.style.backgroundImage = imagePion;
		}
		else if (case16.style.backgroundImage == "") {
			 case16.style.backgroundImage = imagePion;
		}
		else if (case9.style.backgroundImage == "") {
			 case9.style.backgroundImage = imagePion;
		}
		else if (case2.style.backgroundImage == "") {
			 case2.style.backgroundImage = imagePion;
		}
	}



	// Inserer un pion en colonne 3
	if (numcol == 3) {


		if (case38.style.backgroundImage == "") {
			 case38.style.backgroundImage = imagePion;
		}
		else if (case31.style.backgroundImage == "") {
			 case31.style.backgroundImage = imagePion;;
		}
		 else if (case24.style.backgroundImage == "") {
			 case24.style.backgroundImage = imagePion;
		}
		else if (case17.style.backgroundImage == "") {
			 case17.style.backgroundImage = imagePion;
		}
		else if (case10.style.backgroundImage == "") {
			 case10.style.backgroundImage = imagePion;
		}
		else if (case3.style.backgroundImage == "") {
			 case3.style.backgroundImage = imagePion;
		}
	}



	// Inserer un pion en colonne 4
	if (numcol == 4) {

		if (case39.style.backgroundImage == "") {
			 case39.style.backgroundImage = imagePion;
		}
		else if (case32.style.backgroundImage == "") {
			 case32.style.backgroundImage = imagePion;
		}
		 else if (case25.style.backgroundImage == "") {
			 case25.style.backgroundImage = imagePion;
		}
		else if (case18.style.backgroundImage == "") {
			 case18.style.backgroundImage = imagePion;
		}
		else if (case11.style.backgroundImage == "") {
			 case11.style.backgroundImage = imagePion;
		}
		else if (case4.style.backgroundImage == "") {
			 case4.style.backgroundImage = imagePion;
		}
	}	



	// Inserer un pion en colonne 5
	if (numcol == 5) {

		if (case40.style.backgroundImage == "") {
			 case40.style.backgroundImage = imagePion;
		}
		else if (case33.style.backgroundImage == "") {
			 case33.style.backgroundImage = imagePion;
		}
		 else if (case26.style.backgroundImage == "") {
			 case26.style.backgroundImage = imagePion;
		}
		else if (case19.style.backgroundImage == "") {
			 case19.style.backgroundImage = imagePion;
		}
		else if (case12.style.backgroundImage == "") {
			 case12.style.backgroundImage = imagePion;
		}
		else if (case5.style.backgroundImage == "") {
			 case5.style.backgroundImage = imagePion;
		}
	}




	// Inserer un pion en colonne 6
	if (numcol == 6) {



		if (case41.style.backgroundImage == "") {
			 case41.style.backgroundImage = imagePion;
		}
		else if (case34.style.backgroundImage == "") {
			 case34.style.backgroundImage = imagePion;
		}
		 else if (case27.style.backgroundImage == "") {
			 case27.style.backgroundImage = imagePion;
		}
		else if (case20.style.backgroundImage == "") {
			 case20.style.backgroundImage = imagePion;
		}
		else if (case13.style.backgroundImage == "") {
			 case13.style.backgroundImage = imagePion;
		}
		else if (case6.style.backgroundImage == "") {
			 case6.style.backgroundImage = imagePion;
		}
	}
		




	// Inserer un pion en colonne 7
	if (numcol == 7) {

		if (case42.style.backgroundImage == "") {
			 case42.style.backgroundImage = imagePion;
		}
		else if (case35.style.backgroundImage == "") {
			 case35.style.backgroundImage = imagePion;
		}
		 else if (case28.style.backgroundImage == "") {
			 case28.style.backgroundImage = imagePion;
		}
		else if (case21.style.backgroundImage == "") {
			 case21.style.backgroundImage = imagePion;
		}
		else if (case14.style.backgroundImage == "") {
			 case14.style.backgroundImage = imagePion;
		}
		else if (case7.style.backgroundImage == "") {
			 case7.style.backgroundImage = imagePion;
		}
	}

	if (testJauneGagne()) {
		document.location.href="PartieGagnee.html"; 
	}
	else if (testRougeGagne()) {
		document.location.href="PartieRougeGagnee.html"; 
	}  
}

function testJauneGagne(){

	console.log(case39.style.backgroundImage);

//Solution horizontale

	if (case39.style.backgroundImage == IMGPIONJAUNE && case40.style.backgroundImage == IMGPIONJAUNE && case41.style.backgroundImage == IMGPIONJAUNE && case42.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case38.style.backgroundImage == IMGPIONJAUNE && case39.style.backgroundImage == IMGPIONJAUNE && case40.style.backgroundImage == IMGPIONJAUNE && case41.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case37.style.backgroundImage == IMGPIONJAUNE && case38.style.backgroundImage == IMGPIONJAUNE && case39.style.backgroundImage == IMGPIONJAUNE && case40.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case36.style.backgroundImage == IMGPIONJAUNE && case37.style.backgroundImage == IMGPIONJAUNE && case38.style.backgroundImage == IMGPIONJAUNE && case39.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }


	else if (case32.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE && case34.style.backgroundImage == IMGPIONJAUNE && case35.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case31.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE && case34.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case30.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case29.style.backgroundImage == IMGPIONJAUNE && case30.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case25.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE && case28.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case24.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case23.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case22.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case18.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE && case21.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case17.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case16.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case15.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case11.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE && case13.style.backgroundImage == IMGPIONJAUNE && case14.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case10.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE && case13.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case9.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case8.style.backgroundImage == IMGPIONJAUNE && case9.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case4.style.backgroundImage == IMGPIONJAUNE && case5.style.backgroundImage == IMGPIONJAUNE && case6.style.backgroundImage == IMGPIONJAUNE && case7.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case3.style.backgroundImage == IMGPIONJAUNE && case4.style.backgroundImage == IMGPIONJAUNE && case5.style.backgroundImage == IMGPIONJAUNE && case6.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case2.style.backgroundImage == IMGPIONJAUNE && case3.style.backgroundImage == IMGPIONJAUNE && case4.style.backgroundImage == IMGPIONJAUNE && case5.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case1.style.backgroundImage == IMGPIONJAUNE && case2.style.backgroundImage == IMGPIONJAUNE && case3.style.backgroundImage == IMGPIONJAUNE && case4.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

//Solution verticale

	else if (case21.style.backgroundImage == IMGPIONJAUNE && case28.style.backgroundImage == IMGPIONJAUNE && case35.style.backgroundImage == IMGPIONJAUNE && case42.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case14.style.backgroundImage == IMGPIONJAUNE && case21.style.backgroundImage == IMGPIONJAUNE && case28.style.backgroundImage == IMGPIONJAUNE && case35.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case7.style.backgroundImage == IMGPIONJAUNE && case14.style.backgroundImage == IMGPIONJAUNE && case21.style.backgroundImage == IMGPIONJAUNE && case28.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case20.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE && case34.style.backgroundImage == IMGPIONJAUNE && case41.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case13.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE && case34.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case6.style.backgroundImage == IMGPIONJAUNE && case13.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case19.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE && case40.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case12.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case5.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case18.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE && case39.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case11.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case4.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case17.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE && case38.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case10.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case3.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case16.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE && case30.style.backgroundImage == IMGPIONJAUNE && case37.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case9.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE && case30.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case2.style.backgroundImage == IMGPIONJAUNE && case9.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case15.style.backgroundImage == IMGPIONJAUNE && case22.style.backgroundImage == IMGPIONJAUNE && case29.style.backgroundImage == IMGPIONJAUNE && case36.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case8.style.backgroundImage == IMGPIONJAUNE && case15.style.backgroundImage == IMGPIONJAUNE && case22.style.backgroundImage == IMGPIONJAUNE && case29.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case1.style.backgroundImage == IMGPIONJAUNE && case8.style.backgroundImage == IMGPIONJAUNE && case15.style.backgroundImage == IMGPIONJAUNE && case22.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

//Solution desd diagonales

	else if (case36.style.backgroundImage == IMGPIONJAUNE && case30.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case37.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE)
	{ return true;}
	else if (case38.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case39.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE && case21.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case29.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case30.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case31.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case13.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case32.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE && case14.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case22.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE && case4.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case23.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE && case5.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case24.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE && case6.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case25.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case13.style.backgroundImage == IMGPIONJAUNE && case7.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case42.style.backgroundImage == IMGPIONJAUNE && case34.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case41.style.backgroundImage == IMGPIONJAUNE && case33.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case40.style.backgroundImage == IMGPIONJAUNE && case32.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case39.style.backgroundImage == IMGPIONJAUNE && case31.style.backgroundImage == IMGPIONJAUNE && case23.style.backgroundImage == IMGPIONJAUNE && case15.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case35.style.backgroundImage == IMGPIONJAUNE && case27.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case34.style.backgroundImage == IMGPIONJAUNE && case26.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case33.style.backgroundImage == IMGPIONJAUNE && case25.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case9.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case32.style.backgroundImage == IMGPIONJAUNE && case24.style.backgroundImage == IMGPIONJAUNE && case16.style.backgroundImage == IMGPIONJAUNE && case8.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else if (case28.style.backgroundImage == IMGPIONJAUNE && case20.style.backgroundImage == IMGPIONJAUNE && case12.style.backgroundImage == IMGPIONJAUNE && case4.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case27.style.backgroundImage == IMGPIONJAUNE && case19.style.backgroundImage == IMGPIONJAUNE && case11.style.backgroundImage == IMGPIONJAUNE && case3.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case26.style.backgroundImage == IMGPIONJAUNE && case18.style.backgroundImage == IMGPIONJAUNE && case10.style.backgroundImage == IMGPIONJAUNE && case2.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }
	else if (case25.style.backgroundImage == IMGPIONJAUNE && case17.style.backgroundImage == IMGPIONJAUNE && case9.style.backgroundImage == IMGPIONJAUNE && case1.style.backgroundImage == IMGPIONJAUNE)
	{ return true; }

	else {return false;}
}


//Solution pour les pions ROUGE. 


function testRougeGagne(){

	console.log(case39.style.backgroundImage);

//Solution horizontale

	if (case39.style.backgroundImage == IMGPIONROUGE && case40.style.backgroundImage == IMGPIONROUGE && case41.style.backgroundImage == IMGPIONROUGE && case42.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case38.style.backgroundImage == IMGPIONROUGE && case39.style.backgroundImage == IMGPIONROUGE && case40.style.backgroundImage == IMGPIONROUGE && case41.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case37.style.backgroundImage == IMGPIONROUGE && case38.style.backgroundImage == IMGPIONROUGE && case39.style.backgroundImage == IMGPIONROUGE && case40.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case36.style.backgroundImage == IMGPIONROUGE && case37.style.backgroundImage == IMGPIONROUGE && case38.style.backgroundImage == IMGPIONROUGE && case39.style.backgroundImage == IMGPIONROUGE)
	{ return true; }


	else if (case32.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE && case34.style.backgroundImage == IMGPIONROUGE && case35.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case31.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE && case34.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case30.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case29.style.backgroundImage == IMGPIONROUGE && case30.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case25.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE && case28.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case24.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case23.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case22.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case18.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE && case21.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case17.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case16.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case15.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case11.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE && case13.style.backgroundImage == IMGPIONROUGE && case14.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case10.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE && case13.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case9.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case8.style.backgroundImage == IMGPIONROUGE && case9.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case4.style.backgroundImage == IMGPIONROUGE && case5.style.backgroundImage == IMGPIONROUGE && case6.style.backgroundImage == IMGPIONROUGE && case7.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case3.style.backgroundImage == IMGPIONROUGE && case4.style.backgroundImage == IMGPIONROUGE && case5.style.backgroundImage == IMGPIONROUGE && case6.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case2.style.backgroundImage == IMGPIONROUGE && case3.style.backgroundImage == IMGPIONROUGE && case4.style.backgroundImage == IMGPIONROUGE && case5.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case1.style.backgroundImage == IMGPIONROUGE && case2.style.backgroundImage == IMGPIONROUGE && case3.style.backgroundImage == IMGPIONROUGE && case4.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

//Solution verticale

	else if (case21.style.backgroundImage == IMGPIONROUGE && case28.style.backgroundImage == IMGPIONROUGE && case35.style.backgroundImage == IMGPIONROUGE && case42.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case14.style.backgroundImage == IMGPIONROUGE && case21.style.backgroundImage == IMGPIONROUGE && case28.style.backgroundImage == IMGPIONROUGE && case35.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case7.style.backgroundImage == IMGPIONROUGE && case14.style.backgroundImage == IMGPIONROUGE && case21.style.backgroundImage == IMGPIONROUGE && case28.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case20.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE && case34.style.backgroundImage == IMGPIONROUGE && case41.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case13.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE && case34.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case6.style.backgroundImage == IMGPIONROUGE && case13.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case19.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE && case40.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case12.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case5.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case18.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE && case39.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case11.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case4.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case17.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE && case38.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case10.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case3.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case16.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE && case30.style.backgroundImage == IMGPIONROUGE && case37.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case9.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE && case30.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case2.style.backgroundImage == IMGPIONROUGE && case9.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case15.style.backgroundImage == IMGPIONROUGE && case22.style.backgroundImage == IMGPIONROUGE && case29.style.backgroundImage == IMGPIONROUGE && case36.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case8.style.backgroundImage == IMGPIONROUGE && case15.style.backgroundImage == IMGPIONROUGE && case22.style.backgroundImage == IMGPIONROUGE && case29.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case1.style.backgroundImage == IMGPIONROUGE && case8.style.backgroundImage == IMGPIONROUGE && case15.style.backgroundImage == IMGPIONROUGE && case22.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

//Solution des diagonales

	else if (case36.style.backgroundImage == IMGPIONROUGE && case30.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case37.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE)
	{ return true;}
	else if (case38.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case39.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE && case21.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case29.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case30.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case31.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case13.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case32.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE && case14.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case22.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE && case4.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case23.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE && case5.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case24.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE && case6.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case25.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case13.style.backgroundImage == IMGPIONROUGE && case7.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case42.style.backgroundImage == IMGPIONROUGE && case34.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case41.style.backgroundImage == IMGPIONROUGE && case33.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case40.style.backgroundImage == IMGPIONROUGE && case32.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case39.style.backgroundImage == IMGPIONROUGE && case31.style.backgroundImage == IMGPIONROUGE && case23.style.backgroundImage == IMGPIONROUGE && case15.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case35.style.backgroundImage == IMGPIONROUGE && case27.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case34.style.backgroundImage == IMGPIONROUGE && case26.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case33.style.backgroundImage == IMGPIONROUGE && case25.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case9.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case32.style.backgroundImage == IMGPIONROUGE && case24.style.backgroundImage == IMGPIONROUGE && case16.style.backgroundImage == IMGPIONROUGE && case8.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else if (case28.style.backgroundImage == IMGPIONROUGE && case20.style.backgroundImage == IMGPIONROUGE && case12.style.backgroundImage == IMGPIONROUGE && case4.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case27.style.backgroundImage == IMGPIONROUGE && case19.style.backgroundImage == IMGPIONROUGE && case11.style.backgroundImage == IMGPIONROUGE && case3.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case26.style.backgroundImage == IMGPIONROUGE && case18.style.backgroundImage == IMGPIONROUGE && case10.style.backgroundImage == IMGPIONROUGE && case2.style.backgroundImage == IMGPIONROUGE)
	{ return true; }
	else if (case25.style.backgroundImage == IMGPIONROUGE && case17.style.backgroundImage == IMGPIONROUGE && case9.style.backgroundImage == IMGPIONROUGE && case1.style.backgroundImage == IMGPIONROUGE)
	{ return true; }

	else {return false;}
}