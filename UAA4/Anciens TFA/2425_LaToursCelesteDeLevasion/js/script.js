document.addEventListener("keydown",
    (event) => {
        let nom = event.key;
        // console.log(event)
        if(nom == " "){
            window.location.href="./html/menu.html";
        }
    }
)