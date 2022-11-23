const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation__list");
const navOverlay = document.querySelector(".overlay");

const toggleOpenClass = (element) => element.classList.toggle("open");
const toggleMenu = () => {
  toggleOpenClass(hamburger);
  toggleOpenClass(navList);
  toggleOpenClass(navOverlay);
};

hamburger.addEventListener("click", toggleMenu);
