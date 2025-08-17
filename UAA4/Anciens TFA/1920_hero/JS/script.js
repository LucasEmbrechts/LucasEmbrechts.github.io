//initialisation des variables universelle
var psd = "";
var perso;
var objet = "";
//tableau des images de personnages
var pfimg = ['url("Sources/img_jeu/interface/p1.png")','url("Sources/img_jeu/interface/p2.png")','url("Sources/img_jeu/interface/p3.png")','url"Sources/img_jeu/interface/p4.png")','url("Sources/img_jeu/interface/p5.png")','url("Sources/img_jeu/interface/p6.png")'];
var phimg = ['url("Sources/img_jeu/interface/p7.png")','url("Sources/img_jeu/interface/p8.png")','url("Sources/img_jeu/interface/p9.png")','url("Sources/img_jeu/interface/p10.png")','url("Sources/img_jeu/interface/p11.png")','url("Sources/img_jeu/interface/p12.png")'];
var psdaff = document.getElementById('psd');
var persoCombat;

//------------ Interface choix personnages ------------------//

//avant jeu
// choix du sexe
function s1() {
	var i;
	var title = document.getElementById('Titre');
	var app = document.getElementsByClassName('perso-1');
	var disp = document.getElementsByClassName('sexe');
	var app2 = document.getElementById('pseudo');
	title.innerHTML = "Choix du personnage";
	for (i = 0; i < app.length; i++) {
		app[i].style.display = "block";
		app[i].style.backgroundImage = 'url("Sources/img_jeu/personnages/Femme'+(i+1)+'choix.png")';
	}
	for (i = 0; i < disp.length; i++) {
		disp[i].style.display = "none";
	}
	app2.style.display = "block";
}

function s2() {
	var i;
	var title = document.getElementById('Titre');
	var app = document.getElementsByClassName('perso-2');
	for (i = 0; i < app.length; i++) {
		app[i].style.display = "block";
		app[i].style.backgroundImage = 'url("Sources/img_jeu/personnages/Homme'+(i+1)+'choix.png")';
	}
	var disp = document.getElementsByClassName('sexe');
	for (i = 0; i < disp.length; i++) {
		disp[i].style.display = "none";
	}
	title.innerHTML = "Choix du personnage";
	var app2 = document.getElementById('pseudo2');
	app2.style.display = "block";
}

// ----------------------------- Choix personnages  ------------------------------------
function fadeIn(title){
	title.style.opacity = 0;
	title.style.display = "block";

	(function fade(){
		var val = parseFloat(title.style.opacity);
		if (!((val += .1)>1)) {
			title.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}


function p1(psdo, no, sexe) {
	var i;
	var title = document.getElementById('Titre');
	var disp ; 
	var disp2 ; 
	var app = document.getElementsByClassName('jeu');
	
	// Si le pseudo est complet conserver le pseudo et l'image choisie
	// Sinon, demander un pseudo
	if (psdo != psd) {
		// Enregistrement du pseudo
		psd=psdo;
		vous.nom=psdo
		// Selection de l'image et disparition  des cartes en fonction du sexe
		if(sexe == "h"){
			disp = document.getElementsByClassName('perso-2');
			disp2 = document.getElementById('pseudo2');
			perso = phimg[no];
			persoCombat = 'url("Sources/img_jeu/personnages/Homme'+(no+1)+'.png")';
		}else if( sexe == "f"){
			disp = document.getElementsByClassName('perso-1');
			disp2 = document.getElementById('pseudo');
			perso = pfimg[no];
			persoCombat = 'url("Sources/img_jeu/personnages/Femme'+(no+1)+'.png")';
		}
		for (i = 0; i < disp.length; i++) {
			disp[i].style.display = "none";
		}

		//disparition pseudo et titre
		title.style.display = "none";
		disp2.style.display = "none";

		//Apparition interface
		for (i = 0; i < app.length; i++) {
			app[i].style.display = "block";
		}
		generateInterface(0)

	} else {
		title.innerHTML = "Insérez un pseudo";
		fadeIn(title);
	}
}

//debut du jeu
//discution et choix (les parties grisées causent des erreurs)
function generateInterface(w){

	var divPersoD = document.getElementById('text');
	var divAff = document.getElementById("aff");
	var parole = document.getElementById('texte');
	var bg = document.getElementById('background');
	var divPseudo = document.getElementById('psd');
	var contenuChoix1 = document.getElementById('c1');
	var contenuChoix2 = document.getElementById('c2');
	var combat = document.getElementById('battle');
	var fin1 = document.getElementById('d1');
	var fin2 = document.getElementById('d2');
	var go = document.getElementById('death');
	divPersoD.style.display = "block";
	divAff.style.display = "block";
	divPseudo.style.display = "block";
	combat.style.display = "none";
	parole.innerHTML = donnees[w].textA;
	divAff.style.backgroundImage = donnees[w].persoAff;
	if (donnees[w].persoDiscut == "") {
		divPersoD.style.backgroundImage = perso;
	} else { 
		divPersoD.style.backgroundImage = donnees[w].persoDiscut;
	}
	bg.style.backgroundImage = donnees[w].decor;
	if (donnees[w].pseudoD == "") {
		divPseudo.innerHTML = psd;
	} else { 
		divPseudo.innerHTML = donnees[w].pseudoD;
	}
	contenuChoix1.innerHTML = donnees[w].choix1Label;
	contenuChoix2.innerHTML = donnees[w].choix2Label;
	if (w == 6 || w == 74 || w == 28 || w == 34 || w == 44 || w == 59  || w == 69 || w == 75)/* + Défaite du comabat*/ {
		go.style.display = "block";
		go.innerHTML = "Game Over";
		fin1.style.display = "block";
		fin2.style.display = "block";
	} else if (w == 22 || w == 30 || w == 70 || w == 77) /* + victoire du combat*/ {
		go.style.display = "block";
		go.innerHTML =  donnees[w].textA + "<br> Happy End";
		go.style.color = "Gold";
		bg.style.backgroundImage = donnees[w].decor;
		divPersoD.style.display = "none";
		fin1.style.display = "block";
		fin2.style.display = "block";

	} else if (w == 37) {
		divPersoD.style.display = "none";
		divAff.style.display = "none";
		divPseudo.style.display = "none";
		contenuChoix1.style.display = "none";
		contenuChoix2.style.display = "none";
		combat.style.display = "block";
		/*if (w==37) {
			gladiateur.generateStat();
		}*/
		combat.setAttribute('onclick', "generateCombat("+ [w] +")");
		generateCombat([w]);
	} else if (donnees[w].combat1Label != "") {
		divPersoD.style.display = "none";
		divAff.style.display = "none";
		divPseudo.style.display = "none";
		contenuChoix1.style.display = "none";
		contenuChoix2.style.display = "none";
		combat.style.display = "block";
		/*if (w==41) {
			cavalier.generateStat()
		} if (w==66) {
			roi.generateStat()	//pose probleme à l'apparition des attaques
		} else if (w==26) {
			guardes.generateStat()
		}*/
		combat.setAttribute('onclick', "generateCombat("+ [w] +")");
		generateCombat([w]);
	} else {
		divPersoD.style.display = "block";
			if (donnees[w].choix1Label != ""){
		contenuChoix1.style.display = "block";
		} else {
			contenuChoix1.style.display = "none";
		}
		if (donnees[w].choix2Label != ""){
			contenuChoix2.style.display = "block";
		} else {
			contenuChoix2.style.display = "none";
		}
		if (donnees[w].persoAff != "") {
			divAff.style.display = "block";
		} else {
			divAff.style.display = "none";
		}
	}
	if (w == 56) {
		vous.pui = 99;
	}
	//Si aucun choix, avancer à la suite de l'histoire. 
	 if (donnees[w].choix1Label == "" && donnees[w].choix2Label == "" && donnees[w].combat1Label == ""){
	 	if (w == 24) {
			if (objet != "") {
				parole.setAttribute('onclick', "generateInterface("+ 27 +")");
			} else {
				parole.setAttribute('onclick', "generateInterface("+ 74 +")");
			}
		} else if (w == 53) {
			if (nbAleatH == 1) {
				w=56;
			} else {
				objet = "hache";
			}
		} else if (w == 42) {
			if (nbAleatF <= 4) {
				w=15;
			} else if (nbAleatS == 1) {
				w=44;
			}
		} else {
			w = donnees[w].Val;
			parole.setAttribute('onclick', "generateInterface("+ w +")");	
		}
	} else if (donnees[w].combat1Label == "") {
		contenuChoix1.setAttribute('onclick', "generateInterface("+ donnees[w].choix1Val +")");
		contenuChoix2.setAttribute('onclick', "generateInterface("+ donnees[w].choix2Val +")");
	}
	console.log(w);
}

//combat fonction (manquant)
function generateCombat(w){

	var bg = document.getElementById('background');
	var contenuCombat1 = document.getElementById('cbt1');
	var contenuCombat2 = document.getElementById('cbt2');
	var contenuCombat3 = document.getElementById('cbt3');
	var contenuCombat4 = document.getElementById('cbt4');
	var combat = document.getElementById('battle');
	var combatAff1 = document.getElementById('gentil');
	var combatAff2 = document.getElementById('ennemy');
	contenuCombat1.style.display = "block";
	contenuCombat2.style.display = "block";
	contenuCombat3.style.display = "block";
	contenuCombat4.style.display = "block";
	combatAff1.style.display = "block";
	combatAff2.style.display = "block";
	combatAff1.style.backgroundImage = persoCombat;
	combatAff2.style.backgroundImage = "url('Sources/img_jeu/personnages/"+donnees[w].ennemi+".png')";
	bg.style.backgroundImage = donnees[w].decor;
	contenuCombat1.innerHTML = donnees[w].combat1Label;
	contenuCombat2.innerHTML = donnees[w].combat2Label;
	contenuCombat3.innerHTML = donnees[w].combat3Label;
	contenuCombat4.innerHTML = donnees[w].combat4Label;
	if (w==79) {
		if (vous.pv <= 0) {
			go.style.display = "block";
			go.innerHTML = "Game Over";
			fin1.style.display = "block";
			fin2.style.display = "block";
			parole.style.display = "block";
			parole.innerHTML = "Défaite, un combat magnifique qui restera dans les mémoires";
		} else if (gladiateur.pv <=0) {
			go.style.display = "block";
			go.innerHTML = "Victoire, vous êtes affranchie <br> Happy End";
			go.style.color = "Gold";
			bg.style.backgroundImage = donnees[w].decor;
			divPersoD.style.display = "none";
			fin1.style.display = "block";
			fin2.style.display = "block";
		}
		contenuCombat1.setAttribute('onclick', "Esquive("+nbAleatE+","+nbAleatC+")");
		contenuCombat2.setAttribute('onclick', "Attack("+nbAleatE+","+nbAleatC+")");
		contenuCombat3.setAttribute('onclick', "other("+nbAleatE+")");
		contenuCombat4.setAttribute('onclick', "Escape()");
	} else {
		
		contenuCombat1.setAttribute('onclick', "generateInterface("+ donnees[w].combat1Val +")");
		contenuCombat2.setAttribute('onclick', "generateInterface("+ donnees[w].combat2Val +")");
		contenuCombat3.setAttribute('onclick', "generateInterface("+ donnees[w].combat3Val +")");
		contenuCombat4.setAttribute('onclick', "generateInterface("+ donnees[w].combat4Val +")");
	}
	console.log(w);
}

/* ----------------------------------- VARIABLES GLOBALES : TABLEAU DES DIALOGUES ---------------------------------------- */ /*Certaines images ont pu être oublié elles seront rajoutés à la version finale*/
var w = 0;
var donnees =[
{textA:"Enfin arrivé, je suis épuisé", decor:"url('Sources/img_jeu/background/AubergeExt.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:1},
{textA:"*Une énorme secousse survient*", decor:"url('Sources/img_jeu/background/AubergeInt.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:2},
{textA:"Wow ! qu'est ce que c'était ?!", decor:"url('Sources/img_jeu/background/AubergeInt.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:3},
{textA:"On dirait que ça venait de la ville", decor:"url('Sources/img_jeu/background/AubergeExt.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:4},
{textA:"On dirait que ça venait de la ville", decor:"url('Sources/img_jeu/background/AubergeExt.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "Aller dormir et attendre le matin", choix2Label: "s'avancer vers la ville", combat1Label:"", choix1Val:7, choix2Val:5},
{textA:"Ah! Qu'est ce que...", decor:"url('Sources/img_jeu/background/cheminpropre.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/cerf.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:6},
{textA:"Un cerf vous a percuté sur le chemin Game Over", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"J'irais voir ça demain, pour le moment je suis trop fatigué", decor:"url('Sources/img_jeu/background/AubergeInt.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:8},
{textA:"Ah, rien ne vaut un bon petit déjeuner avant de sortir", decor:"url('Sources/img_jeu/background/AubergeInt.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:9},
{textA:"Je me demande bien ce que c'était hier, on n'aurait pas dit un séisme", decor:"url('Sources/img_jeu/background/cheminpropre.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:10},
{textA:"Tiens le chemin se sépare en 2", decor:"url('Sources/img_jeu/background/Foret1.png')", persoDiscut: "", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/panneau.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:11},
{textA:"Le 2 eme chemin est dans un sale état, Ils devraient la supprimer ou la rénover", decor:"url('Sources/img_jeu/background/Foret1.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"url('Sources/img_jeu/personnages/panneau.png')", choix1Label: "Prendre le chemin indiqué", choix2Label: "Prendre l'autre chemin", combat1Label:"", choix1Val:12, choix2Val:46},
{textA:"Il fait si bon je me demande bien à quoi servait l'autre chemin", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:13},
{textA:"Je ne savais pas qu'il y avait encore des soldats de nos jours", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/cavalieraff.png')", choix1Label: "Le saluer", choix2Label: "Lui demander la situation en ville", combat1Label:"", choix1Val:14, choix2Val:38},
{textA:"Bonjour...", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut: "", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/cavalieraff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:15},
{textA:"J'aperçois la gare mais tout est détruit comment est-ce possible?", decor:"url('Sources/img_jeu/background/arriveeville.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:16},
{textA:"J'aperçois la gare mais tout est détruit comment est-ce possible?", decor:"url('Sources/img_jeu/background/ruine.png')", persoDiscut: "", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/villageois.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:17},
{textA:"Il sait peut-être ce qui est arrivé", decor:"url('Sources/img_jeu/background/ruine.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/villageois.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:18},
{textA:"Un château est apparu au milieu de la ville hier soir et depuis la ville est attaquée par des soldats en armures", decor:"url('Sources/img_jeu/background/ruine.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogueHabitant.png')", pseudoD: "villageois", persoAff:"url('Sources/img_jeu/personnages/villageois.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:19},
{textA:"Il indique un chemin menant à un chateau", decor:"url('Sources/img_jeu/background/ruine.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"", choix1Label: "Prendre la route indiquée", choix2Label: "Prendre l'autre route à l'opposé", combat1Label:"", choix1Val:23, choix2Val:20},
{textA:"Il ne m'inspire pas confiance", decor:"url('Sources/img_jeu/background/fond_choix2.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:21},
{textA:"Je ne sais pas si c'était vrai ou pas mais je ne reviendrai plus jamais ici", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:22},
{textA:"Vous avez fui la ville", decor:"url('Sources/img_jeu/background/									')", persoDiscut:"", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:""},
{textA:"Je me demande qui sont ces soldats inconnus", decor:"url('Sources/img_jeu/background/entreechateau.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Garde.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:24},
{textA:"Faites demi-tour vente Gueux!", decor:"url('Sources/img_jeu/background/entreechateau.jpg')", persoDiscut:"url('Sources/img_jeu/interface/dialoguesoldats.png')", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Garde.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:25}, 
{textA:"Un garde vous prend par surprise, quelle méthode de lâche", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Si ça fonctionne se message n'apparaitra jamais au cours du jeu", decor:"url('Sources/img_jeu/background/')", persoDiscut:"", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", ennemi:"soldatattaque", combat1Label:"Fuir", combat2Label:"Eternuer (Quelqu'un devait parler de vous)", combat3Label:"attaque à la hache", combat4Label:"Raconter une blague", combat1Val:22, combat2Val:31, combat3Val:27, combat4Val:29, Val:""},
{textA:"Un des gardes est assomé", decor:"url('Sources/img_jeu/background/entreechateau.jpg')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"url('Sources/img_jeu/personnages/hachebrisee.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:28},
{textA:"Vous êtes bloqué", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Vous rigolez avec le garde à en oublier de fuir, on vous engage comme bouffon du roi.", decor:"url('Sources/img_jeu/background/victoireRire.png')", persoDiscut:"", pseudoD: "Narrateur", persoAff:"url('Sources/img_jeu/personnages/hachebrisee.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:30},
{textA:"Si ça fonctionne se message n'apparaitra jamais au cours du jeu", decor:"url('Sources/img_jeu/background/victoireRire.png')", persoDiscut:"", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:""}, 
{textA:"Qu'est ce que je fais ici? il y avait un soldat puis, plus rien...", decor:"url('Sources/img_jeu/background/geole.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/')", choix1Label: "", choix2Label: "", combat1Label:"", Val:32},
{textA:"Il a l'air de dormir profondément, je pourrais essayer de lui prendre ses clées", decor:"url('Sources/img_jeu/background/geole.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/gardeDort')", choix1Label: "Lui prendre les clées", choix2Label: "Ne rien tenter", combat1Label:"", choix1Val:35, choix2Val:33},
{textA:"Je devrais attendre, ils finiront bien par me libérer",  decor:"url('Sources/img_jeu/background/geole.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/')", choix1Label: "", choix2Label: "", combat1Label:"", Val:34},
{textA:"Vous n'aurez plus d'autre occasion de vous sauver et ne serez jamais libre", pseudoD: "Narrateur", combat1Label:""},
{textA:"C'est bon, c'est ouvert. Plus le choix, il faut longer se couloir",  decor:"url('Sources/img_jeu/background/couloir.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/')", choix1Label: "", choix2Label: "", combat1Label:"", Val:36},
{textA:"Mince, je crois que c'était le mauvais côté",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/')", choix1Label: "", choix2Label: "", combat1Label:"", Val:37},
{textA:"",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", ennemi:"gladiateurcombat", combat1Label:"Préparer une esquive", combat2Label:"Coup de poing", combat3Label:"Charger une attaque", combat4Label:"Fuir", combat1Val:37, combat2Val:75, combat3Val:76, combat4Val:37, Val:""}, 
{textA:"Bonjour, savez vous ce qu'il s'est passé hier soir? J'ai senti un grand tremblement",  decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Cavalieraff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:39},
{textA:"Veuillez arrêter de m’importuner ou je vous tranche la gorge, si c'est compris déguerpissez avant que je ne change d'avis",  decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:"url('Sources/img_jeu/interface/dialoguechevalier.png')", pseudoD: "Chevalier", persoAff:"url('Sources/img_jeu/personnages/Cavalieraff.png')", choix1Label: "S'excuser", choix2Label: "insister", combat1Label:"", choix1Val:15, choix2Val:40, Val:""},
{textA:"Vous l'aurez voulu", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:"url('Sources/img_jeu/interface/dialoguechevalier.png')", pseudoD: "Chevalier", persoAff:"url('Sources/img_jeu/personnages/Cavalieraff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:41},
{textA:"Si ça fonctionne se message n'apparaitra jamais au cours du jeu", decor:"url('Sources/img_jeu/background/combat_fond.jpg')", choix1Label: "", ennemi:"cavalierattaque", combat1Label:"Fuir", combat2Label:"Coup de poing", combat3Label:"Essayer de s'excuser", combat4Label:"S'agenouiller et le priez de vous épargner", combat1Val:42, combat2Val:44, combat3Val:45, combat4Val:45, Val:""},
{textA:"Je lui ai juste posé une question, qu'est ce qu'il me veut",  decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:15},
{textA:"Bonjour, savez vous ce qu'il s'est passé hier soir? J'ai senti un grand tremblement",  decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:44 },
{textA:"Il vous tue", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Il vous capture et vous endors",  decor:"url('Sources/img_jeu/background/fond_choix2.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:31},
{textA:"Le chemin rétrécit de plus en plus, je devrais faire attention", decor:"url('Sources/img_jeu/background/Foret1.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:47},
{textA:"Je n'aurai pas du prendre se chemin il m'a fait perdre du temp", decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:48},
{textA:"AIE! Qui a bien pu laisser trainer cette hache par terre", decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut: "", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Axe.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:49},
{textA:"AIE! Qui a bien pu laisser trainer cette hache par terre", decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut: "", pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Axe.png')", choix1Label: "Poser la hache sur le coté et s' en aller", choix2Label: "Prendre la hache", choix1Val:50, choix2Val:52, combat1Label:"", Val:""},
{textA:"Dépêchons nous, le temps passe vite", decor:"url('Sources/img_jeu/background/Foret1.png')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:51},
{textA:"Dépêchons nous, le temps passe vite", decor:"url('Sources/img_jeu/background/cheminAvVille.jpg')", persoDiscut: "", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:15},
{textA:"Il n'y a personne? Bon bah dans ce cas, je la prend.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:53},
{textA:"Il n'y a personne? Bon bah dans ce cas, je la prend.",  decor:"url('Sources/img_jeu/background/fond_choix2.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:54},
{textA:"Qu'est ce qu'il y a bien pu se passer ici.",  decor:"url('Sources/img_jeu/background/arriveeville.jpg')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:55},
{textA:"Qu'est ce qu'il y a bien pu se passer ici.",  decor:"url('Sources/img_jeu/background/ruine.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/Villageois.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:16},
{textA:"Un vieil homme sort de derrière un arbre.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"url('Sources/img_jeu/personnages/VieilHomme.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:57},
{textA:"Pourriez vous me laisser ma hache s'il vous plait.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:"url('Sources/img_jeu/interface/Vieuxdialogue.png')", pseudoD: "Mystérieux Vieillard", persoAff:"url('Sources/img_jeu/personnages/VieilHomme.png')", choix1Label: "Refuser", choix2Label: "Lui rendre la hache", choix1Val:58, choix2Val:60, combat1Label:"", Val:""},
{textA:"Je refuse, elle ne vous servirai à rien de tout façon.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/VieilHomme.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:59},
{textA:"Le châtiment divin s'est abattu sur vous.", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Je vous en prie.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/VieilHomme.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:61},
{textA:"Le vieil Homme disparait en laissant une épée derrière lui.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"url('Sources/img_jeu/personnages/sword.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:62},
{textA:"Qu'est ce que c'était que ça.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/sword.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:63},
{textA:"Votre puissance passe à 99.",  decor:"url('Sources/img_jeu/background/cheminPerdu_Foret.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:64},
{textA:"Téléportation...",  decor:"url('Sources/img_jeu/background/fond_choix2.png')", persoDiscut:"url('Sources/img_jeu/interface/dialogue.png')", pseudoD: "Narrateur", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:65},
{textA:"Où suis-je? on dirait une sorte d'arène.",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:perso, pseudoD: "", persoAff:"url('Sources/img_jeu/personnages/roiaff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:66},
{textA:"Prépares-toi étranger, tu vas avoir le droit à la peine de mort pour être entré sans permission.",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:"url('Sources/img_jeu/personnages/roiD.png')", pseudoD: "Roi Gangrel", persoAff:"url('Sources/img_jeu/personnages/roiaff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:67},
{textA:"Si ça fonctionne se message n'apparaitra jamais au cours du jeu", decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:"", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", ennemi:"roi", combat1Label:"Fuir", combat2Label:"Discuter", combat3Label:"Lui mettre un coup d'épée", combat4Label:"Coup de poing", combat1Val:71, combat2Val:72, combat3Val:70, combat4Val:68, Val:""},
{textA:"Pathétique.",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:"url('Sources/img_jeu/personnages/roiD.png')", pseudoD: "Roi Gangrel", persoAff:"url('Sources/img_jeu/personnages/roiaff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:69},
{textA:"Il esquive et vous transperce le thorax.", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Le roi est mort, La ville est de retour à son état normal", decor:"url('Sources/img_jeu/background/villepaisible.jpg')", persoDiscut:"", pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:""},
{textA:"Tu ne fuiras pas.",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:"url('Sources/img_jeu/personnages/roiD.png')", pseudoD: "Roi Gangrel", persoAff:"url('Sources/img_jeu/personnages/roiaff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:67},
{textA:"YaaAaH!",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:"url('Sources/img_jeu/personnages/roiD.png')", pseudoD: "Roi Gangrel", persoAff:"url('Sources/img_jeu/personnages/roiaff.png')", choix1Label: "", choix2Label: "", combat1Label:"", Val:73},
{textA:"*On m'a pris mon épée mais pas tué?*",  decor:"url('Sources/img_jeu/background/fond_choix2.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", combat1Label:"", Val:31},
{textA:"Un garde vous prend par surprise, quelle méthode de lâche", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Il vous tue pendant que vous essayez de mettre un coup", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Esquive",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", ennemi:"gladiateurcombat", combat1Label:"Préparer une esquive", combat2Label:"Coup de poing", combat3Label:"Charger une attaque", combat4Label:"Fuir", combat1Val:78, combat2Val:77, combat3Val:75, combat4Val:37, Val:""},
{textA:"Vous êtes affranchie", pseudoD:"Narrateur", choix1Label: "", combat1Label:""},
{textA:"Il se jette sur vous ",  decor:"url('Sources/img_jeu/background/arene.png')", persoDiscut:perso, pseudoD: "", persoAff:"", choix1Label: "", choix2Label: "", ennemi:"gladiateurcombat", combat1Label:"Préparer une esquive", combat2Label:"Coup de poing", combat3Label:"Charger une attaque", combat4Label:"Fuir", combat1Val:76, combat2Val:77, combat3Val:77, combat4Val:37, Val:""},
]

//fonctions de combat (probablement non implémenté)
 function Esquive(e,c) {
	if (gladiateur.pv > 0){
		if (e<=4) {
			if (c<=8) {
				vous.pv = vous.pv-10;
			} else {
				vous.pv = vous.pv-8;
			}
		}
	}
	console.log("vos pv:"+vous.pv+"et ses pv:"+gladiateur.pv);
}
function Attack(e,c) {
	if (gladiateur.pv > 0){
		if (e<=7) {
			if (c<=8) {
				gladiateur.pv = gladiateur.pv-10;
			} else {
				gladiateur.pv = gladiateur.pv-8;
			}
		}
	}
	if (vous.pv > 0){
		if (e<=8) {
			if (c<=8) {
				vous.pv = vous.pv-10;
			} else {
				vous.pv = vous.pv-8;
			}
		}
	}
	
	console.log("vos pv:"+vous.pv+"et ses pv:"+gladiateur.pv);
}
function other(e) {
	if (gladiateur.pv > 0){
		if (e<=9) {
			vous.pv = vous.pv-8;
		}
	}
	if (vous.pv > 0){
		if (e<=9) {
			gladiateur.pv = gladiateur.pv-10;
		}
	}
	if (gladiateur.pv > 0){
		if (e<=1) {
			vous.pv = vous.pv-8;
		}
	}
	console.log("vos pv:"+vous.pv+"et ses pv:"+gladiateur.pv);
}
function escape(){
	contenuCombat4.style.display = "none";
}

//fonction aléatoires pour évènements
function aleatCombat(){
	const MIN = 1;
	const MAX = 100;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
var nbAleatC = aleatCombat();
console.log(nbAleatC);

function aleatEsquive(){
	const MIN = 1;
	const MAX = 10;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
var nbAleatE = aleatEsquive();
console.log(nbAleatE);


function aleatSurvieCh(){
	const MIN = 1;
	const MAX = 2;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
var nbAleatS = aleatSurvieCh();
console.log(nbAleatS);

function aleatFuite(){
	const MIN = 1;
	const MAX = 10;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
var nbAleatF = aleatFuite();
console.log(nbAleatF);

function aleatHache(){
	const MIN = 1;
	const MAX = 20;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
var nbAleatH = aleatHache();
console.log(nbAleatH);


//caractéristiques des personnages (non implémenté, cause problème d'affichage)
function generateStat (){
	var el = document.getElementById("battle");
	el.innerHTML = "Nom du personnage : " + this.nom + "<br>"
		+ "Puissance : " + this.pui + "<br>"
		+ "Vitesse : " + this.vit + "<br>"
		+ "intelligence : " + this.int + "<br>"
		+ "résistance : " + this.def + "<br>"
		+ "point de vie : " + this.pv;
}
function Guerrier(nom, pui, vit, int, def, pv){
	this.nom = nom; 
	this.pui = pui; 
	this.vit = vit; 
	this.int = int; 
	this.def = def;
	this.pv = pv;

	this.generateStat = generateStat;
}
var cavalier = new Guerrier("Soldat",20,9,12,27,43);
var guardes = new Guerrier("Guardes",19,7,13,11,35);
var gladiateur = new Guerrier("Gladiateur",12,27,15,7,32);
var roi = new Guerrier("Roi",27,22,35,26,67);
var vous = new Guerrier(psd,10,15,20,5,29);