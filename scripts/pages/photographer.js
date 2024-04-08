import {
  getMedia,
  getPhotographeById,
  getPhotographers,
} from "../api/fetch.api.js";
import { handleLike, mediaFactory } from "../factories/media.js";
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
*/

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



  media.forEach((element) => {
    const nodeMedia = mediaFactory(element, photographe.name).getMedia();
    const mediaContainer = document.createElement("div");
    mediaContainer.innerHTML = nodeMedia;
    root.appendChild(mediaContainer);
    const likeButtons = mediaContainer.querySelectorAll(".like-button");
    likeButtons.forEach((button) => {
      button.addEventListener("click", handleLike);
    });
  });
  const mediaImages = root.querySelectorAll(".img_media");
  mediaImages.forEach((img, index) => {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      /* Générer le contenu de la lightbox pour le média cliqué*/
      const nodelightbox = lightbox(media[index], photographe.name);

      /* Sélectionner le conteneur de la lightbox et injecter le nouveau contenu*/
      const lightboxContainer = document.querySelector(".lightbox_container");
      lightboxContainer.style.display = "block";
      lightboxContainer.innerHTML = nodelightbox.carousel;

      
      function setupLightboxEventHandlers(index, media, photographe, lightboxContainer ) {
        const prevButton = lightboxContainer.querySelector("#prev");
        const nextButton = lightboxContainer.querySelector("#next");
        const closeButton = lightboxContainer.querySelector(".close-lightbox");

        if (prevButton) {
          prevButton.addEventListener("click", () => {
            if (index > 0) {
              index--; 
            } else {
              index = media.length - 1; 
            }
            updateLightbox(index, media, photographe, lightboxContainer);
          });
        }

        if (nextButton) {
          nextButton.addEventListener("click", () => {
            if (index < media.length - 1) {
              index++;
            } else {
              index = 0; 
            }
            updateLightbox(index, media, photographe, lightboxContainer);
          });
        }

       
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            lightboxContainer.style.display = "none"; 
          });
        }
      }

      /* Cette fonction met à jour le contenu de la lightbox et réinitialise les gestionnaires d'événements*/
      function updateLightbox(index, media, photographe, lightboxContainer) {
        const nodelightbox = lightbox(media[index], photographe.name);
        lightboxContainer.innerHTML = nodelightbox.carousel; 
        setupLightboxEventHandlers(
          index,
          media,
          photographe,
          lightboxContainer
        ); 
      }

      /* Initialisez la lightbox en attachant les gestionnaires d'événements
       pour la première fois après avoir injecté le contenu initial dans le lightboxContainer*/
      setupLightboxEventHandlers(0,media,photographe,
        document.querySelector(".lightbox_container")
      );
    });
  });
 

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
    media.forEach((element) => {
      const nodeMedia = mediaFactory(element, photographe.name).getMedia();
      const mediaContainer = document.createElement("div");
      mediaContainer.innerHTML = nodeMedia;
      root.appendChild(mediaContainer);
    });
    const mediaImages = root.querySelectorAll(".img_media");
    mediaImages.forEach((img, index) => {
      img.addEventListener("click", function (e) {
        e.preventDefault();
        const nodelightbox = lightbox(media[index], photographe.name);
        const lightboxContainer = document.querySelector(".lightbox_container");
        lightboxContainer.innerHTML = nodelightbox.carousel;
      });
    });
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
