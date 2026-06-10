let vbucks = localStorage.getItem("vbucks")
        if(vbucks==null){
            localStorage.setItem("vbucks", 0)
        }
        //si pas encore venu alors initier 0 vbucks 