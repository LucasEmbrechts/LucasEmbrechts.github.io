//Noélise
   let cmb = 0
    let tab = [
      "1. Lorsqu'on heurte un obstacle, on perd de la vie. Cependant, la perte de vie varie en fonction de l'objet avec lequel on entre en contact.",
      "2. Chaque voiture commence avec 3 vies.",
      "3. Chaque fois que la voiture percute un obstacle, elle perd de la vie.",
      "4. La perte de vie varie en fonction de l'objet touché (un mur fait perdre 3 vies ,une voiture 2 vies ,un cône 1 vie )",
      "5. Différents types d’obstacles apparaissent sur la route (roches, véhicules, arbres, cône, mur, etc...).",
      "6. Certains obstacles peuvent être plus difficiles à éviter que d'autres car il y a des objets qui occupent plus de place que d'autres et font perdre plus de vie que d'autres.",
      "7. Plus vous avancez dans le jeu, plus les obstacles deviennent nombreux et difficiles à esquiver. ",
      "8. À chaque niveau(4 niveaux),la vitesse de la voiture augmente progressivement.",
      "9. Le score augmente à mesure que vous parcourez la route sans percuter d'obstacles.",
      "10. Lorsqu'il ne reste plus de vie, le jeu est terminé et le joueur doit recommencer depuis le début.",
      "11. La partie se termine quand la voiture arrive a la fin et que c’est marqué terminé ou quand la voiture a perdu toutes ses vies."
    ];

    function menu() {
      window.location.href = "index.html"
    }
    function change() {
      cmb = cmb + 1
      if (cmb >= tab.length) {
        cmb = 0
      }
      document.getElementById("regle").innerHTML = tab[cmb];
    }