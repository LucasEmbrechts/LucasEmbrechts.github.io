var musique
window.onload = function(){
	musique = document.getElementById("musiqueMenu");
	musique.play(); //Fonction se lançant dès le début et récupérant, puis lançant la musique du menu
}

//Fonctions regroupant les différentes difficultés
function facile(){
    var maxVaisseaux = 10;
    var vies = { boss : 250,
                 joueur : 10,
                 ennemis : 1};
    var points = {ennemi : 100,
    			 vague : 500};
    lancementJeu(maxVaisseaux, vies, points); 
}

function normal(){
    var maxVaisseaux = 15;
    var vies = { boss : 500,
                 joueur : 10,
                 ennemis : 5};
    var points = {ennemi : 250,
    			 vague : 1000};
    lancementJeu(maxVaisseaux, vies, points);
}

function difficle(){
    var maxVaisseaux = 20;
    var vies = { boss : 750,
                 joueur : 10,
                 ennemis : 10};
    var points = {ennemi : 650,
    			 vague : 1500};
    lancementJeu(maxVaisseaux, vies, points);
}

function gandalf(){
    var maxVaisseaux = 25;
    var vies = { boss : 2500,
                 joueur : 1,
                 ennemis : 25};
    var points = {ennemi : 1500,
    			 vague : 5000};
    var element = document.getElementById('monCanvas'); //On change le background en un Gif de gandalf
    element.style.backgroundImage = "url('gandalf.gif')";
    element.style.backgroundSize = 'cover';
    lancementJeu(maxVaisseaux, vies, points);
}
//Fin des fonctions regroupant les difficultés

function deleteDiv(depop, pop){ //Fonction servant a shifter entre les div des menus
	var element = document.getElementById(depop);
	element.style.display = "none";
	element = document.getElementById(pop);
	element.style.display = "block"
}
var mod; //var accueuillant le mod de jeu
function unlimited(){
	mod = "unlimited"; //Le mod est une variable textuelle qui sera testé par la suite
}

function modNormal(){
	mod = "normal";
}

function lancementJeu(maxVaisseaux, vies, points){ //Fonction regroupant la totalité du jeu en lui même, sans inclure les menus
    var element = document.getElementById('tout'); //On enlève les menus
    element.style.display = "none";		
         
    musique.pause(); //On arrête la musique du menu
    if(maxVaisseaux == 25){ 
    	musique = document.getElementById('musiqueGandalf'); //test pour voir si la difficulté est en Gandal
    	var hauteurImage = 319;								 //Et Ainsi adapter la musique et la taille d'image
		var largeurImage = 434;								 //L'image est déclarée ailleurs
    } else {
    	musique = document.getElementById('musiqueJeu');
    	var hauteurImage = 74;
    	var largeurImage = 92;
    }
    musique.play(); //On lance la musique du jeu
    var sondTir = document.getElementById("tirSond"); 
    var hitEnnemi = document.getElementById("hitEnnemiSond"); //On récupère les différents bruitages
    var vaisseauTue = document.getElementById('vaisseauTue')

    window.document.onkeydown = touchePress; //Active la fonction qaund le joueur dépresse une touche
	window.document.onkeyup = toucheDepress; //Active la fonction qaund le joueur presse une touche

	var touche = { //Tableau d'objets regroupant toutes les variables liés aux touches pressables
            gauche : false,
            droite : false,		
            haut : false,
            bas : false,
            espace : false,
            escape : false
        	};

    function touchePress(e){ 
    	if(e.keyCode == 65 || e.keyCode == 81 || e.keyCode == 37) touche.gauche = true; //Une fois que le joueur presse la bonne touche
    	if(e.keyCode == 87 || e.keyCode == 38 || e.keyCode == 90) touche.haut = true;   //La variable lui étant liée se trasforme en true
    	if(e.keyCode == 68 || e.keyCode == 39) touche.droite = true;					
    	if(e.keyCode == 83 || e.keyCode == 40) touche.bas = true;
    	if(e.keyCode == 32) touche.espace = true;
    }
    function toucheDepress(e){
    	if(e.keyCode == 65 || e.keyCode == 81 || e.keyCode == 37) touche.gauche = false; //Et une fois qu'il la dépresse la variable redevient false
    	if(e.keyCode == 87 || e.keyCode == 38 || e.keyCode == 90) touche.haut = false;	
    	if(e.keyCode == 68 || e.keyCode == 39) touche.droite = false;					 
    	if(e.keyCode == 83 || e.keyCode == 40) touche.bas = false;
    	if(e.keyCode == 32) touche.espace = false;										 
    }
    
    var canvas = document.getElementById('monCanvas'); //On récupère le canvas et le context
    var context = canvas.getContext('2d');
    canvas.style.display = "block"; //On rend le canvas visible
    canvas.width = window.innerWidth; //On set la hauteur et la largeur du canvas pour qu'ils prennent tout l'écran
	canvas.height = window.innerHeight;
    
    var yVaisseauInitial = canvas.height - ((canvas.width/18)/13)*11; //Paramètres x et y du vaisseau joueur correspondant 
    var xVaisseauInitial = canvas.width/2 - canvas.width/36;		  //Au coin supérieur gauche du vaisseau
    var constructionsBleues = "#1830dd"; //Couleur des constructions, en globales pour êtres modifiées ultérieusement
    var constructionsRouges = "#ff0f0f"

    var tirJoueur = [];	//tableaux accueuillant respectivement les ibjets des tirs du joueur 
    var tirEnnemis = [];//Et de l'ennemi

    var etoile = [];	//Tableau accueuillant les étoiles
    var nombreEtoiles = 1;//Nombre d'étoiles a afficher
     
    var nombreTirJoueur = 0; //nombre de tirs du joueur a afficher
    var nombreTirEnnemis = 0;//Nombre de tirs de l'ennemi a afficher
    var vaisseauEnnemi = []; //Variable accueillant les objets des vaisseaux ennemis
    var numeroVaisseauTireur = []; //Variable accueuillant le numero du vaisseau ennemi qui tire (afin de pouvoir seter la position de départ du tir)

    var nombreVaisseaux = 2; //Nombre de vaisseaux a afficher
    var vaisseauxTotal = 2;  //Nombre vaisseaux totaux appartus pendant une vague 
    var affluxVaisseauxEnnemis = true; //Toggle servant a savoir si le vaisseau ennemi doit apparaitre lorsque la colone touche le mur
    var contactVaiseaux = []; //Variable accueillant les positions x et x des bords du vaisseau ennemi

	var score = 0; //Sscore du joueur
	var imageBoss = new Image(); //L'image du boss
		imageBoss.src = 'bossTouche.png' //Elle est en touché dès le début pour faire un flash lumineux
	var presenceBoss = false; //Variable définissant si le boss est apparu ou non
	var xRayon = Math.random()*(canvas.width - canvas.width/50) + canvas.width/50; //Position en x de son rayon
	var yRayon = canvas.height/3.7; //position en y du top de son rayon
	var hauteurRayon = 0; //Hauteur du rayon (qui est unn rectangle, plu sla hauteur augmente, plus le rayon s'allonge)

	if(mod == 'normal'){ //On met un timer pour le mod normal
		var temps = 1; //Temps en seconde
		var tempsEcrit = "05:00"; //Temps a afficher
		var secondes = 0; //Secondes a afficher
		var minutes = 0; //Minutes a afficher
	 	setInterval(timing, 1000);
	}
	//Début du timer
	function timing(){
		temps--;
		secondes = temps%60; 									//Chaque seconde dans cet Intervalle
		if(secondes < 10) secondes = '0' + secondes.toString();	//on retire une seconde au temps
		else secondes.toString();								//Et on converti le résultat obetenu
		minutes = temps;										//Pour donner une variable écrite
		while(minutes % 60 != 0){								
			minutes--;
			if(minutes % 60 == 0){
				minutes/=60;
				tempsEcrit = '0' + minutes.toString() + ':' + secondes.toString();  
				break;
			}
		}
		if(temps == 0) { //Si le temps est égal a 0 le boss apparait
			nombreVaisseaux = 0; //Les vaisseaux disparaissent
			vaisseauxTotal = 0;  
			mod = 'unlimited'    //Afin de ne plus avoir le temps affiché
			canvas.classList.toggle('warning'); //On ajoute une classe pour l'effet alarme
			musique.pause(); //On arrte la musique
			var alarme = document.getElementById('warning'); //On met un bruit d'alarme
			alarme.play();

			setTimeout(function(){ //Après 4 secondes d'alarme le boss apparait
				alarme.pause();		//On arrete l'alarme
				var musiqueBoss = document.getElementById('musiqueBoss');
				musiqueBoss.play();  //On rechange la musique
				presenceBoss = true; //On signale que le boss est là
				canvas.style.backgroundColor = '#FFF'; //On change le background pour faire un effet de flash lumineux
				setTimeout(function(){
					canvas.style.backgroundColor = '000000' // on remet tout normalement après 0.1 secondes
					imageBoss.src = 'boss.png'
				}, 100)
			}, 4000)
		}
	}
	//fin du timer
   	setInterval(refresh, 1000/60); 
	
    function refresh(){ //SetInterval global 
    	canvas.width = window.innerWidth; //On s'assure toujours que le canvas prenne toute la place
    	canvas.height = window.innerHeight;

    	var largeurVaisseau = canvas.width/18; //On set la largeur, hauteur et longueur de coté des pixels composant le vaisseau
		var pixel = largeurVaisseau/13; 
		var hauteurVaisseau = pixel*11; 
		
		var xVaisseau = [	xVaisseauInitial, 
							xVaisseauInitial + pixel,			//tableaux regroupants toutes 
							xVaisseauInitial + 2*pixel,			//Les valeurs x et Y de chaque pixel 
							xVaisseauInitial + 3*pixel,			//Composant le vaissseau du joueur
							xVaisseauInitial + 4*pixel,			//En admettant qu'on le décompose 
							xVaisseauInitial + 5*pixel,			//en une grille régulière
							xVaisseauInitial + 6*pixel,			
							xVaisseauInitial + 7*pixel,
							xVaisseauInitial + 8*pixel,
							xVaisseauInitial + 9*pixel,
							xVaisseauInitial + 10*pixel,
							xVaisseauInitial + 11*pixel,
							xVaisseauInitial + 12*pixel];
		var yVaisseau = [	yVaisseauInitial,
							yVaisseauInitial + (1*pixel),
							yVaisseauInitial + (2*pixel),
							yVaisseauInitial + (3*pixel),
							yVaisseauInitial + (4*pixel),
							yVaisseauInitial + (5*pixel),
							yVaisseauInitial + (6*pixel),
							yVaisseauInitial + (7*pixel),
							yVaisseauInitial + (8*pixel),
							yVaisseauInitial + (9*pixel),
							yVaisseauInitial + (10*pixel)];

		
		var marginTopTexte = canvas.height/40; //Margin-top d'un texte s'affichant au dessus
		context.beginPath();
		context.font = '2vw policePixel'; 
		context.fillStyle ='rgb(256,256,256)'
		context.fillText('Score : ' + score, canvas.width/142, marginTopTexte); //On écrit le texte incluant le score
		if(mod == 'normal') context.fillText('Temps restant : ' + tempsEcrit, canvas.width - canvas.width/4.3, marginTopTexte) //Text si on doit afficher le temps ou non
		context.closePath();

		//Constructions des vaisseaux ennemis
		context.fillStyle = "#FFF" ;//Constructions blanches
		rectangle.xVaisseau = xVaisseau[0]; 
		rectangle.yVaisseau = yVaisseau[5];
		rectangle.hauteur = pixel*6
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
		
		rectangle.xVaisseau = xVaisseau[12];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[5];
		rectangle.yVaisseau = yVaisseau[2];
		rectangle.hauteur = pixel*7;
		rectangle.largeur = pixel*3;
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, rectangle.largeur);
	
		rectangle.yVaisseau = yVaisseau[9];
		rectangle.largeur = pixel*2;
		new rectangle(rectangle.xVaisseau + (pixel/2), rectangle.yVaisseau, rectangle.largeur, rectangle.largeur);
	
		rectangle.xVaisseau = xVaisseau[0]; 
		rectangle.yVaisseau = yVaisseau[7];
		rectangle.hauteur = pixel*2;
		rectangle.largeur = pixel*13;
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, rectangle.largeur);
	
		rectangle.xVaisseau = xVaisseau[6];
		rectangle.yVaisseau = yVaisseau[0];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.yVaisseau = yVaisseau[9];
		rectangle.xVaisseau = xVaisseau[1];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel);
		
		rectangle.xVaisseau = xVaisseau[11];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel);
	
		rectangle.xVaisseau = xVaisseau[2];
		rectangle.hauteur = pixel*3;
		rectangle.largeur = pixel*9;
		rectangle.yVaisseau = yVaisseau[4];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, rectangle.largeur);
	
		context.fillStyle = "#000000"; //Constrcutions noires equivalent du rognage
		rectangle.yVaisseau = yVaisseau[4] - 1;
		rectangle.xVaisseau = xVaisseau[3];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel + 2, pixel);
		rectangle.xVaisseau = xVaisseau[9];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel + 2, pixel);
		
		context.fillStyle = constructionsRouges; //Cinstructuons rouges
		rectangle.hauteur = pixel*2;

		rectangle.yVaisseau = yVaisseau[3];
		rectangle.xVaisseau = xVaisseau[0];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[12];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[2];
		rectangle.yVaisseau = yVaisseau[2];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[10];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[4];
		rectangle.yVaisseau = yVaisseau[7];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[8];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel + 1);
	
		rectangle.xVaisseau = xVaisseau[6] - 1;
		rectangle.yVaisseau = yVaisseau[4] - (pixel/2);
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel + 2);
	
		rectangle.xVaisseau = xVaisseau[7];
		rectangle.yVaisseau = yVaisseau[5] - (pixel/2);
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[5];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
	
		rectangle.xVaisseau = xVaisseau[3];
		rectangle.yVaisseau = yVaisseau[8];
		rectangle.hauteur = pixel*1;
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel + 1);
	
		rectangle.xVaisseau = xVaisseau[9];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, rectangle.hauteur, pixel);
		
		context.fillStyle = constructionsBleues; //Constructions bleues
	
		rectangle.yVaisseau = yVaisseau[6];
		rectangle.xVaisseau = xVaisseau[2];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel);
		rectangle.xVaisseau = xVaisseau[10];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel + 1);
		rectangle.yVaisseau = yVaisseau[5];
		rectangle.xVaisseau = xVaisseau[3];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel);
		rectangle.xVaisseau = xVaisseau[9];
		new rectangle(rectangle.xVaisseau, rectangle.yVaisseau, pixel, pixel);
		//Fin du dessin du vaisseau du joueur

		var vitesseVaisseau = canvas.width / 51;   //On set la vitesse du vaisseau
		if(touche.bas == true){ 
			yVaisseauInitial += vitesseVaisseau; 
			if(yVaisseau[10] + pixel >= canvas.height) yVaisseauInitial = canvas.height - hauteurVaisseau; 
		}
		if(touche.haut == true){ 
			yVaisseauInitial -= vitesseVaisseau; 
			if(yVaisseau[0] <= 0) yVaisseauInitial = 0; 
		}
		if(touche.droite == true){ 
			xVaisseauInitial += vitesseVaisseau; 
			if(xVaisseau[12] + pixel >= canvas.width) xVaisseauInitial = canvas.width - largeurVaisseau;
		}
		if(touche.gauche == true){
			xVaisseauInitial -= vitesseVaisseau; 
			if(xVaisseau[0] <= 0) xVaisseauInitial = 0; 
		}
		if(touche.espace == true){ //Ici on teste si le joueur a apopuyé sur une touche (tant qu'il appuye la variable corespondante vaut true)
			nombreTirJoueur++;	   //Et on attribue les actions corespondant aux touches
		} 		
		
		for(var tirsEcrans = 0;tirsEcrans < nombreTirJoueur; tirsEcrans++){ //Boucle affichant un par un tout les tirs
			if(typeof(tirJoueur[tirsEcrans - 1]) != 'undefined' && (tirJoueur[tirsEcrans - 1].yTir > yVaisseauInitial - canvas.height/3 || yVaisseauInitial < canvas.height/3)){ 
				nombreTirJoueur--; 
				break; //Vu que le vaissau joueur tir a 60 tis/sec on supprime les tirs en trop, afin de ne pas avoir une colone continue 
			}

			if(typeof(tirJoueur[tirsEcrans]) == 'undefined'){ //Si on affiche le tir pour la première fois, ici on set ses paramètres
				sondTir.play() //On lance le son du pew du tir
				var monTir = new Object(); //On creer un objet tir
				monTir.yTir = yVaisseauInitial; //Les paramètres de base du tir, qui part depuis le joueur
				monTir.xTir = (xVaisseauInitial + largeurVaisseau/2) - canvas.width/468; 
				monTir.vitesseTir = canvas.height/51; //vitesse du tir (en Y)				
				tirJoueur.push(monTir); //On l'insère dans le tableau lui corespondant
				dessinTir(tirJoueur[tirsEcrans]); //On envoie a la fonction affichant le tir uniquement l'objet lui corespondant
			}else {//Cette fois ci l'objet du tir est créé ==> il a déjà éta affiché au moins une fois
				dessinTir(tirJoueur[tirsEcrans]); 
				
			}
		}

		for(var tirsEnnemisEcrans = 0; tirsEnnemisEcrans < nombreTirEnnemis; tirsEnnemisEcrans++){ //Même cas que la fonction précédente sauf qu'on affich eles tirs ennemis
			if(typeof(vaisseauEnnemi[numeroVaisseauTireur[tirsEnnemisEcrans]]) == undefined) {//on supprime le tir si entre temps le vaisseau a été tué
			nombreTirEnnemis--
			break;
			} 
			if(typeof(tirEnnemis[tirsEnnemisEcrans]) == 'undefined'){
				sondTir.play()
				var monTir = new Object();
				monTir.xTir = vaisseauEnnemi[numeroVaisseauTireur[tirsEnnemisEcrans]].xVaisseau + canvas.width/18; //Par conséquent les paramètres sont égaux a celui 
				monTir.yTir = vaisseauEnnemi[numeroVaisseauTireur[tirsEnnemisEcrans]].yVaisseau; //Du vaisseau tireur (identifié par le tableau numeroVaisseauTireur)
				monTir.vitesseTir = canvas.height/(-51); //Et la vitesse inversée			
				tirEnnemis.push(monTir);
				dessinTir(tirEnnemis[tirsEnnemisEcrans]);
			}else {
				dessinTir(tirEnnemis[tirsEnnemisEcrans]); 
			}
		}
		
		for(var etoilesEcran = 0; etoilesEcran < nombreEtoiles; etoilesEcran++){ //Même schema de génération d'objets
				if(maxVaisseaux == 25) break; //On arrête tout si la difficulté est en mod gandalf
				if(typeof(etoile[etoilesEcran]) == "undefined"){ 
					var monEtoile = new Object();
					monEtoile.coteEtoile = canvas.height/(Math.random()*50 + 100); //Le taille de l'étoile est variable
					monEtoile.xEtoile = Math.random() * (canvas.width - monEtoile.coteEtoile); //Sa position en x varie sur toute la largeur du canvas
					monEtoile.yEtoile = monEtoile.coteEtoile *(-1);
					monEtoile.nouvelleEtoile = true; //On test si l'étoile est la dernoière en date apparue 
					etoile.push(monEtoile);
					dessinEtoiles(etoile[etoilesEcran]);
				}
				else{ 
					dessinEtoiles(etoile[etoilesEcran]);
				}
		}
		
		for(var vaisseauxEcran = 0; vaisseauxEcran < nombreVaisseaux; vaisseauxEcran++){ //Ici, encore et toujours le même principe mais avec les vaisseaux ennemis
			if(typeof(vaisseauEnnemi[vaisseauxEcran]) == "undefined"){
				var monVaisseau = new Object();
				monVaisseau.nouveauVaisseau = true; //Pour savoir après quel vaisseau doit apparaitre le suivant
				monVaisseau.yVaisseau = canvas.height/3;;
				monVaisseau.vaisseauPlafond; //Paramètre accueillant le point en x ou le vaisseau ennemi touche le plafond
				monVaisseau.vitesseVaisseau = canvas.width / 102; 
				monVaisseau.vies = vies.ennemis;
				monVaisseau.vitesseVaisseauVertical = canvas.height/35; //vitesse du vaisseau en y
				monVaisseau.numeroVaisseau = nombreVaisseaux - 1; //Numero du vaisseau (afin de pouvoir l'identifier dans un tableau)
				monVaisseau.timingTir = 0; 
				monVaisseau.delaiTir = ((Math.random()*180) + 60).toFixed(0); //Délai (en miliseconde) dans lequel le vaisseau tire
				monVaisseau.imageVaisseauEnnemi = new Image(); 
				if(maxVaisseaux == 25) monVaisseau.imageVaisseauEnnemi.src = "balrog.png"; //Chaque vaisseau a une image respective, pour qu'elle puisse 
				else monVaisseau.imageVaisseauEnnemi.src = "vaisseauEnnemi.png"; 		   //Varier quand il est touché
				if(typeof(vaisseauEnnemi[nombreVaisseaux -2]) != "undefined"){
					if(vaisseauEnnemi[nombreVaisseaux - 2].xVaisseau > canvas.width/2) monVaisseau.xVaisseau = vaisseauEnnemi[nombreVaisseaux - 2].xVaisseau + canvas.width/18 + 30; 
					else monVaisseau.xVaisseau = (vaisseauEnnemi[nombreVaisseaux - 2].xVaisseau - canvas.width/18) - 30; //Le x du vaisseau varie selon si il apparait sur le mur de droite ou de gauche
				}
				else{
				monVaisseau.xVaisseau = 0; 
				affluxVaisseauxEnnemis = false; //Variable servant a savoir si un vaisseau doit encore aparaitre
				}

				var contactVaisseau = new Object(); //Génération d'un objet corespondant aux limittes de chaque vaisseau ennemi
				contactVaisseau.gauche = monVaisseau.xVaisseau; 				 //Ainsi on forme un mur de collisions 
				contactVaisseau.droite = monVaisseau.xVaisseau + canvas.width/18;//Formant un carré autour du vaisseau
				contactVaisseau.haut = monVaisseau.yVaisseau;
				contactVaisseau.bas = monVaisseau.yVaisseau + canvas.width/22.374;

				contactVaiseaux.push(contactVaisseau) //On met l'objet du contact dans le tableau contactVaiseau
				vaisseauEnnemi.push(monVaisseau);
				dessinVaisseau(vaisseauEnnemi[vaisseauxEcran], contactVaiseaux[vaisseauxEcran]);
			} else {
				dessinVaisseau(vaisseauEnnemi[vaisseauxEcran], contactVaiseaux[vaisseauxEcran])
			}
		}

		if(presenceBoss == true){//On test si le boss est censé apparaitre, et on lance a chaque fois la fonction le dessinant
			boss();
		}

		//Début de la gestion de collisions
		//Gestion de collision entre les tirs du jouer et les ennemis
		for (var i = 0; i < tirJoueur.length; i++){ 			//test effectué pour chaque tir
			for (var o = 0; o < contactVaiseaux.length; o++){ 	//Et pour chaque tir on effectue le test avec tout les vaisseaux
				if(tirJoueur[i].yTir >= contactVaiseaux[o].haut && tirJoueur[i].yTir <= contactVaiseaux[o].bas && tirJoueur[i].xTir <= contactVaiseaux[o].droite && tirJoueur[i].xTir >= contactVaiseaux[o].gauche){
					vaisseauEnnemi[o].vies--; //si Le tir est compris dans le carré de collision (contacVaisseaux) on enlèbve une vie
					if(vaisseauEnnemi[o].vies <= 0){ //On test si le vaisseau n'a plus de vie
						vaisseauTue.play(); //on met un bruit d'explosions
						nombreVaisseaux--;  //On stipule qu'il y a un vaisseau en moins a afficher
						vaisseauEnnemi[o].numeroVaisseau--; //On enlève un au numero du vaisseau 
						vaisseauEnnemi.splice(o, o + 1); //On enlève les objets corespondant au vaisseau et a sa gestion de collision
						contactVaiseaux.splice(o, o + 1);//de leur variables respectives
						score += points.ennemi; //On ajoute du score au joueur
						if(typeof(vaisseauEnnemi[vaisseauEnnemi.length - 1]) != "undefined" && o == vaisseauEnnemi.length){
							vaisseauEnnemi[vaisseauEnnemi.length - 1].nouveauVaisseau = true; //on test si le vaisseau tué était le dernier de fille
						}																	  //Pour ainsi dire que le nouveau dernier de fil doit faire apparaitre les nouveaux vaisseaux
						if(nombreVaisseaux == 0){ //Si plus aucun vaisseau n'est a l'écran
							nombreVaisseaux = 2; //On reset un nombre de vaisseaux de base
							if(vaisseauxTotal == 10){ //On test si c'est un vague complète qui est morte
								score += points.vague;//On ajoute les points corespondant a l'acte
								vaisseauxTotal = 2;   //On réinitialise les vaisseaux apparus pendant la vague
							}
						}
					} else{ //Si l'ennemi n'est pas mort
						hitEnnemi.play(); //On met le bruitage corespondant
						var vaisseauTouche = o; //On enregistre quel vaisseau a été touché (pour ne pas que ça varie, vu que o ne cesse de changer)
						if(maxVaisseaux == 25) vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "balrogTouche.png"; //En fonction de l'image a choisire on la change
						else vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "vaisseauEnnemiTouche.png";			//pour qu'elle soit totalement blanche
						setTimeout(function(){
							if(maxVaisseaux == 25) vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "balrog.png"	//Et on la remet normalement au bout de 0.1 secondes
							else vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "vaisseauEnnemi.png";				
						}, 100)
					}
							tirJoueur.splice(i, i + 1); //Dans tout les cas on supprime l'objet du tir
							nombreTirJoueur--;			//Et on stipule qu'il faut afficher un tir de moins
						}
					}
			//Fin de la gestion de collisions entre les tirs du joueur et les ennemis
			//Gestion de collision entre le tir du joueur et le boss
			if(presenceBoss == true && tirJoueur[i].yTir < canvas.height/4){ 
				vies.boss--; //On retire une vie au boss
				tirJoueur.splice(i, i + 1); //On supprime l'objet du tir du joueur
				nombreTirJoueur--;			//Et on stipule qu'il faut afficher un tir de moins
				hitEnnemi.play() //On joue le bruit correspondant
				if(vies.boss <= 0) finJeu("Bravo, tu as tout détruit", "Ton score est de" + score); //On teste si le boss est mort
				else { //Si il n'est pas mort
					imageBoss.src = 'bosstouche.png' //On change son image pour faire un effet de clignotement
					setTimeout(function(){ 
						imageBoss.src = 'boss.png'  //Et ainsi on la remet normalement au bout de 0.1 secponde
					}, 100)
				}
			}
		}
	//fin de la gestion de collision entre le tir du joueur et le boss
	//Gestion de collisions entre les tirs ennemis et le joueur
	for(var i = 0; i < tirEnnemis.length; i++){ 
				if(tirEnnemis[i].yTir + canvas.width/69 >= yVaisseauInitial && tirEnnemis[i].yTir < yVaisseauInitial + hauteurVaisseau && tirEnnemis[i].xTir >= xVaisseauInitial && tirEnnemis[i].xTir <= xVaisseauInitial + largeurVaisseau){
					yVaisseauInitial = canvas.height - ((canvas.width/18)/13)*11; //On réinitialise la position du joueur
					xVaisseauInitial = canvas.width/2 - canvas.width/36;
					nombreTirEnnemis--; 		//Et on supprime le tir corespondant
					tirEnnemis.splice(i, i + 1);
					hitJoueur() //On lance la fonction faisant les calculs de lorsque le joueur a été touché
				}
	}
	//Fin de la gestion de collisions entre les tirs ennemis et le joueur
	//gestion de collision entre le rayon du boss et le joueur
	if(presenceBoss == true && ((xVaisseauInitial >= xRayon && xVaisseauInitial <= xRayon + canvas.width/50) || (xVaisseauInitial + largeurVaisseau >= xRayon && xVaisseauInitial + largeurVaisseau <= xRayon + canvas.width/50)) && yVaisseauInitial <= yRayon + hauteurRayon){
		hitJoueur(); //On lance la fonction faisant les calculs de lorsque le joueur a été touché
	}
	//fin de la gestion de collision entre le rayon du boss et le joueur
	//Gestion de collision entre le boss et le joueur
	if(presenceBoss == true && yVaisseauInitial <= canvas.height/3.74){
		yVaisseauInitial = canvas.height - ((canvas.width/18)/13)*11; //On réinitialise la position du joueur
		xVaisseauInitial = canvas.width/2 - canvas.width/36;
		hitJoueur(); //On lance la fonction faisant les calculs de lorsque le joueur a été touché
	}
	//Fin de la gestion de collision entre le boss et le joueur
	//Gestion de collsion entre le joueur et les vaisseaux ennemis
	if(presenceBoss == false) for(var i = 0; i < contactVaiseaux.length; i++){
            	if(xVaisseauInitial >= contactVaiseaux[i].gauche && xVaisseauInitial <= contactVaiseaux[i].droite && yVaisseauInitial <= contactVaiseaux[i].bas  && yVaisseauInitial >= contactVaiseaux[i].haut){
            	yVaisseauInitial = canvas.height - ((canvas.width/18)/13)*11; //on réinitialise la position du joueur
				xVaisseauInitial = canvas.width/2 - canvas.width/36;
				hitJoueur(); //On lance la fonction faisant les calculs de lorsque le joueur a été touché
				vaisseauEnnemi[o].vies--;  //On retire une vie au vaisseau cocerné
				if(vaisseauEnnemi[o].vies <= 0){ //On test si le vaisseau du joueur est mort
					vaisseauTue.play(); //On met le bruitage coeespondant
/*Si ce calcu*/		nombreVaisseaux--;	//Stipule qu'il y a un vaisseau de moins a afficher
/*N'as pas été mis*/vaisseauEnnemi[o].numeroVaisseau--; //On décale le numero vaisseau de 1
/*Sous forme de f°*/vaisseauEnnemi.splice(o, o + 1); //On supprime l'objet du vaisseau ennemi
/*C'est normal, il*/contactVaiseaux.splice(o, o + 1);//Et celui de sa gestion de collision
/*faisait tout*/    score += points.ennemi; //On ajoute les points au joueur 
/*Buger*/			if(typeof(vaisseauEnnemi[vaisseauEnnemi.length - 1]) != "undefined" && o == vaisseauEnnemi.length){
					vaisseauEnnemi[vaisseauEnnemi.length - 1].nouveauVaisseau = true; //on test si le vaisseau tué était le dernier de fille
					}																  //Pour ainsi dire que le nouveau dernier de fil doit faire apparaitre les nouveaux vaisseaux
					if(nombreVaisseaux == 0){ //Si plus aucun vaisseau n'est a l'écran
						nombreVaisseaux = 2; //On reset un nombre de vaisseaux de base
						if(vaisseauxTotal == 10){ //On test si c'est un vague complète qui est morte
							score += points.vague;//On ajoute les points corespondant a l'acte
							vaisseauxTotal = 2;   //On réinitialise les vaisseaux apparus pendant la vague
						}
					}
				} else{
					hitEnnemi.play() //On joue le bruitage corespondant
					var vaisseauTouche = o; //On enregistre quel vaisseau a été touché (pour ne pas que ça varie, vu que o ne cesse de changer)
					if(maxVaisseaux == 25) vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "balrogTouche.png"; //En fonction de l'image a choisire on la change
					else vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "vaisseauEnnemiTouche.png";			//pour qu'elle soit totalement blanche
					setTimeout(function(){
						if(maxVaisseaux == 25) vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "balrog.png"	//Et on la remet normalement au bout de 0.1 secondes
						else vaisseauEnnemi[vaisseauTouche].imageVaisseauEnnemi.src = "vaisseauEnnemi.png";				
					}, 100)
				}
            	}
        }//Fin de la gestion de collsion entre les ennemis et le joueur
}
//Fin du setInterval Global
		//Fonction s'éxécutant quand le jouer est touché par quelque chose
		function hitJoueur(){ 
    		vies.joueur--; //On lui retire une vie
			if (vies.joueur == 0) { //Si le joueur est mort
				finJeu("Bravo, tu t'es fait atomiser", "Tu as quand même fait " + score); //I_On lance la fonction de fin du jeu
				vaisseauTue.play(); //On lance le bruitage correspondant
			} else{ //Si il n'est pas mort
				hitEnnemi.play() //On lance le bruitage correspondant
				constructionsBleues = "#FFF" //On change sa couleur en blanc
				constructionsRouges = "#FFF" 
				setTimeout(function(){
					constructionsBleues = "#1830dd"; //Et on la rétabli après 0.1 seconde
					constructionsRouges = "#ff0f0f";
				}, 100)
			}
    	}

		function rectangle(xVaisseau, yVaisseau, hauteur, largeur){ //Fonction dessinant chaque rectangle composant le viasseau du joueur
		context.beginPath();
		context.fillRect(xVaisseau, yVaisseau, largeur, hauteur);
		context.closePath(); 
		}
		
		//FOnction incluant le dessin et les paramères du tir
		function dessinTir(Tir){
			var largeurTir = canvas.width/234;//on set sa hauteur et largeur
			var	hauteurTir = canvas.width/69;

			context.beginPath();
			context.fillStyle = "#ff2b2b";
			context.fillRect(Tir.xTir, Tir.yTir, largeurTir, hauteurTir);  //On le dessine
			context.closePath();

			Tir.yTir-=Tir.vitesseTir; //Oe le fait avancer

			if(Tir.yTir < canvas.height/(-3)){ //si il dépasse une la limitte haute de la map (qui n'est pas setée par 0 a cause du système de supression de tir) 
			nombreTirJoueur--;				   //Et ainsi ne pas permettre au joueur de glitcher) le tir du joueur est supprimé
			tirJoueur.splice(0,1);
			}
			if (Tir.yTir > canvas.height){	//Et si il dépasse la limitte basse (Soit que c'est un tir ennemi)
			nombreTirEnnemis--;				//C'est le tir ennemi qui est supprimé
			tirEnnemis.splice(0,1)
			}
		}

		var rayonBoss = true; //On stipule que le rayon du boss doit etre agrandi
		//Fonction incluant le dessin et les calculs liés au boss
		function boss(){
			context.beginPath();
			context.drawImage(imageBoss, 0,0, 1118, 254, 0, 0, canvas.width, canvas.width/4.401);
			context.closePath(); //On dessine le boss

			var vitesseYRayon = (canvas.height - canvas.height/3.7)/30; //Nombre duquel on agrandi la hauteur du vaisseau a chaque fois
			
			context.beginPath();
			context.fillRect(xRayon, yRayon, canvas.width/50, hauteurRayon)
			context.moveTo(xRayon + canvas.width/80, canvas.height/3.7)
			context.arc(xRayon + canvas.width/80, canvas.height/3.7, canvas.width/50, 0, Math.PI*2)
			context.fillStyle = '#FFF'
			context.fill()
			context.closePath(); //Constructions

			context.beginPath();
			context.fillRect(xRayon, yRayon, canvas.width/37, hauteurRayon)
			context.moveTo(xRayon + canvas.width/80, canvas.height/3.7)
			context.arc(xRayon + canvas.width/80, canvas.height/3.7, canvas.width/40, 0, Math.PI*2)
			context.fillStyle = 'rgba(255,255,255,0.7)'
			context.fill()
			context.closePath();
			if(yRayon + hauteurRayon <= canvas.height && rayonBoss == true){ //Tant que le rayon ne touche pas le bas de l'écran
				hauteurRayon += vitesseYRayon //On agrandi le rayon
				if(yRayon + hauteurRayon >= canvas.height) rayonBoss = false //Le toggle vaut false ==> on n'agrandit plus le rayon
			}
			else if(rayonBoss == false){ //Si le rayon touche ke bout de la map
				rayonBoss = true; //On ne doit plus executer ce bout de code ==> pas de répétition du setTimeout
				setTimeout(function(){
						xRayon = xVaisseauInitial; //On réinitialise les paramètres du rayon
						hauteurRayon = 0;		   //Et Cette fois ci on vise le joueur
						yRayon = canvas.height/3.7;
					}, 1000); //Chaque secondes on balance un noubeau rayon
			}
		}	

		//Fonction incluant les calculs liés au vaisseau ennemi
		function dessinVaisseau(VaisseauEnnemi, ContactVaisseaux){
				var vitesseVaisseauEnnemi = { droite : canvas.width / 102,		
                			   				  gauche : (canvas.width/102) * -1 
											};
				var largeurVaisseau = canvas.width/18; //ses paramètres de largeur et de hauteur
				var hauteurVaisseau = canvas.width/22.374;

				ContactVaisseaux.droite = VaisseauEnnemi.xVaisseau + largeurVaisseau;
				ContactVaisseaux.gauche = VaisseauEnnemi.xVaisseau; //On reset a chaque fois les paramètres de gestion de collision
				ContactVaisseaux.haut = VaisseauEnnemi.yVaisseau;
				ContactVaisseaux.bas = VaisseauEnnemi.yVaisseau + hauteurVaisseau

				context.beginPath();
                context.drawImage(VaisseauEnnemi.imageVaisseauEnnemi, 0, 0, largeurImage, hauteurImage, VaisseauEnnemi.xVaisseau, VaisseauEnnemi.yVaisseau, largeurVaisseau, hauteurVaisseau); 
                context.closePath(); //Dessin du vaisseau

                //Apparition de vaisseau lorsque la file touche le mur de gauche
                if(VaisseauEnnemi.xVaisseau >= largeurVaisseau + 10 && VaisseauEnnemi.xVaisseau <= largeurVaisseau + 30 && affluxVaisseauxEnnemis == true && VaisseauEnnemi.vitesseVaisseau == vitesseVaisseauEnnemi.droite && VaisseauEnnemi.nouveauVaisseau == true){ 
                 	if(vaisseauxTotal < maxVaisseaux){ //On ajoute un vaisseau
                 		nombreVaisseaux++;			   //Uniquement si le nombre de vaisseaux n'est pas a son max
                 		vaisseauxTotal++; 
                 	}
                 	affluxVaisseauxEnnemis = false; //on stipule qu'aucun autre vaisseau ne doit arriver lors de la collision avec ce mur
                 	VaisseauEnnemi.nouveauVaisseau = false; //On stipule que ce vaisseau n'est plus le dernier de la fille
                 	}
                //Apparition de vaisseau lorsque la file touche le mur de droite
                if(VaisseauEnnemi.xVaisseau + largeurVaisseau <= canvas.width - largeurVaisseau - 10 && VaisseauEnnemi.xVaisseau + largeurVaisseau >= canvas.width - largeurVaisseau - 30 && affluxVaisseauxEnnemis == false  && VaisseauEnnemi.vitesseVaisseau == vitesseVaisseauEnnemi.gauche && VaisseauEnnemi.nouveauVaisseau == true){
	                 if(vaisseauxTotal < maxVaisseaux) {//On ajoute un vaisseau
                 		nombreVaisseaux++;				//Uniquement si le nombre de vaisseaux n'est pas a son max
                 		vaisseauxTotal++;
                 	}
	             	affluxVaisseauxEnnemis = true;//on stipule qu'aucun autre vaisseau ne doit arriver lors de la collision avec ce mur
	             	VaisseauEnnemi.nouveauVaisseau = false;//On stipule que ce vaisseau n'est plus le dernier de file
             	}
				//Gestion de collision (rebondissement) lorsque le vaisseau touche le mur de droite
				if(VaisseauEnnemi.xVaisseau <= 0) { 
					VaisseauEnnemi.vitesseVaisseau = vitesseVaisseauEnnemi.droite;
					if(typeof(vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1]) != "undefined"){ //a Chaque fois on remet les vaisseaux en ordre (pour que l'écart entre eux soit régulier)
                 		if(vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau - VaisseauEnnemi.xVaisseau < 2*largeurVaisseau && vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau - VaisseauEnnemi.xVaisseau > 0) VaisseauEnnemi.xVaisseau = (vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau - canvas.width/18) - 30; 
                 	}
     			//Gestion de collision (rebondissement) lorsque le vaisseau touche le mur de gauche
				} else if(VaisseauEnnemi.xVaisseau + largeurVaisseau >= canvas.width) { 
            		VaisseauEnnemi.vitesseVaisseau = vitesseVaisseauEnnemi.gauche; 
            		VaisseauEnnemi.yVaisseau = canvas.height/3; 
            		VaisseauEnnemi.vitesseVaisseauVertical = canvas.height/35;
            		if(typeof(vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1]) != "undefined"){ //a Chaque fois on remet les vaisseaux en ordre (pour que l'écart entre eux soit régulier)
                 		if(vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau - VaisseauEnnemi.xVaisseau > -2*largeurVaisseau && vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau - VaisseauEnnemi.xVaisseau < 0) VaisseauEnnemi.xVaisseau = vaisseauEnnemi[VaisseauEnnemi.numeroVaisseau - 1].xVaisseau + canvas.width/18 + 30;
					}
                }
                //Gestion de la remontée verticale lorsque le vaisseau touche le mur de gauche
                if(VaisseauEnnemi.yVaisseau != 0 && VaisseauEnnemi.vitesseVaisseau == vitesseVaisseauEnnemi.droite && VaisseauEnnemi.xVaisseau < window.innerWidth/2){ 
                	 VaisseauEnnemi.yVaisseau-=VaisseauEnnemi.vitesseVaisseauVertical;
                	 VaisseauEnnemi.vitesseVaisseauVertical-=canvas.height/800;
                	 if(VaisseauEnnemi.yVaisseau < 0) {
	 					VaisseauEnnemi.yVaisseau = 0; 
	 					VaisseauEnnemi.vaisseauPlafond = VaisseauEnnemi.xVaisseau; 
                	 }
              	}
              	//Gestion de la descente verticale lorsque le vaisseau touche le mur de droite
              	if(VaisseauEnnemi.xVaisseau + largeurVaisseau >= canvas.width - VaisseauEnnemi.vaisseauPlafond && VaisseauEnnemi.vitesseVaisseau == vitesseVaisseauEnnemi.droite){
                	 VaisseauEnnemi.yVaisseau+= VaisseauEnnemi.vitesseVaisseauVertical; 
                	 VaisseauEnnemi.vitesseVaisseauVertical+=canvas.height/800;
                }

             	VaisseauEnnemi.xVaisseau+=VaisseauEnnemi.vitesseVaisseau; //On ait bouger horizontalement le vaisseau

             	VaisseauEnnemi.timingTir++; //On fait un timing pour le tir du vaisseau
             	if(VaisseauEnnemi.timingTir == VaisseauEnnemi.delaiTir){
             		VaisseauEnnemi.timingTir = 0; //On réinitialise le timer
             		VaisseauEnnemi.delaiTir = ((Math.random()*180) + 60).toFixed(0); //On change le délai entre les tirs
             		nombreTirEnnemis++; //On ajoute un tir ennemi
             		numeroVaisseauTireur.push(VaisseauEnnemi.numeroVaisseau); //On stipule quel vaisseau est lle tireur 
             	} 
       		}
		//Fonction incluant les étoiles et les calculs liés 
		function dessinEtoiles(Etoile){ 
			context.beginPath();
			context.fillStyle = "#FFF";
			context.fillRect(Etoile.xEtoile, Etoile.yEtoile, Etoile.coteEtoile, Etoile.coteEtoile); //on dessine l'étoile
			context.closePath();

			Etoile.yEtoile+=canvas.height/200; //On la fait avancer verticalement
			if(Etoile.yEtoile >= canvas.height/30 && Etoile.nouvelleEtoile == true){ //Si l'espace entre la dernière etoile et une étoile pouvant
				nombreEtoiles++; 													 //Potentiellement apparaitre est suffisament élevé on rajoute une étoie
				Etoile.nouvelleEtoile = false;
			}

			if(Etoile.yEtoile >= canvas.height){ //Su une étoile sort de l'écran 
				etoile.splice(0, 1);			 //On la supprime
				nombreEtoiles--;
			}
		}
    function finJeu(messageFelicitaions, messageScore){ //Fonction faisant disparaitre le canvas et apparaitre l'écran de fin
    	canvas.style.display = 'none';
    	var element = document.getElementById('tout');
    	element.style.display = 'block';
    	element = document.getElementById('congratulations');
    	element.style.display = 'block';
    	element = document.getElementById('difficultes');
    	element.style.display = 'none';
    	element = document.getElementById("score");	
    	element.innerHTML = messageScore;			//Le message change en fonction de la fin
    	element = document.getElementById("message");
    	element.innerHTML = messageFelicitaions;
    }
}	//Fin de la fonction englobant tout le jeu

    function tuto(){ //Fonction incluant le tutoriel
    	var intro = "Bonjour, je suis un sage, je suis là pour vous guider. Je n'ai rien avoir avec l'histoire ni même le type de jeu, mais c'est toujours marrant un vieux sage".split(""); //Chaque message qu'il dit est une variable textuelle
    	var but = "Votre but est de terasser le plus d'ennemis possibles. Oui, je sais c'est très original comme scénario.".split('');														 //Qu'on casse pour obtenir un tableau avec une variable/lettre
    	var points = "En effet, plus vous tuez de vaisseaux, et plus vous avez de points, bien sûr, plus la difficulté est élevée, et plus le nombre de points augmente".split("")
    	var controles = "Déplacez vous avec A/Q, Z/W, D, S ou les flèches. Vous pouvez tirer et maintenir le tirJoueur avec espace et mettre sur pause avec echap.".split('');
    	var final = "Maintenant vous savez tout, donc vu que je ne sert plus à rien, je vais m'en aller comme je suis venu. Tuez le boss, le sort de l'humanité ou de Gotham n'en dépends pas, mais ce serait cool de réussir".split('');
    	
		var canvas = document.getElementById('monCanvas'); 	//Vu qu'on est en dehors de la fonction incluant le jeu on doit rerécupérer le cnavas et le context		
   	 	var context = canvas.getContext('2d');			

    	element = document.getElementById("tout"); //On fait apparaitre les divs du dialogue du totoriel et disparaitre le menu
    	element.style.display = 'none';
    	canvas.style.display = 'block';
    	element = document.getElementById('dialogueVieux');

    	var i = 0; //Effet de boucle mais dans un setInterval
    	var phrase = intro; //On stipule que la phrase a afficher est l'intro

    	var leVieux = new Image();		//on récupère l'image du vieux
    	leVieux.src = 'leVieux.png';

    	setInterval(leVieuxDialogue, 75);		//on set une intervale pour afficher chaque lettre une a une 
    	setInterval(leVieuxAffichage, 1000/60);	//Et une autre pour l'affichage responsive de l'image du vieux

    	function leVieuxDialogue(){	
    		if(i < phrase.length){	//tant que la phrase n'est pas totalement écrite 
    			element.innerHTML = element.innerHTML + phrase[i];	//On ajoute une lettre 
    			if(phrase[i] == " "){ element.innerHTML = element.innerHTML + phrase[i + 1]; //Si il y a un espace on rerajoute une lettre
    				i++;																	 //pour que le dialogue soit fluide
    			}
    			i++;
    		}
    		else{
    			setTimeout(function(){	//Pour avoir un délai entre la fin d'une phrase et le début de l'autre
    		    			i = 0;
    		    			element.innerHTML = "";
    		    			if(phrase == intro) phrase = but; //A chaque fois on passe a la suivante
    		    			else if(phrase == but) phrase = points;
    		    			else if(phrase == points) phrase = controles;
    		    			else if(phrase == controles) phrase = final;
    		    			else if(phrase == final) window.location.reload(); //Jusqu'a arriver a la fin de la denère et raffraichire la page

    		    		}, 100)
    	}
    	}
    	function leVieuxAffichage(){ //Affichage du vieux
		canvas.width = window.innerWidth; //encore une fois pn fait en sorte que le canvas prenne toute la place
		canvas.height = window.innerHeight;
		var largeurVieux = canvas.width/10; //On set sa largeur et sa hauteur
		var hauteurVieux = largeurVieux*1.97;

		context.clearRect(0, 0, canvas.width, canvas.height)
		context.beginPath();	//on dessine l'image
    	context.drawImage(leVieux, 0, 0, 173, 341, 20, canvas.height-hauteurVieux, largeurVieux, hauteurVieux);
    	context.closePath();
    	}
    }

function credits(){
	var element = document.getElementById('menu'); //on supprime le menu et le pide de page et on affiche les credits
	element.style.display = "none";
	element = document.getElementById('pied');
	element.style.display = "none";
	element = document.getElementById('credits');
	element.style.display = "block";
}