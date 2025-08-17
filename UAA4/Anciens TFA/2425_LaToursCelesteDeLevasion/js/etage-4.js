const perso = document.getElementById("perso");
let object = document.getElementsByClassName("object") 
let lumen = document.getElementsByClassName("lumen") 
let cle = document.getElementsByClassName("cle") 
let p = document.getElementsByClassName("p") 
let outil = document.getElementById("case-outil")
let torche = document.getElementById("torche")
let vie = document.getElementById("vie")
let messageCounter = 0;
let nbrvie = 1
afficherVie()
const rows = 5;
const cols = 11;
const totalP = 10;
const black = document.getElementById("black");
outil.classList.add("vide");
let elementPorte 
let positionX = 0;
let positionY = 480;
const step = 5;
let movingLeft = false;
let movingRight = false;
let movingUp = false; 
let movingDown = false ;
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;
const elementWidth = perso.offsetWidth;
const elementHeight = perso.offsetHeight;


function move() {
    if (movingLeft &&  !isCollidingWithObject('left')) {
        if(positionX - step > 0){
            positionX -= step;
        }
    }
    if (movingRight &&  !isCollidingWithObject('right')) {
        if(positionX + elementWidth + step < containerWidth){
            positionX += step;
        }
        
        
    }
    if (movingUp &&  !isCollidingWithObject('up')) {
        if(positionY - step + elementHeight > 0){
            positionY -= step;
        }
    }
    if (movingDown &&  !isCollidingWithObject('down')) {
        if(positionY + 2*elementHeight+ step < containerHeight){
            positionY += step;
        }
    }
    perso.style.transform = `translate(${positionX}px,${positionY}px)`;
    if (outil.classList.contains("lumen")) {
        let centerX = positionX + elementWidth  - 50 / 2;
        let centerY = positionY + elementHeight + 90 / 2;
        black.style.setProperty("--x", `${centerX}px`);
        black.style.setProperty("--y", `${centerY}px`);
        black.style.display = "block";
        black.classList.add("light-on");
        
    } else {
        // Sinon, écran totalement noir
        black.classList.remove("light-on");
        
        //black.style.background = "rgba(0, 0, 0, 0.95)";
    }
    
    for (let i = 0; i < p.length; i++) {
        if (seTouche(perso, p[i])) {
            location.reload();
        }
    }
    
    // Faire une boucle
    // if(seTouche(perso, epee)){
    //     info.style.display = "block"
    // }else{
    //     info.style.display = "none"
    // }
    
    requestAnimationFrame(move);
}

document.addEventListener("keydown", function (event) {
    
    if (event.key === "ArrowLeft") {
        movingLeft = true;
    } else if (event.key === "ArrowRight") {
        movingRight = true;
    } else if (event.key === "ArrowUp") {
        movingUp = true;
    } else if (event.key === "ArrowDown") {
        movingDown = true;
    }
    if (event.key === "q") {
        movingLeft = true;
    } else if (event.key === "d") {
        movingRight = true;
    } else if (event.key === "z") {
        movingUp = true;
    } else if (event.key === "s") {
        movingDown = true;
    }
    
    
    
    
});

document.addEventListener("keyup", function (event) {
    
    if (event.key === "ArrowLeft") {
        movingLeft = false;
    } else if (event.key === "ArrowRight") {
        movingRight = false;
    }else if (event.key === "ArrowUp") {
        movingUp = false;
    } else if (event.key === "ArrowDown") {
        movingDown = false;
    }
    
    if (event.key === "q") {
        movingLeft = false;
    } else if (event.key === "d") {
        movingRight = false;
    }else if (event.key === "z") {
        movingUp = false;
    } else if (event.key === "s") {
        movingDown = false;
    }
    
    
});

requestAnimationFrame(move);

function seTouche (element1, element2) {
    const rect1 = element1.getBoundingClientRect(); 
    const rect2 = element2.getBoundingClientRect();
    if ( 
        rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x && 
        rect1.y < rect2.y + rect2.height && 
        rect1.y + rect1.height > rect2.y 
    ) { 
        return true;
    } else { 
        return false;
    } 
}

function isCollidingWithObject(direction) {
    for (let i = 0; i < object.length; i++) {
        let objRect = object[i].getBoundingClientRect();
        let persoRect = perso.getBoundingClientRect();
        
        if (direction === 'left' && persoRect.left - step < objRect.right && persoRect.right > objRect.left && persoRect.bottom > objRect.top && persoRect.top < objRect.bottom) {
            return true;
        }
        if (direction === 'right' && persoRect.right + step > objRect.left && persoRect.left < objRect.right && persoRect.bottom > objRect.top && persoRect.top < objRect.bottom) {
            return true;
        }
        if (direction === 'up' && persoRect.top - step < objRect.bottom && persoRect.bottom > objRect.top && persoRect.right > objRect.left && persoRect.left < objRect.right) {
            return true;
        }
        if (direction === 'down' && persoRect.bottom + step > objRect.top && persoRect.top < objRect.bottom && persoRect.right > objRect.left && persoRect.left < objRect.right) {
            return true;
        }
    }
    return false;
}


function collecter(element){
    element.parentElement.removeChild(element)
    
    // + ajouter dans l'inventaire
    
}

function porter(element){
    let body = document.getElementById("body")
    if(outil.classList.contains("lumen")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("lumen")
        newdiv.classList.add("torche")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        
        
    }
    if(outil.classList.contains("cle")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("cle")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        
        
    }
    viderOutils();
    outil.classList.add(element) 
}

function viderOutils(){
    outil.classList.remove("lumen");
    outil.classList.remove("cle");
}

function lacherOutil(){
    let body = document.getElementById("body")
    if(outil.classList.contains("lumen")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("lumen")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        outil.classList.add("vide");
    }
    if(outil.classList.contains("cle")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("cle")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        outil.classList.add("vide");
    }
}
















function afficherVie(){
    vie.innerHTML = ""
    for (let i = 0; i < nbrvie ; i++) {
        let newdiv = document.createElement("div")
        newdiv.classList.add("coeur")
        vie.appendChild(newdiv)
    }
    

}




















// Créer un tableau rempli de "s"
let tableau = Array.from({ length: rows }, () => Array(cols).fill('s'));

function estZoneLibre(r, c) {
    // Vérifie que la case et son entourage sont libres
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                if (tableau[nr][nc] === 'p') {
                    return false;
                }
            }
        }
    }
    return true;
}

// Placer aléatoirement 10 "p" avec au moins une case de séparation
let placedP = 0;
let essais = 0; // sécurité pour éviter boucle infinie
while (placedP < totalP && essais < 1000) {
    let randRow = Math.floor(Math.random() * rows);
    let randCol = Math.floor(Math.random() * cols);
    if (tableau[randRow][randCol] === 's' && estZoneLibre(randRow, randCol)) {
        tableau[randRow][randCol] = 'p';
        placedP++;
    }
    essais++;
}

if (placedP < totalP) {
    location.reload();
}

// Afficher le tableau en HTML avec les classes correspondantes
const container = document.getElementById('tableau');

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let div = document.createElement('div');
        div.className = tableau[row][col];
        container.appendChild(div);
    }
}


document.addEventListener("keydown",
    (event) => {
        let nom = event.key;
        // console.log(event)>
        if(nom == "e"){
            let item = document.getElementsByClassName("item");
            for(let i = 0; i < item.length; i++){
                if(seTouche(perso, item[i])){
                    if(item[i].classList.contains("lumen")){
                        porter("lumen");
                        collecter(item[i])
                        outil.classList.remove("vide");
                    }
                    if(seTouche(perso,portail)){
                        location.href='../html/etage-5.html'
                    }else{
                        if(item[i].classList.contains("cle")){
                            porter("cle");
                            collecter(item[i])
                            outil.classList.remove("vide");
                        }
                        
                        
                    }
                }  
            }
            
        }
    }
)

document.addEventListener("keydown",
    (event) => {
        let nom = event.key;
        // console.log(event)>
        if(nom == "a"){
            lacherOutil()
            viderOutils()
        }
    }
)

let jeuEnPause = false;
let menu = document.getElementById("menu");

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!jeuEnPause) {
            menu.style.display = "flex";
            jeuEnPause = true;
        } else {
            menu.style.display = "none";
            jeuEnPause = false;
        }
    }
});