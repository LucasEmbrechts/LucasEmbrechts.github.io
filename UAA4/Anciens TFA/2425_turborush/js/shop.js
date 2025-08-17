//william 
    let currentIndex = 0;//position de la voiture ou je regarde
 
    let voitures=["sources/img/R.png","sources/img/blanc.png","sources/img/police.png","sources/img/img.png","sources/img/d.png"]
    let voituresPerso = ["sources/img/rouge.png","sources/img/blancc.png","sources/img/police22.png","sources/img/orange.png","sources/img/voiture.png"]
    dessinervoiture()
function dessinervoiture(){
  let voiture=document.getElementById("voiture") 
  voiture.style.backgroundImage="url("+voitures[currentIndex]+")"
  localStorage.setItem("voiture",voituresPerso[currentIndex])//enregistrer dans le local
}
   
    function nextCar() {
      // Si on est à la dernière voiture, revenir à la première
      currentIndex = currentIndex + 1
      if(currentIndex==5){
        currentIndex=0
      }
      dessinervoiture()
    }

    function prevCar() {
      // Si on est à la première voiture, revenir à la dernière
      currentIndex = currentIndex - 1
      if(currentIndex==-1){
        currentIndex=4
      }
     dessinervoiture()
    }

   
      
    function menu() {
      window.location.href = "index.html";  
    }
    
    function GAME() {
      window.location.href = "jeu.html";
    }

    document.addEventListener('keydown', (event) => {
    let touche = event.key;
    if(touche == "ArrowLeft"){
     prevCar()
      
    }
    if(touche == "ArrowRight"){
      nextCar()
      
    }

});

  