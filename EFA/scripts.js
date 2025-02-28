// scripts.js
// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

// Auto-slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Show the first testimonial initially
showTestimonial(currentTestimonial);

// Form Validation
const form = document.querySelector('.admission-form form');

form.addEventListener('submit', (e) => {
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const phone = form.querySelector('input[name="phone"]');
  const message = form.querySelector('textarea[name="message"]');

  if (!name.value || !email.value || !phone.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields.');
  } else if (!validateEmail(email.value)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  } else if (!validatePhone(phone.value)) {
    e.preventDefault();
    alert('Please enter a valid phone number.');
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^(\+?\d{1,3}[-.\s]?)?\d{10,15}$/;
  return regex.test(phone);
}



// Add this code to handle the form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            // Success message
            document.querySelector('.success-message').style.display = 'block';
            form.reset(); // Reset the form fields
        } else {
            // Error message
            document.querySelector('.error-message').style.display = 'block';
        }
    })
    .catch(error => {
        // Error message
        document.querySelector('.error-message').style.display = 'block';
        console.error('There was an error!', error);
    });
});

