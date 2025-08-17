const perso = document.getElementById("perso");
let trou = document.getElementsByClassName("trou") 
let barreDeChargement = document.getElementsByClassName("barreDeChargement") 
let coffre = document.getElementsByClassName("coffre") 
let object = document.getElementsByClassName("object") 
let outil = document.getElementById("case-outil")
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
    body.removeChild(element)
    
    // + ajouter dans l'inventaire
    
}

function porter(element){
    let body = document.getElementById("body")
    if(outil.classList.contains("epee")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("epee")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        
        
    }
    if(outil.classList.contains("pelle")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("pelle")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        
        
    }
    viderOutils();
    outil.classList.add(element) 
}

function viderOutils(){
    outil.classList.remove("pelle");
    outil.classList.remove("epee");
}

function lacherOutil(){
    let body = document.getElementById("body")
    if(outil.classList.contains("epee")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("epee")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        outil.classList.add("vide");
    }
    if(outil.classList.contains("pelle")){
        let newdiv = document.createElement("div")
        body.appendChild(newdiv)
        newdiv.classList.add("item")
        newdiv.classList.add("pelle")
        newdiv.style.left = positionX  +"px"
        newdiv.style.top = (positionY + elementHeight ) +"px" 
        outil.classList.add("vide");
    }
}
function creuser(){
    for(let i = 0; i < trou.length; i++){
        if(seTouche(perso,trou[i])){
            if(outil.classList.contains("pelle")){
                trou[i].classList.add("coffre")
                let l = trou[i].getBoundingClientRect().left
                let t = trou[i].getBoundingClientRect().top
                trou[i].classList.remove("trou")
                coffre[i].style.left = l + "px"
                coffre[i].style.top = t + "px"
                
                
                
                // for(let i = 0; i < barreDeChargement.length; i++){
                //     barreDeChargement[i].style.display = "block"
                
                // }
            }
        }
    }  
}

function ouvrir(){
    for(let i = 0; i < coffre.length; i++){
        if(seTouche(perso,coffre[i])){
            if(outil.classList.contains("vide")){
                coffre[i].style.backgroundImage = "url(../source/img/coffre4.png)"
                coffre[i].style.height = "40px"
                coffre[i].style.width = "40px"
            }
        }
    }
}
document.addEventListener("keydown",
    (event) => {
        let nom = event.key;
        // console.log(event)>
        if(nom == "e"){
            let items = document.getElementsByClassName("item");
            for(let i = 0; i < items.length; i++){
                if(seTouche(perso, items[i])){
                    if(items[i].classList.contains("epee")){
                        porter("epee");
                        collecter(items[i])
                        outil.classList.remove("vide");
                    }else{
                        if(items[i].classList.contains("pelle")){
                            porter("pelle");
                            collecter(items[i])
                            outil.classList.remove("vide");    
                        }else{
                            if(items[i].classList.contains("portail")){
                                location.href='../html/etage-1.html'
                            }
                        }
                    }
                }
                creuser()
                ouvrir()
                
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

