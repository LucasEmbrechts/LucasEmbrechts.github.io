
        
        // Insérer
        //localStorage.setItem("achats", JSON.stringify(tableau)) 
        // Récupérer
        //let tableau = JSON.parse(localStorage.getItem("achats"))





        let argentlocal = parseInt(localStorage.getItem('argent')) || 0; // si pas de sauvegarde, commence à 0 || recupere l'argent
        argentp = document.getElementById("argentp");
        argentprix = document.getElementById("argentprix");

        function argent() {
            argentp.innerHTML = argentlocal.toFixed(2) //affiche l'argent actuel arrondi à l'entier le plus proche
        }
        argent()

        function retour() {
            localStorage.setItem('argent', argentlocal.toFixed(2)); //enregistre l'argent quand on quitte
        }


        const titreElement = document.getElementById("Titreavion");
        let Titreavion = titreElement.textContent; // valeur initiale

        barMania = document.getElementById("barMania")
        barSante = document.getElementById("barSante")
        barPuissancefeu = document.getElementById("barPuissancefeu")
        barStockcarburant = document.getElementById("barStockcarburant")

        buttonselection = document.getElementById("selectionner")
        buttondeselection = document.getElementById("deselectionner")
        buttonacheter = document.getElementById("acheter")

        let avion = 0

        // récupérer la sélection sauvegardée dans le localStorage
        let selectionTab = JSON.parse(localStorage.getItem("selection")) || []; // si pas de sauvegarde, commence avec un tableau vide pour pas faire de error
        let acheterTab = JSON.parse(localStorage.getItem("acheter")) || []; // si pas de sauvegarde, commence avec un tableau vide pour pas faire de error

        function updateBoutons() {
            // récupère le texte sauvegardé dans le localStorage
            let sauvegardeLocalStorage = localStorage.getItem("selection")
            selectionTab = JSON.parse(sauvegardeLocalStorage) || []

            // vérifie si l'avion affiché est dans le tableau des sélectionnés , false si non
            let avionEstSelectionne = selectionTab.includes(avion)

            if (avionEstSelectionne == true) {
                buttondeselection.style.display = "block"
                buttonselection.style.display = "none"
            } else {
                buttondeselection.style.display = "none"
                buttonselection.style.display = "block"
            }


            let sauvegardeLocalStorage2 = localStorage.getItem("acheter")
            acheterTab = JSON.parse(sauvegardeLocalStorage2) || []

            let avionEstAchete = acheterTab.includes(avion)

            if (avion === 0 || avionEstAchete == true) {
                buttonacheter.style.display = "none"
            } else {
                buttonacheter.style.display = "block"
                buttondeselection.style.display = "none"
                buttonselection.style.display = "none"
            }
        }

        function selection() {
            // On crée un tableau avec seulement l'avion affiché (un seul à la fois)
            selectionTab = [avion]

            // On convertit le tableau en texte pour pouvoir le sauvegarder
            let selectionTexte = JSON.stringify(selectionTab)

            // On sauvegarde dans le localStorage
            localStorage.setItem("selection", selectionTexte)

            // On met à jour les boutons pour refléter le changement
            updateBoutons()


            if (valeursound == "true") { 
                clickSound.pause();
                clickSound.currentTime = 0;
                clickSound.play();
            } else {
                let clickSound = null
            }
        }

        function deselection() {
            // On vide le tableau (aucun avion sélectionné)
            selectionTab = []

            // On convertit le tableau vide en texte pour pouvoir le sauvegarder
            let selectionTexte = JSON.stringify(selectionTab)

            // On sauvegarde dans le localStorage
            localStorage.setItem("selection", selectionTexte)

            // On met à jour les boutons pour refléter le changement
            updateBoutons()

            if (valeursound == "true") { 
                clickSound.pause();
                clickSound.currentTime = 0;
                clickSound.play();
            } else {
                let clickSound = null
            }
        }

        function acheter() {
            if (avion == 1 && argentlocal >= 500) {
                argentlocal = argentlocal - 500
                acheterTab.push(1)
                localStorage.setItem("acheter", JSON.stringify(acheterTab))
                argent()
                updateBoutons()
                localStorage.setItem('argent', argentlocal.toFixed(2)); //enregistre l'argent 
            } else {
                if (avion == 2 && argentlocal >= 1950) {
                    argentlocal = argentlocal - 1950
                    acheterTab.push(2)
                    localStorage.setItem("acheter", JSON.stringify(acheterTab))
                    argent()
                    updateBoutons()
                    localStorage.setItem('argent', argentlocal.toFixed(2)); //enregistre l'argent 
                } else {
                    alert("Vous n'avez pas assez d'argent pour acheter cet avion.")
                }
            }     
        }

        function fleche_droite() {
            if(avion == 0 || avion == 1){ //verifie si l'avion = 0 ou 1 pour pas que sa soit a + 2 parce que 2+1 = 3
                avion = avion + 1
                console.log(avion)
                aviontemplate()
            }
            if (valeursound == "true") { 
                clickSound.pause();
                clickSound.currentTime = 0;
                clickSound.play();
            } else {
                let clickSound = null
            }
        }
        function fleche_gauche() {
            if(avion == 1 || avion == 2){ //verifie quand avion = 1 ou 2 pour pas atteindre "-1"
                avion = avion - 1
                console.log(avion)
                aviontemplate()
            }
            if (valeursound == "true") { 
                clickSound.pause();
                clickSound.currentTime = 0;
                clickSound.play();
            } else {
                let clickSound = null
            }
        }

        localStorage.setItem("selection", JSON.stringify(selectionTab))
        updateBoutons()



        //localStorage.setItem("selection", "avion1.png")





        //Quand tu achètes
        //let tableau = JSON.parse(localStorage.getItem("achats"))
        //tableau.push(1) //1 = avion 1, 2 = avion 2, 3 = avion 3, etc
        //localStorage.setItem("achats", JSON.stringify(tableau))

        // Vérifier si il a acheté
        //if(tab.includes(5)){...}

        //tous les avions
        function aviontemplate()  {
            if(avion == 0){
                titreElement.textContent = "Cessna 172 Skyhawk";
                barMania.style.width = 45 + "%"
                barSante.style.width = 20 + "%"
                barPuissancefeu.style.width =  2 + "%" //Null
                barStockcarburant.style.width = 25 + "%"
                document.getElementById("avion").style.backgroundImage = "url('sources/img/avion1.png')";
                document.getElementById("avion").style.width = "360px"
                document.getElementById("avion").style.top = "255px"
                document.getElementById("avion").style.left = "30px"
                argentprix.innerHTML = "free" //argent gratuit
                buttonacheter.style.display = "none"
            }
            if(avion == 1){
                titreElement.textContent = "Spitfire";
                barMania.style.width = 58 + "%"
                barSante.style.width = 25 + "%"
                barPuissancefeu.style.width =  2 + "%" //Null
                barStockcarburant.style.width = 45 + "%"
                document.getElementById("avion").style.backgroundImage = "url('sources/img/Spitfire-rotated.png')";
                document.getElementById("avion").style.width = "560px"
                document.getElementById("avion").style.top = "700px"
                document.getElementById("avion").style.left = "550px"
                argentprix.innerHTML = "500"
            }
            if(avion == 2){
                titreElement.textContent = "FA-18";
                barMania.style.width = 85 + "%"
                barSante.style.width = 75 + "%"
                barPuissancefeu.style.width =  70 + "%" //Null
                barStockcarburant.style.width = 65 + "%"
                document.getElementById("avion").style.backgroundImage = "url('sources/img/avion2.png')";
                document.getElementById("avion").style.width = "500px"
                document.getElementById("avion").style.top = "255px"
                document.getElementById("avion").style.left = "30px"
                argentprix.innerHTML = "1950"
            }
            updateBoutons()
        }

        aviontemplate()

        let valeursound = localStorage.getItem("sound") //regarde se qui et sauvegarder dans sound
        let clickSound = new Audio('sources/son/button.mp3'); // Son de clic pour les boutons
        if (valeursound == "true") { 
            clickSound.play();
            clickSound.volume = 0.01; 
        } else {
            let clickSound = null
        }

