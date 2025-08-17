//definition de varibles
    var table = document.getElementById("jeu");
    var curseur = document.getElementById("curseur");
    var audio = new Audio('../../img/lolop.mp3');
   
    var ligne;
    var caseTable;
    var nbCailloux = 0;
    var nbCoups = 0;
    let indexNiveauCourant = 0 ;
    var verif = false;
    var canvas = document.getElementById("close");
    var ctx = canvas.getContext("2d");
    var niveau = 
    
    [
    [" "," ","#","#","#","#","#"," "],
    ["#","#","#"," "," "," ","#"," "],
    ["#","x","@","$"," "," ","#"," "],        
    ["#","#","#"," ","$","x","#"," "],
    ["#","x","#","#","$"," ","#"," "],
    ["#"," ","#"," ","x"," ","#","#"],
    ["#","$"," ","*","$","$","x","#"],
    ["#"," "," "," ","x"," "," ","#"],
    ["#","#","#","#","#","#","#","#"]
    ];

//niveaux du jeu
    /*objets du niveau :
    vide = " " 
    mur = "#"
    joueur = "@"
    caisse = "$"
    croix = "x"
    valide = "*" 
    */
    var niveaux=
    [
    [//1
        [" "," ","#","#","#","#","#"," "],
        ["#","#","#"," "," "," ","#"," "],
        ["#","x","@","$"," "," ","#"," "],
        ["#","#","#"," ","$","x","#"," "],
        ["#","x","#","#","$"," ","#"," "],
        ["#"," ","#"," ","x"," ","#","#"],
        ["#","$"," ","*","$","$","x","#"],
        ["#"," "," "," ","x"," "," ","#"],
        ["#","#","#","#","#","#","#","#"],
    ]
    ,
    [//2
        [" ","#","#","#","#","#"," "," "],
        [" ","#","@"," ","#","#","#"," "],
        [" ","#"," ","$"," "," ","#"," "],        
        ["#","#","#"," ","#"," ","#","#"],
        ["#","x","#"," ","#"," "," ","#"],
        ["#","x","$"," "," ","#"," ","#"],
        ["#","x"," "," "," ","$"," ","#"],
        ["#","#","#","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "],
    ]
    ,
    [//3
        [" "," ","#","#","#","#"," "," "],
        [" ","#","#","@","x","#"," "," "],
        [" ","#","x"," "," ","#"," "," "],        
        [" ","#"," ","$"," ","#"," "," "],
        [" ","#"," ","$","#","#"," "," "],
        [" ","#"," "," ","#"," "," "," "],
        [" ","#"," "," ","#"," "," "," "],
        [" ","#","#","#","#"," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//4
        ["#","#","#","#","#","#","#","#"],
        ["#","@"," "," "," "," "," ","#"],
        ["#"," "," "," "," "," "," ","#"],        
        ["#"," "," "," ","#","x","#","#"],
        ["#"," ","$","#"," ","x","#"," "],
        ["#"," ","$"," "," "," ","#"," "],
        ["#","#"," "," ","#","#","#"," "],
        [" ","#","#","#","#"," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]     
    ,
    [//5
        ["#","#","#","#","#","#","#","#"],
        ["#","@"," ","#"," ","x"," ","#"],        
        ["#"," "," "," "," "," "," ","#"],
        ["#"," "," ","#"," ","x"," ","#"],
        ["#"," ","$"," ","#"," ","#","#"],
        ["#"," ","$"," "," "," ","#"," "],
        ["#"," "," "," ","#","#","#"," "],
        ["#","#","#","#","#"," "," "," "], 
        [" "," "," "," "," "," "," "," "],
    ]
    ,
    [//6
        ["#","#","#","#","#","#","#"," "],
        ["#"," "," "," "," "," ","#","#"],
        ["#"," "," "," "," ","$","@","#"],        
        ["#"," ","$"," ","#"," "," ","#"],
        ["#"," "," ","#"," "," "," ","#"],
        ["#"," "," ","#"," "," "," ","#"],
        ["#","#","#","#","x"," ","x","#"],
        [" "," "," ","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//7
        [" "," "," "," ","#","#","#","#"],
        [" "," "," ","#","#","@"," ","#"],
        ["#","#","#","#","x"," "," ","#"],        
        ["#"," "," "," "," "," "," ","#"],
        ["#"," ","$"," ","#"," "," ","#"],
        ["#"," ","#","$","x"," "," ","#"],
        ["#"," "," "," "," "," "," ","#"],
        ["#","#","#","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//8
        [" ","#","#","#","#","#"," "," "],
        [" ","#"," "," ","x","#"," "," "],
        [" ","#","x","$"," ","#"," "," "],        
        [" ","#"," "," "," ","#","#","#"],
        [" ","#","$"," ","#","@"," ","#"],
        [" ","#"," "," "," ","$","x","#"],
        [" ","#","#"," "," ","#","#","#"],
        [" "," ","#","#","#","#"," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//9
        [" "," ","#","#","#","#"," "," "],
        [" ","#","#","@"," ","#"," "," "],
        [" ","#"," ","$"," ","#"," "," "],        
        [" ","#","x","$","x","#"," "," "],
        [" ","#","#","$","x","#"," "," "],
        [" ","#"," "," "," ","#"," "," "],
        [" ","#"," "," "," ","#"," "," "],
        [" ","#","#","#","#","#"," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//10
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" ","#","#","#","#","#","#","#"],        
        ["#","#","x"," ","@"," "," ","#"],
        ["#"," "," ","$","$"," "," ","#"],
        ["#","x"," "," ","#"," "," ","#"],
        ["#","#","#","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//11
        [" ","#","#","#","#","#"," "," "],
        [" ","#","x"," ","x","#"," "," "],
        [" ","#"," "," ","x","#"," "," "],        
        [" ","#"," ","$"," ","#"," "," "],
        [" ","#","#","$"," ","#"," "," "],
        [" "," ","#","@","$","#"," "," "],
        [" "," ","#"," "," ","#"," "," "],
        [" "," ","#","#","#","#"," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//12
        [" "," ","#","#","#","#"," "," "],
        [" "," ","#","@","x","#"," "," "],
        [" "," ","#","$"," ","#"," "," "],        
        [" "," ","#"," "," ","#"," "," "],
        [" "," ","#"," ","$","#"," "," "],
        [" "," ","#","x"," ","#"," "," "],
        [" "," ","#"," "," ","#"," "," "],
        [" "," ","#","#","#","#"," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//13
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        ["#","#","#","#","#","#","#"," "],        
        ["#","x@","x"," "," "," ","#","#"],
        ["#"," ","#"," ","$","$"," ","#"],
        ["#"," "," "," "," "," "," ","#"],
        ["#","#","#","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//14
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," ","#","#","#","#","#"," "],        
        [" ","#","#"," "," ","x","#"," "],
        [" ","#","@","$"," "," ","#"," "],
        [" ","#"," "," ","*"," ","#"," "],
        [" ","#","#","#","#","#","#"," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ]
    ,
    [//15
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," ","#","#","#","#","#","#"],        
        ["#","#","#"," "," "," "," ","#"],
        ["#","@","$"," "," ","#"," ","#"],
        ["#","x"," ","$"," "," ","x","#"],
        ["#","#","#","#","#","#","#","#"],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "], 
    ] 
    ];
    
//lance la fonction qui dessine le niveau au lancement de la page
reload();

//Affiche le menu de choix de niveau
    function menu(){
        document.getElementById("menu").style.visibility = "hidden";
        document.getElementById("pageNiveau").style.visibility = "visible";
    }

//retire le menu de choix de niveau
    ctx.beginPath();
    ctx.moveTo(5,5);
    ctx.lineTo(40,40);
    ctx.moveTo(40,5);
    ctx.lineTo(5,40);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    function closeNiveau(){
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("pageNiveau").style.visibility = "hidden";
    }

//fonction qui change de niveau grace au menu
    function changeLevel(nouveauIndexNiveau){
        indexNiveauCourant = nouveauIndexNiveau;
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("pageNiveau").style.visibility = "hidden";
        reload();
    }


//boutton pour recommencer le niveau
    function reload(){
        for (let i =0; i < niveaux[indexNiveauCourant].length; i++){
            for (let j = 0; j < niveaux[indexNiveauCourant][i].length; j++){
                niveau[i][j] = niveaux[indexNiveauCourant][i][j]
            }
        }
        dessiner();
        nbCoups = 0
        document.getElementById("nbCoups").innerHTML = "Nombre de coups = " + nbCoups;
    }





//fonction qui dessine le niveau
    function dessiner(){
        nbCailloux = 0;
        table.innerHTML = "";
        for (var i = 0; i <niveau.length ; i++) {
            ligne = document.createElement("tr");
            ligne.classList.add("ligne");
            table.appendChild(ligne);
            for (var j = 0; j <niveau[i].length ; j++) {
                switch(niveau[i][j])  {
                    case "#" :
                        caseTable = document.createElement("td");
                        caseTable.classList.add("mur");
                        ligne.appendChild(caseTable);
                    break;

                    case "@":
                        caseTable = document.createElement("td");
                        caseTable.setAttribute("id", "perso")
                        ligne.appendChild(caseTable);
                    break;

                    case "$":
                        caseTable = document.createElement("td");
                        caseTable.classList.add("cailloux");
                        ligne.appendChild(caseTable);
                        nbCailloux = nbCailloux + 1;
                    break;

                    case "x":
                        caseTable = document.createElement("td");
                        caseTable.classList.add("croix");
                        ligne.appendChild(caseTable);
                    break;

                    case "*":
                        caseTable = document.createElement("td");
                        caseTable.classList.add("valide");
                        ligne.appendChild(caseTable);
                    break;

                    case "x@":
                        caseTable = document.createElement("td");
                        caseTable.setAttribute("id", "perso");
                        ligne.appendChild(caseTable);
                    break;

                    case " ":
                        caseTable = document.createElement("td");
                        caseTable.classList.add("vide");
                        ligne.appendChild(caseTable);
                    break;
                }
            
            }
        }
        if (indexNiveauCourant !== 14){
            if (nbCailloux === 0){
                document.getElementById("win").style.visibility = "visible";
            }
            else{
                document.getElementById("win").style.visibility = "hidden";
            }
        }
        else{
            if (nbCailloux === 0){
                document.getElementById("finJeu").style.display = "inline";
                document.getElementById("retour").style.display = "none";
                document.getElementById("reload").style.display = "none";
                document.getElementById("menu").style.display = "none";
                document.getElementById("jeu").style.display = "none";
                document.getElementById("nbCoups").style.display = "none";
                document.body.style.backgroundColor = "black";
                setTimeout(function() {
                    document.getElementById("finJeu").style.display = "none"
                    fullscreenVideo.style.display = 'block';
                    fullscreenVideo.play();
                  }, 2100);
                  setTimeout(function() {
                    window.location.href = "../../index.html";
                  }, 21200);
            }
            else{
                document.getElementById("win").style.visibility = "hidden";
            }
        }
    }



//fonction qui anime le coup de droite
function coupDroit(){
    dessiner()
    document.getElementById("perso").style.backgroundImage = "url(../../img/coup_droit.gif)";
    setTimeout(function() {
         dessiner()//redessine la zone de jeu une fois le modification faites
      }, 400);
     
}
//fonction qui anime le coup de gauche 
function coupGauche(){
    dessiner()
    document.getElementById("perso").style.backgroundImage = "url(../../img/coup_gauche.gif)";
    setTimeout(function() {
         dessiner()//redessine la zone de jeu une fois le modification faites
         document.getElementById("perso").style.backgroundImage = "url(../../img/surplace_gauche.gif)";
      }, 450);
     
}

//fonction qui le fait regarder a droite
function Droite(){
    dessiner()
    document.getElementById("perso").style.backgroundImage = "url(../../img/surplace_droite.gif)";
}
//fonction qui le fait regarder a gauche
function Gauche(){
    dessiner()
    document.getElementById("perso").style.backgroundImage = "url(../../img/surplace_gauche.gif)";
}
    

//Déplacement du joueur:
    //droite
    document.addEventListener("keydown", function(event) {
        
        if (event.code === "ArrowRight") {
            let trouve = false;
            let k;
            let l;
            for(k = 0; k < niveau.length && !trouve ; k++) {//parcours le tableau
                for(l = 0; l < niveau[k].length && !trouve; l++){
                    if(niveau[k][l] == "x@"){//si le joueur est sur une croix
                        trouve = true;
                        if (niveau[k][l+1] !== "#"){//si il n'y a pas de mur a cote du joueur
                            if(niveau[k][l+1] == "*" && niveau[k][l+2] == "x"){
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "x@";               
                                niveau[k][l+2] = "*";
                                Droite()
                                nbCoups += 1;
                                break;
                            }
                            if(niveau[k][l+2] == "x" && niveau[k][l+1] == "$"){//pour valider un caillou en le poussant sur une croix ("x@","$","x")
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "@";               
                                niveau[k][l+2] = "*";
                                coupDroit()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l+1] == "$" && niveau[k][l+2] == " ") {//avance un caillou dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "@";
                                niveau[k][l+2] = "$";
                                coupDroit()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l+1] == "*" && niveau[k][l+2] == " ") {//avance un valider dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "x@";
                                niveau[k][l+2] = "$";
                                Droite()
                                nbCoups += 1;
                                break;                                
                            }
                            else if (niveau[k][l+1] == "x"){//deplacement du joueur sur une croix
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "x@";
                                Droite()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l+1] == " "){//deplacement du joueur dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l+1] = "@";
                                Droite()
                                nbCoups += 1;
                                break;
                            }
                        }
                    }
                    else if(niveau[k][l] == "@"){//si le joueur est sur vide
                        trouve = true;
                        if (niveau[k][l+1] !== "#"){//si il y a pa de mur a cote du joueur
                          
                            if(niveau[k][l+1] == "x"){//deplace le joueur sur une croix
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "x@";
                                Droite()
                                nbCoups += 1;
                                break;
                            }
                            else if(niveau[k][l+1] == "$" && niveau[k][l+2] == "x"){//deplace un caillou sur une croix 
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "@";
                                niveau[k][l+2] = "*";
                                coupDroit()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l+1] == "$" && niveau[k][l+2] == " ") {//deplace une caisse dans le vide
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "@";
                                niveau[k][l+2] = "$";
                                coupDroit()
                                nbCoups += 1;
                                break;                              
                            }
                            else if (niveau[k][l+1] == "*" && niveau[k][l+2] === "x") {//deplace un valide sur une croix
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "x@";
                                niveau[k][l+2] = "*";
                                coupDroit()
                                nbCoups += 1;
                                break;      
                            }
                            else if (niveau[k][l+1] === "*" && niveau[k][l+2] === " ") {//deplace un valide dans du vide donc le retransforme en caillou
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "x@";
                                niveau[k][l+2] = "$";
                                coupDroit()
                                nbCoups += 1;
                                break;                               
                            }
                            else if (niveau[k][l+1] == " ") {//deplace le joueur dans le vide
                                niveau[k][l] = " ";
                                niveau[k][l+1] = "@";
                                Droite()
                                nbCoups += 1;
                                break;
                            }
                            }
                        }
                    }
                }
                document.getElementById("nbCoups").innerHTML = "Nombre de coups = " + nbCoups;
                
            }
    });






    //gauche
    document.addEventListener("keydown", function(event) {
        
        if (event.code === "ArrowLeft") {
            let trouve = false;
            let k;
            let l;
            for(k = 0; k < niveau.length && !trouve ; k++) {//parcours le tableau
                for(l = 0; l < niveau[k].length && !trouve; l++){
                    if(niveau[k][l] == "x@"){//si le joueur est sur une croix
                        trouve = true;
                        if (niveau[k][l-1] !== "#"){//si il n'y a pas de mur a cote du joueur
                            if(niveau[k][l-1] == "*" && niveau[k][l-2] == "x"){
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "x@";               
                                niveau[k][l-2] = "*";
                                Gauche()
                                nbCoups += 1;
                                break;
                            }
                            if(niveau[k][l-2] == "x" && niveau[k][l-1] == "$"){//pour valider un caillou en le poussant sur une croix ("x@","$","x")
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "@";               
                                niveau[k][l-2] = "*";
                                coupGauche()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l-1] == "$" && niveau[k][l-2] == " ") {//avance un caillou dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "@";
                                niveau[k][l-2] = "$";
                                coupGauche()
                                nbCoups += 1;
                                break;                              
                            }
                            else if (niveau[k][l-1] == "*" && niveau[k][l-2] == " ") {//avance un valider dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "x@";
                                niveau[k][l-2] = "$";
                                coupGauche()
                                nbCoups += 1;
                                break;                                  
                            }
                            else if (niveau[k][l-1] == "x"){//deplacement du joueur sur une croix
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "x@";
                                Gauche()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l-1] == " "){//deplacement du joueur dans le vide
                                niveau[k][l] = "x";
                                niveau[k][l-1] = "@";
                                Gauche()
                                nbCoups += 1;
                                break;
                            }
                        }
                    }
                    else if(niveau[k][l] == "@"){//si le joueur est sur vide
                        trouve = true;
                        if (niveau[k][l-1] !== "#"){//si il y a pa de mur a cote du joueur
                          
                            if(niveau[k][l-1] == "x"){//deplace le joueur sur une croix
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "x@";
                                Gauche()
                                nbCoups += 1;
                                break;
                            }
                            else if(niveau[k][l-1] == "$" && niveau[k][l-2] == "x"){//deplace un caillou sur une croix 
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "@";
                                niveau[k][l-2] = "*";
                                coupGauche()
                                nbCoups += 1;
                                break;
                            }
                            else if (niveau[k][l-1] == "$" && niveau[k][l-2] == " ") {//deplace une caisse dans le vide
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "@";
                                niveau[k][l-2] = "$";
                                coupGauche()
                                nbCoups += 1;
                                break;                              
                            }
                            else if (niveau[k][l-1] == "*" && niveau[k][l-2] === "x") {//deplace un valide sur une croix
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "x@";
                                niveau[k][l-2] = "*";
                                coupGauche()
                                nbCoups += 1;
                                break;                                
                            }
                            else if (niveau[k][l-1] === "*" && niveau[k][l-2] === " ") {//deplace un valide dans du vide donc le retransforme en caillou
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "x@";
                                niveau[k][l-2] = "$";
                                coupGauche()
                                nbCoups += 1;
                                break;                                
                            }
                            else if (niveau[k][l-1] == " ") {//deplace le joueur dans le vide
                                niveau[k][l] = " ";
                                niveau[k][l-1] = "@";
                                Gauche()
                                nbCoups += 1;
                                break;
                            }
                            }
                        }
                    }
                }
                document.getElementById("nbCoups").innerHTML = "Nombre de coups = " + nbCoups;
            }
    });






    //haut
    document.addEventListener("keydown", function(event) {
        
        if (event.code === "ArrowUp") {
            let trouve = false;
            let k;
            let l;
            for(k = 0; k < niveau.length && !trouve ; k++) {//parcours le tableau
                for(l = 0; l < niveau[k].length && !trouve; l++){
                    if(niveau[k][l] == "x@"){//si le joueur est sur une croix
                        trouve = true;
                        if (niveau[k-1][l] !== "#"){//si il n'y a pas de mur a cote du joueur
                            if(niveau[k-1][l] == "*" && niveau[k-2][l] == "x"){
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "x@";               
                                niveau[k-2][l] = "*";
                                nbCoups += 1;
                            }
                            if(niveau[k-2][l] == "x" && niveau[k-1][l] == "$"){//pour valider un caillou en le poussant sur une croix ("x@","$","x")
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "@";               
                                niveau[k-2][l] = "*";
                                nbCoups += 1;
                            }
                            else if (niveau[k-1][l] == "$" && niveau[k-2][l] == " ") {//avance un caillou dans le vide
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "@";
                                niveau[k-2][l] = "$";     
                                nbCoups += 1;                         
                            }
                            else if (niveau[k-1][l] == "*" && niveau[k-2][l] == " ") {//avance un valider dans le vide
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "x@";
                                niveau[k-2][l] = "$"; 
                                nbCoups += 1;                               
                            }
                            else if (niveau[k-1][l] == "x"){//deplacement du joueur sur une croix
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "x@";
                                nbCoups += 1;
                            }
                            else if (niveau[k-1][l] == " "){//deplacement du joueur dans le vide
                                niveau[k][l] = "x";
                                niveau[k-1][l] = "@";
                                nbCoups += 1;
                            }
                            dessiner()
                        }
                    }
                    else if(niveau[k][l] == "@"){//si le joueur est sur vide
                        trouve = true;
                        if (niveau[k-1][l] !== "#"){//si il y a pa de mur a cote du joueur
                          
                            if(niveau[k-1][l] == "x"){//deplace le joueur sur une croix
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "x@";
                                nbCoups += 1;
                            }
                            else if(niveau[k-1][l] == "$" && niveau[k-2][l] == "x"){//deplace un caillou sur une croix 
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "@";
                                niveau[k-2][l] = "*";
                                nbCoups += 1;
                            }
                            else if (niveau[k-1][l] == "$" && niveau[k-2][l] == " ") {//deplace une caisse dans le vide
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "@";
                                niveau[k-2][l] = "$";   
                                nbCoups += 1;                           
                            }
                            else if (niveau[k-1][l] == "*" && niveau[k-2][l] === "x") {//deplace un valide sur une croix
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "x@";
                                niveau[k-2][l] = "*";  
                                nbCoups += 1;                              
                            }
                            else if (niveau[k-1][l] === "*" && niveau[k-2][l] === " ") {//deplace un valide dans du vide donc le retransforme en caillou
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "x@";
                                niveau[k-2][l] = "$";   
                                nbCoups += 1;                             
                            }
                            else if (niveau[k-1][l] == " ") {//deplace le joueur dans le vide
                                niveau[k][l] = " ";
                                niveau[k-1][l] = "@";
                                nbCoups += 1;
                            }
                            dessiner()//redessine la zone de jeu une fois le modification faites
                            }
                        }
                    }
                }
                document.getElementById("nbCoups").innerHTML = "Nombre de coups = " + nbCoups;
            }
    });





    //bas
    document.addEventListener("keydown", function(event) {
        
        if (event.code === "ArrowDown") {
            let trouve = false;
            let k;
            let l;
            for(k = 0; k < niveau.length && !trouve ; k++) {//parcours le tableau
                for(l = 0; l < niveau[k].length && !trouve; l++){
                    if(niveau[k][l] == "x@"){//si le joueur est sur une croix
                        trouve = true;
                        if (niveau[k+1][l] !== "#"){//si il n'y a pas de mur a cote du joueur
                            if(niveau[k+1][l] == "*" && niveau[k+1][l] == "x"){
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "x@";               
                                niveau[k+2][l] = "*";
                                nbCoups += 1;
                            }
                            if(niveau[k+2][l] == "x" && niveau[k+1][l] == "$"){//pour valider un caillou en le poussant sur une croix ("x@","$","x")
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "@";               
                                niveau[k+2][l] = "*";
                                nbCoups += 1;
                            }
                            else if (niveau[k+1][l] == "$" && niveau[k+2][l] == " ") {//avance un caillou dans le vide
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "@";
                                niveau[k+2][l] = "$";   
                                nbCoups += 1;                           
                            }
                            else if (niveau[k+1][l] == "*" && niveau[k+2][l] == " ") {//avance un valider dans le vide
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "x@";
                                niveau[k+2][l] = "$";    
                                nbCoups += 1;                            
                            }
                            else if (niveau[k+1][l] == "x"){//deplacement du joueur sur une croix
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "x@";
                                nbCoups += 1;
                            }
                            else if (niveau[k+1][l] == " "){//deplacement du joueur dans le vide
                                niveau[k][l] = "x";
                                niveau[k+1][l] = "@";
                                nbCoups += 1;
                            }
                            dessiner()
                        }
                    }
                    else if(niveau[k][l] == "@"){//si le joueur est sur vide
                        trouve = true;
                        if (niveau[k+1][l] !== "#"){//si il y a pa de mur a cote du joueur
                          
                            if(niveau[k+1][l] == "x"){//deplace le joueur sur une croix
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "x@";
                                nbCoups += 1;
                            }
                            else if(niveau[k+1][l] == "$" && niveau[k+2][l] == "x"){//deplace un caillou sur une croix 
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "@";
                                niveau[k+2][l] = "*";
                                nbCoups += 1;
                            }
                            else if (niveau[k+1][l] == "$" && niveau[k+2][l] == " ") {//deplace une caisse dans le vide
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "@";
                                niveau[k+2][l] = "$"; 
                                nbCoups += 1;                             
                            }
                            else if (niveau[k+1][l] == "*" && niveau[k+2][l] === "x") {//deplace un valide sur une croix
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "x@";
                                niveau[k+2][l] = "*";  
                                nbCoups += 1;                              
                            }
                            else if (niveau[k+1][l] === "*" && niveau[k+2][l] === " ") {//deplace un valide dans du vide donc le retransforme en caillou
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "x@";
                                niveau[k+2][l] = "$"; 
                                nbCoups += 1;                               
                            }
                            else if (niveau[k+1][l] == " ") {//deplace le joueur dans le vide
                                niveau[k][l] = " ";
                                niveau[k+1][l] = "@";
                                nbCoups += 1;
                            }
                            dessiner()//redessine la zone de jeu une fois le modification faites
                            }
                        }
                    }
                }
                document.getElementById("nbCoups").innerHTML = "Nombre de coups = " + nbCoups;
            }
    });




    

//bouton pour passer au prochain niveau
    function next(){
        indexNiveauCourant = indexNiveauCourant + 1;
        document.getElementById("win").style.visibility = "hidden";
        reload();
        
    }


//konami code 

    //bon
    const konamiCodeA = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
    let inputA = "";
    document.addEventListener("keydown", (event) => {
      inputA += event.key;
      if (inputA.includes(konamiCodeA)) {
        console.log("Konami Code activé !");
        
        document.getElementById("win").style.visibility = "visible";
        inputA = "";
      }
    });
    

    
    //mauvais

    const konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightab";
let input = "";

document.addEventListener("keydown", (event) => {
  input += event.key;
  if (input.includes(konamiCode)) {
    console.log("Konami Code activé !");
  
   document.body.innerHTML="";
   document.body.style.backgroundImage = "url(../../img/giphy.webp)";
   audio.play();
    input = "";
    

    // Fonction pour lancer le son
    
      
    
  setTimeout(function() {
    location.reload();
      }, 3200);

  }
});

    
    
