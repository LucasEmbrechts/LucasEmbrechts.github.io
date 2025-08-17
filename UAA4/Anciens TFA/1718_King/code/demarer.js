var proposition = document.getElementById('proposition');
var divPopulation = document.getElementById('population');
var divSatisfaction = document.getElementById('satisfaction');
var divArgent = document.getElementById('argent');
var personnage = document.getElementById('personnage');

var population = 100; 
var satisfaction = 100;
var argent = 200;
var propositionEnCours = 0;
//Phrase disponible
var propositions = ["Bonjour nouveau roi, je suis votre conseillère.",
"Le but du jeu est simple, il suffit de répondre par oui ou non au personne qui viendront vous parlez.",
"Comme vous le voyez il y a une barre de population, de satisfaction et d’or. Si l’ une de ces trois barres tombe à 0 vous perdez. Le but est d’arrivé à 1000 de population.",
"Miaouw (Ce chat a l’aire un peu magique, êtes vous d’accord ?)",
"J’ai faim, est-ce que je peut manger des personnes contre de l’or?",
"Des constructeurs veulent construire des maisons mais ils demandent de l’or",
"J’aimerai construire une taverne pour rendre les gens heureux. Pourrais-je avoir un peu d’or?",
"Devrions-nous pas vendre des maisons pour gagner de l’argent?",
"Pouvez vous m’acheter un sandwich?. Ce n’est presque rien pour vous.",
"J’ai mangé accidentellement quelque personnes. Voulez-vous de l’or en retour?",
"Puis-je avoir 2 pieces pour le journal?",
"Ne veut-tu pas faire un deal ? Des âmes contre de l’or",
"voulez-vous ouvrir les portes au ville voisine?",
"Une armée demande une alliance. Acceptez-vous ?",
"T’appelle sa un château ?",
"Donne l’or ou je mange ta ville",
"Puis-je prendre de l’or pour des nouvelles balles pour jongler?",
"je veux améliorer mon bateau. N'aurait-tu pas un peu d’argent?",
"Donner moi des vies et je vous fait apparaître de l’or",
"Avez-vous vu mon humérus?",
"Puis-je avoir un peu d’argent?",
"Deux hommes se battent dans la taverne. Voulez vous les arrêter?",
"J’aimerai avoir votre permission pour améliorer ma boutique.",
"Je veux bouffer des gens contre du pognon.",
"Si je prend quelque âmes je peut te passer de l’or. Est-tu d'accord?",
"Donne moi 200 pièce et je t’achèterai du matériel de qualité.",
"Je dois aller à une fête ce soir, je peut partir plus tôt ?",
"Mes amis peuvent-ils venir prier avec moi ?",
"Mon magasin marche tellement bien que j'ai envie de te donner un peu d’or.Accepte-tu ?",
"A-tu vu mon chat magique ?",
"J’aimerai ouvrir une nouvelle boutique de soupe. Pouvez-vous me donner un peu d’argent ?",
"Veut-tu voir dans ma boule de cristal vampirique ?",
"Les nouveaux habitant sont arrivé. Voulez-vous leur envoyer un cadeau de bienvenu?",
"Maman dit que je doit vous demander pour partir en aventure. Je peut y aller ?",
"Puis-je faire peur à ta population contre de l’or?",
"J’ai un ami à l’école des sorcier mais j’ai besoin d’un peu d’argent pour le faire venir.",
"A-tu déjà vu un coffre faire un backflip ? ",
"Le propriétaire de la taverne gagne beaucoup d'argent et vous a donné de l’or.",
"salut,je suis Tim.Enchanter de vous renconter.Amez-vous les glaces?",
"Est-que mes amie peuvent venir joué avec moi?",
"Puis-je avoir une piece mon Roi?",
"Je vous propose un rituel.Beaucoup de personne contre beaucoup d'or.",
"Tu n'a pas parlé à la tâche mauve n'est-ce pas?",
"Est-ce les gens me veulent quelque chose?",
"J’aimerai m'installer ailleur, je paillerai si vous vouler.",
"Voudriez-vous acheter des épées pour vos gardes? Une ville bien protégée est une ville heureuse!",
"Monsieur, un peuple du Sud a demandé des armes.Ai-je la permission de les fournir? J'ai besoin d'un peu d'or pour aider à remplir la commande.",
"Miaouw(Je peut avoir de la nourriture?)",
"Miaouw(Pouvez vous me carreser)",
"Voulez-vous cette tasse de thé",
"Il y a un homme dans le hall qui demande à parler.Voulez-vous le faire entrer? ",
"Monsieur, avez-vous vu un gars bleu fait de fil arriver ici tout à l'heure?",
"J'ai pas reussi à briser la malédiction.Peut-tu m'aider?Je ne veut pas manger à vie.",
"Cot,cot,cot(Faut-il capturer ce poulet?)",
"Bum Bum Badum Dum DumOuais !! Tu aimes mon rythme?",
"Boom Boom, Badoom Doom Doom! Celui là c'est mon meilleur, n'est-ce pas? ",
"Tu veux que je fasse de la batterie?",
"Plus de profits ont été réalisés sur le port, je suis venu partager avec vous!",
"Voulez-vous acheter des fleurs de notre jardin? Elles ont un prix spécial pour vous.",
"Certaines plantes ont germé dans les jardins. Sommes-nous autorisés à en faire des citoyens officiels?",
"Que diriez-vous de ... quelques centaines d'or de votre part, et je ferai en sorte que vos citoyens soient heureux!"

]
//Générations de la phrase aléatoire
function aleat(){
	const MIN = 3;
	const MAX = 58;
	var nb = MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
}
//bouton pause
function pause(){
		if(document.getElementById('pause').style.display == 'block'){
		document.getElementById('pause').style.display = 'none';
    	document.getElementById('continuer').style.display = 'block';
    	document.getElementById('recommencer').style.display = 'block';
    	document.getElementById('menuprincipal').style.display = 'block';
    	document.getElementById('pause2').style.display = 'block';
    	document.getElementById('oui').style.display = 'none';
		document.getElementById('non').style.display = 'none';
  		}
}
function continuer(){
	if (document.getElementById('continuer').style.display == 'block') {
		document.getElementById('pause').style.display = 'block';
    	document.getElementById('continuer').style.display = 'none';
    	document.getElementById('recommencer').style.display = 'none';
    	document.getElementById('menuprincipal').style.display = 'none';
    	document.getElementById('pause2').style.display = 'none';
    	document.getElementById('oui').style.display = 'block';
		document.getElementById('non').style.display = 'block';

	}
}
//Apparation de Game over
function miseAJourDePerdu(){
if (argent <= 0 || population <= 0 || satisfaction <= 0) {
	document.getElementById('perdu').style.display = 'block';
	document.getElementById('oui').style.display = 'none';
	document.getElementById('non').style.display = 'none';
	document.getElementById('cagePerdu').style.display = 'block';
	}
}
//Génération de victoire
function miseAJourDeGagne(){
if (population >= 1000) {
	document.getElementById('perdu').style.display = 'block';
	document.getElementById('oui').style.display = 'none';
	document.getElementById('non').style.display = 'none';
	document.getElementById('cageGagne').style.display = 'block';
	}
}

//Générartion des persoonage
function miseAJourDesImages(){
	if (propositionEnCours == 0) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if(propositionEnCours == 1) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 2) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 3) {
		personnage.innerHTML= '<img src="../personnages/chat.png">'
	}
	else if (propositionEnCours == 4) {
		personnage.innerHTML= '<img src="../personnages/coffre.png">'
	}
	else if (propositionEnCours == 5) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 6) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 7) {
		personnage.innerHTML= '<img src="../personnages/mason.png">'
	}
	else if (propositionEnCours == 8) {
		personnage.innerHTML= '<img src="../personnages/mason.png">'
	}
	else if (propositionEnCours == 9) {
		personnage.innerHTML= '<img src="../personnages/coffre.png">'
	}
	else if (propositionEnCours == 10) {
		personnage.innerHTML= '<img src="../personnages/grandmere.png">'
	}
	else if (propositionEnCours == 11) {
		personnage.innerHTML= '<img src="../personnages/diable.png">'
	}
	else if (propositionEnCours == 12) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 13) {
		personnage.innerHTML= '<img src="../personnages/militaire.png">'
	}
	else if (propositionEnCours == 14) {
		personnage.innerHTML= '<img src="../personnages/fantome.png">'
	}
	else if (propositionEnCours == 15) {
		personnage.innerHTML= '<img src="../personnages/Dragon.png">'
	}
	else if (propositionEnCours == 16) {
		personnage.innerHTML= '<img src="../personnages/clown.png">'
	}
	else if (propositionEnCours == 17) {
		personnage.innerHTML= '<img src="../personnages/pecheur.png">'
	}
	else if (propositionEnCours == 18) {
		personnage.innerHTML= '<img src="../personnages/sorciere.png">'
	}
	else if (propositionEnCours == 19) {
		personnage.innerHTML= '<img src="../personnages/squellete.png">'
	}
	else if (propositionEnCours == 20) {
		personnage.innerHTML= '<img src="../personnages/yeti.png">'
	}
	else if (propositionEnCours == 21) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 22) {
		personnage.innerHTML= '<img src="../personnages/forgeron.png">'
	}
	else if (propositionEnCours == 23) {
		personnage.innerHTML= '<img src="../personnages/coffre.png">'
	}
	else if (propositionEnCours == 24) {
		personnage.innerHTML= '<img src="../personnages/diable.png">'
	}
	else if (propositionEnCours == 25) {
		personnage.innerHTML= '<img src="../personnages/aladin.png">'
	}
	else if (propositionEnCours == 26) {
		personnage.innerHTML= '<img src="../personnages/serveur.png">'
	}
	else if (propositionEnCours == 27) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 28) {
		personnage.innerHTML= '<img src="../personnages/enfant.png">'
	}
	else if (propositionEnCours == 29) {
		personnage.innerHTML= '<img src="../personnages/forgeron.png">'
	}
	else if (propositionEnCours == 30) {
		personnage.innerHTML= '<img src="../personnages/sorcier.png">'
	}
	else if (propositionEnCours == 31) {
		personnage.innerHTML= '<img src="../personnages/grandmere.png">'
	}
	else if (propositionEnCours == 32) {
		personnage.innerHTML= '<img src="../personnages/vampire.png">'
	}
	else if (propositionEnCours == 33) {
		personnage.innerHTML= '<img src="../personnages/mini chevalier.png">'
	}
	else if (propositionEnCours == 34) {
		personnage.innerHTML= '<img src="../personnages/mini chevalier.png">'
	}
	else if (propositionEnCours == 35) {
		personnage.innerHTML= '<img src="../personnages/fantome.png">'
	}
	else if (propositionEnCours == 36) {
		personnage.innerHTML= '<img src="../personnages/sorciere.png">'
	}
	else if (propositionEnCours == 37) {
		personnage.innerHTML= '<img src="../personnages/coffre.png">'
	}
	else if (propositionEnCours == 38) {
		personnage.innerHTML= '<img src="../personnages/serviteuse.png">'
	}
	else if (propositionEnCours == 39) {
	    personnage.innerHTML= '<img src="../personnages/enfant.png">'
	}
	else if (propositionEnCours == 40) {
	    personnage.innerHTML= '<img src="../personnages/enfant.png">'
	}
	else if (propositionEnCours == 41) {
	    personnage.innerHTML= '<img src="../personnages/enfant.png">'
	}
	else if (propositionEnCours == 42) {
	    personnage.innerHTML= '<img src="../personnages/diable.png">'
	}
	else if (propositionEnCours == 43) {
	    personnage.innerHTML= '<img src="../personnages/Alien.png">'
	}
	else if (propositionEnCours == 44) {
	    personnage.innerHTML= '<img src="../personnages/oeil.png">'
	}
	else if (propositionEnCours == 45) {
	    personnage.innerHTML= '<img src="../personnages/forgeron.png">'
	}
	else if (propositionEnCours == 46) {
	    personnage.innerHTML= '<img src="../personnages/forgeron.png">'
	}
	else if (propositionEnCours == 47) {
	    personnage.innerHTML= '<img src="../personnages/chat.png">'
	}
	else if (propositionEnCours == 48) {
	    personnage.innerHTML= '<img src="../personnages/chat.png">'
	}
	else if (propositionEnCours == 49) {
	    personnage.innerHTML= '<img src="../personnages/serveur.png">'
	}
	else if (propositionEnCours == 50) {
	    personnage.innerHTML= '<img src="../personnages/serveur.png">'
	}
	else if (propositionEnCours == 51) {
	    personnage.innerHTML= '<img src="../personnages/bouton.png">'
	}
	else if (propositionEnCours == 52) {
	    personnage.innerHTML= '<img src="../personnages/coffre.png">'
	}
	else if (propositionEnCours == 53) {
	    personnage.innerHTML= '<img src="../personnages/poulet.png">'
	}
	else if (propositionEnCours == 54) {
	    personnage.innerHTML= '<img src="../personnages/tambour.png">'
	}
	else if (propositionEnCours == 55) {
	    personnage.innerHTML= '<img src="../personnages/tambour.png">'
	}
	else if (propositionEnCours == 56) {
	    personnage.innerHTML= '<img src="../personnages/tambour.png">'
	}
	else if (propositionEnCours == 57) {
	    personnage.innerHTML= '<img src="../personnages/pecheur.png">'
	}
	else if (propositionEnCours == 58) {
	    personnage.innerHTML= '<img src="../personnages/Gardener.png">'
	}
	else if (propositionEnCours == 59) {
	    personnage.innerHTML= '<img src="../personnages/Gardener.png">'
	}
	else if (propositionEnCours == 60) {
	    personnage.innerHTML= '<img src="../personnages/diable.png">'
	}
}


//Modification des points
function checkProposition(reponse){
	
	if (propositionEnCours < 0){
		propositionEnCours = aleat();
		proposition.innerHTML = propositions[propositionEnCours];
	} else if (propositionEnCours <3){
		propositionEnCours++;
		proposition.innerHTML = propositions[propositionEnCours];
	} else {
		if (propositionEnCours == 3 && reponse == "non") {
            proposition.innerHTML = "Mauvaise réponse.";
            satisfaction = satisfaction - 1;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
		else if (propositionEnCours == 3 && reponse == "oui") {
			proposition.innerHTML = "vous aviez raison.";
			satisfaction = satisfaction + 1;
			divSatisfaction.innerHTML = satisfaction;

			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 4 && reponse == "non") {
			proposition.innerHTML = "Dommage pour vous.";
			satisfaction = satisfaction - 10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 4 && reponse == "oui") {
			proposition.innerHTML = "Merci voila votre paiement.";
			population = population - 5;
			argent = argent + 100 ;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 5 && reponse == "oui") {
			proposition.innerHTML = "Votre ville grandit vite.";
			population = population + 5;
			argent = argent - 50 ;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 5 && reponse == "non") {
			proposition.innerHTML = "Dommage.";
			satisfaction = satisfaction  - 5;
		
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 6 && reponse == "oui") {
			proposition.innerHTML = "Merci ça sera fait.";
			satisfaction = satisfaction  + 20;
			argent = argent -50;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 6 && reponse == "non") {
			proposition.innerHTML = "Dommage pour vous.";
			satisfaction = satisfaction  - 5;
		
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 7 && reponse == "oui") {
			proposition.innerHTML = "J’espère que vous aurait assez d'argent avec ça.";
			argent = argent +100;
			population = population - 5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 7 && reponse == "non") {
			proposition.innerHTML = "Je ne suis pas sûr que vous aurait assez d'argent pour la suite.";
			satisfaction = satisfaction  + 5;
		
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 8 && reponse == "oui") {
			proposition.innerHTML = "Merci mon roi.";
			satisfaction = satisfaction  + 1;
			argent = argent - 3;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 8 && reponse == "non") {
			proposition.innerHTML = "Je trouverai bien un roi qui voudra bien m'en acheter.";
			satisfaction = satisfaction  + 2;
			population = population -1;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 9 && reponse == "oui") {
			proposition.innerHTML = "Voilà l’or en retour.";
			argent = argent + 100;
			population = population -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 9 && reponse == "non") {
			proposition.innerHTML = "vous faite un coffre heureux.";
			satisfaction = satisfaction  + 1;
			population = population -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 10 && reponse == "oui") {
			proposition.innerHTML = "Sa fera un peu de lecture.";
			satisfaction = satisfaction  + 2;
			argent = argent - 2 ;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 10 && reponse == "non") {
			proposition.innerHTML = "Je suppose que d'autre personne l'on deja acheter.";
			satisfaction = satisfaction  -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 11 && reponse == "oui") {
			proposition.innerHTML = "Merci,je ne serai plus tout seul en enfer.";
			population = population -5;
			argent = argent +200;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 11 && reponse == "non") {
			proposition.innerHTML = "Tant pis je les prend quand même.";
			population = population -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 12 && reponse == "oui") {
			proposition.innerHTML = "C’est bien votre ville grandit.";
			population = population +5;
			argent = argent +50;
			satisfaction = satisfaction +20;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 12 && reponse == "non") {
			proposition.innerHTML = "Dommage.";
			population = population -0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 13 && reponse == "oui") {
			proposition.innerHTML = "Notre armée s’agrandit.";
			population = population +10;
			
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 13 && reponse == "non") {
			proposition.innerHTML = "Faite attention,il vont peut être nous attaqué plus tard.";
			satisfaction = satisfaction - 20;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 14 && reponse == "oui") {
			proposition.innerHTML = "En effet tu a raison.";
			satisfaction =satisfaction +1
			
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 14 && reponse == "non") {
			proposition.innerHTML = "Et si s’en est un.";
			satisfaction = satisfaction - 1;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 15 && reponse == "oui") {
			proposition.innerHTML = "Merci bien.";
			argent = argent -300;
			
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 15 && reponse == "non") {
			proposition.innerHTML = "Et voilà quelque mort en plus.";
			population = population -100;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 16 && reponse == "oui") {
			proposition.innerHTML = "Je ferai de meilleur jonglage pour les cirque.";
			argent = argent -10;
			satisfaction = satisfaction + 5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 16 && reponse == "non") {
			proposition.innerHTML = "Les spectateur ne seront pas content.";
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 17 && reponse == "oui") {
			proposition.innerHTML = "Merci je vous les rendrai quand j’en aurait.";
			argent = argent -50;
			satisfaction = satisfaction + 30;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 17 && reponse == "non") {
			proposition.innerHTML = "Tant pis je vais me débrouiller avec mon equipage.";
			satisfaction = satisfaction -20;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 18 && reponse == "oui") {
			proposition.innerHTML = "C’est une bonne offre.";
			argent = argent +150;
			satisfaction = satisfaction - 10;
			population = population -3;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 18 && reponse == "non") {
			proposition.innerHTML = "Dommage vous auriez gagner beaucoup.";
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 19 && reponse == "oui") {
			proposition.innerHTML = "Ok merci.";
			satisfaction = satisfaction + 2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 19 && reponse == "non") {
			proposition.innerHTML = "Tant pis je vais chercher.";
			satisfaction = satisfaction -0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 20 && reponse == "oui") {
			proposition.innerHTML = "Ok je reste.";
			population = population +1;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 20 && reponse == "non") {
			proposition.innerHTML = "Ok je part.";
			population = population -1 ;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 21 && reponse == "oui") {
			proposition.innerHTML = "On va les arrêter.";
			satisfaction = satisfaction + 1 ;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 21 && reponse == "non") {
			proposition.innerHTML = "Oh non il y a un mort.";
			population = population -1 ;
			satisfaction = satisfaction -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 22 && reponse == "oui") {
			proposition.innerHTML = "Merci beaucoup.";
			satisfaction = satisfaction + 2 ;
			population = population +3;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 22 && reponse == "non") {
			proposition.innerHTML = "Pas grave j’irai ailleurs.";
			population = population -1 ;
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 23 && reponse == "oui") {
			proposition.innerHTML = "Merci je n’ai plus faim.";
			satisfaction = satisfaction -10 ;
			population = population -5;
			argent = argent +100;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 23 && reponse == "non") {
			proposition.innerHTML = "Vous devrez bien accepter un jour.";
			satisfaction = satisfaction -1;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 24 && reponse == "oui") {
			proposition.innerHTML = "Merci.";
			satisfaction = satisfaction -10 ;
			population = population -3;
			argent = argent +200;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 24 && reponse == "non") {
			proposition.innerHTML = "Je reviendrai plus tard.";
			satisfaction = satisfaction -2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 25 && reponse == "oui") {
			proposition.innerHTML = "Sa rend les gens heureux.";
			satisfaction = satisfaction +100 ;
			argent = argent -200;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 25 && reponse == "non") {
			proposition.innerHTML = "Dommage, vous auriez rendu les gens heureux.";
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 26 && reponse == "oui") {
			proposition.innerHTML = "Merci, je travaillerai plus demain.";
			satisfaction = satisfaction + 5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 26 && reponse == "non") {
			proposition.innerHTML = "Tant pis je reste ici.";
			satisfaction = satisfaction -5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 27 && reponse == "oui") {
			proposition.innerHTML = "Vous faite une bonne action sire.";
			satisfaction = satisfaction + 20;
			population=population + 20;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 27 && reponse == "non") {
			proposition.innerHTML = "Ils étaient énervé et ont cassé quelque truc,on a du les réparer.";
			satisfaction = satisfaction -20;
			argent = argent - 50;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 28 && reponse == "oui") {
			proposition.innerHTML = "Merci.";
			satisfaction = satisfaction + 5;
			population=population + 3;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 28 && reponse == "non") {
			proposition.innerHTML = "Vous êtes méchant.";
			satisfaction = satisfaction -5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 29 && reponse == "oui") {
			proposition.innerHTML = "Voilà mon cadeau.";
			argent=argent+50;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 29 && reponse == "non") {
			proposition.innerHTML = "Ca sera de l’or en plus pour moi.";
			satisfaction = satisfaction -0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 30 && reponse == "oui") {
			proposition.innerHTML = "Enfin, je l'ai retrouvé.";
			satisfaction=satisfaction + 5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 30 && reponse == "non") {
			proposition.innerHTML = "Pas grave je vais continuer à chercher tout seul.";
			satisfaction = satisfaction -0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 31 && reponse == "oui") {
			proposition.innerHTML = "Je viendrait vous en donner.";
			satisfaction=satisfaction+20;
			population=population+10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 31 && reponse == "non") {
			proposition.innerHTML = "Vous n’êtes pas un bon roi.";
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 32 && reponse == "oui") {
			proposition.innerHTML = "Je vois la fortune dans votre futur.";
			argent=argent+50;
			satisfaction=satisfaction+5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 32 && reponse == "non") {
			proposition.innerHTML = "Tant pis je garde votre futur pour moi.";
			satisfaction = satisfaction -10;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 33 && reponse == "oui") {
			proposition.innerHTML = "Ils seront heureux dans notre ville.";
			argent=argent-20;
			population=population+5;
			satisfaction=satisfaction+15;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 33 && reponse == "non") {
			proposition.innerHTML = "Ca ne leur fera rien.";
			population=population+5;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 34 && reponse == "oui") {
			proposition.innerHTML = "Merci je reviendrai.";
			satisfaction=satisfaction+2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 34 && reponse == "non") {
			proposition.innerHTML = "Je partirai quand même.";
			satisfaction=satisfaction-2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 35 && reponse == "oui") {
			proposition.innerHTML = "Voilà c’est fait.";
			argent=argent+100;
			satisfaction=satisfaction-50;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 35 && reponse == "non") {
			proposition.innerHTML = "Tant pis.";
			satisfaction=satisfaction-2;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 36 && reponse == "oui") {
			proposition.innerHTML = "Merci sire.";
			argent=argent-5;
			satisfaction=satisfaction-3;
			population=population+1;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 36 && reponse == "non") {
			proposition.innerHTML = "Dommage, je resterai seul.";
			satisfaction=satisfaction-3;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 37 && reponse == "oui") {
			proposition.innerHTML = "Alors c’est bon.";
			argent=argent-0;
			satisfaction=satisfaction-0;
			population=population+0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 37 && reponse == "non") {
			proposition.innerHTML = "Et bien c’est pas pour aujourd’hui.";
			satisfaction=satisfaction-0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 38 && reponse == "oui") {
			proposition.innerHTML = "Remercier le pour moi.";
			argent=argent+50;
			satisfaction=satisfaction-0;
			population=population+0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
		else if (propositionEnCours == 38 && reponse == "non") {
			proposition.innerHTML = "Dites lui de les garder.";
			satisfaction=satisfaction-0;
			divSatisfaction.innerHTML = satisfaction;
			divArgent.innerHTML = argent;
			divPopulation.innerHTML = population;
			propositionEnCours = -1;
		}
        else if (propositionEnCours == 39 && reponse == "oui") {
            proposition.innerHTML = "Moi aussi.";
            argent=argent+0;
            satisfaction=satisfaction+2;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 39 && reponse == "non") {
            proposition.innerHTML = "Dommage.";
            satisfaction=satisfaction-2;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
	    }
         else if (propositionEnCours == 40 && reponse == "oui") {
            proposition.innerHTML = "Merci mon roi.";
            argent=argent+0;
            satisfaction=satisfaction+8;
            population=population+2;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 40 && reponse == "non") {
            proposition.innerHTML = "Oh non, je vais devoir joué tout seul.";
            satisfaction=satisfaction-8;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 41 && reponse == "oui") {
            proposition.innerHTML = "Merci mon roi.";
            argent=argent-1;
            satisfaction=satisfaction+2;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 41 && reponse == "non") {
            proposition.innerHTML = "Je resterai pauvre a vie.";
            satisfaction=satisfaction-2;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 42 && reponse == "oui") {
            proposition.innerHTML = "Voilà l'or.";
            argent=argent+2000;
            satisfaction=satisfaction-50;
            population=population-100;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 42 && reponse == "non") {
            proposition.innerHTML = "Mmh!Dommage.";
            satisfaction=satisfaction-2;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 43 && reponse == "oui") {
            proposition.innerHTML = "Merci pour l'info.";
            argent=argent+50;
            satisfaction=satisfaction+2;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 43 && reponse == "non") {
            proposition.innerHTML = "T'es sûr?";
            satisfaction=satisfaction-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        
        else if (propositionEnCours == 44 && reponse == "oui") {
            proposition.innerHTML = "Aidez-moi en échange d'or s'il vous plaît.";
            argent=argent+50;
            satisfaction=satisfaction+2;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 44 && reponse == "non") {
            proposition.innerHTML = "Merci, je les trouvai bizarre en ce moment.";
            satisfaction=satisfaction+2;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 45 && reponse == "oui") {
            proposition.innerHTML = "Merci mon roi.";
            argent=argent+100;
            satisfaction=satisfaction+5;
            population=population+3;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 45 && reponse == "non") {
            proposition.innerHTML = "Pas grave.";
            satisfaction=satisfaction-5;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 46 && reponse == "oui") {
            proposition.innerHTML = "Je leur en donnerai à chacun.";
            argent=argent-100;
            satisfaction=satisfaction+5;
            population=population+3;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 46 && reponse == "non") {
            proposition.innerHTML = "Pas grave.";
            satisfaction=satisfaction-5;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 47 && reponse == "oui") {
            proposition.innerHTML = "Miaouw(merci mon roi).";
            argent=argent-0;
            satisfaction=satisfaction+2;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 47 && reponse == "non") {
            proposition.innerHTML = "Miaouw(Je vais mourrir de faim).";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 48 && reponse == "oui") {
            proposition.innerHTML = "Miaouw(Ca fait tellement de bien).";
            argent=argent-0;
            satisfaction=satisfaction+2;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 48 && reponse == "non") {
            proposition.innerHTML = "Miaouw(J'irai demander à quelqu'un d'autre).";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 49 && reponse == "oui") {
            proposition.innerHTML = "Voici votre tasse.";
            argent=argent-0;
            satisfaction=satisfaction+2;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 49 && reponse == "non") {
            proposition.innerHTML = "Je la boirez alors.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 50 && reponse == "oui") {
            proposition.innerHTML = "Un voleur professionel qui n'a pas peur de tuer des gardes.";
            argent=argent-100;
            satisfaction=satisfaction+0;
            population=population-1;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 50 && reponse == "non") {
            proposition.innerHTML = "Je pense que c'est la meilleur chose à faire.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 51 && reponse == "oui") {
            proposition.innerHTML = "Je vais enfin pouvoir me racrocher à lui.";
            argent=argent-0;
            satisfaction=satisfaction+2;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 51 && reponse == "non") {
            proposition.innerHTML = "Je vais le retrouvé tout seul.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 52 && reponse == "oui") {
            proposition.innerHTML = "J'èspere que ça va marcher.";
            argent=argent-50;
            satisfaction=satisfaction+2;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 52 && reponse == "non") {
            proposition.innerHTML = "Je reviendrai te mangé des gens alors.";
            satisfaction=satisfaction-2;
            population = population - 5;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 53 && reponse == "oui") {
            proposition.innerHTML = "On y est pas arrivé, il est trop rapide. Et en plus il embête la population.";
            argent=argent-0;
            satisfaction=satisfaction-10;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 53 && reponse == "non") {
            proposition.innerHTML = "C'est un poulet tueur.";
            satisfaction=satisfaction-2;
            population = population - 1;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 54 && reponse == "oui") {
            proposition.innerHTML = "YEAH!!Moi aussi je l'adore.";
            argent=argent-0;
            satisfaction=satisfaction+5;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 54 && reponse == "non") {
            proposition.innerHTML = "Oh!Je vais changer de rythme pour la prochaine fois.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 55 && reponse == "oui") {
            proposition.innerHTML = "YEAH!!Moi aussi je l'adore.";
            argent=argent-0;
            satisfaction=satisfaction+5;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 55 && reponse == "non") {
            proposition.innerHTML = "Oh!Je vais changer de rythme pour la prochaine fois.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 56 && reponse == "oui") {
            proposition.innerHTML = "Ok, je vais m'y mettre.";
            argent=argent-0;
            satisfaction=satisfaction+5;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 56 && reponse == "non") {
            proposition.innerHTML = "Ok, je reste avec mes tambours.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 57 && reponse == "oui") {
            proposition.innerHTML = "Voici l'or.";
            argent=argent+100;
            satisfaction=satisfaction+0;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 57 && reponse == "non") {
            proposition.innerHTML = "Je le garde pour améliorer mon bateau.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 58 && reponse == "oui") {
            proposition.innerHTML = "Les voici vous avez de la chance normalement elles coûte 20.";
            argent=argent-10;
            satisfaction=satisfaction+5;
            population=population-0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 58 && reponse == "non") {
            proposition.innerHTML = "Elles pourront continuer à pousser pour la prochaîne fois.";
            satisfaction=satisfaction-2;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 59 && reponse == "oui") {
            proposition.innerHTML = "Elles seront tellement contente.";
            argent=argent-0;
            satisfaction=satisfaction+15;
            population=population+10;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 59 && reponse == "non") {
            proposition.innerHTML = "C'est pas grave, elles ont l'habitude.";
            satisfaction=satisfaction-15;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 60 && reponse == "oui") {
            proposition.innerHTML = "Ils ont l'air heureux.";
            argent=argent-100;
            satisfaction=satisfaction+50;
            population=population+0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }
        else if (propositionEnCours == 60 && reponse == "non") {
            proposition.innerHTML = "Ils seront déprimé à vie.";
            satisfaction=satisfaction-15;
            population = population - 0;
            divSatisfaction.innerHTML = satisfaction;
            divArgent.innerHTML = argent;
            divPopulation.innerHTML = population;
            propositionEnCours = -1;
        }

    }
    miseAJourDesImages();
    miseAJourDePerdu();
    miseAJourDeGagne();
    
}	


