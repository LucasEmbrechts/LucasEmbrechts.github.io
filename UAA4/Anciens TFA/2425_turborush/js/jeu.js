    let cases = document.getElementById("cases")
    let score = 0
    let vitessePoints = 1000
    let posXVoiture = 800;
    let allerADroite = false;
    let allerAGauche = false;
    let partiedemarree=false;
    let vitesse = 10
    let voiture = document.getElementById("voiture")
    let continuerAnimation = true
    let pausee = document.getElementById("pause")
    let bandes = document.getElementsByClassName("route");
    let bandes2 = document.getElementsByClassName("routee");
    //william
    voiture.style.transform = "translateX(" + posXVoiture + "px)";
    voiture.src=localStorage.getItem("voiture")

    function demarrage(){
     if(partiedemarree==false){
  
      setInterval(ajoutpoint, vitessePoints);
      setInterval(augmentervitesse, 4000)
      dessinerennemis()
      requestAnimationFrame(bouger)
      requestAnimationFrame(descennemis)
      for(let i = 0; i < bandes.length; i++){
        bandes[i].classList.remove("paused")
      }
      for(let i = 0; i < bandes2.length; i++){
        bandes2[i].classList.remove("paused")
      }
      partiedemarree=true
    }
    }
	//Noélise
    let ennemis = [
      {
        "image": "sources/img/caillou.png",
        "posDepartX": 500,
        "width": 122,
        "height": 106,
        "posDepartY": -1000,
        "perCoeur": 1

      },
      {
        "image": "sources/img/cone.png",
        "posDepartX": 1250,
        "width": 70.4,
        "height": 71.6,
        "posDepartY": -400,
        "perCoeur": 2
      },
      {
        "image": "sources/img/mort.png",
        "posDepartX": 800,
        "width": 82,
        "height": 182,
        "posDepartY": -200,
        "perCoeur": 1
      }

    ]


    function menu() {
      window.location.href = "index.html"
    }

    function droite() {
      posXVoiture += 10
      voiture.style.transform = "translateX(" + posXVoiture + "px)";
    }
    function gauche() {
      posXVoiture -= 10
      voiture.style.transform = "translateX(" + posXVoiture + "px)";
    }

    document.addEventListener('keydown', (event) => {
      let touche = event.key;

      if (touche == "ArrowLeft") {
        allerAGauche = true;
      }
      if (touche == "ArrowRight") {
        allerADroite = true;
      }

    });

    document.addEventListener('keyup', (event) => {
      let touche = event.key;

      if (touche == "ArrowLeft") {
        allerAGauche = false;
      }
      if (touche == "ArrowRight") {
        allerADroite = false;
      }

    });

    function dessinerennemis() {
      cases.innerHTML = "";
      for (let i = 0; i < ennemis.length; i++) {
        cases.innerHTML += "<div class='case' style='background-image: url( " + ennemis[i].image + ");height:" + ennemis[i].height + "px;width:" + ennemis[i].width + "px;'></div>"
      }
    }
    //William et Noélise
    function bouger() {
      if (allerAGauche) {

        // IF posXVoiture est > ...
        if (posXVoiture > 430) {
          gauche();
        }
      }
      if (allerADroite) {
        if (posXVoiture < 1280) {
          droite();
        }
      }

      let elems = document.getElementsByClassName("case")
      for (let i = 0; i < ennemis.length; i++) {
        if (seTouche(elems[i], voiture)) {
          ennemis[i].posDepartY = Math.floor(Math.random() * -1200) + -200
          ennemis[i].posDepartX = Math.floor(Math.random() * 900) + 390
          coeurrr(ennemis[i].perCoeur)
        }
      }
      if (continuerAnimation == true) {
        requestAnimationFrame(bouger);
      }
    }

    function descennemis() {
      let ennemisElem = document.getElementsByClassName("case")
      for (let i = 0; i < ennemisElem.length; i++) {
        //       voiture.style.transform = "translateX(" + posXVoiture + "px)";
        ennemis[i].posDepartY += vitesse
        if (ennemis[i].posDepartY > 1200) {
          ennemis[i].posDepartY = Math.floor(Math.random() * -1200) + -200
          ennemis[i].posDepartX = Math.floor(Math.random() * 900) + 390
        }
        ennemisElem[i].style.transform = "translate(" + ennemis[i].posDepartX + "px," + ennemis[i].posDepartY + "px)";
      }

      if (continuerAnimation == true) {
        requestAnimationFrame(descennemis)
      }

    }
    function augmentervitesse() {
      if (continuerAnimation == true) {
        vitesse = vitesse + 1
        vitessePoints = vitessePoints + 100
      }
    }
    //Noélise
    let coeu = 5;
    desscoeur();
    let parent = document.getElementById("coeur");
    function coeurrr(nbvie) {
      coeu = coeu - nbvie;
      desscoeur();
         //william
      if (coeu <= 0) {
        let meilleur=localStorage.getItem("meilleur")
        if(score>meilleur){
          localStorage.setItem("meilleur",score)
        }
        
        window.location.href = "mort.html"
        
      }
      }
    
    function seTouche(element1, element2) {
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();
      if (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      ) {

        return true;
      } else {
        return false;
      }
    }

    function desscoeur() {
      //william knebeuuuuuuuuuuuuuuuuu
      coeur.innerHTML = "";
      for (let cot = 0; cot < coeu; cot++) {

        coeur.innerHTML += "<img src ='sources/img/coeurr.png' class='coeurs'>"
      }
    }

    //william knebeuuu
    function ajoutpoint() {
      let s = document.getElementById("score")
      if (continuerAnimation == true) {
        score = score + 1
      }
      s.innerHTML = score
    }
    //Noélise
    function pause() {
      let bandes = document.getElementsByClassName("route");
      let bandes2 = document.getElementsByClassName("routee");
      if (continuerAnimation == true) {
        continuerAnimation = false;
        pausee.innerHTML = "Play";
        for(let i = 0; i < bandes.length; i++){
          bandes[i].classList.add("paused")
        }
        for(let i = 0; i < bandes2.length; i++){
          bandes2[i].classList.add("paused")
        }

      } else {
        continuerAnimation = true;
        requestAnimationFrame(descennemis)
        requestAnimationFrame(bouger);
        pausee.innerHTML = "Pause";
        for(let i = 0; i < bandes.length; i++){
          bandes[i].classList.remove("paused")
        }
        for(let i = 0; i < bandes2.length; i++){
          bandes2[i].classList.remove("paused")
        }
      }
    }

    document.addEventListener('keydown', (event) => {
      let touche = event.code;
      if (touche == "Space") {
        pause()
      }
      if(touche=="ArrowUp"){
        demarrage()

      }
 
    });