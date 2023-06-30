//Mettre le code JavaScript lié à la page photographer.html

import { getMedia } from "../api/fetch.api.js";
import { Media } from "../component/artiste.js";

async function rend() {
  const root = document.querySelector("#contact_modal");
  const medias = await getMedia();

  medias.forEach((element) => {
    const artiste = document.createElement("article");
    artiste.innerHTML = Media(element).render();
    root.appendChild(article);
  });
}

rend();