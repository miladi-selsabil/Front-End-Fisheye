const PATH_URL = "././data/photographers.json";

async function getPhotographers() {
  const response = await fetch(PATH_URL);
  const data = await response.json();
  return data.photographers;
}

export { getPhotographers };

async function getMedia(od) {
  const response = await fetch(PATH_URL);
  const data = await response.json("id");
  const params = new URLSearchParams(document.location.search);
  const noms = pieces.filter((id) => id.${mediaPhotographer.id});
  return noms.data.media;
}

export { getMedia };


