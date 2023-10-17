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
    })
  })
  



