const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const parallax = document.querySelector(".parallax");

document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelector(".social-links");

  hamburger.addEventListener("click", function () {
    toggleMenu(socialLinks);
  });

  window.addEventListener("resize", function () {
    handleResize(socialLinks);
  });
});

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

function handleResize(socialLinks) {
  if (window.innerWidth >= 769) {
    navLinks.classList.remove("active");
    navLinks.classList.remove("show");
    socialLinks.classList.remove("active");
    document.querySelector(".navbar").appendChild(socialLinks);
    hamburger.classList.remove("active");
  }
}

function toggleNavbarBackground() {
  const windowHeight = window.innerHeight;
  const scrollTop = parallax.scrollTop;
  navbar.style.backgroundColor = `rgba(255, 255, 255, ${Math.min(
    scrollTop / windowHeight,
    1
  )})`;
}

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
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
  });
});

parallax.addEventListener("scroll", toggleNavbarBackground);
window.addEventListener("resize", updateHamburger);
