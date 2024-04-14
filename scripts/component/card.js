function Card(photographe) {
    const picture = `assets/photographers/${photographe.portrait}`;
  return {
    render: () => {
      return `
        <div aria-label="${photographe.name}" >
            <a class="card-id" href ="photographer.html?photographeId=${photographe.id}">
             <img src="${picture}" alt=""/>
        
            <h2>${photographe.name}</h2>
            <div class="localisation">
                <p>${photographe.city}, ${photographe.country}</p>
            </div>
            <p class="tagline">${photographe.tagline}</p>
            <p class="prix">${photographe.price} €</p>    </a>
        </div>
    `;
    },
  };
}
/*va me permettre d'utiliser cette fonction dans d'autres fichiers */
export { Card }; 