/**
 *  Initialisation  swiper 1
 */
  var mySwiper1 = new Swiper(".mySwiper1", {
    a11y: {
      enabled: true, //active l'accesssibilité
      containerMessage: "Appartements vedettes à vendre", //c'est un aria-label
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // rajoute tabindex = 0 donc l'élément devient focusable
    },  
    autoplay: {
      delay: 5000,
      // pauseOnMouseEnter: true, // si la souris est sur le caroussel la lecture automatique sera en pause 
      // disableOnInteraction: false, //Réglé sur false et la lecture automatique ne sera pas désactivée après les interactions de l'utilisateur
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
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
  var mySwiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    a11y: {
      enabled: true,
      containerMessage: "Témoignages de nos clients",
      nextSlideMessage: "diapositive suivante",
      prevSlideMessage: "Diapositive précédente",
    },
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
      // pauseOnMouseEnter: true,
      // disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });



  /** 
   * Bouton de controle de la lecture automatique des diapositives des caroussels
   */ 

  const btnRotationControls = document.querySelectorAll(".slideBtn__rotation-controls");
  let swipers = document.querySelectorAll(".swiper");
 


  function pauseSlide(curenntBtn, currentSlide) {
    curenntBtn.classList.add("slideBtn__js-show-pause-btn");
    // // mySwiper1
    if (currentSlide.classList.contains("mySwiper1")) {
      mySwiper1.autoplay.stop(); 
    }
    // mySwiper2
     if (currentSlide.classList.contains("mySwiper2")) {
      mySwiper2.autoplay.stop();     
    }
    // mySwiper2
    if (currentSlide.classList.contains("mySwiper2")) {
      mySwiper2.autoplay.stop();     
    } 
  }

  function playSlide(curenntBtn, currentSlide) {
    curenntBtn.classList.remove("slideBtn__js-show-pause-btn");
    // // mySwiper1
    if (currentSlide.classList.contains("mySwiper1")) {   
      mySwiper1.autoplay.start(); 
    }
    // mySwiper2
    if (currentSlide.classList.contains("mySwiper2")) {   
      mySwiper2.autoplay.start(); 
    }
    // mySwiper2
    if (currentSlide.classList.contains("mySwiper2")) {   
      mySwiper2.autoplay.start(); 
    }
  }


// Appel les fonctions pauseSlide et playSlide lors d'un clic sur le bouton
// des slides de la page d'accueil
btnRotationControls.forEach(btnRotationControl => {
  btnRotationControl.addEventListener("click", function () {
    let slide = btnRotationControl.parentNode;
    if (!btnRotationControl.classList.contains("slideBtn__js-show-pause-btn")) {
      pauseSlide(btnRotationControl, slide);
    }
    else{
      playSlide(btnRotationControl, slide)
    }  
  })

});




  







 

  



  



  