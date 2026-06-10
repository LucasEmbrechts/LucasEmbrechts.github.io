 //Option
        //SpawnRate            
        spawnrate_cloud = 2058
        spawnrate_building = 5355
        spawnrate_oiseaux = 2896
        spawnrate_jerican = 2963
        spawnrate_avion_ennemi = 12123
        spawnrate_mongolfiere = 10410
        spawnrate_kit = 9632
        spawnrate_boostspeed = 14532
        spawnrate_argent = 2500
    // Vitesse de déplacement
        let vitesse = 7;
    //Vitesse des obstacles
        let vitesse_temps = 5
    //Durer du carburant 11 secondes
        let dureeTotale = 15000;

//stade 1 0-300 score
    //spawnrate_cloud = 3525
    //spawnrate_building = 5000
    //spawnrate_oiseaux = 2490

//stade 2 300-800 score
    //spawnrate_cloud = 2525 
    //spawnrate_building = 4500
    //spawnrate_oiseaux = 2290

//stade 3 800-1500 score
    //spawnrate_cloud = 2025 
    //spawnrate_building = 15000 
    //spawnrate_oiseaux = 3090

//stade 4 1500-3500 score
    //spawnrate_cloud = 1525 
    //spawnrate_building = 5000 
    //spawnrate_oiseaux = 1890

//stade 5 3500-5000 score
    //spawnrate_cloud = 1305 
    //spawnrate_building = 4000 
    //spawnrate_oiseaux = 1560

//stade 6 5000-10000 score
    //spawnrate_cloud = 1005 
    //spawnrate_building = 3000 
    //spawnrate_oiseaux = 1060

//stade 7 10000-20000 score
    //spawnrate_cloud = 905 
    //spawnrate_building = 2500 
    //spawnrate_oiseaux = 960



//variable et constante
    let jeuPause = false;
    let menuAffiche = false;
    let Mort = false
    let vie = 5
    let boostActif = false
    let argentActif = false
    let bidonActif = false
    let kitActif = false
    let valeursound = localStorage.getItem("sound")
    let avion = JSON.parse(localStorage.getItem("selection")) || 0;


    const player = document.getElementById('player');
    if (valeursound == "true") { 
        audio1 = new Audio('sources/son/avion1_bruit.mp3'); //sound avion
        audio1.loop = true;
        audio1.volume = 0.035
        crash = new Audio('sources/son/Crash.mp3'); //sound avion
        crash.volume = 0.08
        audio2 = new Audio('sources/son/avion2_bruit.mp3'); //sound boost
        audio2.loop = true;
        audio2.volume = 0.060
        money_pickup = new Audio('sources/son/money_pickup.mp3'); //sound argent
        money_pickup.volume = 0.08
    }

    boutonpause = document.getElementById("pause")
    menupause = document.getElementById("menupause")
    menupause.style.display = "none"
    gamecontainer = document.getElementById("game-container")
    barrevie = document.getElementById("barrevie")
    barrecarburant = document.getElementById("barrecarburant")
    Mortecran = document.getElementById("mort")
    argentfin = document.getElementById("argentfin")
    vitessep = document.getElementById("vitessep")
    multiplicateurp = document.getElementById("multiplicateur")

    const container = document.getElementById('boxnuage');
    Mortecran.style.display ="none"

    let obstaclesEnCours = [];
    let jaugevie = 100
    let jaugecarburant = 100
    let argent = 0;
    let argentlocal = parseInt(localStorage.getItem('argent')) || 0; // si pas de sauvegarde, commence à 0 || recupere l'argent
    let obstacles = [
        {
            id:1,
            img : 'immeuble1.png',
            degats : 90,
            quantite: 0,
            kitquantite: 0,
            type : "I",
            heigth : 417,
            width : 228
        },
        {
            id:2,
            img : 'immeuble2.png',
            degats : 90,
            quantite: 0,
            kitquantite: 0,
            type : "I",
            heigth : 450,
            width : 90
        },
        {
            id:3,
            img : "nuage1.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 150,
            width : 150
        },
        {
            id:4,
            img : "nuage2.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 200,
            width : 200
        },
        {
            id:5,
            img : "nuage3.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 210,
            width : 210
        },
        {
            id:6,
            img : "nuage4.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 220,
            width : 220
        },
        {
            id:7,
            img : "nuage5.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 190,
            width : 190
        },
        {
            id:8,
            img : "nuage6.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 200,
            width : 200
        },
        {
            id:9,
            img : "nuage7.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 180,
            width : 180
        },
        {
            id:10,
            img : "nuage8.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 200,
            width : 200
        },
        {
            id:11,
            img : "nuage9.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 230,
            width : 230
        },
        {
            id:12,
            img : "nuage10.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 200,
            width : 200
        },
        {
            id:13,
            img : "nuage11.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 150,
            width : 150
        },
        {
            id:14,
            img : "nuage12.png",
            degats:0,
            quantite: 0,
            kitquantite: 0,
            type : "N",
            heigth : 240,
            width : 240
        },
        {
            id:15,
            img : "oiseaux.png",
            degats:0.6,
            quantite: 0,
            kitquantite: 0,
            type : "O",
            heigth : 176,
            width : 380
        },
        {
            id:16,
            img : "oiseaux2.png",
            degats:0.6,
            quantite: 0,
            kitquantite: 0,
            type : "O",
            heigth : 138,
            width : 182
        },
        {
            id:17,
            img : "oiseaux3.png",
            degats:0.6,
            quantite: 0,
            kitquantite: 0,
            type : "O",
            heigth : 122,
            width : 200
        },
        {
            id:18,
            img : "bidon_carburant.png",
            degats:0,
            quantite: 30,
            kitquantite: 0,
            type : "J", 
            heigth : 70,
            width : 70
        },
        {
            id:19,
            img : "avion_ennemi1.png",
            degats: 80,
            quantite: 0,
            kitquantite: 0,
            type : "A", 
            heigth : 111,
            width : 334
        },
        {
            id:20,
            img : "mongolfiere.png",
            degats: 60,
            quantite: 0,
            kitquantite: 0,
            type : "M", 
            heigth : 300,
            width : 208
        },
        {
            id:21,
            img : "reparation.png",
            degats: 0,
            quantite: 0,
            kitquantite: 30,
            type : "K", 
            heigth : 70,
            width : 85
        },
        {
            id:22,
            img : "boost_speed.png",
            degats: 0,
            quantite: 0,
            kitquantite: 0,
            type : "BS", 
            heigth : 70,
            width : 70
        },
        {
            id: 23,
            img : "logo_argent.png" ,
            degats: 0,
            quantite: 0,
            kitquantite: 0,
            type: "AR",
            heigth : 60,
            width : 80 
        }
    ]

   //debug
    let valeurdebug = localStorage.getItem("debug")
    jaugeviedebug = document.getElementById("jaugevie")
    jaugecarburantdebug = document.getElementById("jaugecarburant")
    vitesse_tempsdebug = document.getElementById("vitesse_temps")
    x_ydebug = document.getElementById("x_y")
    Mortdebug = document.getElementById("Mortdebug")
    multdebug = document.getElementById("multdebug")
    Pausedebug = document.getElementById("Pausedebug") 
    Keydebug = document.getElementById("Keydebug")
    aviondebug = document.getElementById("aviondebug")
    vitesse_deplacdebug = document.getElementById("vitess_deplac")
    dureeTotaledebug = document.getElementById("dureetotaldebug")
    pertedebug = document.getElementById("perte")

    if (valeurdebug == "true") {
        document.getElementById("debug").style.display = "block"

        setInterval(function() {
            aviondebug.innerHTML = "avion: " + avion
            jaugeviedebug.innerHTML = "jaugevie: " + jaugevie.toFixed(2)
            jaugecarburantdebug.innerHTML = "jaugecarburant: " + jaugecarburant.toFixed(2)
            vitesse_tempsdebug.innerHTML = "vitesse_temps: " + vitesse_temps.toFixed(2)
            x_ydebug.innerHTML = "x/y: " + x + "/" + y
            scoredebug.innerHTML = "score: " + scoreAccumule.toFixed(2)      
            argentdebug.innerHTML = "argent: " + argent.toFixed(2)          
            multdebug.innerHTML = "multiplicateur: " + multiplicateur_argent 
            Mortdebug.innerHTML = "Mort: " + Mort
            Pausedebug.innerHTML = "Pause: " + jeuPause
            vitesse_deplacdebug.innerHTML = "vitesse_deplac: " + vitesse
            dureeTotaledebug.innerHTML = "Durée essence: " + dureeTotale.toFixed(2)
        }, 100)
    } else {
        document.getElementById("debug").style.display = "none"
    }





    // Position du carré
    let x = 275;
    let y = 175;

    // Quelles touches sont enfoncées ?
    let haut = false;
    let bas = false;

    
    // Taille du joueur
    const playerTaille = 180;

    // Boucle principale
    function bouger() {

        if (!jeuPause) {
            // 1. Déplacement du joueur
            if (haut && y > 0) y -= vitesse;
            if (bas && y < window.innerHeight - 65) y += vitesse;
            player.style.top = y + 'px';

            // 2. Déplacement des obstacles et Collision
            const obstaclesElements = document.querySelectorAll('.obstacle');
            const playerRect = player.getBoundingClientRect();

            obstaclesElements.forEach(obs => {

                let id = obs.id;
                let obstacle = obstacles.filter(e => e['id'] == id)[0]

                let degat = obstacle["degats"]
                let quantite = obstacle["quantite"]
                let kitquantite = obstacle["kitquantite"]
                let type = obstacle["type"];

                // Faire avancer l'obstacle vers la gauche
                let currentLeft = parseFloat(obs.style.left);
                let currentBottom = parseFloat(obs.style.bottom);
                if (type === "A") {
                    currentLeft -= (vitesse_temps + 7)
                }
                else {
                    if (type === "M") {
                        currentLeft -= (vitesse_temps - 3)
                    } else {
                        if (type === "I") {
                            currentLeft -= (vitesse_temps + 1)
                        }
                        else {
                            currentLeft -= vitesse_temps
                        }
                    }
                }

                obs.style.left = currentLeft + 'px';

                // Supprimer l'obstacle s'il sort de l'écran à gauche
                if (currentLeft < -700) {
                    obs.remove();
                    return;
                }

                // --- DETECTION DE COLLISION ---
                const obsRect = obs.getBoundingClientRect(); //retourne 6valeurs , left,right,top,bottom,widht,height

                // On réduit un peu la zone de collision (hitbox) pour que ce soit plus juste visuellement
                if (
                    playerRect.left + 5 < obsRect.right - 5 &&
                    playerRect.right - 15 > obsRect.left + 15 &&
                    playerRect.top + 5 < obsRect.bottom - 5 &&
                    playerRect.bottom - 5 > obsRect.top + 5
                ) {
                    // Collision !
                    //console.log("quantite :" + quantite)
                    //console.log("jaugecarburant" + jaugecarburant)
                    //console.log(degat)
                    //console.log("vie :" + jaugevie)
                    if(avion == 0){
                        jaugevie = jaugevie - degat
                    }
                    else {
                            if(avion == 1){
                                jaugevie = jaugevie - (degat / 1.25)
                            } 
                            else {
                                if(avion == 2){
                                    jaugevie = jaugevie - (degat / 2)
                                }
                                else {
                                    
                                }
                            } 
                        }

                    if(jaugevie >= 0) { //verifie si en vie
                        if (jaugevie < 100 && kitActif == false) {  //verifie si la vie n'est pas deja a 100 et si le kit de reparation n'est pas deja actif
                            jaugevie = jaugevie + kitquantite
                            if (jaugevie > 100) {  //empecher la vie d'aller au dessu de 100
                                jaugevie = 100 
                            }
                            if (type === "K") { //si c est un kit de reparation attendre une seconde
                                kitActif = true
                                setTimeout(function() {
                                    kitActif = false
                                }, 1000)
                            }
                        } 


                        if (type === "J" && bidonActif == false) {
                            bidonActif = true
                            jaugecarburant = jaugecarburant + quantite
                            setTimeout(function() {
                                bidonActif = false
                            }, 1000)
                        } else if (type !== "J") { //!== type different de J
                            jaugecarburant = jaugecarburant + quantite
                        }
                        
                        Mort = false; 

                        barrevie.style.width = jaugevie + "%";
                        barrecarburant.style.width = jaugecarburant + "%";
                    }
                    else { //Mort
                        Mortecran.style.display ="block"
                        Mort = true;
                        jeuPause = true;
                        gamecontainer.style.filter = 'blur(2px)';
                        document.getElementById("score-mort").textContent = scorep.textContent; 
                        localStorage.setItem('argent', (argentlocal + argent).toFixed(2)); //sauvegarde de l'argent + argent local
                        if (valeursound == "true") { //verifie si le son est activer
                            audio1.pause();
                            crash.play();
                        }
                        let ancienScore = parseInt(localStorage.getItem('score')) || 0 //recupere l'ancien score dans le localstorage
                        if (Math.floor(scoreAccumule) > ancienScore) { // compare avaec l ancien score et le nouveau score on enregistre le nouveau que si il est plus grand que l'ancien
                            localStorage.setItem('score', Math.floor(scoreAccumule))
                        }
                    }  
                    
                    if (type === "J" || type === "K" || type === "BS" || type === "AR" ) {  //Si J,A,M,K toucher supprimer l'objet toucher
                        obs.style.transition = "transform 0.3s,opacity 0.3s";  //style de despawn
                        obs.style.transform = "scale(0)"; 
                        obs.style.opacity = "0";
                        setTimeout(function() {
                            obs.remove();  //despawn de l'objet apres 300 milisecondes
                        }, 300);
                    } else {
                        if (type === "A" || type === "M") { 
                            obs.remove(); //despawn de l'oiseau apres la collision
                        }
                    }
                    if (type === "AR" && argentActif == false) {
                        argentActif = true
                        argent = argent + (5 * multiplicateur_argent); //systeme de multiplicateur d'argent

                        if (valeursound == "true") { //verifie si le son est activer
                            money_pickup.play();
                        }
                        setTimeout(function() {
                            argentActif = false
                        }, 1000);
                    }
                    if (type === "BS" && boostActif == false) {
                        boostActif = true
                        vitesse_temps = vitesse_temps * 1.5;
                        if(avion == 2){
                            player.style.backgroundImage = 'url(sources/img/avion2_boost.png)';
                            gamecontainer.classList.add("camera-effect")
                            if (valeursound == "true") { //verifie si le son est activer
                                audio2.play();
                            }
                        } else {
                            gamecontainer.classList.add("camera-effect")
                            if (valeursound == "true") { //verifie si le son est activer
                                audio1.volume = 0.060
                            }
                        }
                        setTimeout(function() {
                            vitesse_temps = vitesse_temps / 1.5
                            boostActif = false
                                if(avion == 2){
                                    player.style.backgroundImage = 'url((sources/img/avion2.png)';
                                    gamecontainer.classList.remove("camera-effect")
                                    if (valeursound == "true") {
                                        audio2.pause();
                                    }
                                } else {
                                    gamecontainer.classList.remove("camera-effect")
                                    if (valeursound == "true") { //verifie si le son est activer
                                        audio1.volume = 0.035
                                    }
                                }
                        }, 5000);
                    }
                }
            });
        }
        requestAnimationFrame(bouger);
    }



//function mouvement
    // Quand on appuie sur une touche
    document.addEventListener('keydown', function(event) {
        if(jeuPause == false && Mort == false) { //verifie si en pause ou mort
            if(jaugecarburant > 0) { //si plus de carburant ne peut pas monter
                if (event.key === 'ArrowUp'){
                    haut = true; 
                    player.style.transform = "rotate(-7deg)";
                    Keydebug.innerHTML = "Key: " + "ArrowUp"
                } 
            }
            if (event.key === 'ArrowDown'){
                bas = true;
                player.style.transform = "rotate(7deg)";
                Keydebug.innerHTML = "Key: " + "ArrowDown"
            } 
        }
        console.log(event.key);
        if (event.key === 'Escape'){
            if(menuAffiche == false){
                pause();
                menuAffiche = true;
            }else{
                reprendre();
                menuAffiche = false;
            }
        }
        if (event.key === 'F11'){
            requestFullscreen(); //pleine ecran
        }
    });

    // QUAND ON RELÂCHE
    document.addEventListener('keyup', function(event) {
        if(jeuPause == false && Mort == false) { //verifie si en pause ou mort
            if (event.key === 'ArrowUp') haut = false;
            if (event.key === 'ArrowDown') bas = false;

            // Si plus aucune flèche n'est appuyée, on remet à 0
            if (haut == false || bas == false) {
                player.style.transform = "rotate(0deg)";
            }

            Keydebug.innerHTML = "Key: " + "none"
        }    
    });

    // Démarre le programme
    bouger();




//function nuages spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)s
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'N') //filtre que les nuages en creeant un nouveau tableau avec seulement les nuages

            let generer = Math.floor(Math.random() * obstaclesFiltre.length) // math.random nombre decimal aleatoire | .length nombre de nuages | math.floor arrondit
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'N'){
                elem.style.top = Math.random() * 1000 + 'px';
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_cloud);

// Immeubles spawn 
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

    
            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;
            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'I')
            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]

            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';



            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'I'){
                elem.classList.add("batiment");
            }

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_building);

//function oiseaux spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'O')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'O'){
                elem.style.top = Math.random() * 920 + 'px'; //pour pas que sa spawn en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_oiseaux);

//function jerican spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'J')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'J'){
                elem.style.top = Math.random() * 1030 + 'px'; //pour pas que sa spawn en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_jerican);


//function kit spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'K')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'K'){
                elem.style.top = Math.random() * 1030 + 'px'; //pour pas que sa spawn en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_kit);


//function avion_ennemi spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'A')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'A'){
                elem.style.top = Math.random() * 800 + 'px'; //pour pas que sa spawn tout en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_avion_ennemi);

//function mongolfiere spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'M')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'M'){
                elem.style.top = Math.random() * 880 + 'px'; //pour pas que sa spawn tout en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_mongolfiere);



//function boost_speed spawn
    setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'BS')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'BS'){
                elem.style.top = Math.random() * 1020 + 'px'; //pour pas que sa spawn tout en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_boostspeed);


    //function argent spawn
        setInterval(function() {
        if(jeuPause == false) {
            const elem = document.createElement('div');

            // CHANGEMENT 1 : Position de départ
            // On commence tout à droite (par exemple 1920px ou window.innerWidth)
            const startX = 1920;

            let obstaclesFiltre = obstacles.filter(e => e['type'] == 'AR')

            let generer = Math.floor(Math.random() * obstaclesFiltre.length)
            elem.style.left = startX + 'px';
            elem.id = obstaclesFiltre[generer]["id"]
            elem.style.backgroundImage = 'url(sources/img/' + obstaclesFiltre[generer]["img"] + ')';

            // La hauteur (top) est maintenant aléatoire
            
            elem.classList.add("obstacle");

            if( obstaclesFiltre[generer]['type'] == 'AR'){
                elem.style.top = Math.random() * 1020 + 'px'; //pour pas que sa spawn tout en bas
            }
            

            elem.style.width = obstaclesFiltre[generer]["width"] + "px"
            elem.style.height = obstaclesFiltre[generer]["heigth"] + "px"
        
            container.appendChild(elem);
            
            // On stocke 'x' au lieu de 'y'
            obstaclesEnCours.push({ element: elem, x: startX });
        }
    }, spawnrate_argent);



//Argent
    const argentp = document.getElementById("argenthtml"); //element html
    function updateArgent() {
        // 1. le jeu est en pause ou si on est mort, on arrete
        if (jeuPause == false || Mort == false) {
            //Mettre à jour le HTML
            argentfin.innerHTML = "<img src='sources/img/logo_argent.png' width='22' height='15'> "+"+" + argent.toFixed(2) //affiche l'argent gagné arrondi à l'entier le plus proche
            argentp.innerHTML = "<img src='sources/img/logo_argent.png' width='22' height='15'> " + (argentlocal + argent).toFixed(2); //affiche l'argent actuel + argent gagné arrondi à l'entier le plus proche
            localStorage.setItem('argent', (argentlocal + argent).toFixed(2)); //enregistre l'argent
        }
    }
    setInterval(function() {
        // vérifie si on a le droit de jouer
        // le jeu n'est pas en pause et que joueur n'est pas mort
        if (jeuPause == false && Mort == false) { 
            // appelle la fonction qui calcule et affiche le score
            updateArgent() 
        }
    }, 100);


//Score
    let scoreAccumule = 0; // score ne redescendra JAMAIS
    let scoreTotal = 0; // commence à 0
    // afficher le score
    const scorep = document.getElementById("score");

    // variables de score
    let multiplicateur_score = 1;
    const limite = 100;
    const incrementVitesse = 0.05;
    const intervalVitesse = 500;    // 1 seconde
    const intervalScore = 100;     // 100ms pour mise à jour 

    function updateScore() {
        // 1. le jeu est en pause ou si on est mort, on arrete
        if (jeuPause == false || Mort == false) {
            // calcule les points gagnés maintenant
            // prend la vitesse ,on la divise par 10 pour ne pas avoir des trop gros scores
            let pointsGagnes = vitesse_temps / 4;
            
            // ajoute ces points au gros total (scoreAccumule)
            scoreAccumule = scoreAccumule + pointsGagnes;

            // transforme le nombre à virgule en nombre entier (Math.floor)
            let scoreEntier = Math.floor(scoreAccumule);

            // affiche dans le HTML
            scorep.textContent = "Score : " + scoreEntier;
        }
    }

    // Augmentation progressive de la vitesse



    setInterval(function() {
        if (jeuPause == false || Mort == false) {
            if (vitesse_temps < limite) { 
                    vitesse_temps += incrementVitesse;
            }
        }
    },intervalVitesse)

    setInterval(function() {
        
        // vérifie si on a le droit de jouer
        // le jeu n'est pas en pause et que joueur n'est pas mort
        if (jeuPause == false && Mort == false) { 
            
            // augmente un tout petit peu le multiplicateur
            // permet de gagner de plus en plus de points au fil du temps
            multiplicateur_score = multiplicateur_score + 0.02;

            // appelle la fonction qui calcule et affiche le score
            updateScore(); 

            // regarde quel est le score affiché pour savoir si on a gagné
            // transforme le texte "Score : 100" en un vrai nombre (100)
            let texteDuScore = scorep.textContent; 
            let scoreChiffre = parseInt(texteDuScore.replace("Score : ", ""));

        //Vitesse km/h + multiplicateur
            vitessep.innerHTML = (vitesse_temps * 30).toFixed(2) + "km/h" 
            multiplicateur_argent = (vitesse_temps / 8).toFixed(2)
            if(multiplicateur_argent < 1) {
                multiplicateurp.innerHTML = "x" + 1
            } else {
                multiplicateurp.innerHTML = "x" + multiplicateur_argent
            }

            
            //  si on a atteint un palier 
            if (scoreChiffre >= 100) {
            }
        }

    }, intervalScore);
    





    function miseAJour() {
        // verifie si le jeu est en pause
        if (jeuPause == false) {
            // calcule combien de carburant on perd
            if(avion == 0) {
                perte = 0.11
            } else {
                if(avion == 1) {
                    perte = 0.08
                } else {
                    if(avion == 2) {
                        perte = 0.06
                    }
                }
            }
            

            jaugecarburant = Math.min(jaugecarburant, 100); // on bloque à 100
            // retire le carburant
            jaugecarburant = jaugecarburant - perte;
            
            // empeche le carburant d'aller en dessous de 0
            if (jaugecarburant < 0) {
                jaugecarburant = 0;
            }

            // affiche la barre de carburant avec le bon pourcentage (css)
            barrecarburant.style.width = jaugecarburant + "%";

            pertedebug.innerHTML = "Perte: " + perte.toFixed(2) //debug
            
            // carburant encore continue


            if (jaugecarburant > 0) {
                requestAnimationFrame(miseAJour); // Appelle la fonction
            } else {
                faireDescendre() //active la fonction pour descendre
            }
        }
    }  

    // Démarrer
    requestAnimationFrame(miseAJour); //60 frame par seconde pour etre fluide


//Si plus d'essence
    function faireDescendre(){
        if (jeuPause === false) {
            if (jaugecarburant < 5) {
                if(haut == true) {
                    y += 10;
                    player.style.top = y + 'px';
                    requestAnimationFrame(faireDescendre)
                } else {
                    y += 2;
                    player.style.top = y + 'px';
                    requestAnimationFrame(faireDescendre)
                }
            } else {
                if (jaugecarburant > 0) {
                    requestAnimationFrame(miseAJour);
                }
            }
        
            if(player.style.top.replace('px','') > 1080) { //quand top est plus grand que 1080 (au dessou de l ecran) meurt
                    Mort = true;
                    jeuPause = true;
                    Mortecran.style.display = "block";      // montre l'écran de mort
                    gamecontainer.style.filter = 'blur(2px)'; // floute le jeu
                    document.getElementById("score-mort").textContent = scorep.textContent;
                    localStorage.setItem('argent', (argentlocal + argent).toFixed(2)); //sauvegarde de l'argent + argent local
                    localStorage.setItem('score', (scoreAccumule)); //sauvegarde le score
                    if (valeursound == "true") {
                        audio1.pause();
                        crash.play();
                    }
            }
        }
    }




    
//function   
    let clickSound = new Audio('sources/son/button.mp3'); // Son de clic pour les boutons
    if (valeursound == "true") { 
        clickSound.play();
        clickSound.volume = 0.01; 
    } else {
        clickSound == null
    }

    function pause() {
        if(Mort == false) {
            if(valeursound == "true") { //verifie si le son est activer
                clickSound.pause();
                clickSound.currentTime = 0; 
                clickSound.play();
            }

            menupause.style.display ="block"
            jeuPause = true;
            gamecontainer.style.filter = 'blur(2px)';
            if(avion == 0 || avion == 1 && valeursound == "true"){ //verifie si c est l avion 1 ou 2 + si valeursound et true
                audio1.pause();
            } else {
                if(avion == 2 && valeursound == "true"){
                    audio2.pause();
                }
            }
        }
    }
    function reprendre() {
        if(Mort == false) {
            if(valeursound == "true") { //verifie si le son est activer
                clickSound.pause();
                clickSound.currentTime = 0; 
                clickSound.play();
            }

            menupause.style.display ="none"
            jeuPause = false;
            gamecontainer.style.filter = 'none';
            requestAnimationFrame(miseAJour)  //relancer la fonction carburant
            if(avion == 0 || avion == 1 && valeursound == "true"){ //verifie si c est l avion 1 ou 2 + si valeursound et true
                audio1.play();
            } else {
                if(avion == 2 && valeursound == "true" && boostActif == true){
                    audio2.play();
                }
            }
        }
    }
    function rejouer() {
        window.location.reload()
    }
    function menuprincipal() {
        window.location.href = "index.html"
    }
    function aviontemplate()  {
        if(avion == 0){
            player.style.backgroundImage = "url('sources/img/avion1.png')";
            player.style.height = "63px";
            if (valeursound == "true") { //verifie si le son est activer
                audio1.play();
            }
        } 
        else {
                if(avion == 1){
                    player.style.backgroundImage = "url('sources/img/Spitfire-rotated.png')";
                    vitesse_temps = vitesse_temps + 2
                    vitesse = vitesse + 1
                    dureeTotale = 20000;
                    player.style.height = "63px";
                    if (valeursound == "true") { //verifie si le son est activer
                        audio1.play();
                    }
                } 
                else {
                    
                    if(avion == 2){
                        player.style.backgroundImage = "url('sources/img/avion2.png')";
                        vitesse_temps = vitesse_temps + 5
                        vitesse = vitesse + 2.5
                        dureeTotale = 30000;
                        player.style.height = "43px";
                        if (valeursound == "true") { //verifie si le son est activer
                            audio1.pause();  
                        }
                    }
                    else {
                        player.style.height = "63px";
                        player.style.backgroundImage = "url('sources/img/avion1.png')";
                        if (valeursound == "true") { //verifie si le son est activer
                            audio1.play();
                        }
                        avion = 0; //si rien mais l avion de base
                        aviontemplate();
                    }
                } 
            }
    }

    aviontemplate()