//debut du code de Ferre Ilegems
//creer la variable pour les points
//2023 - 4TTr - Projet X
let points;

//lancer les fonctions pour mettre les points, retirer le menu d'amelioration et regarder le vaisseau aquis pour le montrer dans le shop
chargerPoints();
kill();
checkImg();

function toggleFleche() {
    alert("Work In Progress...")
}

//regarder si il y a déjà des vaisseaux achetés, si non le vaisseau de base est mis
if(localStorage.getItem("imgVaisseau") == null){
    localStorage.setItem("imgVaisseau","../sources/bleu_v1.png")
}

//faire le lien avec les buttons pour acheter les vaisseaux dans le javaScript
let button1 = document.getElementById("upgrade1");
let button2 = document.getElementById("upgrade2");
let button3 = document.getElementById("upgrade3");
let button4 = document.getElementById("upgrade4");

//regader si la premiere amelioration a été faite si oui alors désactiver le boutton lors de l'entrée du shop si non ne pas désactiver le button
if (localStorage.getItem("imgUpg1") === '../sources/button_upgrade_red.png') {//condition pour regarder si le bouton est rouge dans le local storage
    button1.style.backgroundImage = "url('../sources/button_upgrade_red.png')";//si oui du coup, mettre le fond d"écran du bouton en rouge
    button1.disabled = true;//desactiver le bouton
    button1.style.cursor = "default";//mettre le curseur en defaut
}else if(button1.disabled = false){//sinon si il n'est pas rouge, 
    button1.style.backgroundImage = "url('../sources/button_upgrade.png')";//mettre le fond d'ecran en vert
}

//regader si la deuxieme amelioration a été faite si oui alors désactiver le boutton lors de l'entrée du shop si non ne pas désactiver le button
if (localStorage.getItem("imgUpg2") === '../sources/button_upgrade_red.png') {
    button2.style.backgroundImage = "url('../sources/button_upgrade_red.png')";
    button2.disabled = true;  
    button2.style.cursor = "default";
}else if(button2.disabled = false){
    button2.style.backgroundImage = "url('../sources/button_upgrade.png')"; 
}

//regader si la troisieme amelioration a été faite si oui alors désactiver le boutton lors de l'entrée du shop si non ne pas désactiver le button
if (localStorage.getItem("imgUpg3") === '../sources/button_upgrade_red.png') {
    button3.style.backgroundImage = "url('../sources/button_upgrade_red.png')";
    button3.disabled = true;    
    button3.style.cursor = "default";
}else if(button3.disabled = false){
    button3.style.backgroundImage = "url('../sources/button_upgrade.png')"; 
}

//regader si la troisieme amelioration a été faite si oui alors désactiver le boutton lors de l'entrée du shop si non ne pas désactiver le button
if (localStorage.getItem("imgUpg4") === '../sources/button_upgrade_red.png') {
    button4.style.backgroundImage = "url('../sources/button_upgrade_red.png')";
    button4.disabled = true;    
    button4.style.cursor = "default";
}else if(button4.disabled = false){
    button4.style.backgroundImage = "url('../sources/button_upgrade.png')"; 
}

//fonction pour actualiser le vaisseau (qui est lancée lors d'un achat)
function actualiserVaisseau(img) {//reprendre l'image dans les parametres de la fonction
    monStockage.setItem("imgVaisseau",img);//et l'ajouter dansla fonction    
}

//fonction pour que le buton ramène au menu
function menu() {
    document.getElementById("button_menu");//recevoir le bouton du HTML au JavaScript
    window.location.href = "../html/menu.html";//chercher la page et y aller
}
//fin du code de Ferre Ilegems

//début du code de basil
//___________________________________________________________________________________________________Basil, expliquer chaque ligne de code
function chargerPoints(){
    monStockage = localStorage;

    let sr=document.getElementById("sr");
    if (monStockage.getItem("points")=== 'undefined'){
        points=0;
          sr.innerHTML ="0";
    }
    else{
        points=parseInt(monStockage.getItem("points"));
          sr.innerHTML =points+" sr";
    }
}
function checkImg() {
    let vaisseau = document.getElementById("souris_base")
        if (localStorage.getItem("imgVaisseau") === 'undefined') {
            vaisseau.style.backgroundImage = "url('../sources/bleu_v1.png')";
            localStorage.setItem("imgVaisseau","../sources/bleu_v1.png")
    } else {
        vaisseau.style.backgroundImage = "url('" + localStorage.getItem("imgVaisseau") + "')";
    }  
}

function updatePoints(stellars){
    monStockage.setItem("points",points);
    chargerPoints();
}
//fin du code de basil

//debut du code de Ferre Ilegems

let souris = document.getElementById("souris_base")//faire le lien entre l'HTML et le JavaScript et recevoir la div du vaissseau

//boutons pour les ameliorations---------------------------------------------------------------------------------------------------

//boutton de la premiere amelioration,
function upgrade_one() {
    let button1 = document.getElementById("upgrade1");//recevoir les bouttons
    let button2 = document.getElementById("upgrade2");//toujours les recevoir 
    if (points >= 40) {//condition, regarder si le nombre de stellars est correct
        points = points - 40; //si oui, retirer le nombre de stellars de l'achat
        updatePoints(points);//mettre à jour les points
        souris.style.backgroundImage = "url('../sources/bleu_v2.png')";//changer le fond d'écran de la div du vaisseau
        button1.style.backgroundImage = "url('../sources/button_upgrade_red.png')";//mettre la couleur du boutton en rouge
        button1.style.cursor = "default";//mettre le curseur en defaut
        button1.disabled = true;//desactiver le bouton
        actualiserVaisseau('../sources/bleu_v2.png')//actualiser le vaisseau
        localStorage.setItem("imgUpg1", "../sources/button_upgrade_red.png")//mettre l'image dans le localStorage
    }else{//sinon,
        alert("Pas assez des stellars...")//avertir l'utilisateur par une alerte qu'il a pas assez de stellars en toute evidence :)
    }
}

//boutton de la deuxieme amelioration,
function upgrade_two() {
   let button2 = document.getElementById("upgrade2");
   let button3 = document.getElementById("upgrade3");
    if (points >= 100) {
        points = points - 100
        updatePoints(points);
        souris.style.backgroundImage = "url('../sources/bleu_v3.png')"
        button2.style.backgroundImage = "url('../sources/button_upgrade_red.png')"
        button2.style.cursor = "default"
        button2.disabled = true
        actualiserVaisseau('../sources/bleu_v3.png')
        localStorage.setItem("imgUpg2", "../sources/button_upgrade_red.png")
    }else{
        alert("Pas assez des stellars...")
    }
}

//boutton de la troisieme amelioration,
function upgrade_three() {
    let button3 = document.getElementById("upgrade3");
    let button4 = document.getElementById("upgrade4");
    if (points >= 350) {
        points = points - 350
        updatePoints(points);
        souris.style.backgroundImage = "url('../sources/bleu_v4.png')"
        button3.style.backgroundImage = "url('../sources/button_upgrade_red.png')"
        button3.style.cursor = "default" 
        button3.disabled = true
        actualiserVaisseau('../sources/bleu_v4.png')
        localStorage.setItem("imgUpg3", "../sources/button_upgrade_red.png")
    }else{
       alert("Pas assez des stellars...")
    }
}

//boutton de la quatrieme amelioration,
function upgrade_four() {
    let button4 = document.getElementById("upgrade4");
    if (points >= 500) {
        points = points - 500
        updatePoints(points); 
        souris.style.backgroundImage = "url('../sources/bleu_v5.png')"
        button4.style.backgroundImage = "url('../sources/button_upgrade_red.png')"
        button4.style.cursor = "default"      
        button4.disabled = true
        actualiserVaisseau('../sources/bleu_v5.png')
        localStorage.setItem("imgUpg4", "../sources/button_upgrade_red.png")
    }else{
        alert("Pas assez des stellars...")
    }
}

//montrer les ameliorations en changeant le fond d'écran de la div du vaisseau 

//changer le fond d'écran de la premiere div
function changeSourisOne() {
    souris.style.backgroundImage = "url('../sources/bleu_v2.png')"//changer le fon d'écran
}

//changer le fond d'écran de la deuxieme div
function changeSourisTwo() {
    souris.style.backgroundImage = "url('../sources/bleu_v3.png')"
}

//changer le fond d'écran de la troisieme div
function changeSourisThree() {
    souris.style.backgroundImage = "url('../sources/bleu_v4.png')"
}

//changer le fond d'écran de la quatrieme div
function changeSourisFour() {
    souris.style.backgroundImage = "url('../sources/bleu_v5.png')"
}

//remettre le fond d'écran du vaisseau à celui qui est possédé

//fonction pour retirer le fond d'écran de la premiere div
function resetSourisOne() {
    if (localStorage.getItem("imgVaisseau") == null) {//si le localStorage n'as pas de fond d'écran,
        localStorage.setItem("imgVaisseau", "../sources/bleu_v1.png");//mettre le fond d'écran de base
    } else {//sinon,
        souris.style.backgroundImage = "url(" + localStorage.getItem("imgVaisseau") + ")";//mettre le fond d'écran de base
    }
}

//fonction pour retirer le fond d'écran de la deuxieme div
function resetSourisTwo() {
    if (localStorage.getItem("imgVaisseau") == null) {
        localStorage.setItem("imgVaisseau", "../sources/bleu_v1.png");
    } else {
        souris.style.backgroundImage = "url(" + localStorage.getItem("imgVaisseau") + ")";
    }
}

//fonction pour retirer le fond d'écran de la troisieme div
function resetSourisThree() {
    if (localStorage.getItem("imgVaisseau") == null) {
        localStorage.setItem("imgVaisseau", "../sources/bleu_v1.png");
    } else {
        souris.style.backgroundImage = "url(" + localStorage.getItem("imgVaisseau") + ")";
    }
}

//fonction pour retirer le fond d'écran de la quatrieme div
function resetSourisFour() {
    if (localStorage.getItem("imgVaisseau") == null) {
        localStorage.setItem("imgVaisseau", "../sources/bleu_v1.png");
    } else {
        souris.style.backgroundImage = "url(" + localStorage.getItem("imgVaisseau") + ")";
    }
}

//boutton pour faire apparaitre le menu d'amelioration
function show() {
    let button2 = document.getElementById("upgrade2");//recevoir les boutons du HTML au JavaScript
    let button3 = document.getElementById("upgrade3");//encore en recevoir
    let button4 = document.getElementById("upgrade4");//eeeeh oui on en recois plein
    let menu_upg = document.getElementById("upgrade_menu")//bref vous avez l'idée
    let button1 = document.getElementById("upgrade1");

    let show1 = document.getElementById("show1")
    let show2 = document.getElementById("show2")
    let show3 = document.getElementById("show3")
    let show4 = document.getElementById("show4")
    
    menu_upg.style.display = 'block';//faire apparaitre les divs une à une
        button1.style.display = 'block';//et la même chose pour tous !
        button2.style.display = 'block';
        button3.style.display = 'block';
        button4.style.display = 'block';
        show1.style.display = 'block';
        show2.style.display = 'block';
        show3.style.display = 'block';
        show4.style.display = 'block';    

    souris_base.style.left = "23%"// bouger de place la souris pour un effet très stylé

}

//fonction pour faire disparaitre le menu d'amelioration
function kill() {
    let button2 = document.getElementById("upgrade2");//recevoir les boutons du HTML au JavaScript
    let button3 = document.getElementById("upgrade3");//encore en recevoir un beau packet
    let button4 = document.getElementById("upgrade4");//c'est plus très drôle à la fin j'imagine 
    let menu_upg = document.getElementById("upgrade_menu")
    let button1 = document.getElementById("upgrade1"); 

    let show1 = document.getElementById("show1")
    let show2 = document.getElementById("show2")
    let show3 = document.getElementById("show3")
    let show4 = document.getElementById("show4")   
    
    menu_upg.style.display = 'none';//retirer les divs de ameliorations 
        button1.style.display = 'none';
        button2.style.display = 'none';
        button3.style.display = 'none';
        button4.style.display = 'none';
        show1.style.display = 'none';
        show2.style.display = 'none';
        show3.style.display = 'none';
        show4.style.display = 'none';    

        souris_base.style.left = "37%"//remettre la souris a sa place pour compléter un effect très stylé
}
//fin du code de Ferre Ilegems