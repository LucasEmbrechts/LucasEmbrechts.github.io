    let voitures = [
        {
            img : "SOURCES/IMG/m3.png",
            posX : 1400,
            posY : -200,
            sens:'droite'
        },
        {
            img : "SOURCES/IMG/m4.png",
            posX : 1400,
            posY : -425,
            sens:'droite'
        },            {
            img : "SOURCES/IMG/m5.png",
            posX : 1400,
            posY : -625,
            sens:'droite'
        },            
        {
            img : "SOURCES/IMG/m7.png",
            posX : 200,
            posY : -425,
            sens:'droite'
        },            {
            img : "SOURCES/IMG/m8.png",
            posX : 200,
            posY : -625,
            sens:'droite'
        }
        ]
        dessiner()
        let joueur=document.getElementById("joueur")
        let posYVoiture = 800;
        let avance = false;
        let recule = false;
        
        joueur.style.transform="translateY("+posYVoiture+"px)"
        
        
        function avancer(){
            posYVoiture -= 10;
            joueur.style.transform="translateY("+posYVoiture+"px)"
        }
        
        function reculer(){
            posYVoiture += 10;
            joueur.style.transform="translateY("+posYVoiture+"px)"
        }
        
        document.addEventListener('keydown', (event) => {
            if(event.key == "ArrowUp"){
                avance = true;
            }else
            {
                if(event.key=="ArrowDown"){
                    recule=true;
                }
            }
            
        });
        
        document.addEventListener('keyup', (event) => {
            if(event.key == "ArrowUp"){
                avance = false;
            }else
            {
                if(event.key=="ArrowDown"){
                    recule=false;
                }
                
            }
            
        });
        
        function bouger(){
            if(avance){
                if(posYVoiture>0){
                    avancer();
                }else{
                    window.location.href='victoire.html'
                    
                }
                
            }
            if(recule){
                if(posYVoiture<800){
                    reculer()
                }
            }
            let voitureop=document.getElementsByClassName('voitures')
            for(let compteur=0;compteur<voitureop.length;compteur++){
                if(seTouche(joueur,voitureop[compteur])){
                    window.location.href='defaite.html'
                    

                }
            }
            requestAnimationFrame(bouger)
        }
        
        requestAnimationFrame(bouger)
        requestAnimationFrame(bougerVoitures)
        
        
        function dessiner(){
            let b=document.getElementById("b")      
            for (let compteur=0;compteur<voitures.length;compteur++){
                b.innerHTML+="<div class='vdroite voitures' style=background-image:url('"+voitures[compteur].img+"');transform:translate("+voitures[compteur].posX+"px,"+ voitures[compteur].posY+"px)></div>"
            }
            
        }
        function bougerVoitures(){
            let lmvoitures=document.getElementsByClassName("voitures")
            for (let compteur=0;compteur<lmvoitures.length;compteur++ ){
                if(voitures[compteur].posX>1300){
                    voitures[compteur].sens='gauche'
                    
                }
                if(voitures[compteur].posX<250){
                    voitures[compteur].sens='droite'
                }
                if(voitures[compteur].sens=='droite'){
                    voitures[compteur].posX+=20
                    lmvoitures[compteur].style.transform="translate("+voitures[compteur].posX+"px,"+ voitures[compteur].posY+"px) rotate(0deg)"
                }else{
                    voitures[compteur].posX-=20
                    lmvoitures[compteur].style.transform="translate("+voitures[compteur].posX+"px,"+ voitures[compteur].posY+"px) rotate(180deg)"
                }
            }
            requestAnimationFrame(bougerVoitures)
            
            
        }
        function seTouche(element1, element2) {
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
        