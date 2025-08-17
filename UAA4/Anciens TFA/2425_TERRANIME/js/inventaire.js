//Ryan De Roeck
let pageOuverte;
let inventaireOuvert = false;
let keyPressed = false;


fermerInventaire();

// Vérifie si une page est stockée en mémoire
let pageStockee = localStorage.getItem('inventoryPage');
console.log(pageStockee)
if((pageStockee == 'undefined' || pageStockee == null)) localStorage.setItem('inventoryPage', 1);
pageStockee = localStorage.getItem('inventoryPage');
pageOuverte = parseInt(pageStockee);

function ouvrirInventaire(page) {
  fermerInventaire(); // Toujours fermer avant d'ouvrir
  
  const page1 = document.getElementById('inventoryPage1');
  const page2 = document.getElementById('inventoryPage2');

  if (page === 1) {
    page1.classList.add('active');
    pageOuverte = 1;
  } else if (page === 2) {
    page2.classList.add('active');
    pageOuverte = 2;
  }
  
  // Active le flou sur le fond
  document.body.style.webkitBackdropFilter = "blur(20px)";
  document.body.style.backdropFilter = "blur(20px)";
  const uiElement = document.getElementById('UI');

    uiElement.style.display = 'none'; // Masquer l'élément

  
 
  // Enregistre la page ouverte
  localStorage.setItem('inventoryPage', pageOuverte);

  let items = document.getElementsByClassName("inventory-item")
  for (let i = 0; i < inventaire.length; i++) {
      items[i].style.backgroundImage='url('+inventaire[i]+')'
      
  }

}

function fermerInventaire() {
  const page1 = document.getElementById('inventoryPage1');
  const page2 = document.getElementById('inventoryPage2');
  
  if (page1) page1.classList.remove('active');
  if (page2) page2.classList.remove('active');
  
  // Désactive le flou
  document.body.style.webkitBackdropFilter = "blur(0px)";
  document.body.style.backdropFilter = "blur(0px)";
  const uiElement = document.getElementById('UI');
  
    uiElement.style.display = 'block'; // Masquer l'élément
  
}

// Gestion de la touche "E" pour ouvrir/fermer l'inventaire
document.addEventListener('keydown', function (event) {
  if ((event.key === 'e' || event.key === 'E') && !keyPressed) {
    keyPressed = true;
    
    if (inventaireOuvert) {
      fermerInventaire();
      inventaireOuvert = false;
    } else {
      console.log(pageOuverte)
      ouvrirInventaire(pageOuverte);
      inventaireOuvert = true;
    }
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'e' || event.key === 'E') {
    keyPressed = false;
  }
});
