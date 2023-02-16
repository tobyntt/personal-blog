/* ========================= HOME PAGE ========================= */
/* Toggle Navbar Menu */
const body = document.getElementById("body-home");
const navLinks = document.getElementById("navLinks");
const burgerButton = document.getElementById("burgerButton");
const toggleBurgerButton = () => {
  /* re-activate the verticle scroll bar */
  body.style.overflowY = "scroll";
  /* toggle navbar */
  navLinks.classList.toggle("navbar-links-open");
  /* toggle burger menu */
  burgerButton.classList.toggle("navbar-burger-button-open");
};

/* click outside to close the navbar menu on table or mobile screens */
/* also disable the vertical scroll bar when the mobile menu is open */
document.onclick = (e) => {
  if (e.target.id !== "navLinks" && e.target.id !== "burgerButton") {
    /* re-activate the verticle scroll bar */
    body.style.overflowY = "scroll";
    navLinks.classList.remove("navbar-links-open");
    burgerButton.classList.remove("navbar-burger-button-open");
  }

  if (navLinks.classList.contains("navbar-links-open")) {
    /* disable the verticle scroll bar */
    body.style.overflowY = "hidden";
  }
};

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* ========================= ARTICLE PAGE ========================= */
/* use flex-box order to re-arrange hero element: title, intro, image */
const heroContainer = document.getElementById("hero-container");
if (heroContainer.classList.contains("hero-article-container")) {
  heroContainer.childNodes[5].style.order = "1";
  heroContainer.childNodes[1].style.order = "5";
}
