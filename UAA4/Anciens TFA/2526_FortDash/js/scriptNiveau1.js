        const spanX = document.getElementById("valeurX");
        const vie = document.getElementById("vie");

        
        spanX.textContent = parseInt(localStorage.getItem("vbucks")); // Mise à jour du span


        //si pas de skin re diriger vers le casier et selectionner un skin
        let p = localStorage.getItem("perso")
        if(p== null){
            window.location.href ="casier.html"
        }

        let animActiver = true
        let startActuel = 0;
        let vies=100;
        let niveaux = [
            {
                "nom": "niveau1",
                "elements": [
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 1
                    },                
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 2
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 3
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 4
                    },
                    {
                        posY: 540,
                        type: 'CUBE',
                        start: 4
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 5
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 6
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 7
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 8
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 9
                    },
                    {
                        posY: 540,
                        type: 'BRIQUE',
                        start: 9
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 10
                    },
                    {
                        posY: 450,
                        type: 'ARGENT',
                        start: 10
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 11
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 12
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 13
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 13
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 14
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 15
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 16
                    },
                    {
                        posY: 450,
                        type: 'ARGENT',
                        start: 16
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 20
                    },
                    {
                        posY: 540,
                        type: 'CUBE',
                        start: 22
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 22
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 23
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 24
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 24
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 25
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 25
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 26
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 26
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 27
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 27
                    },
                    {
                        posY: 374,
                        type: 'TRIANGLE',
                        start: 26
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 27
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 28
                    },
                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 29
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 30
                    },
                    {
                        posY: 540,
                        type: 'CUBE',
                        start: 30
                    },
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 31
                    },
                    {
                        posY: 625,
                        type: 'TROU',
                        start: 32
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 33
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 30
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 30
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 31
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 31
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 31
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 32
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 32
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 32
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 33
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 33
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 33
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 34
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 34
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 34
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 35
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 35
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 35
                    },
                    {
                        posY: 270,
                        type: 'CUBE',
                        start: 36
                    },
                    {
                        posY: 175,
                        type: 'ARGENT',
                        start: 36
                    },
                    {
                        posY: 100,
                        type: 'BRIQUE',
                        start: 36
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 40
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 41
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 42
                    },
                    {
                        posY: 518,
                        type: 'ARGENT',
                        start: 42
                    },
                    {
                        posY: 613,
                        type: 'CUBE',
                        start: 43
                    },
                    {
                        posY: 650,
                        type: 'TROU',
                        start: 44
                    },
                    {
                        posY: 650,
                        type: 'TROU',
                        start: 45
                    },

                    {
                        posY: 467,
                        type: 'CUBE',
                        start: 26
                    },
                    {
                        posY: 450,
                        type: 'FAILLE',
                        start: 60
                    },
                    {
                        posY: 613,
                        type: 'GG',
                        start: 62
                    },
                    {
                        posY: 613,
                        type: 'GG',
                        start: 63
                    },
                    {
                        posY: 613,
                        type: 'GG',
                        start: 64
                    },
                    {
                        posY: 613,
                        type: 'GG',
                        start: 65
                    },
                    
                    
                ]
            }
                
            
        ]



        Crafty.init(1920, 1080, document.getElementById('game'));



        /* if (variable global == 1)
        {*/
        let joueur = Crafty.e('2D, DOM, Image, Gravity, Collision, Jumper, Keyboard, joueur')
            .attr({ x: 200, y: 0, w: 85, h: 91 })
            .css({ 'background-size': 'cover' })
            .image(p)
            .gravityConst(1200)
            .gravity("platform")
            .jumper(650, ['SPACE'])
		/* } */

        joueur.bind('EnterFrame', function () {
            var hits = joueur.hit('element');
            if (!hits) return;

            hits.forEach(function (hit) {
                var el = hit.obj._element;
                var nx = hit.normal ? hit.normal.x : 0;
                var ny = hit.normal ? hit.normal.y : 0;

                var parDessus = ny > 0 || Math.abs(ny) > Math.abs(nx);


                //touche = mort
                if (el.classList.contains('triangle')) {
                    window.location.href = "mort1.html";
                }

                //touche = mort
                if (el.classList.contains('trou')) {
                    window.location.href = "mort1.html";
                }
                

                if (el.classList.contains('cube')) {
                }
                
               if (el.classList.contains('brique')) {
                    hit.obj.destroy(); // Supprime l'élément
                     
                    vies = vies - 10; // Incrémentation
                    
                    vie.textContent = vies;
					
                
                }
                 if (el.classList.contains('argent')) {
                    hit.obj.destroy(); // Supprime l'élément
                    
                    let vbucks = parseInt(localStorage.getItem("vbucks"))
                    vbucks = vbucks + 1; // Incrémentation
                    localStorage.setItem("vbucks", vbucks)
                    spanX.textContent = vbucks; // Mise à jour du span
                }
                

                //aller au gg
                if (el.classList.contains('faille')) {
                    window.location.href = "gg.html";
                }




            }.bind(joueur));
        });


        Crafty.e('2D, DOM, Color, Gravity, platform')
            .attr({ x: 0, y: 700, w: 1920, h: 50 })
            .color("blue");


        const container = document.getElementById('game');

        let elemEcran = [];

        // Crée un nouveau element toutes les secondes
        setInterval(function () {
            if (animActiver == true) {
                startActuel++;
                for (let i = 0; i < niveaux[0]['elements'].length; i++) {
                    if (niveaux[0]['elements'][i]['start'] == startActuel) {
                        let element;

                        if (niveaux[0]['elements'][i]['type'] == 'TROU') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            .image("image/trou.gif")
                            element.w = 100
                            element.h = 70
                            element._element.classList.add("trou")

                        }

                        if (niveaux[0]['elements'][i]['type'] == 'CUBE') {
                            element = Crafty.e('2D, DOM, Image, Collision, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/wood.jpg")
                            element.w = 75
                            element.h = 75
                            element._element.classList.add("cube")


                        }
                        if (niveaux[0]['elements'][i]['type'] == 'TRIANGLE') {
                            element = Crafty.e('2D, DOM, Image, Collision, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/triangle.png")
                            element.w = 86
                            element.h = 87
                            element._element.classList.add("triangle")


                        }
                        if (niveaux[0]['elements'][i]['type'] == 'ARGENT') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/vbucks_no_bg.png")
                            element.w = 86
                            element.h = 87
                            element._element.classList.add("argent")
                        }
                        if (niveaux[0]['elements'][i]['type'] == 'BRIQUE') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/brique.jpg")
                            element.w = 75
                            element.h = 75
                            element._element.classList.add("brique")
                        }
                         if (niveaux[0]['elements'][i]['type'] == 'MINI') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/mini.png")
                            element.w = 75
                            element.h = 75
                            element._element.classList.add("mini")
                        }
                        if (niveaux[0]['elements'][i]['type'] == 'FAILLE') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/faille.png")
                            element.w = 250
                            element.h = 200
                            element._element.classList.add("faille")
                        }
                        if (niveaux[0]['elements'][i]['type'] == 'GG') {
                            element = Crafty.e('2D, DOM, Image, Collision, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/gg.png")
                            element.w = 75
                            element.h = 75
                            element._element.classList.add("gg")
                        }
                        
                        

                        elemEcran.push({ element: element, x: 1920 });
                    }
                }
            }

        }, 450);

        // Fait tomber les carrés
        function animer() {
            if (animActiver == true) {
                for (let i = elemEcran.length - 1; i >= 0; i--) {
                    elemEcran[i].x -= 5;
                    elemEcran[i].element.x = elemEcran[i].x;

                    if (elemEcran[i].x < 0) {
                        //elemEcran[i].element.remove();
                        elemEcran[i].element._element.style.display = "none"
                        elemEcran.splice(i, 1);
                    }
                }
            }


            requestAnimationFrame(animer);
        }

        animer();


        //mets pause quand on appuie sur le bouton
        function pause() {
            animActiver = false
            document.getElementById("imgPause").style.display = "block";
            document.getElementById("pause").style.display = "none";


        }

        //mets play quand on appuie sur le bouton

        function play() {
            animActiver = true
            document.getElementById("imgPause").style.display = "none";
            document.getElementById("pause").style.display = "block";


        }