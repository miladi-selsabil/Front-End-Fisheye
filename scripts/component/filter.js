export function trierParDate(media) {
  media.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  console.log("date", media);
}
export function trierParTitre(media) {
  media.sort((a, b) => {
    const titreA = a.title.toLowerCase();
    const titreB = b.title.toLowerCase();
    if (titreA < titreB) {
      return -1;
    }
    if (titreA > titreB) {
      return 1;
    }
    return 0;
  });

  console.log("Titres triés", media);
}
export function trierParPopularite(media) {
  media.sort((a, b) => {
    const likesA = a.likes;
    const likesB = b.likes;
    return likesB - likesA;
  });
  console.log("Popularites triés", media);
}
