document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const socialLinks = document.querySelector(".social-links");

  // Toggle navigation menu
  function toggleMenu() {
    navLinks.classList.toggle("active");
    socialLinks.classList.toggle("active");
  }

  // Attach event listeners
  hamburger.addEventListener("click", toggleMenu);
  window.addEventListener("resize", closeMenuOnResize);

  // Close navigation menu on window resize
  function closeMenuOnResize() {
    if (window.innerWidth >= 769) {
      navLinks.classList.remove("active");
      socialLinks.classList.remove("active");
    }
  }
});
