function erase(){
	var el = document.getElementById("histoire");
	el.style.display = "none";
}

function appear(){
	var el = document.getElementById("histoire");
	el.style.display = "block";
}

function green(){
	var el = document.getElementById("ceparagraphe");
	el.style.color = "#32ff00";
}

function changeImage(){
	var el = document.getElementById("imageDeco");
	el.src = "img/img2.jpg";
}

function bold(){
	var el = document.getElementsByTagName("p");
	for (var i = 0; i < el.length; i++) { 
    	el[i].style.fontWeight = "600"; 
    }
}

function ajouterPara(){
	let p = document.createElement("p");
	p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus tortor quis metus semper, at sodales nibh condimentum. In cursus orci eget odio ultricies, vitae ullamcorper arcu lacinia. Praesent ac elit quis quam vestibulum pellentesque et vitae neque. Donec semper dictum neque ut ultricies. Curabitur vitae orci ac enim aliquam commodo ut non nunc. Nunc vestibulum nisi erat, non scelerisque turpis cursus et. Etiam finibus velit at libero lobortis, nec tempor dui sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ullamcorper sapien feugiat, viverra odio eu, aliquet massa. Sed tempus commodo ante. Praesent in faucibus augue. Cras et arcu molestie libero eleifend commodo eget et eros."
	document.getElementById("histoire").appendChild(p);
}

function ajouterImage(){
	let p = document.createElement("img");
	p.src = "img/img1.jpg";
	p.className = "deco";
	document.getElementById("histoire").appendChild(p);
}

function supprimerDernierElem(){
	let h = document.getElementById("histoire");
	h.removeChild(h.lastElementChild);
}

function supprimerPremierElem(){
	let h = document.getElementById("histoire");
	h.removeChild(h.firstElementChild);
}
