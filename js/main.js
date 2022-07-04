/**
 *  Menu principal
 */
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

/**
 *  Page property
 */
// Chargement des premiers éléments (grand-paris) et activation de son bouton
window.addEventListener("DOMContentLoaded", function () {
  displaypropertyitems(displayFirstPropertyItems());
});
// Catalogue des biens de propriété
const properties = [
  // Grand Paris
  {
    id: 1,
    title: "Le Palet des Gateries",
    img_srcset: "public/images/properties/property-1-283x184.jpg 283w, public/images/properties/property-1-353x230.jpg 353w, public/images/properties/property-1-584x380.jpg 584w",
    img_src: "./public/images/properties/property-1-584x380.jpg",
    ville: "Paris 18 &#47; Grand Paris",
    price: "325.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 2,
    title: "Villa Choisy",
    img_srcset: "public/images/properties/property-2-283x184.jpg 283w, public/images/properties/property-2-353x230.jpg 353w, public/images/properties/property-2-584x380.jpg 584w",
    img_src: "./public/images/properties/property-2-584x380.jpg",
    ville: "Feucherolles &#47; Grand Paris",
    price: "345.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 3,
    title: "Mer sea",
    img_srcset: "public/images/properties/property-3-283x184.jpg 283w, public/images/properties/property-3-353x230.jpg 353w, public/images/properties/property-3-584x380.jpg 584w",
    img_src: "./public/images/properties/property-3-584x380.jpg",
    ville: "Paris 15 &#47; Grand Paris",
    price: "235.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull;  salon",
    category: "grand-paris"
  },
  {
    id: 4,
    title: "L'Abri Cotier",
    img_srcset: "public/images/properties/property-4-283x184.jpg 283w, public/images/properties/property-4-353x230.jpg 353w, public/images/properties/property-4-584x380.jpg 584w",
    img_src: "./public/images/properties/property-4-584x380.jpg",
    ville: "Chevreuse &#47; Grand Paris",
    price: "555.000 &euro;",
    infos: "1500 m&sup2; &bull; 4 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 5,
    title: "Bicoque de Choc",
    img_srcset: "public/images/properties/property-5-283x184.jpg 283w, public/images/properties/property-5-353x230.jpg 353w, public/images/properties/property-5-584x380.jpg 584w",
    img_src: "./public/images/properties/property-5-584x380.jpg",
    ville: "Saint-Prix &#47; Grand Paris",
    price: "335.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 6,
    title: "La Rose d'Evan",
    img_srcset: "public/images/properties/property-6-283x184.jpg 283w, public/images/properties/property-6-353x230.jpg 353w, public/images/properties/property-6-584x380.jpg 584w",
    img_src: "./public/images/properties/property-6-584x380.jpg",
    ville: "Versailles &#47; Grand Paris",
    price: "510.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 7,
    title: "Le coup de Roul",
    img_srcset: "public/images/properties/property-7-283x184.jpg 283w, public/images/properties/property-7-353x230.jpg 353w, public/images/properties/property-7-584x380.jpg 584w",
    img_src: "./public/images/properties/property-7-584x380.jpg",
    ville: "Chessy &#47; Grand Paris",
    price: "375.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 8,
    title: "La Baraca Pots",
    img_srcset: "public/images/properties/property-8-283x184.jpg 283w, public/images/properties/property-8-353x230.jpg 353w, public/images/properties/property-8-584x380.jpg 584w",
    img_src: "./public/images/properties/property-8-584x380.jpg",
    ville: "Noisiel &#47; Grand Paris",
    price: "528.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 9,
    title: "Villa Sansouci ",
    img_srcset: "public/images/properties/property-9-283x184.jpg 283w, public/images/properties/property-9-353x230.jpg 353w, public/images/properties/property-9-584x380.jpg 584w",
    img_src: "./public/images/properties/property-9-584x380.jpg",
    ville: "Fontenay-le-Fleury &#47; Grand Paris",
    price: "322.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 10,
    title: "La Gare des Etoiles",
    img_srcset: "public/images/properties/property-10-283x184.jpg 283w, public/images/properties/property-10-353x230.jpg 353w, public/images/properties/property-10-584x380.jpg 584w",
    img_src: "./public/images/properties/property-10-584x380.jpg",
    ville: "Bièvres &#47; Grand Paris",
    price: "750.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"

  },
  // Londre
  {
    id: 11,
    title: "Le Cat Étoile",
    img_srcset: "public/images/properties/property-11-283x184.jpg 283w, public/images/properties/property-11-353x230.jpg 353w, public/images/properties/property-11-584x380.jpg 584w",
    img_src: "./public/images/properties/property-11-584x380.jpg",
    ville: "Whitehall &#47; Londre",
    price: "630.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 12,
    title: "Kelven",
    img_srcset: "public/images/properties/property-12-283x184.jpg 283w, public/images/properties/property-12-353x230.jpg 353w, public/images/properties/property-12-584x380.jpg 584w",
    img_src: "./public/images/properties/property-12-584x380.jpg",
    ville: "Westminster &#47; Londre",
    price: "315.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 13,
    title: "Sen Zepate",
    img_srcset: "public/images/properties/property-13-283x184.jpg 283w, public/images/properties/property-13-353x230.jpg 353w, public/images/properties/property-13-584x380.jpg 584w",
    img_src: "./public/images/properties/property-13-584x380.jpg",
    ville: "Piccadilly  &#47; Londre",
    price: "425.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 14,
    title: "Qui Lu Dit",
    img_srcset: "public/images/properties/property-14-283x184.jpg 283w, public/images/properties/property-14-353x230.jpg 353w, public/images/properties/property-14-584x380.jpg 584w",
    img_src: "./public/images/properties/property-14-584x380.jpg",
    ville: "St James's &#47; Londre",
    price: "232.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 15,
    title: "Picsous",
    img_srcset: "public/images/properties/property-15-283x184.jpg 283w, public/images/properties/property-15-353x230.jpg 353w, public/images/properties/property-15-584x380.jpg 584w",
    img_src: "./public/images/properties/property-15-584x380.jpg",
    ville: "Soho &#47; Londre",
    price: "658.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 16,
    title: "36 Chants d’Ailes",
    img_srcset: "public/images/properties/property-16-283x184.jpg 283w, public/images/properties/property-16-353x230.jpg 353w, public/images/properties/property-16-584x380.jpg 584w",
    img_src: "./public/images/properties/property-16-584x380.jpg",
    ville: "Trafalgar &#47; Londre",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 17,
    title: "La Villa Geoise",
    img_srcset: "public/images/properties/property-17-283x184.jpg 283w, public/images/properties/property-17-353x230.jpg 353w, public/images/properties/property-17-584x380.jpg 584w",
    img_src: "./public/images/properties/property-17-584x380.jpg",
    ville: "Strand &#47; Londre",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 18,
    title: "Pink Floyd",
    img_srcset: "public/images/properties/property-18-283x184.jpg 283w, public/images/properties/property-18-353x230.jpg 353w, public/images/properties/property-18-584x380.jpg 584w",
    img_src: "./public/images/properties/property-18-584x380.jpg",
    ville: "Fitzrovia &#47; Londre",
    price: "289.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 19,
    title: "Tu m’Plais",
    img_srcset: "public/images/properties/property-19-283x184.jpg 283w, public/images/properties/property-19-353x230.jpg 353w, public/images/properties/property-19-584x380.jpg 584w",
    img_src: "./public/images/properties/property-19-584x380.jpg",
    ville: "Bloomsbury &#47; Londre",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  // Amsterdam
  {
    id: 20,
    title: "Le Bercail",
    img_srcset: "public/images/properties/property-20-283x184.jpg 283w, public/images/properties/property-20-353x230.jpg 353w, public/images/properties/property-20-584x380.jpg 584w",
    img_src: "./public/images/properties/property-20-584x380.jpg",
    ville: "Grachtengordel &#47; Amsterdam",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 21,
    title: "Le Nid",
    img_srcset: "public/images/properties/property-21-283x184.jpg 283w, public/images/properties/property-21-353x230.jpg 353w, public/images/properties/property-21-584x380.jpg 584w",
    img_src: "./public/images/properties/property-21-584x380.jpg",
    ville: "Jordaan &#47; Amsterdam",
    price: "258.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 22,
    title: "Le Petit chez Nous",
    img_srcset: "public/images/properties/property-22-283x184.jpg 283w, public/images/properties/property-22-353x230.jpg 353w, public/images/properties/property-22-584x380.jpg 584w",
    img_src: "./public/images/properties/property-22-584x380.jpg",
    ville: "Slotermeer &#47; Amsterdam",
    price: "568.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 23,
    title: "Le petit clos tranquille",
    img_srcset: "public/images/properties/property-23-283x184.jpg 283w, public/images/properties/property-23-353x230.jpg 353w, public/images/properties/property-23-584x380.jpg 584w",
    img_src: "./public/images/properties/property-23-584x380.jpg",
    ville: "Geuzenveld &#47; Amsterdam",
    price: "578.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 24,
    title: "Belle des Champs",
    img_srcset: "public/images/properties/property-24-283x184.jpg 283w, public/images/properties/property-24-353x230.jpg 353w, public/images/properties/property-24-584x380.jpg 584w",
    img_src: "./public/images/properties/property-24-584x380.jpg",
    ville: "Slotervaart &#47; Amsterdam",
    price: "654.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 25,
    title: "Les Volets Bleus",
    img_srcset: "public/images/properties/property-25-283x184.jpg 283w, public/images/properties/property-25-353x230.jpg 353w, public/images/properties/property-25-584x380.jpg 584w",
    img_src: "./public/images/properties/property-25-584x380.jpg",
    ville: "Durgerdam &#47; Amsterdam",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 26,
    title: "Nid de rêve",
    img_srcset: "public/images/properties/property-26-283x184.jpg 283w, public/images/properties/property-26-353x230.jpg 353w, public/images/properties/property-26-584x380.jpg 584w",
    img_src: "./public/images/properties/property-26-584x380.jpg",
    ville: "Zunderdorp &#47; Amsterdam",
    price: "645.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 27,
    title: "Bel Abri",
    img_srcset: "public/images/properties/property-27-283x184.jpg 283w, public/images/properties/property-27-353x230.jpg 353w, public/images/properties/property-27-584x380.jpg 584w",
    img_src: "./public/images/properties/property-27-584x380.jpg",
    ville: "Ransdorp &#47; Amsterdam",
    price: "586.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },

  {
    id: 28,
    title: "Mon Désir",
    img_srcset: "public/images/properties/property-28-283x184.jpg 283w, public/images/properties/property-28-353x230.jpg 353w, public/images/properties/property-28-584x380.jpg 584w",
    img_src: "./public/images/properties/property-28-584x380.jpg",
    ville: "Kinkerbuurt &#47; Amsterdam",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  // New york
  {
    id: 29,
    title: "Mon Idéal",
    img_srcset: "public/images/properties/property-29-283x184.jpg 283w, public/images/properties/property-29-353x230.jpg 353w, public/images/properties/property-29-584x380.jpg 584w",
    img_src: "./public/images/properties/property-29-584x380.jpg",
    ville: "Batavia &#47; New York",
    price: "568.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 30,
    title: "La Tanière",
    img_srcset: "public/images/properties/property-30-283x184.jpg 283w, public/images/properties/property-30-353x230.jpg 353w, public/images/properties/property-30-584x380.jpg 584w",
    img_src: "./public/images/properties/property-30-584x380.jpg",
    ville: "Beacon &#47; New York",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 31,
    title: "Welcome",
    img_srcset: "public/images/properties/property-31-283x184.jpg 283w, public/images/properties/property-31-353x230.jpg 353w, public/images/properties/property-31-584x380.jpg 584w",
    img_src: "./public/images/properties/property-31-584x380.jpg",
    ville: "Buffalo &#47; New York",
    price: "758.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 32,
    title: "Petit Manoir",
    img_srcset: "public/images/properties/property-32-283x184.jpg 283w, public/images/properties/property-32-353x230.jpg 353w, public/images/properties/property-32-584x380.jpg 584w",
    img_src: "./public/images/properties/property-32-584x380.jpg",
    ville: "Elmira &#47; New York",
    price: "478.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 33,
    title: "Le Petit Trianon",
    img_srcset: "public/images/properties/property-33-283x184.jpg 283w, public/images/properties/property-33-353x230.jpg 353w, public/images/properties/property-33-584x380.jpg 584w",
    img_src: "./public/images/properties/property-33-584x380.jpg",
    ville: "Johnstown &#47; New York",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 34,
    title: "Domicile Adoré",
    img_srcset: "public/images/properties/property-34-283x184.jpg 283w, public/images/properties/property-34-353x230.jpg 353w, public/images/properties/property-34-584x380.jpg 584w",
    img_src: "./public/images/properties/property-34-584x380.jpg",
    ville: "Little Falls &#47; New york",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 35,
    title: "Villa Bellevue",
    img_srcset: "public/images/properties/property-35-283x184.jpg 283w, public/images/properties/property-35-353x230.jpg 353w, public/images/properties/property-35-584x380.jpg 584w",
    img_src: "./public/images/properties/property-35-584x380.jpg",
    ville: "Middletown &#47; New York",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 36,
    title: "Mon Idéal",
    img_srcset: "public/images/properties/property-36-283x184.jpg 283w, public/images/properties/property-36-353x230.jpg 353w, public/images/properties/property-36-584x380.jpg 584w",
    img_src: "./public/images/properties/property-36-584x380.jpg",
    ville: "Ogdensburg &#47; New york",
    price: "225.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 37,
    title: "La Joie de Vivre",
    img_srcset: "public/images/properties/property-37-283x184.jpg 283w, public/images/properties/property-37-353x230.jpg 353w, public/images/properties/property-37-584x380.jpg 584w",
    img_src: "./public/images/properties/property-37-584x380.jpg",
    ville: "Peekskill &#47; New York",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  // Quebec
  {
    id: 38,
    title: "La Bienvenue",
    img_srcset: "public/images/properties/property-38-283x184.jpg 283w, public/images/properties/property-38-353x230.jpg 353w, public/images/properties/property-38-584x380.jpg 584w",
    img_src: "./public/images/properties/property-38-584x380.jpg",
    ville: "Amos &#47; Quebec",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 39,
    title: "Ma Retraite",
    img_srcset: "public/images/properties/property-39-283x184.jpg 283w, public/images/properties/property-39-353x230.jpg 353w, public/images/properties/property-39-584x380.jpg 584w",
    img_src: "./public/images/properties/property-39-584x380.jpg",
    ville: "Baie-Comeau &#47; Quebec",
    price: "253.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 40,
    title: "La Gaieté",
    img_srcset: "public/images/properties/property-40-283x184.jpg 283w, public/images/properties/property-40-353x230.jpg 353w, public/images/properties/property-40-584x380.jpg 584w",
    img_src: "./public/images/properties/property-40-584x380.jpg",
    ville: "Baie-Saint-Paul &#47; Quebec",
    price: "285.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 41,
    title: "Les Gais Pins",
    img_srcset: "public/images/properties/property-41-283x184.jpg 283w, public/images/properties/property-41-353x230.jpg 353w, public/images/properties/property-41-584x380.jpg 584w",
    img_src: "./public/images/properties/property-41-584x380.jpg",
    ville: "Cap-Chat&#47; Quebec",
    price: "399.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 42,
    title: "Les Heures Claires",
    img_srcset: "public/images/properties/property-42-283x184.jpg 283w, public/images/properties/property-42-353x230.jpg 353w, public/images/properties/property-42-584x380.jpg 584w",
    img_src: "./public/images/properties/property-42-584x380.jpg",
    ville: "Clermont &#47; Quebec",
    price: "485.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 43,
    title: "Clair Logis",
    img_srcset: "public/images/properties/property-43-283x184.jpg 283w, public/images/properties/property-43-353x230.jpg 353w, public/images/properties/property-43-584x380.jpg 584w",
    img_src: "./public/images/properties/property-43-584x380.jpg",
    ville: "Hampstead &#47; Quebec",
    price: "255.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 44,
    title: "La Rose d'Evan",
    img_srcset: "public/images/properties/property-44-283x184.jpg 283w, public/images/properties/property-44-353x230.jpg 353w, public/images/properties/property-44-584x380.jpg 584w",
    img_src: "./public/images/properties/property-44-584x380.jpg",
    ville: "La Malbaie &#47; Quebec",
    price: "489.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 45,
    title: "Les Bambins",
    img_srcset: "public/images/properties/property-45-283x184.jpg 283w, public/images/properties/property-45-353x230.jpg 353w, public/images/properties/property-45-584x380.jpg 584w",
    img_src: "./public/images/properties/property-45-584x380.jpg",
    ville: "La Sarre &#47; Quebec",
    price: "763.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 46,
    title: "Le Vent des Anges,",
    img_srcset: "public/images/properties/property-46-283x184.jpg 283w, public/images/properties/property-46-353x230.jpg 353w, public/images/properties/property-46-584x380.jpg 584w",
    img_src: "./public/images/properties/property-46-584x380.jpg",
    ville: "Marieville &#47; Quebec",
    price: "399.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 47,
    title: "Villa Bellevue",
    img_srcset: "public/images/properties/property-47-283x184.jpg 283w, public/images/properties/property-47-353x230.jpg 353w, public/images/properties/property-47-584x380.jpg 584w",
    img_src: "./public/images/properties/property-47-584x380.jpg",
    ville: "La Malbaie &#47; Quebec",
    price: "548.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 48,
    title: "La Rose d'Evan",
    img_srcset: "public/images/properties/property-48-283x184.jpg 283w, public/images/properties/property-48-353x230.jpg 353w, public/images/properties/property-48-584x380.jpg 584w",
    img_src: "./public/images/properties/property-48-584x380.jpg",
    ville: "Hampstead &#47; Quebec",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"

  },
  {
    id: 49,
    title: "La Riviéra",
    img_srcset: "public/images/properties/property-49-283x184.jpg 283w, public/images/properties/property-49-353x230.jpg 353w, public/images/properties/property-49-584x380.jpg 584w",
    img_src: "./public/images/properties/property-49-584x380.jpg",
    ville: "Clermont &#47; Quebec",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
]

const items = document.querySelector(".card-properties__items");
// Affiche  les biens de propriétés qui lui sont fournis en argument
function displaypropertyitems (propertyitem) {
  let displayProperties = propertyitem.map(function (propertyitem) {
    return `<article class="card-properties__item">
              <img class="card-properties__img" width="584" height="380"
                                           srcset="${propertyitem.img_srcset}"
                                           src="${propertyitem.img_src}"
                                           sizes="(min-width: 40em) calc((100vw - 3.75rem)/2)
                                                  (min-width: 60em) 584px                                                            
                                                  calc(100vw - 2.5rem)"
                                           alt="${propertyitem.title}"
                                       loading="lazy">
              <div class="card-properties__infos">
                  <h3>${propertyitem.title}</h3>
                  <p>${propertyitem.ville}</p>
                  <span class="card-properties__price">${propertyitem.price}</span>
              </div>
              <p class="card-properties__area-infos">${propertyitem.infos}</p>
            </article>`
  });
  displayProperties = displayProperties.join(" ");
  items.innerHTML = displayProperties;
}

// Retourne les élements(Grand Paris) du premier bouton avtive  
function displayFirstPropertyItems() {
  const filterBtnActiveCategory = properties.filter(function (propertyitem) {
    if (propertyitem.category === "grand-paris") {
      return propertyitem;
    } 
  });
  return filterBtnActiveCategory;
}

function filterMenuAndEnableDisableBtns(currentBtn){
  let filterBtnCategory = currentBtn.dataset.category;
    let propertyCategory = properties.filter(function (propertyitem) {
      if (filterBtnCategory === propertyitem.category) {
        return propertyitem;
      }
    });
    // active et désactive les boutons
    filterBtns.forEach(element => {
      if (filterBtnCategory !== element.dataset.category) {
        currentBtn.classList.add("catalog__js-active-filter-btn");
        element.classList.remove("catalog__js-active-filter-btn");
        tablistAccessibility(currentBtn, element);  
      }
    });
    displaypropertyitems (propertyCategory ); 
}


// Filtre les éléments du menu à afficher en fonction de la catégorie du bouton cliqué,
const filterBtns = document.querySelectorAll(".catalog__filter-btn");
filterBtns.forEach(filterBtn => {
  filterBtn.addEventListener("click", () => {
    filterMenuAndEnableDisableBtns(filterBtn)
  });
});
/**
 * Accessibilité du Menu du restaurant
 */
 function tablistAccessibility(btnCurrent, otherBtns) {
  // Supprime le "tabindex-1" du bouton en cours
  btnCurrent.removeAttribute("tabindex");
  // Met un "tabindex-1" aux autres boutons
  otherBtns.setAttribute("tabindex", "-1");
  // Met un "aria-selected=true" au bouton en cours
  btnCurrent.setAttribute("aria-selected", "true");
  // Met un "aria-selected=false" aux autres boutons
  otherBtns.setAttribute("aria-selected", "false");
  // Met la valeur de l'attribut "aria-controls" du bouton en cours dans l'id du panneau tabpanel correspondant
  items.id = btnCurrent.getAttribute("aria-controls");
  // Met la valeur de l'id du bouton en cours dans le "aria-labelledby" du panneau tabpanel correspondant
  items.setAttribute("aria-labelledby", btnCurrent.id);
}

// Gère le déplacement du focus sur les boutons quand on appuie 
// sur les flèches gauche et droite du clavier 
function handleBtnFocusTransfer(e){
const focusableFilterBtnElements = document.querySelectorAll(".catalog__filter-btn");
//Création d'un tableau pour la liste de noeuds(boutons filtre)
const focusable = [...focusableFilterBtnElements]; 
//Obtenir l'index de l'élément courant qui a le focus
const index = focusable.indexOf(document.activeElement); 

// Créer une variable pour stocker l'index du prochain élément à cibler
let nextIndex = 0;

if (e.keyCode === 37) {
  // Flèche gauche
  e.preventDefault();
  // nextIndex = index > 0 ? index-1 : focusable.length-1;  :Méthode Ternaire
  if (index > 0) {
      nextIndex = index-1;
  }
  else{
      nextIndex = focusable.length-1;
  }
  focusableFilterBtnElements[nextIndex].focus();
  filterMenuAndEnableDisableBtns(focusableFilterBtnElements[nextIndex]);
}
else if (e.keyCode === 39) {
  // Flèche droite
  e.preventDefault();
  // nextIndex = index < focusable.length-1 ? index+1 : 0;  :Méthode Ternaire
  if (index < focusable.length - 1 ) {
      nextIndex = index+1;
  }
  else{
      nextIndex = 0;
  }
  focusableFilterBtnElements[nextIndex].focus();
  filterMenuAndEnableDisableBtns(focusableFilterBtnElements[nextIndex]);
}
}
let tablist = document.querySelector("[role=tablist]");
tablist.addEventListener('keydown',handleBtnFocusTransfer);


/** 
 * Validation des formulaires 
 **/

let forms = document.querySelectorAll("form");
forms.forEach(form => {
  form.addEventListener("submit", function (e) {
    // Différentes erreurs qu'on peut avoir pour chaque input 
    let error;

    // Message général (couleur rouge ou verte selon qu'il ya erreur ou pas lors de la soumission du formulaire)
    let response = form.querySelector(".form__response");
    response.style.marginTop = "1.25rem";
    response.style.marginBottom = "1.25rem";

    // Validation input text (nom)
    const name = form.querySelector("[type = text]");
    const nameTextError = form.querySelector(".form__input-text-error");
    const regexName = /^[a-zA-Z-\s]+$/;
    if (name && !regexName.test(name.value)) {
      error = "Accepte que les lettres majuscules, minuscules et tiret";
      nameTextError.textContent = error;
      name.focus();
      name.setAttribute("aria-invalid", "true");
    }
    if (name && regexName.test(name.value)) {
      nameTextError.textContent = ""; 
      name.removeAttribute("aria-invalid");
    }

    // Validation input email
    const email = form.querySelector("[type = email]");
    const emailTextError = form.querySelector(".form__input-email-error");
    const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regexEmail.test(email.value)) { 
      error = "Adresse email incorrect";
      emailTextError.textContent = error;
      response.textContent = "";
      response.style.border = "";    
      email.focus();
      email.setAttribute("aria-invalid", "true");
    }
    else{
      emailTextError.textContent = "";
      email.removeAttribute("aria-invalid");
    }

    // S'il y'a erreur lors de la soumission du formulaire
    if (error) {
      if (form.dataset.id === "1") {
        response.style.border = "2px solid red";    
        response.textContent = "Un ou plusieurs champs contiennent une erreur. Veuillez vérifier et essayer à nouveau.";
      }     
      e.preventDefault();
      return false; 
    }
    // S'il n'y a pas d'erreur lors de la soumission du formulaire
    else{
      response.style.border= "2px solid green";   
      if (form.dataset.id === "2") {
        response.textContent = "Votre souscription a bien été envoyé";
      }
      else{
        response.textContent = "Votre message a été envoyé avec succès";
      }
      form.reset();
      e.preventDefault();
    }
  });

});










// console.log(timeAgo('2021-10-19T15:29:01+0000'));

// function timeAgo(input) {
//   const date = (input instanceof Date) ? input : new Date(input);
//   const formatter = new Intl.RelativeTimeFormat('fr');
//   const ranges = {
//     years: 3600 * 24 * 365,
//     months: 3600 * 24 * 30,
//     weeks: 3600 * 24 * 7,
//     days: 3600 * 24,
//     hours: 3600,
//     minutes: 60,
//     seconds: 1
//   };
//   const secondsElapsed = (date.getTime() - Date.now()) / 1000;
//   for (let key in ranges) {
//     if (ranges[key] < Math.abs(secondsElapsed)) {
//       const delta = secondsElapsed / ranges[key];
//       return formatter.format(Math.round(delta), key);
//     }
//   }
// }