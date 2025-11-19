function wakfuGame()
{
	var cacher = document.getElementById("imageFond");
	var cacher1 = document.getElementById("nox");
	var cacher2 = document.getElementById("cra");
	var cacher3 = document.getElementById("craqueleur");
	var cacher4 = document.getElementById("tofuEvil");
	var cacher5 = document.getElementById("tofuNoir");
	var cacher6 = document.getElementById("eliome");
	var cacher7 = document.getElementById("vies");
	var afficher1 = document.getElementById("boutton");
	var viesLives = document.getElementById("lives");
	var texte = document.getElementById("textGame");
	var okey = document.getElementById("ok");
	cacher.style.opacity = "1";
	cacher1.style.opacity = "1";
	cacher2.style.opacity = "1";
	cacher3.style.opacity = "1";
	cacher4.style.opacity = "1";
	cacher5.style.opacity = "0.8";
	cacher6.style.opacity = "0.2";
	cacher7.style.opacity = "1";
	afficher1.style.opacity = "0";
	viesLives.style.opacity = "1";
	texte.style.opacity = "1";
	okey.style.opacity = "1";
	viesLives.value = 0;
}

function jouer(lives)
{
	var live = document.getElementById("vies");
	var x;
	var temp = "";
	for(x=0;x<lives;x++)
	{
		temp = temp+ "<img src='dofusOcre.png' style='margin-top: 0.2%;' width='30' height='30'>";
	}
	live.innerHTML = temp;
}

function supprimerVie(lives)
{
	var tempo= "";
	var i;
	var liveee = document.getElementById("vies");
	document.getElementById("lives").value = lives-1;
	for(i=0;i<lives-1;i++)
    {
		tempo = tempo + "<img src='dofusOcre.png' style='margin-top: 0.2%;' width='30' height='30'>";
    }
	liveee.innerHTML = tempo;
	dead(lives-1);
}

function dead(lives)
{
	if(lives <= 0)
	{
		document.getElementById("imageFond").style.opacity = "0";
		document.getElementById("died").style.opacity = "1";
	}
}

function bulle()
{
	var bull = document.getElementById("bulleConv");
	bull.style.opacity = "0.8";
}

function bulleBis()
{
	var bull = document.getElementById("bulleConv");
	bull.style.opacity = "0";
}


