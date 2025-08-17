let nbVies;

let spaceGame;
let spaceButtons;
let spaceOrigin;

let perso;
let barreDeVie;
let mechant;

window.onload = () => {
	spaceGame = document.getElementById("spaceGame");
	spaceButtons = document.getElementById("spaceButtons");
	spaceOrigin = document.getElementById("spaceOrigin");
	perso = document.getElementById("perso");
	barreDeVie = document.getElementById("barreDeVie");
	mechant = document.getElementById("mechant");
}

function generateLife(nbr){
	if(nbr > 15 || nbr < 1){
		if(nbr > 15){
			alert("Mario ne peut pas avoir plus de 15 vies");
		}
		else {
			alert("Sois sympa, donne au moins une vie à Mario !");
		}
	} else {
		reinitialiser();
		nbVies = nbr;
		perso.style.width = "100px";
		perso.innerHTML = '<img id="mario" src="img/mario.png">';
		perso.style.bottom = "40px";
	
		for (let i=0; i<nbr; i++){
			ajouterVie();
		}
		mechant.style.display = "block";
	}
}

function displayDecors(){
	spaceGame.style.display = "block";
	spaceGame.style.border = "6px solid red";
	spaceButtons.style.display = "block";
	spaceOrigin.style.display = "none";
}

function ajouterVie(){
	let img = document.createElement("img");
	img.classList.add("heart");
	img.src = "img/heart.png";
	barreDeVie.appendChild(img);
}

function retirerVie(){
	barreDeVie.removeChild(barreDeVie.lastChild);
}

function tuer(){
	perso.innerHTML = '<img id="mario" src="img/dead.png">';
	perso.style.width = "140px";
	perso.style.bottom = "30px";

	barreDeVie.innerHTML = "You're dead!";
}

function toucheMechant(){
	if (nbVies>0){
		nbVies = nbVies - 1;
		retirerVie();
	}

	if (nbVies == 0){
		tuer();
	}
}

function reinitialiser(){
	barreDeVie.innerHTML = "";
}