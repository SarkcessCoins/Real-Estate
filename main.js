const body = document.querySelector("body");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const navigationItem = document.getElementById("navigation-item");
const notmobile = window.matchMedia("(min-width:32em)");
const navLink = navigationItem.querySelectorAll("li");

// form
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("email-error");

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
function clickNavLink(e) {
  navLink.forEach((link) => {
    if (link.contains(e.target)) {
      removeMobileNav();
    }
  });
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

function formValidation(e) {
  e.preventDefault();
  email.value.trim();
  if (email.value === "") {
    showError("Enter Email ", false);
  } else if (!email.validity.valid) {
    showError("Invalid Email", false);
  } else {
    ClearError();
  }
}

function showError(errorText, errorAttribute) {
  email.classList.add("email-error");
  error.textContent = errorText;
  error.setAttribute("aria-hidden", errorAttribute);
}
function ClearError() {
  form.reset();
  email.classList.remove("email-error");
}

openNav.addEventListener("click", navAction);
closeNav.addEventListener("click", navAction);
notmobile.addEventListener("change", removeMobileNav);
body.addEventListener("click", bodyClicked);
body.addEventListener("click", clickNavLink);

//
form.addEventListener("submit", formValidation);
