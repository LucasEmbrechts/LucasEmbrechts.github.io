const perso = document.getElementById("perso");
let trou = document.getElementsByClassName("trou") 
let barreDeChargement = document.getElementsByClassName("barreDeChargement") 
let coffre = document.getElementsByClassName("coffre") 
let object = document.getElementsByClassName("object") 
let trouCoffre = document.getElementsByClassName("trouCoffre") 
let cle = document.getElementsByClassName("cle") 
let outil = document.getElementById("case-outil")
let messageCounter = 0;
let jeuEnPause = false;
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
    if (jeuEnPause) {
        requestAnimationFrame(move);
        return; // Ne rien faire si le jeu est en pause
    }

    if (movingLeft && !isCollidingWithObject('left')) {
        if (positionX - step > 0) {
            positionX -= step;
        }
    }
    if (movingRight && !isCollidingWithObject('right')) {
        if (positionX + elementWidth + step < containerWidth) {
            positionX += step;
        }
    }
    if (movingUp && !isCollidingWithObject('up')) {
        if (positionY - step + elementHeight > 0) {
            positionY -= step;
        }
    }
    if (movingDown && !isCollidingWithObject('down')) {
        if (positionY + 2 * elementHeight + step < containerHeight) {
            positionY += step;
        }
    }

    perso.style.transform = `translate(${positionX}px,${positionY}px)`;

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
    outil.classList.remove("pelle");
    outil.classList.remove("epee");
    outil.classList.remove("cle");
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
function creuser(){
    for(let i = 0; i < trou.length; i++){
        if(seTouche(perso, trou[i])){
            if(outil.classList.contains("pelle")){
                jeuEnPause = true; // Le jeu se met en pause quand tu creuses

                const barre = document.getElementById("barreDeChargement");
                barre.style.display = "block";

                setTimeout(() => {
                    trou[i].classList.add("coffre");
                    trou[i].classList.remove("trou");

                    barre.style.display = "none"; // Cache la barre de chargement
                    jeuEnPause = false; // Le jeu reprend
                }, 2000); // Durée de creusage
            }
        }
    }  
}

function ouvrir(){
    let cle1 = document.getElementById("cle1")
    for(let i = 0; i < coffre.length; i++){
        if(seTouche(perso,coffre[i])){
            if(outil.classList.contains("vide")){
                coffre[i].classList.add("coffreOuvert")
                if(seTouche(perso,trouCoffre[emplacementCle])){
                    cle1.style.display = "block"
                }
                // setTimeout(() => {
                //     cle1.style.display = "none"
                // }, 1)
                
            }else{
               afficherMessage1() 
            }
        }
    }
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
function afficherMessage1() {
    messageCounter++;

    // Créer une nouvelle div pour le message
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = `votre inventaire doit etre vide(Touche "a")`;

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

// Crée un tableau représentant le coffre avec 15 emplacements
let coffreAlleatoir = Array(15).fill('vide');

// Choisit un emplacement aléatoire pour la clé
let emplacementCle = Math.floor(Math.random() * 15);

// Mets la clé à cet emplacement
coffreAlleatoir[emplacementCle] = 'cle.jpg';

// Récupère le body pour y ajouter les div
let body = document.body;

// Crée et ajoute les div au body
for (let i = 0; i < coffreAlleatoir.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = `trouCoffre${i}`;  // Ajoute un ID unique à chaque div
    newDiv.classList.add("trou")
    newDiv.classList.add("trouCoffre")

    // Si c'est l'emplacement de la clé, on ajoute l'image de la clé
    if (coffreAlleatoir[i] === 'cle.jpg') {
        let img = document.createElement("div");
        img.classList.add("item")
        img.classList.add("cle")
        img.id = ("cle1")
        newDiv.appendChild(img);  // Ajoute l'image dans la div
    }

    // Ajoute la div au body
    body.appendChild(newDiv);
}


document.addEventListener("keydown", (event) => {
    if (event.key === "e") {
        let item = document.getElementsByClassName("item");
        for (let i = 0; i < item.length; i++) {
            if (seTouche(perso, item[i])) {
                if (item[i].classList.contains("epee")) {
                    porter("epee");
                    collecter(item[i]);
                    outil.classList.remove("vide");
                } else if (item[i].classList.contains("pelle")) {
                    porter("pelle");
                    collecter(item[i]);
                    outil.classList.remove("vide");
                } else if (item[i].classList.contains("portail")) {
                    if (outil.classList.contains("cle")) {
                        location.href = '../html/etage-2.html';
                    } else {
                        afficherMessage();
                    }
                } else if (item[i].classList.contains("cle")) {
                    porter("cle");
                    collecter(item[i]);
                    outil.classList.remove("vide");
                }
            }
        }

        // Appelle creuser() sans setTimeout ici
        creuser(); 
        ouvrir();
    }
});

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

