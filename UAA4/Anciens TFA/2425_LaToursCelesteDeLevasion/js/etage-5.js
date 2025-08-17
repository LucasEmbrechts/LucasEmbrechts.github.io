const perso = document.getElementById("perso");
let object = document.getElementsByClassName("object") 
let lumen = document.getElementsByClassName("lumen") 
let cle = document.getElementsByClassName("cle")  
let mob = document.getElementsByClassName("mob")  
let outil = document.getElementById("case-outil")
let zone = document.getElementById("zone")
let vie = document.getElementById("vie")
let torche = document.getElementById("torche")
let messageCounter = 0;
let nbrvie = 3
let invincible = false
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
let positionsMobs = [
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : 8, "directionY" : 8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1, "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : -8, "directionY" : 8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : 8, "directionY" : -8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : -8, "directionY" : -8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : -8, "directionY" : 8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : 8, "directionY" : -8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : -8, "directionY" : 8
    },
    {
        "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : 8, "directionY" : -8
    },
    // {
    //     "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : 8, "directionY" : 8
    // },
    // {
    //     "posX" :  Math.floor(Math.random() * 900) + 1 , "posY" : Math.floor(Math.random() * 500) + 1, "directionX" : -10, "directionY" : 10
    // },
    // {
    //     "posX" :  Math.floor(Math.random() * 1400) + 1 , "posY" : Math.floor(Math.random() * 899) + 1, "directionX" : 10, "directionY" : 10
    // },
]

requestAnimationFrame(moveMobs)
afficherVie()

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

    
    for (let i = 0; i < mob.length; i++) {
        if(seTouche(perso,mob[i])){
            console.log("se touche")
        }
        
    }
    
    for (let i = 0; i < mob.length; i++) {
        if(seTouche(perso,mob[i])){
            if(!invincible){
                nbrvie -= 1
                invincible = true
                afficherVie()
                setTimeout(()=>{
                    invincible = false
                }, 500)
            }
        }
    }

    if(nbrvie == 0){
        location.reload();
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
function drawMob(){
    zone.innerHTML = ""
    for (let i = 0; i < positionsMobs.length; i++) {
        let newdiv = document.createElement("div")
        zone.appendChild(newdiv)
        newdiv.classList.add("mob")
        newdiv.style.transform = "translate("+ positionsMobs[i].posX +"px , "+ positionsMobs[i].posY + "px)"

        
    }
}

function moveMobs(){
    for (let i = 0; i < positionsMobs.length; i++) {
        /*
        let mouvementX = Math.floor(Math.random() * 2);
        let mouvementY = Math.floor(Math.random() * 2);
        if(mouvementX == 0 ){
            positionsMobs[i].posX -=5
        }else{
            positionsMobs[i].posX +=5
        }
        if(mouvementY == 0 ){
            positionsMobs[i].posY -=5
        }else{
            positionsMobs[i].posY +=5
        }
        */
       if(positionsMobs[i].posX + positionsMobs[i].directionX > 900){
            positionsMobs[i].directionX *= -1
       }
       if(positionsMobs[i].posY + positionsMobs[i].directionY > 500){
            positionsMobs[i].directionY *= -1
       }
       if(positionsMobs[i].posX + positionsMobs[i].directionX < 0){
            positionsMobs[i].directionX *= -1
       }
       if(positionsMobs[i].posY + positionsMobs[i].directionY < 0){
            positionsMobs[i].directionY *= -1
       }
        positionsMobs[i].posX += positionsMobs[i].directionX
        positionsMobs[i].posY += positionsMobs[i].directionY

    }
    let elemMob = document.getElementsByClassName("mob")
    for (let i = 0; i < elemMob.length; i++) {
        elemMob[i].style.transform = "translate("+ positionsMobs[i].posX +"px , "+ positionsMobs[i].posY + "px)"
    }
    requestAnimationFrame(moveMobs)

}






function afficherMessage() {
    messageCounter++;
    
    // Créer une nouvelle div pour le message
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = `Vous devez posséder la clé pour accéder à cet étage.`;
    
    // Ajouter la nouvelle div dans le conteneur
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.appendChild(newMessage);
    
    // Laisser le temps à l'élément d'apparaître
    setTimeout(function () {
        // Commencer la disparition du message après 5 secondes
        newMessage.style.opacity = 0; // Faire disparaître progressivement
    }, 5000); // Attendre 5 secondes avant de commencer à faire disparaître le message
    
    // Supprimer le message après la disparition complète (quand l'opacité est 0)
    setTimeout(function () {
        messagesContainer.removeChild(newMessage);
    }, 6000); // Supprimer après 6 secondes pour donner le temps à la transition d'opacité
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
                            location.href='../html/fin.html'
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

drawMob() 

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
