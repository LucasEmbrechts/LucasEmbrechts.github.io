// la variable nbAleat reçoit le résultat de la fonction aleat()
// Ces deux instructions sont exécutées dès le chargement de la page.
let nbAleat = aleat();  //nbAleat est une variable globale qui pourra être utilisée et modifiée dans toutes les fonctions
let el; // el est une variable globale qui pourra être utilisée comme référence à l'élément HTML qui contient le résultat
let nbr;
console.log(nbAleat);   //Affiche le nombre aléatoire dans la console du navigateur (la console est accessible avec un F12)

/*
	Ce bloc de code est exécuté une fois que la page a été chargée
	càd lorsque tous les éléments HTML ont été intégrés dans le DOM
*/
window.onload = () => {
	el = document.getElementById("myResult")
  nbr = document.getElementById("nombre");

  nbr.addEventListener("keydown",function(event){
    console.log(event);
    keyDown(event,nbr.value);
  })
}

// définition d'une fonction :
// function nomDeLaFonction(paramètre, paramètre){ }
// REM : les fonctions ne sont exécutées que si elles sont apellées.
// REM2 : les variables locales aux fonctions sont créées à chaque appel de la fonction et supprimée dès la fin de l'exécution de la fonction

function testMe(val){

  // Structure conditionnelle
  if (val<nbAleat){
    resp = "C'est plus!"
  }else if (val>nbAleat){
    resp = "C'est moins!"
  }else {
    resp = "victoire! Le nombre a afficher était : " + nbAleat + "<img src='img/hurray.jpg'/>";
  }

  el.innerHTML = resp;
  fadeIn(el);
};

// Fonction d'animation
// La fonction FadeIn simule une réapparition de la div
function fadeIn(el){

  // el (soit element) voit sont style : opacité mis à zéro.
  el.style.opacity = 0;
  // el (soit element) voit sont style : display affecté "block".
  el.style.display = "block";

  // -- Extrait de code simulant une apparation
  // Ce type de syntaxe n'est pas à connaitre
  (function fade() {
    let val = parseFloat(el.style.opacity);
    val = val + 0.01;
    if ( val < 1) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

// Fonction de génération d'un nombre aléatoire. 
function aleat(){
	let nb = 101 * Math.random();
    return Math.floor(nb); 
};

function keyDown(e, val){
  if(e.key === 'Enter'){
    testMe(val);
  }
}