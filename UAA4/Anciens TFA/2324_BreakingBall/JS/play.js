let joueur
let moveX
let moveY
let compteur = 0
let point = 0
let continuerDeplacement;
let estEnDeplacement = false;
let score = 0
let partieTermine = false;

let argent = localStorage.getItem("argent")
if (argent == null) {
    argent = 0
    localStorage.setItem("argent", argent)
}

window.onload = function() {
//espace de jeu
Crafty.init(1920,1000, document.getElementById('game'));

//creation des murs
Crafty.e('MurGauche, 2D, DOM, Color, Collision')
.attr({x: 0, y: 10, w:10, h: 1200})
.color('black');

Crafty.e('2D, DOM, Color, Collision, MurDroit')
.attr({x: 1920, y: 10, w: 10, h: 1200})
.color('black');

Crafty.e('2D, DOM, Color, Collision, MurHaut')
.attr({x: 0, y: 100, w: 1920, h: 10})
.color('black');

Crafty.e('2D, DOM, Color, Collision, MurBas')
.attr({x: 0, y: 1000, w: 1920, h: 100})
.color('black');

generecarre()

 document.getElementById("score").innerHTML = 'score : '+ score




joueur = Crafty.e('2D, DOM, Color, Collision')
.attr({x: 500, y: 800, w: 50, h: 50})
.color('purple')




.css({'border-radius': '100%'})
//surveiller les deplacement
.bind('Move', function(evt){
//collisions
//hit=toucher
let hitDatas, hitData;
if((hitDatas = this.hit("MurGauche"))){
    hitData = hitDatas[0];
    if(hitData.type === 'SAT'){
        joueur.x -= hitData.overlap * hitData.nx
        joueur.y -= hitData.overlap * hitData.ny

        moveX = moveX * -1
    }
}else {
   if((hitDatas = this.hit("MurDroit"))){
    hitData = hitDatas[0];
    if(hitData.type === 'SAT'){
        joueur.x -= hitData.overlap * hitData.nx
        joueur.y -= hitData.overlap * hitData.ny
        moveX = moveX * -1

    }
} else {
   if((hitDatas = this.hit("MurHaut"))){
    hitData = hitDatas[0];
    if(hitData.type === 'SAT'){
        joueur.x -= hitData.overlap * hitData.nx
        joueur.y -= hitData.overlap * hitData.ny
        moveY = moveY * -1

    }
} else {
   if((hitDatas = this.hit("MurBas"))){
    hitData = hitDatas[0];
    if(hitData.type === 'SAT'){
        joueur.x -= hitData.overlap * hitData.nx
        joueur.y -= hitData.overlap * hitData.ny
        continuerDeplacement = false;
        estEnDeplacement = false;
        descendrecarre()
        generecarre()
    }
} else {
    //colision avec les carres
    //destroy-->disparait
    if((hitDatas = this.hit("Carre"))){
        score = score + 1
        document.getElementById("score").innerHTML = 'score : '+score
        hitData = hitDatas[0];
        let carreTouche = hitData.obj._element
        carreTouche.innerHTML = carreTouche.innerHTML - 1
        if(carreTouche.innerHTML == 0)
        {
            hitData.obj.destroy()
        }


        if(hitData.type === 'SAT'){
            joueur.x -= hitData.overlap * hitData.nx
            joueur.y -= hitData.overlap * hitData.ny


            if (hitData.nx == -1 && hitData.ny ==0){
                    //touche coté gauche du carre
                    moveX = moveX * -1
                }else{
                    if (hitData.nx == 0 && hitData.ny ==1){
                        //touche coté bas du carré
                        moveY = moveY * -1
                    }
                    else{
                        if (hitData.nx == 1 && hitData.ny ==0){
                            //touche coté droit
                            moveX = moveX * -1
                        }else{
                            //touche coté haut du carré
                            moveY = moveY * -1
                        }
                    }
                    
                }



            }
        } 
    }
}
} 
}
});


//oncklik sur la surface du game et ça lance la fonction click quan don click
document.getElementById("game").addEventListener("click", clicSouris);


};


function clicSouris(e){
    if(partieTermine == false){
        if(estEnDeplacement == false){
        let destinationX = e.clientX;
        let destinationY = e.clientY;
        let deltaX = destinationX - joueur.x
        let deltaY = destinationY - joueur.y
        moveX = deltaX/Math.sqrt(deltaX*deltaX + deltaY * deltaY)*20 //changer le 20 pour que ça fonctionne
        moveY = deltaY/Math.sqrt(deltaX*deltaX + deltaY * deltaY)*20
        continuerDeplacement = true;
        estEnDeplacement = true;
        deplacerballe();
}
}
}

function deplacerballe(){
    if(continuerDeplacement){
        joueur.x += moveX
        joueur.y += moveY
        requestAnimationFrame(deplacerballe)
    }

}

function descendrecarre(){
    Crafty("Carre").each(function(i){
       Crafty("Carre").get(i).y = Crafty("Carre").get(i).y + 100

   })

}

function generecarre(){
//carre qui se generent
compteur = compteur + 1
let posX = Math.floor(Math.random() * (1870 - 50 + 1) + 50)
let carre = Crafty.e('2D, DOM, Color, Collision, Carre')
.attr({x: posX, y: 125, w: 50, h: 50})
.color('black')
.bind('Move', function(evt){
    let hitDatas, hitData;
    if((hitDatas = this.hit("MurBas"))){
        console.log("perdu")

        partieTermine = true;
        document.getElementById('gameover').style = "display:block;"
        document.getElementById('back').style = "display:block"
        argent = Number(argent) + Number(score)
        localStorage.setItem("argent", argent)
    }
})
//pour que des couleurs se generent
let nbr = Math.floor(Math.random() * (5 - 1) + 1)
if(nbr == 1){
    carre.css({'border': '5px solid #fde19a'})
}else{
    if(nbr == 2){
        carre.css({'border': '5px solid #b34954'}) 
    }else{
        if(nbr == 3){
            carre.css({'border': '5px solid #719ac1'})
        }else{
         if(nbr == 4){
            carre.css({'border': '5px solid #282161'}) 
        }else{
            carre.css({'border': '5px solid #7bd3b8'})
        }
    }
}
}







carre._element.innerHTML = compteur




}

function backk(){
     window.location.href='index.html'
}













function pause(){
    document.getElementById('encadrer-pause').style = "display:block;"
    //pour que ça apparaisse
}
function continuer(){
    document.getElementById('encadrer-pause').style = "display:none;"
}
function quitter(){
    window.location.href='index.html'
}
