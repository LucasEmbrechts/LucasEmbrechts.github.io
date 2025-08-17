//----------------- GLOBALES -----------------------------
var tailleGrille;
var tourJ = document.getElementById('tourJ');
var testEgal = 1;
var largeur;
var victoire = document.getElementById('victoire');
var nomCase;
var pseudo1;
var pseudo2;

//Joueur 1 (affichage du rond)


function joueur1C(noCase){

	var el = document.getElementById(nomCase + noCase );

//Test si la case est déja utilisée
	if ((el.innerHTML =='<img src="../img/rond1.png">' || el.innerHTML =='<img src="../img/croix1.png">') || (el.innerHTML =='<img src="../img/rond2.png">' || el.innerHTML =='<img src="../img/croix2.png">')) {

		alert('Cette case est déjà utilisée');
//Test si la grille est en 8x8 ou 7x7 car bouton de tailles différentes 
	} else if (nomCase == "a7case" || nomCase == "a8case") {

		el.innerHTML = '<img src="../img/rond2.png">';

		changementJ2();
		victoireJ1();

	}else{

		el.innerHTML = '<img src="../img/rond1.png">';

		changementJ2();
		victoireJ1();

	}
}
//Joueur 2 (affichage de la croix)

function joueur2C(noCase){

	var el = document.getElementById(nomCase + noCase);

//Test si la case est déja utilisée

	if ((el.innerHTML =='<img src="../img/rond1.png">' || el.innerHTML =='<img src="../img/croix1.png">') || (el.innerHTML =='<img src="../img/rond2.png">' || el.innerHTML =='<img src="../img/croix2.png">')) {

		alert('Cette case est déjà utilisée');

//Test si la grille est en 8x8 ou 7x7 car bouton de tailles différentes 

	} else if (nomCase == "a7case" || nomCase == "a8case") {

		el.innerHTML = '<img src="../img/croix2.png">';

		changementJ1();
		victoireJ2();

	}else{

		el.innerHTML = '<img src="../img/croix1.png">';

		changementJ1();
		victoireJ2();

	}
}
//*********************************************************** TEST VICTOIRE POUR LES O***************************************************************



function victoireJ1(){
//Définition des variables dans un tableau
	var el = new Array();
	el.push('--');
	for (var i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}


	if(nomCase == "a3case"){

//****************************************************************** VICTOIRE GRILLE 3X3 *************************************************************************


//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------
		if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">') {

			
			el[1].innerHTML = '<img src="../img/rondWin1.png">';
			el[2].innerHTML = '<img src="../img/rondWin1.png">';
			el[3].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">') {

			el[4].innerHTML = '<img src="../img/rondWin1.png">';
			el[5].innerHTML = '<img src="../img/rondWin1.png">';
			el[6].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">') {

			el[7].innerHTML = '<img src="../img/rondWin1.png">';
			el[8].innerHTML = '<img src="../img/rondWin1.png">';
			el[9].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------
		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">'){

			el[1].innerHTML = '<img src="../img/rondWin1.png">';
			el[4].innerHTML = '<img src="../img/rondWin1.png">';
			el[7].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">'){

			el[2].innerHTML = '<img src="../img/rondWin1.png">';
			el[5].innerHTML = '<img src="../img/rondWin1.png">';
			el[8].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">'){

			el[3].innerHTML = '<img src="../img/rondWin1.png">';
			el[6].innerHTML = '<img src="../img/rondWin1.png">';
			el[9].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------
		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">') {

			el[1].innerHTML = '<img src="../img/rondWin1.png">';
			el[5].innerHTML = '<img src="../img/rondWin1.png">';
			el[9].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">'){

			el[7].innerHTML = '<img src="../img/rondWin1.png">';
			el[5].innerHTML = '<img src="../img/rondWin1.png">';
			el[3].innerHTML = '<img src="../img/rondWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
			victoire.style.display = "block";
			desact();

		} else{

			egalite();

		}
	}else if (nomCase == "a4case") {

//****************************************************************** VICTOIRE GRILLE 4X4 *************************************************************************

//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">') {
		
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();


//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">') {
		
		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {
		
		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}

	}else if (nomCase == "a5case") {

//****************************************************************** VICTOIRE GRILLE 5X5 *************************************************************************
		

//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">') {

		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">') {

		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">') {

		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}
	}else if (nomCase == "a6case") {

//****************************************************************** VICTOIRE GRILLE 6X6 *************************************************************************


//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">') {

		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">') {

		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">') {

		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">') {

		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[25].innerHTML == '<img src="../img/rond1.png">' && el[26].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">') {

		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[26].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">') {

		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[27].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">' && el[30].innerHTML == '<img src="../img/rond1.png">') {

		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		el[30].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[31].innerHTML == '<img src="../img/rond1.png">' && el[32].innerHTML == '<img src="../img/rond1.png">' && el[33].innerHTML == '<img src="../img/rond1.png">' && el[34].innerHTML == '<img src="../img/rond1.png">') {

		el[31].innerHTML = '<img src="../img/rondWin1.png">';
		el[32].innerHTML = '<img src="../img/rondWin1.png">';
		el[33].innerHTML = '<img src="../img/rondWin1.png">';
		el[34].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[32].innerHTML == '<img src="../img/rond1.png">' && el[33].innerHTML == '<img src="../img/rond1.png">' && el[34].innerHTML == '<img src="../img/rond1.png">' && el[35].innerHTML == '<img src="../img/rond1.png">') {

		el[32].innerHTML = '<img src="../img/rondWin1.png">';
		el[33].innerHTML = '<img src="../img/rondWin1.png">';
		el[34].innerHTML = '<img src="../img/rondWin1.png">';
		el[35].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[33].innerHTML == '<img src="../img/rond1.png">' && el[34].innerHTML == '<img src="../img/rond1.png">' && el[35].innerHTML == '<img src="../img/rond1.png">' && el[36].innerHTML == '<img src="../img/rond1.png">') {

		el[33].innerHTML = '<img src="../img/rondWin1.png">';
		el[34].innerHTML = '<img src="../img/rondWin1.png">';
		el[35].innerHTML = '<img src="../img/rondWin1.png">';
		el[36].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">' && el[31].innerHTML == '<img src="../img/rond1.png">') {

		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		el[31].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[8].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[26].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[14].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[26].innerHTML == '<img src="../img/rond1.png">' && el[32].innerHTML == '<img src="../img/rond1.png">') {

		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		el[32].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[15].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">' && el[33].innerHTML == '<img src="../img/rond1.png">') {

		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[33].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[16].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">' && el[34].innerHTML == '<img src="../img/rond1.png">') {

		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		el[34].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[11].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">') {

		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[17].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">' && el[35].innerHTML == '<img src="../img/rond1.png">') {

		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		el[35].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[12].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">' && el[30].innerHTML == '<img src="../img/rond1.png">') {

		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		el[30].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[18].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">' && el[30].innerHTML == '<img src="../img/rond1.png">' && el[36].innerHTML == '<img src="../img/rond1.png">') {

		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		el[30].innerHTML = '<img src="../img/rondWin1.png">';
		el[36].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[8].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">') {

		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[15].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[29].innerHTML == '<img src="../img/rond1.png">' && el[36].innerHTML == '<img src="../img/rond1.png">') {

		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[29].innerHTML = '<img src="../img/rondWin1.png">';
		el[36].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[30].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[30].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[14].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">' && el[35].innerHTML == '<img src="../img/rond1.png">') {

		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		el[35].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">' && el[34].innerHTML == '<img src="../img/rond1.png">') {

		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[34].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[26].innerHTML == '<img src="../img/rond1.png">') {

		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[16].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">' && el[26].innerHTML == '<img src="../img/rond1.png">' && el[31].innerHTML == '<img src="../img/rond1.png">') {

		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[26].innerHTML = '<img src="../img/rondWin1.png">';
		el[31].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[12].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">') {

		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[17].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[27].innerHTML == '<img src="../img/rond1.png">' && el[32].innerHTML == '<img src="../img/rond1.png">') {

		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[27].innerHTML = '<img src="../img/rondWin1.png">';
		el[32].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[18].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[28].innerHTML == '<img src="../img/rond1.png">' && el[33].innerHTML == '<img src="../img/rond1.png">') {

		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[28].innerHTML = '<img src="../img/rondWin1.png">';
		el[33].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}

	}else if (nomCase == "a7case") {

//****************************************************************** VICTOIRE GRILLE 7X7 *************************************************************************

//----------------------------------------------------------------------------- Horizontalement -----------------------------------------------------------------------------	
	

		if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[2].innerHTML == '<img src="../img/rond2.png">' && el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[6].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[6].innerHTML == '<img src="../img/rond2.png">' && el[7].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond2.png">' && el[9].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">') {

		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">') {

		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">') {

		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">') {

		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">') {

		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">') {

		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">') {

		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[29].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">') {

		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[30].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">') {

		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[31].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">') {

		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[36].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">') {

		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[37].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">') {

		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[38].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">') {

		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[43].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[44].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">') {

		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

	

		}else if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[8].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">') {

		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">') {

		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[9].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">') {

		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">') {

		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">') {

		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">') {

		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">') {

		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">') {

		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">') {

		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">') {

		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">') {

		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">') {

		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">') {

		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[21].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">') {

		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
	

// ----------------------------------------------------------------------------- Diagolalement -----------------------------------------------------------------------------

		}else if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[9].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[9].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">') {

		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[8].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">') {

		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[16].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[15].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[7].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">') {

		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[13].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">') {

		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[91].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[19].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">') {

		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[6].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">') {

		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[12].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">') {

		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();	

		}else if (el[5].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">') {

		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[14].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">') {

		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[20].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">') {

		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[21].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">') {

		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		}else{

			egalite();

		}
	
	}else if (nomCase == "a8case") {

//****************************************************************** VICTOIRE GRILLE 8X8 *************************************************************************
	

//-------------------------------------------------------------------------------------Horizontalement--------------------------------------------------------------- 	

	
		if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[2].innerHTML == '<img src="../img/rond2.png">' && el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[6].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[6].innerHTML == '<img src="../img/rond2.png">' && el[7].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[3].innerHTML = '<img src="../img/rondWin2.png">';	
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[4].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[6].innerHTML == '<img src="../img/rond2.png">' && el[7].innerHTML == '<img src="../img/rond2.png">' && el[8].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">') {

		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">') {

		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">') {

		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">') {

		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[25].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">') {

		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[26].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">') {

		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[27].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">') {

		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[33].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">') {

		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[34].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">') {

		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[35].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">') {

		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[41].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">') {

		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[42].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[43].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[49].innerHTML == '<img src="../img/rond2.png">' && el[50].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">') {

		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[50].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">') {

		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[51].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">' && el[56].innerHTML == '<img src="../img/rond2.png">') {

		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		el[56].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[57].innerHTML == '<img src="../img/rond2.png">' && el[58].innerHTML == '<img src="../img/rond2.png">' && el[59].innerHTML == '<img src="../img/rond2.png">' && el[60].innerHTML == '<img src="../img/rond2.png">' && el[61].innerHTML == '<img src="../img/rond2.png">' && el[62].innerHTML == '<img src="../img/rond2.png">') {

		el[57].innerHTML = '<img src="../img/rondWin2.png">';
		el[58].innerHTML = '<img src="../img/rondWin2.png">';
		el[59].innerHTML = '<img src="../img/rondWin2.png">';
		el[60].innerHTML = '<img src="../img/rondWin2.png">';
		el[61].innerHTML = '<img src="../img/rondWin2.png">';
		el[62].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[58].innerHTML == '<img src="../img/rond2.png">' && el[59].innerHTML == '<img src="../img/rond2.png">' && el[60].innerHTML == '<img src="../img/rond2.png">' && el[61].innerHTML == '<img src="../img/rond2.png">' && el[62].innerHTML == '<img src="../img/rond2.png">' && el[63].innerHTML == '<img src="../img/rond2.png">') {

		el[58].innerHTML = '<img src="../img/rondWin2.png">';
		el[59].innerHTML = '<img src="../img/rondWin2.png">';
		el[60].innerHTML = '<img src="../img/rondWin2.png">';
		el[61].innerHTML = '<img src="../img/rondWin2.png">';
		el[62].innerHTML = '<img src="../img/rondWin2.png">';
		el[63].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[59].innerHTML == '<img src="../img/rond2.png">' && el[60].innerHTML == '<img src="../img/rond2.png">' && el[61].innerHTML == '<img src="../img/rond2.png">' && el[62].innerHTML == '<img src="../img/rond2.png">' && el[63].innerHTML == '<img src="../img/rond2.png">' && el[64].innerHTML == '<img src="../img/rond2.png">') {

		el[59].innerHTML = '<img src="../img/rondWin2.png">';
		el[60].innerHTML = '<img src="../img/rondWin2.png">';
		el[61].innerHTML = '<img src="../img/rondWin2.png">';
		el[62].innerHTML = '<img src="../img/rondWin2.png">';
		el[63].innerHTML = '<img src="../img/rondWin2.png">';
		el[64].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[9].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond2.png">' && el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">') {

		el[9].innerHTML = '<img src="../img/rondWin2.png">';
		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[25].innerHTML == '<img src="../img/rond2.png">' && el[33].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">' && el[57].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[25].innerHTML = '<img src="../img/rondWin2.png">';
		el[33].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		el[57].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[642].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">' && el[50].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">' && el[50].innerHTML == '<img src="../img/rond2.png">' && el[58].innerHTML == '<img src="../img/rond2.png">') {

		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		el[58].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">') {

		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">' && el[59].innerHTML == '<img src="../img/rond2.png">') {

		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		el[59].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">') {

		el[4].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">') {

		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">' && el[60].innerHTML == '<img src="../img/rond2.png">') {

		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		el[60].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">') {

		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">') {

		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">' && el[61].innerHTML == '<img src="../img/rond2.png">') {

		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		el[61].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">') {

		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">') {

		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">' && el[62].innerHTML == '<img src="../img/rond2.png">') {

		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		el[62].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">') {

		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">' && el[63].innerHTML == '<img src="../img/rond2.png">') {

		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		el[63].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond2.png">' && el[16].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond2.png">' && el[24].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">' && el[56].innerHTML == '<img src="../img/rond2.png">') {

		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		el[56].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/rond2.png">' && el[32].innerHTML == '<img src="../img/rond2.png">' && el[40].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">' && el[5].innerHTML == '<img src="../img/rond2.png">' && el[64].innerHTML == '<img src="../img/rond2.png">') {

		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[32].innerHTML = '<img src="../img/rondWin2.png">';
		el[40].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		el[56].innerHTML = '<img src="../img/rondWin2.png">';
		el[64].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
// ----------------------------------------------------------------------------- Diagolalement -----------------------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond2.png">' && el[10].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">') {

		el[1].innerHTML = '<img src="../img/rondWin2.png">';
		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond2.png">' && el[19].innerHTML == '<img src="../img/rond2.png">' && el82[28].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">') {

		el[10].innerHTML = '<img src="../img/rondWin2.png">';
		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[46].innerHTML == '<img src="../img/rond2.png">' && el[55].innerHTML == '<img src="../img/rond2.png">' && el[64].innerHTML == '<img src="../img/rond2.png">') {

		el[19].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[46].innerHTML = '<img src="../img/rondWin2.png">';
		el[55].innerHTML = '<img src="../img/rondWin2.png">';
		el[64].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/rond2.png">' && el[18].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">') {

		el[5].innerHTML = '<img src="../img/rondWin2.png">';
		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[54].innerHTML == '<img src="../img/rond2.png">' && el[63].innerHTML == '<img src="../img/rond2.png">') {

		el[18].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[54].innerHTML = '<img src="../img/rondWin2.png">';
		el[63].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond2.png">' && el[26].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[53].innerHTML == '<img src="../img/rond2.png">' && el[62].innerHTML == '<img src="../img/rond2.png">') {

		el[17].innerHTML = '<img src="../img/rondWin2.png">';
		el[26].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[53].innerHTML = '<img src="../img/rondWin2.png">';
		el[62].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond2.png">' && el[11].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">') {

		el[2].innerHTML = '<img src="../img/rondWin2.png">';
		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[47].innerHTML == '<img src="../img/rond2.png">' && el[56].innerHTML == '<img src="../img/rond2.png">') {

		el[11].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[47].innerHTML = '<img src="../img/rondWin2.png">';
		el[56].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond2.png">' && el[12].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[39].innerHTML == '<img src="../img/rond2.png">' && el[48].innerHTML == '<img src="../img/rond2.png">') {

		el[3].innerHTML = '<img src="../img/rondWin2.png">';
		el[12].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[39].innerHTML = '<img src="../img/rondWin2.png">';
		el[48].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond2.png">' && el[15].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">') {

		el[8].innerHTML = '<img src="../img/rondWin2.png">';
		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/rond2.png">' && el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[50].innerHTML == '<img src="../img/rond2.png">') {

		el[15].innerHTML = '<img src="../img/rondWin2.png">';
		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/rond2.png">' && el[29].innerHTML == '<img src="../img/rond2.png">' && el[36].innerHTML == '<img src="../img/rond2.png">' && el[43].innerHTML == '<img src="../img/rond2.png">' && el[50].innerHTML == '<img src="../img/rond2.png">' && el[57].innerHTML == '<img src="../img/rond2.png">') {

		el[22].innerHTML = '<img src="../img/rondWin2.png">';
		el[29].innerHTML = '<img src="../img/rondWin2.png">';
		el[36].innerHTML = '<img src="../img/rondWin2.png">';
		el[43].innerHTML = '<img src="../img/rondWin2.png">';
		el[50].innerHTML = '<img src="../img/rondWin2.png">';
		el[57].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond2.png">' && el[14].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">') {

		el[7].innerHTML = '<img src="../img/rondWin2.png">';
		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/rond2.png">' && el[21].innerHTML == '<img src="../img/rond2.png">' && el[28].innerHTML == '<img src="../img/rond2.png">' && el[35].innerHTML == '<img src="../img/rond2.png">' && el[42].innerHTML == '<img src="../img/rond2.png">' && el[49].innerHTML == '<img src="../img/rond2.png">') {

		el[14].innerHTML = '<img src="../img/rondWin2.png">';
		el[21].innerHTML = '<img src="../img/rondWin2.png">';
		el[28].innerHTML = '<img src="../img/rondWin2.png">';
		el[35].innerHTML = '<img src="../img/rondWin2.png">';
		el[42].innerHTML = '<img src="../img/rondWin2.png">';
		el[49].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond2.png">' && el[13].innerHTML == '<img src="../img/rond2.png">' && el[20].innerHTML == '<img src="../img/rond2.png">' && el[27].innerHTML == '<img src="../img/rond2.png">' && el[34].innerHTML == '<img src="../img/rond2.png">' && el[41].innerHTML == '<img src="../img/rond2.png">') {

		el[6].innerHTML = '<img src="../img/rondWin2.png">';
		el[13].innerHTML = '<img src="../img/rondWin2.png">';
		el[20].innerHTML = '<img src="../img/rondWin2.png">';
		el[27].innerHTML = '<img src="../img/rondWin2.png">';
		el[34].innerHTML = '<img src="../img/rondWin2.png">';
		el[41].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond2.png">' && el[23].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">') {

		el[16].innerHTML = '<img src="../img/rondWin2.png">';
		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/rond2.png">' && el[30].innerHTML == '<img src="../img/rond2.png">' && el[37].innerHTML == '<img src="../img/rond2.png">' && el[44].innerHTML == '<img src="../img/rond2.png">' && el[51].innerHTML == '<img src="../img/rond2.png">' && el[58].innerHTML == '<img src="../img/rond2.png">') {

		el[23].innerHTML = '<img src="../img/rondWin2.png">';
		el[30].innerHTML = '<img src="../img/rondWin2.png">';
		el[37].innerHTML = '<img src="../img/rondWin2.png">';
		el[44].innerHTML = '<img src="../img/rondWin2.png">';
		el[51].innerHTML = '<img src="../img/rondWin2.png">';
		el[58].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/rond2.png">' && el[31].innerHTML == '<img src="../img/rond2.png">' && el[38].innerHTML == '<img src="../img/rond2.png">' && el[45].innerHTML == '<img src="../img/rond2.png">' && el[52].innerHTML == '<img src="../img/rond2.png">' && el[59].innerHTML == '<img src="../img/rond2.png">') {

		el[24].innerHTML = '<img src="../img/rondWin2.png">';
		el[31].innerHTML = '<img src="../img/rondWin2.png">';
		el[38].innerHTML = '<img src="../img/rondWin2.png">';
		el[45].innerHTML = '<img src="../img/rondWin2.png">';
		el[52].innerHTML = '<img src="../img/rondWin2.png">';
		el[59].innerHTML = '<img src="../img/rondWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else {

			egalite();
		}

	
}
}


//************************************************************* TEST DE VICTOIRE POUR LES X ********************************

function victoireJ2(){

//Définition des variables dans un tableau
	var el = new Array();
	el.push('--');
	for (var i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}



	if (nomCase == "a3case") {

//****************************************************************** VICTOIRE GRILLE 3X3 *************************************************************************


//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------
		if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">') {

			el[1].innerHTML = '<img src="../img/croixWin1.png">';
			el[2].innerHTML = '<img src="../img/croixWin1.png">';
			el[3].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">') {

			el[4].innerHTML = '<img src="../img/croixWin1.png">';
			el[5].innerHTML = '<img src="../img/croixWin1.png">';
			el[6].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">') {

			el[7].innerHTML = '<img src="../img/croixWin1.png">';
			el[8].innerHTML = '<img src="../img/croixWin1.png">';
			el[9].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------
		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">'){

			el[1].innerHTML = '<img src="../img/croixWin1.png">';
			el[4].innerHTML = '<img src="../img/croixWin1.png">';
			el[7].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">'){

			el[2].innerHTML = '<img src="../img/croixWin1.png">';
			el[5].innerHTML = '<img src="../img/croixWin1.png">';
			el[8].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">'){

			el[3].innerHTML = '<img src="../img/croixWin1.png">';
			el[6].innerHTML = '<img src="../img/croixWin1.png">';
			el[9].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------
		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">') {

			el[1].innerHTML = '<img src="../img/croixWin1.png">';
			el[5].innerHTML = '<img src="../img/croixWin1.png">';
			el[9].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">'){

			el[3].innerHTML = '<img src="../img/croixWin1.png">';
			el[5].innerHTML = '<img src="../img/croixWin1.png">';
			el[7].innerHTML = '<img src="../img/croixWin1.png">';
			victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
			victoire.style.display = "block";
			desact();

		} else {

			egalite();

		}
	}else if (nomCase == "a4case") {

//****************************************************************** VICTOIRE GRILLE 4X4 *************************************************************************


//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------
		if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">') {
		
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();;

		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">') {
		
		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();;

		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
//-------------------------------------------------------------
		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">') {
		
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else{

			egalite();

		}
	}else if (nomCase == "a5case") {

//****************************************************************** VICTOIRE GRILLE 5X5 *************************************************************************
		

//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">') {

		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">') {

		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">') {

		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

			} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
			desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		vitoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}

	} else if (nomCase == "a6case") {

//****************************************************************** VICTOIRE GRILLE 6X6 **************************************************************************************


//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">') {

		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">') {

		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">') {

		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">') {

		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[25].innerHTML == '<img src="../img/croix1.png">' && el[26].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">') {

		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[26].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">') {

		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[27].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">' && el[30].innerHTML == '<img src="../img/croix1.png">') {

		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		el[30].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[31].innerHTML == '<img src="../img/croix1.png">' && el[32].innerHTML == '<img src="../img/croix1.png">' && el[33].innerHTML == '<img src="../img/croix1.png">' && el[34].innerHTML == '<img src="../img/croix1.png">') {

		el[31].innerHTML = '<img src="../img/croixWin1.png">';
		el[32].innerHTML = '<img src="../img/croixWin1.png">';
		el[33].innerHTML = '<img src="../img/croixWin1.png">';
		el[34].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[32].innerHTML == '<img src="../img/croix1.png">' && el[33].innerHTML == '<img src="../img/croix1.png">' && el[34].innerHTML == '<img src="../img/croix1.png">' && el[35].innerHTML == '<img src="../img/croix1.png">') {

		el[32].innerHTML = '<img src="../img/croixWin1.png">';
		el[33].innerHTML = '<img src="../img/croixWin1.png">';
		el[34].innerHTML = '<img src="../img/croixWin1.png">';
		el[35].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[33].innerHTML == '<img src="../img/croix1.png">' && el[34].innerHTML == '<img src="../img/croix1.png">' && el[35].innerHTML == '<img src="../img/croix1.png">' && el[36].innerHTML == '<img src="../img/croix1.png">') {

		el[33].innerHTML = '<img src="../img/croixWin1.png">';
		el[34].innerHTML = '<img src="../img/croixWin1.png">';
		el[35].innerHTML = '<img src="../img/croixWin1.png">';
		el[36].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">' && el[31].innerHTML == '<img src="../img/croix1.png">') {

		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		el[31].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[8].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[26].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[14].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[26].innerHTML == '<img src="../img/croix1.png">' && el[32].innerHTML == '<img src="../img/croix1.png">') {

		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		el[32].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[15].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">' && el[33].innerHTML == '<img src="../img/croix1.png">') {

		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[33].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[16].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">' && el[34].innerHTML == '<img src="../img/croix1.png">') {

		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		el[34].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[11].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">') {

		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[17].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">' && el[35].innerHTML == '<img src="../img/croix1.png">') {

		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		el[35].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[12].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">' && el[30].innerHTML == '<img src="../img/croix1.png">') {

		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		el[30].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[18].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">' && el[30].innerHTML == '<img src="../img/croix1.png">' && el[36].innerHTML == '<img src="../img/croix1.png">') {

		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		el[30].innerHTML = '<img src="../img/croixWin1.png">';
		el[36].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[8].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">') {

		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[15].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[29].innerHTML == '<img src="../img/croix1.png">' && el[36].innerHTML == '<img src="../img/croix1.png">') {

		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[29].innerHTML = '<img src="../img/croixWin1.png">';
		el[36].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[30].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[30].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[14].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">' && el[35].innerHTML == '<img src="../img/croix1.png">') {

		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		el[35].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[13].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">' && el[34].innerHTML == '<img src="../img/croix1.png">') {

		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[34].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[26].innerHTML == '<img src="../img/croix1.png">') {

		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[16].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">' && el[26].innerHTML == '<img src="../img/croix1.png">' && el[31].innerHTML == '<img src="../img/croix1.png">') {

		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[26].innerHTML = '<img src="../img/croixWin1.png">';
		el[31].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[12].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">') {

		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[17].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[27].innerHTML == '<img src="../img/croix1.png">' && el[32].innerHTML == '<img src="../img/croix1.png">') {

		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[27].innerHTML = '<img src="../img/croixWin1.png">';
		el[32].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else if (el[18].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[28].innerHTML == '<img src="../img/croix1.png">' && el[33].innerHTML == '<img src="../img/croix1.png">') {

		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[28].innerHTML = '<img src="../img/croixWin1.png">';
		el[33].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}

	}else if (nomCase == "a7case") {

//****************************************************************** VICTOIRE GRILLE 7X7 *************************************************************************


//----------------------------------------------------------------------------- Horizontalement -----------------------------------------------------------------------------	
	

		if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[2].innerHTML == '<img src="../img/croix2.png">' && el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[6].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[6].innerHTML == '<img src="../img/croix2.png">' && el[7].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix2.png">' && el[9].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">') {

		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">') {

		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">') {

		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">') {

		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">') {

		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">') {

		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">') {

		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[29].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">') {

		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[30].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">') {

		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[31].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">') {

		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[36].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">') {

		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[37].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">') {

		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[38].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">') {

		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[43].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[44].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">') {

		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

	

		}else if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[8].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">') {

		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">') {

		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[9].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">') {

		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">') {

		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">') {

		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">') {

		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">') {

		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">') {

		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">') {

		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">') {

		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">') {

		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">') {

		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">') {

		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[21].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">') {

		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
	

// ----------------------------------------------------------------------------- Diagolalement -----------------------------------------------------------------------------

		}else if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[9].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[9].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">') {

		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[8].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">') {

		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[16].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[15].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[7].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">') {

		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[13].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">') {

		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[19].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">') {

		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[6].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">') {

		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[12].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">') {

		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();	

		}else if (el[5].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">') {

		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[14].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">') {

		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[20].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">') {

		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();

		}else if (el[21].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">') {

		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo2 + '';
		victoire.style.display = "block";
		desact();
		
		} else {

			egalite();

		}

	}else if (nomCase == "a8case") {

//****************************************************************** VICTOIRE GRILLE 8X8 *************************************************************************



//-------------------------------------------------------------------------------------Horizontalement--------------------------------------------------------------- 	

	
		if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[2].innerHTML == '<img src="../img/croix2.png">' && el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[6].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[6].innerHTML == '<img src="../img/croix2.png">' && el[7].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[3].innerHTML = '<img src="../img/croixWin2.png">';	
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[4].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[6].innerHTML == '<img src="../img/croix2.png">' && el[7].innerHTML == '<img src="../img/croix2.png">' && el[8].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">') {

		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">') {

		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">') {

		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">') {

		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[25].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">') {

		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[26].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">') {

		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[27].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">') {

		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[33].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">') {

		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[34].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">') {

		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[35].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">') {

		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		}else if (el[41].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">') {

		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[42].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[43].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[49].innerHTML == '<img src="../img/croix2.png">' && el[50].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">') {

		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[50].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">') {

		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[51].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">' && el[56].innerHTML == '<img src="../img/croix2.png">') {

		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		el[56].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[57].innerHTML == '<img src="../img/croix2.png">' && el[58].innerHTML == '<img src="../img/croix2.png">' && el[59].innerHTML == '<img src="../img/croix2.png">' && el[60].innerHTML == '<img src="../img/croix2.png">' && el[61].innerHTML == '<img src="../img/croix2.png">' && el[62].innerHTML == '<img src="../img/croix2.png">') {

		el[57].innerHTML = '<img src="../img/croixWin2.png">';
		el[58].innerHTML = '<img src="../img/croixWin2.png">';
		el[59].innerHTML = '<img src="../img/croixWin2.png">';
		el[60].innerHTML = '<img src="../img/croixWin2.png">';
		el[61].innerHTML = '<img src="../img/croixWin2.png">';
		el[62].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[58].innerHTML == '<img src="../img/croix2.png">' && el[59].innerHTML == '<img src="../img/croix2.png">' && el[60].innerHTML == '<img src="../img/croix2.png">' && el[61].innerHTML == '<img src="../img/croix2.png">' && el[62].innerHTML == '<img src="../img/croix2.png">' && el[63].innerHTML == '<img src="../img/croix2.png">') {

		el[58].innerHTML = '<img src="../img/croixWin2.png">';
		el[59].innerHTML = '<img src="../img/croixWin2.png">';
		el[60].innerHTML = '<img src="../img/croixWin2.png">';
		el[61].innerHTML = '<img src="../img/croixWin2.png">';
		el[62].innerHTML = '<img src="../img/croixWin2.png">';
		el[63].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[59].innerHTML == '<img src="../img/croix2.png">' && el[60].innerHTML == '<img src="../img/croix2.png">' && el[61].innerHTML == '<img src="../img/croix2.png">' && el[62].innerHTML == '<img src="../img/croix2.png">' && el[63].innerHTML == '<img src="../img/croix2.png">' && el[64].innerHTML == '<img src="../img/croix2.png">') {

		el[59].innerHTML = '<img src="../img/croixWin2.png">';
		el[60].innerHTML = '<img src="../img/croixWin2.png">';
		el[61].innerHTML = '<img src="../img/croixWin2.png">';
		el[62].innerHTML = '<img src="../img/croixWin2.png">';
		el[63].innerHTML = '<img src="../img/croixWin2.png">';
		el[64].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[9].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix2.png">' && el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">') {

		el[9].innerHTML = '<img src="../img/croixWin2.png">';
		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[25].innerHTML == '<img src="../img/croix2.png">' && el[33].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">' && el[57].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[25].innerHTML = '<img src="../img/croixWin2.png">';
		el[33].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		el[57].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[642].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">' && el[50].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">' && el[50].innerHTML == '<img src="../img/croix2.png">' && el[58].innerHTML == '<img src="../img/croix2.png">') {

		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		el[58].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">') {

		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">' && el[59].innerHTML == '<img src="../img/croix2.png">') {

		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		el[59].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">') {

		el[4].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">') {

		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[20].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">' && el[60].innerHTML == '<img src="../img/croix2.png">') {

		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		el[60].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">') {

		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[13].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">') {

		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">' && el[61].innerHTML == '<img src="../img/croix2.png">') {

		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		el[61].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">') {

		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">') {

		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">' && el[62].innerHTML == '<img src="../img/croix2.png">') {

		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		el[62].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">') {

		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">' && el[63].innerHTML == '<img src="../img/croix2.png">') {

		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		el[63].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix2.png">' && el[16].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix2.png">' && el[24].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">' && el[56].innerHTML == '<img src="../img/croix2.png">') {

		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		el[56].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/croix2.png">' && el[32].innerHTML == '<img src="../img/croix2.png">' && el[40].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">' && el[5].innerHTML == '<img src="../img/croix2.png">' && el[64].innerHTML == '<img src="../img/croix2.png">') {

		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[32].innerHTML = '<img src="../img/croixWin2.png">';
		el[40].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		el[56].innerHTML = '<img src="../img/croixWin2.png">';
		el[64].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
// ----------------------------------------------------------------------------- Diagolalement -----------------------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix2.png">' && el[10].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">') {

		el[1].innerHTML = '<img src="../img/croixWin2.png">';
		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix2.png">' && el[19].innerHTML == '<img src="../img/croix2.png">' && el82[28].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">') {

		el[10].innerHTML = '<img src="../img/croixWin2.png">';
		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[19].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[46].innerHTML == '<img src="../img/croix2.png">' && el[55].innerHTML == '<img src="../img/croix2.png">' && el[64].innerHTML == '<img src="../img/croix2.png">') {

		el[19].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[46].innerHTML = '<img src="../img/croixWin2.png">';
		el[55].innerHTML = '<img src="../img/croixWin2.png">';
		el[64].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/croix2.png">' && el[18].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">') {

		el[5].innerHTML = '<img src="../img/croixWin2.png">';
		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[18].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[54].innerHTML == '<img src="../img/croix2.png">' && el[63].innerHTML == '<img src="../img/croix2.png">') {

		el[18].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[54].innerHTML = '<img src="../img/croixWin2.png">';
		el[63].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix2.png">' && el[26].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[53].innerHTML == '<img src="../img/croix2.png">' && el[62].innerHTML == '<img src="../img/croix2.png">') {

		el[17].innerHTML = '<img src="../img/croixWin2.png">';
		el[26].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[53].innerHTML = '<img src="../img/croixWin2.png">';
		el[62].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix2.png">' && el[11].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">') {

		el[2].innerHTML = '<img src="../img/croixWin2.png">';
		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[47].innerHTML == '<img src="../img/croix2.png">' && el[56].innerHTML == '<img src="../img/croix2.png">') {

		el[11].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[47].innerHTML = '<img src="../img/croixWin2.png">';
		el[56].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix2.png">' && el[12].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[39].innerHTML == '<img src="../img/croix2.png">' && el[48].innerHTML == '<img src="../img/croix2.png">') {

		el[3].innerHTML = '<img src="../img/croixWin2.png">';
		el[12].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[39].innerHTML = '<img src="../img/croixWin2.png">';
		el[48].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix2.png">' && el[15].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">') {

		el[8].innerHTML = '<img src="../img/croixWin2.png">';
		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[15].innerHTML == '<img src="../img/croix2.png">' && el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[50].innerHTML == '<img src="../img/croix2.png">') {

		el[15].innerHTML = '<img src="../img/croixWin2.png">';
		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/croix2.png">' && el[29].innerHTML == '<img src="../img/croix2.png">' && el[36].innerHTML == '<img src="../img/croix2.png">' && el[43].innerHTML == '<img src="../img/croix2.png">' && el[50].innerHTML == '<img src="../img/croix2.png">' && el[57].innerHTML == '<img src="../img/croix2.png">') {

		el[22].innerHTML = '<img src="../img/croixWin2.png">';
		el[29].innerHTML = '<img src="../img/croixWin2.png">';
		el[36].innerHTML = '<img src="../img/croixWin2.png">';
		el[43].innerHTML = '<img src="../img/croixWin2.png">';
		el[50].innerHTML = '<img src="../img/croixWin2.png">';
		el[57].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix2.png">' && el[14].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">') {

		el[7].innerHTML = '<img src="../img/croixWin2.png">';
		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[14].innerHTML == '<img src="../img/croix2.png">' && el[21].innerHTML == '<img src="../img/croix2.png">' && el[28].innerHTML == '<img src="../img/croix2.png">' && el[35].innerHTML == '<img src="../img/croix2.png">' && el[42].innerHTML == '<img src="../img/croix2.png">' && el[49].innerHTML == '<img src="../img/croix2.png">') {

		el[14].innerHTML = '<img src="../img/croixWin2.png">';
		el[21].innerHTML = '<img src="../img/croixWin2.png">';
		el[28].innerHTML = '<img src="../img/croixWin2.png">';
		el[35].innerHTML = '<img src="../img/croixWin2.png">';
		el[42].innerHTML = '<img src="../img/croixWin2.png">';
		el[49].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix2.png">' && el[13].innerHTML == '<img src="../img/croix2.png">' && el[20].innerHTML == '<img src="../img/croix2.png">' && el[27].innerHTML == '<img src="../img/croix2.png">' && el[34].innerHTML == '<img src="../img/croix2.png">' && el[41].innerHTML == '<img src="../img/croix2.png">') {

		el[6].innerHTML = '<img src="../img/croixWin2.png">';
		el[13].innerHTML = '<img src="../img/croixWin2.png">';
		el[20].innerHTML = '<img src="../img/croixWin2.png">';
		el[27].innerHTML = '<img src="../img/croixWin2.png">';
		el[34].innerHTML = '<img src="../img/croixWin2.png">';
		el[41].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix2.png">' && el[23].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">') {

		el[16].innerHTML = '<img src="../img/croixWin2.png">';
		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[23].innerHTML == '<img src="../img/croix2.png">' && el[30].innerHTML == '<img src="../img/croix2.png">' && el[37].innerHTML == '<img src="../img/croix2.png">' && el[44].innerHTML == '<img src="../img/croix2.png">' && el[51].innerHTML == '<img src="../img/croix2.png">' && el[58].innerHTML == '<img src="../img/croix2.png">') {

		el[23].innerHTML = '<img src="../img/croixWin2.png">';
		el[30].innerHTML = '<img src="../img/croixWin2.png">';
		el[37].innerHTML = '<img src="../img/croixWin2.png">';
		el[44].innerHTML = '<img src="../img/croixWin2.png">';
		el[51].innerHTML = '<img src="../img/croixWin2.png">';
		el[58].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else if (el[24].innerHTML == '<img src="../img/croix2.png">' && el[31].innerHTML == '<img src="../img/croix2.png">' && el[38].innerHTML == '<img src="../img/croix2.png">' && el[45].innerHTML == '<img src="../img/croix2.png">' && el[52].innerHTML == '<img src="../img/croix2.png">' && el[59].innerHTML == '<img src="../img/croix2.png">') {

		el[24].innerHTML = '<img src="../img/croixWin2.png">';
		el[31].innerHTML = '<img src="../img/croixWin2.png">';
		el[38].innerHTML = '<img src="../img/croixWin2.png">';
		el[45].innerHTML = '<img src="../img/croixWin2.png">';
		el[52].innerHTML = '<img src="../img/croixWin2.png">';
		el[59].innerHTML = '<img src="../img/croixWin2.png">';
		victoire.innerHTML = 'Victoire de ' + pseudo1 + '';
		victoire.style.display = "block";
		desact();
		
		} else {

			egalite();
		}	
	}
}


//--------------------------------------------------------------FONCTION GLOBALES--------------------------------------------------------------

// Changement de onclick (passer de jouer 1 à joueur 2)
function changementJ2(){

	for (var i = 1; i <= tailleGrille; i++){

		document.getElementById(nomCase + i).setAttribute("onClick", "joueur2C(" + i + ")");

	}

	if (pseudo2 == "Joueur 2") {

		tourJ.innerHTML = 'Tour du ' + pseudo2;

	} else {

		tourJ.innerHTML = 'Tour de ' + pseudo2;

	}


}

// Changement de onclick (passer de jouer 1 à joueur 2)
function changementJ1(){

	for (var i = 1; i <= tailleGrille; i++){

		document.getElementById(nomCase + i + '').setAttribute("onClick", "joueur1C(" + i + ")");

	}	

	if (pseudo1 == "Joueur 1") {

		tourJ.innerHTML = 'Tour du ' + pseudo1;

	} else {

		tourJ.innerHTML = 'Tour de ' + pseudo1;

	}
}

//Fonction test d'égalité
function egalite(){
	
	

	if (testEgal == tailleGrille) {

		victoire.innerHTML = 'Égalité';
		victoire.style.display = "block";
		victoire.style.fontSize = "5ex";
		desact();

	}else{

		testEgal++;

	}

}
//Fonction désactiver les boutons apres victoire / égalité
function desact(){

	for (var i = 1; i <= tailleGrille; i++){

		document.getElementById(nomCase + i + '').setAttribute("onClick","");

	}

	tourJ.style.display = "none";

}

//Fonction permettant pour rejouer (meme taille de grille + variables remise par defaut)
function rejouer(taille){
	victoire.style.display = "none";
	testEgal = "1";
	affichage(taille);
	tourJ.innerHTML = "Tour du joueur 1"

}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ AFFICHAGE DES GRILLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function affichage(taille, joueur1, joueur2){
//Définition des variables + numéro case grille
	var monTableau = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64];
	var element = document.getElementById("grille");
	var monContenu = "";
	var i;
	tailleGrille = taille*taille;
	var but = document.getElementById('entre');
	var inpu = document.getElementById('taille');
	var tourJ = document.getElementById('tourJ');
	var rej = document.getElementById('rejouer');
	pseudo1 = joueur1;
	pseudo2 = joueur2;

// Définition pseudo si aucun pseudo n'a été écris 

	if (pseudo1 == "") {

		pseudo1 = "Joueur 1";

	} else if (pseudo2 == "") {

		pseudo2 = "Joueur 2";

	}
//Afficahge grille 3x3
			if (taille == 3) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a3case' + monTableau[i] + '" class="case1" onclick="joueur1C('+ monTableau[i] +')"></div>';
					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "42%";
					element.style.marginTop = "13%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a3case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';

//Afficahge grille 4x4
			}else if (taille == 4) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a4case' + monTableau[i] + '" class="case2" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "38%";
					element.style.marginTop = "9%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a4case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';
//Afficahge grille 5x5
			}else if (taille == 5) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a5case' + monTableau[i] + '" class="case3" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "36%";
					element.style.marginTop = "7%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a5case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';
//Afficahge grille 6x6
			}else if (taille == 6) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a6case' + monTableau[i] + '" class="case4" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "34%";
					element.style.marginTop = "4%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a6case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';
//Afficahge grille 7x7
			}else if (taille == 7) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a7case' + monTableau[i] + '" class="case5" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "33%";
					element.style.marginTop = "3%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a7case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';
//Afficahge grille 8x8
			}else if (taille == 8) {

					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a8case' + monTableau[i] + '" class="case6" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

					but.style.display = "none";
					inpu.style.display = "none";
					element.style.marginLeft = "31%";
					element.style.marginTop = "2%";
					tourJ.style.display = "block";
					tourJ.innerHTML = 'Tour de ' + pseudo1;
					nomCase = "a8case";
					rej.style.display = "block";
					document.getElementById('joueur1').style.display = 'none';
					document.getElementById('joueur2').style.display = 'none';
//Si la taille selectionée n'est pas valide 
			}else {
				alert('Veuillez saisir une taile de grille entre 3 et 8 ');
			}

	element.innerHTML  = monContenu;

	
	
}