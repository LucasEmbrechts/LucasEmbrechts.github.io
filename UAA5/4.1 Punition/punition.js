let tableau;

window.onload = () => {
    tableau = document.getElementById("tableau");
}

function copier(phrase,n){
    effacerTableau();
    for (let index = 0; index < n; index++) {
        const p = document.createElement("p");
        p.innerText = phrase;
        tableau.appendChild(p);
    }
}

function effacerTableau(){
    tableau.innerText = "";
}