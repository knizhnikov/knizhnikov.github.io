particlesJS.load('particles', 'assets/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

function fadeElements(){
    if (!appearingElements)
        return;

    appearingElements.forEach(element => {
        var r = element.getBoundingClientRect();
        if (document.documentElement.clientHeight - r.top >= 0 ){
            element.classList.add("faded");
        }
    });
}

var appearingElements;

window.setTimeout(()=>{
    appearingElements = document.querySelectorAll('[fade-in]');
    fadeElements();
    scrollsIntoViews();
}, 90);

window.addEventListener('scroll', throttle(fadeElements, 100));