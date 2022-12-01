// Start Header
const header = document.querySelector("header");
const navMenu = document.getElementById("nav-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "orangered";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Open Menu
openMenu.addEventListener("click", () => {
  navMenu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

// Close Menu
closeMenu.addEventListener("click", () => {
  navMenu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    navMenu.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  } else {
    navMenu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
});
// End Header
