
import { getMedia } from "../api/fetch.api.js";
import { mediaFactory } from "../factories/media.js"; 
/* Cette fonction récupère tous les médias à l'aide de la fonction getMedia depuis l' API et les affiche sur la page photographer.html. Elle crée des éléments article pour chaque média et utilise la fonction Media(element).render() pour générer le contenu HTML correspondant à chaque média.
*/
async function rend() {
  const root = document.querySelector(".medias_content");
  const medias = await getMedia();
console.log(medias)


  medias.forEach((element) => {
    // mediaFactory pour générer le contenu HTML du média
    const media = mediaFactory(element);
    //Ajoutez du média au DOM
    root.appendChild(media.getMedia());
  });
}

/* Cette fonction récupère l'ID du photographe à partir des paramètres d'URL (photographeId) et utilise cet ID pour récupérer les médias spécifiques de ce photographe à l'aide de la fonction getMedia. Les médias récupérés sont affichés dans la console avec console.log(media).  */
async function init() {
  const params = new URLSearchParams(document.location.search);
  const idDuPhotographe = params.get("photographeId");
  const id = Number.parseInt(idDuPhotographe);
  const media = await getMedia(id);
  const root = document.querySelector(".medias_content");
  media.forEach((element) => {
    // mediaFactory pour générer le contenu HTML du média
    const nodeMedia = mediaFactory(element);
    root.innerHTML += nodeMedia.getMedia();
    const ajoutMedia = media.find((media) => media.photographerId === id);
    //Ajoutez du média au DOM
   /* root.appendChild(media.getMedia());*/
  });
  console.log(media);
}

// Appel de la fonction rend pour afficher tous les médias

rend();

// Appel de la fonction init pour récupérer les médias du photographe spécifié par l'ID
init();
