import { Card } from "../component/card.js";

export function photographerFactory(data) {
    const { name, portrait } = data;
    const { city } = data;
    const { country } = data;
    const { tagline } = data;
    const { price } = data;

    

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML=Card(data).render()
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }

}
