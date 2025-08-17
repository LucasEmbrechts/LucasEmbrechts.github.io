var urlMusique = ["mus/lofi.mp3", "mus/lofi2.mp3"];
var audioEl = document.getElementById("myAudio");


//code pour dessiner la cible et définir les limites du canvas pour pas que la cible sorte du cadre.
function draw() {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.drawImage(cible1,x,y,tc,tc);
    x=x+dx;
	y=y+dy;

	if (x >= canvas.width -tc || x <= 0) {
		dx = -dx;
	}
	if (y >= canvas.height -tc|| y <= 0) {

		dy = -dy;
	}	
		
}

//fonction pour faire bouger la cible quand on appuye sur le bouton.
function game(){
   dx = 0 + 1;
   dy = 0 + 1;

   var el = document.getElementById("mycanvas");
   el.style.display ="block";
   document.getElementById("démarer").style.display= "none";

   //Audio
   	audioEl.src = urlMusique[0];
	audioEl.play();
	

}

//code pour pouvoir tirer sur la cible.
function tir(event){
	var tirX; 
	var tirY; 
	var posCanvas = canvas.getBoundingClientRect();

	nbClic = nbClic +1;
	console.log(nbClic);

	//code pour les scores.
	if (nbClic == 40) {

		document.getElementById("gif").style.display = "block";
		document.getElementById("mycanvas").style.display= "none";
		document.getElementById("démarer").style.display ="none";
		document.getElementById("brestart").style.display ="block";

	}

	if (score == 14) {

		document.getElementById("gif1").style.display = "block";
		document.getElementById("mycanvas").style.display = "none";
		document.getElementById("brestart").style.display ="block";
		document.getElementById("démarer").style.display ="none";
	
	}

	if (nbClic == 20) {

		document.getElementById("txt").style.display ="block";
	}
	if (nbClic == 21) {

		document.getElementById("txt").style.display ="none";
	}

	//code pour recupérer les coordonnés des clicks.
    tirX = event.clientX - posCanvas.x ;
	tirY = event.clientY - posCanvas.y ; 
	console.log("tir : " + tirX + " - " + tirY);

	if(tirX > x  &&  tirX < x + tc  &&  tirY > y && tirY < y + tc ){

		score = score +1;
		dx = dx*1.3; 
		dy = dy*1.3;
		console.log("Votre score est de " + score );

	} else {
		console.log("à coté!");
	}
	el.innerHTML = "<div id='score'> <br> SCORE : <br>"  + score + "/15" + "</div>" ;
	
}




// ------------------------------------------------------------------------------
//chargement de la page
//toutes mes variables
var el = document.getElementById("score");
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var cible1 = new Image();
cible1.src = "img/cible.png";
imgPerdu = "img/giphy.webp";
var x = 250;
var y = 250;
var tc = 100;
var dx = 0;
var dy = 0;
var score = 0;
var nbClic = 0;
var alert = ""; 


setInterval(draw, 10);
canvas.addEventListener("click", tir);

/*function start(){

	audioEl.src = urlMusique[noQ];
	audioEl.play();
	noQ+1;

}*/