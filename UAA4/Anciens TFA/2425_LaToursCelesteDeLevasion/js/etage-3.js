const perso = document.getElementById("perso");
let object = document.getElementsByClassName("object")
let boite = document.getElementsByClassName("boite")
let outil = document.getElementById("case-outil")
let zone = document.getElementById("zone1")
outil.classList.add("vide");
let elementPorte 
let positionX = 0;
let positionY = 385;
const step = 5;
let movingLeft = false;
let movingRight = false;
let movingUp = false; 
let movingDown = false ;
let x1;
let x2;
let x3;
let x4;
let jeuEnPause = false;
let menu = document.getElementById("menu");
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;
const elementWidth = perso.offsetWidth;
const elementHeight = perso.offsetHeight;
let touche1 = ["ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]
let touche2 = ["z","q","s","d"]





setInterval(() => {
    // Stopper tous les mouvements en cours car les touches changent
    movingLeft = false;
    movingRight = false;
    movingUp = false;
    movingDown = false;

    x1 = getRandomExcludingList(0, 3, []);
    console.log("x1:", x1);

    x2 = getRandomExcludingList(0, 3, [x1]);
    console.log("x2:", x2);

    x3 = getRandomExcludingList(0, 3, [x1, x2]);
    console.log("x3:", x3);

    x4 = getRandomExcludingList(0, 3, [x1, x2, x3]);
    console.log("x4:", x4);
}, 3000);

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
    
    
    // Faire une boucle
    // if(seTouche(perso, epee)){
    //     info.style.display = "block"
    // }else{
    //     info.style.display = "none"
    // }

    // for (let i = 0; i < boite.length; i++) {
    //     if (seTouche(perso, boite[i])) {
    //         location.reload();
            
    //     }
    // }
    
    requestAnimationFrame(move);
}

document.addEventListener("keydown", function (event) {
    
    if (event.key === touche1[x1]) {
        movingLeft = true;
    } else if (event.key === touche1[x2]) {
        movingRight = true;
    } else if (event.key === touche1[x3]) {
        movingUp = true;
    } else if (event.key === touche1[x4]) {
        movingDown = true;
    }
    if (event.key === touche2[x1]) {
        movingLeft = true;
    } else if (event.key === touche2[x2]) {
        movingRight = true;
    } else if (event.key === touche2[x3]) {
        movingUp = true;
    } else if (event.key === touche2[x4]) {
        movingDown = true;
    }
    // if (event.key === "q") {
    //     movingLeft = true;
    // } else if (event.key === "d") {
    //     movingRight = true;
    // } else if (event.key === "z") {
    //     movingUp = true;
    // } else if (event.key === "s") {
    //     movingDown = true;
    // }
    
    
    
    
});

document.addEventListener("keyup", function (event) {
    
    if (event.key === touche1[x1]) {
        movingLeft = false;
    } else if (event.key === touche1[x2]) {
        movingRight = false;
    }else if (event.key === touche1[x3]) {
        movingUp = false;
    } else if (event.key === touche1[x4]) {
        movingDown = false;
    }
    
    if (event.key === touche2[x1]) {
        movingLeft = false;
    } else if (event.key === touche2[x2]) {
        movingRight = false;
    }else if (event.key === touche2[x3]) {
        movingUp = false;
    } else if (event.key === touche2[x4]) {
        movingDown = false;
    }
    // if (event.key === "q") {
    //     movingLeft = false;
    // } else if (event.key === "d") {
    //     movingRight = false;
    // }else if (event.key === "z") {
    //     movingUp = false;
    // } else if (event.key === "s") {
    //     movingDown = false;
    // }
    
    
});

function getRandomExcludingList(min, max, excludedList) {
  const possible = [];
  for (let i = min; i <= max; i++) {
    if (!excludedList.includes(i)) {
      possible.push(i);
    }
  }

  if (possible.length === 0) {
    throw new Error("Aucune valeur possible !");
  }

  const index = Math.floor(Math.random() * possible.length);
  return possible[index];
}
    x1 = getRandomExcludingList(0, 3, []);
    console.log("x1:", x1);

    x2 = getRandomExcludingList(0, 3, [x1]);
    console.log("x2:", x2);

    x3 = getRandomExcludingList(0, 3, [x1, x2]);
    console.log("x3:", x3);

    x4 = getRandomExcludingList(0, 3, [x1, x2, x3]);
    console.log("x4:", x4);


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
                                location.href='../html/etage-4.html'
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

