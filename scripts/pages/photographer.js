import {
  getMedia,
  getPhotographeById,
  getPhotographers,
} from "../api/fetch.api.js";
import { handleLike, mediaFactory, updateTotalLikes } from "../factories/media.js";
import { infoDuPhotographe } from "../factories/media.js";
import { initModal } from "../utils/contactForm.js";
import { lightbox } from "../factories/media.js";
import {
  trierParDate,
  trierParPopularite,
  trierParTitre,
} from "../component/filter.js";
/* Cette fonction récupère tous les médias à l'aide de la fonction getMedia
 depuis l' API et les affiches sur la page photographer.html. Elle créer des éléments
  article pour chaque média et utilise la fonction Media(element).render() pour 
  générer le contenu HTML correspondant à chaque média.
*/function setupLightboxEventHandlers(
  index,
  media,
  photographe,
  lightboxContainer
) {
  const prevButton = lightboxContainer.querySelector("#prev");
  const nextButton = lightboxContainer.querySelector("#next");
  const closeButton = lightboxContainer.querySelector(".close-lightbox");

  if (closeButton) {
    closeButton.focus();
  }
  prevButton.addEventListener("click", () => navigateLightbox(-1));
  nextButton.addEventListener("click", () => navigateLightbox(1));
  closeButton.addEventListener("click", () => {
    lightboxContainer.style.display = "none";
    removeTrapFocus(); 
  });

  function navigateLightbox(direction) {
    index += direction;
    if (index < 0) index = media.length - 1;
    if (index >= media.length) index = 0;
    updateLightbox(index, media, photographe, lightboxContainer);
  }

  setupTrapFocus(lightboxContainer); 
}

function setupTrapFocus(lightboxContainer) {
  const focusableElements = lightboxContainer.querySelectorAll(
    ' button, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  lightboxContainer.addEventListener("keydown", function (event) {
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
}




function setupKeyboardNavigation( lightboxContainer) {
  window.addEventListener("keydown", (event) => {
    if (lightboxContainer.style.display === "block") {
      switch (event.key) {
        case "ArrowRight":
          document.querySelector("#next").click();
          break;
        case "ArrowLeft":
          document.querySelector("#prev").click();
          break;
        case "Escape":
          document.querySelector(".close-lightbox").click();
          break;
      }
    }
  });
}
const displayLightbox = (photographe, media) => {
  const container = document.querySelector(".medias_content");
  container.addEventListener("click", (event) => {
    const img = event.target;
    const listeMedia = container.querySelectorAll(".img_media");
    const isImageMedia = img.classList.contains("img_media");
    if (isImageMedia) {
      const index = Array.from(listeMedia).indexOf(img);
      const nodelightbox = lightbox(media[index], photographe.name);

      const lightboxContainer = document.querySelector(".lightbox_container");
      lightboxContainer.style.display = "block";
      lightboxContainer.innerHTML = nodelightbox.carousel;

      setupLightboxEventHandlers(index, media, photographe, lightboxContainer);
      setupKeyboardNavigation(index, media, photographe, lightboxContainer);
    }
  });
};



function updateLightbox(index, media, photographe, lightboxContainer) {
  const nodelightbox = lightbox(media[index], photographe.name);
  lightboxContainer.innerHTML = nodelightbox.carousel;
  setupLightboxEventHandlers(index, media, photographe, lightboxContainer);
}

/* Cette fonction récupère l'ID du photographe à partir des paramètres d'URL
 (photographeId) 
et utilise cet ID pour récupérer les médias spécifiques de ce photographe à l'aide
 de la fonction getMedia.
 Les médias récupérés sont affichés dans la console avec console.log(media).  */
async function init() {
  const params = new URLSearchParams(document.location.search);
  const idDuPhotographe = params.get("photographeId");
  const id = Number.parseInt(idDuPhotographe);
  const media = await getMedia(id);
  const root = document.querySelector(".medias_content");
  console.log(media);

  //element represente une occurence du tableau des medias
  const photographe = await getPhotographeById(id);

  root.innerHTML = "";
function addLikeEventListeners() {
  const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((button) => {
    button.addEventListener("click", handleLike);
  });
}





  media.forEach((element) => {
    const nodeMedia = mediaFactory(element, photographe.name).getMedia();
    const mediaContainer = document.createElement("div");
    mediaContainer.innerHTML = nodeMedia;
    root.appendChild(mediaContainer);
  });
 addLikeEventListeners()

 displayLightbox(photographe, media)
     updateTotalLikes();

  const listbox = document.querySelector(".listbox");

  listbox.addEventListener("change", function () {
    const critereDeTri = listbox.value;

    /*Triez les médias en fonction du critère de tri sélectionné*/
    if (critereDeTri === "date") {
      trierParDate(media);
    } else if (critereDeTri === "titre") {
      trierParTitre(media);
    } else if (critereDeTri === "popularite") {
      trierParPopularite(media);
    }
    root.innerHTML = "";
    function addLikeEventListeners() {
      const likeButtons = document.querySelectorAll(".like-button");
      likeButtons.forEach((button) => {
        button.addEventListener("click", handleLike);
      });
    }
    media.forEach((element) => {
      const nodeMedia = mediaFactory(element, photographe.name).getMedia();
      const mediaContainer = document.createElement("div");
      mediaContainer.innerHTML = nodeMedia;
      root.appendChild(mediaContainer);
    });
  addLikeEventListeners();
    
  });
  user(photographe);
  initModal();
}

function user(photographe) {
  const headerPresentation = document.querySelector(".photograph-header");
  const contenu = infoDuPhotographe(photographe);
  headerPresentation.innerHTML += contenu.getDom();
  console.log(headerPresentation);
}

// Appel de la fonction rend pour afficher tous les médias

// Appel de la fonction init pour récupérer les médias du photographe spécifié par l'ID
init();
