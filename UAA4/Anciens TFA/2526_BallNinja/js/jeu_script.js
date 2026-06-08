/*ciblage de chaque element(Martin et Tom)*/
let bestscore = document.getElementById("bestscore")
let debut = document.getElementById("debut")
let score = document.getElementById("score")
let mort_score = document.getElementById('mort_score')
let mort = document.getElementById('mort')
let estEntrainDeclicker = false
let pause = true
let body = document.getElementById("body")
let balles = ["T", "V", "Ba","Bo","Bal","F","R"]
let fond = ["t","b","f"]
let vies = 3
let nbrscore = 0 
let generation
let speed = 500
let nom = document.getElementById("nom")
let tabS
/*fonction qui va commencer le jeu et generer les balles(Martin et Tom)*/
/*elle va ajouter des vie et les enlever*/
/*et va arreter le jeu*/
function commencerjeu(){
    pause = false
    afficherCoeur()
    generation= setInterval(()=>generer(),speed)
}

function generer(){
        let i = Math.floor(Math.random() * balles.length)
        let code = balles[i]
        let x = Math.floor(Math.random() * 1800) + 1
        let balle = document.createElement("div")
        let balleDeplacement = document.createElement("div")
        balle.classList.add("balle")
        
        
        
        
        balle.onmouseover = () => {
            if(estEntrainDeclicker == true && pause == false){
                ajouterPoints(code)
                body.removeChild(balleDeplacement)
                
                /*Martin*/
                if(code == 'Bo'){
                    vies = 0
                    afficherCoeur()
                    mort.style.display = 'block'
                    body.style.filter = 'blur(20px)'
                    mort_score.innerHTML = "ton score est:" + nbrscore
                    clearInterval (generation)
                    arreteranimation()
                    
                }
                /*Tom*/
                if(code == 'Bal'){
                    explosion.classList.add("explosion")
                    explosion.addEventListener("animationend", () => {
                        explosion.classList.remove("explosion")
                    })
                }
                if(vies <= 2 && nbrscore % 100 == 0){
                    vies = vies + 1
                    afficherCoeur()
                }
            }
            
        }
        
        /*Martin et Tom*/
        if(code != 'R'){   
            balleDeplacement.style.left = x + "px"
            balle.addEventListener("animationend", () => {
                if(body.contains(balleDeplacement)){
                    if(code != 'Bo' && code != 'Bal'){
                        console.log(code)
                        vies = vies - 1
                    }
                    body.removeChild(balleDeplacement)
                    afficherCoeur()
                    if(vies == 0){
                        mort.style.display = 'block'
                        body.style.filter = 'blur(20px)'
                        mort_score.innerHTML = "ton score est:" + nbrscore
                        clearInterval (generation)
                        arreteranimation()
                    }
                    
                }
            })
        }else{
            let y = Math.floor(Math.random() * 1000) + 100
            balleDeplacement.style.left = "-100px"
            balleDeplacement.style.bottom = y + "px"
            balleDeplacement.addEventListener("animationend", () => {
                if(body.contains(balleDeplacement)){
                    vies = vies - 1
                    body.removeChild(balleDeplacement)
                    afficherCoeur()
                    if(vies == 0){
                        
                    }
                }
            })
        }
        
        if(code == "T"){
            balle.classList.add("balle-tennis")
            balleDeplacement.appendChild(balle)
            body.appendChild(balleDeplacement)
            if(x <= 960){
                balleDeplacement.classList.add("trajet-balle-tennis-droite")
            }else{
                balleDeplacement.classList.add("trajet-balle-tennis-gauche")
            }
        }else{
            if(code == "V"){
                balle.classList.add("balle-volant")
                balleDeplacement.appendChild(balle)
                body.appendChild(balleDeplacement)
                if(x <= 960){
                    balleDeplacement.classList.add("trajet-balle-volant-droite")
                    
                }else{
                    balleDeplacement.classList.add("trajet-balle-volant-gauche")
                }
            }else{
                if(code == "Ba"){
                    balle.classList.add("balle-basket")
                    balleDeplacement.appendChild(balle)
                    body.appendChild(balleDeplacement)
                    if(x <= 960){
                        balleDeplacement.classList.add("trajet-balle-basket-droite")
                        
                    }else{
                        balleDeplacement.classList.add("trajet-balle-basket-gauche")
                    }
                }else{
                    if(code == "Bo"){
                        balle.classList.add("balle-bowling")
                        balleDeplacement.appendChild(balle)
                        body.appendChild(balleDeplacement)
                        if(x <= 960){
                            balleDeplacement.classList.add("trajet-balle-bowling-droite")
                        }else{
                            balleDeplacement.classList.add("trajet-balle-bowling-gauche")
                        }
                    }else{
                        if(code == "Bal"){
                            balle.classList.add("balle-eau")
                            balleDeplacement.classList.add("trajet-balle-eau")
                            balleDeplacement.appendChild(balle)
                            body.appendChild(balleDeplacement)
                        }else{
                            if(code == "F"){
                                balle.classList.add("balle-foot")
                                balleDeplacement.appendChild(balle)
                                body.appendChild(balleDeplacement)
                                if(x < 960){
                                    balleDeplacement.classList.add("trajet-balle-foot-droite")
                                }
                                else{
                                    balleDeplacement.classList.add("trajet-balle-foot-gauche")
                                }
                            }else{
                                if(code == "R"){
                                    balle.classList.add("balle-rugby")
                                    balleDeplacement.classList.add("trajet-balle-rugby")
                                    balleDeplacement.appendChild(balle)
                                    body.appendChild(balleDeplacement)
                                }
                            }
                        }
                    }
                }
            }   
            
        }
        
        
    }
/*fonction qui affiche l'interface de debut*/
/*et qui enregistre le nom que le joueur a rentrer et le mettre dans le tableau(Martin et Tom)*/
function start(){
    debut.style.display = "none"
    body.style.filter = "blur(0px)"
    let nomjoueur = nom.value
    /*creation tableau*/
    if(localStorage.getItem("scores") == null){
        tabS = []
    }else{    
        tabS = JSON.parse(localStorage.getItem('scores'))
        
    }
    tabS.push({
        prenom : nomjoueur,
        score : 0
    })
    
    localStorage.setItem("scores", JSON.stringify(tabS))
    
    bestscore.innerHTML = "best : " + tabS[0].score
    commencerjeu()
}
/*fonction qui va ajouter les point quand une balle est couper(Martin et Tom)*/
/*qui va aussi changer les fond d'ecran*/
/* et modifier le meilleur score quand il est battu*/
/*et augmenter le speed*/
function ajouterPoints(code){
    let score = document.getElementById("score")
    if(code != "Bo"){
        nbrscore = nbrscore +5
        if(nbrscore > tabS[0].score){
            bestscore.innerHTML = nbrscore
        }
    }
    if(nbrscore % 100 == 0){
        speed = speed - 20
        clearInterval(generation)
        generation= setInterval(()=>generer(),speed)
        let i = Math.floor(Math.random() * fond.length)
        let codes = fond[i]
        console.log(codes)
        
        if(codes == "t"){
            body.style.backgroundImage = "url('sources/terrain-tennis.png')";
        }else{
            if(codes == "b"){
                body.style.backgroundImage = "url('sources/terrain-basket.png')";
                
            }else{
                if(codes == "f"){
                    body.style.backgroundImage = "url('sources/terrain-foot.png')";
                    
                }
            }
        }
    }  
    score.innerHTML = nbrscore
}
/*Martin*/
document.addEventListener('mousedown', ()=> {
    estEntrainDeclicker = true
    
})

document.addEventListener('mouseup', ()=> {
    estEntrainDeclicker = false
})


/*fonction qui permet de creer les coeurs(Martin et Tom)*/
function afficherCoeur() {
    let contener = document.getElementById("coeurs")
    contener.innerHTML = ""
    
    for (let i = 0; i < vies; i++){
        let heart = document.createElement("div")
        heart.classList.add("heart")
        contener.appendChild(heart)
    }
}  
/*fonction qui permet d'arreter le jeu quand toute les vie son perdue(Martin et Tom)*/
/*la fonction enregistre aussi le score*/
function arreteranimation(){
    let element = document.getElementsByTagName("div")
    for (let i =0; i < element.length; i++){
        element[i].style.animationPlayState = 'paused'
    }
    pause = true
    
    tabS[tabS.length - 1].score = nbrscore
    tabS.sort(compareFn).reverse()
    localStorage.setItem("scores", JSON.stringify(tabS))
}
/*(Mr Embrechts)*/
function compareFn(scoreA, scoreB) {
    if (scoreA.score < scoreB.score) {
        return -1;
    } else if (scoreB.score > scoreA.score) {
        return 1;
    }
    return 0;
}
