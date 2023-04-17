const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

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
    duration: 2000,
    easing: "ease",
    once: true,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const rellaxLayer1 = new Rellax(".rellax-layer1", {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  const rellaxLayer2 = new Rellax(".rellax-layer2", {
    speed: -1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  const rellaxLayer3 = new Rellax(".rellax-layer3", {
    speed: 0,
    ccenter: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  const rellaxLayer4 = new Rellax(".rellax-layer4", {
    speed: 1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  const rellaxLayer5 = new Rellax(".rellax-layer5", {
    speed: 2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });
});

window.addEventListener("resize", updateHamburger);
