let inventaire = []
let nom = [1,1,1,1,1]
let compteurX = 435;
// fait par mateo et modifier par noelise// 

let histoire = [
    {
        img: "sources/lereveil.png",
        texte: "Vous vous reveiller dans un hopital. D'apres votre fiche, vous vous appelez Sam, vous êtes un ancien militaire mis sur la touche. D'après les autres information, cela fait 4ans que vous êtes dans le coma. Quand vous regarder autour de vous, vous voyez que le batiment semble abandonner depuis des lustres. il n'y a aucun bruit, dehors les voitures semble laisser a l'abandon comme si il c'était passé quelque chose de grave ! ",
        texteBtn1:"Aller voir ce qui se passe dans l'hopital ",
        texteBtn2:"Appeler un medecin",
        action1: "2",
        action2: "1",
        song: "sources/song/Post apocalypse music vol.1.mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "Vous êtes mort en appelant le médecin",
        texteBtn1:"Recommencer",
        texteBtn2:"Crédit",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/mark-spires-highresscreenshot000.jpg",
        texte: " Quand vous sortez de la chambre d'hopital, vous vous rendez compte qu'il s'est passer quelque chose de grave. tout est sans dessus dessous, les murs sont recouvert de sang et une odeur atroce. Que faite vous? ",
        texteBtn1:"Rester dans l'hopital pour explorer",
        texteBtn2:"Aller dehors.",
        action1: "3",
        action2: "8",
        song: "sources/song/A post-apocalyptic soundtrack.mp3"
    },
    {
        img: "sources/urbex-hopital-poupee-suspendue-2014.03.mai.094.jpg",
        texte: " Vous avez decider de rester dans l'hopital. Votre premier objectif est de trouver de la nourriture, dans vos souvenirs il y a un refectoire. Lorsque vous arriver vers le refectoire, tout semble vide. Que faite vous ?  ",
        texteBtn1:"Vous fouillez les placards ",
        texteBtn2:" Vous passer votre chemins",
        action1:"4" ,
        action2:"6" ,
        song: "sources/song/The Last Of us - Theme song.mp3",
        gainInventaireBtn1: "sources/Potion_blue.png",
        gain2InventaireBtn1: "sources/pain.png",
        gain3InventaireBtn1: "sources/kit.png"
    },
    {
        img: "sources/urbex-hopital-poupee-suspendue-2014.03.mai.091.jpg",
        texte: "En fouillant les placards, vous avez trouver de l'eau, un morceau de pain et vous tombez en face d'un kit de soins. Le kit semble usé mais encore utilisable, maintenant que vous avez fini d'explorer l'hopital. Que faite vous ?",
        texteBtn1:"Mangez la nourriture",
        texteBtn2:"Ne pas manger et garder pour plus tard ",
        action1:"5" ,
        action2:"7" ,
        song: "sources/song/Bruit de porte en bois - SFX.mp3",
        perteInventaireBtn1:"sources/pain.png",
        perte2InventaireBtn1:"sources/Potion_blue.png"
    },
    {
        img: "sources/sddefault-Photoroom.jpg",
        texte: " Apres avoir manger la nourriture et l'eau. vous avez le choix entre ;",
        texteBtn1:"Continuer a explorer ",
        texteBtn2:" Aller dehors ",
        action1:"6" ,
        action2:"9" ,
        song: "sources/song/Can opening sound effect.mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "Vous êtes mort en explorant les lieux. La partie est de l'hopital s'est éffondrez laissant une horde de zombie dans les catacombe ",
        texteBtn1:"Recommencer",
        texteBtn2:"Credit ",
        song: "sources/song/Davy Jones.mp3"
    }
    {
        img: "sources/img-4862.jpg",
        texte: "Vous avez choisi de garder la nourriture et l'eau pour plus tard. Vous avez le choix entre ",
        texteBtn1:"Continuez a explorer ",
        texteBtn2:" Aller dehors ",
        action1:"6" ,
        action2:"9" ,
        song: "sources/song/Can opening sound effect.mp3"
    },
    {
        img: "sources/d938f8fc7e0e1b815896283de437a5a654c42e5d_2000x2000.jpg",
        texte: " En sortant de l'hopital, vous decidez de suivre la route vers l'autoroute. En chemin, vous tombez nez à nez avec un zombie, celui-ci est entrain de manger un chevreuil. Il semble être distrait et semble ne pas vous avoir remarquez. Que faite vous ?",
        texteBtn1:"Aller le tuer",
        texteBtn2:" Fuir",
        action1:"11" ,
        action2:"9" ,
        song: "sources/song/Zombie sounds.mp3",
        gainInventaireBtn2:"sources/knife.png",
    },
    {
        img: "sources/The-Rain-Netflix-1200x765.png",
        texte: " En fuyant, vous tombez sur un vehicule de police deja dépeusser. Mais par chance, vous tombez sur un couteau planqué sous le fauteuil. Mais en marchant, vous vous êtes rendus compte que vous commenciez a avoir faim. C'est normal, après toute la marche, il vous faut bien manger.Que fait vous ?",
        texteBtn1:"Manger la nourriture ",
        texteBtn2:" Ne pas manger",
        action1:"13" ,
        action2:"10" ,
        song: "sources/song/bruit de GARGOUILLIS  (Gargouiller).mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "Vous êtes mort de faim ! ",
        texteBtn1:"Recommencer",
        texteBtn2:"Credit ",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
        
    },
    {
        img: "sources/QUJS5AY4S4QJDUNQX4KWSRJIZM.jpg",
        texte: "Vous avez reussi à tuer le zombie. Grace au pied de biche devant lui, Vous lui avez défoncer la tête. Par malheurs vous êtes infecter. Que faite vous ?",
        texteBtn1:"Vous utilisez le kit de soins",
        texteBtn2: "Vous ne l'utilisez pas ",
        action1:"12" ,
        action2:"14" ,
        song: "sources/song/The Last Of us - Theme song.mp3",
        perteInventaireBtn1:"sources/kit.png"
    },
    {
        img: "sources/15373976.jpg",
        texte: "Apres avoir utiliser le kit , le moment ou vous vous appretiez à partir. Une horde de zombie apparait de null part. Il semble que vous ayez fait trop de bruit pour eux. Que faite vous ?",
        texteBtn1:"Fuir",
        texteBtn2:"Essayer de la vaincre",
        action1:"16" ,
        action2:"15" ,
        song: "sources/song/Zombie Horde Sound Effect.mp3"
    },
    {
        img: "sources/the-walking-dead-photo-1351046.jpg",
        texte: " Apres avoir manger, le moment ou vous vous appretiez à partir. Une horde de zombie apparait de nul part. Il semble que vous ayez fait trop de bruit pour eux. Que faite vous ?",
        texteBtn1:"Fuir",
        texteBtn2:"Essayer de la vaincre",
        action1:"16" ,
        action2:"15" ,
        song: "sources/song/Zombie Horde Sound Effect.mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "Vous êtes mort en succombant à l'infection. vous decidez de mettre fin à tous ça pour eviter de muter.",
        texteBtn1:"Recommencer",
        texteBtn2:"Credit ",
        song: "sources/song/Call of Duty Black Ops 2 (Zombies) Green Run Game Over Song.mp3"
    },
    {
        img: "sources/mortv22.jpg",
        texte: "Vous êtes mort en succombant au nombre des zombies. ",
        texteBtn1:"Recommencer",
        texteBtn2:"Credit",
        song: "sources/song/Davy Jones.mp3"
    },
    {
        img: "sources/zombiemaison.jpg",
        texte: "En fuyant, vous tombez nez a nez avec un zombie. Que faite vous ?",
        texteBtn1:"Vous passer votre chemins",
        texteBtn2:"Vous allez le tuer",
        action1:"18" ,
        action2:"14" ,
        song: "sources/song/Zombie sounds.mp3"
    },
    {
        img: "sources/img fin.jpg",
        texte: "Par chance vous avez reussi à trouver des survivants, Ils vous expliquent qu'ils sont la derniere ville encore intacte de l'invasion. Ils vous propose de rester ici en échange d'aie et de service pour la communauté. Bien jouer!",
        texteBtn1:"Recommencer",
        texteBtn2:"Credit",
        song: ""
    }
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
     if(histoire[indice].gain3InventaireBtn1 != undefined){
        inventaire.push(histoire[indice].gain3InventaireBtn1)
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
