//tout à été codé par basil
//petit bout de code de ferre
//2023 - 4TTr - Projet X
function menu(){
	let menu=document.getElementById("img");
	window.location.href="../html/menu.html";
}
//fin de ce petit bout

function toggleHistRules(direction){

	let regle = document.getElementById("bloc");
	let histoire = document.getElementById("blochistoire");
	let fleche = document.getElementById("fleche");

	if(direction=="toHistory"){
		regle.style.display="none";
		histoire.style.display="block";
		fleche.setAttribute('onclick',"toggleHistRules('toRules')");
	} else {
		regle.style.display="block";
		histoire.style.display="none";
		fleche.setAttribute('onclick',"toggleHistRules('toHistory')");
	}
	
}