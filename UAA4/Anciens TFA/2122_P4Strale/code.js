
// AFFICHAGE DES PRÉNOMS DANS LES BOXS

var nom1 = document.getElementById("prénom1");
var joueur1 = sessionStorage.getItem("joueur1");
nom1.innerHTML = joueur1;

var nom2 = document.getElementById("prénom2");
var joueur2 = sessionStorage.getItem("joueur2");
nom2.innerHTML = joueur2;




// GÉNÉRATION GRILLE 
var stop = "";
var el1= document.getElementById("egalite");
var ncoups = 0;
var essais = document.getElementById("nbreessais");
var joueur = "rouge";
var g_grille = document.getElementById("grille");
var grille =    [[0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0]];


for (i=0; i<6; i++) {
	for (j=0; j<7; j++) {
		e = document.createElement('div');
		e.className = "case";
		idName="case"+i+"_"+j;
		e.setAttribute("id", idName);
		functName="jeu("+j+")";
		e.setAttribute("onclick", functName );
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





//  FONCTION POUR VÉRIFIER TOUTES POSSIBILITÉS DE VICTOIRE
	
	
	function testCombinaisons(){
	    
        var pos_i;
        var pos_j;
		var el = document.getElementById("resultat");
       
        var nomUtilisateur = document.getElementById("nomUtilisateur");
	    

	    // IF POUR VERIFIER LES LIGNES




	  		// JOUEUR 1
	
	   
		if(grille[5][0] == 1 && grille[5][1] == 1 && grille[5][2] == 1 && grille[5][3] == 1 ){
	       el.style.display = "block";
	       nomUtilisateur.innerHTML=joueur1;
	        clearInterval(timer);
	     
	   }
	   
		else if(grille[5][1] == 1 && grille[5][2] == 1 && grille[5][3] == 1 && grille[5][4] == 1 ){
	       el.style.display = "block";
	       nomUtilisateur.innerHTML=joueur1;
	       clearInterval(timer);
	   }
	
		else if(grille[5][2] == 1 && grille[5][3] == 1 && grille[5][4] == 1 && grille[5][5] == 1 ){
	       el.style.display = "block";
	       nomUtilisateur.innerHTML=joueur1;
	       clearInterval(timer);
	   }
	
		else if(grille[5][3] == 1 && grille[5][4] == 1 && grille[5][5] == 1 && grille[5][6] == 1 ){
	       el.style.display = "block";
	       nomUtilisateur.innerHTML=joueur1;
	       clearInterval(timer);
	   }
	
	
	
		else if(grille[4][0] == 1 && grille[4][1] == 1 && grille[4][2] == 1 && grille[4][3] == 1 ){
			el.style.display = "block";
		 	nomUtilisateur.innerHTML=joueur1;
		 	clearInterval(timer);
		}
		else if(grille[4][1] == 1 && grille[4][2] == 1 && grille[4][3] == 1 && grille[4][4] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}
		else if(grille[4][2] == 1 && grille[4][3] == 1 && grille[4][4] == 1 && grille[4][5] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}
		else if(grille[4][3] == 1 && grille[4][4] == 1 && grille[4][5] == 1 && grille[4][6] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}

	
	
		else if(grille[3][0] == 1 && grille[3][1] == 1 && grille[3][2] == 1 && grille[3][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[3][1] == 1 && grille[3][2] == 1 && grille[3][3] == 1 && grille[3][4] == 1 ){
		    el.style.display = "block";
		   nomUtilisateur.innerHTML=joueur1;
		   clearInterval(timer);
		}
		else if(grille[3][2] == 1 && grille[3][3] == 1 && grille[3][4] == 1 && grille[3][5] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}
		else if(grille[3][3] == 1 && grille[3][4] == 1 && grille[3][5] == 1 && grille[3][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}

	
	
		else if(grille[2][0] == 1 && grille[2][1] == 1 && grille[2][2] == 1 && grille[2][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[2][1] == 1 && grille[2][2] == 1 && grille[2][3] == 1 && grille[2][4] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}
		else if(grille[2][2] == 1 && grille[2][3] == 1 && grille[2][4] == 1 && grille[2][5] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}
		else if(grille[2][3] == 1 && grille[2][4] == 1 && grille[2][5] == 1 && grille[2][6] == 1 ){
		    el.style.display = "block";
		    nomUtilisateur.innerHTML=joueur1;
		    clearInterval(timer);
		}

	
	
		else if(grille[1][0] == 1 && grille[1][1] == 1 && grille[1][2] == 1 && grille[1][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[1][1] == 1 && grille[1][2] == 1 && grille[1][3] == 1 && grille[1][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[1][2] == 1 && grille[1][3] == 1 && grille[1][4] == 1 && grille[1][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[1][3] == 1 && grille[1][4] == 1 && grille[1][5] == 1 && grille[1][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}

	
	
		else if(grille[0][0] == 1 && grille[0][1] == 1 && grille[0][2] == 1 && grille[0][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[0][1] == 1 && grille[0][2] == 1 && grille[0][3] == 1 && grille[0][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
		}
		else if(grille[0][2] == 1 && grille[0][3] == 1 && grille[0][4] == 1 && grille[0][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);

		}
		else if(grille[0][3] == 1 && grille[0][4] == 1 && grille[0][5] == 1 && grille[0][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);

		}



			  		// JOUEUR 2
	
	   
		if(grille[5][0] == 2 && grille[5][1] == 2 && grille[5][2] == 2 && grille[5][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);

	   }
		else if(grille[5][1] == 2 && grille[5][2] == 2 && grille[5][3] == 2 && grille[5][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[5][2] == 2 && grille[5][3] == 2 && grille[5][4] == 2 && grille[5][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	
		else if(grille[5][3] == 2 && grille[5][4] == 2 && grille[5][5] == 2 && grille[5][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
	
	
	
		else if(grille[4][0] == 2 && grille[4][1] == 2 && grille[4][2] == 2 && grille[4][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[4][1] == 2 && grille[4][2] == 2 && grille[4][3] == 2 && grille[4][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[4][2] == 2 && grille[4][3] == 2 && grille[4][4] == 2 && grille[4][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[4][3] == 2 && grille[4][4] == 2 && grille[4][5] == 2 && grille[4][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}

	
	
		else if(grille[3][0] == 2 && grille[3][1] == 2 && grille[3][2] == 2 && grille[3][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[3][1] == 2 && grille[3][2] == 2 && grille[3][3] == 2 && grille[3][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[3][2] == 2 && grille[3][3] == 2 && grille[3][4] == 2 && grille[3][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[3][3] == 2 && grille[3][4] == 2 && grille[3][5] == 2 && grille[3][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}

	
	
		else if(grille[2][0] == 2 && grille[2][1] == 2 && grille[2][2] == 2 && grille[2][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[2][1] == 2 && grille[2][2] == 2 && grille[2][3] == 2 && grille[2][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[2][2] == 2 && grille[2][3] == 2 && grille[2][4] == 2 && grille[2][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[2][3] == 2 && grille[2][4] == 2 && grille[2][5] == 2 && grille[2][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}

	
	
		else if(grille[1][0] == 2 && grille[1][1] == 2 && grille[1][2] == 2 && grille[1][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[1][1] == 2 && grille[1][2] == 2 && grille[1][3] == 2 && grille[1][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[1][2] == 2 && grille[1][3] == 2 && grille[1][4] == 2 && grille[1][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[1][3] == 2 && grille[1][4] == 2 && grille[1][5] == 2 && grille[1][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}

	
	
		else if(grille[0][0] == 2 && grille[0][1] == 2 && grille[0][2] == 2 && grille[0][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[0][1] == 2 && grille[0][2] == 2 && grille[0][3] == 2 && grille[0][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[0][2] == 2 && grille[0][3] == 2 && grille[0][4] == 2 && grille[0][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
		else if(grille[0][3] == 2 && grille[0][4] == 2 && grille[0][5] == 2 && grille[0][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
		}
	













   //  IF POUR VERIFIER LES COLONNES

			  		// JOUEUR 1


		if(grille[5][0] == 1 && grille[4][0] == 1 && grille[3][0] == 1 && grille[2][0] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][0] == 1 && grille[3][0] == 1 && grille[2][0] == 1 && grille[1][0] == 1 ){
			el.style.display = "block";
			clearInterval(timer);
	   }
		else if(grille[3][0] == 1 && grille[2][0] == 1 && grille[1][0] == 1 && grille[0][0] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	
	
	

		else if(grille[5][1] == 1 && grille[4][1] == 1 && grille[3][1] == 1 && grille[2][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][1] == 1 && grille[3][1] == 1 && grille[2][1] == 1 && grille[1][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][1] == 1 && grille[2][1] == 1 && grille[1][1] == 1 && grille[0][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	

	
	
		else if(grille[5][2] == 1 && grille[4][2] == 1 && grille[3][2] == 1 && grille[2][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][2] == 1 && grille[3][2] == 1 && grille[2][2] == 1 && grille[1][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][2] == 1 && grille[2][2] == 1 && grille[1][2] == 1 && grille[0][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	

	

		else if(grille[5][3] == 1 && grille[4][3] == 1 && grille[3][3] == 1 && grille[2][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 1 && grille[3][3] == 1 && grille[2][3] == 1 && grille[1][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 1 && grille[2][3] == 1 && grille[1][3] == 1 && grille[0][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	



		else if(grille[5][4] == 1 && grille[4][4] == 1 && grille[3][4] == 1 && grille[2][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][4] == 1 && grille[3][4] == 1 && grille[2][4] == 1 && grille[1][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][4] == 1 && grille[2][4] == 1 && grille[1][4] == 1 && grille[0][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	



	 	else if(grille[5][5] == 1 && grille[4][5] == 1 && grille[3][5] == 1 && grille[2][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][5] == 1 && grille[3][5] == 1 && grille[2][5] == 1 && grille[1][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][5] == 1 && grille[2][5] == 1 && grille[1][5] == 1 && grille[0][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[5][6] == 1 && grille[4][6] == 1 && grille[3][6] == 1 && grille[2][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][6] == 1 && grille[3][6] == 1 && grille[2][6] == 1 && grille[1][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][6] == 1 && grille[2][6] == 1 && grille[1][6] == 1 && grille[0][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }	

	

			  		// JOUEUR 2
	

		if(grille[5][0] == 2 && grille[4][0] == 2 && grille[3][0] == 2 && grille[2][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][0] == 2 && grille[3][0] == 2 && grille[2][0] == 2 && grille[1][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][0] == 2 && grille[2][0] == 2 && grille[1][0] == 2 && grille[0][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	
	
	

		else if(grille[5][1] == 2 && grille[4][1] == 2 && grille[3][1] == 2 && grille[2][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][1] == 2 && grille[3][1] == 2 && grille[2][1] == 2 && grille[1][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][1] == 2 && grille[2][1] == 2 && grille[1][1] == 2 && grille[0][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	

	
	
		else if(grille[5][2] == 2 && grille[4][2] == 2 && grille[3][2] == 2 && grille[2][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][2] == 2 && grille[3][2] == 2 && grille[2][2] == 2 && grille[1][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][2] == 2 && grille[2][2] == 2 && grille[1][2] == 2 && grille[0][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	

	

		else if(grille[5][3] == 2 && grille[4][3] == 2 && grille[3][3] == 2 && grille[2][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 2 && grille[3][3] == 2 && grille[2][3] == 2 && grille[1][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 2 && grille[2][3] == 2 && grille[1][3] == 2 && grille[0][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	



		else if(grille[5][4] == 2 && grille[4][4] == 2&& grille[3][4] == 2 && grille[2][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);

	   }
		else if(grille[4][4] == 2 && grille[3][4] == 2 && grille[2][4] == 2 && grille[1][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][4] == 2 && grille[2][4] == 2 && grille[1][4] == 2 && grille[0][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }	



	 	else if(grille[5][5] == 2 && grille[4][5] == 2 && grille[3][5] == 2 && grille[2][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][5] == 2 && grille[3][5] == 2 && grille[2][5] == 2 && grille[1][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][5] == 2 && grille[2][5] == 2 && grille[1][5] == 2 && grille[0][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[5][6] == 2 && grille[4][6] == 2 && grille[3][6] == 2 && grille[2][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][6] == 2 && grille[3][6] == 2 && grille[2][6] == 2 && grille[1][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][6] == 2 && grille[2][6] == 2 && grille[1][6] == 2 && grille[0][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
	   
		










	
	    // IF POUR VERIFIER LES DIAGONALES
	   

	    	// DIAGONALE GAUCHE A DROITE

	    		// JOUEUR 1
	   
	    if(grille[3][0] == 1 && grille[2][1] == 1 && grille[1][2] == 1 && grille[0][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);


	   }



	    else if(grille[4][0] == 1 && grille[3][1] == 1 && grille[2][2] == 1 && grille[1][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][1] == 1 && grille[2][2] == 1 && grille[1][3] == 1 && grille[0][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		


		else if(grille[5][0] == 1 && grille[4][1] == 1 && grille[3][2] == 1 && grille[2][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][1] == 1 && grille[3][2] == 1 && grille[2][3] == 1 && grille[1][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][2] == 1 && grille[2][3] == 1 && grille[1][4] == 1 && grille[0][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[5][1] == 1 && grille[4][2] == 1 && grille[3][3] == 1 && grille[2][4] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][2] == 1 && grille[3][3] == 1 && grille[2][4] == 1 && grille[1][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 1 && grille[2][4] == 1 && grille[1][5] == 1 && grille[0][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[5][2] == 1 && grille[4][3] == 1 && grille[3][4] == 1 && grille[2][5] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 1 && grille[3][4] == 1 && grille[2][5] == 1 && grille[1][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



		 else if(grille[5][3] == 1 && grille[4][4] == 1 && grille[3][5] == 1 && grille[2][6] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
			

	    		// JOUEUR 2


	    if(grille[3][0] == 2 && grille[2][1] == 2 && grille[1][2] == 2 && grille[0][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[4][0] == 2 && grille[3][1] == 2 && grille[2][2] == 2 && grille[1][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][1] == 2 && grille[2][2] == 2 && grille[1][3] == 2 && grille[0][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		


		else if(grille[5][0] == 2 && grille[4][1] == 2 && grille[3][2] == 2 && grille[2][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][1] == 2 && grille[3][2] == 2 && grille[2][3] == 2 && grille[1][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][2] == 2 && grille[2][3] == 2 && grille[1][4] == 2 && grille[0][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[5][1] == 2 && grille[4][2] == 2 && grille[3][3] == 2 && grille[2][4] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][2] == 2 && grille[3][3] == 2 && grille[2][4] == 2 && grille[1][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 2 && grille[2][4] == 2 && grille[1][5] == 2 && grille[0][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[5][2] == 2 && grille[4][3] == 2 && grille[3][4] == 2 && grille[2][5] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 2 && grille[3][4] == 2 && grille[2][5] == 2 && grille[1][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



		else if(grille[5][3] == 2 && grille[4][4] == 2 && grille[3][5] == 2 && grille[2][6] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }

	    	// DIAGONALE DROITE A GAUCHE

	    		// JOUEUR 1
	   
	    if(grille[5][3] == 1 && grille[4][2] == 1 && grille[3][1] == 1 && grille[2][0] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[5][4] == 1 && grille[4][3] == 1 && grille[3][2] == 1 && grille[2][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 1 && grille[3][2] == 1 && grille[2][1] == 1 && grille[1][0] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		


		else if(grille[5][5] == 1 && grille[4][4] == 1 && grille[3][3] == 1 && grille[2][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][4] == 1 && grille[3][3] == 1 && grille[2][2] == 1 && grille[1][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 1 && grille[2][2] == 1 && grille[1][1] == 1 && grille[0][0] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[5][6] == 1 && grille[4][5] == 1 && grille[3][4] == 1 && grille[2][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[4][5] == 1 && grille[3][4] == 1 && grille[2][3] == 1 && grille[1][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][4] == 1 && grille[2][3] == 1 && grille[1][2] == 1 && grille[0][1] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



	    else if(grille[4][6] == 1 && grille[3][5] == 1 && grille[2][4] == 1 && grille[1][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
		else if(grille[3][5] == 1 && grille[2][4] == 1 && grille[1][3] == 1 && grille[0][2] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }



		 else if(grille[3][6] == 1 && grille[2][5] == 1 && grille[1][4] == 1 && grille[0][3] == 1 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur1;
			clearInterval(timer);
	   }
			

	    		// JOUEUR 2


	    if(grille[5][3] == 2 && grille[4][2] == 2 && grille[3][1] == 2 && grille[2][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[5][4] == 2 && grille[4][3] == 2 && grille[3][2] == 2 && grille[2][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][3] == 2 && grille[3][2] == 2 && grille[2][1] == 2 && grille[1][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		


		else if(grille[5][5] == 2 && grille[4][4] == 2 && grille[3][3] == 2 && grille[2][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][4] == 2 && grille[3][3] == 2 && grille[2][2] == 2 && grille[1][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][3] == 2 && grille[2][2] == 2 && grille[1][1] == 2 && grille[0][0] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[5][6] == 2 && grille[4][5] == 2 && grille[3][4] == 2 && grille[2][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[4][5] == 2 && grille[3][4] == 2 && grille[2][3] == 2 && grille[1][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][4] == 2 && grille[2][3] == 2 && grille[1][2] == 2 && grille[0][1] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



	    else if(grille[4][6] == 2 && grille[3][5] == 2 && grille[2][4] == 2 && grille[1][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }
		else if(grille[3][5] == 2 && grille[2][4] == 2 && grille[1][3] == 2 && grille[0][2] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }



		 else if(grille[3][6] == 2 && grille[2][5] == 2 && grille[1][4] == 2 && grille[0][3] == 2 ){
			el.style.display = "block";
			nomUtilisateur.innerHTML=joueur2;
			clearInterval(timer);
	   }

     	else if (ncoups == 42) 
     	{
     		el1.style.display = "block";
     		clearInterval(timer);
     	}

} 
	
// FONCTION PERMETTANT DE FAIRE TOMBER LE JETONS EN BAS DE LA GRILLE


function jeu(pos_j){
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

//AFFICHAGE ET CHANGEMENT DE COULEUR

    el = document.getElementById("case" + pos_i + "_" + pos_j);
     if(joueur == "rouge"){
        grille[pos_i][pos_j]=1;
        el.style.backgroundImage = "url(images/rouge.png)"; 
        joueur = "jaune";
     } else {
        grille[pos_i][pos_j]=2;
        el.style.backgroundImage = "url(images/jaune.png)";
        joueur = "rouge";
     }
    ncoups = ncoups+1;
    essais.innerHTML =   "Nombre de coups de la partie"+"<br>"+"<br>"+ncoups;
    essais.style.textAlign = "center";
         testCombinaisons();


}

// FONCTION POUR LE CHRONOMÈTRE OU LE MINUTEUR
var secondes = 300;
var affichage; 
var timer;
var text = "";
var sec;
 
function Chrono()
{
    if (secondes >= 0)
    {
        var minutes = Math.floor(secondes/60);
        secondes -= minutes * 60;
         
        if (secondes<10)
        {
            sec = "0" + secondes;
        }
        else
        {
            sec = secondes;
        }
         
        text = minutes + ' : ' + sec;
        secondes = secondes + (minutes * 60) - 1;
    }
    else
    {  
		 el1.style.display = "block"; 	
         
    }
    document.getElementById('chronomètre').innerHTML = text; 
}
function DemarrerChrono() 
{
    timer = setInterval('Chrono()', 1000); 

}



