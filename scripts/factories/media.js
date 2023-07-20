
import { Media } from "../component/artiste.js";

export function mediaFactory(data) {
  const { image, title, likes } = data;
  const img = `assets/photographers/${image}`;
  function getMedia() {
    const mediaElement = Media(data).render(); 
    return mediaElement;
  }

  return { img, title, likes, getMedia };
}
