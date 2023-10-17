/**
 *  Menu principal
 */
const hamburgerMenu = () => {

const bodyElement = document.querySelector("body");
const headerElement = document.querySelector(".header");
const navElement = document.querySelector(".nav");
const buttonToggleElement = document.querySelector(".header__button-toggle");

function openNav() {
    buttonToggleElement.classList.add("header__js-toggle-button");
    navElement.classList.add("nav__js-show-nav");
    bodyElement.classList.add("header__js-body-no-scrool");
    buttonToggleElement.setAttribute("aria-expanded","true");
    trapFocusInsideNavigation();
}

function closeNave() {
  buttonToggleElement.classList.remove("header__js-toggle-button");
  navElement.classList.remove("nav__js-show-nav");
  bodyElement.classList.remove("header__js-body-no-scrool");
  buttonToggleElement.setAttribute("aria-expanded","false");
  buttonToggleElement.focus();

}

let focusableElementsArray = [
  "[href]",
  "button",
  "input",
];

function trapFocusInsideNavigation() {
  const focusableElements = headerElement.querySelectorAll(focusableElementsArray);

  focusableElements.forEach(focusableElement => {
  if (focusableElement.addEventListener) {
      focusableElement.addEventListener("keydown", (e) => {
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =  focusableElements[focusableElements.length - 1];

      if (e.key == "Tab" && !e.shiftKey) {
        if (e.target == lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }

       if (e.key == "Tab"  &&  e.shiftKey) {
        if (e.target == firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
        
      }

    })
  }
 });
}


buttonToggleElement.addEventListener("click", function () {
  if (!navElement.classList.contains("nav__js-show-nav")) {
    openNav();
  }
  else{
    closeNave();
  }
});

// Fermeture de la navigation principale avec le bouton "Echappe"
document.addEventListener("keydown", (e) =>{
  if (navElement.classList.contains("nav__js-show-nav")) {
    if (e.key == "Escape") {
      closeNave();    
    }
  }
})

}

export default hamburgerMenu