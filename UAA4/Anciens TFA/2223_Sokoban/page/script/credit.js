

setTimeout(function() {
  fullscreenVideo.style.display = 'block';
  fullscreenVideo.play();
}, 100);



setTimeout(function() {
  window.location.href = "../../index.html";
}, 19200);

  document.addEventListener('keypress', function (event) {
    if (event.code === 'Space') {    
        setTimeout(function() {
        fullscreenVideo.style.display = 'block';
        fullscreenVideo.play();
      }, 100);
      setTimeout(function() {
        window.location.href = "../../index.html";
      }, 19200);
        }
  });