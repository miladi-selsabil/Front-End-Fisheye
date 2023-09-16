export function infoDuPhotographe(data){
  const {id, name, portrait, city, tagline} = data;
      const picture = `assets/photographers/${portrait}`;


  function getDom(){
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
  return {id, name, portrait, city, tagline, getDom};
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
          <video class="video_media" controls  tabindex="0">
            <source src="${vid}" aria-label="${vid}" type="video/mp4">

          </video>
          <div class="detail_media">
            <div class="name_img">
              <p tabindex="0" aria-label="${data.title}">${data.title}</p>
              <div class="like">
                <p tabindex="0" aria-label="${data.likes}" >${data.likes}</p>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </a>
      `;
    }else{

     mediaContent = `
        <a href="" class="carte_media" tabindex="0">
          <img class="img_media" aria-label="${img}" alt="${title}" src="${img}" data-lightbox-src="${img}" data-lightbox-title="${data.title}"/>
          <div class="detail_media">
            <div class="name_img">
              <p tabindex="0" aria-label="${data.title}">${data.title}</p>
              <div class="like">
                <p tabindex="0" aria-label="${data.likes}">${data.likes}</p>
                <i class="fas fa-heart"></i>
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

export function lightbox(data){
  const { image, title,  video } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  const vid = `./assets/photographers/${photographerName}/${video}`;
  function carousel(){
    return`<div id="lightbox" aria-hidden="true" role="dialog">
          <button class="close-lightbox" aria-label="Fermer médias lightbox"><i class="fas fa-times"></i></button>
          <button class="lightbox-btn" id="prev" type="button" aria-label="Photo précédente"><i class="fas fa-chevron-left"></i></button>
          <img class="lightbox-image" alt="" src="${img}">
          <button class="lightbox-btn" id="next" type="button" aria-label="Photo suivante"><i class="fas fa-chevron-right"></i></button>
        </div>`;
    }
    return { img, vid, title, carousel };

}
