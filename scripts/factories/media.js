export function infoDuPhotographe(data) {
  const { id, name, portrait, city, tagline } = data;
  const picture = `assets/photographers/${portrait}`;

  function getDom() {
    return `
        <div class="contact_photographe">  
        
            <div class="localisation">
                <h2>${data.name}</h2>
                <p class="city">${data.city}, ${data.country}</p>
                <p class="tagline">${data.tagline}</p>

            </div>

              <button class="contact_button">Contactez-moi</button>

             <img class="picture_photographe" src="${picture}"/>
            </a>
          
        </div>
    `;
  }
  return { id, name, portrait, city, tagline, getDom };
}

export function mediaFactory(data, photographerName) {
  const { image, title, likes, date, price, video } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  const vid = `./assets/photographers/${photographerName}/${video}`;

  function getMedia() {
    let mediaContent;

    if (video) {
      mediaContent = `
        <a href="#" class="carte_media" tabindex="0">
          <video class="img_media" controls  tabindex="0
          ">
            <source src="${vid}" aria-label="${vid}" type="video/mp4">

          </video>
          <div class="detail_media">
            <div class="name_img">
              <p tabindex="0" aria-label="${data.title}">${data.title}</p>
               <div class="like">
            <p tabindex="0" aria-label="${data.likes}">${data.likes}</p>
            <button class="like-button"><i class="fas fa-heart"></i></button>
          </div>
            </div>
          </div>
        </a>
      `;
    } else {
       

      mediaContent = `
       <a href="#" class="carte_media" tabindex="0">
    <img class="img_media" aria-label="${img}" alt="${title}" src="${img}" data-lightbox-src="${img}" data-lightbox-title="${data.title}"/>
    <div class="detail_media">
      <div class="name_img">
        <p tabindex="0" aria-label="${data.title}">${data.title}</p>
      <div class="like">
            <p tabindex="0" aria-label="${data.likes}">${data.likes}</p>
            <button class="like-button" data-id="${data.id}"><i class="fas fa-heart"></i></button>
          </div>

      </div>
    </div>
  </a>
      `;
    }

    return mediaContent;
  }

  return { img, title, likes, date, price, video, getMedia };
}

export function lightbox(data, photographerName) {
  const { image, title, video } = data;

  function mediaElement() {
    if (image) {
      const imgPath = `./assets/photographers/${photographerName}/${image}`;
      return `<img class="lightbox-image" alt="${title}" src="${imgPath}" data-lightbox-src="${imgPath}" data-lightbox-title="${title}"/>`;
    } else if (video) {
      const videoPath = `./assets/photographers/${photographerName}/${video}`;
      return `<video class="lightbox-video" alt="${title}" controls>
                <source src="${videoPath}" type="video/mp4">
              </video>`;
    }
  }

  function carousel() {
    return `
      <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog">
        <button class="close-lightbox" aria-label="Fermer médias lightbox"><i class="fas fa-times"></i></button>
        <button class="lightbox-btn" id="next" type="button" aria-label="Photo suivante"><i class="fas fa-chevron-right"></i></button> 
        <button class="lightbox-btn" id="prev" type="button" aria-label="Photo précédente"><i class="fas fa-chevron-left"></i></button>
        <div class="lightboxcontainer">
          ${mediaElement()} 
        </div>
      </div>
    `;
  }

  

  return { image, video, carousel: carousel() };
}
export function updateTotalLikes(mediaArray) {
  const totalLikesElement = document.querySelector(".total-likes");
  if (totalLikesElement) {
    const totalLikes = mediaArray.reduce((acc, media) => acc + media.likes, 0);
    totalLikesElement.textContent = totalLikes;
  } else {
    console.error("The total likes element was not found in the DOM.");
  }
}

export function handleLike(event, mediaArray) {
  const mediaElement = event.target.closest(".media-container");
  const likeCountElement = mediaElement.querySelector(".like-count");
  const mediaId = mediaElement.dataset.mediaId;

  // Find the media item in the array
  const media = mediaArray.find((m) => m.id.toString() === mediaId);

  // Check if media is found and has not been liked yet
  if (media && !media.liked) {
    media.likes += 1;
    media.liked = true; // Set the liked property to true
    likeCountElement.textContent = media.likes; // Update the like count in the DOM

    // Now update the total likes display
    updateTotalLikes(mediaArray);
  } else if (!media) {
    console.error(`Media item with ID ${mediaId} not found.`);
  }
}



