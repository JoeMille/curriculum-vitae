

// code for particles.js background(script linked from particles.json file)
particlesJS.load('particles-js', particlesJsonUrl, function() {
  console.log('particles.js loaded - callback');
});

// code for header pulsating effect

// JavaScript
// Header image pulsating effect
const header = document.querySelector('#main-header');
let brightness = 1;

setInterval(() => {
    brightness = brightness === 1 ? 2 : 1;
    if (header) {
        header.style.filter = `brightness(${brightness})`;
    }
}, 2000);
// code for home page content container

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// code for progress bars
const progressValues = [80, 60, 40, 20];
const progressBars = document.querySelectorAll('.graph-progress');

progressBars.forEach((bar, index) => {
  bar.style.width = `${progressValues[index]}%`;
});



// code for carousel

  $(document).ready(function() {
    setInterval(function() {
      var $active = $('#carousel img.active');
      var $next = $active.next('img').length ? $active.next('img') : $('#carousel img:first');
      $active.fadeOut(function() {
        $active.removeClass('active');
        $next.fadeIn().addClass('active');
      });
    }, 4000); // Change image every 3 seconds
  });

