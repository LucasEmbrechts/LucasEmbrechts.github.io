//Affichage de la grille
lancement();

// Varibales globales

var tailleGrille;
var nomCase;
var testEgal = 1;
var victoire = document.getElementById('victoire');

//Fonction permettant au joueur 1  de jouer (O)

function joueur1C(noCase){

	var el = document.getElementById(nomCase + noCase );

//Test pour voir si la case est utilisée 

	if (el.innerHTML =='<img src="../img/rond1.png">' || el.innerHTML =='<img src="../img/croix1.png">') {

		alert('Cette case est déjà utilisée');

	}else{

		el.innerHTML = '<img src="../img/rond1.png">';

		testRond();


	}
}

// TEST DE VICTOIRE 

function testRond (){

//Définition des variables dans un tableau

	var el = new Array();
	el.push('--');
	for (var i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}

//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

		if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[3].innerHTML == '<img src="../img/rond1.png">' && el[4].innerHTML == '<img src="../img/rond1.png">' && el[5].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">') {

		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">') {

		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[11].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[11].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">') {

		el[3].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[23].innerHTML == '<img src="../img/rond1.png">') {

		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[23].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[15].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[15].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/rond1.png">' && el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">') {

		el[1].innerHTML = '<img src="../img/rondWin1.png">';
		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[19].innerHTML == '<img src="../img/rond1.png">' && el[25].innerHTML == '<img src="../img/rond1.png">') {

		el[7].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[19].innerHTML = '<img src="../img/rondWin1.png">';
		el[25].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[20].innerHTML == '<img src="../img/rond1.png">') {

		el[2].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[20].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[24].innerHTML == '<img src="../img/rond1.png">') {

		el[6].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[24].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		}else if (el[5].innerHTML == '<img src="../img/rond1.png">' && el[9].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">') {

		el[5].innerHTML = '<img src="../img/rondWin1.png">';
		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/rond1.png">' && el[13].innerHTML == '<img src="../img/rond1.png">' && el[17].innerHTML == '<img src="../img/rond1.png">' && el[21].innerHTML == '<img src="../img/rond1.png">') {

		el[9].innerHTML = '<img src="../img/rondWin1.png">';
		el[13].innerHTML = '<img src="../img/rondWin1.png">';
		el[17].innerHTML = '<img src="../img/rondWin1.png">';
		el[21].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/rond1.png">' && el[8].innerHTML == '<img src="../img/rond1.png">' && el[12].innerHTML == '<img src="../img/rond1.png">' && el[16].innerHTML == '<img src="../img/rond1.png">') {

		el[4].innerHTML = '<img src="../img/rondWin1.png">';
		el[8].innerHTML = '<img src="../img/rondWin1.png">';
		el[12].innerHTML = '<img src="../img/rondWin1.png">';
		el[16].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/rond1.png">' && el[14].innerHTML == '<img src="../img/rond1.png">' && el[18].innerHTML == '<img src="../img/rond1.png">' && el[22].innerHTML == '<img src="../img/rond1.png">') {

		el[10].innerHTML = '<img src="../img/rondWin1.png">';
		el[14].innerHTML = '<img src="../img/rondWin1.png">';
		el[18].innerHTML = '<img src="../img/rondWin1.png">';
		el[22].innerHTML = '<img src="../img/rondWin1.png">';
		victoire.innerHTML = 'Vous avez gagné !';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();
			attaque();

		}
}
//Test victoire pour le bot 

function testCroix(){

// définition des variables dans un tableau

	var el = new Array();
	el.push('--');
	for (var i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}
//-------------------------------------------------------------------------------------Horizontalement---------------------------------------------------------------

	if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[3].innerHTML == '<img src="../img/croix1.png">' && el[4].innerHTML == '<img src="../img/croix1.png">' && el[5].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[11].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">') {

		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[12].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">') {

		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[16].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[17].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[21].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[22].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		
//-------------------------------------------------------------------------------------Verticalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[11].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[11].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[3].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">') {

		el[3].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[8].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[23].innerHTML == '<img src="../img/croix1.png">') {

		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[23].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[15].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[15].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();
		
//-------------------------------------------------------------------------------------Diagonalement---------------------------------------------------------------

		} else if (el[1].innerHTML == '<img src="../img/croix1.png">' && el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">') {

		el[1].innerHTML = '<img src="../img/croixWin1.png">';
		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[7].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[19].innerHTML == '<img src="../img/croix1.png">' && el[25].innerHTML == '<img src="../img/croix1.png">') {

		el[7].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[19].innerHTML = '<img src="../img/croixWin1.png">';
		el[25].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[2].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[20].innerHTML == '<img src="../img/croix1.png">') {

		el[2].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[20].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[6].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[24].innerHTML == '<img src="../img/croix1.png">') {

		el[6].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[24].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		}else if (el[5].innerHTML == '<img src="../img/croix1.png">' && el[9].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">') {

		el[5].innerHTML = '<img src="../img/croixWin1.png">';
		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[9].innerHTML == '<img src="../img/croix1.png">' && el[13].innerHTML == '<img src="../img/croix1.png">' && el[17].innerHTML == '<img src="../img/croix1.png">' && el[21].innerHTML == '<img src="../img/croix1.png">') {

		el[9].innerHTML = '<img src="../img/croixWin1.png">';
		el[13].innerHTML = '<img src="../img/croixWin1.png">';
		el[17].innerHTML = '<img src="../img/croixWin1.png">';
		el[21].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[4].innerHTML == '<img src="../img/croix1.png">' && el[8].innerHTML == '<img src="../img/croix1.png">' && el[12].innerHTML == '<img src="../img/croix1.png">' && el[16].innerHTML == '<img src="../img/croix1.png">') {

		el[4].innerHTML = '<img src="../img/croixWin1.png">';
		el[8].innerHTML = '<img src="../img/croixWin1.png">';
		el[12].innerHTML = '<img src="../img/croixWin1.png">';
		el[16].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else if (el[10].innerHTML == '<img src="../img/croix1.png">' && el[14].innerHTML == '<img src="../img/croix1.png">' && el[18].innerHTML == '<img src="../img/croix1.png">' && el[22].innerHTML == '<img src="../img/croix1.png">') {

		el[10].innerHTML = '<img src="../img/croixWin1.png">';
		el[14].innerHTML = '<img src="../img/croixWin1.png">';
		el[18].innerHTML = '<img src="../img/croixWin1.png">';
		el[22].innerHTML = '<img src="../img/croixWin1.png">';
		victoire.innerHTML = 'Vous avez perdu';
		victoire.style.display = "block";
		desact();

		} else {

			egalite();

		}

}




// Intéligeance artificielle

//Fontion attaque (place un croix pour gagner quand 3 croix sont alignée)

function attaque(){

//Définition des variables dans un tableau

	console.log('test');
	var el = new Array();
	var i;
	var aDef = "faux";
	el.push('--');

	for (i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}

// test pour la victoire
	
	for (i = 0; i < possi.length; i++) {

		if(el[possi[i].first].innerHTML == '<img src="../img/croix1.png">' && el[possi[i].sec].innerHTML == '<img src="../img/croix1.png">' && el[possi[i].third].innerHTML == '<img src="../img/croix1.png">' && el[possi[i].cross].innerHTML == ""){

			el[possi[i].cross].innerHTML = '<img src="../img/croix1.png">';
			aDef = "vrai";
			i = possi.length;
			testCroix();

		}

	}

//Si aucune possibilité trouvée, lance la défense

	if (aDef == "faux") {

		defense();

	}

}

function defense(){

//Définition des variables dans un tableau

	var el = new Array();
	var i;
	var aDef = "faux";
	el.push('--');

	for (i = 1; i <= tailleGrille; i++){

		el.push(document.getElementById(nomCase + i + ''));
	}

// test pour la defense

	for (i = 0; i < possi.length; i++) {

		if(el[possi[i].first].innerHTML == '<img src="../img/rond1.png">' && el[possi[i].sec].innerHTML == '<img src="../img/rond1.png">' && el[possi[i].third].innerHTML == '<img src="../img/rond1.png">' && el[possi[i].cross].innerHTML == ""){

			el[possi[i].cross].innerHTML = '<img src="../img/croix1.png">';
			aDef = "vrai";
			i = possi.length;
			testCroix();

		}
	}

//Si aucune possibilité trouvée, lance la fontion pour mettre un point de manière aléatoire
	if (aDef == "faux") {

		nombreAleatoire(Math.floor(Math.random() * (25 - 1 + 1) ) + 1);

	}

}



//Met un nombre aléatoire 

function nombreAleatoire(nbr){

	if (testEgal != 25){

//Si la case est déja utilisé , il génère un nouveau jusqu'à tomber sur une case libre

		if (document.getElementById(nomCase + nbr ).innerHTML == '<img src="../img/rond1.png">' || document.getElementById(nomCase + nbr ).innerHTML == '<img src="../img/croix1.png">'){

			nombreAleatoire(Math.floor(Math.random() * (25 - 1 + 1) ) + 1);

		}  else{
//Met une croix dans une case libre
			document.getElementById(nomCase + nbr ).innerHTML = '<img src="../img/croix1.png">';
			testCroix();

		}
	}
}








// Fonction globale 

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


}


function rejouer(){
	victoire.style.display = "none";
	testEgal = "1";
	lancement();


}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ AFFICHAGE DES GRILLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function lancement(){

//Définiton des variables

	var monTableau = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	var element = document.getElementById("grille");
	var monContenu = "";
	var i;
	tailleGrille = 5*5;
	nomCase = "a5case";

//Permet d'afficher une grille 5x5
					for (i = 0; i < tailleGrille; i++) {

						monContenu = monContenu + '<div id="a5case' + monTableau[i] + '" class="case3" onclick="joueur1C('+ monTableau[i] +')"></div>';

					}

	element.innerHTML = monContenu;
	}








// Tableau test des possibilité de victoire / défaites pour le bot

var possi = [
//Horizontale
{first:1, sec:2, third:3, cross:4},
{first:2, sec:3, third:4, cross:5},
{first:2, sec:3, third:4, cross:1},
{first:3, sec:4, third:5, cross:2},
{first:1, sec:3, third:4, cross:2},
{first:2, sec:3, third:5, cross:4},
{first:2, sec:4, third:5, cross:3},
{first:1, sec:2, third:4, cross:3},

{first:6, sec:7, third:8, cross:9},
{first:7, sec:8, third:9, cross:10},
{first:7, sec:8, third:9, cross:6},
{first:8, sec:9, third:10, cross:7},
{first:6, sec:8, third:9, cross:7},
{first:7, sec:8, third:10, cross:9},
{first:7, sec:9, third:10, cross:8},
{first:6, sec:7, third:9, cross:8},

{first:11, sec:12, third:13, cross:14},
{first:12, sec:13, third:14, cross:15},
{first:12, sec:13, third:14, cross:11},
{first:13, sec:14, third:15, cross:12},
{first:11, sec:13, third:14, cross:12},
{first:12, sec:13, third:15, cross:14},
{first:12, sec:14, third:15, cross:13},
{first:11, sec:12, third:14, cross:13},

{first:16, sec:17, third:18, cross:19},
{first:17, sec:18, third:19, cross:20},
{first:17, sec:18, third:19, cross:16},
{first:18, sec:19, third:20, cross:17},
{first:16, sec:18, third:19, cross:17},
{first:17, sec:18, third:20, cross:19},
{first:17, sec:19, third:20, cross:18},
{first:16, sec:17, third:19, cross:18},

{first:21, sec:22, third:23, cross:24},
{first:22, sec:23, third:24, cross:25},
{first:22, sec:23, third:24, cross:21},
{first:23, sec:24, third:25, cross:22},
{first:21, sec:23, third:24, cross:22},
{first:22, sec:23, third:25, cross:24},
{first:22, sec:24, third:25, cross:23},
{first:21, sec:22, third:24, cross:23},

//Verticale

{first:1, sec:6, third:11, cross:16},
{first:6, sec:11, third:16, cross:21},
{first:6, sec:11, third:16, cross:1},
{first:11, sec:16, third:21, cross:6},
{first:1, sec:11, third:16, cross:6},
{first:1, sec:6, third:16, cross:11},
{first:6, sec:11, third:21, cross:16},
{first:6, sec:16, third:21, cross:11},

{first:2, sec:7, third:12, cross:17},
{first:7, sec:12, third:17, cross:22},
{first:7, sec:12, third:17, cross:2},
{first:12, sec:17, third:22, cross:7},
{first:2, sec:12, third:17, cross:7},
{first:2, sec:7, third:17, cross:12},
{first:7, sec:12, third:22, cross:17},
{first:7, sec:17, third:22, cross:12},

{first:3, sec:8, third:13, cross:18},
{first:8, sec:13, third:18, cross:23},
{first:8, sec:13, third:18, cross:3},
{first:13, sec:18, third:23, cross:8},
{first:3, sec:13, third:18, cross:8},
{first:3, sec:8, third:18, cross:13},
{first:8, sec:13, third:23, cross:18},
{first:8, sec:18, third:23, cross:13},

{first:4, sec:9, third:14, cross:19},
{first:9, sec:14, third:19, cross:24},
{first:9, sec:14, third:19, cross:4},
{first:14, sec:19, third:24, cross:9},
{first:4, sec:14, third:19, cross:9},
{first:4, sec:9, third:19, cross:14},
{first:9, sec:14, third:24, cross:19},
{first:9, sec:19, third:24, cross:14},


{first:5, sec:10, third:15, cross:20},
{first:10, sec:15, third:20, cross:25},
{first:10, sec:15, third:20, cross:5},
{first:15, sec:20, third:25, cross:10},
{first:5, sec:15, third:20, cross:10},
{first:5, sec:10, third:20, cross:15},
{first:10, sec:15, third:25, cross:20},
{first:10, sec:20, third:25, cross:15},

//Diagonale

{first:1, sec:7, third:13, cross:19},
{first:7, sec:13, third:19, cross:25},
{first:7, sec:13, third:19, cross:1},
{first:13, sec:19, third:25, cross:7},
{first:1, sec:7, third:19, cross:13},
{first:7, sec:19, third:25, cross:13},
{first:7, sec:13, third:25, cross:19},

{first:6, sec:12, third:18, cross:24},
{first:12, sec:18, third:24, cross:6},
{first:2, sec:8, third:14, cross:20},
{first:8, sec:14, third:20, cross:2},
{first:2, sec:8, third:20, cross:14},
{first:2, sec:14, third:20, cross:8},
{first:6, sec:12, third:24, cross:18},
{first:6, sec:18, third:24, cross:12},

{first:5, sec:9, third:13, cross:17},
{first:9, sec:13, third:17, cross:21},
{first:9, sec:13, third:17, cross:5},
{first:13, sec:17, third:21, cross:9},
{first:5, sec:9, third:17, cross:13},
{first:9, sec:17, third:21, cross:13},
{first:9, sec:13, third:21, cross:17},

{first:4, sec:8, third:12, cross:16},
{first:8, sec:12, third:16, cross:4},
{first:10, sec:14, third:18, cross:22},
{first:14, sec:18, third:22, cross:10},
{first:4, sec:8, third:16, cross:12},
{first:4, sec:12, third:16, cross:8},
{first:10, sec:14, third:22, cross:18},
{first:10, sec:18, third:22, cross:14},
]

