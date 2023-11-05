// code for particles
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});


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


// code for contact form/ routes to personal email
// ADD EMAIL DETAILS ONCE PROJECT COMPLETED

const sendEmail = (name, company, email, message) => {
  email.send({
    Host: process.env.EMAIL_HOST,
    Username: process.env.EMAIL_USERNAME,
    Password: process.env.EMAIL_PASSWORD,
    To: process.env.EMAIL_TO,
    From: process.env.EMAIL_FROM,
    Subject: "New message from contact form",
    Body: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`,
  }).then((message) => {
    alert("Thank you for your message!");
  });
};
  
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    sendEmail(name, company, email, message);
    contactForm.reset();
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
    }, 3000); // Change image every 3 seconds
  });

