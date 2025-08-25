const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");
let nbLancés = 0;

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    nbLancés += 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    const listItem = document.createElement("li");
    listItem.innerHTML = `Lancé ${nbLancés}: <span>${diceFace}</span>`;
    rollHistoryEl.appendChild(listItem);
}


function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
        return "&#9856;";
        case 2:
        return "&#9857;";
        case 3:
        return "&#9858;";
        case 4:
        return "&#9859;";
        case 5:
        return "&#9860;";
        case 6:
        return "&#9861;";
        default:
        return "";
    }
}

function lancer(){
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
}
