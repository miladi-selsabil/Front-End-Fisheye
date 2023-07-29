export function infoDuPhotographe(data){
  const {name, portrait, city, tagline} = data;
      const picture = `assets/photographers/${portrait}`;


  function getDom(){
      return `
        <div>
             <img src="${picture}"/>
            </a>
            <h2>${data.name}</h2>
            <div class="localisation">
                <p>${data.city}</p>
                <p>${data.tagline}</p>

            </div>
        </div>
    `;
  }
  return {name, portrait, city, tagline, getDom};
}

export function mediaFactory(data, photographerName) {
  const { image, title, likes, date, price } = data;
  const img = `./assets/photographers/${photographerName}/${image}`;
  
  function getMedia() {
    return `
      <div>
        <img class="img_media" src="${img}"/>
        <div class="detail_media">
        <div class="name_img">
          <p>${data.title}</p>
          <p>${data.likes}</p>
        </div>
          <p>${data.date}</p>
          <p>${data.price}</p>
        </div>
      </div>
    `;
  }
  

  return { img, title, likes, date, price, getMedia };
}
