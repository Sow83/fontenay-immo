import hamburgerMenu from './hamburgerMenu.js'
hamburgerMenu()


import '../sass/main.scss' 


/* Date affichée en bas des footers (Ex: 2024, Mouhamadou sow) */

const currentYearElement = document.getElementById("currentYear");

// Récupère l'année actuelle
const currentYear = new Date().getFullYear();

// Affiche l'année dans l'élément
currentYearElement.textContent = `${currentYear}, `






