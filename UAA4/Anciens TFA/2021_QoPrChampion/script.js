//les différentes questions du jeu
 var questions = [

	{text:"Qui a offert la statue de la liberté aux USA?",r1:"La France",r2:"Le Vatican",r3:"Le Royaume-Uni",r4:"L'Espagne", s:1},
	{text:"Quel pays a remporté l'Euro de football en 2004?", r1:"Le Portugal",r2:"La France",r3:"La Grèce",r4:"L'Espagne", s:3},
	{text:"Quelle planète est la plus éloignée de la Terre?", r1:"Jupiter",r2:"Mars",r3:"Saturne",r4:"Neptune", s:4},
	{text:"En quelle année est décédé Michael Jackson?", r1:"2011",r2:"2003",r3:"2008",r4:"2009", s:4},
	{text:"Quelle est la valeur de PI?", r1:"3.14156",r2:"3.14159",r3:"3.15599",r4:"3.14999", s:2},
	{text:"Combien de titres de champion de Belgique possède Anderlecht?", r1:"28",r2:"34",r3:"36",r4:"39", s:2},
	{text:"Dans quel jeu peut-on être imposteur ou crewmate?", r1:"Pokémon",r2:"Loup-Garou",r3:"Among Us",r4:"Outlaws", s:3},
	{text:"Donnez la bonne réponse : 9+6*3+2", r1:"47",r2:"90",r3:"29",r4:"51", s:3},
	{text:"Complétez le dicton, « chapeau melon, »", r1:"et botte de cuir",r2:"et chapeau de paille",r3:"et veste de cuir",r4:"et chapeau rouge", s:1},
	{text:"Quelle couleur n’est pas présente sur le drapeau du Mexique ?", r1:"Bleu",r2:"Noir",r3:"Rouge",r4:"Blanc", s:2},
	{text:"Avec quelle chanteuse, Gérard Piqué est-il en couple ?", r1:"Ariana Grande",r2:"Shakira",r3:"Rihanna",r4:"Lady Gaga", s:2},
	{text:"Quelle célébrité a le plus d’abonnés sur Instagram (271 millions)?", r1:"Cristiano Ronaldo",r2:"Lionel Messi",r3:"Beyoncé",r4:"Justin Bieber", s:1},
	{text:"Que vaut 1 octet en informatique ?", r1:"8 bits",r2:"16 bits",r3:"32 bits",r4:"64 bits", s:1},
	{text:"Quelle couleur n’est pas primaire ?", r1:"Rouge",r2:"Vert",r3:"Bleu",r4:"Noir", s:4},
	{text:"Quel animal terrestre est le plus rapide?", r1:"L'antilope",r2:"Le lièvre",r3:"Le guépard",r4:"Le léopard", s:3},
	{text:"Combien d’os le squelette humain comporte-t-il ?", r1:"206",r2:"254",r3:"321",r4:"369", s:1},
	{text:"Dans quel sport peut-on faire un SPARE ?", r1:"Le golf",r2:"Le boowling",r3:"Le tir à l'arc",r4:"Le volley", s:2},
	{text:"De quelle nationalité est Christophe Colomb", r1:"Espagnol",r2:"Italien",r3:"Colombien",r4:"Français", s:2},
	{text:"Qui est VASCO DE GAMA?", r1:"Un scientifique",r2:"Un cinéaste",r3:"Un navigateur",r4:"Un philosophe", s:3},
	{text:"Quelle est la 3è langue officielle de la Belgique?", r1:"Espagnol",r2:"Italien",r3:"Anglais",r4:"Allemand", s:4},
	{text:"Quelle est la capitale de l'Europe?", r1:"Bruxelles",r2:"Paris",r3:"Munich",r4:"Madrid", s:1},
	{text:"Combien de petites étoiles il y a t-il sur le drapeau des USA?", r1:"25",r2:"50",r3:"62",r4:"82", s:2},
	{text:"Laquelle de ces villes n'est pas belge?", r1:"Falaen",r2:"Maubeuge",r3:"Alost",r4:"Butgenbach", s:2},
	{text:"Combien de communes il y a t-il en Belgique?", r1:"392",r2:"417",r3:"581",r4:"633", s:3},
	{text:"Quelle ville est mal orthographiée?", r1:"Molenbek",r2:"Varsovie",r3:"Feschaux",r4:"Dinan", s:1},
	{text:"Lequel de ces vaccins contre la covid-19, n'existe pas?", r1:"Pfizer",r2:"AstraZeneca",r3:"Moderna",r4:"Twinrix", s:4},
	{text:"Quel est l'homme le plus riche du monde", r1:"Bill Gates",r2:"Jeff Bezos",r3:"Elon Musk",r4:"Mark Zuckerberg", s:2},
]

function dejaTiree(nb){
	var i; 
	var noInTab = false; 
	for (i=0; i< tab_qoTirees.length; i++) {
		if(tab_qoTirees[i] == nb){
 			noInTab = true; 
 		}
	}
	return noInTab; 
}

// Fonction de génération d'un nombre aléatoire. 
function aleat(){
	const MIN = 0; // déclaration d'une constante
	const MAX = 26;
	var nb = Math.floor(MIN + (MAX-MIN+1)*Math.random());

	//vérifie si la question a déja été tirée
	while(dejaTiree(nb)){
		nb = Math.floor(MIN + (MAX-MIN+1)*Math.random())
	}

	tab_qoTirees.push(nb); 
	return nb; 
};

//Fonction qui génère le quizz pour chaque question
function generateQo(){
	scoreQ = 2;
	nbAleat = aleat();
	nmQo ++;

	var el = document.getElementById("question");
	el.innerHTML = questions[nbAleat].text; //affiche la question
	
	var el2 = document.getElementById("rep1");
	el2.innerHTML = questions[nbAleat].r1; //affiche la réponse 1
	el2.style.backgroundColor = "#48125c"
	
	var el3 = document.getElementById("rep2");
	el3.innerHTML = questions[nbAleat].r2; //affiche la réponse 2
	el3.style.backgroundColor = "#48125c"
	
	var el4 = document.getElementById("rep3");
	el4.innerHTML = questions[nbAleat].r3; //affiche la réponse 3
	el4.style.backgroundColor = "#48125c"
	
	var el5 = document.getElementById("rep4");
	el5.innerHTML = questions[nbAleat].r4; //affiche la réponse 4
	el5.style.backgroundColor = "#48125c"

	var el6 = document.getElementById("joueur");
	el6.innerHTML = "Le joueur 1 répond"; //indique que c'est au joueur 1 a joué
	
	var el7 = document.getElementById("buttonNxt");
	el7.style.display = "none"; 

	if (nmQo>=10) {
		el6.innerHTML = "Le joueur 2 répond"; //indique qu'après les 5 premières questions, c'est au tour du joueur 2
	}

	if (questions[nbAleat].s == 1){
		el2.setAttribute('onclick','vrai("rep1")'); //dit que la réponse 1 est vraie
		el3.setAttribute('onclick','faux("rep2")'); //dit que la réponse 2 est fausse
		el4.setAttribute('onclick','faux("rep3")'); //dit que la réponse 3 est fausse
		el5.setAttribute('onclick','faux("rep4")'); //dit que la réponse 4 est fausse
	} else if (questions[nbAleat].s == 2){
		el2.setAttribute('onclick','faux("rep1")');
		el3.setAttribute('onclick','vrai("rep2")');
		el4.setAttribute('onclick','faux("rep3")');
		el5.setAttribute('onclick','faux("rep4")');
	} else if (questions[nbAleat].s == 3){
		el2.setAttribute('onclick','faux("rep1")');
		el3.setAttribute('onclick','faux("rep2")');
		el4.setAttribute('onclick','vrai("rep3")');
		el5.setAttribute('onclick','faux("rep4")');
 } else if (questions[nbAleat].s == 4){
		el2.setAttribute('onclick','faux("rep1")');
		el3.setAttribute('onclick','faux("rep2")');
		el4.setAttribute('onclick','faux("rep3")');
		el5.setAttribute('onclick','vrai("rep4")');
	}
};

function vrai(nomDiv) {
	var el = document.getElementById(nomDiv);
	var el2 = document.getElementById("buttonNxt");
	var el3 = document.getElementById("j1");
	var el4 = document.getElementById("j2");

	if (nmQo < 10) {
		scoreJ1 = scoreJ1 + scoreQ;
		el3.innerHTML = scoreJ1 + "/20";
	} else if (nmQo < 20) {
		scoreJ2 = scoreJ2 + scoreQ;
		el4.innerHTML = scoreJ2 + "/20";
	} 

	
	el.style.backgroundColor = "green"; //affiche la bonne réponse en vert
	
	el2.style.display = "block"; //fait apparaitre le bouton "Question suivante"
	
	el3.innerHTML = scoreJ1 + "/20"; //affiche le score du joueur 1 sur 10
	
	el4.innerHTML = scoreJ2 + "/20"; //affiche le score du joueur 2 sur 10

	

	if (nmQo == 19) {
		fin();
	}
}

function faux(nomDiv) {

	var el = document.getElementById(nomDiv);
	el.style.backgroundColor = "red";

	if (scoreQ > 0) {
		scoreQ = scoreQ - 1;
	}
}

function fin(finJeu){
	

	var el = document.getElementById("finJeu")
	el.style.display = "block";

	var el2 = document.getElementById("question")
	el2.style.display = "none";

	var el3 = document.getElementById("rep1")
	el3.style.display = "none";

	var el4 = document.getElementById("rep2")
	el4.style.display = "none";

	var el5 = document.getElementById("rep3")
	el5.style.display = "none";

	var el6 = document.getElementById("rep4")
	el6.style.display = "none";

	var el7 = document.getElementById("joueur")
	el7.style.display = "none";

	var el8 = document.getElementById("buttonNxt");
	el8.style.display = "none"; 
	
	if (scoreJ1 > scoreJ2) {
		el.innerHTML = "Le joueur 1 a gagné";
	}else if (scoreJ1 == scoreJ2) {
		el.innerHTML = "Match nul";
	}else {
		el.innerHTML = "Le joueur 2 a gagné";
	}
}


// Au chargement de la page
// la variable nbAleat recoit le résultat de la fonction aleat()
var nbAleat;

var scoreQ;

var scoreJ1 = 0;

var scoreJ2 = 0;

var nmQo = -1;

var tab_qoTirees = []; 

console.log("taille tab + " + tab_qoTirees.length);

//1er appel de fonction (au chargement de la page)
generateQo();

