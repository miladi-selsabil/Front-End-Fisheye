import { getPhotographers } from "../api/fetch.api.js";
import { Card } from "../component/card.js";

   async function init() {
     // Récupère les datas des photographes
     const root = document.querySelector(".photographer_section");
     const photographers = await getPhotographers();

     photographers.forEach((element) => {
       const article = document.createElement("article");
       article.innerHTML = Card(element).render();
       root.appendChild(article);
     });
   }

  
   init();