// Fil conducteur du code

//Il existe une grille de 7x6 dans votre interface.
//et un tableau à double entrée dans votre code javascript.
//--->test d'une fonction d'affichage.

// TOUR DE JEU
//Joueur 1 :
// clic -> insérer un pion dans la grille (dans le tableau).
// rafraichir la fonction d'affichage
// Test pour voir si quelqu'un a gagné

//Joueur 2
// clic -> insérer un pion dans la grille (dans le tableau).
// rafraichir la fonction d'affichage
// Test pour voir si quelqu'un a gagné

//--> on boucle entre les deux joueurs jusqu'à l'égalité ou la victoire d'un joueur.


//---------------- AU CHARGEMENT -----------------//
var ncoups=0;
var joueur = "rouge";
var g_grille = document.getElementById("grille");
var grille =    [[0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0]];



//Exemple pour changer la valeur du tableau à double entrée.
//grille[5][2]=2;  //Soit le joueur 2 a inséré un pion en ligne 5 (tout en bas) troisième colonne (on commence à zéro)


// GÉNÉRATION GRILLE

for (i=0; i<6; i++) {
	for (j=0; j<7; j++) {
		e = document.createElement('div');
		e.className = "case";
		idName="case"+i+"_"+j;
		e.setAttribute("id", idName);
		functName="jeu("+j+")";
		e.setAttribute("onclick", functName );
    e.setAttribute("onMouseOver", "appearAstro("+j+")" );
    e.setAttribute("onMouseLeave", "desappearAstro("+j+")");
		g_grille.appendChild(e);
	}
}
function affichageGrille(){
    var el;
    for(i=0; i<6; i++){
        for(j=0; j<7; j++){
            el=document.getElementById("case"+i+"_"+j);
        }
    }
}

//  FONCTION POUR TOUT VERIFIER


function testCombinaisons(){
   

var el1 = document.getElementById("resultat1");
var el2 = document.getElementById("resultat2");
var elEgalite = document.getElementById("resultatDraw");

   // IF POUR VERIFIER LES LIGNES




  // JOUEUR 1

 
    if(grille[5][0] == 1 && grille[5][1] == 1 && grille[5][2] == 1 && grille[5][3] == 1 ){
          el1.style.display = "block";
      }
     
    else if(grille[5][1] == 1 && grille[5][2] == 1 && grille[5][3] == 1 && grille[5][4] == 1 ){
          el1.style.display = "block";
      }
    
    else if(grille[5][2] == 1 && grille[5][3] == 1 && grille[5][4] == 1 && grille[5][5] == 1 ){
          el1.style.display = "block";
      }
    
    else if(grille[5][3] == 1 && grille[5][4] == 1 && grille[5][5] == 1 && grille[5][6] == 1 ){
          el1.style.display = "block";
      }
    
    
    
    else if(grille[4][0] == 1 && grille[4][1] == 1 && grille[4][2] == 1 && grille[4][3] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[4][1] == 1 && grille[4][2] == 1 && grille[4][3] == 1 && grille[4][4] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[4][2] == 1 && grille[4][3] == 1 && grille[4][4] == 1 && grille[4][5] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[4][3] == 1 && grille[4][4] == 1 && grille[4][5] == 1 && grille[4][6] == 1 ){
       el1.style.display = "block";
    }
    
    
    
    else if(grille[3][0] == 1 && grille[3][1] == 1 && grille[3][2] == 1 && grille[3][3] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[3][1] == 1 && grille[3][2] == 1 && grille[3][3] == 1 && grille[3][4] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[3][2] == 1 && grille[3][3] == 1 && grille[3][4] == 1 && grille[3][5] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[3][3] == 1 && grille[3][4] == 1 && grille[3][5] == 1 && grille[3][6] == 1 ){
    el1.style.display = "block";
    }
    
    
    
    else if(grille[2][0] == 1 && grille[2][1] == 1 && grille[2][2] == 1 && grille[2][3] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[2][1] == 1 && grille[2][2] == 1 && grille[2][3] == 1 && grille[2][4] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[2][2] == 1 && grille[2][3] == 1 && grille[2][4] == 1 && grille[2][5] == 1 ){
       el1.style.display = "block";
    }
    else if(grille[2][3] == 1 && grille[2][4] == 1 && grille[2][5] == 1 && grille[2][6] == 1 ){
       el1.style.display = "block";
    }
    
    
    
    else if(grille[1][0] == 1 && grille[1][1] == 1 && grille[1][2] == 1 && grille[1][3] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[1][1] == 1 && grille[1][2] == 1 && grille[1][3] == 1 && grille[1][4] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[1][2] == 1 && grille[1][3] == 1 && grille[1][4] == 1 && grille[1][5] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[1][3] == 1 && grille[1][4] == 1 && grille[1][5] == 1 && grille[1][6] == 1 ){
    el1.style.display = "block";
    }
    
    
    
    else if(grille[0][0] == 1 && grille[0][1] == 1 && grille[0][2] == 1 && grille[0][3] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[0][1] == 1 && grille[0][2] == 1 && grille[0][3] == 1 && grille[0][4] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[0][2] == 1 && grille[0][3] == 1 && grille[0][4] == 1 && grille[0][5] == 1 ){
    el1.style.display = "block";
    }
    else if(grille[0][3] == 1 && grille[0][4] == 1 && grille[0][5] == 1 && grille[0][6] == 1 ){
    el1.style.display = "block";
    }
    
    
    
      // JOUEUR 2
    
     
    if(grille[5][0] == 2 && grille[5][1] == 2 && grille[5][2] == 2 && grille[5][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[5][1] == 2 && grille[5][2] == 2 && grille[5][3] == 2 && grille[5][4] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[5][2] == 2 && grille[5][3] == 2 && grille[5][4] == 2 && grille[5][5] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[5][3] == 2 && grille[5][4] == 2 && grille[5][5] == 2 && grille[5][6] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[4][0] == 2 && grille[4][1] == 2 && grille[4][2] == 2 && grille[4][3] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[4][1] == 2 && grille[4][2] == 2 && grille[4][3] == 2 && grille[4][4] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[4][2] == 2 && grille[4][3] == 2 && grille[4][4] == 2 && grille[4][5] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[4][3] == 2 && grille[4][4] == 2 && grille[4][5] == 2 && grille[4][6] == 2 ){
    el2.style.display = "block";
    }
    
    
    
    else if(grille[3][0] == 2 && grille[3][1] == 2 && grille[3][2] == 2 && grille[3][3] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[3][1] == 2 && grille[3][2] == 2 && grille[3][3] == 2 && grille[3][4] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[3][2] == 2 && grille[3][3] == 2 && grille[3][4] == 2 && grille[3][5] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[3][3] == 2 && grille[3][4] == 2 && grille[3][5] == 2 && grille[3][6] == 2 ){
    el2.style.display = "block";
    }
    
    
    
    else if(grille[2][0] == 2 && grille[2][1] == 2 && grille[2][2] == 2 && grille[2][3] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[2][1] == 2 && grille[2][2] == 2 && grille[2][3] == 2 && grille[2][4] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[2][2] == 2 && grille[2][3] == 2 && grille[2][4] == 2 && grille[2][5] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[2][3] == 2 && grille[2][4] == 2 && grille[2][5] == 2 && grille[2][6] == 2 ){
    el2.style.display = "block";
    }
    
    
    
    else if(grille[1][0] == 2 && grille[1][1] == 2 && grille[1][2] == 2 && grille[1][3] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[1][1] == 2 && grille[1][2] == 2 && grille[1][3] == 2 && grille[1][4] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[1][2] == 2 && grille[1][3] == 2 && grille[1][4] == 2 && grille[1][5] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[1][3] == 2 && grille[1][4] == 2 && grille[1][5] == 2 && grille[1][6] == 2 ){
    el2.style.display = "block";
    }
    
    
    
    else if(grille[0][0] == 2 && grille[0][1] == 2 && grille[0][2] == 2 && grille[0][3] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[0][1] == 2 && grille[0][2] == 2 && grille[0][3] == 2 && grille[0][4] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[0][2] == 2 && grille[0][3] == 2 && grille[0][4] == 2 && grille[0][5] == 2 ){
    el2.style.display = "block";
    }
    else if(grille[0][3] == 2 && grille[0][4] == 2 && grille[0][5] == 2 && grille[0][6] == 2 ){
    el2.style.display = "block";
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       //  IF POUR VERIFIER LES COLONNES
    
    
    
    
    
      // JOUEUR 1
    
    
    if(grille[5][0] == 1 && grille[4][0] == 1 && grille[3][0] == 1 && grille[2][0] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][0] == 1 && grille[3][0] == 1 && grille[2][0] == 1 && grille[1][0] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][0] == 1 && grille[2][0] == 1 && grille[1][0] == 1 && grille[0][0] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][1] == 1 && grille[4][1] == 1 && grille[3][1] == 1 && grille[2][1] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][1] == 1 && grille[3][1] == 1 && grille[2][1] == 1 && grille[1][1] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][1] == 1 && grille[2][1] == 1 && grille[1][1] == 1 && grille[0][1] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][2] == 1 && grille[4][2] == 1 && grille[3][2] == 1 && grille[2][2] == 1 ){
    el1.style.display = "block";
    
      }
    else if(grille[4][2] == 1 && grille[3][2] == 1 && grille[2][2] == 1 && grille[1][2] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][2] == 1 && grille[2][2] == 1 && grille[1][2] == 1 && grille[0][2] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][3] == 1 && grille[4][3] == 1 && grille[3][3] == 1 && grille[2][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][3] == 1 && grille[3][3] == 1 && grille[2][3] == 1 && grille[1][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][3] == 1 && grille[2][3] == 1 && grille[1][3] == 1 && grille[0][3] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][4] == 1 && grille[4][4] == 1 && grille[3][4] == 1 && grille[2][4] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][4] == 1 && grille[3][4] == 1 && grille[2][4] == 1 && grille[1][4] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][4] == 1 && grille[2][4] == 1 && grille[1][4] == 1 && grille[0][4] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][5] == 1 && grille[4][5] == 1 && grille[3][5] == 1 && grille[2][5] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][5] == 1 && grille[3][5] == 1 && grille[2][5] == 1 && grille[1][5] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][5] == 1 && grille[2][5] == 1 && grille[1][5] == 1 && grille[0][5] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[5][6] == 1 && grille[4][6] == 1 && grille[3][6] == 1 && grille[2][6] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][6] == 1 && grille[3][6] == 1 && grille[2][6] == 1 && grille[1][6] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][6] == 1 && grille[2][6] == 1 && grille[1][6] == 1 && grille[0][6] == 1 ){
    el1.style.display = "block";
      }
    
    
    
      // JOUEUR 2
    
    
    if(grille[5][0] == 2 && grille[4][0] == 2 && grille[3][0] == 2 && grille[2][0] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][0] == 2 && grille[3][0] == 2 && grille[2][0] == 2 && grille[1][0] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][0] == 2 && grille[2][0] == 2 && grille[1][0] == 2 && grille[0][0] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][1] == 2 && grille[4][1] == 2 && grille[3][1] == 2 && grille[2][1] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][1] == 2 && grille[3][1] == 2 && grille[2][1] == 2 && grille[1][1] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][1] == 2 && grille[2][1] == 2 && grille[1][1] == 2 && grille[0][1] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][2] == 2 && grille[4][2] == 2 && grille[3][2] == 2 && grille[2][2] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][2] == 2 && grille[3][2] == 2 && grille[2][2] == 2 && grille[1][2] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][2] == 2 && grille[2][2] == 2 && grille[1][2] == 2 && grille[0][2] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][3] == 2 && grille[4][3] == 2 && grille[3][3] == 2 && grille[2][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][3] == 2 && grille[3][3] == 2 && grille[2][3] == 2 && grille[1][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][3] == 2 && grille[2][3] == 2 && grille[1][3] == 2 && grille[0][3] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][4] == 2 && grille[4][4] == 2&& grille[3][4] == 2 && grille[2][4] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][4] == 2 && grille[3][4] == 2 && grille[2][4] == 2 && grille[1][4] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][4] == 2 && grille[2][4] == 2 && grille[1][4] == 2 && grille[0][4] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][5] == 2 && grille[4][5] == 2 && grille[3][5] == 2 && grille[2][5] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][5] == 2 && grille[3][5] == 2 && grille[2][5] == 2 && grille[1][5] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][5] == 2 && grille[2][5] == 2 && grille[1][5] == 2 && grille[0][5] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[5][6] == 2 && grille[4][6] == 2 && grille[3][6] == 2 && grille[2][6] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][6] == 2 && grille[3][6] == 2 && grille[2][6] == 2 && grille[1][6] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][6] == 2 && grille[2][6] == 2 && grille[1][6] == 2 && grille[0][6] == 2 ){
    el2.style.display = "block";
      }
     
    
    
    
    
    
    
    
    
    
    
    
    
       // IF POUR VERIFIER LES DIAGONALES
     
    
        // DIAGONALE GAUCHE A DROITE
    
        // JOUEUR 1
     
       if(grille[3][0] == 1 && grille[2][1] == 1 && grille[1][2] == 1 && grille[0][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][0] == 1 && grille[3][1] == 1 && grille[2][2] == 1 && grille[1][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][1] == 1 && grille[2][2] == 1 && grille[1][3] == 1 && grille[0][4] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][0] == 1 && grille[4][1] == 1 && grille[3][2] == 1 && grille[2][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][1] == 1 && grille[3][2] == 1 && grille[2][3] == 1 && grille[1][4] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][2] == 1 && grille[2][3] == 1 && grille[1][4] == 1 && grille[0][5] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[5][1] == 1 && grille[4][2] == 1 && grille[3][3] == 1 && grille[2][4] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][2] == 1 && grille[3][3] == 1 && grille[2][4] == 1 && grille[1][5] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][3] == 1 && grille[2][4] == 1 && grille[1][5] == 1 && grille[0][6] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[5][2] == 1 && grille[4][3] == 1 && grille[3][4] == 1 && grille[2][5] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][3] == 1 && grille[3][4] == 1 && grille[2][5] == 1 && grille[1][6] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[5][3] == 1 && grille[4][4] == 1 && grille[3][5] == 1 && grille[2][6] == 1 ){
    el1.style.display = "block";
      }
    
    
        // JOUEUR 2
    
    
       if(grille[3][0] == 2 && grille[2][1] == 2 && grille[1][2] == 2 && grille[0][3] == 2 ){
    el2.style.display = "block";
      }
      else if(grille[4][0] == 2 && grille[3][1] == 2 && grille[2][2] == 2 && grille[1][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][1] == 2 && grille[2][2] == 2 && grille[1][3] == 2 && grille[0][4] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][0] == 2 && grille[4][1] == 2 && grille[3][2] == 2 && grille[2][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][1] == 2 && grille[3][2] == 2 && grille[2][3] == 2 && grille[1][4] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][2] == 2 && grille[2][3] == 2 && grille[1][4] == 2 && grille[0][5] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[5][1] == 2 && grille[4][2] == 2 && grille[3][3] == 2 && grille[2][4] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][2] == 2 && grille[3][3] == 2 && grille[2][4] == 2 && grille[1][5] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][3] == 2 && grille[2][4] == 2 && grille[1][5] == 2 && grille[0][6] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[5][2] == 2 && grille[4][3] == 2 && grille[3][4] == 2 && grille[2][5] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][3] == 2 && grille[3][4] == 2 && grille[2][5] == 2 && grille[1][6] == 2 ){
    el2.style.display = "block";
      }  
    else if(grille[5][3] == 2 && grille[4][4] == 2 && grille[3][5] == 2 && grille[2][6] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    
    
    
    
        // DIAGONALE DROITE A GAUCHE
    
        // JOUEUR 1
     
       if(grille[5][3] == 1 && grille[4][2] == 1 && grille[3][1] == 1 && grille[2][0] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[5][4] == 1 && grille[4][3] == 1 && grille[3][2] == 1 && grille[2][1] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][3] == 1 && grille[3][2] == 1 && grille[2][1] == 1 && grille[1][0] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[5][5] == 1 && grille[4][4] == 1 && grille[3][3] == 1 && grille[2][2] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][4] == 1 && grille[3][3] == 1 && grille[2][2] == 1 && grille[1][1] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][3] == 1 && grille[2][2] == 1 && grille[1][1] == 1 && grille[0][0] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[5][6] == 1 && grille[4][5] == 1 && grille[3][4] == 1 && grille[2][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[4][5] == 1 && grille[3][4] == 1 && grille[2][3] == 1 && grille[1][2] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][4] == 1 && grille[2][3] == 1 && grille[1][2] == 1 && grille[0][1] == 1 ){
    el1.style.display = "block";
      }
    
    
    
       else if(grille[4][6] == 1 && grille[3][5] == 1 && grille[2][4] == 1 && grille[1][3] == 1 ){
    el1.style.display = "block";
      }
    else if(grille[3][5] == 1 && grille[2][4] == 1 && grille[1][3] == 1 && grille[0][2] == 1 ){
    el1.style.display = "block";
      }
    
    
    
    else if(grille[3][6] == 1 && grille[2][5] == 1 && grille[1][4] == 1 && grille[0][3] == 1 ){
    el1.style.display = "block";
      }
    
    
        // JOUEUR 2
    
    
       if(grille[5][3] == 2 && grille[4][2] == 2 && grille[3][1] == 2 && grille[2][0] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[5][4] == 2 && grille[4][3] == 2 && grille[3][2] == 2 && grille[2][1] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][3] == 2 && grille[3][2] == 2 && grille[2][1] == 2 && grille[1][0] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[5][5] == 2 && grille[4][4] == 2 && grille[3][3] == 2 && grille[2][2] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][4] == 2 && grille[3][3] == 2 && grille[2][2] == 2 && grille[1][1] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][3] == 2 && grille[2][2] == 2 && grille[1][1] == 2 && grille[0][0] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[5][6] == 2 && grille[4][5] == 2 && grille[3][4] == 2 && grille[2][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[4][5] == 2 && grille[3][4] == 2 && grille[2][3] == 2 && grille[1][2] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][4] == 2 && grille[2][3] == 2 && grille[1][2] == 2 && grille[0][1] == 2 ){
    el2.style.display = "block";
      }
    
    
    
       else if(grille[4][6] == 2 && grille[3][5] == 2 && grille[2][4] == 2 && grille[1][3] == 2 ){
    el2.style.display = "block";
      }
    else if(grille[3][5] == 2 && grille[2][4] == 2 && grille[1][3] == 2 && grille[0][2] == 2 ){
    el2.style.display = "block";
      }
    
    
    
    else if(grille[3][6] == 2 && grille[2][5] == 2 && grille[1][4] == 2 && grille[0][3] == 2 ){
    el2.style.display = "block";
      }else if (ncoups==42) {
            elEgalite.style.display = "block";
      }
    
} 


    // fonction pour faire apparaitre les pions en bas

function jeu(pos_j){
    var elAst1=document.getElementById("player1");
    var elAst2=document.getElementById("player2");

    var elsMiniLune=document.getElementsByClassName("lune");
    var pos_i=5; 
    var el; 

    if(grille[5][pos_j] == 0){
        pos_i = 5; 
    } else if(grille[4][pos_j] == 0) {
        pos_i = 4;
    }else if(grille[3][pos_j] == 0) {
        pos_i = 3;
    }else if(grille[2][pos_j] == 0) {
        pos_i = 2;
    }else if(grille[1][pos_j] == 0) {
        pos_i = 1;
    }else if(grille[0][pos_j] == 0) {
        pos_i = 0;
    }else{
        pos_i="";
    }


    //joueur 1 ou joueur 2

    el = document.getElementById("case" + pos_i + "_" + pos_j);
     if(joueur == "rouge"){

        //lune dans le jeu rouge ou jaune
        grille[pos_i][pos_j]=1;
        el.style.backgroundImage = "url(img/lunerouge.png)"; 
        joueur = "jaune";

        //changement astronaute
        elAst1.src= "img/astronaute2.png";
        elAst2.src="img/astronaute1.png";

        //lune ballon de l'astronaute
        for (var k = 0; k < 7; k++) {
          elsMiniLune[k].src="img/lunejaune.png";
        }
     } else { 
       //lune dans le jeu rouge ou jaune
        grille[pos_i][pos_j]=2;
        el.style.backgroundImage = "url(img/luneJaune.png)";
        joueur = "rouge";

         //changement astronaute
        elAst1.src= "img/astronaute1.png";
        elAst2.src="img/astronaute2.png";

        //lune ballon de l'astronaute
       
        for (var k = 0; k < 7; k++) {
          elsMiniLune[k].src="img/lunerouge.png";
        }
     }

     ncoups=ncoups+1;
     testCombinaisons();

}
function appearAstro(colonne){
  el = document.getElementById('pbh'+colonne);
  el.style.opacity = 1;
}

function desappearAstro(colonne){
  el = document.getElementById('pbh'+colonne);
  el.style.opacity = 0;
}

function pbho(colonne){
   el = document.getElementById('pbh'+colonne);
   el.style.opacity = 1;
}
function pbhl(colonne){
   el = document.getElementById('pbh'+colonne);
   el.style.opacity = 0;
}
