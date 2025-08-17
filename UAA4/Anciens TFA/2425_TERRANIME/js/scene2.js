//Ryan De Roeck
let numeroTuile = 0;

window.onload = function() {
  Crafty.init(1920, 1080, document.getElementById('game'));

  // Récupérer la position du joueur et les objets cassés depuis localStorage
  let joueurPosition = JSON.parse(localStorage.getItem("joueurPosition"));
  let objetsCasses = JSON.parse(localStorage.getItem("objetsCasses"));

  // Créer le joueur et le positionner à la position sauvegardée
  let joueur = Crafty.e('2D, DOM, Image, Twoway, Gravity, Jumper, Collision')
    .attr({
      x: joueurPosition ? joueurPosition.x : 0, // Utiliser la position sauvegardée, sinon (0,0) par défaut
      y: joueurPosition ? joueurPosition.y : 0,
      w: 50,
      h: 50
    })
    .image('perso_droite.png')
    .twoway(400)
    .gravity('Solid');

  // === Création des Pierres ===
  let post = 250;
  let poss = 200;
  for (let index = 0; index < 5; index++) {
    let roche = Crafty.e('Pierre, 2D, DOM, Image, Gravity, Collision, Solid, Mouse')
      .attr({ x: post, y: poss, w: 50, h: 26.13 })
      .image('rock.png')
      .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
      .gravity('Solid');

    // Si des objets ont été cassés, les retirer de l'environnement
    if (objetsCasses) {
      objetsCasses.forEach(function(objet) {
        if (roche.x === objet.x && roche.y === objet.y) {
          roche.destroy(); // Supprimer la pierre cassée
        }
      });
    }

    post += 400;
  }

  // === Création des Arbres ===
  let postt = 100;
  let posss = 100;
  for (let i = 0; i < 3; i++) {
    let arbre = Crafty.e('tree, 2D, DOM, Image, Gravity, Collision, Solid, Mouse')
      .attr({ x: postt, y: posss, w: 135, h: 150 })
      .image('tree.png')
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
      joueur.image("perso_gauche.png");
    } else if (e.key === Crafty.keys.RIGHT_ARROW) {
      joueur.image("perso_droite.png");
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
    if ((hitDatas = joueur.hit('Pierre'))) {
      hitData = hitDatas[0];
      console.log("Collision avec :", hitData.obj);
    }
  });

  // === Sol (Tiles) ===
  for (let numElem = 0; numElem < game[numeroTuile].length; numElem++) {
    Crafty.e('Sol, 2D, DOM, Image, Solid')
      .attr({
        x: game[numeroTuile][numElem].posLeft,
        y: game[numeroTuile][numElem].posTop,
        w: 50,
        h: 50
      })
      .image(game[numeroTuile][numElem].image);
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

    let btnCasser = document.createElement('button');
    btnCasser.textContent = 'Casser ' + type;
    btnCasser.style.cursor = 'pointer';
    btnCasser.style.width = '100%';

    btnCasser.onclick = function() {
      objet.destroy(); // Supprimer l'objet Crafty
      console.log(type + ' cassé !');
      supprimerMenu();
    };

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
  document.addEventListener('click', function(e) {
    let menu = document.getElementById('menu-action');
    if (menu && !menu.contains(e.target)) {
      menu.remove();
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

    // Sauvegarder les objets cassés (exemple ici, une liste des objets cassés)
    let objetsCasses = [];
    Crafty("Pierre").each(function() {
      if (!this.has('Solid')) {
        objetsCasses.push({ x: this.x, y: this.y }); // Ajouter l'objet détruit
      }
    });

    localStorage.setItem("objetsCasses", JSON.stringify(objetsCasses));

    // Rediriger vers une autre page
    window.location.href = "monde2.html"; // Exemple de redirection
  }

};
