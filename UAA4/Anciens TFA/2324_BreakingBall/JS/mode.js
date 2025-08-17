function mode(){
	window.location.href='play.html'


	let image = tab[position];

	if (image=='../SOURCES/fondmodedefaut.jpg') {
		localStorage.setItem('mode', 'defaut');
	}
	else{
		if (image=='../SOURCES/fondmodemer.png') {
	localStorage.setItem('mode', 'hiver');
	}
	else{
	localStorage.setItem('mode', 'mer');
	}
}
}
function retour(){
	window.location.href='index.html'
}

let position = 0
let tab=['SOURCES/fondmodedefaut.jpg','SOURCES/fondmodemer.png','SOURCES/fondmodehiver.png']
function bouton_triangle_droite(){
	if (position!=2) {
		position+=1
	}

	document.getElementById('image').style.backgroundImage = "url("+tab[position]+")" 
}
function bouton_triangle_gauche(){
	if (position!=0) {
		position-=1
	}
	document.getElementById('image').style.backgroundImage = "url("+tab[position]+")" 
}