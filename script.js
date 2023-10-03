// code for home page content container

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
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