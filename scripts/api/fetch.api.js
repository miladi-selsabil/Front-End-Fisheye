const PATH_URL = "././data/photographers.json";

async function getPhotographers() {
  const response = await fetch(PATH_URL);
  const data = await response.json();
  return data.photographers;
}

//  la fonction getMedia effectue une requête fetch pour récupérer les données à partir du fichier JSON photographers.json, puis filtre les médias du photographe spécifié par id.
async function getMedia(id) {
  const response = await fetch(PATH_URL);
  const data = await response.json();
  const media = data.media;
  //filtrer les médias associés à l'ID du photographe.
  const mediaDuPhotographe = media.filter((media) => media.photographerId === id);
  return mediaDuPhotographe;
}


async function getPhotographeById(photographerId) {
   const response = await fetch(PATH_URL);
  const data = await response.json();
  const photographers= data.photographers;
  const photographe = photographers.find((item) =>item.id === photographerId);
  return photographe
}

export { getPhotographers, getMedia, getPhotographeById };
