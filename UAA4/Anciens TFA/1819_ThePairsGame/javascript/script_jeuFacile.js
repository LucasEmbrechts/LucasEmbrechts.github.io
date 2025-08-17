// Nombre aléatoire
function aleat(){
	var min = Math.ceil(0);
	var max = Math.floor(15);
	var nbAleat = Math.floor(Math.random() * (max - min +1)) + min;
	return nbAleat;
}

// Repris dans tableau
function reprisDansTab(nb, tab){
	var i=0; 
	var dsTab = false;
	for(i=0; i< tab.length; i++){
		if(tab[i] == nb){
			dsTab = true;
		}
	}
	return dsTab;
}

// Selection de la carte

var selectionTab = [];
function selection(noCarte, imageCarte)
{
	//Selection Carte
	select[noCarte] = 0;
	nbCartesSelec = calcul();

	if(nbCartesSelec <= 2)
	{
		//Retourne les cartes
		var el = document.getElementById("carte" + noCarte);
		el.setAttribute("src", "./img/cartes/"+ imageCarte + '.png');

		//Conserve les deux cartes sélectionnées
		select1et2 = noCarte;
		selectionTab.push(select1et2);

	}

	if(nbCartesSelec == 2)
	{

		setTimeout(verif, 1900);

		

	}
}

// Si 2 cartes identiques sont sélectionnées
var retrouve = 0;
var pts = 0;
var erreur = 0;
function verif()
{

	if (paires[selectionTab[0]] == paires[selectionTab[1]])
	{
		retrouve = retrouve + 1;
		document.getElementById('retrouvees').innerHTML = "Nombre de paires retrouvées : "+retrouve;
		
		restant = restant - 1;
		document.getElementById('restantes').innerHTML = "Nombre de paires restantes : "+ restant;

		pts = pts  + 20;
		document.getElementById('points').innerHTML = "Points : "+ pts;

		document.getElementById('carte'+selectionTab[0]).removeAttribute("onclick");
		document.getElementById('carte'+selectionTab[1]).removeAttribute("onclick");
		document.getElementById('carte'+selectionTab[0]).style.opacity = "0";
		document.getElementById('carte'+selectionTab[1]).style.opacity = "0";

		enlevJeu();
		isFinished();
	} else {

		erreur = erreur + 1;
		document.getElementById('erreurs').innerHTML = "Nombre d'erreurs : "+erreur;

		pts = pts  - 2;
		document.getElementById('points').innerHTML = "Points : "+ pts;

		document.getElementById('carte'+selectionTab[0]).setAttribute("src", "./img/cartes/55.png");
		document.getElementById('carte'+selectionTab[1]).setAttribute("src", "./img/cartes/55.png");

		deselec();
	}
	selectionTab.pop();
	selectionTab.pop();
}

function deselec()
{
	for(var i = 0;i < select.length; i++)
	{
		if(select[i] == 0)
		{
			select[i] = -1;
		}
	}
}

function enlevJeu()
{
	for(var i = 0;i < select.length; i++)
	{
		if(select[i] == 0)
		{
			select[i] = 1;
		}
	}
}

// Vérifie si 2 cartes sont sélectionnées
function calcul()
{
	var total = 0;
	for(var i=0;i < select.length; i++)
	{
		if(select[i] == 0)
		{
			total = total + 1;
		}	
	}
	return total;
}

// Timer
var t = 0;
function timer()
{
	setTimeout(function()
			  {
			  	t = t + 1;
			  	document.getElementById('time').innerHTML = "Temps : "+t;
			  	timer();
			  }, 1000 );
}

// Vérifie après chaque action si toutes les cartes ont été retirées du jeu
function isFinished()
{
	var i;
	var peutGagner = true;
	for(i=0; i < select.length; i++){
		if(select[i] != 1){
			peutGagner = false;
		}
	}

	if(peutGagner == true){
		win();
	}
}	


function win() // Valide la victoire
{
	//déclare le tableau
	var scoreActuel = [ ]; 
	
	//Function qui ajoute une ligne au tableau; 
	var savedTPS = t;
	var savedPTS = pts;
	console.log(savedTPS + " " + savedPTS);
	scoreActuel.push({'temps' : savedTPS, 'points' : savedPTS});
	

	//Enregistre le tableau dans les cookies
	localStorage.setItem("scoreActuelPairesGame", JSON.stringify(scoreActuel));
	document.location.href = "./win.html";
}

	/* ---- état des cartes ---- */
	var select = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1] // -1 : cachée, 0 : découverte, 1 : retirée du jeu

	//déclarations
	var restant = 8;
	document.getElementById('restantes').innerHTML = "Nombre de paires restantes : "+ restant;
	var paires = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
	var enJeu = [];
	var enJeuTxt = "";
	var i = 1;
	var j = 0;

	//Première carte
	var nextIndice = aleat();
	enJeu.push(nextIndice);

	//Création et mélange des 8 paires
	while(i < 16)
	{
		//Génération d'une nouvelle carte. Celle-ci ne peut pas déjà exister dans le jeu
		while(reprisDansTab(nextIndice, enJeu))
		{
			nextIndice = aleat();
		}
		enJeu.push(nextIndice);
		i++;
	}
	console.log("mon Tableau : " + enJeu);

	//Positionnement des cartes sur le plateau de jeu
	var posCartes = "";
	for(i = 0; i < 16; i++)
	{
		posCartes = posCartes + "<img id='carte"+enJeu[i]+"'class='carte'src='./img/cartes/55.png' onclick='selection("+enJeu[i]+ "," + paires[enJeu[i]]+" )'>";
	}
	document.getElementById('plateau').innerHTML = posCartes;