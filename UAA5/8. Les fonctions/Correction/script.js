let rslt;
let deco;

window.onload = () => {
    rslt = document.getElementById("rslt");
    deco = document.getElementById("decoration");
}

function rechercherImage(theme){
    
	for (let donnee of donnees){
		if (theme === donnee.key){
			return donnee.image;
		}
	}
    

    /*
    // Alternative avec les lambda expressions
    return donnees.find(d => d.key === theme).image;
    */
    

}


function rechercheTxt(theme){
    
	for (let donnee of donnees){
		if (theme == donnee.key){
			return donnee.txt;
		}
	}
    
   
    /*
    // Alternative avec les lambda expressions
    return donnees.find(d => d.key === theme).txt;
    */

}


function afficher(txt, pix){
	rslt.innerHTML = txt; 

	deco.style.backgroundImage = pix;
	deco.style.display = "block";
}


/* Fonction principale */
function selectTheme(motCle){
	let monImage = rechercherImage(motCle);
	console.log(monImage);
	let monTexte = rechercheTxt(motCle); 
	afficher(monTexte, monImage);
}

