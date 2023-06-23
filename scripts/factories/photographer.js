function photographerFactory(data) {
    const { name, portrait } = data;
    const { city } = data;
    const { country } = data;
    const { tagline } = data;
    const { price } = data;




    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const englo = document.createElement("div");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement('p');
        p.textContent = city;
        const pays = document.createElement('p');
        pays.textContent = country;
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const prix = document.createElement('h6');
        prix.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(englo);
        englo.appendChild(p);
        englo.appendChild(pays);
        article.appendChild(tag);
        article.appendChild(prix);


        


        return (article);
    }
    return { name, picture, city, country, tagline, getUserCardDOM }
}