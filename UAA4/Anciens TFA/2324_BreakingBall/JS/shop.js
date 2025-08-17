document.getElementById('equiper').style ="display:none;"
let position = 0
let prix =[150,350,450,600]
let tab = ['SOURCES/boule_boowling.png','SOURCES/bouledefeu.png','SOURCES/poke1.png','SOURCES/eau.png']
document.getElementById('image').style.backgroundImage = "url("+tab[position]+")"

let boulesAchetees;
let points;

if(localStorage.getItem("boulesAchetees") != null){
boulesAchetees =  JSON.parse(localStorage.getItem("boulesAchetees"))
} else {
boulesAchetees = []
localStorage.setItem("boulesAchetees",  JSON.stringify(boulesAchetees))
}

if (localStorage.getItem("points")!= null) {
points = localStorage.getItem("points")
}
else{
points = 0
localStorage.setItem("points",points)
}

checkAchat()
function boule(){
let image = tab[position];
if (image=='SOURCES/boule_boowling.png') {
localStorage.setItem('boule', 'normal');
}
else{
if (image=='SOURCES/bouledefeu.png') {
localStorage.setItem('boule', 'feu');
}
else{
if (image=='SOURCES/poke1.png.png') {
localStorage.setItem('boule', 'poke1');
}
else{
localStorage.setItem('boule', 'eau');
}
}
}
let prix = prix[position];
localStorage.setItem('prix', prix);



}

function retourshop(){
window.location.replace('index.html')
}
function bouton_triangle_droite(){
if (position!=3) {
position+=1
}
document.getElementById('image').style.backgroundImage = "url("+tab[position]+")"
checkAchat()
}

function bouton_triangle_gauche(){
if (position!=0) {
position-=1
}
document.getElementById('image').style.backgroundImage = "url("+tab[position]+")"

checkAchat()
}

function checkAchat(){
let trouve = false

for (let i = 0; i < boulesAchetees.length ; i +=1) {
if (tab[position]==boulesAchetees[i]) {
trouve = true
}
}

if(trouve == true){
document.getElementById('Acheter').style = "display:none;"
document.getElementById('equiper').style ="display:block;"
document.getElementById('prix').innerHTML =""
} else{
document.getElementById('Acheter').style = "display:block;"
document.getElementById('equiper').style ="display:none;"
document.getElementById('prix').innerHTML =prix[position]+'$'
}
}


function achat(){
document.getElementById('Acheter').style = "display:none;"
document.getElementById('equiper').style ="display:block;"

boulesAchetees.push(tab[position])
localStorage.setItem("boulesAchetees",  JSON.stringify(boulesAchetees))
checkAchat()

}