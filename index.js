const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation__list");
const navOverlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".navigation__item");
const navLinks = document.querySelectorAll(".navigation__link");
// Utility functions
const toggleOpenClass = (element) => element.classList.toggle("open");

// Handlers functions
const toggleMenu = () => {
  toggleOpenClass(hamburger);
  toggleOpenClass(navList);
  toggleOpenClass(navOverlay);
};

const toggleClickedEl = (e) => {
  const clickedEl = e.target.closest(".navigation__item");
  if (!clickedEl) return;
  navItems.forEach((item) => item.classList.remove("clicked"));
  clickedEl.classList.add("clicked");
};

// Close menu after clicking on a navigation link
const closeMenu = () => {
  if (navList.classList.contains("open")) {
    // This function toggleMenu styles which means that it removes every open class on the elements if it's there and it adds open class if it's not already there
    // This function reduces the repition of toggling classes
    toggleMenu();
  }
};

const scrollSmooth = (e) => {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};

// Click Handlers
hamburger.addEventListener("click", toggleMenu);
navItems.forEach((item) => item.addEventListener("click", toggleClickedEl));
navItems.forEach((item) => item.addEventListener("click", closeMenu));
navLinks.forEach((link) => link.addEventListener("click", scrollSmooth));
