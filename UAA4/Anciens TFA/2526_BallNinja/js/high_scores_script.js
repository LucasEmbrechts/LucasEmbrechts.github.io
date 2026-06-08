function compareFn(scoreA, scoreB) {
      if (scoreA.score < scoreB.score) {
        return -1;
      } else if (scoreB.score > scoreA.score) {
        return 1;
      }
      return 0;
    }
    let compteur = 1
    let contener = document.getElementById("scoreTable")
    let tabP
    let tabS
    
    if(localStorage.getItem("scores")== null){
      tabS = []
    }else{
      tabS = JSON.parse(localStorage.getItem("scores"))
    }
    
    tabS.sort(compareFn).reverse()
    
    for(let i = 0; i < tabS.length  && i < 10; i++){
      let classement = document.createElement("tr")
      let numero = document.createElement("td")
      numero.innerHTML = compteur
      numero.classList.add("numero")
      classement.appendChild(numero)
      contener.appendChild(classement)
      
      let nomjoueur = document.createElement("td")
      nomjoueur.classList.add("nomjoueur")
      classement.appendChild(nomjoueur)
      nomjoueur.innerHTML = tabS[i].prenom
      
      let nbrscore = document.createElement("td")
      nbrscore.classList.add("nbrscore")
      classement.appendChild(nbrscore)
      nbrscore.innerHTML = tabS[i].score
      
      
      if(compteur == 1){
        numero.innerHTML = '🥇'
      }else{
        if(compteur == 2){
          numero.innerHTML = '🥈'
        }else{
          if(compteur == 3){
            numero.innerHTML = '🥉'
          }else{
            if(compteur == 4){
              numero.innerHTML = '🍺'
            }else{
              if(compteur == 5){
                numero.innerHTML = '🍫'
              }else{
                if(compteur == 6){
                  numero.innerHTML = '🌷'
                }else{
                  if(compteur == 7){
                    numero.innerHTML = '💩'
                  }else{
                    if(compteur == 8){
                      numero.innerHTML = '💩'
                    }else{
                      if(compteur == 9){
                        numero.innerHTML = '💩'
                      }else{
                        if(compteur == 10){
                          numero.innerHTML = '💩'
                        }else{
                          
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      compteur = compteur + 1
    }