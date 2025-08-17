var dice1;
var dice2;
var pionEstA = 0;
var pionEstA2 = 0;
var pionEstA3 = 0;
var pionEstA4 = 0;
var joueur = 1;
var joueur1 = 0;
var joueur2 = 0;
var joueur3 = 0;
var joueur4 = 0;
var yolo = 0;
var hotel1 = 0;
var hotel2 = 0;
var hotel3 = 0;
var hotel4 = 0;
var puit1 = 0;
var puit2 = 0;
var puit3 = 0;
var puit4 = 0;
var prison1 = 0;
var prison2 = 0;
var prison3 = 0;
var prison4 = 0;

function begin(amount){
  var af2 = document.getElementById('fullGame');
  af2.style.display="block";

  var af3 = document.getElementById('choixJoueur');
  af3.style.display="none";
	yolo = amount; 

    if (yolo <= 1) {

      joueur1 = 1;

    } else if (yolo == 2) {

      joueur1 = 1;

      joueur2 = 1;

    } else if (yolo == 3) {

      joueur1 = 1;

      joueur2 = 1;

      joueur3 = 1;

    } else {

      joueur1 = 1;

      joueur2 = 1;

      joueur3 = 1;
      
      joueur4 = 1;
    }
        afficherPions();

}


function afficherPions() {
	// Vider le plateau
	$("#plateau").html("");

	// Et afficher la mise à jour
	$( document ).ready(function() {

		for (var i = 0; i <= 63; i++) {

			$( '<div id="case' + i + '" class="case">case'+i 

            + (pionEstA == i && yolo >= 1? "<br><div id='joueur1'></div>" : "") 

            + (pionEstA2 == i && yolo >= 2? "<br><div id='joueur2'></div>" : "")

            + (pionEstA3 == i && yolo >= 3? "<br><div id='joueur3'></div>" : "")

            + (pionEstA4 == i && yolo >= 4? "<br><div id='joueur4'></div>" : "") 

      + '</div>' ).appendTo('#plateau');}
	});
	
  
}




function getRoll() {
	return Math.floor(Math.random() * 6) + 1  ;
}


function lancer() {

	dice1 = getRoll();
	dice2 = getRoll();

    if (dice1 == 1 ){

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des1.jpg'>";

    } else if (dice1 == 2) {

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des2.jpg'>";

    } else if (dice1 == 3) {

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des3.jpg'>";

    } else if (dice1 == 4) {

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des4.jpg'>";

    } else if (dice1 == 5) {

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des5.jpg'>";

    } else {

      var i = document.getElementById('dice1');

      i.innerHTML = "<img src='images/des6.jpg'>";

    }

    if (dice2 == 1 ){

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des1.jpg'>";

    } else if (dice2 == 2) {

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des2.jpg'>";

    } else if (dice2 == 3) {

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des3.jpg'>";

    } else if (dice2 == 4) {

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des4.jpg'>";

    } else if (dice2 == 5) {

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des5.jpg'>";

    } else {

      var i = document.getElementById('dice2');

      i.innerHTML = "<img src='images/des6.jpg'>";

    }

	
  /*determine ton joueur en cours */
  if (joueur > yolo) {

    joueur = 1;

  }

  joueur = joueur + 1;
 
  	
if (joueur == 2){
  if (pionEstA == 19 & hotel1 != 0 & hotel1 <= 3) {
            
            hotel1 = hotel1 + 1;
            pionEstA = pionEstA - dice1 - dice2;
          }
  pionEstA += dice1 + dice2;

  var enCour = document.getElementById("pass");

  enCour.innerHTML = "Joueur1 avance de " + parseInt(dice1 + dice2);

        	if (joueur1 == 1) {

        		if (dice1 == 6 & dice2 == 3) {

        			pionEstA = 26;

        			var enCour = document.getElementById("pass");

              enCour.innerHTML = "Joueur1 va directement à la case 26 car il a fait un 6 et un 3 au premier tour";

        		} else if (dice1 == 4 & dice2 == 5) {

        			pionEstA = 53;

        			var enCour = document.getElementById("pass");

              enCour.innerHTML = "Joueur1 va directement à la case 53 car il fait un 4 et un 5 au premier tour";

            }

            joueur1++;

              }

        	if (dice1 + dice2 == 6) {

        		pionEstA = 12;

        		var enCour = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va à la case 12 car la somme de ses dés fait 6";

        	}

        	if (pionEstA == 58) {

        		pionEstA = 0;

        		var enCour = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 recommence la partie car il est arrivé sur la case Tête de mort";

        	}

          if (pionEstA == 63) {

        		var sixtytwo = document.getElementById("fullGame");
            sixtytwo.style.display = "none";
            var win1 = document.getElementById("win1");
            win1.style.display = "block";

          }

          if (pionEstA == 42) {
            pionEstA = 30

            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va à la case 30 car il est tombé sur le labyrinthe"

          }

          if (pionEstA == 5) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 9) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 14) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 18) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 23) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 27) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 32) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 36) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 41) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 45) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 50) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 54) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 59) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur1 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 19 & hotel1 == 0) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur1 passera son tour deux fois car il est arrivé à l'hotel";
            hotel1 = hotel1 + 1;
          }
          if (hotel1 == 2) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur1 passe son tour car il est arrivé à l'hotel";
          }
          if (hotel1 == 3) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur1 passe son tour car il est arrivé à l'hotel";
            hotel1 = 0
          }

          if (pionEstA > 63) {
            var trop = pionEstA - 63;
            pionEstA = 63 - trop;
          }

          if (puit1 >= 1) {
              pionEstA = 31;
              }

          if (pionEstA == 31) {
            if (pionEstA == pionEstA2 &  puit1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              puit1 = 0;
            } else if (pionEstA == pionEstA3 & puit1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              puit1 = 0;
            } else if (pionEstA == pionEstA4 & puit1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              puit1 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur1 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé dans le puit";
              puit1 = puit1 + 1;
            } 
          }
          
          if (prison1 >= 1) {
              pionEstA1 = 52;
              }


          if (pionEstA == 52) {
            if (pionEstA == pionEstA2 & prison1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              prison1 = 0;
            } else if (pionEstA == pionEstA3 & prison1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              prison1 = 0;
            } else if (pionEstA == pionEstA4 & prison1 != 0) {
              pionEstA = pionEstA + dice1 + dice2;
              prison1 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur1 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé sur la prison";
              prison1 = prison1 + 1;
            }
          }

          if (pionEstA > 63) {
            var trop = pionEstA - 63;
            pionEstA = 63 - trop;
          }

      } 



      else if (joueur == 3){
        if (pionEstA2 == 19 & hotel2 != 0 & hotel2 <= 3) {
            
            hotel2 = hotel2 + 1;
            pionEstA2 = pionEstA2 - dice1 - dice2;
          }
        pionEstA2 += dice1 + dice2;

        var enCour = document.getElementById("pass");

        enCour.innerHTML = "Joueur2 avance de " + parseInt(dice1 + dice2);

          if (joueur2 == 1) {
            if (dice1 == 6 & dice2 == 3) {

              pionEstA2 = 26;

              var enCour = document.getElementById("pass");

              enCour.innerHTML = "Joueur2 va directement à la case 26 car il a fait un 6 et un 3 au premier tour";

            } else if (dice1 == 4 & dice2 == 5) {

              pionEstA2 = 53;

              var enCour = document.getElementById("pass");

              enCour.innerHTML ="Joueur2 va directement à la case 53 car il a fait un 4 et un 5 au premier tour";

            }


            joueur2++;

          }

          if (dice1 + dice2 == 6) {

            pionEstA2 = 12;

            var enCour = document.getElementById("pass");

              enCour.innerHTML ="Joueur2 va à la case 12 car la somme de ses dés fait 6";

          }

          if (pionEstA2 == 58) {

            pionEstA2 = 0;

            var enCour = document.getElementById("pass");

              enCour.innerHTML ="Joueur2 recommence la partie car il est arrivé sur la case Tête de mort";

          }

          if (pionEstA2 == 63) {

            var sixtytwo = document.getElementById("fullGame");

            sixtytwo.style.display = "none";

            var win1 = document.getElementById("win2");
            win1.style.display = "block";

          }
          if (pionEstA2 == 42) {
            pionEstA2 = 30

            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va à la case 30 car il est tombé sur le labyrinthe"

          }
          if (pionEstA2 == 5) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 9) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 14) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 18) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 23) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 27) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 32) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 36) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 41) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 45) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 50) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 54) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 59) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur2 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA2 == 19 & hotel2 == 0) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur2 passera son tour deux fois car il est arrivé à l'hotel";
            hotel2 = hotel2 + 1;
          }
          if (hotel2 == 2) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur2 passe son tour car il est arrivé à l'hotel";
          }
          if (hotel2 == 3) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur2 passe son tour car il est arrivé à l'hotel";
            hotel2 = 0
          }
          if (pionEstA2 > 63) {
            var trop = pionEstA2 - 63;
            pionEstA2 = 63 - trop;
          }

          if (puit2 >= 1) {
              pionEstA2 = 31;
              }

          if (pionEstA2 == 31) {
            if (pionEstA2 == pionEstA &  puit2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              puit2 = 0;
            } else if (pionEstA2 == pionEstA3 & puit2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              puit2 = 0;
            } else if (pionEstA2 == pionEstA4 & puit2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              puit2 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur2 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé dans le puit";
              puit2 = puit2 + 1;
            } 
          }
          
          if (prison2 >= 1) {
              pionEstA2 = 52;
              }


          if (pionEstA2 == 52) {
            if (pionEstA2 == pionEstA & prison2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              prison2 = 0;
            } else if (pionEstA2 == pionEstA3 & prison2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              prison2 = 0;
            } else if (pionEstA2 == pionEstA4 & prison2 != 0) {
              pionEstA2 = pionEstA2 + dice1 + dice2;
              prison2 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur2 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé sur la prison";
              prison2 = prison2 + 1;
            }
          }

          if (pionEstA2 > 63) {
            var trop = pionEstA2 - 63;
            pionEstA2 = 63 - trop;
          }
          
        } 



          else if (joueur == 4){
            if (pionEstA3 == 19 & hotel3 != 0 & hotel3 <= 3) {
            
            hotel3 = hotel3 + 1;
            pionEstA3 = pionEstA3 - dice1 - dice2;
          }
          pionEstA3 += dice1 + dice2;

          var enCour = document.getElementById("pass");

          enCour.innerHTML = "Joueur3 avance de " + parseInt(dice1 + dice2);


            if (joueur3 == 1) {

              if (dice1 == 6 & dice2 == 3) {

                pionEstA3 = 26;

                var enCour = document.getElementById("pass");

                enCour.innerHTML ="Joueur3 va directement à la case 26 car il a fait un 6 et un 3 au premier tour";

              } else if (dice1 == 4 & dice2 == 5) {

                pionEstA3 = 53;

                var enCour = document.getElementById("pass");

                enCour.innerHTML ="Joueur3 va directement à la case 53 car il a fait un 4 et un 5 au premier tour";

              }

              joueur3++;

            }

            if (dice1 + dice2 == 6) {

              pionEstA3 = 12;

              var enCour = document.getElementById("pass");

                enCour.innerHTML ="Joueur3 va à la case 12 car la somme de ses dés fait 6";

            }

            if (pionEstA3 == 58) {

              pionEstA3 = 0;

              var enCour = document.getElementById("pass");

                enCour.innerHTML ="Joueur3 recommence la partie car il est arrivé sur la case Tête de mort";

            }

            if (pionEstA3 == 63) {

              var sixtytwo = document.getElementById("fullGame");

              sixtytwo.style.display = "none";

            var win1 = document.getElementById("win3");
            win1.style.display = "block";

            }

            if (pionEstA3 == 42) {
            pionEstA3 = 30

            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va à la case 30 car il est tombé sur le labyrinthe"

          }
          if (pionEstA3 == 5) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 9) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 14) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 18) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 23) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 27) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 32) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 36) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 41) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 45) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 50) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 54) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 59) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur3 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA3 == 19 & hotel3 == 0) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur3 passera son tour deux fois car il est arrivé à l'hotel";
            hotel3 = hotel3 + 1;
          }
          if (hotel3 == 2) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur3 passe son tour car il est arrivé à l'hotel";
          }
          if (hotel3 == 3) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur3 passe son tour car il est arrivé à l'hotel";
            hotel3 = 0;
          }
          if (pionEstA3 > 63) {
            var trop = pionEstA3 - 63;
            pionEstA3 = 63 - trop;
          }


          if (puit3 >= 1) {
              pionEstA3 = 31;
              }

          if (pionEstA3 == 31) {
            if (pionEstA3 == pionEstA &  puit3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              puit3 = 0;
            } else if (pionEstA3 == pionEstA2 & puit3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              puit3 = 0;
            } else if (pionEstA3 == pionEstA4 & puit3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              puit3 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur3 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé dans le puit";
              puit3 = puit3 + 1;
            } 
          }
          
          if (prison3 >= 1) {
              pionEstA3 = 52;
              }


          if (pionEstA3 == 52) {
            if (pionEstA3 == pionEstA & prison3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              prison3 = 0;
            } else if (pionEstA3 == pionEstA2 & prison3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              prison3 = 0;
            } else if (pionEstA3 == pionEstA4 & prison3 != 0) {
              pionEstA3 = pionEstA3 + dice1 + dice2;
              prison3 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur3 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé sur la prison";
              prison3 = prison3 + 1;
            }
          }

          if (pionEstA3 > 63) {
            var trop = pionEstA3 - 63;
            pionEstA3 = 63 - trop;
          }

          } 




            else{
              if (pionEstA4 == 19 & hotel4 != 0 & hotel4 <= 3) {
            
            hotel4 = hotel4 + 1;
            pionEstA4 = pionEstA4 - dice1 - dice2;
          }

            pionEstA4 += dice1 + dice2;
            
            

            var enCour = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 avance de " + parseInt(dice1 + dice2);

            

              if (joueur4 == 1) {

                if (dice1 == 6 & dice2 == 3) {

                  pionEstA4 = 26;

                  var enCour = document.getElementById("pass");

                  enCour.innerHTML ="Joueur4 va directement à la case 26 car il a fait un 6 et un 3 au premier tour";

                } else if (dice1 == 4 & dice2 == 5) {

                  pionEstA4 = 53;

                  var enCour = document.getElementById("pass");

                  enCour.innerHTML ="Joueur4 va directement à la case 53 car il a fait un 4 et un 5 au premier tour";

                }

                joueur4++;

              }

              if (dice1 + dice2 == 6) {

                pionEstA4 = 12;

                var enCour = document.getElementById("pass");

                  enCour.innerHTML ="Joueur4 va à la case 12 car la somme de ses dés fait 6";

              }


              if (pionEstA4 == 58) {

                pionEstA4 = 0;

                var enCour = document.getElementById("pass");

                  enCour.innerHTML ="Joueur4 recommence la partie car il êtes arrivé sur la case Tête de mort";

              }

              if (pionEstA4 == 63) {

                var sixtytwo = document.getElementById("fullGame");
                sixtytwo.style.display = "none";
                
            var win1 = document.getElementById("win4");
            win1.style.display = "block";
              }

            if (pionEstA4 == 42) {
            pionEstA4 = 30

            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va à la case 30 car il est tombé sur le labyrinthe"

          }
          if (pionEstA4 == 5) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 9) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA == 14) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 18) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 23) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 27) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 32) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 36) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 41) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 45) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 50) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 54) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 59) {
            joueur = joueur - 1;
            var sixtytwo = document.getElementById("pass");

            enCour.innerHTML = "Joueur4 va rejouer car il est arrivé sur une oie"
          }
          if (pionEstA4 == 19 & hotel4 == 0) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur4 passera son tour deux fois car il est arrivé à l'hotel";
            hotel4 = hotel4 + 1;
          }
          if (hotel4 == 2) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur4 passe son tour car il est arrivé à l'hotel";
          }
          if (hotel4 == 3) {
            var enCour = document.getElementById("pass");
            enCour.innerHTML = "Joueur4 passe son tour car il est arrivé à l'hotel";
            hotel4 = 0
          }
          if (pionEstA4 > 63) {

                var trop = pionEstA4 - 63;

                pionEstA4 = 63 - trop;

              }

              if (puit4 >= 1) {
              pionEstA4 = 31;
              }

          if (pionEstA4 == 31) {
            if (pionEstA4 == pionEstA &  puit4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              puit4 = 0;
            } else if (pionEstA4 == pionEstA2 & puit4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              puit4 = 0;
            } else if (pionEstA4 == pionEstA3 & puit4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              puit4 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur4 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé dans le puit";
              puit4 = puit4 + 1;
            } 
          }


             if (prison4 >= 1) {
              pionEstA4 = 52;
              }


          if (pionEstA4 == 52) {
            if (pionEstA4 == pionEstA & prison4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              prison4 = 0;
            } else if (pionEstA4 == pionEstA2 & prison4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              prison4 = 0;
            } else if (pionEstA4 == pionEstA3 & prison4 != 0) {
              pionEstA4 = pionEstA4 + dice1 + dice2;
              prison4 = 0;
            } else {
              var enCour = document.getElementById("pass");
              enCour.innerHTML = "Joueur4 passe son tour jusqu'a ce que quelqu'un arrive sur la même case que lui car il est tombé sur la prison";
              prison4 = prison4 + 1;
            } 
          }
           if (pionEstA4 > 63) {

                var trop = pionEstA4 - 63;

                pionEstA4 = 63 - trop;

              }
   }

           afficherPions();
}


        