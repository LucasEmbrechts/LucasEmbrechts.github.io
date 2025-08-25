const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

changerAnnif();

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  const annifValue = document.getElementById("annif").checked;
  if (birthdayValue === "") {
    alert("Entre ton année de naissance s'il te plait");
  } else {
    let age = getAge(birthdayValue);
    if (!annifValue) age -= 1;
    resultEl.innerText = `Tu as ${age} ans`;
  }
}

function getAge(birthdayValue) {
    let currentDate = new Date();
  return currentDate.getFullYear() - birthdayValue;
}

function changerAnnif() {
  const annifValue = document.getElementById("annif").checked;
  const yesnoEl = document.getElementById("yesno");
  if (annifValue) {
    yesnoEl.innerText = "OUI";    
  } else {
    yesnoEl.innerText = "NON";    
  }
}

btnEl.addEventListener("click", calculateAge);
