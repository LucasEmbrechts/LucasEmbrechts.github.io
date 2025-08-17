//1: Faire le dialogue de base avec le personnage qui s'affiche dans les bonnes div [V]
//2: Les choix [V]
//3: Le système de combat complet [V]
//4: PV des monstres et du joueur [V]
//6: Perte des PV en fct des dégat subit [V]
//7: Btn deffence (faire en sorte que le joueur ne prend aucun dégat) [V]
//8: Changement de dégat du joueur en fonction du combat [V]

//Partie debug et ajout terminé

//Animation du texte [V]
//Animation pour les boutons [V]
//Bloqué le btn attaque pendant le tour du monstre [V]
//Ne pas affiché les btns quand il y a qu'un choix [V]
//Ajoutez le combat Sans Papyrus a la fin [V]
//Desactivé le bouton jusqu'à la fin de l'animation [V]


//initialisation des pv et pt d'attaque pour les combats

var combats= {
	"combatm" : {
		"pvjoueur" : 20,
		"pvjoueurmax" : 20,
		"pvmonstre" : 15,
		"pvmonstremax" : 15,
		"attaquemonstre" :8,
		"urlImg" : "url('../img/Final_Froggit.png')",
		"attaquejoueur": 11
	},
	"combatpapyrus" : {
		"pvjoueur" : 25,
		"pvjoueurmax" : 25,
		"pvmonstre" : 30,
		"pvmonstremax" : 30,
		"attaquemonstre" : 14, 
		"urlImg" : "url('../img/papyrus.png')",
		"attaquejoueur": 21
	},
	"combatundyne" :{

		"pvjoueur" : 50,
		"pvjoueurmax" : 50,
		"pvmonstre" : 50,
		"pvmonstremax" : 50,
		"attaquemonstre" : 20, 
		"urlImg" : "url('../img/undyne.png')",
		"attaquejoueur": 36
	},
	"combatpapyrusfinal" :{

		"pvjoueur" : 80,
		"pvjoueurmax" : 80,
		"pvmonstre" : 70,
		"pvmonstremax" : 70,
		"attaquemonstre" : 30, 
		"urlImg" : "url('../img/papyrus.png')",
		"attaquejoueur": 41
	},
	"combatsans" :{

		"pvjoueur" : 90,
		"pvjoueurmax" : 90,
		"pvmonstre" : 100,
		"pvmonstremax" : 100,
		"attaquemonstre" : 35, 
		"urlImg" : "url('../img/sanscomb.jpg')",
		"attaquejoueur": 51
	}
}

var combatEnCours = "combatm";

var interfaceEnCours= 0;

var fond=document.getElementById("fondimg");
var divLeft = document.getElementById("perso");
var parole = document.getElementById('dialogue');
var choix = document.getElementById('choix');

var viejoueur=document.getElementById("viej");
var viemonstre=document.getElementById("viem");
var affpersocombat=document.getElementById('persocombat');
var affinfo= document.getElementById("infocombat");

var btnattaque=document.getElementById("attaque");
var viej=document.getElementById("viej");
var viem=document.getElementById("viem");
var defe=document.getElementById("def");
var reco=document.getElementById("recommence");
var retour=document.getElementById("retour");

var tourjoueur=true;

/* ------------------------------ FONCTION : GENERATION DE L'INTERFACE ----------------------------------------- */
function generateInterface(index)
{	
	interfaceEnCours= index;
	if(isNaN(index)){
		if(index === "combatm"){
			combatEnCours = "combatm";
			combat();
		} else if (index==="combatpapyrus") {
			combatEnCours = "combatpapyrus";
			combat();
		} else if(index==="combatundyne"){
			combatEnCours="combatundyne";
			combat();
		} else if (index==="jeudedes"){
			jeudes();
		} else if(index==="combatpapyrusfinal"){
			combatEnCours="combatpapyrusfinal";
			combat();
		} else if(index==="combatsans"){
			combatEnCours="combatsans";
			combat();
		}

		else if (index ==="mort") {
			affmort();
		}
	} 
	else {

		parole.innerHTML = donnees[index].text;
		divLeft.style.backgroundImage = donnees[index].persoLeft;
		fond.style.backgroundImage = donnees[index].fontbody
		
		contenuChoix = "";
		if (donnees[index].choix1Label != ""){
			contenuChoix = contenuChoix +"<div id='choix1' onClick=\"generateInterface('" + donnees[index].choix1Val + "')\"><div>" + donnees[index].choix1Label + "</div></div>" ;
		}
		if (donnees[index].choix2Label != ""){
			contenuChoix = contenuChoix +"<div id='choix2' onClick=\"generateInterface('" + donnees[index].choix2Val + "')\"><div>" + donnees[index].choix2Label + "</div></div>" ;
		}

		choix.innerHTML = contenuChoix;	
	}

	var btn1=document.getElementById("choix1");
	var btn2=document.getElementById("choix2");
	let onclickbtn1 = btn1.onclick;
	let onclickbtn2 = btn2.onclick;
	btn1.onclick = null;
	btn2.onclick = null;


	//Animation des boutons
	let animation = choix.animate([	{ opacity: 0 },
		{ opacity: 0.1, offset: 0.4 },
		{ opacity: 1 } ],
		2000);

	animation.onfinish = (event) => {
		btn1.onclick = onclickbtn1;
		btn2.onclick = onclickbtn2;
	};
	
}								

/* ----------------------------------- VARIABLES GLOBALES : TABLEAU DES DIALOGUES ---------------------------------------- */

var i = 0;
var donnees =[
{text:"<p>Salut toi, je me présente je suis Sans. Tu es venu ici pour refermé la faille je suppose. Laisse moi avant tout te laisser le choix. Tu veux que je t'explique comment gagné en puissance ou tu préfères que je te foutes la paix?</p>", persoLeft:"url('../img/Sans.png')", fontbody:"url('../img/fonduder.jpg')", choix1Label:"Continuer seul", choix2Label:"Le suivre", choix1Val: 1, choix2Val:2},
{text:"<p>*Sans va donc partir en vous laissant seul comme vous lui avez demandé. Vous allez vous baladé un peux dans la zone et la vous croisez un petit monstre. Que faites vous?*</p>", persoLeft:'none', fontbody:"url('../img/fonduder.jpg')", choix1Label:"Le combattre", choix2Label:"Le laisser", choix1Val: "combatm", choix2Val:"mort"},
{text:"<p>Très bien, suis moi. *Vous allez donc le suivre et vous arrivez a un endroit avec des monstres*. Bon je vais te montré comment te battre. Tu es prêt(e)</p>", persoLeft:"url('../img/Sans.png')", fontbody:"url('../img/fonduder.jpg')", choix1Label:"Oui", choix2Label:"Non", choix1Val: "combatm", choix2Val:"combatm"},
{text:"<p>Et bien voila, tu as réusi a ce que je vois. Je vois même que tu as gagné en puissance. Bon allons faire la rencontre de mon frère.</p>", persoLeft:"url('../img/Sans.png')", fontbody:"url('../img/fonduder.jpg')", choix1Label:"D'accord", choix2Label:"", choix1Val: 4, choix2Val:""},
{text:"<p>Et bien nous voilà. Je te présente mon frère. Veut tu le combattre ou faire sa connaissance?</p>", persoLeft:"url('../img/Sans.png')", fontbody:"url('../img/snowdin.jpg')", choix1Label:"Le combattre", choix2Label:"Le rencontrer", choix1Val:"combatpapyrus", choix2Val:5},
{text:"<p>Salut toi, je suis Papyrus, le frère de Sans. Comme j'ai pus comprendre, tu viens pour refermé la faille qui sépare nos monde. Je te préviens, ces pas beau a voir. Bon trève de bavardage. Tu veux rencontré notre amie?</p>", persoLeft:"url('../img/papyrus.png')", fontbody:"url('../img/snowdin.jpg')", choix1Label:"Oui", choix2Label:"Non", choix1Val:6, choix2Val:7},
{text:"<p>Très bien, allons-y. Je suis sur qu'elle sera fier de te voir</p>", persoLeft:"url('../img/papyrus.png')", fontbody:"url('../img/snowdin.jpg')", choix1Label: "Pas de soucis", choix2Label:"", choix1Val:8, choix2Val:""},
{text:"<p>Ques veut-tu faire?</p>", persoLeft:"url('../img/papyrus.png')", fontbody:"url('../img/snowdin.jpg')", choix1Label:"Combattre", choix2Label:"Y allez", choix1Val:"combatpapyrus", choix2Val:6},
{text:"<p>*Ils vont vous amenez chez leur amie*. Qui va la? Qui est tu toi? Tu es un de ces gens qui veux détruire ce monde. Prouve ta valeur dans un combat</p>", persoLeft: "url('../img/undyne.png')", fontbody:"url('../img/house.jpg')", choix1Label:"Accepter", choix2Label:"Refuser", choix1Val:"combatundyne", choix2Val:"mort"},
{text:"<p>*Vous avez affaibli Undyne, que voulez vous faire?*</p>", persoLeft:"none", fontbody:"url('../img/house.jpg')", choix1Label:"La laisser", choix2Label:"L'éliminé", choix1Val:10, choix2Val:11},
{text:"<p>*Vous avez décidé de la laissé. Ils vous emène devant la faille. Vous allez utilis évotre magie pour la refermé. Faites un jeu de dés pour déterminé votre réussite ou votre défaite</p>", persoLeft:"none", fontbody:"url('../img/house.jpg')", choix1Label:"Lancé", choix2Label:"", choix1Val:"jeudedes", choix2Val:""},
{text:"<p>*Vous décidé de l'éliminé. Sans et Papyrus revienne vers vous. Ils ont un air menacant*</p>", persoLeft:"none", fontbody:"url('../img/house.jpg')", choix1Label:"Combattre", choix2Label:"Fuir", choix1Val:"combatpapyrusfinal", choix2Val:"mort"},
{text:"<p>*Vous avez éliminé Papyrus, Sans furieux, est prêt a ce battre*</p>", persoLeft:"none", fontbody:"url('../img/house.jpg')", choix1Label:"Combattre", choix2Label:"Fuir", choix1Val:"combatsans", choix2Val:"mort"},
{text:"<p>*Vous avez éliminé Sans, vous allez vous dirigez vers la faille*</p>", persoLeft:"none", fontbody:"url('../img/house.jpg')", choix1Label:"La fermé", choix2Label:"", choix1Val:"jeudedes", choix2Val:""}
]

/*---------------- Génération de la première interface au chargement de la page--------------------------------------------- */

generateInterface(0);

//3

function combat(){

//Changement de l'interface et placement d'autre élément (css)

fond.style.backgroundImage="url('../img/interfacecombat.png')";
divLeft.style.display="none";
dialogue.style.display="none";
choix.style.display="none";
btnattaque.style.display="block";
viej.style.display="block";
viem.style.display="block";
defe.style.display="block";
affinfo.style.display="block";

viejoueur.innerHTML=combats[combatEnCours]["pvjoueur"]+"/"+combats[combatEnCours]["pvjoueurmax"];
affpersocombat.style.display="block";

combats[combatEnCours]["pvmonstre"]=combats[combatEnCours]["pvmonstremax"];
viemonstre.innerHTML=combats[combatEnCours]["pvmonstre"]+"/" + combats[combatEnCours]["pvmonstremax"];
affpersocombat.style.backgroundImage= combats[combatEnCours]["urlImg"];

affinfo.innerHTML="<p>Vous voici dans un combat. Appuyez sur le bouton 'Attaque' pour attaqué et sur le bouton 'Défence' pour ce défendre.</p>";
}

//5 et 6

function attaque() {

	var alea= Math.floor(Math.random()*combats[combatEnCours]["attaquejoueur"]);

		//Si ces au tour du joueur

		if (tourjoueur) {

			if (combats[combatEnCours]["pvmonstre"]-alea>=0) {

				combats[combatEnCours]["pvmonstre"]=combats[combatEnCours]["pvmonstre"]-alea;
				affinfo.innerHTML="<p>Vous avez infligé "+alea+" de dégats à l'adversaire</p>";
				
			}

			else{

				combats[combatEnCours]["pvmonstre"]=0;
			}

			viemonstre.innerHTML=combats[combatEnCours]["pvmonstre"]+"/"+combats[combatEnCours]["pvmonstremax"];
			btnattaque.style.display="none";
			tourjoueur = false;
			setTimeout(attaque, 3000);
		}

		//Si ces au tour du monstre

		else{

			if (combats[combatEnCours]["pvjoueur"]-combats[combatEnCours]["attaquemonstre"]>=0) {

				combats[combatEnCours]["pvjoueur"]=combats[combatEnCours]["pvjoueur"]-combats[combatEnCours]["attaquemonstre"];
				affinfo.innerHTML="<p>Il vous a infligé "+ combats[combatEnCours]["attaquemonstre"]+" de dégats, attention a vous</p>";

			}

			else{

				combats[combatEnCours]["pvjoueur"]=0;
			}

			viejoueur.innerHTML=combats[combatEnCours]["pvjoueur"]+"/"+combats[combatEnCours]["pvjoueurmax"];
			btnattaque.style.display="block";
			tourjoueur = true;
		}	

//Revenir a l'interface de base après le combat du monstre

if (combats[combatEnCours]["pvmonstre"]===0) {

	fond.style.backgroundImage="url('../img/fonduder.jpg')";
	divLeft.style.display="block";
	dialogue.style.display="block";
	choix.style.display="block";
	btnattaque.style.display="none";
	viej.style.display="none";
	viem.style.display="none";
	defe.style.display="none";
	affpersocombat.style.display="none";
	affinfo.style.display="none";
	predictioninterface();
}

else if (combats[combatEnCours]["pvjoueur"]===0) {

	setTimeout(affmort, 500);
}

}

//7
function defence() {

	var btndef=document.getElementById("def");	
	affinfo.innerHTML="<p>Vous vous êtes défendu. Vous regagné 10 Pv et vous ne prenez aucun dégat pour ce tour. Mais vous ne pouvez plus l'utilisé</p>";
	btndef.style.display="none";
	combats[combatEnCours]["pvjoueur"]=combats[combatEnCours]["pvjoueur"]+10;
	tourjoueur=true
}

function affmort(){

	fond.style.backgroundImage="url('../img/imagemort.png')";
	divLeft.style.display="none";
	dialogue.style.display="none";
	choix.style.display="none";
	btnattaque.style.display="none";
	viej.style.display="none";
	viem.style.display="none";
	defe.style.display="none";
	reco.style.display="block";
	retour.style.display="block";
	affpersocombat.style.display="none";
	affinfo.style.display="none";
}

function jeudes(){

	var devantfaille=Math.floor(Math.random()*101);
	parole.innerHTML="<p>Vous avez fait "+ devantfaille+ '</p>';

	if (devantfaille<50) {

		parole.innerHTML="<p>Vous avez fait "+ devantfaille;+" domage pour vous. Vous subissez d'énorme dégatset vous mourez</p>";
		setTimeout(affmort, 3000);
	}

	else{

		setTimeout(finchapitre1, 3000)
	}
}

//Changé d'interface après un combat

function predictioninterface(){

	if (interfaceEnCours=="combatm") {

		generateInterface(3);
	}

	else if (interfaceEnCours=="combatpapyrus") {

		generateInterface(8);
	}

	else if (interfaceEnCours=="combatundyne") {

		generateInterface(9);
	}

	else if (interfaceEnCours=="combatpapyrus2"){

		generateInterface(12);
	}

	else if (interfaceEnCours=="combatsans") {

		generateInterface(13);
	}
}

//Fin du chapitre 1

function finchapitre1(){

	fond.style.backgroundImage="url('../img/finchap1.png')";
	divLeft.style.display="none";
	dialogue.style.display="none";
	choix.style.display="none";
	btnattaque.style.display="none";
	viej.style.display="none";
	viem.style.display="none";
	defe.style.display="none";
	reco.style.display="block";
	retour.style.display="block";
	affpersocombat.style.display="none";
	affinfo.style.display="none";
}