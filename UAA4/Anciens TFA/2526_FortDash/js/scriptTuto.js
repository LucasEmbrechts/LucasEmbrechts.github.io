
        
        const spanX = document.getElementById("valeurX");
        const bouton = document.getElementById("incrementer");
        spanX.textContent =parseInt( localStorage.getItem("vbucks")); // Mise à jour du span



        function game(){
            if(niveau[startActuel]){
                let p = localStorage.getItem("perso")
                style.backgroundImage = "url('img/ "+p+"')"
                style.BackgroundSize ='cover'
            }
        }



        let startActuel = 0;
        let vies = 100;
        let animActiver = true
        let niveaux = [
            {
                "nom": "niveau1",
                "elements": [
                    {
                        posY: 310,
                        type: 'text',
                        start: 1
                    },
                    
                    {
                        posY: 623,
                        type: 'CUBE',
                        start: 3
                    },
                    {
                        posY: 310,
                        type: 'text1',
                        start: 8
                    },
                    {
                        posY: 310,
                        type: 'text2',
                        start: 12
                    },
                    {
                        posY: 613,
                        type: 'TRIANGLE',
                        start: 14
                    },
                    {
                        posY: 310,
                        type: 'textargent',
                        start: 20
                    },
                    {
                        posY: 623,
                        type: 'ARGENT',
                        start: 21
                    },
                    {
                        posY: 310,
                        type: 'textbrique',
                        start: 26
                    },
                    {
                        posY: 613,
                        type: 'BRIQUE',
                        start: 27
                    }
                    ,
                    {
                        posY: 310,
                        type: 'FIN',
                        start: 30
                    },
                    {
                        posY: 540,
                        type: 'FAILLE',
                        start: 31
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 32
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 33
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 34
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 35
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 36
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 37
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 38
                    }
                    ,
                    {
                        posY: 613,
                        type: 'GG',
                        start: 39
                    }
                ]
            },

        ]



        Crafty.init(1920, 1080, document.getElementById('game'));



        let joueur = Crafty.e('2D, DOM, Image, Gravity, Collision, Jumper, Keyboard, joueur')
            .attr({ x: 200, y: 0, w: 76, h: 55 })
            .css({ 'background-size': 'cover' })
            .image("image/skin1.png")
            .gravityConst(1200)
            .gravity("platform")
            .jumper(650, ['SPACE'])



            //pas poser la question
        joueur.bind('EnterFrame', function () {
            var hits = joueur.hit('element');
            if (!hits) return;

            hits.forEach(function (hit) {
                var el = hit.obj._element;
                var nx = hit.normal ? hit.normal.x : 0;
                var ny = hit.normal ? hit.normal.y : 0;

                var parDessus = ny > 0 || Math.abs(ny) > Math.abs(nx);

                if (el.classList.contains('triangle')) {
                    window.location.href = "mort.html";
                }
                if (el.classList.contains('argent')) {
                    hit.obj.destroy(); // Supprime l'élément
                    let vbucks = parseInt(localStorage.getItem("vbucks"))
                    vbucks = vbucks + 1; // Incrémentation
                    localStorage.setItem("vbucks", vbucks)
                    spanX.textContent = vbucks; // Mise à jour du span
                }
                if (el.classList.contains('brique')) {
                    hit.obj.destroy(); // Supprime l'élément
                     
                    vies = vies - 10; // Incrémentation
                    
                    vie.textContent = vies;
					
                }
                if (el.classList.contains('faille')) {
                    window.location.href = "gg1.html";
                }
            


            }.bind(joueur));
        });




        Crafty.e('2D, DOM, Color, Gravity, platform')
            .attr({ x: 0, y: 700, w: 1920, h: 50 })
            .color("blue");


        const container = document.getElementById('game');

        let elemEcran = [];

        // Crée un nouveau carré toutes les secondes
        setInterval(function () {
            if (animActiver == true) {
                startActuel++;
                for (let i = 0; i < niveaux[0]['elements'].length; i++) {
                    if (niveaux[0]['elements'][i]['start'] == startActuel) {
                        let element ;

                        if (niveaux[0]['elements'][i]['type'] == 'text') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'font-size': '60px', 'color': 'white' })
                            .text("Appuyer sur espace pour sauter")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("text")

                        }
                        if (niveaux[0]['elements'][i]['type'] == 'CUBE') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            .image("image/wood.jpg")
                            element.w = 75
                            element.h = 75
                            element._element.classList.add("cube")


                        }
                        if (niveaux[0]['elements'][i]['type'] == 'text1') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'font-size': '60px', 'color': 'white' })
                            .text("Bien joué !")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("text")

                        }
                        if (niveaux[0]['elements'][i]['type'] == 'text2') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'font-size': '60px', 'color': 'white' })
                            .text("Si tu touches la pique tu perds !!")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("text")

                        }
                        if (niveaux[0]['elements'][i]['type'] == 'TRIANGLE') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            element.css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            element.image("image/triangle.png")
                            element.w = 86
                            element.h = 87
                            element._element.classList.add("triangle")


                        }
                        if (niveaux[0]['elements'][i]['type'] == 'ARGENT') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            .css({ 'background-size': 'cover', 'background-repeat': 'no-repeat' })
                            .image("image/vbucks_no_bg.png")
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
                        if (niveaux[0]['elements'][i]['type'] == 'textargent') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            element.css({ 'font-size': '60px', 'color': 'white' })
                            element.text("Récolte l'argent")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("textargent")

                        }
                        if (niveaux[0]['elements'][i]['type'] == 'textbrique') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            element.css({ 'font-size': '60px', 'color': 'white' })
                            element.text("Si tu le traverses tu perds 10 PV")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("textbrique")

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
                        if (niveaux[0]['elements'][i]['type'] == 'FIN') {
                            element = Crafty.e('2D, DOM, Text, Collision, Image, element, platform')
                            .attr({ x: 1920, y: niveaux[0]['elements'][i]['posY'] })
                            element.css({ 'font-size': '60px', 'color': 'white' })
                            element.text("Tuto terminé téléportez-vous :)")
                            element.w = 500
                            element.h = 60
                            element._element.classList.add("fin")
                        }





                        elemEcran.push({ element: element, x: 1920 });
                    }
                }
            }

        }, 
        1000);
        //temps de 1 sec entre chaque element

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
        function pause() {
            animActiver = false
            document.getElementById("imgPause").style.display = "block";
            document.getElementById("pause").style.display = "none";


        }
        function play() {
            animActiver = true
            document.getElementById("imgPause").style.display = "none";
            document.getElementById("pause").style.display = "block";


        }