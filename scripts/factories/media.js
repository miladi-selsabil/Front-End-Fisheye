export function infoDuPhotographe(data) {
  const { id, name, portrait, city, tagline, price} = data;
  const picture = `assets/photographers/${portrait}`;

  function getDom() {
    return `
        <div class="contact_photographe">  
        
            <div class="localisation">
                <h2>${data.name}</h2>
                <p class="city">${data.city}, ${data.country}</p>
                <p class="tagline">${data.tagline}</p>

            </div>

              <button class="contact_button" aria-label="Contactez-moi">Contactez-moi</button>

             <img class="picture_photographe" alt="${data.name}"  src="${picture}"/>
            </a>
          
        </div>
    `;
  }
  return { id, name, portrait, city, tagline, price, getDom };
}

export function mediaFactory(data, photographerName) {
  const { image, title, likes, date, price, video } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  const vid = `./assets/photographers/${photographerName}/${video}`;

  function getMedia() {
    let mediaContent;

    if (video) {
      mediaContent = `
          <article  class="carte_media" tabindex="0">
          <video class="img_media" tabindex="0">
            <source src="${vid}" type="video/mp4">
           
          </video>
          <div class="detail_media">
            <div class="name_img">
              <p tabindex="0" aria-label="${data.title}">${data.title}</p>
              <div class="likes-container">
              <p class="like-count" data-id="${data.id}" aria-label="${data.likes}">${data.likes}</p>
              <button type="button" data-bs-toggle="button" class="like-button" data-id="${data.id}" aria-label="Like">
                <span role="img" aria-label="Like" class="fas fa-heart"></span>
              </button>
            </div>
            </div>
          </div>
        </article>
        <script>
          const videoElement = document.querySelector('.img_media');
          videoElement.addEventListener('mouseenter', function() { videoElement.play(); });
          videoElement.addEventListener('mouseleave', function() { videoElement.pause(); });
        </script>
      `;
    } else {
       


      mediaContent = `
       <article  class="carte_media "tabindex="0"  data-lightbox-src="${img}" data-lightbox-title="${data.title}">
    
    <img class="img_media" tabindex="0"  alt="${title}" src="${img}"/>
    <div class="detail_media">
      <div class="name_img">
        <p tabindex="0" aria-label="${data.title}">${data.title}</p>
      <div class="likes-container">
        <p class="like-count" data-id="${data.id}" aria-label="${data.likes}">${data.likes}</p>
        <button type="button" data-bs-toggle="button" class="like-button" data-id="${data.id}"  aria-label="Like">
          <span role="img" aria-label="Like" class="fas fa-heart"></span>
        </button>
      </div>
      </div>
    </div>
  </article>
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
      return `
      <div class="lightbox-body">
      <img class="lightbox-image" alt="${title}" src="${imgPath}" data-lightbox-src="${imgPath}"  data-lightbox-title="${title}"/>
        <p tabindex="0" aria-label="${data.title}">
              ${data.title}
            </p></div>;`;
    } else if (video) {
      const videoPath = `./assets/photographers/${photographerName}/${video}`;
      return `
      <div class="lightbox-body">
      <video class="lightbox-video" alt="${title}" controls>
                <source src="${videoPath}" type="video/mp4">
              </video>
               <p tabindex="0" aria-label="${data.title}">
              ${data.title}
            </p></div>`;
    }
          

  }

  function carousel() {
    return `
      <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog">
        <button class="close-lightbox" aria-label="Fermer médias lightbox"><span role="button" aria-label="Close" class="fas fa-times"></span></i></button>
        <button class="lightbox-btn" id="next" type="button" aria-label="Photo suivante" ><span role="button" aria-label="Next" class="fas fa-chevron-right"></span></i></button> 
        <button class="lightbox-btn" id="prev" type="button" aria-label="Photo précédente"><span role="button" aria-label="Previous" class="fas fa-chevron-left"></span></button>
        <div class="lightboxcontainer">
          ${mediaElement()} 
        </div>
      </div>
    `;
  }

  

  return { image, video, carousel: carousel() };
}

export function handleLike(event) {
  event.preventDefault();
  const button = event.currentTarget;
  const mediaId = button.getAttribute("data-id");
  const likeElement = document.querySelector(
    `.like-count[data-id="${mediaId}"]`
  );
  let likes = parseInt(likeElement.innerText);

  if (!button.classList.contains("liked")) {
    likes++;
    button.classList.add("liked");
  } else {
    likes--;
    button.classList.remove("liked");
  }

  likeElement.innerText = likes;
  updateTotalLikes();
}

export function updateTotalLikes() {
  const likesElements = document.querySelectorAll(".like-count");
  let totalLikes = 0;
  let totalPrice = 0;

  likesElements.forEach(element => {
    totalLikes += parseInt(element.textContent, 10);
  });


  const totalLikesContainer = document.querySelector(".total-likes");
  totalLikesContainer.textContent = `${totalLikes}  ${totalPrice}
  € / jour`;
  console.log("---", totalPrice)
}
