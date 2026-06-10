let pieces = parseInt(localStorage.getItem("pieces")) || 0;

const piecesDiv = document.getElementById("pieces");
const shop = document.getElementById("shop");
const notif = document.getElementById("notif");

piecesDiv.innerHTML = "💰 " + pieces + " pièces";

const persos = [
{
    nom:"Mike",
    image:"mike.png",
    prix:0
},
{
    nom:"Max",
    image:"max.png",
    prix:50
},
{
    nom:"Eleven",
    image:"eleven.png",
    prix:100
},
{
    nom:"Dustin",
    image:"dustin.png",
    prix:150
},
{
    nom:"Lucas",
    image:"lucas.png",
    prix:200
},
{
    nom:"Will",
    image:"will.png",
    prix:250
},
{
    nom:"Hopper",
    image:"hopper.png",
    prix:300
},
{
    nom:"Nancy",
    image:"nancy.png",
    prix:350
},
{
    nom:"Steve",
    image:"steve.png",
    prix:0
},
{
    nom:"Vecna",
    image:"vecna.png",
    prix:500
}
];

function notification(texte){

    notif.innerHTML = texte;

    notif.classList.add("show");

    setTimeout(() => {
        notif.classList.remove("show");
    }, 2000);
}

function afficherShop(){

    shop.innerHTML = "";

    persos.forEach(perso => {

        const card = document.createElement("div");
        card.classList.add("card");

        const achete = localStorage.getItem(perso.image) === "achete";
        const equipe = localStorage.getItem("perso") === perso.image;

        if(perso.prix === 0 || achete){

            card.innerHTML = `
            <img src="img/${perso.image}">

            <div class="nom">${perso.nom}</div>

            <div class="prix">${perso.prix === 0 ? "GRATUIT" : "Acheté"}</div>

            ${equipe ? '<div class="equipe"> Équipé</div>' : ''}

            <button class="shopbtn">
            ${equipe ? 'Équipé' : 'Sélectionner'}
            </button>
            `;

            const btn = card.querySelector("button");

            if(equipe){
                btn.disabled = true;
            }

            btn.addEventListener("click", () => {

                localStorage.setItem("perso", perso.image);

                notification(""+ perso.nom + " équipé !");

                afficherShop();
            });

        }else{

            card.innerHTML = `
            <div class="lock">🔒</div>

            <img src="img/${perso.image}">

            <div class="nom">${perso.nom}</div>

            <div class="prix">💰 ${perso.prix}</div>

            <button class="shopbtn">Acheter</button>
            `;

            const btn = card.querySelector("button");

            btn.addEventListener("click", () => {

                if(pieces >= perso.prix){

                    pieces -= perso.prix;

                    localStorage.setItem("pieces", pieces);
                    localStorage.setItem(perso.image, "achete");

                    piecesDiv.innerHTML = "💰 " + pieces + " pièces";

                    notification("🛒 " + perso.nom + " acheté !");

                    afficherShop();

                }else{
                    notification(" Pas assez de pièces !");
                }
            });
        }

        shop.appendChild(card);
    });
}

afficherShop();