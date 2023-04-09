const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements

  const socialLinks = document.querySelector(".social-links");

  // Toggle navigation menu
  function toggleMenu() {
    hamburger.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("show");
      setTimeout(() => {
        navLinks.classList.remove("active");
        document.querySelector(".navbar").appendChild(socialLinks);
      }, 300);
    } else {
      navLinks.classList.add("active");
      navLinks.appendChild(socialLinks);
      setTimeout(() => {
        navLinks.classList.add("show");
      }, 50);
    }
    socialLinks.classList.toggle("active");
  }

  // Attach event listeners
  hamburger.addEventListener("click", toggleMenu);
  window.addEventListener("resize", closeMenuOnResize);

  // Close navigation menu and reset hamburger icon on window resize
  function closeMenuOnResize() {
    if (window.innerWidth >= 769) {
      navLinks.classList.remove("active");
      navLinks.classList.remove("show");
      socialLinks.classList.remove("active");
      document.querySelector(".navbar").appendChild(socialLinks);
      hamburger.classList.remove("active"); // Reset hamburger icon
    }
  }
});

// Select the navbar and parallax elements
const navbar = document.querySelector(".navbar");
const parallax = document.querySelector(".parallax");

function toggleNavbarBackground() {
  let viewportHeight = window.innerHeight;
  let scrollPosition = parallax.scrollTop;
  let opacity = Math.min(scrollPosition / viewportHeight, 1);

  navbar.style.backgroundColor = `rgba(255,255,255, ${opacity})`;
}

// Add event listener for scroll events
parallax.addEventListener("scroll", toggleNavbarBackground);

window.onload = function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  const loadingLogo = document.getElementById("loading-logo");

  setTimeout(() => {
    loadingLogo.style.opacity = "0";
  }, 500);

  setTimeout(() => {
    loadingOverlay.style.transform = "translateY(-100%)";
  }, 1000);
};

function updateHamburger() {
  if (window.innerWidth <= 768) {
    if (navLinks.classList.contains("show")) {
      hamburger.classList.add("active");
    } else {
      hamburger.classList.remove("active");
    }
  } else {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  }
}

window.addEventListener("resize", updateHamburger);
