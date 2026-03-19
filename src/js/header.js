/* ================================
   DARK MODE TOGGLE
================================ */
document
  .querySelectorAll('[data-btn="switch-mode"]')
  .forEach((btn) => btn.addEventListener("click", toggleMode));

function toggleMode() {

  const html = document.documentElement;
  html.classList.toggle("dark");
  const iconImg = this.querySelector('[data-img="icon"]');
  if (html.classList.contains("dark")) {
    iconImg.src = "./src/assets/img/contents/header/light-mode-icon.png";
  } else {
    iconImg.src = "./src/assets/img/contents/header/night-mode-icon.png";
  }
}

/* ================================
    NAVIGATION TOGGLE
================================ */

const navDropdown = document.querySelector('[data-list="nav-dropdown"]');
const navToggleBtn = document.querySelector('[data-btn="toggle"]');
const navIcon = navToggleBtn.querySelector("span");

navToggleBtn.addEventListener("click", function () {
  navDropdown.classList.toggle("opacity-100");
  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-x");
  navIcon.classList.toggle("rotate-180");
});

/* ================================
   DROPDOWN MENU (MOBILE)
================================ */

document.querySelectorAll('[data-btn="dropdown"]').forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropdown = this.parentElement.querySelector('[data-list="dropdown"]');

    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("pointer-events-auto");
  });
});


/* ===============================================
 TOGGLE HEADER DATA ATTRIBUTE BASED ON SCROLL POSITION
  ===============================================*/

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.dataset.scrolled = window.scrollY > 10;
});


