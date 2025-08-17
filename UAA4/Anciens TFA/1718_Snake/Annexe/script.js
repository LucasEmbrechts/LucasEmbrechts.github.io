var el = document.getElementById('Recommencer')
function drawBall() {
    ctx.drawImage(Imageserpent,x,y,ballRadius*3,ballRadius*3);
}
function pomme() {
    
    ctx.drawImage(ImagePomme,xPomme,yPomme,pommeRadius*2,pommeRadius*2);
}

function draw() {
    // Efface ce qui est contenu dans le canevas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //dessine le serpent et la pomme
    pomme();
    drawBall();
    

    // Game Over 
    if(x > canvas.width-ballRadius-34 || x < ballRadius -19) {
        dx = 0;
        dy = 0;
        upIsPressed = false;
        leftIsPressed = false;
        rightIsPressed = false;
        downIsPressed = false;
        //Game over!
        el.style.display= "block";
    }
    if(y > canvas.height-ballRadius-34 || y < ballRadius -19) {
        
        dy = 0;
        dx = 0;
        upIsPressed = false;
        leftIsPressed = false;
        rightIsPressed = false;
        downIsPressed = false;
        //Game over!
        el.style.display= "block";
    }

// La vitesse du serpent + l'image qu'il aura dans chaque direction
if(upIsPressed == true ){
    dy = -1 * vitesseSerpent;
    dx = 0 * vitesseSerpent;
    Imageserpent.src = "TeteSnake1.png";
}
if(downIsPressed == true ){
    dy = 1 * vitesseSerpent;
    dx = 0 * vitesseSerpent;
    Imageserpent.src = "TeteSnake3.png";
}
if(leftIsPressed == true){
    dy = 0 * vitesseSerpent;
    dx = -1* vitesseSerpent;
    Imageserpent.src = "TeteSnake2.png";
}
if(rightIsPressed == true){
    dy = 0 * vitesseSerpent;
    dx = 1* vitesseSerpent;
    Imageserpent.src = "TeteSnake.png";

}

    
    // fait avancer la balle      
    x = x + dx;
    y = y + dy;



 //Le serpent peut toucher la pomme
 var scoreboard = document.getElementById('score');
if (x > xPomme-70 && x < xPomme+20  && y > yPomme-70 && y < yPomme+20 ) {
    //La pomme apparait aléatoirement
    xPomme = aleat();
    yPomme = aleat();
    // Les points augmentent
    nb = nb + 1;
    scoreboard.innerHTML = nb + "<img src='trophy.png' width='50px' height='50px' style='margin-left: 10px;'>" ;
    //Augmenter la vitesse
    if (nb==10){
        vitesseSerpent = vitesseSerpent * 1.3;
        el1.style.display = "block";
    }
    if (nb==20){
        vitesseSerpent = vitesseSerpent * 1.3;
        el2.style.display = "block";
        el1.style.display = "none";
    }
    if (nb==30){
        vitesseSerpent = vitesseSerpent * 1.3;
        el3.style.display = "block";
        el2.style.display = "none";
    }
    if (nb==40){
        vitesseSerpent = vitesseSerpent * 1.3;
        el4.style.display = "block";
        el3.style.display = "none";
    }
    if (nb==50){
        vitesseSerpent = vitesseSerpent * 1.4;
        el5.style.display = "block";
        el4.style.display = "none";
    }
    if (nb==60){
        vitesseSerpent = vitesseSerpent * 1.3;
        el6.style.display = "block";
        el5.style.display = "none";
    }
    if (nb==100){
        vitesseSerpent = vitesseSerpent * 1.3;
        el7.style.display = "block";
        el6.style.display = "none";
    }

}
}

// --------------------------------- ON LOAD ----------------------------------------------
// Direction avec les touches du claviers
function keyDownHandler(e){
    if(e.keyCode == 38 && downIsPressed == false){
        upIsPressed = true;
        rightIsPressed = false;
        leftIsPressed = false;
        downIsPressed = false;
    }
    if(e.keyCode == 40 && upIsPressed == false){
        upIsPressed = false;
        rightIsPressed = false;
        leftIsPressed = false;
        downIsPressed = true;
    }
    if(e.keyCode == 37 && rightIsPressed == false){
        upIsPressed = false;
        rightIsPressed = false;
        leftIsPressed = true;
        downIsPressed = false;
    }
    if(e.keyCode == 39 && leftIsPressed == false){
        upIsPressed = false;
        rightIsPressed = true;
        leftIsPressed = false;
        downIsPressed = false;
    }
}

// Initialisations
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var upIsPressed = false;
var rightIsPressed = false;
var leftIsPressed = false;
var downIsPressed = false;

var nb = 0;
var vitesseSerpent = 3;

// Chiffre aléatoire
function aleat(){
    const MIN = 50;
    const MAX = 450;
    var nb = MIN + (MAX-MIN)*Math.random();
    return Math.floor(nb);

}
//
var el1 = document.getElementById("TexteScore1");
var el2 = document.getElementById("TexteScore2");
var el3 = document.getElementById("TexteScore3");
var el4 = document.getElementById("TexteScore4");
var el5 = document.getElementById("TexteScore5");
var el6 = document.getElementById("TexteScore6");
var el7 = document.getElementById("TexteScore7");

//Position de la pomme
var xPomme = canvas.width/2;
var yPomme = canvas.height-400;

//rayon du serpent et de la pomme
var ballRadius = 20;
var pommeRadius = 15;

//Position du serpent
var x = canvas.width/2;
var y = canvas.height-80;

//Vecteurs de direction
var dx = 0;
var dy = 0;

// Lancement Balle
setInterval(draw, 10);



// Ecoute du clavier
document.addEventListener("keydown", keyDownHandler);

//Les images des objets 
var Imageserpent = new Image();
Imageserpent.src = "TeteSnake1.png";
var ImagePomme = new Image();
ImagePomme.src = "Pomme.png";