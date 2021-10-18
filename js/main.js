/**
 *  Menu hamburger
 */
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const headerButtonToggle = document.querySelector(".header__button-toggle");

headerButtonToggle.addEventListener("click", function () {
  headerButtonToggle.classList.toggle("header__js-toggle-button");
  nav.classList.toggle("nav__js-show-nav");
  body.classList.toggle("body__js-no-croll");

});


/**
 *  Initialisation  swiper 1
 */
  var swiper = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
  });


/**
 *  Initialisation  swiper 2
 */
  var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
  });


/**
 *  Initialisation  swiper 3
 */
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });



/**
 *  Page property
 */
// Catalogue des biens de propriété
const properties = [
  // Grand Paris
  {
    id: 1,
    title: "Le Palet des Gateries",
    img: "./public/images/properties/property-1.jpg",
    ville: "Paris 18 &#47; Grand Paris",
    price: "325.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 2,
    title: "Villa Choisy",
    img: "./public/images/properties/property-2.jpg",
    ville: "Feucherolles &#47; Grand Paris",
    price: "345.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 3,
    title: "Mer sea",
    img: "./public/images/properties/property-3.jpg",
    ville: "Paris 15 &#47; Grand Paris",
    price: "235.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull;  salon",
    category: "grand-paris"
  },
  {
    id: 4,
    title: "L'Abri Cotier",
    img: "./public/images/properties/property-4.jpg",
    ville: "Chevreuse &#47; Grand Paris",
    price: "555.000 &euro;",
    infos: "1500 m&sup2; &bull; 4 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 5,
    title: "Bicoque de Choc",
    img: "./public/images/properties/property-5.jpg",
    ville: "Saint-Prix &#47; Grand Paris",
    price: "335.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 6,
    title: "La Rose d'Evan",
    img: "./public/images/properties/property-6.jpg",
    ville: "Versailles &#47; Grand Paris",
    price: "510.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 7,
    title: "Le coup de Roul",
    img: "./public/images/properties/property-7.jpg",
    ville: "Chessy &#47; Grand Paris",
    price: "375.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 8,
    title: "La Baraca Pots",
    img: "./public/images/properties/property-8.jpg",
    ville: "Noisiel &#47; Grand Paris",
    price: "528.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 9,
    title: "Villa Sansouci ",
    img: "./public/images/properties/property-9.jpg",
    ville: "Fontenay-le-Fleury &#47; Grand Paris",
    price: "322.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "grand-paris"
  },
  {
    id: 10,
    title: "La Gare des Etoiles",
    img: "./public/images/properties/property-10.jpg",
    ville: "Bièvres &#47; Grand Paris",
    price: "750.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "grand-paris"

  },
  // Londre
  {
    id: 11,
    title: "Le Cat Étoile",
    img: "./public/images/properties/property-11.jpg",
    ville: "Whitehall &#47; Londre",
    price: "630.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 12,
    title: "Kelven",
    img: "./public/images/properties/property-12.jpg",
    ville: "Westminster &#47; Londre",
    price: "315.000 &euro;",
    infos: "1500 m&sup2; &bull; 6 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 13,
    title: "Sen Zepate",
    img: "./public/images/properties/property-13.jpg",
    ville: "Piccadilly  &#47; Londre",
    price: "425.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 14,
    title: "Qui Lu Dit",
    img: "./public/images/properties/property-14.jpg",
    ville: "St James's &#47; Londre",
    price: "232.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 15,
    title: "Picsous",
    img: "./public/images/properties/property-15.jpg",
    ville: "Soho &#47; Londre",
    price: "658.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 16,
    title: "36 Chants d’Ailes",
    img: "./public/images/properties/property-16.jpg",
    ville: "Trafalgar &#47; Londre",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 17,
    title: "La Villa Geoise",
    img: "./public/images/properties/property-17.jpg",
    ville: "Strand &#47; Londre",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 18,
    title: "Pink Floyd",
    img: "./public/images/properties/property-18.jpg",
    ville: "Fitzrovia &#47; Londre",
    price: "289.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "londre"
  },
  {
    id: 19,
    title: "Tu m’Plais",
    img: "./public/images/properties/property-19.jpg",
    ville: "Bloomsbury &#47; Londre",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "londre"
  },
  // Amsterdam
  {
    id: 20,
    title: "Le Bercail",
    img: "./public/images/properties/property-20.jpg",
    ville: "Grachtengordel &#47; Amsterdam",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 21,
    title: "Le Nid",
    img: "./public/images/properties/property-21.jpg",
    ville: "Jordaan &#47; Amsterdam",
    price: "258.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 22,
    title: "Le Petit chez Nous",
    img: "./public/images/properties/property-22.jpg",
    ville: "Slotermeer &#47; Amsterdam",
    price: "568.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 23,
    title: "Le petit clos tranquille",
    img: "./public/images/properties/property-23.jpg",
    ville: "Geuzenveld &#47; Amsterdam",
    price: "578.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 24,
    title: "Belle des Champs",
    img: "./public/images/properties/property-24.jpg",
    ville: "Slotervaart &#47; Amsterdam",
    price: "654.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 25,
    title: "Les Volets Bleus",
    img: "./public/images/properties/property-25.jpg",
    ville: "Durgerdam &#47; Amsterdam",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 26,
    title: "Nid de rêve",
    img: "./public/images/properties/property-26.jpg",
    ville: "Zunderdorp &#47; Amsterdam",
    price: "645.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  {
    id: 27,
    title: "Bel Abri",
    img: "./public/images/properties/property-27.jpg",
    ville: "Ransdorp &#47; Amsterdam",
    price: "586.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "amsterdam"
  },

  {
    id: 28,
    title: "Mon Désir",
    img: "./public/images/properties/property-28.jpg",
    ville: "Kinkerbuurt &#47; Amsterdam",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "amsterdam"
  },
  // New york
  {
    id: 29,
    title: "Mon Idéal",
    img: "./public/images/properties/property-29.jpg",
    ville: "Batavia &#47; New York",
    price: "568.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 30,
    title: "La Tanière",
    img: "./public/images/properties/property-30.jpg",
    ville: "Beacon &#47; New York",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 31,
    title: "Welcome",
    img: "./public/images/properties/property-31.jpg",
    ville: "Buffalo &#47; New York",
    price: "758.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 32,
    title: "Petit Manoir",
    img: "./public/images/properties/property-32.jpg",
    ville: "Elmira &#47; New York",
    price: "478.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 33,
    title: "Le Petit Trianon",
    img: "./public/images/properties/property-33.jpg",
    ville: "Johnstown &#47; New York",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 34,
    title: "Domicile Adoré",
    img: "./public/images/properties/property-34.jpg",
    ville: "Little Falls &#47; New york",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 3 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 35,
    title: "Villa Bellevue",
    img: "./public/images/properties/property-35.jpg",
    ville: "Middletown &#47; New York",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 36,
    title: "Mon Idéal",
    img: "./public/images/properties/property-36.jpg",
    ville: "Ogdensburg &#47; New york",
    price: "225.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  {
    id: 37,
    title: "La Joie de Vivre",
    img: "./public/images/properties/property-37.jpg",
    ville: "Peekskill &#47; New York",
    price: "356.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "new-york"
  },
  // Quebec
  {
    id: 38,
    title: "La Bienvenue",
    img: "./public/images/properties/property-38.jpg",
    ville: "Amos &#47; Quebec",
    price: "458.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 39,
    title: "Ma Retraite",
    img: "./public/images/properties/property-39.jpg",
    ville: "Baie-Comeau &#47; Quebec",
    price: "253.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 40,
    title: "La Gaieté",
    img: "./public/images/properties/property-40.jpg",
    ville: "Baie-Saint-Paul &#47; Quebec",
    price: "285.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 41,
    title: "Les Gais Pins",
    img: "./public/images/properties/property-41.jpg",
    ville: "Cap-Chat&#47; Quebec",
    price: "399.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 42,
    title: "Les Heures Claires",
    img: "./public/images/properties/property-42.jpg",
    ville: "Clermont &#47; Quebec",
    price: "485.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 43,
    title: "Clair Logis",
    img: "./public/images/properties/property-43.jpg",
    ville: "Hampstead &#47; Quebec",
    price: "255.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 44,
    title: "La Rose d'Evan",
    img: "./public/images/properties/property-44.jpg",
    ville: "La Malbaie &#47; Quebec",
    price: "489.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 45,
    title: "Les Bambins",
    img: "./public/images/properties/property-45.jpg",
    ville: "La Sarre &#47; Quebec",
    price: "763.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 46,
    title: "Le Vent des Anges,",
    img: "./public/images/properties/property-46.jpg",
    ville: "Marieville &#47; Quebec",
    price: "399.000 &euro;",
    infos: "1500 m&sup2; &bull; 5 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 47,
    title: "Villa Bellevue",
    img: "./public/images/properties/property-47.jpg",
    ville: "La Malbaie &#47; Quebec",
    price: "548.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
  {
    id: 48,
    title: "La Rose d'Evan",
    img: "./public/images/properties/property-48.jpg",
    ville: "Hampstead &#47; Quebec",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"

  },
  {
    id: 49,
    title: "La Riviéra",
    img: "./public/images/properties/property-49.jpg",
    ville: "Clermont &#47; Quebec",
    price: "589.000 &euro;",
    infos: "1500 m&sup2; &bull; 8 Chambres &bull; 1 salon",
    category: "quebec"
  },
]

const items = document.getElementById("js-items");

// Chargement des premiers éléments (grand-paris) et activation de son bouton
window.addEventListener("DOMContentLoaded", function () {
  displaypropertyitems(displayFirstPropertyItems());
});

// Filtre les éléments du menu à afficher en fonction de la catégorie du bouton cliqué,
const filterBtns = document.querySelectorAll(".catalog__filter-btn");
filterBtns.forEach(filterBtn => {
  filterBtn.addEventListener("click", function () {
    let filterBtnCategory = filterBtn.dataset.category;
    let propertyCategory = properties.filter(function (propertyitem) {
      if (filterBtnCategory === propertyitem.category) {
        return propertyitem;
      }
    });
    // active et désactive les boutons
    filterBtns.forEach(element => {
      if (filterBtnCategory !== element.dataset.category) {
        filterBtn.classList.add("catalog__js-active-filter-btn");
        element.classList.remove("catalog__js-active-filter-btn");
      }
    });
    displaypropertyitems (propertyCategory );  
  });
});

// Affiche  les biens de propriétés qui lui sont fournis en argument
function displaypropertyitems (propertyitem) {
  let displayProperties = propertyitem.map(function (propertyitem) {
    return `<div class="catalog__item">
              <img class="catalog__img" src="${propertyitem.img}" alt="${propertyitem.title}">
              <div class="catalog__infos">
                  <h3 class="catalog__infos-title">${propertyitem.title}</h3>
                  <p>${propertyitem.ville}</p>
                  <span class="catalog__price">${propertyitem.price}</span>
              </div>
              <p class="catalog__area-infos">${propertyitem.infos}</p>
            </div>`
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






