// Fil conducteur du code


//[V]   Générer un mot aléatoirement (1)

//[V]  Determiner un espace pour acceuilir ce mot (2)

//[V]  Clic     -> si la lettre est dans le mot, elle apparait dans l'espace précité (3)

//[V]  Afficher si il y a plusieurs lettres dans le mot(4)

//[V]           -> si la lettre n'est pas dans le mot, une nouvelle image du pendu apparait.(5)

//[V]  Après X erreurs ->écran perdu(6)

//[V]  Si le mot est trouvé -> écran de gagne.(7)

//[V] Afficher le mot trouver ou non trouver dans l'image ganger ou perdu (8)

//[V]  Gestion du clavier(9)

//--------------- AU CHARGEMENT DE LA PAGE -----------------//

//(1)Génération du mot aléatoire

function aleat(){

    const MIN = 0; // déclaration d'une constante

    const MAX = 24;

    var nb = MIN + (MAX-MIN+1)*Math.random();

    return Math.floor(nb);
};

var nberreurs=0;

var nbgagner=0;

var clavier;

var dico=    ['TERRE','ESPACE','NEPTUNE','MARS','PLUTON',
			  'VENUS','ETOILE','ASTEROIDE','LUNE','SOLEIL',
			  'NASA','FUSEE','URANUS','PLANETE','GALAXIE',
			  'GRAVITE','APESANTEUR','ASTRE','ATMOSPHERE',
			  'ASTRONAUTE','OXYGENE','MERCURE','JUPITER',
			  'SATURNE','ORBITE'];
var nbAleat = aleat();

var mot = dico[nbAleat];

var revelation=document.getElementById("affichemots")

//(2)Détermination d'un espace pour le mot

var e;

var espacemot = document.getElementById('motatrouv');

var i =0;

var el;

for (var i=0; i<mot.length; i++) {
	
	//crée une div

	e = document.createElement('div');

	//ajout un nom de classe

	e.className = "case";

	//Ajout d'un id

	idName = "case" + i;

	e.setAttribute("id", idName);

	//accroche l'élément crée a ma zone pour mettre le mots

	espacemot.appendChild(e);
}

//(3)Clic -> si la lettre est dans le mot, elle apparait dans l'espace précité 

function lettre(m_lettre) {

	var j = 0;

	var i = 0;

	var tetes=document.getElementById("tete");

	var tor=document.getElementById("torse");

	var bdroit=document.getElementById("brasd");

	var bgauche=document.getElementById("brasg");

	var jdroit=document.getElementById("jambed");

	var jgauche=document.getElementById("jambeg");

	var touche=document.getElementById("lettre" + m_lettre);

	// effacer la lettre du clavier

	touche.setAttribute("class", "efface");

	//La lettre appartient-elle au mot?

	var index = mot.indexOf(m_lettre);

    if(index !== -1){

    	//-------------------------------------------
 
//(4) Afficher si il y a plusieurs lettres dans le mot

	var indexes = [];

	for (i = 0; i< mot.length; i++) {

		if (mot[i] == m_lettre) {

			indexes.push(i);

			}
		}

	for (j = 0; j<indexes.length; j++) {

		el = document.getElementById('case' + indexes[j]);

		el.innerHTML = m_lettre;

		nbgagner=nbgagner + 1
	}
    	} 

//(5) Click -> si la lettre n'est pas dans le mot, une nouvelle image du pendu apparait.

        else {

        nberreurs = nberreurs + 1;

    	}

	   if (nberreurs==1) {

	   tetes.style.backgroundImage = "url(../img/tetecorde.png)";

		}

		else if (nberreurs==2) {

        tor.style.backgroundImage = "url(../img/corps.png)";

		}

		else if (nberreurs==3) {

        bdroit.style.backgroundImage = "url(../img/brasd.png)";

		}

		else if (nberreurs==4) {

     	bgauche.style.backgroundImage = "url(../img/brasg.png)";

		}

		else if (nberreurs==5) {

        jdroit.style.backgroundImage = "url(../img/jambed.png)";

    	}

   		else if (nberreurs==6){

		jgauche.style.backgroundImage = "url(../img/jambeg.png)";

    	} 	

//(6) Après X erreurs ->écran perdu

    	else if (nberreurs==7) {

		var perdus=document.getElementById("ecranpg");

		perdus.style.display="block";

		perdus.style.backgroundImage="url(../img/fondperdu.png)";

		revelation.innerHTML = "Le mot est:" + mot;

		}

//(7) Si le mot est trouvé -> écran de gagne.

	if (nbgagner==mot.length) {

			var gagner=document.getElementById("ecranpg");

			gagner.style.display="block";

			gagner.style.backgroundImage="url(../img/fondgagner.png)";

//(8) Afficher le mot trouver ou non trouver dans l'image gagner ou perdu 

			revelation.innerHTML = "Le mot est:" + mot;
		}

//(9) gestion du clavier

	var touche=document.getElementById("lettre" + m_lettre);

	// effacer la lettre du clavier

	touche.setAttribute("class", "efface");	
}	