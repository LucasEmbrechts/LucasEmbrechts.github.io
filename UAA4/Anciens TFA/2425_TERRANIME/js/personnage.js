//RYAN DE ROECK 
let numeroTuile = 0;
let inventaire = JSON.parse(localStorage.getItem("inventaire"));
let quantité= JSON.parse(localStorage.getItem("quantité"))
if(inventaire == null){
  inventaire = [];
}
if (quantité == null){
  quantité = []
}


window.onload = function() {
  
  
  Crafty.init(1920, 1080, document.getElementById('game'));
  
  let joueur = Crafty.e('2D, DOM, Image, Twoway, Gravity, Jumper, Collision')
  .attr({ x: 0, y: 0, w: 50, h: 50 })
  .image('../sources/img/perso_droite.png')
  
  .twoway(400)
  .gravity('Solid');
  
  let BOB = Crafty.e('2D, DOM, Image, Gravity, Collision')
  .attr({ x: 300, y: 0, w: 60, h: 60 })
  .image('../sources/img/BOB.png')
  .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
  .gravity('Solid');
  
  let pablo = Crafty.e('PNJ,2D, DOM, Image, Gravity, Collision,Mouse')
  .attr({ x: 1790, y: 0, w: 60, h: 60 })
  .image('../sources/img/pablo.png')
  .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
  .gravity('Solid');
  pablo.bind("MouseDown", function(e) {
    if (e.mouseButton === Crafty.mouseButtons.RIGHT) {
      afficherMenu(e.realX, e.realY, pablo, "PNJ");
    }
  });
  let dejaTue = false; // flag global
  joueur.onHit('PNJ', function(hitData) {
    if (dejaTue) return;
  
    let indexSecret = inventaire.indexOf("../sources/img/secret.png");
    localStorage.clear()
    if (indexSecret === -1) {
      dejaTue = true;
      alert("Pablo vous a tué car vous n'avez pas l'épée secrete !");
      setTimeout(() => {
        window.location.reload();
      }, 100); // léger délai pour éviter relancement immédiat
    } else {
      alert("Vous avez tué Pablo avec votre épée secret !BRAVO!");
      hitData[0].obj.destroy(); // supprimer Pablo
      setTimeout(() => {
        window.location.reload();
        localStorage.clear()
      }, 1000); // léger délai pour éviter relancement immédiat
      
    }
  });
  
  
  
  // === Création des Pierres ===
  let post = 250;
  let poss = 200;
  for (let index = 0; index < 5; index++) {
    let roche = Crafty.e('Pierre, 2D, DOM, Image, Gravity, Collision, Solid, Mouse')
    .attr({ x: post, y: poss, w: 50, h: 26.13 })
    .image('../sources/img/rock.png')
    .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
    .gravity('Solid');
    
    // Clique droit sur la roche
    roche.bind("MouseDown", function(e) {
      if (e.mouseButton === Crafty.mouseButtons.RIGHT) {
        afficherMenu(e.realX, e.realY, roche, "Pierre");
      }
    });
    
    post += 400;
  }
  
  // === Création des Arbres ===
  let postt = 100;
  let posss = 100;
  for (let i = 0; i < 3; i++) {
    let arbre = Crafty.e('tree, 2D, DOM, Image, Gravity, Collision, Solid, Mouse')
    .attr({ x: postt, y: posss, w: 135, h: 150 })
    .image('../sources/img/tree.png')
    .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
    .gravity('Solid');
    
    // Clique droit sur l'arbre
    arbre.bind("MouseDown", function(e) {
      if (e.mouseButton === Crafty.mouseButtons.RIGHT) {
        afficherMenu(e.realX, e.realY, arbre, "Arbre");
      }
    });
    
    postt += 300;
  }
  
  // === Configuration du joueur ===
  joueur.jumper(300, ['UP_ARROW']);
  joueur.jumper(['UP_ARROW']); // doublon possible ici mais respecté
  
  joueur.bind("KeyDown", function(e) {
    if (e.key === Crafty.keys.LEFT_ARROW) {
      joueur.image("../sources/img/perso_gauche.png");
    } else if (e.key === Crafty.keys.RIGHT_ARROW) {
      joueur.image("../sources/img/perso_droite.png");
    }
  });
  joueur.bind("Move", function(evt) {
    // Vérifier si le côté droit du personnage touche le bord droit de l'écran
    if (joueur.x + joueur.w > Crafty.viewport.width) {
      // Le personnage a atteint le côté droit de l'écran, on le redirige vers un autre monde (ou une autre page)
      redirigerVersAutreMonde();
    }
  });
  
  joueur.bind("Move", function(evt) {
    var hitDatas, hitData;
    if ((hitDatas = this.hit('tree'))) {
      hitData = hitDatas[0];
      if (hitData.type === 'SAT') {
        this.x -= hitData.overlap * hitData.nx;
        this.y -= hitData.overlap * hitData.ny;
      }
    }
  });
  
  // === Sol (Tiles) ===
  for (let numElem = 0; numElem < game[numeroTuile].length; numElem++) {
    let bloc = Crafty.e('Sol, 2D, DOM, Image, Solid, Mouse')
    bloc.attr({
      x: game[numeroTuile][numElem].posLeft,
      y: game[numeroTuile][numElem].posTop,
      w: 50,
      h: 50
    })
    bloc.image(game[numeroTuile][numElem].image);
    bloc.bind("MouseDown", function(e) {
      if (e.mouseButton === Crafty.mouseButtons.RIGHT) {
        afficherMenu(e.realX, e.realY, bloc,game[numeroTuile][numElem].type );
      }
    });
  }
  
  // ========= MENU CONTEXTUEL ==========
  function afficherMenu(x, y, objet, type) {
    supprimerMenu();
    
    let menu = document.createElement('div');
    menu.id = 'menu-action';
    menu.style.position = 'absolute';
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.style.backgroundColor = 'rgba(0,0,0,0.9)';
    menu.style.color = 'white';
    menu.style.padding = '10px';
    menu.style.borderRadius = '5px';
    menu.style.zIndex = 9999;
    menu.style.minWidth = '100px';
    menu.style.padding='10px';
    
    let btnCasser = document.createElement('button');
    btnCasser.style.cursor = 'pointer';
    btnCasser.style.width = '100%';
    
    
    if(type == "P" || type == "Pierre" || type == "Arbre"){
      btnCasser.textContent = 'Casser ' + type;
      btnCasser.onclick = function() {
        let index = inventaire.indexOf(objet.__image)
        if(index== -1){
          inventaire.push(objet.__image); // Ajouter l'objet détruit
          quantité.push(1)
        }else{
          quantité[index]=quantité[index]+1
        }
        
        
        
        localStorage.setItem("inventaire", JSON.stringify(inventaire));
        localStorage.setItem("quantité",JSON.stringify(quantité));
        objet.destroy(); // Supprimer l'objet Crafty
        console.log(type + ' cassé !');
        supprimerMenu();
        
      };
    }else{
      if(type == "PNJ"){

        btnCasser.textContent = 'Parler ';

        btnCasser.onclick = function() {
          let mechant = document.createElement('div');
          mechant.id = 'texte';
          mechant.style.position = 'absolute';
          mechant.style.left = '1500px';
          mechant.style.top = '500px';
          mechant.style.width = '200px';
          mechant.style.height = '100px';
          mechant.style.backgroundColor = 'rgba(0,0,0,0.9)';
          mechant.style.color = 'white';
          mechant.style.padding = '10px';
          mechant.style.borderRadius = '5px';
          mechant.style.zIndex = 9999;
          mechant.style.minWidth = '100px';
          mechant.style.cursor = 'pointer';
          
          // Tableau de phrases
          let phrases = [
            "Votre route s'arrête ici.",
            "Faites demi-tour… ou périssez.",
            "Pas un pas de plus, vermine !"
          ];
          
          // Choix aléatoire d'une phrase
          let phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];
          mechant.innerHTML = phraseAleatoire;
          
          // Ajout à la page
          document.body.appendChild(mechant);
          
          // Supprimer après 3 secondes (3000 ms)
          setTimeout(() => {
            mechant.remove();
          }, 2500);
          
          supprimerMenu();


      }
    }
    
  }
    
    
    
    menu.appendChild(btnCasser);
    document.body.appendChild(menu);
    
    
    
  }
  
  function supprimerMenu() {
    let oldMenu = document.getElementById('menu-action');
    if (oldMenu) {
      oldMenu.remove();
    }
  }
  
  // Fermeture du menu si on clique ailleurs
  document.addEventListener('keydown', function(e) {
    if(e.key === "Escape"){
      let menu = document.getElementById('menu-action');
      if (menu && !menu.contains(e.target)) {
        menu.remove();
      }
    }
    
  });  
  
  // Bloquer le menu contextuel natif navigateur
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  function redirigerVersAutreMonde() {
    // Sauvegarder la position du joueur dans localStorage
    localStorage.setItem("joueurPosition", JSON.stringify({
      x: joueur.x,
      y: joueur.y
    }));
    
    
    
    
    // Rediriger vers une autre page
   // window.location.href = "monde2.html"; // Exemple de redirection
  }
  
};

/*
const fallingDiv = document.getElementsByClassName('falling')[0];
const element = document.getElementsByClassName("moving")[0]
const grounds = document.getElementsByClassName('ground');
let velocity = 0;
const gravity = 0.5; // Force de gravité
const containerHeight = document.getElementById('container').offsetHeight;
let positionLeft = 100;
let positionTop = 100;
const step = 5;
const keys = { ArrowRight: false, ArrowLeft: false, ArrowUp: false, ArrowDown: false };


function applyGravity() {
const divRect = fallingDiv.getBoundingClientRect();
for(let i = 0; i < grounds.length; i++) {
const groundRect = grounds[i].getBoundingClientRect();

if (divRect.bottom < groundRect.top) {
// L'objet est encore en train de tomber
velocity += gravity; // Augmenter la vitesse avec la gravité
fallingDiv.style.top = ${fallingDiv.offsetTop + velocity}px;
} else {
// Collision détectée : arrêter la chute
fallingDiv.style.top = ${groundRect.top - divRect.height - grounds[i].offsetParent.offsetTop}px;
velocity = 0;
break;
}
}

requestAnimationFrame(applyGravity);
}


function moveElement() {
if (keys.ArrowRight == true) positionLeft += step;
if (keys.ArrowLeft) positionLeft -= step;
if (keys.ArrowUp) positionTop -= step;
if (keys.ArrowDown) positionTop += step;
element.style.left = positionLeft + "px";
//element.style.top = positionTop + "px";
requestAnimationFrame(moveElement);
}

document.addEventListener("keydown", (event) => {
  if (keys.hasOwnProperty(event.key)) {
keys[event.key] = true;
}
});

document.addEventListener("keyup", (event) => {
  if (keys.hasOwnProperty(event.key)) {
keys[event.key] = false;
}
});

requestAnimationFrame(moveElement);
requestAnimationFrame(applyGravity);
*/