let nbClicks = 0;

window.onload = () => {
    majCompteur();
}
function clicBouton()
{
    nbClicks++;
    majCompteur();
}

function clicLien()
{
    nbClicks= 0;
    majCompteur();
    alert('Compteur remis à 0 !');
}

function majCompteur(){
    const compteur = document.getElementById("compteur");
    compteur.innerText = 'Vous avez cliqué ' + nbClicks + ' fois sur le bouton !';
}