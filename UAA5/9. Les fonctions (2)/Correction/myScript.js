let rslt;
let coloredSquare;

window.onload = () => {
	rslt = document.getElementById("rslt");
	coloredSquare = document.getElementById("ColoredSquare");
}

function toRVB(c, m, j, n){
	const rouge = Math.round(255 * (1-c/100) *(1-n/100));
	const vert = Math.round(255 * (1-m/100) * (1-n/100));
	const bleu = Math.round(255 * (1-j/100) * (1-n/100));
	const formattedRed = ("0" + rouge.toString(16)).slice(-2);
	const formattedGreen = ("0" + vert.toString(16)).slice(-2);
	const formattedBlue = ("0" + bleu.toString(16)).slice(-2);
	const rvbHexa = formattedRed + formattedGreen + formattedBlue;
	console.log(rvbHexa);
	//-------------------------------
	return rvbHexa;
}

function displayRslt(rvb){
	rslt.innerHTML = "#"+ rvb;
	coloredSquare.style.backgroundColor = "#" + rvb;
}

function check(valeur, couleur){
	if (valeur > 100 || valeur < 0){
		let el = document.getElementById(couleur); 
		el.style.borderColor = "red";
		return false;
	} else {
		let el = document.getElementById(couleur); 
		el.style.borderColor = "black";
		return true;
	}
}

function convert(cyan, magenta, jaune, noir){
	if(
		check(cyan, "cyan") &&
		check(magenta, "magenta") &&
		check(jaune, "jaune") &&
		check(noir, "noir")){
		let valeurRVB = toRVB(cyan, magenta, jaune, noir); 
		displayRslt(valeurRVB);
	} else {
		alert("Veuillez introduire une valeur entre 0 et 100");
	}
}