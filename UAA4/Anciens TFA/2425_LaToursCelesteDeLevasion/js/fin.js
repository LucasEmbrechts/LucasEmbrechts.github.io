// Enregistrer dans le local storage :
// localStorage.setItem("clé", "valeur")

// Récupérer des données du local storage :
// let valeur = localStorage.getItem("clé")
let lesPseudo = JSON.parse(localStorage.getItem("pseudo"))
if(lesPseudo == null){
    lesPseudo = []
}

let nom = document.getElementById("nom")
let texte = document.getElementById("texte")
function enregistreNom(){
    lesPseudo.push(nom.value)
    localStorage.setItem("pseudo", JSON.stringify(lesPseudo))
}

// document.addEventListener("keydown",
//     (event) => {
//         let nom = event.key;
//         // console.log(event)>
//         if(nom == "p"){
//             localStorage.removeItem("pseudo")
//         }
//     }
// )

function validerEtRediriger() {
  enregistreNom(); // ta fonction d'enregistrement
  window.location.href = '../html/menu.html'; // redirection
}
