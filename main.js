const body = document.querySelector("body");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const navigationItem = document.getElementById("navigation-item");
const notmobile = window.matchMedia("(min-width:32em)");

function navAction(e) {
  if (openNav.contains(e.target) || closeNav.contains(e.target)) {
    navigationItem.classList.toggle("navigation-opened");
    setAria();
  }
}

function bodyClicked(e) {
  if (!openNav.contains(e.target) && navigationItem.classList.contains("navigation-opened")) {
    if (!navigationItem.contains(e.target)) {
      removeMobileNav();
    }
  }
}

function setAria() {
  if (navigationItem.classList.contains("navigation-opened")) {
    openNav.setAttribute("aria-expanded", true);
  } else {
    openNav.setAttribute("aria-expanded", false);
  }
}

function removeMobileNav(e) {
  navigationItem.classList.remove("navigation-opened");
  openNav.attributes.ariaExpanded = false;
}

openNav.addEventListener("click", navAction);
closeNav.addEventListener("click", navAction);
notmobile.addEventListener("change", removeMobileNav);
body.addEventListener("click", bodyClicked);
