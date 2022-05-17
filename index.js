// Main Navbar
const icon_button = document.querySelector(".menu-icon");
const navbarMenu = document.querySelector(".navbar-links");

icon_button.addEventListener("click", mobileMenu);

function mobileMenu() {
  icon_button.classList.toggle("active");
  navbarMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  icon_button.classList.remove("active");
  navbarMenu.classList.remove("active");
}


