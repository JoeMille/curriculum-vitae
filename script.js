
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


// code for contact form/ routes to personal email
// ADD EMAIL DETAILS ONCE PROJECT COMPLETED

const sendEmail = (name, company, email, message) => {
    email.send({
      Host: "smtp.gmail.com",
      Username: "your-email-address", // Replace with your own email address
      Password: "your-email-password", // Replace with your own email password
      To: "your-email-address@example.com", // Replace with your own email address
      From: "your-email-address@gmail.com", // Replace with your own email address
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

