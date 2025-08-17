const perso = document.getElementById("perso");
let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let number3 = document.getElementById("number3")
let plaque1 = document.getElementById("plaque1")
let plaque2 = document.getElementById("plaque2")
let plaque3 = document.getElementById("plaque3")
let numberOne = 0
let numbertwo = 0
let numberthree = 0
let O = "!@#^&*"
let I = ")(_-+=<"
let II = "{[<>]}"
let III = "|/\~;:<"
let IV = '"$%^&"'
let V = ".,?!§±"
let VI = "©®™✓✔✖"
let VII = "€£¥₩₹¤"
let VIII = "¶∆Ωµπ∞"
let IX = "♠♣♥♦♪♫"
let codes = [O, I, II, III, IV, V, VI, VII, VIII, IX];
let object = document.getElementsByClassName("object") 
let cle = document.getElementsByClassName("cle") 
let outil = document.getElementById("case-outil")
let portail = document.getElementById("portail")
let pierre = document.getElementById("pierre")
let codeCacher = document.getElementById("codeCacher")
let texte = document.getElementById("texte")
let code1 = document.getElementById("code1")
let code2 = document.getElementById("code2")
let code3 = document.getElementById("code3")
let jeuEnPause = false;
let chiffre1 = Math.floor(Math.random() * 10);
let chiffre2 = Math.floor(Math.random() * 10);
let chiffre3 = Math.floor(Math.random() * 10);
code1.innerHTML = codes[chiffre1];
code2.innerHTML = codes[chiffre2];
code3.innerHTML = codes[chiffre3];
let messageCounter = 0;
outil.classList.add("vide");
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
    if((numberOne == chiffre1)&&(numbertwo == chiffre2)&&(numberthree == chiffre3)){
        number1.style.color = "green"
        number2.style.color = "green"
        number3.style.color = "green"
    }else{
        number1.style.color = "red"
        number2.style.color = "red"
        number3.style.color = "red"
    }
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
    outil.classList.remove("cle");
}

function lacherOutil(){
    let body = document.getElementById("body")
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




function afficherMessage() {
    messageCounter++;

    // Créer une nouvelle div pour le message
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = `Vous devez avoir le bon code pour aller a l'etage suivant.`;

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
        if(nom == "e"){
            let item = document.getElementsByClassName("item");
            for(let i = 0; i < item.length; i++){
                if(seTouche(perso, plaque1)){
                    numberOne++
                    if(numberOne == 10){
                        numberOne = 0
                    }
                    number1.innerHTML = numberOne
                    // if(numberOne == chiffre1){
                    //     number1.style.color = "green"
                    // }else{
                    //     number1.style.color = "red"
                    // }
                }
                if(seTouche(perso, plaque2)){
                    numbertwo++
                    if(numbertwo == 10){
                        numbertwo = 0
                    }
                    number2.innerHTML = numbertwo
                    // if(numbertwo == chiffre2){
                    //     number2.style.color = "green"
                    // }else{
                    //     number2.style.color = "red"
                    // }
                }
                if(seTouche(perso, plaque3)){
                    numberthree++
                    if(numberthree == 10){
                        numberthree = 0
                    }
                    number3.innerHTML = numberthree
                    // if(numberthree == chiffre3){
                    //     number3.style.color = "green"
                    // }else{
                    //     number3.style.color = "red"
                    // }
                }
                if (seTouche(perso, pierre)) {
                    if (!jeuEnPause) {
                        texte.style.display = "block";
                        codeCacher.style.display = "block";
                        jeuEnPause = true;
                    } else {
                        texte.style.display = "none";
                        codeCacher.style.display = "none";
                        jeuEnPause = false;
                    }
                }
                if(seTouche(perso,portail)){
                    if((numberOne == chiffre1)&&(numbertwo == chiffre2)&&(numberthree == chiffre3)){
                            location.href='../html/etage-3.html'
                    }else{
                        afficherMessage()
                    }
                    if(item[i].classList.contains("cle")){
                        porter("cle");
                        collecter(item[i])
                        outil.classList.remove("vide");
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
document.addEventListener("keydown",
    (event) => {
        let nom = event.key;
        // console.log(event)>
        if(nom == "Escape"){
            
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

