// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function() {
  
  // === Home Page Welcome Alert ===
  if (document.querySelector("body").classList.contains("home")) {
    alert("Welcome to Musik to the World! Empowering youth through music."); //(w3schools, 2025)
  }

  // === Contact Form Validation & Confirmation ===
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const subject = contactForm.subject.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before submitting!");
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    }); //(w3schools, 2025)
  }

  // === Services Page Interactive Instruments ===
  const instruments = document.querySelectorAll(".instruments li");
  if (instruments.length > 0) {
    instruments.forEach(item => {
      item.addEventListener("click", () => {
        alert(`You clicked on ${item.textContent.trim()}!`);
      });
    });
  } //(w3schools, 2025)

});

// Reference list 
// w3schools, 2025, js in html available on: https://www.w3schools.com/js/default.asp (Accessed on 01 November 2025)