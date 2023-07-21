
import { Media } from "../component/artiste.js";

/*La fonction utilise le paramètre data pour extraire les informations nécessaires pour créer l'objet de média, et le paramètre photographerName est utilisé pour construire le chemin de l'image. */
export function mediaFactory(data, photographerName) {
  const { image, title, likes, date, price } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  function getMedia() {
    const mediaElement = Media(data).render(); 
    return mediaElement;
  }

  return { img, title, likes, date, price,  getMedia };
}
