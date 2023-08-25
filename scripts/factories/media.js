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
  const { image, title, likes, date, price } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  
  function getMedia() {
    return `
      <div class="carte_media">
        <img class="img_media" src="${img}"/>
        <div class="detail_media">
        <div class="name_img">
          <p>${data.title}</p>
          <div class="like">
          <p>${data.likes}</p>
          <i class="fas fa-heart"></i>
          </div>
        </div>
        </div>
      </div>
    `;
  }
  

  return { img, title, likes, date, price, getMedia };
}
