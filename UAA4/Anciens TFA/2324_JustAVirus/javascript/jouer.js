let inventaire = []
let nom = [1,1,1,1,1]
let compteurX = 435;
// fait par mateo et modifier par noelise// 

let histoire = [
    {
        img: "sources/lereveil.png",
        texte: "vous vous reveillez dans une étrange maison qui n'est pas la votre. en bas vous entendez du bruit... vous sortez du lit et vous descendez. la maison semble vide rien a bouger. comme si la ville à été désertez.",
        texteBtn1:"cherchez de la nourriture",
        texteBtn2: "regarder derriere la porte",
        action1: 2,
        action2: 1,
        song: "sources/song/Zombies Attacking Door  Stressing ASMR Ambience  1 Hour.mp3",
        gainInventaireBtn1: "sources/knife.png",
        gain2InventaireBtn1: "sources/steak.jpg"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "vous êtes tombé sur un zombie. vous êtes mort",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"       
    },
    {
        img: "sources/zombiemaison.jpg",
        texte: "vous trouvez un couteaux et une conserve. mais vous entendez du bruit. au loins, une horde de zombie vous attend dehors,vous l'entendez tapper contre les voitures et hurler comme si il savait que vous étiez la ! ",
        texteBtn1: "aller tuer le zombie dans la maison",
        texteBtn2: "aller combatre la horde de zombie",
        action1: 3,
        action2: 12,
        song: "sources/song/Zombie Horde Sound Effect.mp3"
    },
    {
        img: "sources/Lobber_Zombie.jpg",
        texte: "vous tombez nez a nez avec un zombie. Vous avez le choix entre:",
        texteBtn1: "vous n'utilisez pas le couteaux.",
        texteBtn2: "vous utilisez le couteaux.",
        action1: 6,
        action2: 4,
        song: "sources/song/Zombie sounds.mp3",
        perteInventaireBtn2:"sources/knife.png",
        gainInventaireBtn2:"sources/gun.png"
    },
    {
        img: "sources/OIP.jpg",
        texte: "vous avez gagner un fusil. mais au loins vous entendez des zombie, cela vous semble d'être la horde pas loins de chez vous.",
        texteBtn1: "vous decide de partir",
        texteBtn2: "vous decide d'aller vous battre contre la horde.",
        action1: 15,
        action2: 5,
        song: "sources/song/Zombie Horde Sound Effect.mp3"
    },
    {
        img:"sources/hordev2.jpg",
        texte: "vous êtes retourné vers la horde, mais avec votre fusils, vous êtes en capacité de les vaincre.",
        texteBtn1: "vous utiliser le fusil",
        texteBtn2: "vous fuyer",
        action1: 7,
        action2: 8,
        song: "sources/song/Zombie Horde Sound Effect.mp3",
        perteInventaireBtn1:"sources/gun.png"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "vous êtes mort en n'utilisant pas le couteaux",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/gunfighthord.jpg",
        texte: "vous utiliser toute les balles de votre fusils, vous avez reussi a vaincre la horde. mais par conséquence vous avez perdu votre arme a feux",
        texteBtn1: "fuir vers une maison",
        texteBtn2: "revenir dans la maison",
        action1: 8,
        action2: 1,
        song: "sources/song/Sound of a AK-47 Full Mag.mp3"
    },
    {
        img: "sources/f67yt2a1vrr51.jpg",
        texte: "vous avez fuit, plus loins de la horde,vous tombez sur une maison similaire a celle dont vous, vous êtes reveiller. a l'interieur, il y a un bruit sourd. Ce qui semnble être des gressilment",
        texteBtn1: "vous allez voir après le bruit",
        texteBtn2: "vous partez sans visiter la maison.",
        action1: 9,
        action2: 16,
        song: "sources/song/Zombie Horde Sound Effect.mp3"
    },
    {
        img: "sources/radio.jpg",
        texte: "vous trouvez une radio, la seule encore en état de fonctionné dans la region. il vous reste assez de place dans le sac pour la transporter, que faite vous ?",
        texteBtn1: "vous decidez de l'allumer",
        texteBtn2: "vous la prennez",
        action1: 10,
        action2: 11,
        song: "sources/song/bruit radio qui gresille.mp3",
        gainInventaireBtn2:"sources/radio.png"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "lorsque vous avez allumer la radio, les zombies au alentours on entendu et arrive vers la maison. vous êtes mort",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/15286410-backpack_xl.jpg",
        texte: "vous avez decider de la prendre sur vous, et vous commencez a avoir faim. il y a une cuisine a moitier vide. qu'allez vous faire ?",
        texteBtn1: "vous cherchez dans la cuisine",
        texteBtn2: "vous ne faite rien et vous attendez que quelque chose se passe",
        action1: 13,
        action2: 12,
        song: "sources/song/bruit de GARGOUILLIS  (Gargouiller).mp3",
        gainInventaireBtn1: "sources/Potion_blue.png",
        gain2InventaireBtn1: "sources/pain.png"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "vous êtes mort suite a un manque de nourriture, pas de bol",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/sddefault-Photoroom.jpg",
        texte: "en fouillant les placard,vous avez trouvez un morceau de pain et de l'eau, vous decidez de partir de la maison. vous vous êtes assez éloigner pour pouvoir utiliser la radio, que faite vous ?",
        texteBtn1: "vous ne manger pas la nourriture ",
        texteBtn2: "vous mangez la nourriture",
        action1: 12,
        action2: 19,
        song: "sources/song/Bruit de porte en bois - SFX.mp3",
        perteInventaireBtn2:"sources/pain.png",
        perte2InventaireBtn2:"sources/Potion_blue.png"
    },
    {
        img: "sources/finsecrete.jpg",
        texte:"vous avez reussi à trouver la fin secrete. grace à la radio, quelqu'un vous a communiquer un endroit safe, vous decidez de suivres les coordonées et vous vous retrouver devant une grande barriere avec les restes des scientifiques en vie. l'homme à la radio vous explique que les scientifique on trouvez un moyen d'éradiquer le virus. Bien jouer.",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/The Last Of us - Theme song.mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "vous êtes mort a cause d'un éboulement de la route..!",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/running8064576.jpg",
        texte: "vous avez decidez de fuir la maison, mais vous commencez a avoir faim, élas il ne vous reste une conserve. que faite vous ?",
        texteBtn1: "vous decidez de ne pas utiliser la conserve",
        texteBtn2: "vous decidez de manger la conserve",
        action1: 12,
        action2: 17,
        perteInventaireBtn2:"sources/steak.jpg"
    },
    {
        img: "sources/amberlight-city-apocalypse-ruines.jpg",
        texte: " vous decidez de retourné la ou vous vous êtes reveiller. Après quelque jours de marche, vous retombez sur la maison. Qui à été baricader par des survivant, deux survivant sur un bus essaye de tuer les zombies avec leurs armes. il vous propose qu'en échange d'aide,vous les rejoignez",
        texteBtn1: "vous les rejoignez",
        action1: 18,
        song: "sources/song/Post apocalypse music vol.1.mp3"
    },
    {
        img: "sources/ecransfin.jpg",
        texte: "par chance vous avez reussi à trouver des survivants alors que vous êtiez poursuivis par des zombies, ceux-ci vous on tendus la mains pour vous permettre de monter au dessus du bus. il vous expliqua qu'il sont la derniere villeencore intacte de l'invasion. il vous propose de rester ici en échange d'aie et de service pour la communauté. bien jouer!",
        texteBtn1: "recommencer",
        texteBtn2: "crédit",
        song: "sources/song/The Last Of us - Theme song.mp3"
    },
    {
        img: "sources/running8064576.jpg",
        texte: "apres avoir manger, vous decidez de partir loins de la maison. vous avez la radio dans votre sac, que faite vous ?" ,
        texteBtn1: "vous utilisez la radio",
        texteBtn2: "vous decidez de ne pas utiliser la radio",
        action1: 14,
        action2: 10,
        song: "sources/song/The Last Of us - Theme song.mp3"
    },

]

let indice = 0

dessintableau()

function menu(){
    window.location.href="index.html"
}
function dessintableau(){
    // fait par mateo
    document.getElementById('text').innerHTML = histoire[indice].texte
    document.getElementById('imge').src = histoire[indice].img
    document.getElementById('btn1').innerHTML = histoire[indice].texteBtn1
    document.getElementById('btn3').innerHTML = histoire[indice].texteBtn2
    document.getElementById('son').src = histoire[indice].song
    document.getElementById('audio').load()
    document.getElementById('audio').play()

    // fait par noelise
    document.getElementById("inventaire").innerHTML = ""
    compteurX =435
    for (let i = 0; i < inventaire.length; i++) {
    let div = document.createElement("div")
    div.className = "case"
    div.style.backgroundImage ="url("+inventaire[i]+")"
    document.getElementById("inventaire").appendChild(div)
    
    let p = document.createElement("p")
    p.className = "quantite"
    div.appendChild(p)
    p.innerHTML = nom[i]
    div.style.left = compteurX+"px"
    compteurX = compteurX + 90;
}
}
function choix1(){
    // fait par noelise 
    if(histoire[indice].gainInventaireBtn1 != undefined){
       inventaire.push(histoire[indice].gainInventaireBtn1)
    }
    if(histoire[indice].gain2InventaireBtn1 != undefined){
       inventaire.push(histoire[indice].gain2InventaireBtn1)
    }
    if(histoire[indice].perteInventaireBtn1 != undefined){
       let positionPerte = inventaire.indexOf(histoire[indice].perteInventaireBtn1)
       inventaire.splice(positionPerte,1)
    }
    if(histoire[indice].perte2InventaireBtn1 != undefined){
       let positionPerte1 = inventaire.indexOf(histoire[indice].perte2InventaireBtn1)
       inventaire.splice(positionPerte1,1)
    }
    // fait par mateo
    if(histoire[indice].action1 == undefined){
        indice = 0
        inventaire = []
    }else{
        indice = histoire[indice].action1
    }
    dessintableau()
}
function choix2(){
    // fait par noelise
    if(histoire[indice].gainInventaireBtn2 != undefined){
       inventaire.push(histoire[indice].gainInventaireBtn2)
    }
    if(histoire[indice].gain2InventaireBtn2 != undefined){
       inventaire.push(histoire[indice].gain2InventaireBtn2)
    }
    if(histoire[indice].perteInventaireBtn2 != undefined){
       let positionPerte2 = inventaire.indexOf(histoire[indice].perteInventaireBtn2)
       inventaire.splice(positionPerte2,1)
    }
    if(histoire[indice].perte2InventaireBtn2 != undefined){
       let positionPerte3 = inventaire.indexOf(histoire[indice].perte2InventaireBtn2)
       inventaire.splice(positionPerte3,1)
    }
    // fait par mateo
    if(histoire[indice].action2 == undefined){
        indice = window.location.href ="credit.html"
    }else{
        indice = histoire[indice].action2
    }
    dessintableau()
}