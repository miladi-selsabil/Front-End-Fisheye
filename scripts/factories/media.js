import { Media } from "../component/artiste.js";

export function mediaFactory(data) {
  const { photographerId, image } = data;
  const { title } = data;
  const { likes } = data;
  const { date } = data;

  const img = `assets/photographers/${image}`;

  function getMedia() {
    const artiste = document.createElement("article");
    artiste.innerHTML = Media(data).render();
    return artiste;
  }
  return { photographerId, img, title, likes, date, getMedia };
}
