//  ----- AU CHARGEMENT
var objetsPerdus = 0;


function victoire() {
  console.log(objetsPerdus);

  if (objetsPerdus==10) {
    var el = document.getElementById('img')
    el.style.display = "block";
  }
}

function a1() {
	var el = document.getElementById('o1');
	el.style.animationPlayState = "running";

var elem = document.getElementById("m1"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }

  objetsPerdus++;
  victoire();
}

function a2() {
  var el = document.getElementById('o2');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m2"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a3() {
  var el = document.getElementById('o3');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m3"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a4() {
  var el = document.getElementById('o4');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m4"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a5() {
  var el = document.getElementById('o5');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m5"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a6() {
  var el = document.getElementById('o6');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m6"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a7() {
  var el = document.getElementById('o7');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m7"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a8() {
  var el = document.getElementById('o8');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m8"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a9() {
  var el = document.getElementById('o9');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m9"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}

function a10() {
  var el = document.getElementById('o10');
  el.style.animationPlayState = "running";

var elem = document.getElementById("m10"); 
  var opac = 1;
  var id = setInterval(disappear, 5);
  function disappear() {
    if (opac <= 0.5) {
      clearInterval(id);
    } else {
      opac= opac - 0.1; 
      elem.style.opacity = opac ;
    }
  }
    objetsPerdus++;
    victoire();
}
//-----------------------------------------------------------------------------------------------------------------------------
function timer() {

var elem = document.getElementById("chrono"); 
  var opac = 0;
  var id = setInterval(disappear, 1000);
  function disappear() {
    if (opac >=20000) {
      clearInterval(id);
    } else {
      opac= opac + 1; 
      elem.innerHTML = opac ;
    }
  }
}

timer();