//Noélise et William
    let chargement = sessionStorage.getItem("chargement")

    // L'utilisateur arrive la première fois sur la page
    //si on n'a pas encore eu l'ecran de chargement alors il s'affiche
    if (chargement == null) {
      sessionStorage.setItem("chargement", "oui")
      chargement = "oui"
    }

    function credits() {
      window.location.href = "credits.html";
    }

    function shop() {
      window.location.href = "shop.html";
    }

    function regle() {
      window.location.href = "regle.html";
    }

    // Simuler la barre de chargement
    if (chargement == "oui") {
      let loader = document.getElementById("loader")//afficher le loader
      loader.style.display = "flex"//cibler le loader
      //si on n'a deja eu l'écran de chargement alors ne plus l'afficher
      sessionStorage.setItem("chargement", "non")
      let progressBar = document.getElementById('progress');
      let width = 0;
      let interval = setInterval(function () {
        if (width >= 100) {
          clearInterval(interval);
          document.getElementById('loader').style.display = 'none'; // Cacher le loader
          document.getElementById('content').style.display = 'block'; // Afficher le contenu
        } else {
          width++;
          progressBar.style.width = width + '%'; // Augmenter la largeur de la barre de progression
        }
      }, 30); // La barre de progression se met à jour toutes les 30ms
    }
