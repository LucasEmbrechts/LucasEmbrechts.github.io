      //Noélise
	  function menu() {
            window.location.href = "index.html"
        }
        function jeu() {
            window.location.href = "jeu.html"
        }
           // (getitem) obtenir quelque chose du local storage
       let meilleur=localStorage.getItem("meilleur")
      
      let scor=document.getElementById("scor")
      scor.innerHTML=meilleur