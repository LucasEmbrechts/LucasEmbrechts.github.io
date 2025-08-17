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


// initialisation des variables globales
var i;
var e; 
var espaceMot = document.getElementById('motAtrouver');
var nbErreurs = 0;
var nbgagner = 0; 
var perdu = document.getElementById("boxPerdu");
var gagner = document.getElementById("boxGagner");

//tableau des mots à trouver 
var dico=    ['CHIEN','CHAT','TORTUE','CHEVAL','SERPENT','ARRAIGNE',
              'DAUPHIN','BALEINE','ECUREUIL','ELEPHANT','GIRAFE',
              'KANGOUROU','LOUTRE','LION','VACHE','TAUPE','ZEBRE',
              'SINGE','HIBOU','HIRONDELLE','MANCHOT','PERROQUET',
              'POULE','FOURMI','PAPILLON','SAUTERELLE','TRUITE'
              ,'CROCODILE','GRENOUILLE','COLOMBE','AIGLE','AUTRUCHE','LAPIN','KAKARIKI'];

//tableau des indices par apport au mot à trouver
var indices=    ["L'indice est : Avec les lettres de mon nom je peux écrire le nom de ma maison",
                 "L'indice est : je peut être domestique",
                 "L'indice est : je ne me déplace pas vite",
                 "L'indice est : je suis un animal avec lequel on peut pratiquer un sport",
                 "L'indice est : je rampe",
                 "L'indice est : je suis petit",
                 "L'indice est : je suis marin ",
                 "L'indice est : je suis  extrêmement lourd",
                 "L'indice est : je grimpe aux arbres",
                 "L'indice est : je vie dans la savane",
                 "L'indice est : j'ai des taches",
                 "L'indice est : j'ai une poche",
                 "L'indice est : je suis principalement nocturne",
                 "L'indice est : les humains sont ses principaux prédateurs",
                 "L'indice est : je suis très présent dans la campagne de chez nous",
                 "L'indice est : je vie sous terre",
                 "L'indice est : je suis noir et blanc",
                 "L'indice est : je suis ton ancètre",
                 "L'indice est : je chante mon nom tout les soirs",
                 "L'indice est : j'ai la tête rouge",
                 "L'indice est : j'ai une espérance de vie de 15-20ans",
                 "L'indice est : je fait partie de la famille des psittacidés",
                 "L'indice est : j'ai des plumes",
                 "L'indice est : je peux porter jusqu'a 1 000 fois mon poids",
                 "L'indice est : mon origine remonte à environ 300 millions d'années",
                 "L'indice est : je suis végétarien",
                 "L'indice est : je suis composé d'une trace rose",
                 "L'indice est : je possède 80 dents très tranchantes",
                 "L'indice est : je pond 20 000 oeufs",
                 "L'indice est : je suis entièrement blanc",
                 "L'indice est : je mesure de 66 – 100 cm quand je métends",
                 "L'indice est : je cours vite et je suis très grande",
                 "L'indice est : j'ai le même museau que le chat",
                 "L'indice est : je suis d'origine de la Nouvelle Zélande et de la Nouvelle calédonie",];

var nbAleat = aleat();
var mot = dico[nbAleat];
//affichage du mot qui était à trouver dans la box perdue
var elperdu =document.getElementById("AffichageMotaTrouverPerdu");
    elperdu.innerHTML="le mot à trouver est: "+"<br>"+ mot;
//affichage du mot qui était à trouver dans la box gagné
var elgagner =document.getElementById("AffichageMotaTrouverGagner");
    elgagner.innerHTML="le mot à trouver est: "+"<br>"+ mot;



//générer un nombre aléatoire 
function aleat(){
    const MIN = 0; // déclaration d'une constante
    const MAX = 33;
    var nb = MIN + (MAX-MIN+1)*Math.random();
    return Math.floor(nb);
};


//Determiner un espace pour acceuilir ce mot
for (i=0; i <mot.length; i++) {
	//créer une div
	e = document.createElement('div');
	//Ajout un nom de classe
	e.className ="case";
	//Ajout d'un identifiant
	idName="case"+i;
	e.setAttribute("id", idName );
	//accroche l'élément créé à ma zone pour le mot
	espaceMot.appendChild(e);
	
}
//affichage d'une image en plus à chaque erreur jusqu'a ce que la partie soit perdue
function affichagePendu(){
    var elPendu = document.getElementById("penduAMonter");
    //if pour les erreurs()
    if (nbErreurs==1) {
        elPendu.src="images/montagePendu/pendu1.png";
    }else if (nbErreurs==2) {
        elPendu.src="images/montagePendu/pendu2.png";
    }else if (nbErreurs==3) {
        elPendu.src="images/montagePendu/pendu3.png";
    }else if (nbErreurs==4) {
        elPendu.src="images/montagePendu/pendu4.png";
    }else if (nbErreurs==5) {
        elPendu.src="images/montagePendu/pendu5.png";
    }else if (nbErreurs==6) {
        elPendu.src="images/montagePendu/pendu6.png";
    }else if (nbErreurs==7) {
        elPendu.src="images/montagePendu/pendu7.png";
    }else if (nbErreurs==8) {
        elPendu.src="images/montagePendu/pendu8.png";
    }else if (nbErreurs==9) {
        elPendu.src="images/montagePendu/pendu9.png";
    }else if (nbErreurs==10) {
        elPendu.src="images/montagePendu/pendu10.png";
    }else if (nbErreurs==11) {
        perdu.style.display="block";
    }
}
//afficher la lettre dans le mot quand on clique dessus
function game(lettre){
// Vérifie si la sous-chaîne existe dans la chaîne de caractères
    var index = mot.indexOf(lettre);
    var elClavier = document.getElementById("case"+lettre); 
    var i = 0;
    var j = 0;
    var indexes = [];
    var el; 
     
    if(index !== -1){
        //afficher la lettre dans le mot
        for (i = 0; i < mot.length; i++) {
            if(mot[i]==lettre){
                indexes.push(i);
            }
        }

        for (j = 0; j < indexes.length; j++) {
            el = document.getElementById('case'+indexes[j]);
            el.innerHTML= lettre;
            //affichage quand c'est gagner
            nbgagner=nbgagner+1; 
        }
    
        
         //mettre la box de la lettre en vert quand c'est vrai
        elClavier.style.backgroundColor="green";
        //mettre la lettre plus cliquable après une utilisation 
        elClavier.removeAttribute("onclick");
        

    } else{
        nbErreurs = nbErreurs + 1; 
        //mettre la box de la lettre en rouge quand c'est faut
        elClavier.style.backgroundColor="red";
        //mettre la lettre plus cliquable après une utilisation 
        elClavier.removeAttribute("onclick");
    }
    // if et var pour afficher la box gagner  
    if (nbgagner==mot.length) {
        gagner.style.display="block";

    }
    affichagePendu();

}

var indice = document.getElementById("boxPhraseIndice");
indice.innerHTML="appuyer sur le bouton pour avoir un indice "+"<br>"+"mais attention une image s'affichera sur le pendu  ------>";

//affichage de l'indice
function affichageIndice(){
    var indice = document.getElementById("boxPhraseIndice");
    var logoIndice = document.getElementById("logoIndice");
    indice.innerHTML=indices[nbAleat];
    nbErreurs=nbErreurs+1;
    affichagePendu();
    logoIndice.removeAttribute("onclick");
}
