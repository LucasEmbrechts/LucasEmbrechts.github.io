   window.onload = function() {
            setTimeout(() => {
                document.getElementById("loader").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("loader").style.display = "none";
                    document.getElementById("titre").style.display = "block";
                    document.getElementById("b2").style.display = "block";
                    document.getElementById("boutton").style.display = "flex";
                }, 1000);
            }, 2000);
        };