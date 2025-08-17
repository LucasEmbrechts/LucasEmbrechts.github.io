//Justin et Firmin ; 4G1 -4G3;Simon:  les 4 fantastiques ;2022-2023

let suite = []//tableau ou va être stoker les nombre généré aleatoirement
let indexEnCours = 0;//le nombre  de chiffre généré que contient le tableau
let indexVerif = 0;//Verifie la suite du tableau qui contient les valeur 
let score = 0;//on initialise le score a 0
//on cible tout les personnage au dessus pour permettre de moin répéter dans chaque fonction
let affscore = document.getElementById("scores");
let mrsf = document.getElementById("msrfantastique")
let pierre = document.getElementById("choose")
let feu = document.getElementById("torche")
let madame = document.getElementById("janestorm")

//fonction qui demarre le jeu en appuyant sur commencer
function start(){
	document.getElementById("commencer").style.visibility = "hidden"
	aleatoire();
	montrerSuite();
}

//permet de raffrechir la page (et redemarre le jeu)
function reload(){
	location.reload();
}

//Quand tu clique l'image affiche le numéro cliquer dans la console
//le numéro cliqué est une suite de 1 à 4 image 1 est le numéro 1 et dans cette ordre
function clic(numeroclique){
	if (numeroclique == 1) {
		mrsf.style.backgroundColor = "rgba(82, 235, 52, 0.6)"//quand il clique ça affiche la même couleur mais un peu tranasparent 
		setTimeout(function(){
			mrsf.style.backgroundColor = "white"//après un temps il redevient blanc
		},250);
	}
	else if (numeroclique == 2) {
		pierre.style.backgroundColor = "rgba(242, 240, 82,0.6)"//quand il clique ça affiche la même couleur mais un peu tranasparent 
		setTimeout(function(){
			pierre.style.backgroundColor = "white"//après un temps il redevient blanc
		},250);
	}
		else if (numeroclique == 3) {
		feu.style.backgroundColor = "rgba(227, 67, 45,0.6)"//quand il clique ça affiche la même couleur mais un peu tranasparent 
		setTimeout(function(){
			feu.style.backgroundColor = "white"//après un temps il redevient blanc
		},250);
	}
		else if (numeroclique == 4) {
		madame.style.backgroundColor = "rgba(94, 140, 224,0.6)"//quand il clique ça affiche la même couleur mais un peu tranasparent 
		setTimeout(function(){
			madame.style.backgroundColor = "white"//après un temps il redevient blanc
		},250);
	}
	//si le numéro cliqué est === aux nombre généré dans le tableau et que c'est bon on augmente inex vérif pour qu'il vérifie une fois après (car 1 nombre en plus est généré a chaque fois)
	if (numeroclique === suite[indexVerif]) {
		indexVerif++
	//si le joueur a perdu
	//on met du son "perdu"
	//on affiche une écran quand il a perdu en changeant le visiblity"hidden" en "visible"
	//je demande ensuite que tout mes personnage reste en blanc et affiche plus les couleurs
	//et je dis que mon "suite[indexVerif]=0" est égale a 0 pour l'arrêter 
	}else {
		document.getElementById("perdu").style.visibility = "visible"
		var audio = new Audio('../images/audio/perdu-By-tuna.voicemod.net.mp3');
		audio.play();
		document.getElementById("texteguidage").innerHTML="Rejouez"
		mrsf.style.backgroundColor = "white"
		pierre.style.backgroundColor = "white"
		feu.style.backgroundColor = "white"
		madame.style.backgroundColor = "white"
		suite[indexVerif]=0



	}
	if (indexVerif == suite.length) {
		indexVerif=0;
		start();
		score=score+1//on ajoute  au score si la sequence vérifier est correcte 
		affscore.innerHTML="Votre score: "+score//on change "score" en "votre score" dans la div qui contient le score
	} 
}

//Fonction qui crée un nombre aléatoire 
//et l'insère dans un tableau
//il génère des chiffre jusque 4
function aleatoire(){
	let nb = Math.floor(4 * Math.random())+1;
	console.log(nb);
	suite.push(nb);
}

//Fonction qui crée la suite de la séquence
//le temps qui affiche la couleur le délait 
function montrerSuite(){
	document.getElementById("texteguidage").innerHTML="Regardez"
	//a chaque seconde on affiche la couleur de la séquence
	indexEnCours = 0
	let augmentation = 600
	for (let i = 0;i < suite.length ;i++){
		setTimeout(afficherCouleur,augmentation);
		augmentation = augmentation + 600;
		setTimeout(eteindre,augmentation);
		augmentation = augmentation + 600;
	}
}

//Fonction qui affiche la couleur
//permet d'avoir le son quand la couleur s'affiche
function afficherCouleur(){
	let numero = suite[indexEnCours];	
	indexEnCours++;
	if (numero === 1) {
		mrsf.style.backgroundColor = "green"
		var audio = new Audio('../images/audio/green.mp3');//audio
		audio.play();
	} else {
		if (numero === 2) {
			pierre.style.backgroundColor = "yellow"
			var audio = new Audio('../images/audio/yellow.mp3');//audio
			audio.play();
		} else {
			if (numero === 3) {
				feu.style.backgroundColor = "red"
				var audio = new Audio('../images/audio/red.mp3');//audio
				audio.play();	
			} else {
				if (numero === 4) {
					madame.style.backgroundColor = "blue"
					var audio = new Audio('../images/audio/blue.mp3');//audio
					audio.play();
				}
			}
		}
	}
	//vérifie si la longueur du tableau est bonne et pour dire au joueur qu'il peut jouer 
	if (indexEnCours === suite.length) {
		setTimeout(function(){
			document.getElementById("texteguidage").innerHTML="Jouez!!"
		},950);

	}
}

feu.style.backgroundColor = "white"

//la fonction nous permet d'éteindre chaque case qui contient le perso pour pas qu'elle reste avec la coouleur er quelle devinne blanc
function eteindre() {
		feu.style.backgroundColor = "white"
		madame.style.backgroundColor = "white"
		pierre.style.backgroundColor = "white"
		mrsf.style.backgroundColor = "white"
}

