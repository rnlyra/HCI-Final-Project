const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// JavaScript for Modal Functionality
document.addEventListener("DOMContentLoaded", function() {
  const menuImages = document.querySelectorAll('.menu-image');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-btn');

  // Open the modal when an item is clicked
  menuImages.forEach(image => {
    image.addEventListener('click', function() {
      const modalId = image.id.replace('Image', 'Modal');  // Get corresponding modal ID
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';  // Show the modal
      }
    });
  });

  // Close the modal when the close button is clicked
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = btn.closest('.modal');
      modal.style.display = 'none';  // Hide the modal
    });
  });

  // Close the modal if clicked outside of the modal content
  window.addEventListener('click', function(event) {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
