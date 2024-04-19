

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
const progressValues = [80, 60, 50, 40];
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
    }, 4000); // Change image every 4 seconds
  });

// code for second carousel //////////////////////////////////////////////////////////////////////
let track = document.querySelector('.carousel-track');
let slides = Array.from(track.children);
let slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

let currentIndex = 0;

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// Move to the next slide every 3 seconds
setInterval(() => {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;
  
  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  } else {
    // If there's no next slide, move to the first slide
    moveToSlide(track, currentSlide, slides[0]);
  }
}, 5000);