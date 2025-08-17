//codé entierement par Ferre Ilegems
//2023 - 4TTr - Projet X
//envoyer le joueur sur le jeu à l'aide d'une touche
document.onkeydown = function (e){
    if(e.code === "F10"){//prendre le code de la touche enfoncée
        window.location.href="html/play.html";//et envoyer l'utilisateur au play
        alert("bienvenue dans votre 1ere partie, vous disposez d'une vie qui pourra être boostée au shop et une vie qui restera toujours, utilisez les flèches pour jouer et évitez les briques, bonne chanche !")
    }
}