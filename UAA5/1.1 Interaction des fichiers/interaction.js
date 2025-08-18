function changeCouleur(nomClasse){
    const elem = document.getElementsByClassName(nomClasse);
    elem[1].style.color = genererCouleur();
}

function genererCouleur(){
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}



div.style.color = "#" + (0x1000000+Math.random()*0xffffff).toString(16)