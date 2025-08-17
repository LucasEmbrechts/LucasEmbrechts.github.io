/*joshua dirick*/
function retard(){
    window.location.replace('ecranacc.html')
}
function nomak(){
    window.location.replace('demo.html')
}
let reussi = 0
if(reussi >= 1){
    document.getElementById("futur").src = "source/futur.png"
    document.getElementById("futur").onclick = function(){
        window.location.replace('futur.html')
    }

}
    if(reussi >= 2){
        document.getElementById("tdp").src = "source/tdp.png"
        document.getElementById("tdp").onclick = function(){
            window.location.replace('tdp.html')
        }
    }    
        if(reussi >= 3){
            document.getElementById("destine").src = "source/destine.png"
            document.getElementById("destine").onclick = function(){
                window.location.replace('destine.html')
            }
        } 
        document.getElementById('son').src = "source/musique/musique_monde.mp3"
        document.getElementById('audio').load()
        document.getElementById('audio').play()
    
