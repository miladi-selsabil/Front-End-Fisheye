

const form = document.getElementById("inscription");
export function initModal(photographer) {
  const closeBouton = document.querySelector(".close");
  const bouton = document.querySelector(".contact_button");
  bouton.addEventListener("click", () => displayModal());
  closeBouton.addEventListener("click", () => closeModal());
  const nameElement = document.getElementById("photographer-name");
  if (nameElement) {
    nameElement.textContent = photographer.name;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (submitEvent()) {
        closeModal();
        displayFormData();
  
     closeModal();
    } else {
      console.log("le formulaire est incomplet ");
    }
    console.log(formValid);
  });
}
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const focusableElements = Array.from(
    modal.querySelectorAll(
      'input, textarea, button, [tabindex]:not([tabindex="-1"])'
    )
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  firstElement.focus();

  modal.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault(); 
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault(); 
          firstElement.focus(); 
        }
      }
    }
  });
setTimeout(() => {
  const closeButton = modal.querySelector(".close");
  if (closeButton) {
    closeButton.focus();

    closeButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        modal.style.display = "none";
      }
    });
  } else {
    console.error("Close button not found");
  }
}, 0);

}


function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
function displayFormData(data) {
  const formData = new FormData(form);
  for(const [key, value] of formData.entries()){
    console.log(`${key}: ${value}`);
  }
}

/*function pour envoi du formulaire si toute les conditions de la fonction submit 
sont remplis le formulaire est envoyer est un message de validation apparait */

const regexName = new RegExp("^[A-Za-z.\\-\\_]{2,20}$");
const regexEmail = new RegExp(
  "^[A-Za-z0-9.\\_]+[@]{1}[A-Za-z0-9.\\-\\_]+[.]{1}[a-z]{2,10}$"
);

const fields = document.querySelectorAll(".text-control");
const fieldsError = document.querySelectorAll("error");

let formValid = true;

export function submitEvent() {
  Array.from(fieldsError).forEach((errorNode) => {
    errorNode.innerHTML = "";
  });

  /*on recupere tout les champs input on va les recupere grace a 
  leur id et on venir recuperer le parent des  input  */
  Array.from(fields).forEach((nodeElement) => {
    const type = nodeElement.getAttribute("id");
    const parent = nodeElement.parentNode;
    const errorNode = parent.querySelector(".error");
    switch (type) {
      case "first-name":
        /*On utilisera test() dès qu'on souhaite savoir si une partie d'une chaîne de 
        caractères correspond à une expression rationnelle elle renvoie true ou false */
        if (!regexName.test(nodeElement.value)) {
          errorNode.innerHTML = "Le prenom est incorrect";
          formValid = false;
        }
        break;
      case "name":
        if (!regexName.test(nodeElement.value)) {
          errorNode.innerHTML = "Le nom est incorrect";
          formValid = false;
        }
        break;
      case "email":
        if (!regexEmail.test(nodeElement.value)) {
          errorNode.innerHTML = "l'email est incorrect";
          formValid = false;
        }
        break;
      case "message":
        if ((nodeElement.value == "")) {
          errorNode.innerHTML = "le champs message est vide";
          formValid = false;
        }
        break;
    }
  });
  return formValid;
}

/*function initEvent qui va permettre de verifier si les conditions du champs sont 
respecter sans envoyer le formulaire elle renvoie un message d'erreur au moment 
de changer et de passer au champs suivant 
*/
function initEvent() {
  Array.from(fieldsError).forEach((errorNode) => {
    errorNode.innerHTML = "";
  });
  Array.from(fields).forEach((nodeElement) => {
    const type = nodeElement.getAttribute("id");
    const parent = nodeElement.parentNode;
    const errorNode = parent.querySelector(".error");
    switch (type) {
      case "first-name":
        nodeElement.addEventListener("change", function (event) {
          if (!regexName.test(nodeElement.value)) {
            errorNode.innerHTML = "Le prenom est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "name":
        nodeElement.addEventListener("change", function (event) {
          if (!regexName.test(nodeElement.value)) {
            errorNode.innerHTML = "Le nom est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "email":
        nodeElement.addEventListener("change", function (event) {
          if (!regexEmail.test(nodeElement.value)) {
            errorNode.innerHTML = "L'email est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "message":
        nodeElement.addEventListener("change", function (event) {
          if ((nodeElement.value == "")) {
            errorNode.innerHTML = "le champs message est vide";
          } else {
            errorNode.innerHTML = "";
          }
          console.log(message);
        });
        break;
    }
  });
  return formValid;
}

initEvent();
