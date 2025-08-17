window.joueur = 0;

function jouer()
{
	var titre = document.getElementById('titre');
	titre.style.display = 'none';

	var play = document.getElementById('jouer');
	play.style.display = 'none';

	var footer = document.getElementById('footer');
	footer.style.display = 'none';

	setTimeout(function()
	{
		var choixNom = document.getElementById('choixNom');
		choixNom.style.display = 'block';

		var nom = document.getElementById('nom');
		nom.style.display ='inline';
	},250);

}

function start(nom)
{
	window.joueur = nom;


	var choixNom = document.getElementById('choixNom');
	choixNom.style.display = 'none';

	var nom = document.getElementById('nom');
	nom.style.display ='none';

	setTimeout(presentation(),250);
}
