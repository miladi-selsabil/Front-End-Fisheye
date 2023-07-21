function Media(mediaPhotographer) {
  const img = `assets/photographers/${mediaPhotographer.photographerName}/${mediaPhotographer.image}`;
  return {
    render: () => {
      return `
        <div>

            <img src="${img}"/>
            <div class="title-img">
                <p>${mediaPhotographer.title}</p>
                <p>${mediaPhotographer.likes}</p>
                <p>${mediaPhotographer.date}</p>
                <p>${mediaPhotographer.price}</p>




            </div>
        </div>
    `;
    },
  };
}
/*va me permettre d'utiliser cette fonction dans d'autres fichiers */
export { Media };
