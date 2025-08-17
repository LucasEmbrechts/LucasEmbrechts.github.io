var compteur = 0;
var myArray = ['',
	'Bienvenue à toi %nom% et merci de jouer à "The Life Is a Game". <br/>Les règles du jeux sont simples, tu joue un personnage et tu dois <br/>faire des choix par rapport à des situations. <br/>Attention, chaques choix à ses conséquences et peut même te conduire au "Gamer Over"',
	'Dans cette histoire tu incarnes un jeune homme coupé de toute relation sociale qui passe ses journées à jouer seul dans sa chambre. Vivant seul et n’ayant aucune famille, tu t’es renfermé sur toi-même et tu as coupé toute relation avec les autres. Les seuls contacts que tu as sont les autres joueurs contre qui tu te bats, jusqu’au jour où tu reçois un mail assez bizarre…',''];

function presentation()
{
	var texte = document.getElementById('texteIntro');
	var bouton = document.getElementById('bouton');
	bouton.onclick = function(){presentation();};
	var texteIntro = document.getElementById('texte');
	texte.style.display = 'block';

	myArray.shift();
	texteIntro.innerHTML = myArray[0].replace('%nom%', window.joueur);

	if (compteur == 2) {

		texte.style.display = 'none';
		var footer = document.getElementById('footer');
		footer.style.display = 'block';
		var table = document.getElementById('interface');
		table.style.display = 'inline';
		chapitre1();

	} else {

		compteur = compteur + 1;
	}
}



/*--------------------------------------------------------------------------------------------------*/
var i = 0;
var donnees =[
{text:"Tiens un nouveau mail …", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl2.png')" , choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 1, choix2Val:-2, choix3Val: -2 },
{text:"Hey, ça fait longtemps que je t’observes et je voudrais te poser quelques questions. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signé X", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 2, choix2Val:-2, choix3Val: -2},
{text:"Que faire ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Répondre", choix2Label:"Ignorer", choix3Label:"", choix1Val: 4, choix2Val: 3, choix3Val: -2},
{text:"Bof je m’en tape un peu, je n’ai qu’à l’ignorer", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
{text:"Bon allons-y.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 5, choix2Val: -2, choix3Val: -2},
{text:"Salut, qu’est-ce que tu veux ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 6, choix2Val: -2, choix3Val: -2},
{text:"Que pense tu du monde dans lequels tu vie ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Il est à chier, les graphismes sont réaliste mais le gameplay est pourri ", choix2Label:"Je l’aime bien, d’ailleurs je dois aller faire du sport dans pas longtemps", choix3Label:"", choix1Val: 9, choix2Val: 7, choix3Val: -2},
{text:"Desolé j’ai du me tromper de personne. Adieu", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 8, choix2Val: -2, choix3Val: -2},
{text:"Malgré les plusieurs messages que tu lui renvois, la personne ne te réponds plus, tu ne sauras jamais ce qu’elle te voulait.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
{text:"Quel est ton objectif dans la vie ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Vivre dans un monde où les jeux vidéo seront reconnu", choix2Label:"Trouver une copine", choix3Label:"Bouger un peu et trouver du travail ", choix1Val: 12, choix2Val: 12, choix3Val: 10},
{text:"Je te souhaites bien du courage", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 11, choix2Val: -2, choix3Val: -2},
{text:"Depuis ce jour tu n’as jamais reçu de messages de sa part. Tu trouves un travail, tu te maries, as des enfants, tu ne touches plus à un ordinateur de ta vie et tu meurt vieux et sénile tout en regrettant ton mariage et ta réponse à ce fameux mail", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
{text:"Toute Dernière Question : Fesse Ou Seins ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Les seins, c’est confortable et c’est doux ", choix2Label:"Les fesses, ça rebondit quand tu claque", choix3Label:"Les Deux, je suis gourmand ", choix1Val: 13, choix2Val: 13, choix3Val: 13},
{text:"C'est bon à savoir", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 14, choix2Val: -2, choix3Val: -2},
{text:"Bon je vais te défier dans un petit jeu. Si tu y arrive, je te promets de changer radicalement ta vie.<br/>Ne t’inquiète pas si tu es vraiment comme je le pense, tout va bien se passer.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 15, choix2Val: -2, choix3Val: -2},
{text:"Il y a un lien, je clique ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Oui", choix2Label:"Oui (tu es obligé)", choix3Label:"", choix1Val: 16, choix2Val: 16, choix3Val: -2},
{text:"Tu cliques sur le lien et les murs autours de toi commencent à changer de couleur et tu te sens aspiré dans ton écran.<br/>Tu te retrouves seul dans une pièce blanche sans fenêtre et sans porte.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 17, choix2Val: -2, choix3Val: -2},
{text:"Tu entends une voix qui a l’air de venir de partout à la fois<br/>Une fille apparait en même temps sur tous les murs", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 18, choix2Val: -2, choix3Val: -2},
{text:"Bien le bonjour 'nom joueur'. Merci d’avoir accepté mon défi. Avant de commencer tu as  le droit à une question, alors choisis la bien ", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Ou suis-je ?", choix2Label:"Tu as un copain ?", choix3Label:"Euh, je peux avoir plus de questions ?", choix1Val: 19, choix2Val: 20, choix3Val: 21},
{text:"Quelque part", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
{text:"Eh . . . Non, je suis seule", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
{text:"Bien essayer mais non", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
{text:"Voilà j’ai répondu à ta question, maintenant passons à l’épreuve ultime qui décidera de ta vie ou de ta mort xD", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 25, choix2Val: -2, choix3Val: -2},
{text:"Si tu réussis tu sera redirigé ici et tu pourra choisir une autre porte, si tu ne réussis pas tu mourra . <br/>C’est simple non ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Euh...", choix2Label:"", choix3Label:"", choix1Val: 24, choix2Val: -2, choix3Val: -2},
{text:"Bon allez moi je te laisse a plus ! !", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Mais attend ! ! !", choix2Label:"", choix3Label:"", choix1Val: 26, choix2Val: -2, choix3Val: -2},
{text:"Le but est simple, en face de toi tu as trois portes : une bleu, une rouge et une verte. <br/>Tu dois passer dans chaque porte et résoudre les problèmes qui te sont donné.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 23, choix2Val: -2, choix3Val: -2},
{text:"La fille disparait et tu te retrouve seul face à ses trois portes qui sont sortis d'on ne sait où", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 27, choix2Val: -2, choix3Val: -2},
{text:"Bon réfléchissons,j’étais dans ma chambre, j’ai lu un mail, j'ai répondu à ce mail et je me suis retrouvé la. <br/>Ça fait combien de temps que je n’ai pas dormi moi ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 28, choix2Val: -2, choix3Val: -2},
{text:"Bref c'est pas grave, maintenantmtn une question me vient à l'esprit . . .  <br/> JE FAIS QUOI MOI MAINTENANT ! ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Je suis dans un rêve, j’ai juste à attendre de me réveiller. Dormir me fera le plus grand bien", choix2Label:"Je vais m’éclater la tête contre les murs voir ce que ça fait", choix3Label:"Je relève son défi ", choix1Val: 29, choix2Val: 33, choix3Val: 37},
{text:"Allez dormons un peu et à mon reveil je serais devant mon pc, dans ma chambre que j'aime tant", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 30, choix2Val: -2, choix3Val: -2},
{text:"zzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZ", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 31, choix2Val: -2, choix3Val: -2},
{text:"Tu te réveille et tu te rends compte que les portes ont disparues. <br/>Soudain la lumière s'éteint et tu te retrouve seul dans le noir.", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 32, choix2Val: -2, choix3Val: -2},
{text:"Tu es resté là pendant longtemps et tu es mort de faim et de déshydratation", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
{text:"Tu t'approche du mur et tu te fracasses violament la tête contre celui-ci", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 34, choix2Val: -2, choix3Val: -2},
{text:"Bon j'ai les idées claires maintenant. Je fais quoi maintenant ?", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Je continue (x10)" , choix2Label:"Je relève le défi", choix3Label:"", choix1Val: 35, choix2Val: 37, choix3Val: -2},
{text:"Tu te fracasses de nouveau la tête contre le mur (une tache de sang y est apparu) <br/>Au bout de la dixième fois tu commences à avoir la tête qui tourne et à avoir envie de vormir", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 36, choix2Val: -2, choix3Val: -2},
{text:"Tu meurt peu après d'une hémoragie cérébrale", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
{text:"Bon quelle porte prendre maintenant", persoLeft:"url('img/girl2.png')", persoRight:"url('img/girl2.png')", choix1Label:"Bleue" , choix2Label:"Rouge", choix3Label:"verte", choix1Val: -2, choix2Val: -2, choix3Val: -2},

]


function generateInterface(index)
{	
	if (index == 31) {
	mortNoir()
	}
	if (index == -1){
		perdu();
	}
	var divLeft = document.getElementById("left");
	var divRight = document.getElementById("right");
	var parole = document.getElementById('parolees');
	var choix = document.getElementById('choix');
	
	parole.innerHTML = donnees[index].text;
	divRight.style.backgroundImage = donnees[index].persoRight;
	divLeft.style.backgroundImage = donnees[index].persoLeft;
	contenuChoix = "";
	if (donnees[index].choix1Label != ""){
		contenuChoix = contenuChoix +"<div class='choix1' onClick=\"generateInterface(" + donnees[index].choix1Val + ")\"><div>" + donnees[index].choix1Label + "</div></div>" ;
	}
	if (donnees[index].choix2Label != ""){
		contenuChoix = contenuChoix +"<div class='choix1' onClick=\"generateInterface(" + donnees[index].choix2Val + ")\"><div>" + donnees[index].choix2Label + "</div></div>" ;
	}
	if (donnees[index].choix3Label != ""){
		contenuChoix = contenuChoix +"<div class='choix1' onClick=\"generateInterface(" + donnees[index].choix3Val + ")\"><div>" + donnees[index].choix3Label + "</div></div>" ;
	}
	choix.innerHTML = contenuChoix;
}

function chapitre1(){
	var texte = document.getElementById('texteIntro');
	texte.style.display = 'none';
	generateInterface(0);
}

function perdu(){
	var footer = document.getElementById('footer');
	footer.style.display = 'none';
	var table = document.getElementById('interface');
	table.style.display = 'none';
	var body = document.getElementById('body')
	body.style.backgroundColor = 'black';
	var GameOver = document.getElementById('GameOver');
	GameOver.style.display = 'block';
}

function mortNoir()
{
	var body = document.getElementById('body')
	body.style.backgroundColor = 'black';
	var paroles = document.getElementById('interface')
	paroles.style.color = 'white';
}