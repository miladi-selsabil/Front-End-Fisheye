function Card(photographe) {
    const picture = `assets/photographers/${photographe.portrait}`;
  return {
    render: () => {
      return `
        <div>
            <img src="${picture}"/>
            <h2>${photographe.name}</h2>
            <div>
                <p>${photographe.city}</p>
                <p>${photographe.country}</p>
            </div>
            <p>${photographe.tagline}</p>
            <h6>${photographe.price}</h6>
        </div>
    `;
    },
  };
}
/*va me permettre d'utiliser cette fonction dans d'autres fichiers */
export { Card }; 