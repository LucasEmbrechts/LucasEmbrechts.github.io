
let notes = [72,50,54,82,40,75,56,91,88,74];
dessinTableau();

function dessinTableau(){
	let tableauNotes = document.getElementById("tableauNotes");
	tableauNotes.innerHTML = "";
	for(let noteIndex = 0; noteIndex < notes.length; noteIndex++){
		let noteHTML = document.createElement("div");
		noteHTML.classList.add("case");
		noteHTML.innerText = notes[noteIndex];
		tableauNotes.appendChild(noteHTML);
	}
}


//---------------------------------------------
//------Fonction pour le calcul du total-------
//---------------------------------------------
function fctTotal(){
	let rsltTotal = document.getElementById("rsltTotal");
	rsltTotal.innerHTML = calculerTotal();
};

function calculerTotal(){
	let total = 0;
	for(let note of notes){
		total += note;
	}
	/* Solution équivalente :
		for(let i = 0; i < notes.length; i++){
			total += notes[i];
		}
	*/
	return total;
}


//--------------------------------------------------
//------Fonction pour le calcul de la moyenne-------
//--------------------------------------------------
function fctMoyenne(){
	let rsltMoyenne = document.getElementById("rsltMoyenne");
	let total = calculerTotal(); 
	let moyenne = total/notes.length;

	//.toFixed(2) permet d'arrondir à 2 chiffres après la virgule
	rsltMoyenne.innerHTML = moyenne.toFixed(2);


	//Affichage de la couleur
	if (moyenne<50){
		rsltMoyenne.style.backgroundColor = "#ad0000";
	}else if(moyenne<=60){
		rsltMoyenne.style.backgroundColor = "#ff8800";
	}else{
		rsltMoyenne.style.backgroundColor = "#6db719";
	}
	rsltMoyenne.style.color = "#fff";
};


//-----------------------------------------------
//------Fonction pour le calcul du maximum-------
//-----------------------------------------------
function fctMaximum () {
	let rsltMaximum = document.getElementById("rsltMaximum");
	let maximum = 0;
	
	for(let note of notes){
		if (maximum < note){
			maximum = note;
		}
	}
	/* Solution équivalente :
	for(let i = 0; i < notes.length; i++){
		if (maximum < notes[i]){
			maximum = notes[i];
		}
	}
	*/

	rsltMaximum.innerHTML = maximum;
};


//-----------------------------------------------
//------Fonction pour le calcul du minimum-------
//-----------------------------------------------
function fctMinimum() {
	let rsltMinimum = document.getElementById("rsltMinimum");
	let minimum = notes[0];
	
	for(let note of notes){
		if (minimum > note){
			minimum = note;
		}
	}

	rsltMinimum.innerHTML = minimum;
};



//--------------------------------------------------------------
//------Fonction pour ajouter un élément dans le tableau -------
//--------------------------------------------------------------
function fctAjouter(){
	let note = document.getElementById("insertion").value;
	if(!isNaN(parseInt(note))){
		if(note >= 0 && note <= 100){
			//Ajout d'un élément dans le tableau. 
			//Attention : parseInt pour s'assurer que l'on insère un entier dans le tableau
			
			notes.push(parseInt(note));
			dessinTableau();
		} else {
			alert("Veuillez indiquer une note entre 0 et 100")
		}
	}
}
