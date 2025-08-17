var compteur = 0;
var myArray = ['',
	'Bienvenue à toi %nom% et merci de jouer à "The Life Is a Game". <br/>Les règles du jeux sont simples, tu joue un personnage et tu dois <br/>faire des choix par rapport à des situations. <br/>Attention, chaques choix à ses conséquences et peut même te conduire au "Gamer Over"',
	"Dans cette histoire tu incarnes un jeune homme universitaire <br/>étudiant le domaine du jeu vidéo qui en rentrant de l'école passe le <br/>reste de sa soirée à jouer à son ordinateur. <br/>Ses soirées étaient banales jusqu'au jour où il <br/>reçoit un mail assez étrange",''];

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
/*00*/{text:"Tiens un nouveau mail …", persoLeft:"url('img/girl1.png')", persoRight:"" , choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 1, choix2Val:-2, choix3Val: -2 },
/*01*/{text:"Hey, ça fait longtemps que je t’ observes et je voudrais te poser quelques questions. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signé X", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 2, choix2Val:-2, choix3Val: -2},
/*02*/{text:"Que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Répondre", choix2Label:"Ignorer", choix3Label:"", choix1Val: 4, choix2Val: 3, choix3Val: -2},
/*03*/{text:"Bof je m’ en tape un peu, je n’ ai qu’à l’ ignorer", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
/*04*/{text:"Bon allons-y.", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 5, choix2Val: -2, choix3Val: -2},
/*05*/{text:"Salut, qu’est-ce que tu veux ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 6, choix2Val: -2, choix3Val: -2},
/*06*/{text:"Que penses-tu de ce que tu fais après l' école ?", persoLeft:"url('img/girl11.png')", persoRight:"url('')", choix1Label:"C'est sympa, ça me permet de décompresser et de changer un peu de monde", choix2Label:"Ça me gave, je n'apprends rien et je me détruis le cerveau", choix3Label:"", choix1Val: 9, choix2Val: 7, choix3Val: -2},
/*07*/{text:"Desolé j’ai dû me tromper de personne. Adieu", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 8, choix2Val: -2, choix3Val: -2},
/*08*/{text:"Malgré les plusieurs messages que tu lui envois, la personne ne te réponds plus, tu ne sauras jamais ce qu’elle te voulait.", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
/*09*/{text:"Quel est ton objectif dans la vie ?", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Créer un jeu vidéo qui sera reconnu même par les gens anti jeux vidéo", choix2Label:"Trouver une copine", choix3Label:"Arrêter mes étude et ne plus toucehr à un ordinateur", choix1Val: 13, choix2Val: 13, choix3Val: 10},
/*10*/{text:"Je te souhaites bien du courage", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 11, choix2Val: -2, choix3Val: -2},
/*11*/{text:"Depuis ce jour tu n’as jamais reçu de messages de sa part. Tu trouves un travail, tu te maries, as des enfants. Comme tu avais répondu, tu ne touches plus à un ordinateur de ta vie et tu meurs vieux et sénile tout en regrettant ton mariage et ta réponse à ce fameux mail", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
/*12*/{text:"Blonde ou Brune?", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Blonde si je n'ai pas le choix", choix2Label:"Brune si je n'ai pas le choix", choix3Label:"Les Deux, je suis gourmand ", choix1Val: 13, choix2Val: 13, choix3Val: 13},
/*13*/{text:"C'est bon à savoir", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 14, choix2Val: -2, choix3Val: -2},
/*14*/{text:"Bon je vais te défier dans un petit jeu. Si tu y arrive, je te promets de changer radicalement ta vie.<br/>Ne t’inquiète pas si tu es vraiment comme je le pense, tout va bien se passer.", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 15, choix2Val: -2, choix3Val: -2},
/*15*/{text:"Il y a un lien, je clique ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Oui", choix2Label:"Oui (tu es obligé)", choix3Label:"", choix1Val: 16, choix2Val: 16, choix3Val: -2},
/*16*/{text:"Tu cliques sur le lien et les murs autours de toi commencent à changer de couleur et tu te sens aspiré dans ton écran.<br/>Tu te retrouves seul dans une pièce blanche sans fenêtre et sans porte.", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 17, choix2Val: -2, choix3Val: -2},
/*17*/{text:"Tu entends une voix qui a l’air de venir de partout à la fois<br/>Une fille apparait devant toi", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 18, choix2Val: -2, choix3Val: -2},
/*18*/{text:"Bien le bonjour. Merci d’avoir accepté mon défi. Avant de commencer tu as le droit à une question, alors choisis la bien ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Ou suis-je ?", choix2Label:"Tu as un copain ?", choix3Label:"Euh, je peux avoir plus de questions ?", choix1Val: 19, choix2Val: 20, choix3Val: 21},
/*19*/{text:"Quelque part", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
/*20*/{text:"Eh . . . Non, je suis seule", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
/*21*/{text:"Bien essayer mais non", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 22, choix2Val: -2, choix3Val: -2},
/*22*/{text:"Voilà j’ai répondu à ta question, maintenant passons à l’épreuve ultime qui décidera de ta vie ou de ta mort xD", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 25, choix2Val: -2, choix3Val: -2},
/*23*/{text:"Si tu réussis tu seras redirigé ici et tu pourras choisir une autre porte, si tu ne réussis pas tu mourras . <br/>C’est simple non ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Euh...", choix2Label:"", choix3Label:"", choix1Val: 24, choix2Val: -2, choix3Val: -2},
/*24*/{text:"Bon allez moi je te laisse a plus ! !", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Mais attend ! ! !", choix2Label:"", choix3Label:"", choix1Val: 26, choix2Val: -2, choix3Val: -2},
/*25*/{text:"Le but est simple, en face de toi tu as trois portes : une rouge, une verte et une bleue. <br/>Tu dois passer dans chaque porte et résoudre les problèmes qui te sont donné.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 23, choix2Val: -2, choix3Val: -2},
/*26*/{text:"La fille disparait et tu te retrouves seul face à ses trois portes qui sont sortis d'on ne sait où", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 27, choix2Val: -2, choix3Val: -2},
/*27*/{text:"Bon réfléchissons, j’étais dans ma chambre, j’ai lu un mail, j'ai répondu à ce mail et je me suis retrouvé la. <br/>Ça fait combien de temps que je n’ai pas dormi moi ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant", choix2Label:"", choix3Label:"", choix1Val: 28, choix2Val: -2, choix3Val: -2},
/*28*/{text:"Bref c'est pas grave, mais une question me vient à l'esprit . . .  <br/> JE FAIS QUOI MOI MAINTENANT ! ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Je suis dans un rêve, j’ai juste à attendre de me réveiller. Dormir me fera le plus grand bien", choix2Label:"Je vais m’éclater la tête contre les murs voir ce que ça fait", choix3Label:"Je relève son défi ", choix1Val: 29, choix2Val: 33, choix3Val: 37},
/*29*/{text:"Allez dormons un peu et à mon réveil je serais devant mon pc, dans ma chambre que j'aime tant", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 30, choix2Val: -2, choix3Val: -2},
/*30*/{text:"zzzzzzzzzzzzzzzZZZZZZZZZZZZZZZZZZZZZZZZZ", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 31, choix2Val: -2, choix3Val: -2},
/*31*/{text:"Tu te réveilles et tu te rends compte que les portes ont disparues. <br/>Soudain la lumière s'éteint et tu te retrouves seul dans le noir.", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 32, choix2Val: -2, choix3Val: -2},
/*32*/{text:"Tu es resté là pendant longtemps et tu meurs de faim et de déshydratation", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
/*33*/{text:"Tu t'approches du mur et tu te fracasses violemment la tête contre celui-ci", persoLeft:"url('img/gir11.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 34, choix2Val: -2, choix3Val: -2},
/*34*/{text:"Bon j'ai les idées claires maintenant. Je fais quoi ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Je continue (x10)" , choix2Label:"Je relève le défi", choix3Label:"", choix1Val: 35, choix2Val: 37, choix3Val: -2},
/*35*/{text:"Tu te fracasses de nouveau la tête contre le mur (une tache de sang y est apparu) <br/>Au bout de la dixième fois tu commences à avoir la tête qui tourne et à avoir envie de vomir", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 36, choix2Val: -2, choix3Val: -2},
/*36*/{text:"Tu meurs peu après d'une hémorragie cérébrale", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2},
/*37*/{text:"Bon quelle porte prendre maintenant ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Rouge" , choix2Label:"Verte", choix3Label:"Bleue", choix1Val: 81, choix2Val: 81, choix3Val: 38}, 
/*38*//*porte Bleue*/{text:"Tu passes la porte et tu es happé par un force inconnu", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 39, choix2Val: -2, choix3Val: -2}, 
/*39*/{text:"Tu te retrouves dans l'espace. Tu commences à paniquer en pensant que tu étouffe <br/>mais au bout d'un moment tu te rend compte que tu arrives à respirer.", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 40, choix2Val: -2, choix3Val: -2}, 
/*40*/{text:"Quelqu'un te tape sur l'épaule. En te retournant (surpris) tu vois une jolie jeune fille <br/>qui se tient devant toi mais flottant la tête en bas.", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 41, choix2Val: -2, choix3Val: -2}, 
/*41*/{text:"Salut !!!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 42, choix2Val: -2, choix3Val: -2}, 
/*42*/{text:"Euh ...", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"Salut" , choix2Label:"Non mais ça va pas, pour qui tu te prends !?", choix3Label:"T'as de beau yeux tu sais ?", choix1Val: 43, choix2Val: 45, choix3Val: 44}, 
/*43*/{text:"Qu'est-ce que tu fais la ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Je t'en pose moi des question ?" , choix2Label:"J'ai traversé une porte et je me suis retrouvé ici", choix3Label:"", choix1Val: 46, choix2Val: 58, choix3Val: -2}, 
/*44*/{text:"Merci", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 43, choix2Val: -2, choix3Val: -2}, 
/*45*/{text:"Mais . . . Mais . . . ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Tu m'as fait peur !!!" , choix2Label:"", choix3Label:"", choix1Val: 46, choix2Val: -2, choix3Val: -2}, 
/*46*/{text:"Pardon !!! (Elle se met à pleurer)", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 47, choix2Val: -2, choix3Val: -2}, 
/*47*/{text:"Mince que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"La consoler" , choix2Label:"S'énerver encore plus", choix3Label:"", choix1Val: 52, choix2Val: 48, choix3Val: -2}, 
/*48*/{text:"Elle pleure encore plus", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 49, choix2Val: -2, choix3Val: -2}, 
/*49*/{text:"Puis elle arrête de pleurer et devient très silencieuse", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 50, choix2Val: -2, choix3Val: -2}, 
/*50*/{text:"Elle te regarde avec un regard meurtrier et elle sourit", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Euh . . . ça va ?" , choix2Label:"", choix3Label:"", choix1Val: 51, choix2Val: -2, choix3Val: -2}, 
/*51*/{text:"Elle se met à rire et se jette sur toi et soudain tu vois ton corps ensanglanté <br/>voler devant tes yeux en remarquant qu'il manque ta tête.", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: -1, choix2Val: -2, choix3Val: -2}, 
/*52*/{text:"Pardon, je me suis emporté . Est-ce que ça va ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 53, choix2Val: -2, choix3Val: -2}, 
/*53*/{text:"Dé ... Désolé . . . ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 54, choix2Val: -2, choix3Val: -2},
/*54*/{text:"Non c'est moi qui m' excuse de t'avoir fait pleurer", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Lui tendre un mouchoir" , choix2Label:"", choix3Label:"", choix1Val: 55, choix2Val: -2, choix3Val: -2}, 
/*55*/{text:"Mer ... Merci", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 56, choix2Val: -2, choix3Val: -2}, 
/*56*/{text:"Ça va mieux ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 57, choix2Val: -2, choix3Val: -2}, 
/*57*/{text:"Oui ça va. Mais dit moi, que fais-tu ici ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"J'ai traversé une porte et je me suis retrouvé ici" , choix2Label:"", choix3Label:"", choix1Val: 58, choix2Val: -2, choix3Val: -2}, 
/*58*/{text:"Traverser une porte ? ", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Euh ... Oui, pourquoi ?" , choix2Label:"", choix3Label:"", choix1Val: 59, choix2Val: -2, choix3Val: -2}, 
/*59*/{text:"Tu n'aurais pas rencontré une fille par hasard ? ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Si justement" , choix2Label:"", choix3Label:"", choix1Val: 60, choix2Val: -2, choix3Val: -2},
/*60*/{text:"Ah mais tout s' explique !!!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Nani ?" , choix2Label:"", choix3Label:"", choix1Val: 61, choix2Val: -2, choix3Val: -2},
/*61*/{text:"Attend je t' explique, c'est encore ma soeur qui a fait des siennes.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Quoi ?" , choix2Label:"Ta soeur ?", choix3Label:"", choix1Val: 63, choix2Val: 62, choix3Val: -2},
/*62*/{text:"Oui ma soeur, j'en ai 2 autres avec elle", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"D'accord ...." , choix2Label:"", choix3Label:"", choix1Val: 63, choix2Val: -2, choix3Val: -2},
/*63*/{text:"Bref, elle t'as amené ici et elle t'as dit quoi ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl3.png')", choix1Label:"Que je devais résoudre un problème et que je pourrai quitter cet endroit" , choix2Label:"", choix3Label:"", choix1Val: 64, choix2Val: -2, choix3Val: -2},
/*64*/{text:"D'accord, donc je dois juste te poser une question ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl33.png')", choix1Label:"Ça doit être ça" , choix2Label:"", choix3Label:"", choix1Val: 65, choix2Val: -2, choix3Val: -2},
/*65*/{text:"Allons-y. Paul a trois pommes, son bus a 5 minutes de retards et il mâche un chewing-gum rose. Calcule la masse du soleil. <br/>Si tu n'y arrive pas je te tuerai.  XD", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Quoi ?!" , choix2Label:"", choix3Label:"", choix1Val: 66, choix2Val: -2, choix3Val: -2},
/*66*/{text:"Non je rigole t'inquiète.", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Pfiou . . ." , choix2Label:"", choix3Label:"", choix1Val: 67, choix2Val: -2, choix3Val: -2},
/*67*/{text:"Je rigolais avec le problème par contre si tu te trompes je te tuerai vraiment", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:". . ." , choix2Label:"", choix3Label:"", choix1Val: 68, choix2Val: -2, choix3Val: -2},
/*68*/{text:"Bon arrêtons de rigoler et passons aux choses sérieuses. Tu es prêt ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Oui" , choix2Label:"T'as pas le choix", choix3Label:"", choix1Val: 71, choix2Val: 71, choix3Val: -2},
/*69*/{text:"L'intensité de la force électrostatique entre deux charges électriques est proportionnelle au produit des deux charges et est inversement proportionnelle au carré de la distance entre les deux charges. La force est portée par la droite passant par les deux charges. ", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"La loi de la diffusion de la matière" , choix2Label:" La loi de Coulomb", choix3Label:"La loi universelle de la gravitation", choix1Val: 70, choix2Val: 72, choix3Val: 70},
/*70*/{text:"Eh non tu as perdu je vais devoir te tuer", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 50, choix2Val: -2, choix3Val: -2},
/*71*/{text:"Quelle est la loi énoncée :", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 69, choix2Val: -2, choix3Val: -2},
/*72*/{text:"Bravo !! Je ne savais pas que tu t'y connaissais autant en physique", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Merci Merci" , choix2Label:"", choix3Label:"", choix1Val: 73, choix2Val: -2, choix3Val: -2},
/*73*/{text:"Juste une autre question, mais celle-là est juste pour m'amuser, je ne te tuerai pas si tu te trompes", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"D'accord" , choix2Label:"", choix3Label:"", choix1Val: 74, choix2Val: -2, choix3Val: -2},
/*74*/{text:"Combien y a-t-il de possibilité de mouvement sur un plateau d'échec ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"dix exposant vingt-cinq" , choix2Label:"dix exposant deux cent vingt-trois", choix3Label:"dix exposant cent vingt", choix1Val: 77, choix2Val: 77, choix3Val: 75},
/*75*/{text:"Et en plus tu t'y connais aux échec !! Mais c'est formidable ça", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 76, choix2Val: -2, choix3Val: -2},
/*76*/{text:"Tu peux maintenant partir, tu l'as bien mérité", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Merci ^^" , choix2Label:"", choix3Label:"", choix1Val: 78, choix2Val: -2, choix3Val: -2},
/*77*/{text:"Eh non perdu, il y a dix exposant cent-vingt possibilités sur un plateau d'échec. Et théoriquement, il y a un moyen infaillible de gagner si tu les comprends toutes", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl3.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 76, choix2Val: -2, choix3Val: -2},
/*78*/{text:"Au revoir !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl33.png')", choix1Label:"Au revoir !!" , choix2Label:"", choix3Label:"", choix1Val: 79, choix2Val: -2, choix3Val: -2},
/*79*/{text:"Tu es happé par la même force qui t'as amené ici et tu te retrouves dans la salle blanche face aux deux portes restantes", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 80, choix2Val: -2, choix3Val: -2},
/*80*/{text:"Laquelle choisir ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Rouge" , choix2Label:"Verte", choix3Label:"", choix1Val: 83, choix2Val: 82, choix3Val: -2},
/*81*/{text:"Elle est verrouillé", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"En essayer une autre" , choix2Label:"", choix3Label:"", choix1Val:37, choix2Val: -2, choix3Val: -2},
/*82*/{text:"Elle est verrouillé", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"En essayer une autre" , choix2Label:"", choix3Label:"", choix1Val:80, choix2Val: -2, choix3Val: -2},
/*83*//*porte rouge*/{text:"Tu prends la porte rouge et ton corps se décompose en des milliers de pixels pour se recomposer dans un monde virtuel", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val: 84, choix2Val: -2, choix3Val: -2},
/*84*/{text:"Il y a quelqu'un ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:85, choix2Val: -2, choix3Val: -2},
/*85*/{text:"Une voix réponds : Oui ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:86, choix2Val: -2, choix3Val: -2},
/*86*/{text:"Euh, où êtes vous ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:87, choix2Val: -2, choix3Val: -2},
/*87*/{text:"Partout et nul part à la fois ", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:88, choix2Val: -2, choix3Val: -2},
/*88*/{text:"Vous pourriez vous montrer s'il vous plait ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:89, choix2Val: -2, choix3Val: -2},
/*89*/{text:"Comme ça ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:90, choix2Val: -2, choix3Val: -2},
/*90*/{text:"Une fille apparait devant toi", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl44.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:91, choix2Val: -2, choix3Val: -2},
/*91*/{text:"Hello !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl44.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:92, choix2Val: -2, choix3Val: -2},
/*92*/{text:"Bonjour etranger, que vient tu faire ici ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Rien je me balladais, il fait faut beau tu ne trouves pas ?" , choix2Label:"Je suis venu suite à un défi lancé par une étrange fille", choix3Label:"Ça te regardes ? !", choix1Val:95, choix2Val: 96, choix3Val: 93},
/*93*/{text:"Tu as raison, je m'en excuse et je vais de ce pas disparaître", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl44.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:94, choix2Val: -2, choix3Val: -2},
/*94*/{text:"Elle disparait et ne réponds plus jamais à tes appels, tu reste coincé dans ce monde pour l'éternité", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:-1, choix2Val: -2, choix3Val: -2},
/*95*/{text:"Oui je trouve aussi, mais assez plaisanté. Que fait tu réellement ici ? ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Je suis venu suite à un défi lancé par une étrange fille" , choix2Label:"", choix3Label:"", choix1Val:96, choix2Val: -2, choix3Val: -2},
/*96*/{text:"Un défi tu dis, hum . . . je sens que l'on va bien s'amuser", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Euh . . . ok" , choix2Label:"", choix3Label:"", choix1Val:97, choix2Val: -2, choix3Val: -2},
/*97*/{text:"Bon je vais faire simple, c'est marrant tu verra. Je vais penser à un chiffre dans ma tête qui peut avoir une valeur minimale de 1 et une valeur maximale de 100.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"D'accord" , choix2Label:"", choix3Label:"", choix1Val:98, choix2Val: -2, choix3Val: -2},
/*98*/{text:"Tu devras deviner si la valeur est supérieur ou inférieur à 50. D'accord ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Euh j'ai le droit à plusieurs chances ?" , choix2Label:"", choix3Label:"", choix1Val:99, choix2Val: -2, choix3Val: -2},
/*99*/{text:"Non tu as le droit à une seule chance. Si tu gagne tu pourra quitter cet endroit et je te dirais un petit secret sur cette étrange fille.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Ok" , choix2Label:"", choix3Label:"", choix1Val:100, choix2Val: -2, choix3Val: -2},
/*100*/{text:"Et si je perds ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl44.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:101, choix2Val: -2, choix3Val: -2},
/*101*/{text:"Si tu perds tu devras me dire un de tes secrets et tu pourras partir.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:102, choix2Val: -2, choix3Val: -2},
/*102*/{text:"Les règles te conviennent ? ", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Oui" , choix2Label:"Non", choix3Label:"", choix1Val:106, choix2Val: 103, choix3Val: -2},
/*103*/{text:"Tu préfères mourrir si tu échoue peut être ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Oui" , choix2Label:"Non", choix3Label:"", choix1Val:104, choix2Val: 105, choix3Val: -2},
/*104*/{text:"Quelle audace, Je me dois de te punir pour cela", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Quoi ?!" , choix2Label:"", choix3Label:"", choix1Val:119, choix2Val: -2, choix3Val: -2},
/*105*/{text:"C'est bien ce que je pensais", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:106, choix2Val: -2, choix3Val: -2},
/*106*/{text:"Tu es prêts ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Oui" , choix2Label:"T'as toujours pas le choix", choix3Label:"", choix1Val:107, choix2Val: 107, choix3Val: -2},
/*107*/{text:"Bon, c'est partit !!! Je pense à un chiffre . . . Et . . . C'est bon", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suite" , choix2Label:"", choix3Label:"", choix1Val:108, choix2Val: -2, choix3Val: -2},
/*108*/{text:"Alors plus grand ou plus petit que 50 ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Plus petit" , choix2Label:"Plus grand", choix3Label:"", choix1Val:109, choix2Val: 109, choix3Val: -2},
/*109*/{text:"Eh non, perdu !!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:110, choix2Val: -2, choix3Val: -2},
/*110*/{text:"Mais il vallait combien ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl44.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:111, choix2Val: -2, choix3Val: -2},
/*111*/{text:"Beh 50 xD", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Grrrrrr" , choix2Label:"", choix3Label:"", choix1Val:112, choix2Val: -2, choix3Val: -2},
/*112*/{text:"Bon maintenant tu doit me dire un de tes secrets", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Non tu as triché" , choix2Label:"D'accord", choix3Label:"", choix1Val:113, choix2Val:116 , choix3Val: -2},
/*113*/{text:"Non je n'ai pas trichée vu que j'ai dit que le nombre se trouvais entre 1 et 100", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Tu m'as bien eu" , choix2Label:"Tu n'as pas dit que ça pouvais être égal", choix3Label:"", choix1Val:114, choix2Val: 120, choix3Val: -2},
/*114*/{text:"Je sais je sais", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:115, choix2Val: -2, choix3Val: -2},
/*115*/{text:"Bon tu me dit un de tes secrets ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"J'ai pas le choix" , choix2Label:"", choix3Label:"", choix1Val:116, choix2Val: -2, choix3Val: -2},
/*116*/{text:"Je lui dit lequel ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Je suis toujours puceau" , choix2Label:"J'ai pas de copine", choix3Label:"Je dis chocolatine", choix1Val:117, choix2Val: 117, choix3Val:118},
/*117*/{text:"Hahahahaha !!! T'es un marrant toi !! Allez tu peux partir.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Bye" , choix2Label:"", choix3Label:"", choix1Val:122, choix2Val: -2, choix3Val: -2},
/*118*/{text:"Sache que ce seront tes derniers mots misérable insecte.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Quoi !?" , choix2Label:"", choix3Label:"", choix1Val:119, choix2Val: -2, choix3Val: -2},
/*119*/{text:"Une épée se matérialise dans ses mains et te tranche en deux. Tu exploses en  pleins de milliers de pixels ensanglantés", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:-1, choix2Val: -2, choix3Val: -2},
/*120*/{text:"Tu oses me contredire, moi qui suis déesse et crétrice de ce lieu ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Non votre sainteté" , choix2Label:"Oui et j'ai pas lintention d'arrêter", choix3Label:"", choix1Val:121, choix2Val: 119, choix3Val: -2},
/*121*/{text:"Tu as fait le bon choix", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl4.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:114, choix2Val: -2, choix3Val: -2},
/*122*//*porte verte*/{text:"Ton corps se désintègre et tu réapparais dans la pièce avec les portes", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:123, choix2Val: -2, choix3Val: -2},
/*123*/{text:"Allez, plus qu'une porte et ça sera fini", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:124, choix2Val: -2, choix3Val: -2},
/*124*/{text:"Mince elle est verouillée", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:125, choix2Val: -2, choix3Val: -2},
/*125*/{text:"Mais c'est pas normal Grrrrrrr", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:126, choix2Val: -2, choix3Val: -2},
/*126*/{text:"Bon que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Enfoncer la porte" , choix2Label:"Toquer et patienter", choix3Label:"Danser le sirtaki", choix1Val:128, choix2Val: 129, choix3Val: 127},
/*127*/{text:"Tu te mets à dancer devant la porte mais rien ne se passe", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:126, choix2Val: -2, choix3Val: -2},
/*128*/{text:"Tu essaies d'enfoncer la porte mais tous ce que tu obtient, c'est une blessure à l'épaule", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:126, choix2Val: -2, choix3Val: -2},
/*129*/{text:"Toc Toc Toc", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:130, choix2Val: -2, choix3Val: -2},
/*130*/{text:"La porte s'entrouve et tu appercoit une silhouette", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:131, choix2Val: -2, choix3Val: -2},
/*131*/{text:"Nous n'achetons pas de tapis ni d'apsirateurs merci", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:132, choix2Val: -2, choix3Val: -2},
/*132*/{text:"Et la porte se referme", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Mais euh ..." , choix2Label:"", choix3Label:"", choix1Val:133, choix2Val: -2, choix3Val: -2},
/*133*/{text:"Non mais je rêve là !!", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:134, choix2Val: -2, choix3Val: -2},
/*134*/{text:"Toc Toc Toc x3", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:135, choix2Val: -2, choix3Val: -2},
/*135*/{text:"La porte s'ouvre de nouveau", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:136, choix2Val: -2, choix3Val: -2},
/*136*/{text:"Je vous ai dit que nous n'achetions ni tapis ni aspirateurs", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:137, choix2Val: -2, choix3Val: -2},
/*137*/{text:"Attendez !!!!!!!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:138, choix2Val: -2, choix3Val: -2},
/*138*/{text:"Je ne vends absolument rien, laissez moi vous expliquez ma venue s'il vous plaît", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:139, choix2Val: -2, choix3Val: -2},
/*139*/{text:"D'accord je vous écoute", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:140, choix2Val: -2, choix3Val: -2},
/*140*/{text:"Je suis là car une fille m'a demandé de passer par cette porte pour relever un défi", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:141, choix2Val: -2, choix3Val: -2},
/*141*/{text:"D'accord, mais pourquoi devez vous relever un défi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:142, choix2Val: -2, choix3Val: -2},
/*142*/{text:"Je n'en ai aucune idée", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:143, choix2Val: -2, choix3Val: -2},
/*143*/{text:"Bon discutons en plutôt à l'interieur", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl555.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:144, choix2Val: -2, choix3Val: -2},
/*144*/{text:"La porte s'ouvre et la silhouette se transforme en une magnifique jeune fille", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:145, choix2Val: -2, choix3Val: -2},
/*145*/{text:"Elle t'invite à entrer et en passant la porte tu te retrouve devant un arbre magnifique avec une autre porte", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:146, choix2Val: -2, choix3Val: -2},
/*146*/{text:"Ouah, c'est vraiment magnifique !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:147, choix2Val: -2, choix3Val: -2},
/*147*/{text:"Merci ^^", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:148, choix2Val: -2, choix3Val: -2},
/*148*/{text:"Elle s'assoit sur une racine et t'invite à faire de même", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:149, choix2Val: -2, choix3Val: -2},
/*149*/{text:"Alors racontez moi votre histoire depuis le début et ce qu'il s'est passé jusqu'à maintenant", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:150, choix2Val: -2, choix3Val: -2},
/*150*/{text:"Tu lui raconte ton histoire et ce qu'il t'es arrivé", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:151, choix2Val: -2, choix3Val: -2},
/*151*/{text:"Donc vous avez fait la connaissance de mes 3 soeurs", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:152, choix2Val: -2, choix3Val: -2},
/*152*/{text:"C'est ça, mais puis je vous posez une question ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:153, choix2Val: -2, choix3Val: -2},
/*153*/{text:"Bien sûr", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:154, choix2Val: -2, choix3Val: -2},
/*154*/{text:"Qu'êtes vous réellement ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:155, choix2Val: -2, choix3Val: -2},
/*155*/{text:"Nous sommes des déesses bannies dans une dimension. Nous ne pouvous pas sortir d'ici.", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Pourquoi avez vous été bannies ?" , choix2Label:"Et moi dans tout ça ?", choix3Label:"", choix1Val:156, choix2Val: 157, choix3Val: -2},
/*156*/{text:"Car nous nous sommes rebéllées contre notre père et avons détruit la moitié de notre monde. Mais ce n'est qu'un détail", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Et moi dans tout ça ?" , choix2Label:"", choix3Label:"", choix1Val:159, choix2Val: -2, choix3Val: -2},
/*157*/{text:"Ma plus jeune soeur adore les humains mais c'est la première fois qu'elle en invoque un ici", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Pourquoi avez vous été bannies ?" , choix2Label:"", choix3Label:"", choix1Val:158, choix2Val: -2, choix3Val: -2},
/*158*/{text:"Car nous nous sommes rebéllées contre notre père et avons détruit la moitié de notre monde. Mais ce n'est qu'un détail", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:160, choix2Val: -2, choix3Val: -2},
/*159*/{text:"Ma plus jeune soeur adore les humains mais c'est la première fois qu'elle en invoque un ici", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:160, choix2Val: -2, choix3Val: -2},
/*160*/{text:"Et pour le défi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:161, choix2Val: -2, choix3Val: -2},
/*161*/{text:"Beh je ne sais pas, je vais y réfléchir. En attendant je vais faire du thé vous en voulez ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Avec plaisir" , choix2Label:"Non merci mais c'est bien aimable", choix3Label:"", choix1Val:164, choix2Val: 162, choix3Val: -2},
/*162*/{text:"Voulez-vous autre chose ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Un peu d'eau" , choix2Label:"Rien merci", choix3Label:"", choix1Val:163, choix2Val: 164, choix3Val: -2},
/*163*/{text:"Je vous ramène ça tout de suite", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:164, choix2Val: -2, choix3Val: -2},
/*164*/{text:"Elle prend la porte qui se trouve dans l'arbre et disparait", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:165, choix2Val: -2, choix3Val: -2},
/*165*/{text:"Tu patientes un peu quand soudain tu entends un cri venant de l'arbre", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:166, choix2Val: -2, choix3Val: -2},
/*166*/{text:"Que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Ne rien faire et se cacher" , choix2Label:"Courrir voir ce qu'il se passe", choix3Label:"", choix1Val:167, choix2Val: 173, choix3Val: -2},
/*167*/{text:"Après un moment, tu la voit revenir en colère qui s'approche vers toi", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:168, choix2Val: -2, choix3Val: -2},
/*168*/{text:"Sache que tu viens d'échouer ton épreuve et que pour te punir de ta lacheté je vais devoir te tuer", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Non mais attend" , choix2Label:"", choix3Label:"", choix1Val:169, choix2Val: -2, choix3Val: -2},
/*169*/{text:"Elle t'attrape par la gorge, sort une dague de sa robe et commence a de dépecer petit à petit", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:170, choix2Val: -2, choix3Val: -2},
/*170*/{text:"Un sourire psycopathe peut se lire sur son visage, c'est sûr elle prend du plaisir à te tuer", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:171, choix2Val: -2, choix3Val: -2},
/*171*/{text:"Après la peau elle t'ouvre et sort tes organes un par un pour te les mettre devant les yeux", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:172, choix2Val: -2, choix3Val: -2},
/*172*/{text:"Ton coeur finit par lacher à cause la douleur", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:-1, choix2Val: -2, choix3Val: -2},
/*173*/{text:"Tu plonge dans la pièce, tu es d'abord impréssioné de voir un magnifique bibliothèque puis tu te rends compte que ton hôte se fait attaquer", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:174, choix2Val: -2, choix3Val: -2},
/*174*/{text:"Grrrrr", persoLeft:"url('img/girl11.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:175, choix2Val: -2, choix3Val: -2},
/*175*/{text:"A l'aide !!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:176, choix2Val: -2, choix3Val: -2},
/*176*/{text:"J'arrive !!!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:177, choix2Val: -2, choix3Val: -2},
/*177*/{text:"Le monstre se retourne vers toi, l'affrontement est inévitable", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:178, choix2Val: -2, choix3Val: -2},
/*178*/{text:"Que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Lui donner un coup de poing" , choix2Label:"Lui donner un coup de pieds", choix3Label:"", choix1Val:179, choix2Val: -2, choix3Val: -2},
/*179*/{text:"Tu fonce sur lui et essaie de lui asséner un coup mais il l'évite", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:180, choix2Val: -2, choix3Val: -2},
/*180*/{text:"Il te donne un coup et tu es propulsé contre une des bibliothèques. Ton bras te fais atrocement mal", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:181, choix2Val: -2, choix3Val: -2},
/*181*/{text:"Tu n'y arrivera pas comme ça !!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:182, choix2Val: -2, choix3Val: -2},
/*182*/{text:"(tu craches un peu de sang) Comment faire alors ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:183, choix2Val: -2, choix3Val: -2},
/*183*/{text:"Je vais t'accorder les droits de créations", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:184, choix2Val: -2, choix3Val: -2},
/*184*/{text:"Les droits de quoi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:185, choix2Val: -2, choix3Val: -2},
/*185*/{text:"Grrrrrrr . . . Rhaaaaaaaaa", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:186, choix2Val: -2, choix3Val: -2},
/*186*/{text:"Pendant que tu parlais le montre est revenu à la charge. Que faire ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Esquiver" , choix2Label:"Bloquer", choix3Label:"", choix1Val:187, choix2Val: 188, choix3Val: -2},
/*187*/{text:"Tu esquives de justesse et tu mets à l'abris", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:190, choix2Val: -2, choix3Val: -2},
/*188*/{text:"Tu bloques avec tes deux bras mais tu sens que ton bras droit commence à se briser, ce qui te fait extrêmement mal. Tu le repousse mais à bout de force", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:189, choix2Val: -2, choix3Val: -2},
/*189*/{text:"Oh putain, ça fait mal . . .", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:190, choix2Val: -2, choix3Val: -2},
/*190*/{text:"Dépêche toi de m'expliquer, je vais pas tenir longtemps (crache du sang)", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:191, choix2Val: -2, choix3Val: -2},
/*191*/{text:"Tu peux utiliser n'importe quel moyen pour le battre. Tu as juste à imaginer quelque-chose et ça se créera", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:192, choix2Val: -2, choix3Val: -2},
/*192*/{text:"Absolument tout ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:193, choix2Val: -2, choix3Val: -2},
/*193*/{text:"OUI !!!!!!!", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:194, choix2Val: -2, choix3Val: -2},
/*194*/{text:"C'est partit !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:195, choix2Val: -2, choix3Val: -2},
/*195*/{text:"La bête se remets à charger", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:196, choix2Val: -2, choix3Val: -2},
/*196*/{text:"Bon je fais quoi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Kamé Hamé Ha" , choix2Label:"Explosion", choix3Label:"Attaque Hokuto", choix1Val:197, choix2Val: 200, choix3Val: 205},
/*197*/{text:"Tu te met en postion, tu joins tes mains et tu te prépare à attaquer", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:198, choix2Val: -2, choix3Val: -2},
/*198*/{text:"Kamé Hamé Ha", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:199, choix2Val: -2, choix3Val: -2},
/*199*/{text:"Ton tir fonce droit vers le monstre et le désintègre en des millions de particules", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:204, choix2Val: -2, choix3Val: -2},
/*200*/{text:"Tu fais aparraitre un baton et tu commence à incanter", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:201, choix2Val: -2, choix3Val: -2},
/*201*/{text:"Flammes noirs écralate, roi des myriades de mondes, bien que je promulgue les lois de la natures, je suis l'alias de la destruction incarnée. En accord avec tout les principes de créations, que le marteau de l'éternité descende sur moi ! EXPLOSION !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:202, choix2Val: -2, choix3Val: -2},
/*202*/{text:"Ton baton fait apparaitre un cercle de magie et fait exploser le montre en soufflant tout sur son passage (toi y compris)", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:203, choix2Val: -2, choix3Val: -2},
/*203*/{text:"Tu te retrouve propulsé contre un mur", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:208, choix2Val: -2, choix3Val: -2},
/*204*/{text:"Epuisé tu tombes à genoux", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:209, choix2Val: -2, choix3Val: -2},
/*205*/{text:"Le savoir de l'école Hokuto afflue en toi et te confère une force et une technique hors du commun", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:204, choix2Val: -2, choix3Val: -2},
/*206*/{text:"Le monstre se jette sur toi, Tu touches ses 7 points vitaux. La créature gonfle et explose en un tas de chair", persoLeft:"url('img/girl1.png')", persoRight:"url('img/monstre.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:20, choix2Val: -2, choix3Val: -2},
/*207*/{text:"Tu te retrouve propulsé contre un mur", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:204, choix2Val: -2, choix3Val: -2},
/*208*/{text:"La fille accourt vers toi", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:209, choix2Val: -2, choix3Val: -2},
/*209*/{text:"Attends je vais te soigner", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:210, choix2Val: -2, choix3Val: -2},
/*210*/{text:"Quoi tu peux faire ça ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:211, choix2Val: -2, choix3Val: -2},
/*211*/{text:"Je suis une déesse je te rappelle", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:212, choix2Val: -2, choix3Val: -2},
/*212*/{text:"Mais attend, tu savais te défendre alors ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:213, choix2Val: -2, choix3Val: -2},
/*213*/{text:"Oui vu que ce n'étais qu'une simple invocation", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:214, choix2Val: -2, choix3Val: -2},
/*214*/{text:"Je t'annonce que tu as réussis avec brio ton défi ^^", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:215, choix2Val: -2, choix3Val: -2},
/*215*/{text:"Quoi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:216, choix2Val: -2, choix3Val: -2},
/*216*/{text:"Oui, je me suis dit que ça serait bien un petit combat", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:217, choix2Val: -2, choix3Val: -2},
/*217*/{text:"J'ai faillis y rester tu sais ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:218, choix2Val: -2, choix3Val: -2},
/*218*/{text:"Mais non voyons hihihihi", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:219, choix2Val: -2, choix3Val: -2},
/*219*/{text:"Bon il est temps pour toi de quitter cet endroit maintenant que tes blessures sont guérries", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:220, choix2Val: -2, choix3Val: -2},
/*220*/{text:"Mais attend !!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl55.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:221, choix2Val: -2, choix3Val: -2},
/*221*/{text:"Adieu", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl5.jpg')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:222, choix2Val: -2, choix3Val: -2},
/*222*/{text:"Tu es téléporté dans la salle des portes mais elles ont toutes disparues", persoLeft:"url('img/girl11.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:223, choix2Val: -2, choix3Val: -2},
/*223*/{text:"Bon maintenant il se passe quoi ? ", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:224, choix2Val: -2, choix3Val: -2},
/*224*/{text:"Bravo à toi, jeune héro", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:225, choix2Val: -2, choix3Val: -2},
/*225*/{text:"Tiens tu es de retour toi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:226, choix2Val: -2, choix3Val: -2},
/*226*/{text:"Content de me voire ?", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:227, choix2Val: -2, choix3Val: -2},
/*227*/{text:"Un peu quand même car ça veut dire que j'ai réussis tous les défis", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:228, choix2Val: -2, choix3Val: -2},
/*228*/{text:"Oui et ça me fait extrêment plaisir que tu les ais reussis", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:229, choix2Val: -2, choix3Val: -2},
/*229*/{text:"Ah bon pourquoi ?", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:230, choix2Val: -2, choix3Val: -2},
/*230*/{text:"Pour rien. Bon je vais te récompenser pour avoir réussi", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:232, choix2Val: -2, choix3Val: -2},
/*231*/{text:"Oui et ça me fait extrêment plaisir que tu les ais reussis", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:232, choix2Val: -2, choix3Val: -2},
/*232*/{text:"Elle te donne ce qui ressemblerai à un rubix-cube mais avec une forme indescriptible", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:234, choix2Val: -2, choix3Val: -2},
/*233*/{text:"Oui et ça me fait extrêment plaisir que tu les ais reussis", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:234, choix2Val: -2, choix3Val: -2},
/*234*/{text:"Merci, je le garderai précieusement avec moi", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:235, choix2Val: -2, choix3Val: -2},
/*235*/{text:"Il est temps de se dire adieu", persoLeft:"url('img/girl11.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:236, choix2Val: -2, choix3Val: -2},
/*236*/{text:"Merci pour ce moment ce fut quand même amusant", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:237, choix2Val: -2, choix3Val: -2},
/*237*/{text:"Ton corps commence à se décomposer et soudain la fille se jette sur toi et t'embrasse. <br/>Peu après elle recule et te fait aurevoir de la main", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl2.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:238, choix2Val: -2, choix3Val: -2},
/*238*/{text:"Attend !!!!", persoLeft:"url('img/girl1.png')", persoRight:"url('img/girl22.png')", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:239, choix2Val: -2, choix3Val: -2},
/*239*/{text:"Tu te réveilles dans ta chambre devant ton ordinateur toujours allumé", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:240, choix2Val: -2, choix3Val: -2},
/*240*/{text:"Merde je me sui endormit devant l'ordi et demain j'ai école", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:241, choix2Val: -2, choix3Val: -2},
/*241*/{text:"Allez hop, j'éteins ça et au lit", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:242, choix2Val: -2, choix3Val: -2},
/*242*/{text:"J'ai l'impresion d'avoir oublié quelque-chose", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:243, choix2Val: -2, choix3Val: -2},
/*243*/{text:"Bof tampis, c'est que c'était pas important", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:244, choix2Val: -2, choix3Val: -2},
/*244*/{text:"Tu t'endors sans remarquer l'étrange objet qui se trouve sur ton bureau", persoLeft:"url('img/girl1.png')", persoRight:"", choix1Label:"Suivant" , choix2Label:"", choix3Label:"", choix1Val:-3, choix2Val: -2, choix3Val: -2},
]

function generateInterface(index)
{	if (index == -3) {
		fin();
}
	if (index == 239) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/chambre.jpg")';
	}
	if (index == 222) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/sansPortes.jpg")';		
	}
	if (index == 173) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/biblio.jpg")';
	}

	if (index == 145) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/porte.jpg")';
	}

	if (index == 122) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/vert.jpg")';

		var choix = document.getElementById('choix');
		choix.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

		var paroles = document.getElementById('paroles');
		paroles.style.backgroundColor ='rgba(255, 255, 255, 0.5)';
	}
	if(index == 83){
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/virtual.jpg")';

		var choix = document.getElementById('choix');
		choix.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

		var paroles = document.getElementById('paroles');
		paroles.style.backgroundColor ='rgba(255, 255, 255, 0.8)';
	}
	if (index == 79) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/vertRouge.jpg")';
	}
	if (index == 39) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/espace.jpg")';		
	}
	if (index == 25) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/piece2.jpg")';
	}
	if (index == 16) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/piece1.jpg")';
	}
	if(index == 0) {
		var body = document.getElementById('body')
		body.style.backgroundImage = 'url("img/chambre.jpg")';
	}

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
	var GameOver = document.getElementById('perdu');
	GameOver.style.display = 'block';

}

function mortNoir()
{
	var body = document.getElementById('body')
	body.style.backgroundColor = 'black';
	var paroles = document.getElementById('interface')
	paroles.style.color = 'white';
	body.style.backgroundImage = 'none';
}

function fin(){
	
	var footer = document.getElementById('footer');
	footer.style.display = 'none';
	var table = document.getElementById('interface');
	table.style.display = 'none';
	var body = document.getElementById('body')
	body.style.backgroundImage = 'url("img/Generique.jpg")';

}

//Code pas à moi

var refresh = window.getElementById('refresh');
refresh.addEventListener('click', location.reload(), false);
