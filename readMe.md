while working on the function that close the navigation when it is opened and the body is clicked. i ran into a problem
the function was { \* function navAction(e) {
if (openNav.contains(e.target) || closeNav.contains(e.target)) {
navigationItem.classList.toggle("navigation-opened");
setAria();
}
}
function bodyClicked(e) {
if (navigationItem.classList.contains("navigation-opened")) {
if (!navigationItem.contains(e.target)) {
// removeMobileNav();
}

}
}\*}

navAction function schecks for what was if if its the open|| close btn
while bodyClicked function check if the nav is opened then check if what was clicked is not the nav, if true close the nav
-PROBLEM:: but the problem was that if i click the openNav the class is added (navigation-opened) which makes the first statement in the bodyClicked function true && and what was clicked is not the nav but the button so Second statement is true this immediatlt close the navigation before it displayed.

-FIX::function bodyClicked(e) {
if (!openNav.contains(e.target) && navigationItem.classList.contains("navigation-opened")) {
if (!navigationItem.contains(e.target)) {
removeMobileNav();
}
}
}
i check to make sure what was clicked is not the buttons && that the nav is now opened
before checking if the body was clicked to close it

By doing so if i click the openNav to open the navigation the first if statement in the bodyClicked if false so it does not run
