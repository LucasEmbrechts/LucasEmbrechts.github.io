/*debut de la partie de daniel----------------------------------------------------------------------------------------------------------------------*/
/* liste de tous les ecrans du jeu */
let tousLesEcrans = [
    'ecran-menu',
    'ecran-credits',
    'ecran-regles',
    'ecran-options',
    'ecran-jeu',
    'ecran-fin'
];

/* cache tous les ecrans et affiche juste celui qu on veut */
function afficherEcran(idEcran) {
    let i = 0;
    while (i < tousLesEcrans.length) {
        document.getElementById(tousLesEcrans[i]).classList.add('cache');
        i++;
    }
    document.getElementById(idEcran).classList.remove('cache');
}

/* retourne au menu et rafraichit les scores affiches */
function retourMenu() {
    afficherEcran('ecran-menu');
    mettreAJourScoresMenu();
    verifierModeExpert();
}

/* les trois fonctions du dessous font pareil, elles ouvrent juste
   des ecrans differents quand on clique sur les boutons du menu */
function afficherCredits() {
    afficherEcran('ecran-credits');
}

function afficherRegles() {
    afficherEcran('ecran-regles');
}

function afficherOptions() {
    afficherEcran('ecran-options');
    verifierModeExpert();
}

/* false = musique pas encore lancee, true = elle tourne deja */
let musiqueEnCours = false;

/* lance la musique du menu, mais seulement si elle tourne pas deja
   sinon elle repartirait depuis le debut a chaque clic */
function lancerMusique() {
    let sonMenu = document.getElementById('son-menu');
    if (musiqueEnCours === false) {
        sonMenu.volume = sonCoupe ? 0 : 0.3;
        sonMenu.play();
        musiqueEnCours = true;
    }
}

/* false = son actif, true = son coupe */
let sonCoupe = false;

function toggleSon() {
    let sonMenu = document.getElementById('son-menu');
    let boutonSon = document.getElementById('bouton-son');

    if (sonCoupe === false) {
        sonMenu.volume = 0;
        boutonSon.src = 'img/boutton son coupé.png';
        sonCoupe = true;
    } else {
        sonMenu.volume = 0.3;
        boutonSon.src = 'img/boutton son allumé.png';
        sonCoupe = false;
    }
}

/* liste de toutes les cartes du jeu */
let nomsCartes = [
    "P.E.K.K.A", "Mini Pekka", "Sorcier", "Bébé Dragon",
    "Squelettes", "Gargouilles", "Valkyrie", "Mousquetaire", "Armée Squelettes", "Barbares", "Chevaucheur",
    "Foudre", "Zap", "Mineur", "Princesse", "Sorcier de Glace",
    "Voleuse", "Bucheron", "Dragon Enfer", "Golem", "Molosse",
    "Cimetière", "Sparky", "Esprit Glace", "Esprit Feu", "Chauve-souris", "Géant Royal", "Elite",
    "Archers", "Chevalier", "Bomber", "Canon", "Tesla", "Mortier", "Arc-X", "Roquette"
];

/* mapping entre les noms de cartes et leurs images */
let imagesCartes = {
    "Foudre": "img/foudre-248x300.jpg",
    "Archers": "img/archers - Copie.jpg",
    "Valkyrie": "img/valkyrie - Copie.jpg",
    "Voleuse": "img/voleuse.jpg",
    "Tesla": "img/tesla - Copie.jpg",
    "Squelettes": "img/squelletes - Copie.png",
    "Sparky": "img/sparky - Copie.png",
    "Sorcier": "img/sorcier-248x300 - Copie.jpg",
    "Sorcier de Glace": "img/sorcier-de-glace - Copie.jpg",
    "Roquette": "img/roquette - Copie.jpg",
    "P.E.K.K.A": "img/pekka - Copie.jpg",
    "Mousquetaire": "img/mousquetaire-248x300 - Copie.jpg",
    "Princesse": "img/princesse.jpg",
    "Gargouilles": "img/mega-gargouille-clash-royale-minion - Copie.png",
    "Golem": "img/Golem-into-artickle - Copie.png",
    "Canon": "img/canon - Copie.png",
    "Mineur": "img/mineur - Copie.jpg",
    "Mini Pekka": "img/mini pekka.jfif",
    "Bébé Dragon": "img/bebe dragon - Copie.jpg",
    "Armée Squelettes": "img/armée de squelletes - Copie.jpg",
    "Barbares": "img/barbares-250x300 - Copie.png",
    "Chevaucheur": "img/chevauheur de cochon - Copie.png",
    "Zap": "img/zap.png",
    "Bucheron": "img/bucheron - Copie.png",
    "Dragon Enfer": "img/dragon de l enfer - Copie.jpg",
    "Molosse": "img/molosse-de-lave - Copie.png",
    "Cimetière": "img/cimetiere - Copie.png",
    "Esprit Glace": "img/esprit de glace - Copie.jpg",
    "Esprit Feu": "img/lava - Copie.jpg",
    "Chauve-souris": "img/chauves-souris - Copie.png",
    "Géant Royal": "img/geant-royal - Copie.png",
    "Elite": "img/elites - Copie.jpg",
    "Chevalier": "img/chevaliers-283x284 - Copie.png",
    "Bomber": "img/bomber - Copie.jpg",
    "Mortier": "img/mortier - Copie.jpg",
    "Arc-X": "img/arc-x - Copie.jpg",




};

let roundActuel = 1;
let scoreJoueur = 0;
let indexBonneCarte = 0;
let nombreErreurs = 0;
let minuterieJeu = null;
let minuterieCompte = null;
let dureeRound = 10;
let difficulteChoisie = 'normal';
let nombreRounds = 10;
let clicBloque = false;

/* on stocke les meilleurs scores ici, ils sont remis a zero si on recharge la page */
let meilleursScores = {
    facile: 0,
    normal: 0,
    difficile: 0,
    expert: 0
};

function getCategorieCartes(nom) {
    let cartesVolantes = ["Gargouilles", "Bébé Dragon", "Dragon Enfer", "Molosse", "Chauve-souris", "Lava"];
    let cartesBatiments = ["Canon", "Tesla", "Mortier", "Arc-X",];
    let cartesSorts = ["Foudre", "Boule de feu", "Flèches", "Zap", "Bûche", "Roquette", "Cimetière", "Poison", "Gel", "Tornade"];
    let cartesEssaim = ["Armée Squelettes", "Squelettes", "Barbares", "Elite", "Gobelin", "Archers"];
    /*fin de la partie de daniel et max reprend--------------------------------------------------------------------------------------------------------------------------------*/

    let estVolante = false;
    let i = 0;
    while (i < cartesVolantes.length) {
        if (cartesVolantes[i] === nom) {
            estVolante = true;
        }
        i++;
    }
    if (estVolante) {
        return "C'est une Troupe Volante 🦇";
    }

    let estBatiment = false;
    let j = 0;
    while (j < cartesBatiments.length) {
        if (cartesBatiments[j] === nom) {
            estBatiment = true;
        }
        j++;
    }
    if (estBatiment) {
        return "C'est un Bâtiment 🏰";
    }

    let estSort = false;
    let k = 0;
    while (k < cartesSorts.length) {
        if (cartesSorts[k] === nom) {
            estSort = true;
        }
        k++;
    }
    if (estSort) {
        return "C'est un Sort ✨";
    }

    let estEssaim = false;
    let l = 0;
    while (l < cartesEssaim.length) {
        if (cartesEssaim[l] === nom) {
            estEssaim = true;
        }
        l++;
    }
    if (estEssaim) {
        return "C'est une Troupe nombreuse 👥";
    }

    return "C'est une Troupe au sol ⚔️";
}
/*fin de la partie de Max et daniel reprend -----------------------------------------------------------------------------------------------------------------*/
function verifierModeExpert() {
    let boutonExpert = document.getElementById('bouton-expert');
    let modeExpert = document.getElementById('mode-expert');

    // Vérifier si tous les modes ont été complétés à 10/10
    let tousCompletes = meilleursScores.facile >= 10 &&
        meilleursScores.normal >= 10 &&
        meilleursScores.difficile >= 10;

    if (tousCompletes) {
        boutonExpert.style.display = 'block';
        modeExpert.style.display = 'block';
        boutonExpert.disabled = false;
        boutonExpert.style.opacity = '1';
    } else {
        boutonExpert.style.display = 'none';
        modeExpert.style.display = 'none';
    }
}

function choisirDifficulte(secondes) {
    dureeRound = secondes;

    // Réinitialiser tous les bordures
    document.getElementById('bouton-facile').style.border = 'none';
    document.getElementById('bouton-normal').style.border = 'none';
    document.getElementById('bouton-difficile').style.border = 'none';
    document.getElementById('bouton-expert').style.border = 'none';

    // Définir la difficulté et mettre en surbrillance le bouton choisi
    if (secondes === 15) {
        difficulteChoisie = 'facile';
        document.getElementById('bouton-facile').style.border = '4px solid #ffd93d';
        nombreRounds = 10;
    } else if (secondes === 10) {
        difficulteChoisie = 'normal';
        document.getElementById('bouton-normal').style.border = '4px solid #ffd93d';
        nombreRounds = 10;
    } else if (secondes === 7) {
        difficulteChoisie = 'difficile';
        document.getElementById('bouton-difficile').style.border = '4px solid #ffd93d';
        nombreRounds = 10;
    } else if (secondes === 5) {
        difficulteChoisie = 'expert';
        document.getElementById('bouton-expert').style.border = '4px solid #ffd93d';
        nombreRounds = 15;
    }

    // Réinitialiser les variables de jeu
    roundActuel = 1;
    scoreJoueur = 0;
    mettreAJourAffichage();
}

function lancerJeu() {
    if (!difficulteChoisie) {
        alert('Veuillez choisir une difficulté !');
        return;
    }

    document.getElementById('son-menu').volume = sonCoupe ? 0 : 0.1;
    afficherEcran('ecran-jeu');
    afficherMessageDepart();
}

function afficherMessageDepart() {
    let boiteMessage = document.getElementById('boite-message');
    boiteMessage.innerHTML = 'PRÉPAREZ-VOUS<br><span class="compte-a-rebours" id="compte-depart">3</span>';
    boiteMessage.classList.remove('cache');
    document.getElementById('boite-indice').classList.add('cache');

    let nombreSecondes = 3;

    minuterieCompte = setInterval(function () {
        nombreSecondes = nombreSecondes - 1;

        let elementCompte = document.getElementById('compte-depart');
        if (elementCompte) {
            elementCompte.textContent = nombreSecondes;
        }

        if (nombreSecondes <= 0) {
            clearInterval(minuterieCompte);
            demarrerRound();
        }
    }, 1000);
}
/*fin de partie de daniel et max commence ------------------------------------------------------------------------------------------------*/
function mettreAJourAffichage() {
    document.getElementById('affichage-round').textContent = roundActuel + '/' + nombreRounds;
    document.getElementById('affichage-score').textContent = scoreJoueur + '/' + nombreRounds;
}

function demarrerRound() {
    document.getElementById('boite-message').classList.add('cache');
    document.getElementById('boite-indice').classList.add('cache');
    document.getElementById('boite-indice').innerHTML = '';
    nombreErreurs = 0;
    clicBloque = false;
    creerCartes();
    demarrerChrono();
}

function creerCartes() {
    let grille = document.getElementById('grille-des-cartes');
    grille.innerHTML = '';

    let cartesAleatoires = nomsCartes.slice().sort(function () {
        return Math.random() - 0.5;
    });

    let paquet = cartesAleatoires.slice(0, 48);
    indexBonneCarte = Math.floor(Math.random() * paquet.length);

    let i = 0;
    while (i < paquet.length) {
        let nouvelleCarte = document.createElement('div');
        nouvelleCarte.className = 'carte-du-jeu';
        nouvelleCarte.id = 'carte-' + i;
        nouvelleCarte.onclick = creerFonctionClic(i, nouvelleCarte);

        let nomCarte = paquet[i];

        if (imagesCartes[nomCarte]) {
            let img = document.createElement('img');
            img.src = imagesCartes[nomCarte];
            img.alt = nomCarte;
            nouvelleCarte.appendChild(img);
        }

        let label = document.createElement('span');
        label.textContent = nomCarte;
        nouvelleCarte.appendChild(label);

        grille.appendChild(nouvelleCarte);
        i++;
    }
}

function creerFonctionClic(index, elementCarte) {
    return function () {
        gererClicCarte(index, elementCarte);
    };
}

function gererClicCarte(index, carteCliquee) {
    if (clicBloque === true) {
        return;
    }

    let affichageChrono = document.getElementById('affichage-chrono');
    if (affichageChrono.classList.contains('cache')) {
        return;
    }

    if (index === indexBonneCarte) {
        bonneReponse(carteCliquee);
    } else {
        nombreErreurs = nombreErreurs + 1;

        if (difficulteChoisie === 'facile' || difficulteChoisie === 'normal') {
            activerCooldown();
        }

        if (nombreErreurs === 4) {
            let bonneCarte = document.getElementById('carte-' + indexBonneCarte);
            let nomCarte = bonneCarte.textContent;
            let categorieIndice = getCategorieCartes(nomCarte);
            let boiteIndice = document.getElementById('boite-indice');
            boiteIndice.innerHTML = '🕵️ INDICE : ' + categorieIndice;
            boiteIndice.classList.remove('cache');
        }

        if (nombreErreurs === 6) {
            let bonneCarte2 = document.getElementById('carte-' + indexBonneCarte);
            let nomCarte2 = bonneCarte2.textContent;
            let boiteIndice2 = document.getElementById('boite-indice');
            boiteIndice2.innerHTML = boiteIndice2.innerHTML + '<br>🔊 Écoute le son !';
            jouerSonCarte(nomCarte2);
        }
    }
}
/*fin de la partie de max et daniel reprend----------------------------------------------------------------------*/
function activerCooldown() {
    clicBloque = true;

    let toutesLesCartes = document.querySelectorAll('.carte-du-jeu');
    let i = 0;
    while (i < toutesLesCartes.length) {
        toutesLesCartes[i].classList.add('bloquee');
        i++;
    }

    setTimeout(function () {
        clicBloque = false;
        let toutesLesCartes2 = document.querySelectorAll('.carte-du-jeu');
        let j = 0;
        while (j < toutesLesCartes2.length) {
            toutesLesCartes2[j].classList.remove('bloquee');
            j++;
        }
    }, 500);
}

function jouerSonCarte(nomCarte) {
    let sonsCarte = {
        "Foudre": "son cartes/card_epic_lightning_lightning_02.wav",
        "Archers": "son cartes/card_common_archer_clash_archer_deploy_01.wav",
        "Valkyrie": "son cartes/card_rare_valkyrie_valkyrie_atk_09.wav",
        "Voleuse": "son cartes/card_legendary_assassin_bandit_deploy_01.wav",
        "Tesla": "son cartes/card_common_tesla_tesla_zap_01.wav",
        "Squelettes": "son cartes/card_common_skeleton_skeleton_deploy_03.wav",
        "Sorcier": "son cartes/card_rare_wizard_deploy_wizard_01.wav",
        "Sorcier de Glace": "son cartes/card_legendary_ice_wizard_ice_wiz_atk_05.wav",
        "Roquette": "son cartes/card_rare_rocket_rocket_hit_01v2.wav",
        "P.E.K.K.A": "son cartes/card_epic_pekka_pekka_deploy_end_03.wav",
        "Mousquetaire": "son cartes/card_rare_musketeer_musketeer_deploy_01.wav",
        "Princesse": "son cartes/card_legendary_princess_p_archer_dep_01.wav",
        "Gargouilles": "son cartes/card_common_minion_minion_deploy_01.wav",
        "Golem": "son cartes/card_epic_golem_golem_deploy_01.wav",
        "Canon": "son cartes/card_common_cannon_cannon_fire_03.wav",
        "Mini Pekka": "son cartes/card_rare_minipekka_mini_pekka_deploy_end_06.wav",
        "Bébé Dragon": "son cartes/card_epic_babydragon_tinymite_attack_04.wav",
        "Barbares": "son cartes/card_common_barbarian_deploy_barbarians_01.wav",
        "Chevaucheur": "son cartes/card_rare_hog_rider_hogrider_deploy_end_01.wav",
        "Zap": "son cartes/card_common_zap_zap_02.wav",
        "Dragon Enfer": "son cartes/card_legendary_inferno_dragon_baby_dragon_deploy_end_11.wav",
        "Molosse": "son cartes/card_legendary_lava_hound_lava_hound_deploy_01.wav",
        "Cimetière": "son cartes/card_legendary_graveyard_cemetary_deploy_01.wav",
        "Esprit Glace": "son cartes/card_common_ice_spirit_ice_sp_deploy_01.wav",
        "Esprit Feu": "son cartes/card_common_fire_spirit_fire_spirit_deploy_01.wav",
        "Chauve-souris": "son cartes/card_common_bat_bat_deploy_01.wav",
        "Géant Royal": "son cartes/card_common_royal_giant_royal_giant_deploy_01.wav",
        "Elite": "son cartes/card_common_angry_barbarian_elite_barbs_deploy_01.wav",
        "Chevalier": "son cartes/card_common_knight_knight_attack_start_01.wav",
        "Bomber": "son cartes/card_common_bomber_deploy_skeleton_01.wav",
        "Mortier": "son cartes/card_common_mortar_mortar_fire_03.wav",
        "Arc-X": "son cartes/card_epic_xbow_xbow_fire_01.wav",
    };

    let sonCarte = document.getElementById('son-carte');
    if (sonsCarte[nomCarte]) {
        sonCarte.src = "sources/" + sonsCarte[nomCarte];
        sonCarte.volume = sonCoupe ? 0 : 0.8;
        sonCarte.play();
    }
}

function bonneReponse(carteCliquee) {
    clearInterval(minuterieJeu);
    document.getElementById('affichage-chrono').classList.add('cache');
    document.getElementById('boite-indice').classList.add('cache');

    scoreJoueur = scoreJoueur + 1;
    carteCliquee.style.background = '#2ecc71';
    carteCliquee.style.transform = 'scale(1.1)';

    mettreAJourAffichage();

    if (roundActuel >= nombreRounds) {
        setTimeout(terminerJeu, 1000);
    } else {
        afficherMessage('✅Tu as trouvé la bonne carte bravo✅<br> Prépare-toi au prochain round :');
    }
}

function demarrerChrono() {
    let tempsRestant = dureeRound;
    let affichageChrono = document.getElementById('affichage-chrono');
    affichageChrono.classList.remove('cache');
    affichageChrono.textContent = tempsRestant;

    minuterieJeu = setInterval(function () {
        tempsRestant = tempsRestant - 1;
        affichageChrono.textContent = tempsRestant;

        if (tempsRestant <= 0) {
            clearInterval(minuterieJeu);
            affichageChrono.classList.add('cache');

            let bonneCarte = document.getElementById('carte-' + indexBonneCarte);
            if (bonneCarte) {
                bonneCarte.style.background = '#f1c40f';
            }

            mauvaiseReponse();
        }
    }, 1000);
}

function mauvaiseReponse() {
    if (roundActuel >= nombreRounds) {
        setTimeout(terminerJeu, 1500);
    } else {
        afficherMessage('😫Dommage tu as pas eu assez de temps😫<br>Prochaine manche dans  :');
    }
}
/*fin de parite de daniel max reprend---------------------------------------------------------------------------------------------------------------*/
function afficherMessage(message) {
    document.getElementById('grille-des-cartes').innerHTML = '';
    document.getElementById('boite-indice').classList.add('cache');

    let boiteMessage = document.getElementById('boite-message');
    boiteMessage.innerHTML = message + '<br><span class="compte-a-rebours" id="compte-suivant">3</span>';
    boiteMessage.classList.remove('cache');

    let nombreSecondes = 3;

    minuterieCompte = setInterval(function () {
        nombreSecondes = nombreSecondes - 1;

        let elementCompte = document.getElementById('compte-suivant');
        if (elementCompte) {
            elementCompte.textContent = nombreSecondes;
        }

        if (nombreSecondes <= 0) {
            clearInterval(minuterieCompte);
            roundActuel = roundActuel + 1;
            mettreAJourAffichage();
            demarrerRound();
        }
    }, 1000);
}

function terminerJeu() {
    sauvegarderMeilleurScore();
    document.getElementById('son-menu').volume = sonCoupe ? 0 : 0.3;
    afficherEcran('ecran-fin');
    document.getElementById('texte-score-final').textContent = scoreJoueur + '/' + nombreRounds;
    afficherRecompense();
}

function sauvegarderMeilleurScore() {
    if (scoreJoueur > meilleursScores[difficulteChoisie]) {
        meilleursScores[difficulteChoisie] = scoreJoueur;
    }
}

function mettreAJourScoresMenu() {
    let scoreFacile = meilleursScores.facile;
    let scoreNormal = meilleursScores.normal;
    let scoreDifficile = meilleursScores.difficile;
    let scoreExpert = meilleursScores.expert;

    document.getElementById('meilleur-score-facile').textContent = scoreFacile === 0 ? '-' : scoreFacile;
    document.getElementById('meilleur-score-normal').textContent = scoreNormal === 0 ? '-' : scoreNormal;
    document.getElementById('meilleur-score-difficile').textContent = scoreDifficile === 0 ? '-' : scoreDifficile;
    document.getElementById('meilleur-score-expert').textContent = scoreExpert === 0 ? '-' : scoreExpert;
}

function afficherRecompense() {
    let boiteRecompense = document.getElementById('boite-recompense');
    boiteRecompense.innerHTML = '';

    let scoreParfait = scoreJoueur === nombreRounds;

    if (scoreParfait === true) {
        let titre = '';
        if (difficulteChoisie === 'facile') titre = '✨ Apprenti Maître';
        else if (difficulteChoisie === 'normal') titre = '🌟 Champion';
        else if (difficulteChoisie === 'difficile') titre = '⚡ Maître Expert';
        else if (difficulteChoisie === 'expert') titre = '👑 Légende Absolue';

        boiteRecompense.innerHTML = '<div style="font-size: 2em; margin: 20px 0; color: #ffd93d;">SCORE PARFAIT ! 🏆</div>' +
            '<div style="font-size: 1.5em; margin: 10px 0; color: #a855f7;">' + titre + '</div>';
    } else {
        boiteRecompense.innerHTML = '<div style="font-size: 1.5em; margin: 20px 0; color: #fff;">Bien joué !</div>';
    }
}

// Initialisation au chargement de la page
window.onload = function () {
    mettreAJourScoresMenu();
    verifierModeExpert();
};
