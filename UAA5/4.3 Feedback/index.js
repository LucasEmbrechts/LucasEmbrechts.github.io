const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating;
let content = document.getElementById("content");
let mecontent = document.getElementById("mecontent");
let neutre = document.getElementById("neutre");

function selection(value) {
  selectedRating = value;
  content.classList.remove("active");
  mecontent.classList.remove("active");
  neutre.classList.remove("active");
    switch (selectedRating) {
    case 1:
      mecontent.classList.add("active");
      break;
    case 2:
      neutre.classList.add("active");
      break;
    case 3:
      content.classList.add("active");
      break;
  };
}

function envoyer(){
  let texte;
  switch (selectedRating) {
    case 1:
      texte = "Mécontent";
      break;
    case 2:
      texte = "Neutre";
      break;
    case 3:
      texte = "Content";
      break;
  }

  let stars = '';
  if (selectedRating > 0) {
    stars = ' ';
    for (let i = 0; i < selectedRating; i++) {
      stars += '⭐';
    }
  }

  containerEl.innerHTML = `
      <strong>Merci !</strong>
      <br>
      <br>
      <strong>Retour : ${texte} ${stars}</strong>
      <p>Nous utiliserons votre retour pour améliorer notre service client.</p>
      `;
};

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
