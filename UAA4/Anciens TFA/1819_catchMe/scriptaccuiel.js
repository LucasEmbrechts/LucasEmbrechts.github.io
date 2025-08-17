function alea() {
	const MIN =1;
	const MAX =3;
	var nb =MIN + (MAX-MIN+1)*Math.random();
	return Math.floor(nb);
};

var nbAleat = alea();

var el = document.getElementById('jeu');
el.href="jeu"+nbAleat+".html";
