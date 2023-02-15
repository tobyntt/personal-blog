/* ========================= HOME PAGE ========================= */
/* Toggle Navbar Menu */
const body = document.getElementById("body");
const navLinks = document.getElementById("navLinks");
const burgerButton = document.getElementById("burgerButton");
const toggleBurgerButton = () => {
  /* clear the body's class */
  body.classList.remove("disable-vertical-scrollbar");
  /* toggle navbar */
  navLinks.classList.toggle("navbar-links-open");
  /* toggle burger menu */
  burgerButton.classList.toggle("navbar-burger-button-open");
};

/* click outside to close the navbar menu on table or mobile screens and disable the vertical scroll bar when the mobile menu is open */
document.onclick = (e) => {
  if (e.target.id !== "navLinks" && e.target.id !== "burgerButton") {
    /* clear the body's class */
    body.classList.remove("disable-vertical-scrollbar");
    navLinks.classList.remove("navbar-links-open");
    burgerButton.classList.remove("navbar-burger-button-open");
  }

  if (navLinks.classList.contains("navbar-links-open")) {
    body.classList.add("disable-vertical-scrollbar");
  }
};
