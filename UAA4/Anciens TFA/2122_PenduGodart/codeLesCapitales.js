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
var dico=    ['TOKYO','BRUXELLES','LUXEMBOURG','WELLINGTON','PRAGUE','MEXICO',
            'BELGRADE','BUDAPEST','DAKAR','MONACO','VARSOVIE','SOFIA','KIEV',
            'GENEVE','PARIS','ROME','ZAGREB','RABAT','PEKIN','HELSINKI','DOHA',];

//tableau des indices par apport au mot à trouver
var indices=    ["L'indice est : ma population est de 13,96 millions d'ahibtants",
                 "L'indice est : je suis le siège de l'europe",
                 "L'indice est : je porte le même nom que mon pays",
                 "L'indice est : j'ai une surperficie de 444km²",
                 "L'indice est : je comporte La Tour Poudrière",
                 "L'indice est : quand on pense à mon pays on pense au sombrero",
                 "L'indice est : je comporte le monument du prince Michel",
                 "L'indice est : mon pays est à droite de l'autriche",
                 "L'indice est : le nom de ma ville porte le nom d'une course automobile dans le sable",
                 "L'indice est : il y a un circuit de formule 1 dans ma ville",
                 "L'indice est : le fleuve vistule me traverse",
                 "L'indice est : je porte le nom d'un dessin animé de disney",
                 "L'indice est : je souffre depuis le jeudi 28 avril 2022",
                 "L'indice est : mon pays à éliminer la france à l'euro 2020 ",
                 "L'indice est : je suis une ville énormément connue",
                 "L'indice est : mon pays à la forme d'une chaussure à talon",
                 "L'indice est : mon pays à une forme de croissant",
                 "L'indice est : je possède le monuments Tour Hassan",
                 "L'indice est : une émision française porte mon nom",
                 "L'indice est : je porte le nom d'un personnage de la casa de papel",
                 "L'indice est : la coupe du monde 2022 à lieu chez moi",];
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
    const MAX = 20;
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
