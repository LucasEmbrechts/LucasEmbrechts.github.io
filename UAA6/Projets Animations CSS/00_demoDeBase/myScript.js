function monAnimation(){
	/* selection de l'élément animable*/
	var elem = document.getElementById("balle");
	
	/* attribut CSS à animer */
	var opac = 1;
	
	/* déclartation de la fonction d'animation */
	/* et lancement de l'animation toutes les 5ms jusqu'à son auto-arrêt*/ 
	var id = setInterval(disappear, 5);
	function disappear(){
		/* If / CAS pour faire arrêter l'animation */
		/* quand opac arrive à zero */
		if (opac == 0){
			clearInterval(id);
		/* Animation de la div */ 
		} else {
			opac = opac - 0.001;
			elem.style.opacity = opac;
		}
	}

	/* disparition du bouton */
	var elem2 = document.getElementById("buttonOpac");
	elem2.style.display = "none"; 

}