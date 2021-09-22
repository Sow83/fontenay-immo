// Menu hamburger
const buttonHamburger = document.querySelector(".header__button-hamburger");
const buttonColse = document.querySelector(".header__button-close");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".header__logo");

// Ouvre la navigation(menu hamburger) et fait apparaitre le logo
buttonHamburger.addEventListener("click", function () {
    nav.classList.add("nav__show-nav");
    logo.classList.add("header__show-logo");
    buttonHamburger.classList.add("header__hidden-buttonHamburger");
});
// Ferme la navigation(menu hamburger) et enlève la position fixed du logo
// pour que le display flex initial du header-head s'applique
buttonColse.addEventListener("click", function () {
    nav.classList.remove("nav__show-nav");
    logo.classList.remove("header__show-logo");
    buttonHamburger.classList.remove("header__hidden-buttonHamburger");

});

//  Initialisation du swiper 1
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

//  Initialisation du swiper 2

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

//  Initialisation du swiper 3

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


