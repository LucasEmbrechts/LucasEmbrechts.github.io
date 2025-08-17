//entierement codé par ilegems ferre et Basil Gengler
//2023 - 4TTr - Projet X
//début du code de Basil Gengler

//le chrono
let minutes = 0;
let seconds = 0;
let intervalId;

setInterval(updateChronometer, 1000);

function updateChronometer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  
    let chrono = document.getElementById('chrono');
    chrono.innerHTML = minutes + ":" + seconds
  }
  
//detecte une touche appuyer et la renvoy vers une fonction
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
/*document.addEventListener("keydown", keyDowntir);
document.addEventListener("keyup", keyUptir);
var depavant;
var laser=new Image();
laser.src ="../sources/laser.png";
var tir ={
    posx:0,
    posy:0,
}
function keyDowntir(e){
  if(e.keyCode == 32) {//fleche gauche
        depavant = true;
            }  
}
function keyUptir(e){
  if(e.keyCode == 32) {//fleche gauche
        depavant = false;
            }  
}*/
//fin du code de Basil Gengler
//début du code de Ferre Ilegems
//déclarer les variables "let",
let fctOne = false//pour dire qu'elle sont fausses
let fctTwo = false
let fctThree = false
let fctFour = false
let fctFive = false
let fctHandler = true
let collision = false;

//déclarer les variables des vies
let viesMax; 
let vies; 


//fonction pour regarder le nombre de vies en fonction de l'image
function checkVies() {
    if(localStorage.getItem("imgVaisseau") === '../sources/bleu_v1.png'){
        vies = 1; 
        viesMax = 1;
    }else if(localStorage.getItem("imgVaisseau") === '../sources/bleu_v2.png'){
        vies = 2; 
        viesMax = 2; 
    }else if(localStorage.getItem("imgVaisseau") === '../sources/bleu_v3.png'){
        vies = 3; 
        viesMax = 3; 
    }else if(localStorage.getItem("imgVaisseau") === '../sources/bleu_v4.png'){
        vies = 4;
        viesMax = 4; 
    }else if(localStorage.getItem("imgVaisseau") === '../sources/bleu_v5.png'){
        vies = 5;
        viesMax = 5; 
    }
}

//déclarer les variables "var",
var fleche=new Image();

if(localStorage.getItem("imgVaisseau") == null){//si il n'y a pas de d'image de vaisseau dans le localStorage ,
    console.log("FIIIIIRST!!");
    localStorage.setItem("imgVaisseau","../sources/bleu_v1.png")
}
fleche.src = "../sources/brouette.png"//et mettre l'image du localStorage comme image 

checkVies();
//regarder le vies

//fin du code de Ferre Ilegems

//début du code de Basil Gengler
var brique=new Image();
brique.src="../sources/brique.png";

//brique.style.background-size="cover";

var c = document.getElementById("mon_canvas");
var ctx= c.getContext("2d");
//intevale dune fonction pour le score
var countscore = setInterval(stellars, 1000);
//var de la souris
var positionX = 500;
var positionY = 650;

//var de la brique
var briqueX = 200; // briques["brique1"]["posx"]
var briqueY = 150; // briques["brique1"]["posy"]
var taillebriqueX =50; //briques["brique1"]["dx"]
var taillebriqueY = 50; //briques["brique1"]["dy"]

var vitesseY=1;
var nbobstacle=7;
/*var lasery=510;*/
setInterval(obstacle, 10000);
//ajouter des obstacles
function obstacle(){
    if(nbobstacle!=31){
    nbobstacle=nbobstacle+1;
    }
    vitesseY=vitesseY+1;
    
}
//tableau contenant toutes les briques
var briques = {
    "brique1" :{
            "posx" : 0,
            "posy" : 0,
            "dx"  : 1, 
            "dy" :vitesseY, 
            "delai" : 0, 
    }, 
    "brique2" :{
        "posx" : 500,
        "posy" : -100,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique3" :{
        "posx" : 500,
        "posy" : -2000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique4" :{
        "posx" : 500,
        "posy" : -30000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique5" :{
        "posx" : 500,
        "posy" : -4000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique6" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique7" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique8" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique9" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    },
    "brique10" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    },
    "brique11" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    },
    "brique12" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique13" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique14" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique15" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique16" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique17" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique18" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique19" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique20" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique21" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique22" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique23" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique24" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique25" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    } ,
    "brique26" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    }    ,
    "brique27" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    }    ,
    "brique28" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    }    ,
    "brique29" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    }    ,
    "brique30" :{
        "posx" : 500,
        "posy" : -5000,
        "dx"  : 1, 
        "dy" : vitesseY, 
        "delai" : 100, 
    }       
    

}

//var pour les listeners
var depGauche; 
var depDroite;

setInterval(draw, 10);//lancer la fonction automatiquement toute les 10 milisecondes

//creer et deplacer fleche
function draw(){
    ctx.clearRect(0,0, c.clientWidth, c.height);

    if(depDroite){
        deplacementDroite(); 
    }; 
    if(depGauche){
        deplacementGauche(); 
    }
    /*if (depavant) {
        deplacementAvant();
    }*/
    
    //dessiner la fleche
    ctx.drawImage(fleche, positionX, 600, 80, 80);//(objet, positionX, positionY, tailleX, TailleY)
    //dessine toutes les briques
    for(var i=1;i<nbobstacle;i++){
    ctx.drawImage(brique, briques["brique"+i]["posx"],
     briques["brique"+i]["posy"],
      taillebriqueX, taillebriqueY);//(objet, positionX, positionY, tailleX, TailleY)
   
   
    avancer() 
       //hit box  
    if( briques["brique"+i]["posx"] < positionX + 70 &&
        briques["brique"+i]["posx"] > positionX - 50 &&
        briques["brique"+i]["posy"] < positionY + 10 &&
        briques["brique"+i]["posy"] > positionY - 80){
            //fin du code de basil gengler

            //debut du code de Ferre Ilegems
            let barreVie = document.getElementById("healthBarTwo"); 

            //petit bout de code de basil
            //change de manière aleatoire les brique en x + y en 100
            briques["brique"+i]["posx"]=Math.floor(Math.random() * 1900);
            briques["brique"+i]["posy"]=100;
            //fin du petit bout en question

            //diminuer la vie
            vies = vies -1; 
            console.log( vies + "/" + viesMax);//facultatif mais pour afficher les vies dans la console
            
            
            if (vies < 0) {//condition si les vies sonts inferieures a 0,
                barreVie.style.width = "0%";//la largeur de la div se met a 0% (donc est invisible)

                window.location.href = "../html/mort.html"; //on renvoie l'utilisateur vers le menu 
               

            }else{//sinon
                //dessiner la barre de vie; 
                let sizebarre = Math.round(vies * 100/viesMax);
                barreVie.style.width = sizebarre + "%"
            } 
    }
    //fin du code de Ferre Ilegems
    //debut du code de Basil Gengler
/*
 //hit box laser
 if( briques["brique"+i]["posx"] < positionX + 50 &&
        briques["brique"+i]["posx"] > positionX - 50 &&
        briques["brique"+i]["posy"] < lasery + 10 &&
        briques["brique"+i]["posy"] > lasery - 20){
    briques["brique"+i]["posy"]=0;
    briques["brique"+i]["posx"]=2000;

 }*/
}
}
/*
function deplacementAvant(){
ctx.drawImage(laser, positionX+40, lasery, 10, 80);//(objet, positionX, positionY, tailleX, TailleY)
 lasery=lasery-15
 if (lasery===0){
    lasery=510
 }

}*/

//change la position en x de la fleche
function deplacementGauche() {
    if(positionX!=3){
        positionX=positionX - 7
    }
}

function deplacementDroite() {
    if (positionX!=1830){
        positionX = positionX + 7
    }
}
//detecte si la touche fleche est enfoncé
function keyDownHandler(e) {
    if(e.keyCode == 37) {//fleche gauche
        depGauche = true;
    }

    if(e.keyCode == 39){//fleche droite
        depDroite = true;    
    }
}
//detecte si la touche fleche est relaché
function keyUpHandler(e) {
    if(e.keyCode == 37) {//fleche gauche
        depGauche = false;
    }

    if(e.keyCode == 39){//fleche droite
        depDroite = false;    
    }
}

function avancer() {
    //deplacement brique +reset si besoin
    for(var i=1;i<nbobstacle;i++){
   
    un=Math.floor(Math.random() * 1900);
   
   if (briques["brique"+i]["posy"] <800 && briques["brique"+i]["posx"] < 1900){
    // la brique est toujours dans le cannevas
    briques["brique"+i]["posy"] = briques["brique"+i]["posy"]+ briques["brique"+i]["dy"];
    }
    else{
        // la brique est sortie du canevas
        briques["brique"+i]["posx"]=un;
        briques["brique"+i]["posy"]=1;
       // taillebriqueX =50;
       // taillebriqueY =50 ;
       
    }  
}
}
//petit bout de code de ferre ilegems
//Retour au menu principal 
function menu() {
    document.getElementById("button_menu");
    window.location.href = "../html/menu.html";//chercher la page et y aller   
}
//fin du petit bout de code de Ferre 
//Augmente les points du shop à chaque seconde de jeu
function stellars() {
   
    let ajout;
    if(localStorage.getItem("points")!=null){
    ajout=parseInt(localStorage.getItem("points"));
    }
    else{
        ajout=0;
    }
    localStorage.setItem("points", 1 +ajout);
 
    let nombre = document.getElementById("number");
    nombre.innerHTML ="                 "+ localStorage.getItem("points")+"       sr";   
}