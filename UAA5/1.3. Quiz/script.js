function truc(rslt){
	var el = document.getElementById("reponses");
	//Remplace le code html de cette div!
	
	if (rslt == "perdu"){
		el.innerHTML = "Vous avez perdu!<br><img src=\"img/alf-cat-sandwhich.jpg\">";
	} else {
		el.innerHTML = "Vous avez gagné!<br><img src=\"img/giphy.gif\">";	
	}
}