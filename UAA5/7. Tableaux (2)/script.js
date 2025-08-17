let tableauNotes;
let rsltCompte;

const notes = [15,20,5,12,10,7,0,20,18,14]; 

window.onload = () => {
	tableauNotes = document.getElementById("tableauNotes");
	rsltCompte = document.getElementById("rsltCompte");;

	dessinTableau();
}

function dessinTableau(){
	tableauNotes.innerHTML = "";

	for(let noteIndex in notes){
		const noteHTML = document.createElement("div");
		noteHTML.classList.add("case");
		noteHTML.id = `note${noteIndex}`;
		noteHTML.innerText = notes[noteIndex];
		if (notes[noteIndex] >= 12){
			noteHTML.classList.add("bleue");
		} else {
			noteHTML.classList.add("rouge");
		}

		tableauNotes.appendChild(noteHTML);
	}
}


//---------------------------------------------
//------Fonction pour le calcul du total-------
//---------------------------------------------
function fctCompte(){

	let nb = 0; 
	
	for(let note of notes){
		if (note >= 12){
			nb ++;
		}
	}

	rsltCompte.innerText = nb;

	/*
	// Alternative : utiliser les lambda expression

	rsltCompte.innerText = notes.filter(note => note >= 12).length;

	*/

};


//--------------------------------------------------------------
//------Fonction pour ajouter un élément dans le tableau -------
//--------------------------------------------------------------
function fctAjouter(note){

	if(note >= 0 && note <= 100){
		//Ajout d'un élément dans le tableau. 
		//Attention : parseInt pour s'assurer que l'on insère un entier dans le tableau
		notes.push(parseInt(note));
		dessinTableau();
	} else {
		alert("Veuillez indiquer une note entre 0 et 100")
	}
}