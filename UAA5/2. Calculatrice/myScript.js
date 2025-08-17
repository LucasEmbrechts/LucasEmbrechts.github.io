/*
'PI' et 'element' sont des variables globales
càd qu'elles sont accessibles partout dans le code
*/
const PI = 3.1415;
let element;

/*
	Ce bloc de code est exécuté une fois que la page a été chargée
	càd lorsque tous les éléments HTML ont été intégrés dans le DOM
*/
window.onload = () => {
	element = document.getElementById("myResult");
}

function addition(op1, op2) {
	let resultat = Number(op1) +  Number(op2);
	console.log(resultat);
	element.innerHTML = op1 + " + " + op2 + " = " + resultat;
}

function soustraction(op1, op2) {
	let resultat = op1 - op2;
	console.log(resultat);
	element.innerHTML = op1 + " - " + op2 + " = " + resultat;
}

function multiplication(op1, op2) {
	let resultat = op1 * op2;
	console.log(resultat);
	element.innerHTML = op1 + " * " + op2 + " = " + resultat;
}

function division(op1, op2) {
	let resultat = op1 / op2;
	console.log(resultat);
	element.innerHTML = op1 + " / " + op2 + " = " + resultat;
}

function aireCercle(op1) {
	let resultat = PI * op1 * op1;
	element.innerHTML = "L'aire d'un cercle de rayon " + op1 + "  est de: " + resultat;
}

function perimetreCercle(op1) {
	let resultat = 2 * PI * op1;
	element.innerHTML = "Le périmètre d'un cercle de rayon " + op1 + "  est de: " + resultat;
}

function comparaison(op1, op2) {
	if (op1 < op2) {
		element.innerHTML = `${op1} est plus petit que ${op2}`;
	} else {
		if (op1 > op2) {
			// Utilisation du "string interpolation" : la valeur des variables sont directement intégrées dans la chaine de caractère
			element.innerHTML = `${op1} est plus grand que ${op2}`; 
		} else {
			element.innerHTML = `${op1} est égal à ${op2}`;
		}
	}
}

function parite(op1){
	// Utilisation de la forme raccourcie du "if-else" 
	element.innerHTML = (op1 % 2 === 0) ? `${op1} est pair` : `${op1} est impair`
}

function ajouterNombre(nb,op){
	op.value += nb;
}
