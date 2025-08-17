

// Fil conducteur du code
//Générer un mot aléatoirement (1)

//Determiner un espace pour acceuilir ce mot

//Clic     -> si la lettre est dans le mot, elle apparait dans l'espace précité
//         -> si la lettre n'est pas dans le mot, une nouvelle image du pendu apparait.
//         + gestion du clavier

//Après X erreurs ->écran perdu
//Si le mot est trouvé -> écran de gagne.


//--------------- AU CHARGEMENT DE LA PAGE -----------------//
//(1)Génération du mot aléatoire


// -------------------- DÉBUTS DE LA FONCTION POUR CHOISIR UN MOT ----------------------//

function aleat(){
    const MIN = 0; // déclaration d'une constante
    const MAX = 8;
    var nb = MIN + (MAX-MIN+1)*Math.random();
    return Math.floor(nb);
};

var nbGagner = 0;

var dico=    ['TYRANNOSAURE','DIPLODOCUS','SPINOSAURE','ANKYLOSAURE','IGUANODON','BRACHIOSAURE','COMPSOGNATHUS','DILOPHOSAURE'];

var nbAleat = aleat();
var mot = dico[nbAleat];
var nbErreurs =0;

// -------------------- DÉBUTS DE LA BOUCLE POUR CRÉER LE NOMBRE DE LETTRE DU MOT----------------------//

var e;	
var espaceMot = document.getElementById('caseTrue');

for (var i = 0; i < mot.length; i++) {
	//créer une div//
	e = document.createElement('div');
	//ajout nom de class
	e.className = "caseMotOK";
	//ajout un nom
	idName= "case";
	//ajout un identifant
	idName= "case"+i;
	e.setAttribute("id", idName);
	//accroche l'élément créer à ma zone pour le mot	
	espaceMot.appendChild(e);
}



// -------------------- DÉBUTS DE LA FONCTION POUR L'AFFICHAGE DES LETTRES ----------------------//

function affichageLettre(lettre){

	var el;
	var e;
	var elF= document.getElementById('caseFalse'); 
	var position; 
	position = mot.indexOf(lettre);

	//affichage des lettres faux et vrai

	if(position != -1){

		var positions = [];

		for (var i = 0; i <mot.length; i++) {

			if (mot[i] == lettre) {
				positions.push(i);
			}
		}

		for (var j = 0 ; j<positions.length; j++) {

			el = document.getElementById('case' + positions[j]);
			el.innerHTML = lettre;
			nbGagner = nbGagner +1;
		}

	} else{
		
		//création de l'élément
		e = document.createElement('div');
		//écriture de la lettre
		e.innerHTML = lettre;
		//ajout nom de class
		e.className = "caseMotNotOk";	
		//ajout un identifant
		idName= "caseF"+i;
		e.setAttribute("id", idName);
		//accroche l'élément créer à ma zone pour le mot	
		elF.appendChild(e);

		//augmenter le nbre d'erreurs
		nbErreurs = nbErreurs +1;
}

		//-------------------------------- DÉBUTS DE LA PARTIE PERDU --------------------------------------------

	var elPendu= document.getElementById("imagesPendu");

    var resultat = document.getElementById("perduGagner");

	if (nbErreurs==1) {
		elPendu.src="../images/CapturePendu1.png";
	}

	else if (nbErreurs==2) {
		elPendu.src="../images/CapturePendu2.png";	
	}

	else if (nbErreurs==3) {
		elPendu.src="../images/CapturePendu3.png";	
	}

	else if (nbErreurs==4) {
		elPendu.src="../images/CapturePendu4.png";	
	}

	else if (nbErreurs==5) {
		elPendu.src="../images/CapturePendu5.png";
	}

	else if (nbErreurs==6) {
		elPendu.src="../images/CapturePendu6.png";	
	}

	else if (nbErreurs==7) {
		elPendu.src="../images/CapturePendu.png";
	}

	else if (nbErreurs==8) {
		var elPerdu= document.getElementById("perduGagner");
		elPerdu.src="../images/CapturePerdu.png";
		resultat.style.display = "block";
	}

	if (nbGagner == mot.length) {
		var elPerdu= document.getElementById("perduGagner");
		elPerdu.src="../images/CaptureGagné.png";
		resultat.style.display = "block";
	}

}

// -------------------- FIN DE LA FONCTION POUR L'AFFICHAGE DES LETTRES ----------------------//