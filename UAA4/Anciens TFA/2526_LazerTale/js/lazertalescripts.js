  //Kynan Gaspard Lorik 
        const WIDTH = 3 
        const elemPlateau = document.getElementById('elemPlateau') // c'est le container dans lequel on affichera les cases
        
        
        let plateau = [
        '', '', '',
        '', 'c', '',  
        '', '', ''    
        ]
        
        
        // voici ce que les codes dans le tableau signifient:
        // 'po' = portail orange
        // 'pb' = portail bleu
        // 'os' = os
        // 'c' = coeur (le personnage que tu déplaces)
        // 'e' = étoile
        // 't' = trou
        
        //Gaspard
        let posCoeur = 4 // le joueur commence au milieu 
        let doublevie = false //si la double vie est active ou pas 
        
        let lazer0 =document.getElementById("lazer0")
        let lazer1 =document.getElementById("lazer1")
        let lazer2 =document.getElementById("lazer2")
        let lazer3 =document.getElementById("lazer3")
        let lazer4 =document.getElementById("lazer4")
        let lazer5 =document.getElementById("lazer5")
        let lazer6 =document.getElementById("lazer6")
        let lazer7 =document.getElementById("lazer7")
        let lazer8 =document.getElementById("lazer8")
        let lazer9 =document.getElementById("lazer9")
        let lazer10 =document.getElementById("lazer10")
        let lazer11 =document.getElementById("lazer11")
        let lazer12 =document.getElementById("lazer12")
        let lazer13 =document.getElementById("lazer13")
        let lazer14 =document.getElementById("lazer14")
        let lazer15 =document.getElementById("lazer15")
        let lazer16 =document.getElementById("lazer16")
        let lazer17 =document.getElementById("lazer17")
        
        let lasers = []
        
        //Gaspard Lorik
        function dessiner() {
            // on vide l'ancienne version du plateau pour repartir propre
            elemPlateau.innerHTML = ''
            
            // on passe chaque case en revue
            for (let i = 0; i < plateau.length; i++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                
                
                if (plateau[i] === 'po') cell.classList.add('portail-orange')
                else if (plateau[i] === 'pb') cell.classList.add('portail-bleu')
                else if (plateau[i] === 'os') cell.classList.add('os')
                else if (plateau[i] === 'c') {
                    if (doublevie == true) {
                        cell.classList.add('coeur2')
                    } 
                    else{
                        cell.classList.add('coeur')
                    }
                }
                else if (plateau[i] === 'e') cell.classList.add('etoile')
                else if (plateau[i] === 't') cell.classList.add('trou')
                
                // si un laser traverse la case, on met le style rouge
                //if (lasers.some(l => l.pos === i)) {
                //  cell.classList.add('laser')
                //}
                
                elemPlateau.appendChild(cell)
            }
        }
        //Lorik
        function moveCoeur(newPos) {
            //empecher que le coeur sorte du plateau 
            if (newPos < 0 || newPos >= plateau.length) return
            
            if (plateau[newPos] != "os"){
                
                //pour les fonctions des items du jeu 
                if (plateau[newPos] == "t"){
                    window.location.href="gameover.html"
                }
                
                if (plateau[newPos] == "e"){
                    doublevie = true
                    plateau[posCoeur] = ''
                    plateau[newPos] = 'c'
                    posCoeur = newPos
                }
                
                if (plateau[newPos] == ""){
                    plateau[posCoeur] = ''
                    plateau[newPos] = 'c'
                    posCoeur = newPos
                }
                
                
                
                if (plateau[newPos] == "pb"){
                    let posOrange = plateau.findIndex((e) => e == "po");
                    plateau[posOrange] ='c'
                    plateau[posCoeur] = ''
                    plateau[newPos] = ''
                    posCoeur = posOrange
                }
                
                
                if (plateau[newPos] == "po"){
                    let posBleu = plateau.findIndex((e) => e == "pb");
                    plateau[posBleu] ='c'
                    plateau[posCoeur] = ''
                    plateau[newPos] = ''
                    posCoeur = posBleu
                    
                } 
                //on appelle la fonction pour verifier si le lazer touche 
                verifLaserTouche()
                //on appelle la fonction dessiner pour 
                dessiner()
            }
            
            
            
        }
        /*
            lazer0: case0 V
            lazer1: case0 H
            lazer2: case1 V
            lazer3: case1 H
            lazer4: case2 V
            lazer5: case2 H
            lazer6: case3 V
            lazer7: case3 H
            lazer8: case4 V
            lazer9: case4 H
            lazer10: case5 V
            lazer11: case5 H
            lazer12: case6 V
            lazer13: case6 H
            lazer14: case7 V
            lazer15: case7 H
            lazer16: case8 V
            lazer17: case8 H  
        */

        //Gaspard

        //pour dessiner les lazers
        function dessinerlazers (){
            lazer0.style.display="none"
            lazer1.style.display="none"
            lazer2.style.display="none"
            lazer3.style.display="none"
            lazer4.style.display="none"
            lazer5.style.display="none"
            lazer6.style.display="none"
            lazer7.style.display="none"
            lazer8.style.display="none"
            lazer9.style.display="none"
            lazer10.style.display="none"
            lazer11.style.display="none"
            lazer12.style.display="none"
            lazer13.style.display="none"
            lazer14.style.display="none"
            lazer15.style.display="none"
            lazer16.style.display="none"
            lazer17.style.display="none"
            
            //pour pouvoir faire apparaitre les lazers sur le plateau de jeu 
              for (let compteur = 0; compteur < lasers.length; compteur = compteur + 1){
                if (lasers[compteur]== 0){
                   lazer0.style.display="block"
                   lazer6.style.display="block"
                   lazer12.style.display="block"
                }
                if (lasers[compteur]== 1){
                   lazer2.style.display="block"
                   lazer8.style.display="block"
                   lazer14.style.display="block"  
                }
                if (lasers[compteur]== 2){
                   lazer4.style.display="block"
                   lazer10.style.display="block"
                   lazer16.style.display="block" 
                }
                if (lasers[compteur]== 3){
                   lazer5.style.display="block"
                   lazer3.style.display="block"
                   lazer1.style.display="block"
                }
                if (lasers[compteur]== 4){
                   lazer11.style.display="block"
                   lazer9.style.display="block"
                   lazer7.style.display="block"
                }
                if (lasers[compteur]== 5){
                    lazer17.style.display="block"
                    lazer15.style.display="block"
                    lazer13.style.display="block"
                }
                if (lasers[compteur]== 6){
                   lazer16.style.display="block"
                   lazer10.style.display="block"
                   lazer4.style.display="block"
                }
                if (lasers[compteur]== 7){
                   lazer14.style.display="block" 
                   lazer8.style.display="block"
                   lazer2.style.display="block"
                }
                if (lasers[compteur]== 8){
                   lazer4.style.display="block"
                   lazer10.style.display="block"
                   lazer16.style.display="block"
                }
                if (lasers[compteur]== 9){
                   lazer13.style.display="block"
                   lazer15.style.display="block"
                   lazer17.style.display="block"
                }
                if (lasers[compteur]== 10){
                   lazer7.style.display="block"
                   lazer9.style.display="block"
                   lazer11.style.display="block"
                }
                if (lasers[compteur]== 11){
                   lazer4.style.display="block"
                   lazer10.style.display="block"
                   lazer16.style.display="block"
                }
            }
        }
        //Gaspard Lorik
        function spawnLaser() {

            // Générer un nombre entre 0 et 11
            lasers=[]
            let lazer = Math.floor(Math.random() * 12);
            // Tant que ce nombre est déjà présent dans le tab lazers
            while(lasers.includes(lazer)){
                lazer = Math.floor(Math.random() * 12);
            }
            // Ajoute ce nombre dans le tab lazers
             lasers.push(lazer)
             animationLazer(lazer);
            setTimeout(()=> verifLaserTouche(), 1000)
        }
        //Gaspard 
        //pour anilmer les lazers 
        function animationLazer(lazer){
            lazer0.classList.add("animLazer")
            lazer1.classList.add("animLazer")
            lazer2.classList.add("animLazer")
            lazer3.classList.add("animLazer")
            lazer4.classList.add("animLazer")
            lazer5.classList.add("animLazer")
            lazer6.classList.add("animLazer")
            lazer7.classList.add("animLazer")
            lazer8.classList.add("animLazer")
            lazer9.classList.add("animLazer")
            lazer10.classList.add("animLazer")
            lazer11.classList.add("animLazer")
            lazer12.classList.add("animLazer")
            lazer13.classList.add("animLazer")
            lazer14.classList.add("animLazer")
            lazer15.classList.add("animLazer")
            lazer16.classList.add("animLazer")
            lazer17.classList.add("animLazer")
            if(lazer == 0){
                lazer0.classList.add("animLazer")
                lazer6.classList.add("animLazer")
                lazer12.classList.add("animLazer")
            }
             if(lazer == 1){
                lazer2.classList.add("animLazer")
                lazer8.classList.add("animLazer")
                lazer14.classList.add("animLazer")
            }
             if(lazer == 2){
                lazer4.classList.add("animLazer")
                lazer10.classList.add("animLazer")
                lazer16.classList.add("animLazer")
            }
             if(lazer == 3){
                lazer5.classList.add("animLazer")
                lazer3.classList.add("animLazer")
                lazer1.classList.add("animLazer")
            }
             if(lazer == 4){
                lazer11.classList.add("animLazer")
                lazer9.classList.add("animLazer")
                lazer7.classList.add("animLazer")
            }
             if(lazer == 5){
                lazer17.classList.add("animLazer")
                lazer15.classList.add("animLazer")
                lazer13.classList.add("animLazer")
            }
             if(lazer == 6){
                lazer16.classList.add("animLazer")
                lazer10.classList.add("animLazer")
                lazer4.classList.add("animLazer")
            }
             if(lazer == 7){
                lazer14.classList.add("animLazer")
                lazer8.classList.add("animLazer")
                lazer2.classList.add("animLazer")
            }
             if(lazer == 8){
                lazer4.classList.add("animLazer")
                lazer10.classList.add("animLazer")
                lazer16.classList.add("animLazer")
            }
             if(lazer == 9){
                lazer13.classList.add("animLazer")
                lazer15.classList.add("animLazer")
                lazer17.classList.add("animLazer")
            }
             if(lazer == 10){
                lazer7.classList.add("animLazer")
                lazer9.classList.add("animLazer")
                lazer11.classList.add("animLazer")
            }
             if(lazer == 11){
                lazer4.classList.add("animLazer")
                lazer10.classList.add("animLazer")
                lazer16.classList.add("animLazer")
            }
        }
        //Gaspard
        function verifLaserTouche(){
            // Parcourir le tab laser
            let posCoeur = plateau.findIndex((e) => e == "c");
             for (let compteur = 0; compteur < lasers.length; compteur = compteur + 1){

                //pour faire en sorte que les lazers nous tue 
                if (lasers[compteur]== 0){
                    if(posCoeur == 0 || posCoeur == 6 || posCoeur == 12){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 1){
                    if(posCoeur == 2 || posCoeur == 8 || posCoeur == 14){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 2){
                    if(posCoeur == 4 || posCoeur == 10 || posCoeur == 16){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 3){
                    if(posCoeur == 5 || posCoeur == 3 || posCoeur == 1){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 4){
                    if(posCoeur == 11 || posCoeur == 9 || posCoeur == 7){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 5){
                    if(posCoeur == 17 || posCoeur == 15 || posCoeur == 13){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 6){
                    if(posCoeur == 16 || posCoeur == 10 || posCoeur == 4){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 7){
                    if(posCoeur == 14 || posCoeur == 8 || posCoeur == 2){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 8){
                    if(posCoeur == 4 || posCoeur == 10 || posCoeur == 16){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 9){
                    if(posCoeur == 13 || posCoeur == 15 || posCoeur == 17){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 10){
                    if(posCoeur == 7 || posCoeur == 9 || posCoeur == 11){
                        window.location.href='gameover.html'
                    }
                }
                if (lasers[compteur]== 11){
                    if(posCoeur == 4 || posCoeur == 10 || posCoeur == 16){
                        window.location.href='gameover.html'
                    }
                }
            }
        }
        
        document.addEventListener('keydown', function (event) {
            let target = posCoeur
            
            //Gaspard Kynan Lorik
            
            //pour les deplacements du coeur
            if (event.key === 'ArrowUp') target = posCoeur - WIDTH
            else if (event.key === 'ArrowDown') target = posCoeur + WIDTH
            else if (event.key === 'ArrowLeft') {
                // si on est pas sur le bord gauche, on recule d'un
                if (posCoeur % WIDTH !== 0) target = posCoeur - 1
                else return
            } else if (event.key === 'ArrowRight') {
                // si on est pas sur le bord droit, on avance d'un
                if (posCoeur % WIDTH !== WIDTH - 1) target = posCoeur + 1
                else return
            } else {
                return
            }
            
            
            moveCoeur(target)
        })
        
        
        setInterval(function () {
        spawnLaser()
        dessinerlazers()
        },4000)
        
        
        //Lorik Gaspard
        function spawnItem(){
            let espvide = 0  
            
            for (let compteur = 0; compteur <= 8; compteur = compteur + 1){
                if (plateau[compteur]==''){
                    espvide = espvide +1 
                }
                
            }
            //pour voir les espace vide restant
            if(espvide >= 1){
                let items = ['os','e','t','p']
                let ig =  Math.floor(Math.random() * items.length);
                let posGeneree = Math.floor(Math.random() * 9);

                // on génère un portail
                if( items[ig] == "p" ){
                    if(espvide >= 2 && !plateau.includes('po')){
                        while (plateau[posGeneree] != ''){
                            posGeneree = Math.floor(Math.random() * 9);
                        }
                        let posGeneree2 = Math.floor(Math.random() * 9);
                        while (plateau[posGeneree2] != '' || posGeneree2 == posGeneree){
                            posGeneree2 = Math.floor(Math.random() * 9);
                        }
                        plateau[posGeneree] = 'pb'
                        plateau[posGeneree2] = 'po'
                    }
                    else{
                        // On réessaie si le portail n'a pas pu être placé
                        spawnItem()
                        return
                    }
                }
                //Gaspard
                // on génère autre chose qu'un portail
                else{
                    if (items[ig] == 't'){
                        if(plateau.includes('t')){
                            spawnItem()
                            return
                        }
                    }

                     if (items[ig] == 'os'){
                        if(plateau.includes('os')){
                            spawnItem()
                            return
                        }
                    }

                     if (items[ig] == 'e'){
                        if(plateau.includes('e')){
                            spawnItem()
                            return
                        }
                    }


                    //Lorik

                    //pour les intervales de spawn des items
                    while (plateau[posGeneree] != ''){
                        posGeneree = Math.floor(Math.random() * 9);
                    }
                    plateau[posGeneree] = items[ig]

                }
                let intervalleI = Math.floor(Math.random() * 5000);
                setTimeout(()=>spawnItem(),intervalleI)
                dessiner()
            }
            
            
            
        }
        
        
        dessiner()
        setTimeout(()=>spawnItem(),2000)