// script.js

// Thank you alert on contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form form');
  const quoteForm = document.querySelector('.quote-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting Abidave Construction Company! We will get back to you soon.');
      this.reset();
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for requesting a quote! We will review your request and contact you shortly.');
      this.reset();
    });
  }
// script.js

// Fade-in Animation and Form Submission (previous code remains the same)

// Image Slider
let currentIndex = 0;
const slides = document.querySelectorAll('#slider .slider-container img');
const totalSlides = slides.length;

function slideImages() {
  // Update the slider container's transform property
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop back to the first image
  }

  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set the interval for the sliding images
setInterval(slideImages, 3000); // Change image every 3 seconds
  // Fade-in Animation
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});