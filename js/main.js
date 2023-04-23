// Query DOM elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

// Initialize event listeners after the content is loaded
document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelector(".social-links");

  // Toggle menu when the hamburger is clicked
  hamburger.addEventListener("click", function () {
    toggleMenu(socialLinks);
  });

  // Handle window resizing
  window.addEventListener("resize", function () {
    handleResize(socialLinks);
    adjustParallaxPosition();
  });

  // Adjust parallax position on initial load
  adjustParallaxPosition();
});

// Toggle menu function
function toggleMenu(socialLinks) {
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

// Handle window resizing function
function handleResize(socialLinks) {
  if (window.innerWidth >= 769) {
    navLinks.classList.remove("active");
    navLinks.classList.remove("show");
    socialLinks.classList.remove("active");
    document.querySelector(".navbar").appendChild(socialLinks);
    hamburger.classList.remove("active");
  }
}

// Toggle navbar background function
function toggleNavbarBackground() {
  const windowHeight = window.innerHeight;
  navbar.style.backgroundColor = `rgba(255, 255, 255, ${Math.min(
    scrollTop / windowHeight,
    1
  )})`;
}

// Adjust parallax position function
function adjustParallaxPosition() {
  const parallaxContainer = document.querySelector(
    ".parallax-container:first-of-type"
  );
  if (window.innerWidth <= 768) {
    parallaxContainer.classList.add("mobile-parallax-container");
  } else {
    parallaxContainer.classList.remove("mobile-parallax-container");
  }
}

// Update hamburger function
function updateHamburger() {
  if (window.innerWidth <= 768) {
    navLinks.classList.contains("show")
      ? hamburger.classList.add("active")
      : hamburger.classList.remove("active");
  } else {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  }
}

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
  });
});

// No sroll hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");

    // Add or remove the "no-scroll" class to the body element
    document.body.classList.toggle("no-scroll");
  });
});

// Initialize Rellax parallax library
document.addEventListener("DOMContentLoaded", function () {
  const rellaxOptions = [
    { selector: ".rellax-layer1", speed: -2 },
    { selector: ".rellax-layer2", speed: -1 },
    { selector: ".rellax-layer3", speed: 0 },
    { selector: ".rellax-layer4", speed: 1 },
    { selector: ".rellax-layer5", speed: 2 },
    { selector: ".background-layer", speed: 3 },
  ];

  rellaxOptions.forEach((option) => {
    new Rellax(option.selector, {
      speed: option.speed,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  });
});

// Initialize scroll event listener

let lastScrollPosition = 0;
function handleScroll() {
  const currentScrollPosition = window.pageYOffset;
  const isScrollingDown = currentScrollPosition > lastScrollPosition;

  if (isScrollingDown) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
  navbar.style.backgroundColor =
    currentScrollPosition > 0 ? "#ffffff" : "transparent";
}

// Smooth scroll for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById(this.getAttribute("href").slice(1));

    // Close the hamburger menu
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
    navLinks.classList.remove("active");

    // Scroll to the target section
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add event listeners for window resize
window.addEventListener("resize", updateHamburger);
window.addEventListener("resize", adjustParallaxPosition);
window.addEventListener("scroll", handleScroll);
