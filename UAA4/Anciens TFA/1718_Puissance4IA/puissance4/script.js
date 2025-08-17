
var tour = document.getElementById('tour');
var fleche = document.getElementById('fleche');
var faux = document.getElementById('faux')
var jeux = document.getElementById('containerjeux');
var jeuxs = document.getElementById('containerjeuxs');
var solo = document.getElementById('solo');
var multi = document.getElementById('multi');
var jouer = document.getElementById('jouer');

function jeu(a, b) {

	if (a == b && a != "") {
		alert('attention ne pas mettre le même nom');
	}
	else {
		jouer.style.display = "none";
		solo.style.display = "block";
		multi.style.display = "block";
	}
	fleche.style.display = "block";
	faux.style.display = "none";
	gagne.style.display = "none";
	égalité.style.display = "none";
	case0.style.backgroundImage = "";
	case1.style.backgroundImage = "";
	case2.style.backgroundImage = "";
	case3.style.backgroundImage = "";
	case4.style.backgroundImage = "";
	case5.style.backgroundImage = "";
	case6.style.backgroundImage = "";
	case8.style.backgroundImage = "";
	case9.style.backgroundImage = "";
	case10.style.backgroundImage = "";
	case11.style.backgroundImage = "";
	case12.style.backgroundImage = "";
	case13.style.backgroundImage = "";
	case14.style.backgroundImage = "";
	case16.style.backgroundImage = "";
	case17.style.backgroundImage = "";
	case18.style.backgroundImage = "";
	case19.style.backgroundImage = "";
	case20.style.backgroundImage = "";
	case21.style.backgroundImage = "";
	case22.style.backgroundImage = "";
	case24.style.backgroundImage = "";
	case25.style.backgroundImage = "";
	case26.style.backgroundImage = "";
	case27.style.backgroundImage = "";
	case28.style.backgroundImage = "";
	case29.style.backgroundImage = "";
	case30.style.backgroundImage = "";
	case32.style.backgroundImage = "";
	case33.style.backgroundImage = "";
	case34.style.backgroundImage = "";
	case35.style.backgroundImage = "";
	case36.style.backgroundImage = "";
	case37.style.backgroundImage = "";
	case38.style.backgroundImage = "";
	case40.style.backgroundImage = "";
	case41.style.backgroundImage = "";
	case42.style.backgroundImage = "";
	case43.style.backgroundImage = "";
	case44.style.backgroundImage = "";
	case45.style.backgroundImage = "";
	case46.style.backgroundImage = "";
	boite0.style.backgroundImage = "";
	boite1.style.backgroundImage = "";
	boite2.style.backgroundImage = "";
	boite3.style.backgroundImage = "";
	boite4.style.backgroundImage = "";
	boite5.style.backgroundImage = "";
	boite6.style.backgroundImage = "";
	boite8.style.backgroundImage = "";
	boite9.style.backgroundImage = "";
	boite10.style.backgroundImage = "";
	boite11.style.backgroundImage = "";
	boite12.style.backgroundImage = "";
	boite13.style.backgroundImage = "";
	boite14.style.backgroundImage = "";
	boite16.style.backgroundImage = "";
	boite17.style.backgroundImage = "";
	boite18.style.backgroundImage = "";
	boite19.style.backgroundImage = "";
	boite20.style.backgroundImage = "";
	boite21.style.backgroundImage = "";
	boite22.style.backgroundImage = "";
	boite24.style.backgroundImage = "";
	boite25.style.backgroundImage = "";
	boite26.style.backgroundImage = "";
	boite27.style.backgroundImage = "";
	boite28.style.backgroundImage = "";
	boite29.style.backgroundImage = "";
	boite30.style.backgroundImage = "";
	boite32.style.backgroundImage = "";
	boite33.style.backgroundImage = "";
	boite34.style.backgroundImage = "";
	boite35.style.backgroundImage = "";
	boite36.style.backgroundImage = "";
	boite37.style.backgroundImage = "";
	boite38.style.backgroundImage = "";
	boite40.style.backgroundImage = "";
	boite41.style.backgroundImage = "";
	boite42.style.backgroundImage = "";
	boite43.style.backgroundImage = "";
	boite44.style.backgroundImage = "";
	boite45.style.backgroundImage = "";
	boite46.style.backgroundImage = "";
	fleches.style.display = "block";
	fauxs.style.display = "none";
	gagnes.style.display = "none";
	égalités.style.display = "none";
}

function solos(a, b) {
	var interface = document.getElementById('containerinterface');

	if (a == "") {
		champ1.value = "JOUEUR1";
	}
	interface.style.display = "none";
	jeuxs.style.display = "block";
	tour.innerHTML = "C'EST A " + champ1.value + " DE JOUER";
}

function multis(a, b) {
	var interface = document.getElementById('containerinterface');

	if (a == "") {
		champ1.value = "JOUEUR1";
	}
	if (b == "") {
		champ2.value = "JOUEUR2";
	}
	interface.style.display = "none";
	jeux.style.display = "block";
	tour.innerHTML = "C'EST A " + champ1.value + " DE JOUER";
}

function regle() {
	var interface = document.getElementById('containerinterface');
	var regle = document.getElementById('containerregle');

	interface.style.display = "none";
	regle.style.display = "block";
}

function credit() {
	var interface = document.getElementById('containerinterface');
	var credit = document.getElementById('containercredit');

	interface.style.display = "none";
	credit.style.display = "block";
}

function interface() {
	var interface = document.getElementById('containerinterface');
	var regle = document.getElementById('containerregle');
	var jeux = document.getElementById('containerjeux');
	var credit = document.getElementById('containercredit');

	interface.style.display = "block";
	jouer.style.display = "block";
	solo.style.display = "none";
	multi.style.display = "none";
	regle.style.display = "none";
	jeux.style.display = "none";
	credit.style.display = "none";
	jeuxs.style.display = "none";
}
	
	var case0 = document.getElementById('case0');
	var case8 = document.getElementById('case8');
	var case16 = document.getElementById('case16');
	var case24 = document.getElementById('case24');
	var case32 = document.getElementById('case32');
	var case40 = document.getElementById('case40');
	var case1 = document.getElementById('case1');
	var case9 = document.getElementById('case9');
	var case17 = document.getElementById('case17');
	var case25 = document.getElementById('case25');
	var case33 = document.getElementById('case33');
	var case41 = document.getElementById('case41');
	var case2 = document.getElementById('case2');
	var case10 = document.getElementById('case10');
	var case18 = document.getElementById('case18');
	var case26 = document.getElementById('case26');
	var case34 = document.getElementById('case34');
	var case42 = document.getElementById('case42');
	var case3 = document.getElementById('case3');
	var case11 = document.getElementById('case11');
	var case19 = document.getElementById('case19');
	var case27 = document.getElementById('case27');
	var case35 = document.getElementById('case35');
	var case43 = document.getElementById('case43');
	var case4 = document.getElementById('case4');
	var case12 = document.getElementById('case12');
	var case20 = document.getElementById('case20');
	var case28 = document.getElementById('case28');
	var case36 = document.getElementById('case36');
	var case44 = document.getElementById('case44');
	var case5 = document.getElementById('case5');
	var case13 = document.getElementById('case13');
	var case21 = document.getElementById('case21');
	var case29 = document.getElementById('case29');
	var case37 = document.getElementById('case37');
	var case45 = document.getElementById('case45');
	var case6 = document.getElementById('case6');
	var case14 = document.getElementById('case14');
	var case22 = document.getElementById('case22');
	var case30 = document.getElementById('case30');
	var case38 = document.getElementById('case38');
	var case46 = document.getElementById('case46');
	var gagne = document.getElementById('gagne');
	var égalité = document.getElementById('égalité');
	
function gagnev() {
	var a = document.getElementById('champ1').value;
	var b = document.getElementById('champ2').value;

	if (case0.style.backgroundImage == "url(\"image/rondbleu.png\")" && case1.style.backgroundImage == "url(\"image/rondbleu.png\")" && case2.style.backgroundImage == "url(\"image/rondbleu.png\")" && case3.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondbleug.png)"; case1.style.backgroundImage = "url(image/rondbleug.png)"; case2.style.backgroundImage = "url(image/rondbleug.png)"; case3.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case0.style.backgroundImage == "url(\"image/rondvert.png\")" && case1.style.backgroundImage == "url(\"image/rondvert.png\")" && case2.style.backgroundImage == "url(\"image/rondvert.png\")" && case3.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondvertg.png)"; case1.style.backgroundImage = "url(image/rondvertg.png)"; case2.style.backgroundImage = "url(image/rondvertg.png)"; case3.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondbleu.png\")" && case2.style.backgroundImage == "url(\"image/rondbleu.png\")" && case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case4.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondbleug.png)"; case2.style.backgroundImage = "url(image/rondbleug.png)"; case3.style.backgroundImage = "url(image/rondbleug.png)"; case4.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondvert.png\")" && case2.style.backgroundImage == "url(\"image/rondvert.png\")" && case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case4.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondvertg.png)"; case2.style.backgroundImage = "url(image/rondvertg.png)"; case3.style.backgroundImage = "url(image/rondvertg.png)"; case4.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondbleu.png\")" && case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case4.style.backgroundImage == "url(\"image/rondbleu.png\")" && case5.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondbleug.png)"; case3.style.backgroundImage = "url(image/rondbleug.png)"; case4.style.backgroundImage = "url(image/rondbleug.png)"; case5.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondvert.png\")" && case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case4.style.backgroundImage == "url(\"image/rondvert.png\")" && case5.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondvertg.png)"; case3.style.backgroundImage = "url(image/rondvertg.png)"; case4.style.backgroundImage = "url(image/rondvertg.png)"; case5.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case4.style.backgroundImage == "url(\"image/rondbleu.png\")" && case5.style.backgroundImage == "url(\"image/rondbleu.png\")" && case6.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondbleug.png)"; case4.style.backgroundImage = "url(image/rondbleug.png)"; case5.style.backgroundImage = "url(image/rondbleug.png)"; case6.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case4.style.backgroundImage == "url(\"image/rondvert.png\")" && case5.style.backgroundImage == "url(\"image/rondvert.png\")" && case6.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondvertg.png)"; case4.style.backgroundImage = "url(image/rondvertg.png)"; case5.style.backgroundImage = "url(image/rondvertg.png)"; case6.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case24.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondbleug.png)"; case10.style.backgroundImage = "url(image/rondbleug.png)"; case17.style.backgroundImage = "url(image/rondbleug.png)"; case24.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case24.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondvertg.png)"; case10.style.backgroundImage = "url(image/rondvertg.png)"; case17.style.backgroundImage = "url(image/rondvertg.png)"; case24.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case30.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)"; case30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case30.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)"; case30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondbleu.png\")" && case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondbleug.png)"; case9.style.backgroundImage = "url(image/rondbleug.png)"; case10.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondvert.png\")" && case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondvertg.png)"; case9.style.backgroundImage = "url(image/rondvertg.png)"; case10.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondbleug.png)"; case10.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondvertg.png)"; case10.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case13.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)"; case13.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case13.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)"; case13.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case13.style.backgroundImage == "url(\"image/rondbleu.png\")" && case14.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)"; case13.style.backgroundImage = "url(image/rondbleug.png)"; case14.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case13.style.backgroundImage == "url(\"image/rondvert.png\")" && case14.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)"; case13.style.backgroundImage = "url(image/rondvertg.png)"; case14.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case24.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case24.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case24.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case24.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" && case38.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)"; case38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" && case38.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)"; case38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case4.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case4.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case4.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case4.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case32.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)"; case32.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case32.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)"; case32.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondbleu.png\")" && case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondbleug.png)"; case17.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondvert.png\")" && case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondvertg.png)"; case17.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";	
		case18.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case18.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case22.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)"; case22.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case22.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)"; case22.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondbleu.png\")" && case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondbleug.png)"; case10.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondvert.png\")" && case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondvertg.png)"; case10.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" && case46.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)"; case46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" && case46.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)"; case46.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case33.style.backgroundImage == "url(\"image/rondbleu.png\")" && case40.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case33.style.backgroundImage = "url(image/rondbleug.png)"; case40.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case33.style.backgroundImage == "url(\"image/rondvert.png\")" && case40.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case33.style.backgroundImage = "url(image/rondvertg.png)"; case40.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case33.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case12.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case33.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case33.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case12.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case33.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case5.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case5.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case5.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case5.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case24.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case24.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case24.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case24.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case25.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case25.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case26.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case26.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" && case30.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case27.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)"; case30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" && case30.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case27.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)"; case30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case0.style.backgroundImage == "url(\"image/rondbleu.png\")" && case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondbleug.png)"; case9.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case0.style.backgroundImage == "url(\"image/rondvert.png\")" && case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondvertg.png)"; case9.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" && case45.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case18.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)"; case45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" && case45.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case18.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)"; case45.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case6.style.backgroundImage == "url(\"image/rondbleu.png\")" && case13.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case6.style.backgroundImage = "url(image/rondbleug.png)"; case13.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case6.style.backgroundImage == "url(\"image/rondvert.png\")" && case13.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case6.style.backgroundImage = "url(image/rondvertg.png)"; case13.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case13.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case13.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case13.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case13.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case41.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case20.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)"; case41.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case41.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case20.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)"; case41.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case32.style.backgroundImage == "url(\"image/rondbleu.png\")" && case33.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case32.style.backgroundImage = "url(image/rondbleug.png)"; case33.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case32.style.backgroundImage == "url(\"image/rondvert.png\")" && case33.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";	
		case32.style.backgroundImage = "url(image/rondvertg.png)"; case33.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case33.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case33.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case33.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case33.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case34.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case34.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" && case38.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case35.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)"; case38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" && case38.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case35.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)"; case38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondbleu.png\")" && case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondbleug.png)"; case17.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondvert.png\")" && case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondvertg.png)"; case17.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case44.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)"; case44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case44.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)"; case44.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case14.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case14.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case14.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case14.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case42.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case21.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)"; case42.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case42.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case21.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)"; case42.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case40.style.backgroundImage == "url(\"image/rondbleu.png\")" && case41.style.backgroundImage == "url(\"image/rondbleu.png\")" && case42.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case40.style.backgroundImage = "url(image/rondbleug.png)"; case41.style.backgroundImage = "url(image/rondbleug.png)"; case42.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case40.style.backgroundImage == "url(\"image/rondvert.png\")" && case41.style.backgroundImage == "url(\"image/rondvert.png\")" && case42.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case40.style.backgroundImage = "url(image/rondvertg.png)"; case41.style.backgroundImage = "url(image/rondvertg.png)"; case42.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case41.style.backgroundImage == "url(\"image/rondbleu.png\")" && case42.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" && case44.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case41.style.backgroundImage = "url(image/rondbleug.png)"; case42.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)"; case44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case41.style.backgroundImage == "url(\"image/rondvert.png\")" && case42.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" && case44.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case41.style.backgroundImage = "url(image/rondvertg.png)"; case42.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)"; case44.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case42.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" && case44.style.backgroundImage == "url(\"image/rondbleu.png\")" && case45.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case42.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)"; case44.style.backgroundImage = "url(image/rondbleug.png)"; case45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case42.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" && case44.style.backgroundImage == "url(\"image/rondvert.png\")" && case45.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case42.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)"; case44.style.backgroundImage = "url(image/rondvertg.png)"; case45.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case43.style.backgroundImage == "url(\"image/rondbleu.png\")" && case44.style.backgroundImage == "url(\"image/rondbleu.png\")" && case45.style.backgroundImage == "url(\"image/rondbleu.png\")" && case46.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case43.style.backgroundImage = "url(image/rondbleug.png)"; case44.style.backgroundImage = "url(image/rondbleug.png)"; case45.style.backgroundImage = "url(image/rondbleug.png)"; case46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case43.style.backgroundImage == "url(\"image/rondvert.png\")" && case44.style.backgroundImage == "url(\"image/rondvert.png\")" && case45.style.backgroundImage == "url(\"image/rondvert.png\")" && case46.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case43.style.backgroundImage = "url(image/rondvertg.png)"; case44.style.backgroundImage = "url(image/rondvertg.png)"; case45.style.backgroundImage = "url(image/rondvertg.png)"; case46.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case22.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case22.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case22.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case22.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondbleu.png\")" && case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondbleug.png)"; case11.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case3.style.backgroundImage == "url(\"image/rondvert.png\")" && case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case3.style.backgroundImage = "url(image/rondvertg.png)"; case11.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondbleu.png\")" && case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondbleug.png)"; case19.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case11.style.backgroundImage == "url(\"image/rondvert.png\")" && case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case11.style.backgroundImage = "url(image/rondvertg.png)"; case19.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondbleu.png\")" && case27.style.backgroundImage == "url(\"image/rondbleu.png\")" && case35.style.backgroundImage == "url(\"image/rondbleu.png\")" && case43.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondbleug.png)"; case27.style.backgroundImage = "url(image/rondbleug.png)"; case35.style.backgroundImage = "url(image/rondbleug.png)"; case43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case19.style.backgroundImage == "url(\"image/rondvert.png\")" && case27.style.backgroundImage == "url(\"image/rondvert.png\")" && case35.style.backgroundImage == "url(\"image/rondvert.png\")" && case43.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case19.style.backgroundImage = "url(image/rondvertg.png)"; case27.style.backgroundImage = "url(image/rondvertg.png)"; case35.style.backgroundImage = "url(image/rondvertg.png)"; case43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case0.style.backgroundImage == "url(\"image/rondbleu.png\")" && case8.style.backgroundImage == "url(\"image/rondbleu.png\")" && case16.style.backgroundImage == "url(\"image/rondbleu.png\")" && case24.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondbleug.png)"; case8.style.backgroundImage = "url(image/rondbleug.png)"; case16.style.backgroundImage = "url(image/rondbleug.png)"; case24.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case0.style.backgroundImage == "url(\"image/rondvert.png\")" && case8.style.backgroundImage == "url(\"image/rondvert.png\")" && case16.style.backgroundImage == "url(\"image/rondvert.png\")" && case24.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case0.style.backgroundImage = "url(image/rondvertg.png)"; case8.style.backgroundImage = "url(image/rondvertg.png)"; case16.style.backgroundImage = "url(image/rondvertg.png)"; case24.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondbleu.png\")" && case16.style.backgroundImage == "url(\"image/rondbleu.png\")" && case24.style.backgroundImage == "url(\"image/rondbleu.png\")" && case32.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondbleug.png)"; case16.style.backgroundImage = "url(image/rondbleug.png)"; case24.style.backgroundImage = "url(image/rondbleug.png)"; case32.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case8.style.backgroundImage == "url(\"image/rondvert.png\")" && case16.style.backgroundImage == "url(\"image/rondvert.png\")" && case24.style.backgroundImage == "url(\"image/rondvert.png\")" && case32.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case8.style.backgroundImage = "url(image/rondvertg.png)"; case16.style.backgroundImage = "url(image/rondvertg.png)"; case24.style.backgroundImage = "url(image/rondvertg.png)"; case32.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondbleu.png\")" && case24.style.backgroundImage == "url(\"image/rondbleu.png\")" && case32.style.backgroundImage == "url(\"image/rondbleu.png\")" && case40.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondbleug.png)"; case24.style.backgroundImage = "url(image/rondbleug.png)"; case32.style.backgroundImage = "url(image/rondbleug.png)"; case40.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case16.style.backgroundImage == "url(\"image/rondvert.png\")" && case24.style.backgroundImage == "url(\"image/rondvert.png\")" && case32.style.backgroundImage == "url(\"image/rondvert.png\")" && case40.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case16.style.backgroundImage = "url(image/rondvertg.png)"; case24.style.backgroundImage = "url(image/rondvertg.png)"; case32.style.backgroundImage = "url(image/rondvertg.png)"; case40.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondbleu.png\")" && case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondbleug.png)"; case9.style.backgroundImage = "url(image/rondbleug.png)"; case17.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case1.style.backgroundImage == "url(\"image/rondvert.png\")" && case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case1.style.backgroundImage = "url(image/rondvertg.png)"; case9.style.backgroundImage = "url(image/rondvertg.png)"; case17.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondbleu.png\")" && case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case33.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondbleug.png)"; case17.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)"; case33.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case9.style.backgroundImage == "url(\"image/rondvert.png\")" && case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case33.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case9.style.backgroundImage = "url(image/rondvertg.png)"; case17.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)"; case33.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondbleu.png\")" && case25.style.backgroundImage == "url(\"image/rondbleu.png\")" && case33.style.backgroundImage == "url(\"image/rondbleu.png\")" && case41.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondbleug.png)"; case25.style.backgroundImage = "url(image/rondbleug.png)"; case33.style.backgroundImage = "url(image/rondbleug.png)"; case41.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case17.style.backgroundImage == "url(\"image/rondvert.png\")" && case25.style.backgroundImage == "url(\"image/rondvert.png\")" && case33.style.backgroundImage == "url(\"image/rondvert.png\")" && case41.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case17.style.backgroundImage = "url(image/rondvertg.png)"; case25.style.backgroundImage = "url(image/rondvertg.png)"; case33.style.backgroundImage = "url(image/rondvertg.png)"; case41.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondbleu.png\")" && case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondbleug.png)"; case10.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case2.style.backgroundImage == "url(\"image/rondvert.png\")" && case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case2.style.backgroundImage = "url(image/rondvertg.png)"; case10.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondbleu.png\")" && case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondbleug.png)"; case18.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case10.style.backgroundImage == "url(\"image/rondvert.png\")" && case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case10.style.backgroundImage = "url(image/rondvertg.png)"; case18.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondbleu.png\")" && case26.style.backgroundImage == "url(\"image/rondbleu.png\")" && case34.style.backgroundImage == "url(\"image/rondbleu.png\")" && case42.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case18.style.backgroundImage = "url(image/rondbleug.png)"; case26.style.backgroundImage = "url(image/rondbleug.png)"; case34.style.backgroundImage = "url(image/rondbleug.png)"; case42.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case18.style.backgroundImage == "url(\"image/rondvert.png\")" && case26.style.backgroundImage == "url(\"image/rondvert.png\")" && case34.style.backgroundImage == "url(\"image/rondvert.png\")" && case42.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case18.style.backgroundImage = "url(image/rondvertg.png)"; case26.style.backgroundImage = "url(image/rondvertg.png)"; case34.style.backgroundImage = "url(image/rondvertg.png)"; case42.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case4.style.backgroundImage == "url(\"image/rondbleu.png\")" && case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case4.style.backgroundImage = "url(image/rondbleug.png)"; case12.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case4.style.backgroundImage == "url(\"image/rondvert.png\")" && case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case4.style.backgroundImage = "url(image/rondvertg.png)"; case12.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case12.style.backgroundImage == "url(\"image/rondbleu.png\")" && case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case12.style.backgroundImage = "url(image/rondbleug.png)"; case20.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case12.style.backgroundImage == "url(\"image/rondvert.png\")" && case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case12.style.backgroundImage = "url(image/rondvertg.png)"; case20.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case20.style.backgroundImage == "url(\"image/rondbleu.png\")" && case28.style.backgroundImage == "url(\"image/rondbleu.png\")" && case36.style.backgroundImage == "url(\"image/rondbleu.png\")" && case44.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case20.style.backgroundImage = "url(image/rondbleug.png)"; case28.style.backgroundImage = "url(image/rondbleug.png)"; case36.style.backgroundImage = "url(image/rondbleug.png)"; case44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case20.style.backgroundImage == "url(\"image/rondvert.png\")" && case28.style.backgroundImage == "url(\"image/rondvert.png\")" && case36.style.backgroundImage == "url(\"image/rondvert.png\")" && case44.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case20.style.backgroundImage = "url(image/rondvertg.png)"; case28.style.backgroundImage = "url(image/rondvertg.png)"; case36.style.backgroundImage = "url(image/rondvertg.png)"; case44.style.backgroundImage = "url(image/rondvertg.png)";
	}
		else if (case5.style.backgroundImage == "url(\"image/rondbleu.png\")" && case13.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case5.style.backgroundImage = "url(image/rondbleug.png)"; case13.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case5.style.backgroundImage == "url(\"image/rondvert.png\")" && case13.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case5.style.backgroundImage = "url(image/rondvertg.png)"; case13.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case13.style.backgroundImage == "url(\"image/rondbleu.png\")" && case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case13.style.backgroundImage = "url(image/rondbleug.png)"; case21.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case13.style.backgroundImage == "url(\"image/rondvert.png\")" && case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case13.style.backgroundImage = "url(image/rondvertg.png)"; case21.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case21.style.backgroundImage == "url(\"image/rondbleu.png\")" && case29.style.backgroundImage == "url(\"image/rondbleu.png\")" && case37.style.backgroundImage == "url(\"image/rondbleu.png\")" && case45.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case21.style.backgroundImage = "url(image/rondbleug.png)"; case29.style.backgroundImage = "url(image/rondbleug.png)"; case37.style.backgroundImage = "url(image/rondbleug.png)"; case45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case21.style.backgroundImage == "url(\"image/rondvert.png\")" && case29.style.backgroundImage == "url(\"image/rondvert.png\")" && case37.style.backgroundImage == "url(\"image/rondvert.png\")" && case45.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case21.style.backgroundImage = "url(image/rondvertg.png)"; case29.style.backgroundImage = "url(image/rondvertg.png)"; case37.style.backgroundImage = "url(image/rondvertg.png)"; case45.style.backgroundImage = "url(image/rondvertg.png)";
	}
		else if (case6.style.backgroundImage == "url(\"image/rondbleu.png\")" && case14.style.backgroundImage == "url(\"image/rondbleu.png\")" && case22.style.backgroundImage == "url(\"image/rondbleu.png\")" && case30.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case6.style.backgroundImage = "url(image/rondbleug.png)"; case14.style.backgroundImage = "url(image/rondbleug.png)"; case22.style.backgroundImage = "url(image/rondbleug.png)"; case30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case6.style.backgroundImage == "url(\"image/rondvert.png\")" && case14.style.backgroundImage == "url(\"image/rondvert.png\")" && case22.style.backgroundImage == "url(\"image/rondvert.png\")" && case30.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case6.style.backgroundImage = "url(image/rondvertg.png)"; case14.style.backgroundImage = "url(image/rondvertg.png)"; case22.style.backgroundImage = "url(image/rondvertg.png)"; case30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case14.style.backgroundImage == "url(\"image/rondbleu.png\")" && case22.style.backgroundImage == "url(\"image/rondbleu.png\")" && case30.style.backgroundImage == "url(\"image/rondbleu.png\")" && case38.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case14.style.backgroundImage = "url(image/rondbleug.png)"; case22.style.backgroundImage = "url(image/rondbleug.png)"; case30.style.backgroundImage = "url(image/rondbleug.png)"; case38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case14.style.backgroundImage == "url(\"image/rondvert.png\")" && case22.style.backgroundImage == "url(\"image/rondvert.png\")" && case30.style.backgroundImage == "url(\"image/rondvert.png\")" && case38.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case14.style.backgroundImage = "url(image/rondvertg.png)"; case22.style.backgroundImage = "url(image/rondvertg.png)"; case30.style.backgroundImage = "url(image/rondvertg.png)"; case38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case22.style.backgroundImage == "url(\"image/rondbleu.png\")" && case30.style.backgroundImage == "url(\"image/rondbleu.png\")" && case38.style.backgroundImage == "url(\"image/rondbleu.png\")" && case46.style.backgroundImage == "url(\"image/rondbleu.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = a + " A GAGNE";
		case22.style.backgroundImage = "url(image/rondbleug.png)"; case30.style.backgroundImage = "url(image/rondbleug.png)"; case38.style.backgroundImage = "url(image/rondbleug.png)"; case46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (case22.style.backgroundImage == "url(\"image/rondvert.png\")" && case30.style.backgroundImage == "url(\"image/rondvert.png\")" && case38.style.backgroundImage == "url(\"image/rondvert.png\")" && case46.style.backgroundImage == "url(\"image/rondvert.png\")" ){
		gagne.style.display = "block"; gagne.innerHTML = b + " A GAGNE";
		case22.style.backgroundImage = "url(image/rondvertg.png)"; case30.style.backgroundImage = "url(image/rondvertg.png)"; case38.style.backgroundImage = "url(image/rondvertg.png)"; case46.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (case0.style.backgroundImage != "" && case1.style.backgroundImage != "" && case2.style.backgroundImage != "" && case3.style.backgroundImage != "" && case4.style.backgroundImage != "" && case5.style.backgroundImage != "" && case6.style.backgroundImage != "" && case8.style.backgroundImage != "" && case9.style.backgroundImage != "" && case10.style.backgroundImage != "" && case11.style.backgroundImage != "" && case12.style.backgroundImage != "" && case13.style.backgroundImage != "" && case14.style.backgroundImage != "" &&  case16.style.backgroundImage != "" && case17.style.backgroundImage != "" && case18.style.backgroundImage != "" && case19.style.backgroundImage != "" && case20.style.backgroundImage != "" && case21.style.backgroundImage != "" && case22.style.backgroundImage != "" && case24.style.backgroundImage != "" && case25.style.backgroundImage != "" && case26.style.backgroundImage != "" && case27.style.backgroundImage != "" && case28.style.backgroundImage != "" && case29.style.backgroundImage != "" && case30.style.backgroundImage != "" && case32.style.backgroundImage != "" && case33.style.backgroundImage != "" && case34.style.backgroundImage != "" && case35.style.backgroundImage != "" && case36.style.backgroundImage != "" && case37.style.backgroundImage != "" && case38.style.backgroundImage != "" && case40.style.backgroundImage != "" && case41.style.backgroundImage != "" && case42.style.backgroundImage != "" && case43.style.backgroundImage != "" && case44.style.backgroundImage != "" && case45.style.backgroundImage != "" && case46.style.backgroundImage != "") {
		 égalité.style.display = "block"; égalité.innerHTML = "EGALITE";
	}

	if (gagne.style.display == "block") {
 		fleche.style.display = "none";
 		faux.style.display = "block";
 		gagne.innerHTML = gagne.innerHTML + '<div id="rejouer" onclick="rejouer()">REJOUER</div>' + '<div id="retour2" onclick="interface()">MENU PRINCIPAL</div>';
	}
	else if (égalité.style.display == "block") {
		fleche.style.display = "none";
		faux.style.display = "block";
		égalité.innerHTML = égalité.innerHTML + '<div id="rejouerouge" onclick="rejouer()">REJOUER</div>' + '<div id="retour2rouge" onclick="interface()">MENU PRINCIPAL</div>';
	}
 	else {
 		fleche.style.display = "block";
 		faux.style.display = "none";
 	}
}


function jeu1(a, b) {

	// Partie pour mettre les pions//
	if (case40.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case40.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case40.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case32.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case32.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case32.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case24.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case24.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case24.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case16.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case16.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case16.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case8.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case8.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case8.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case0.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case0.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case0.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();
	
 	// changer tour //
 	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
 	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu2(a, b) {


	// Partie pour mettre les pions//
	if (case41.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case41.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case41.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case33.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case33.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case33.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case25.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case25.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case25.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case17.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case17.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case17.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case9.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case9.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case9.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case1.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case1.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case1.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();
	// changer tour //

	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu3(a, b) {
	

	// Partie pour mettre les pions//
	if (case42.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case42.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case42.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case34.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case34.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case34.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case26.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case26.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case26.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case18.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case18.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case18.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case10.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case10.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case10.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case2.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case2.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case2.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();

	// changer tour//
	
	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu4(a, b) {
	
	// Partie pour mettre les pions//
	if (case43.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case43.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case43.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case35.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case35.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case35.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case27.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case27.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case27.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case19.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case19.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case19.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case11.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case11.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case11.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case3.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case3.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case3.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();

	// changer tour //
	
	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu5(a, b) {
	
	

	// Partie pour mettre les pions//
	if (case44.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case44.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case44.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case36.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case36.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case36.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case28.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case28.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case28.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case20.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case20.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case20.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case12.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case12.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case12.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case4.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case4.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case4.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();

	// changer tour //
	
	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu6(a, b) {

	

	// Partie pour mettre les pions//
	if (case45.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case45.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case45.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case37.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case37.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case37.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case29.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case29.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case29.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case21.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case21.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case21.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case13.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case13.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case13.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case5.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case5.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case5.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();

	// changer tour //
	
	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function jeu7(a, b) {
	
	

	// Partie pour mettre les pions//
	if (case46.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case46.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case46.style.backgroundImage = "url(image/rondvert.png)";
		}
	} 
	else if (case38.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case38.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case38.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case30.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case30.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case30.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case22.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case22.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case22.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case14.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case14.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case14.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else if (case6.style.backgroundImage == "") {
		if (tour.innerHTML == "C'EST A " + a + " DE JOUER") {
			case6.style.backgroundImage = "url(image/rondbleu.png)";
		} 
		else  {
			case6.style.backgroundImage = "url(image/rondvert.png)";
		} 
	}
	else {
		alert('cette colonne est rempli');
		if (tour.innerHTML == "C'EST A " + b + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  a + " DE JOUER";
		} 
	 	else {
		tour.innerHTML = "C'EST A " + b + " DE JOUER";
		}
	}

	//gagné ou égalité//
	gagnev();

	// changer tour //
	
	if (tour.innerHTML == "C'EST A " + a + " DE JOUER"){
		tour.innerHTML = "C'EST A " +  b + " DE JOUER";
	} 
	else {
		tour.innerHTML = "C'EST A " + a + " DE JOUER";
	}
}

function rejouer() {
	case0.style.backgroundImage = "";
	case1.style.backgroundImage = "";
	case2.style.backgroundImage = "";
	case3.style.backgroundImage = "";
	case4.style.backgroundImage = "";
	case5.style.backgroundImage = "";
	case6.style.backgroundImage = "";
	case8.style.backgroundImage = "";
	case9.style.backgroundImage = "";
	case10.style.backgroundImage = "";
	case11.style.backgroundImage = "";
	case12.style.backgroundImage = "";
	case13.style.backgroundImage = "";
	case14.style.backgroundImage = "";
	case16.style.backgroundImage = "";
	case17.style.backgroundImage = "";
	case18.style.backgroundImage = "";
	case19.style.backgroundImage = "";
	case20.style.backgroundImage = "";
	case21.style.backgroundImage = "";
	case22.style.backgroundImage = "";
	case24.style.backgroundImage = "";
	case25.style.backgroundImage = "";
	case26.style.backgroundImage = "";
	case27.style.backgroundImage = "";
	case28.style.backgroundImage = "";
	case29.style.backgroundImage = "";
	case30.style.backgroundImage = "";
	case32.style.backgroundImage = "";
	case33.style.backgroundImage = "";
	case34.style.backgroundImage = "";
	case35.style.backgroundImage = "";
	case36.style.backgroundImage = "";
	case37.style.backgroundImage = "";
	case38.style.backgroundImage = "";
	case40.style.backgroundImage = "";
	case41.style.backgroundImage = "";
	case42.style.backgroundImage = "";
	case43.style.backgroundImage = "";
	case44.style.backgroundImage = "";
	case45.style.backgroundImage = "";
	case46.style.backgroundImage = "";
	gagne.style.display = "none";
	fleche.style.display = "block";
	faux.style.display = "none";
	égalité.style.display = "none";
	gagnes.style.display = "none";
	fauxs.style.display = "none";
	égalités.style.display = "none";
	fleches.style.display = "block";
	boite0.style.backgroundImage = "";
	boite1.style.backgroundImage = "";
	boite2.style.backgroundImage = "";
	boite3.style.backgroundImage = "";
	boite4.style.backgroundImage = "";
	boite5.style.backgroundImage = "";
	boite6.style.backgroundImage = "";
	boite8.style.backgroundImage = "";
	boite9.style.backgroundImage = "";
	boite10.style.backgroundImage = "";
	boite11.style.backgroundImage = "";
	boite12.style.backgroundImage = "";
	boite13.style.backgroundImage = "";
	boite14.style.backgroundImage = "";
	boite16.style.backgroundImage = "";
	boite17.style.backgroundImage = "";
	boite18.style.backgroundImage = "";
	boite19.style.backgroundImage = "";
	boite20.style.backgroundImage = "";
	boite21.style.backgroundImage = "";
	boite22.style.backgroundImage = "";
	boite24.style.backgroundImage = "";
	boite25.style.backgroundImage = "";
	boite26.style.backgroundImage = "";
	boite27.style.backgroundImage = "";
	boite28.style.backgroundImage = "";
	boite29.style.backgroundImage = "";
	boite30.style.backgroundImage = "";
	boite32.style.backgroundImage = "";
	boite33.style.backgroundImage = "";
	boite34.style.backgroundImage = "";
	boite35.style.backgroundImage = "";
	boite36.style.backgroundImage = "";
	boite37.style.backgroundImage = "";
	boite38.style.backgroundImage = "";
	boite40.style.backgroundImage = "";
	boite41.style.backgroundImage = "";
	boite42.style.backgroundImage = "";
	boite43.style.backgroundImage = "";
	boite44.style.backgroundImage = "";
	boite45.style.backgroundImage = "";
	boite46.style.backgroundImage = "";
}
	
	// partie solo//
	var boite0 = document.getElementById('boite0');
	var boite8 = document.getElementById('boite8');
	var boite16 = document.getElementById('boite16');
	var boite24 = document.getElementById('boite24');
	var boite32 = document.getElementById('boite32');
	var boite40 = document.getElementById('boite40');
	var boite1 = document.getElementById('boite1');
	var boite9 = document.getElementById('boite9');
	var boite17 = document.getElementById('boite17');
	var boite25 = document.getElementById('boite25');
	var boite33 = document.getElementById('boite33');
	var boite41 = document.getElementById('boite41');
	var boite2 = document.getElementById('boite2');
	var boite10 = document.getElementById('boite10');
	var boite18 = document.getElementById('boite18');
	var boite26 = document.getElementById('boite26');
	var boite34 = document.getElementById('boite34');
	var boite42 = document.getElementById('boite42');
	var boite3 = document.getElementById('boite3');
	var boite11 = document.getElementById('boite11');
	var boite19 = document.getElementById('boite19');
	var boite27 = document.getElementById('boite27');
	var boite35 = document.getElementById('boite35');
	var boite43 = document.getElementById('boite43');
	var boite4 = document.getElementById('boite4');
	var boite12 = document.getElementById('boite12');
	var boite20 = document.getElementById('boite20');
	var boite28 = document.getElementById('boite28');
	var boite36 = document.getElementById('boite36');
	var boite44 = document.getElementById('boite44');
	var boite5 = document.getElementById('boite5');
	var boite13 = document.getElementById('boite13');
	var boite21 = document.getElementById('boite21');
	var boite29 = document.getElementById('boite29');
	var boite37 = document.getElementById('boite37');
	var boite45 = document.getElementById('boite45');
	var boite6 = document.getElementById('boite6');
	var boite14 = document.getElementById('boite14');
	var boite22 = document.getElementById('boite22');
	var boite30 = document.getElementById('boite30');
	var boite38 = document.getElementById('boite38');
	var boite46 = document.getElementById('boite46');
	var fauxs = document.getElementById('fauxs');
	var gagnes = document.getElementById('gagnes');

function ordinateur() {
	
	// partie deffence//
	if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite46.style.backgroundImage == "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite46.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite40.style.backgroundImage == "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite40.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage != "" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite40.style.backgroundImage == "" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite40.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite46.style.backgroundImage == "" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite46.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}

	// partie attaque//
	else if (boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite40.style.backgroundImage == ""  && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite40.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite46.style.backgroundImage == "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite46.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == ""  && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite40.style.backgroundImage == "" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite40.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite46.style.backgroundImage == "" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite46.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "" && boite8.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite0.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite0.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite8.style.backgroundImage == "" && boite16.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite8.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite8.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite16.style.backgroundImage == "" && boite24.style.backgroundImage != "" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite16.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite24.style.backgroundImage == "" && boite32.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite24.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite32.style.backgroundImage == "" && boite40.style.backgroundImage != "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite32.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite40.style.backgroundImage == "" && boite16.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite40.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite1.style.backgroundImage == "" && boite9.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite1.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite1.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite9.style.backgroundImage == "" && boite17.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite9.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite9.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite17.style.backgroundImage == "" && boite25.style.backgroundImage != "" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite17.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite25.style.backgroundImage == "" && boite33.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite25.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite33.style.backgroundImage == "" && boite41.style.backgroundImage != "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite33.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite41.style.backgroundImage == "" && boite17.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite41.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite2.style.backgroundImage == "" && boite10.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite2.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite2.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite10.style.backgroundImage == "" && boite18.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite10.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite10.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite18.style.backgroundImage == "" && boite26.style.backgroundImage != "" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite18.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite26.style.backgroundImage == "" && boite34.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite26.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite34.style.backgroundImage == "" && boite42.style.backgroundImage != "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite34.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite42.style.backgroundImage == "" && boite18.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite42.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite3.style.backgroundImage == "" && boite11.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite3.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite3.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite11.style.backgroundImage == "" && boite19.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite11.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite11.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite19.style.backgroundImage == "" && boite27.style.backgroundImage != "" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite19.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite27.style.backgroundImage == "" && boite35.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite27.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite35.style.backgroundImage == "" && boite43.style.backgroundImage != "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite35.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite43.style.backgroundImage == "" && boite19.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite43.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite4.style.backgroundImage == "" && boite12.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite4.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite4.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite12.style.backgroundImage == "" && boite20.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite12.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite12.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite20.style.backgroundImage == "" && boite28.style.backgroundImage != "" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite20.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite28.style.backgroundImage == "" && boite36.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite28.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite36.style.backgroundImage == "" && boite44.style.backgroundImage != "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite36.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite44.style.backgroundImage == "" && boite20.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite44.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite5.style.backgroundImage == "" && boite13.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite5.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite5.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite13.style.backgroundImage == "" && boite21.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite13.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite13.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite21.style.backgroundImage == "" && boite29.style.backgroundImage != "" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite21.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite29.style.backgroundImage == "" && boite37.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite29.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite37.style.backgroundImage == "" && boite45.style.backgroundImage != "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite37.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite45.style.backgroundImage == "" && boite21.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite45.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite6.style.backgroundImage == "" && boite14.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite6.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite6.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite14.style.backgroundImage == "" && boite22.style.backgroundImage != "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite14.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite14.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite22.style.backgroundImage == "" && boite30.style.backgroundImage != "" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite22.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite30.style.backgroundImage == "" && boite38.style.backgroundImage != "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite30.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite38.style.backgroundImage == "" && boite46.style.backgroundImage != "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite38.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite46.style.backgroundImage == "" && boite22.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage != "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage != "url(\"image/rondbleu.png\")") {
		boite46.style.backgroundImage = "url(image/rondvert.png)";
	}
	else if (boite0.style.backgroundImage == "") {
		if (boite40.style.backgroundImage == "") {
			boite40.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite32.style.backgroundImage == "") {
			boite32.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite24.style.backgroundImage == "") {
			boite24.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite16.style.backgroundImage == "") {
			boite16.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite8.style.backgroundImage == "") {
			boite8.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite0.style.backgroundImage == "") {
			boite0.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
	else if (boite1.style.backgroundImage == "") {
		if (boite41.style.backgroundImage == "") {
			boite41.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite33.style.backgroundImage == "") {
			boite33.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite25.style.backgroundImage == "") {
			boite25.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite17.style.backgroundImage == "") {
			boite17.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite9.style.backgroundImage == "") {
			boite9.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite1.style.backgroundImage == "") {
			boite1.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
	else if (boite2.style.backgroundImage == "") {
		if (boite42.style.backgroundImage == "") {
			boite42.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite34.style.backgroundImage == "") {
			boite34.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite26.style.backgroundImage == "") {
			boite26.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite18.style.backgroundImage == "") {
			boite18.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite10.style.backgroundImage == "") {
			boite10.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite2.style.backgroundImage == "") {
			boite2.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
	else if (boite3.style.backgroundImage == "") {
		if (boite43.style.backgroundImage == "") {
			boite43.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite35.style.backgroundImage == "") {
			boite35.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite27.style.backgroundImage == "") {
			boite27.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite19.style.backgroundImage == "") {
			boite19.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite11.style.backgroundImage == "") {
			boite11.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite3.style.backgroundImage == "") {
			boite3.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
	else if (boite4.style.backgroundImage == "") {
		if (boite44.style.backgroundImage == "") {
			boite44.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite36.style.backgroundImage == "") {
			boite36.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite28.style.backgroundImage == "") {
			boite28.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite20.style.backgroundImage == "") {
			boite20.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite12.style.backgroundImage == "") {
			boite12.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite4.style.backgroundImage == "") {
			boite4.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
	else if (boite5.style.backgroundImage == "") {
		if (boite45.style.backgroundImage == "") {
			boite45.style.backgroundImage = "url(image/rondbleu.png)";
		}
		else if (boite37.style.backgroundImage == "") {
			boite37.style.backgroundImage = "url(image/rondbleu.png)";
		}
		else if (boite29.style.backgroundImage == "") {
			boite29.style.backgroundImage = "url(image/rondbleu.png)";
		}
		else if (boite21.style.backgroundImage == "") {
			boite21.style.backgroundImage = "url(image/rondbleu.png)";
		}
		else if (boite13.style.backgroundImage == "") {
			boite13.style.backgroundImage = "url(image/rondbleu.png)";
		}
		else if (boite5.style.backgroundImage == "") {
			boite5.style.backgroundImage = "url(image/rondbleu.png)";
		}
	}
	else if (boite6.style.backgroundImage == "") {
		if (boite46.style.backgroundImage == "") {
			boite46.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite38.style.backgroundImage == "") {
			boite38.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite30.style.backgroundImage == "") {
			boite30.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite22.style.backgroundImage == "") {
			boite22.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite14.style.backgroundImage == "") {
			boite14.style.backgroundImage = "url(image/rondvert.png)";
		}
		else if (boite6.style.backgroundImage == "") {
			boite6.style.backgroundImage = "url(image/rondvert.png)";
		}
	}
}

function gagnebleu() {
	var a = document.getElementById('champ1').value;
	var b = document.getElementById('champ2').value;

	if (boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite0.style.backgroundImage = "url(image/rondbleug.png)"; boite1.style.backgroundImage = "url(image/rondbleug.png)"; boite2.style.backgroundImage = "url(image/rondbleug.png)"; boite3.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite1.style.backgroundImage = "url(image/rondbleug.png)"; boite2.style.backgroundImage = "url(image/rondbleug.png)"; boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite4.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite2.style.backgroundImage = "url(image/rondbleug.png)"; boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite4.style.backgroundImage = "url(image/rondbleug.png)"; boite5.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite6.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite4.style.backgroundImage = "url(image/rondbleug.png)"; boite5.style.backgroundImage = "url(image/rondbleug.png)"; boite6.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite0.style.backgroundImage = "url(image/rondbleug.png)"; boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite1.style.backgroundImage = "url(image/rondbleug.png)"; boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite2.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite24.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite4.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite5.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite6.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite6.style.backgroundImage = "url(image/rondbleug.png)"; boite13.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite8.style.backgroundImage = "url(image/rondbleug.png)"; boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite13.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite13.style.backgroundImage = "url(image/rondbleug.png)"; boite14.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite8.style.backgroundImage = "url(image/rondbleug.png)"; boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite32.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)"; boite38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite33.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite13.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite14.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite16.style.backgroundImage = "url(image/rondbleug.png)"; boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite22.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite16.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)"; boite45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite33.style.backgroundImage = "url(image/rondbleug.png)"; boite40.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)"; boite46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite41.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite42.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite22.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite24.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)"; boite30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite32.style.backgroundImage = "url(image/rondbleug.png)"; boite33.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite33.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)"; boite38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite40.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite40.style.backgroundImage = "url(image/rondbleug.png)"; boite41.style.backgroundImage = "url(image/rondbleug.png)"; boite42.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite41.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite41.style.backgroundImage = "url(image/rondbleug.png)"; boite42.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)"; boite44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite42.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite42.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)"; boite44.style.backgroundImage = "url(image/rondbleug.png)"; boite45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite43.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite43.style.backgroundImage = "url(image/rondbleug.png)"; boite44.style.backgroundImage = "url(image/rondbleug.png)"; boite45.style.backgroundImage = "url(image/rondbleug.png)"; boite46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite0.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite0.style.backgroundImage = "url(image/rondbleug.png)"; boite8.style.backgroundImage = "url(image/rondbleug.png)"; boite16.style.backgroundImage = "url(image/rondbleug.png)"; boite24.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite8.style.backgroundImage = "url(image/rondbleug.png)"; boite16.style.backgroundImage = "url(image/rondbleug.png)"; boite24.style.backgroundImage = "url(image/rondbleug.png)"; boite32.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite24.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite32.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite40.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite16.style.backgroundImage = "url(image/rondbleug.png)"; boite24.style.backgroundImage = "url(image/rondbleug.png)"; boite32.style.backgroundImage = "url(image/rondbleug.png)"; boite40.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite1.style.backgroundImage = "url(image/rondbleug.png)"; boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite9.style.backgroundImage = "url(image/rondbleug.png)"; boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite33.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite25.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite33.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite17.style.backgroundImage = "url(image/rondbleug.png)"; boite25.style.backgroundImage = "url(image/rondbleug.png)"; boite33.style.backgroundImage = "url(image/rondbleug.png)"; boite41.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite2.style.backgroundImage = "url(image/rondbleug.png)"; boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite10.style.backgroundImage = "url(image/rondbleug.png)"; boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite26.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite34.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite41.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite18.style.backgroundImage = "url(image/rondbleug.png)"; boite26.style.backgroundImage = "url(image/rondbleug.png)"; boite34.style.backgroundImage = "url(image/rondbleug.png)"; boite41.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite3.style.backgroundImage = "url(image/rondbleug.png)"; boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite11.style.backgroundImage = "url(image/rondbleug.png)"; boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite27.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite35.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite43.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite19.style.backgroundImage = "url(image/rondbleug.png)"; boite27.style.backgroundImage = "url(image/rondbleug.png)"; boite35.style.backgroundImage = "url(image/rondbleug.png)"; boite43.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite4.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite4.style.backgroundImage = "url(image/rondbleug.png)"; boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite12.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boit28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite12.style.backgroundImage = "url(image/rondbleug.png)"; boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite20.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite28.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite36.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite44.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite20.style.backgroundImage = "url(image/rondbleug.png)"; boite28.style.backgroundImage = "url(image/rondbleug.png)"; boite36.style.backgroundImage = "url(image/rondbleug.png)"; boite44.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite5.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite5.style.backgroundImage = "url(image/rondbleug.png)"; boite13.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite13.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite13.style.backgroundImage = "url(image/rondbleug.png)"; boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite21.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite29.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite37.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite45.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite21.style.backgroundImage = "url(image/rondbleug.png)"; boite29.style.backgroundImage = "url(image/rondbleug.png)"; boite37.style.backgroundImage = "url(image/rondbleug.png)"; boite45.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite6.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite6.style.backgroundImage = "url(image/rondbleug.png)"; boite14.style.backgroundImage = "url(image/rondbleug.png)"; boite22.style.backgroundImage = "url(image/rondbleug.png)"; boite30.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite14.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite14.style.backgroundImage = "url(image/rondbleug.png)"; boite22.style.backgroundImage = "url(image/rondbleug.png)"; boite30.style.backgroundImage = "url(image/rondbleug.png)"; boite38.style.backgroundImage = "url(image/rondbleug.png)";
	}
	else if (boite22.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite30.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite38.style.backgroundImage == "url(\"image/rondbleu.png\")" && boite46.style.backgroundImage == "url(\"image/rondbleu.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = a + " A GAGNE";
		boite22.style.backgroundImage = "url(image/rondbleug.png)"; boite30.style.backgroundImage = "url(image/rondbleug.png)"; boite38.style.backgroundImage = "url(image/rondbleug.png)"; boite46.style.backgroundImage = "url(image/rondbleug.png)";
	}
	// egalité//
 	if (boite0.style.backgroundImage != "" && boite1.style.backgroundImage != "" && boite2.style.backgroundImage != "" && boite3.style.backgroundImage != "" && boite4.style.backgroundImage != "" && boite5.style.backgroundImage != "" && boite6.style.backgroundImage != "" &&  boite8.style.backgroundImage != "" &&  boite9.style.backgroundImage != "" && boite10.style.backgroundImage != "" && boite11.style.backgroundImage != "" && boite12.style.backgroundImage != "" && boite13.style.backgroundImage != "" && boite14.style.backgroundImage != "" && boite16.style.backgroundImage != "" && boite17.style.backgroundImage != "" &&  boite18.style.backgroundImage != "" && boite19.style.backgroundImage != "" && boite20.style.backgroundImage != "" && boite21.style.backgroundImage != "" && boite22.style.backgroundImage != "" && boite24.style.backgroundImage != "" && boite25.style.backgroundImage != "" && boite26.style.backgroundImage != "" && boite27.style.backgroundImage != "" && boite28.style.backgroundImage != "" && boite29.style.backgroundImage != "" && boite30.style.backgroundImage != "" && boite32.style.backgroundImage != "" && boite33.style.backgroundImage != "" && boite34.style.backgroundImage != "" && boite35.style.backgroundImage != "" && boite36.style.backgroundImage != "" && boite37.style.backgroundImage != "" && boite38.style.backgroundImage != "" && boite40.style.backgroundImage != "" && boite41.style.backgroundImage != "" && boite42.style.backgroundImage != "" && boite43.style.backgroundImage != "" && boite44.style.backgroundImage != "" && boite46.style.backgroundImage != ""){
		égalités.style.display = "block"; égalités.innerHTML = "EGALITE";
	}
	// afficher rejouer et menu principal//
	if (gagnes.style.display == "block") {
 		fleches.style.display = "none";
 		fauxs.style.display = "block";
 		gagnes.innerHTML = gagnes.innerHTML + '<div id="rejouer" onclick="rejouer()">REJOUER</div>' + '<div id="retour2" onclick="interface()">MENU PRINCIPAL</div>';
	}
	else if (égalités.style.display == "block") {
		fleches.style.display = "none";
		fauxs.style.display = "block";
		égalités.innerHTML = égalités.innerHTML + '<div id="rejouerouge" onclick="rejouer()">REJOUER</div>' + '<div id="retour2rouge" onclick="interface()">MENU PRINCIPAL</div>';
	}
 	else {
 		fleches.style.display = "block";
 		fauxs.style.display = "none";
 	}
}

function gagnevert() {

	if (boite0.style.backgroundImage == "url(\"image/rondvert.png\")" && boite1.style.backgroundImage == "url(\"image/rondvert.png\")" && boite2.style.backgroundImage == "url(\"image/rondvert.png\")" && boite3.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite0.style.backgroundImage = "url(image/rondvertg.png)"; boite1.style.backgroundImage = "url(image/rondvertg.png)"; boite2.style.backgroundImage = "url(image/rondvertg.png)"; boite3.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondvert.png\")" && boite2.style.backgroundImage == "url(\"image/rondvert.png\")" && boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite4.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite1.style.backgroundImage = "url(image/rondvertg.png)"; boite2.style.backgroundImage = "url(image/rondvertg.png)"; boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite4.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondvert.png\")" && boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite4.style.backgroundImage == "url(\"image/rondvert.png\")" && boite5.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite2.style.backgroundImage = "url(image/rondvertg.png)"; boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite4.style.backgroundImage = "url(image/rondvertg.png)"; boite5.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite4.style.backgroundImage == "url(\"image/rondvert.png\")" && boite5.style.backgroundImage == "url(\"image/rondvert.png\")" && boite6.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite4.style.backgroundImage = "url(image/rondvertg.png)"; boite5.style.backgroundImage = "url(image/rondvertg.png)"; boite6.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite0.style.backgroundImage == "url(\"image/rondvert.png\")" && boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite0.style.backgroundImage = "url(image/rondvertg.png)"; boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondvert.png\")" && boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite1.style.backgroundImage = "url(image/rondvertg.png)"; boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite2.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite24.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite24.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite30.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite4.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite4.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite5.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite5.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite6.style.backgroundImage == "url(\"image/rondvert.png\")" && boite13.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite6.style.backgroundImage = "url(image/rondvertg.png)"; boite13.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondvert.png\")" && boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite8.style.backgroundImage = "url(image/rondvertg.png)"; boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite13.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite13.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite13.style.backgroundImage == "url(\"image/rondvert.png\")" && boite14.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite13.style.backgroundImage = "url(image/rondvertg.png)"; boite14.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondvert.png\")" && boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite8.style.backgroundImage = "url(image/rondvertg.png)"; boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite32.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite32.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")" && boite38.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)"; boite38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite33.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite33.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite13.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite13.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite14.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite14.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondvert.png\")" && boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite16.style.backgroundImage = "url(image/rondvertg.png)"; boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite22.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite22.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite16.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite44.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite44.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")" && boite45.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)"; boite45.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite33.style.backgroundImage == "url(\"image/rondvert.png\")" && boite40.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite33.style.backgroundImage = "url(image/rondvertg.png)"; boite40.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")" && boite46.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)"; boite46.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite41.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite41.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite42.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite42.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite22.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite22.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite24.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite24.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")" && boite30.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)"; boite30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite32.style.backgroundImage == "url(\"image/rondvert.png\")" && boite33.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite32.style.backgroundImage = "url(image/rondvertg.png)"; boite33.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite33.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite33.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")" && boite38.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)"; boite38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite40.style.backgroundImage == "url(\"image/rondvert.png\")" && boite41.style.backgroundImage == "url(\"image/rondvert.png\")" && boite42.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite40.style.backgroundImage = "url(image/rondvertg.png)"; boite41.style.backgroundImage = "url(image/rondvertg.png)"; boite42.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite41.style.backgroundImage == "url(\"image/rondvert.png\")" && boite42.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")" && boite44.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite41.style.backgroundImage = "url(image/rondvertg.png)"; boite42.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)"; boite44.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite42.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")" && boite44.style.backgroundImage == "url(\"image/rondvert.png\")" && boite45.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite42.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)"; boite44.style.backgroundImage = "url(image/rondvertg.png)"; boite45.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite43.style.backgroundImage == "url(\"image/rondvert.png\")" && boite44.style.backgroundImage == "url(\"image/rondvert.png\")" && boite45.style.backgroundImage == "url(\"image/rondvert.png\")" && boite46.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite43.style.backgroundImage = "url(image/rondvertg.png)"; boite44.style.backgroundImage = "url(image/rondvertg.png)"; boite45.style.backgroundImage = "url(image/rondvertg.png)"; boite46.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite0.style.backgroundImage == "url(\"image/rondvert.png\")" && boite8.style.backgroundImage == "url(\"image/rondvert.png\")" && boite16.style.backgroundImage == "url(\"image/rondvert.png\")" && boite24.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite0.style.backgroundImage = "url(image/rondvertg.png)"; boite8.style.backgroundImage = "url(image/rondvertg.png)"; boite16.style.backgroundImage = "url(image/rondvertg.png)"; boite24.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite8.style.backgroundImage == "url(\"image/rondvert.png\")" && boite16.style.backgroundImage == "url(\"image/rondvert.png\")" && boite24.style.backgroundImage == "url(\"image/rondvert.png\")" && boite32.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite8.style.backgroundImage = "url(image/rondvertg.png)"; boite16.style.backgroundImage = "url(image/rondvertg.png)"; boite24.style.backgroundImage = "url(image/rondvertg.png)"; boite32.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite16.style.backgroundImage == "url(\"image/rondvert.png\")" && boite24.style.backgroundImage == "url(\"image/rondvert.png\")" && boite32.style.backgroundImage == "url(\"image/rondvert.png\")" && boite40.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite16.style.backgroundImage = "url(image/rondvertg.png)"; boite24.style.backgroundImage = "url(image/rondvertg.png)"; boite32.style.backgroundImage = "url(image/rondvertg.png)"; boite40.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite1.style.backgroundImage == "url(\"image/rondvert.png\")" && boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite1.style.backgroundImage = "url(image/rondvertg.png)"; boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite9.style.backgroundImage == "url(\"image/rondvert.png\")" && boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite33.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite9.style.backgroundImage = "url(image/rondvertg.png)"; boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite33.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite17.style.backgroundImage == "url(\"image/rondvert.png\")" && boite25.style.backgroundImage == "url(\"image/rondvert.png\")" && boite33.style.backgroundImage == "url(\"image/rondvert.png\")" && boite41.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite17.style.backgroundImage = "url(image/rondvertg.png)"; boite25.style.backgroundImage = "url(image/rondvertg.png)"; boite33.style.backgroundImage = "url(image/rondvertg.png)"; boite41.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite2.style.backgroundImage == "url(\"image/rondvert.png\")" && boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite2.style.backgroundImage = "url(image/rondvertg.png)"; boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite10.style.backgroundImage == "url(\"image/rondvert.png\")" && boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite10.style.backgroundImage = "url(image/rondvertg.png)"; boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite18.style.backgroundImage == "url(\"image/rondvert.png\")" && boite26.style.backgroundImage == "url(\"image/rondvert.png\")" && boite34.style.backgroundImage == "url(\"image/rondvert.png\")" && boite42.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite18.style.backgroundImage = "url(image/rondvertg.png)"; boite26.style.backgroundImage = "url(image/rondvertg.png)"; boite34.style.backgroundImage = "url(image/rondvertg.png)"; boite42.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite3.style.backgroundImage == "url(\"image/rondvert.png\")" && boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite3.style.backgroundImage = "url(image/rondvertg.png)"; boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite11.style.backgroundImage == "url(\"image/rondvert.png\")" && boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite11.style.backgroundImage = "url(image/rondvertg.png)"; boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite19.style.backgroundImage == "url(\"image/rondvert.png\")" && boite27.style.backgroundImage == "url(\"image/rondvert.png\")" && boite35.style.backgroundImage == "url(\"image/rondvert.png\")" && boite43.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite19.style.backgroundImage = "url(image/rondvertg.png)"; boite27.style.backgroundImage = "url(image/rondvertg.png)"; boite35.style.backgroundImage = "url(image/rondvertg.png)"; boite43.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite4.style.backgroundImage == "url(\"image/rondvert.png\")" && boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite4.style.backgroundImage = "url(image/rondvertg.png)"; boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite12.style.backgroundImage == "url(\"image/rondvert.png\")" && boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite12.style.backgroundImage = "url(image/rondvertg.png)"; boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite20.style.backgroundImage == "url(\"image/rondvert.png\")" && boite28.style.backgroundImage == "url(\"image/rondvert.png\")" && boite36.style.backgroundImage == "url(\"image/rondvert.png\")" && boite44.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite20.style.backgroundImage = "url(image/rondvertg.png)"; boite28.style.backgroundImage = "url(image/rondvertg.png)"; boite36.style.backgroundImage = "url(image/rondvertg.png)"; boite44.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite5.style.backgroundImage == "url(\"image/rondvert.png\")" && boite13.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite5.style.backgroundImage = "url(image/rondvertg.png)"; boite13.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite13.style.backgroundImage == "url(\"image/rondvert.png\")" && boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite13.style.backgroundImage = "url(image/rondvertg.png)"; boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite21.style.backgroundImage == "url(\"image/rondvert.png\")" && boite29.style.backgroundImage == "url(\"image/rondvert.png\")" && boite37.style.backgroundImage == "url(\"image/rondvert.png\")" && boite45.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite21.style.backgroundImage = "url(image/rondvertg.png)"; boite29.style.backgroundImage = "url(image/rondvertg.png)"; boite37.style.backgroundImage = "url(image/rondvertg.png)"; boite45.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite6.style.backgroundImage == "url(\"image/rondvert.png\")" && boite14.style.backgroundImage == "url(\"image/rondvert.png\")" && boite22.style.backgroundImage == "url(\"image/rondvert.png\")" && boite30.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite6.style.backgroundImage = "url(image/rondvertg.png)"; boite14.style.backgroundImage = "url(image/rondvertg.png)"; boite22.style.backgroundImage = "url(image/rondvertg.png)"; boite30.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite14.style.backgroundImage == "url(\"image/rondvert.png\")" && boite22.style.backgroundImage == "url(\"image/rondvert.png\")" && boite30.style.backgroundImage == "url(\"image/rondvert.png\")" && boite38.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite14.style.backgroundImage = "url(image/rondvertg.png)"; boite22.style.backgroundImage = "url(image/rondvertg.png)"; boite30.style.backgroundImage = "url(image/rondvertg.png)"; boite38.style.backgroundImage = "url(image/rondvertg.png)";
	}
	else if (boite22.style.backgroundImage == "url(\"image/rondvert.png\")" && boite30.style.backgroundImage == "url(\"image/rondvert.png\")" && boite38.style.backgroundImage == "url(\"image/rondvert.png\")" && boite46.style.backgroundImage == "url(\"image/rondvert.png\")") {
		gagnes.style.display = "block"; gagnes.innerHTML = "IA A GAGNE";
		boite22.style.backgroundImage = "url(image/rondvertg.png)"; boite30.style.backgroundImage = "url(image/rondvertg.png)"; boite38.style.backgroundImage = "url(image/rondvertg.png)"; boite46.style.backgroundImage = "url(image/rondvertg.png)";
	}
 	// egalité//
 	if (boite0.style.backgroundImage != "" && boite1.style.backgroundImage != "" && boite2.style.backgroundImage != "" && boite3.style.backgroundImage != "" && boite4.style.backgroundImage != "" && boite5.style.backgroundImage != "" && boite6.style.backgroundImage != "" &&  boite8.style.backgroundImage != "" &&  boite9.style.backgroundImage != "" && boite10.style.backgroundImage != "" && boite11.style.backgroundImage != "" && boite12.style.backgroundImage != "" && boite13.style.backgroundImage != "" && boite14.style.backgroundImage != "" && boite16.style.backgroundImage != "" && boite17.style.backgroundImage != "" &&  boite18.style.backgroundImage != "" && boite19.style.backgroundImage != "" && boite20.style.backgroundImage != "" && boite21.style.backgroundImage != "" && boite22.style.backgroundImage != "" && boite24.style.backgroundImage != "" && boite25.style.backgroundImage != "" && boite26.style.backgroundImage != "" && boite27.style.backgroundImage != "" && boite28.style.backgroundImage != "" && boite29.style.backgroundImage != "" && boite30.style.backgroundImage != "" && boite32.style.backgroundImage != "" && boite33.style.backgroundImage != "" && boite34.style.backgroundImage != "" && boite35.style.backgroundImage != "" && boite36.style.backgroundImage != "" && boite37.style.backgroundImage != "" && boite38.style.backgroundImage != "" && boite40.style.backgroundImage != "" && boite41.style.backgroundImage != "" && boite42.style.backgroundImage != "" && boite43.style.backgroundImage != "" && boite44.style.backgroundImage != "" && boite46.style.backgroundImage != ""){
		égalités.style.display = "block"; égalités.innerHTML = "EGALITE";
	}
	// afficher rejouer et menu principal//
	if (gagnes.style.display == "block") {
 		fleches.style.display = "none";
 		fauxs.style.display = "block";
 		gagnes.innerHTML = gagnes.innerHTML + '<div id="rejouer" onclick="rejouer()">REJOUER</div>' + '<div id="retour2" onclick="interface()">MENU PRINCIPAL</div>';
	}
	else if (égalités.style.display == "block") {
		fleches.style.display = "none";
		fauxs.style.display = "block";
		égalités.innerHTML = égalités.innerHTML + '<div id="rejouerouge" onclick="rejouer()">REJOUER</div>' + '<div id="retour2rouge" onclick="interface()">MENU PRINCIPAL</div>';
	}
 	else {
 		fleches.style.display = "block";
 		fauxs.style.display = "none";
 	}
}

function jeu1s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite40.style.backgroundImage == "") {
		boite40.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite32.style.backgroundImage == "") {
		boite32.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite24.style.backgroundImage == "") {
		boite24.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite16.style.backgroundImage == "") {
		boite16.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite8.style.backgroundImage == "") {
		boite8.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite0.style.backgroundImage == "") {
		boite0.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi//
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}

function jeu2s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite41.style.backgroundImage == "") {
		boite41.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite33.style.backgroundImage == "") {
		boite33.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite25.style.backgroundImage == "") {
		boite25.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite17.style.backgroundImage == "") {
		boite17.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite9.style.backgroundImage == "") {
		boite9.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite1.style.backgroundImage == "") {
		boite1.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi//
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}

}

function jeu3s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite42.style.backgroundImage == "") {
		boite42.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite34.style.backgroundImage == "") {
		boite34.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite26.style.backgroundImage == "") {
		boite26.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite18.style.backgroundImage == "") {
		boite18.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite10.style.backgroundImage == "") {
		boite10.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite2.style.backgroundImage == "") {
		boite2.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi//
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}

function jeu4s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite43.style.backgroundImage == "") {
		boite43.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite35.style.backgroundImage == "") {
		boite35.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite27.style.backgroundImage == "") {
		boite27.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite19.style.backgroundImage == "") {
		boite19.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite11.style.backgroundImage == "") {
		boite11.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite3.style.backgroundImage == "") {
		boite3.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi//
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}

function jeu5s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite44.style.backgroundImage == "") {
		boite44.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite36.style.backgroundImage == "") {
		boite36.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite28.style.backgroundImage == "") {
		boite28.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite20.style.backgroundImage == "") {
		boite20.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite12.style.backgroundImage == "") {
		boite12.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite4.style.backgroundImage == "") {
		boite4.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi //
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}

function jeu6s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite45.style.backgroundImage == "") {
		boite45.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite37.style.backgroundImage == "") {
		boite37.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite29.style.backgroundImage == "") {
		boite29.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite21.style.backgroundImage == "") {
		boite21.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite13.style.backgroundImage == "") {
		boite13.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite5.style.backgroundImage == "") {
		boite5.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi //
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}

function jeu7s(a,b) {
	var j = "";
	// mettre les pions//
	if (boite46.style.backgroundImage == "") {
		boite46.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite38.style.backgroundImage == "") {
		boite38.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite30.style.backgroundImage == "") {
		boite30.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite22.style.backgroundImage == "") {
		boite22.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite14.style.backgroundImage == "") {
		boite14.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else if (boite6.style.backgroundImage == "") {
		boite6.style.backgroundImage = "url(image/rondbleu.png)";
	}
	else {
		alert('cette colonne est rempli');
		j = "non";
	}
	gagnebleu();
	// tour ordi//
	if (gagnes.style.display == "block" || j != "") {}
	else {
		ordinateur();
		gagnevert()
	}
}