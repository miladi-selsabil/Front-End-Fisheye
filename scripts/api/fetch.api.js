const PATH_URL = "././data/photographers.json";
const URL = "././data/media.json";

async function getPhotographers() {
  const response = await fetch(PATH_URL);
  const data = await response.json();
  return data.photographers;
}

export { getPhotographers };

async function getMedia() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.media;
}

export { getMedia };


