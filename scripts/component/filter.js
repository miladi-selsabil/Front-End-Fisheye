

// Fonction de tri par date (du plus récent au plus ancien)
export function trierParDate(media) {
  media.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Tri décroissant par date
  });
  console.log(trierParDate(media));
}

