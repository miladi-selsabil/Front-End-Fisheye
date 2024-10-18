![FishEye ](/assets/images/logo.png)

# FishEye 📷🎞️

![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/miladi-selsabil)

- <a href="#description-fr-">README en Français</a> - <a href="#en-description">English README</a>

## Description FR :

Ceci est un projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms](https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react)

> Créez un site accessible pour une plateforme de photographes
>
> #### Compétences évaluées :
>
> -   Développer une application web modulaire avec des design patterns 🛠️
> -   Assurer l'accessibilité d'un site web ♿
> -   Ecrire du code JavaScript maintenable 🧹
> -   Gérer les évènements d'un site avec JavaScript 🚀

### Situation (fictive) du projet :

Développeur junior dans une société de conseil spécialisée dans le développement de sites web et d’applications mobiles.

L’entreprise souhaite se lancer sur un nouveau projet avec un nouveau client : un site web permettant à des photographes indépendants de présenter leurs travaux, ayant comme priorité l’accessibilité pour permettre l’utilisation du site à un maximum de personnes.

Mon rôle a été de développer tout l’aspect Front-end du site à partir de maquettes approuvées par le designer et de mettre un point d’honneur sur l’accessibilité.

### Cahier des charges :

#### Page d'accueil :

-   Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure, leurs tags et une image miniature de leur choix.
-   Au clic sur un tag, la liste des photographes est filtrée.
-   Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.

#### Pages des photographes :

-   Affiche une galerie des travaux du photographe.
-   Les photographes peuvent montrer à la fois des photos et des vidéos.
    -   Dans le cas des vidéos, montrer une image miniature dans la galerie.
-   Chaque média comprend un titre et un nombre de likes.
    -   Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté.
    -   Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias.
-   Les médias peuvent être triés par popularité, date ou par titre.
-   Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox :
    -   Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
    -   Des boutons de navigation permettent de passer d'un élément média à l'autre.
-   Afficher un bouton pour contacter le photographe.
    -   Le formulaire de contact est une modale qui s'affiche par-dessus le reste.
    -   Il comprend des champs pour les noms, l'adresse électronique et le message.
    -   Plus tard, le bouton de contact enverra un message au photographe.
        Pour l'instant, afficher le contenu des trois champs dans les logs de la console.

#### Exigences supplémentaires :

-   Le site doit être responsive
-   Le site doit être le plus accessible possible :
    -   Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que possible.
    -   Lors de l’utilisation d’un élément personnalisé, utilisez des attributs ARIA si nécessaire.
    -   Le code doit passer les tests AChecker sans “known issue”.
    -   Toute la gestion des événements doit être configurée.

## Installation :

1. Téléchargez le dépôt en cliquant sur le bouton "Code" sur la page du dépôt et en sélectionnant "Download ZIP".

2. Extrayez le contenu du fichier ZIP dans un dossier sur votre ordinateur.

3. Ouvrez le dossier et double-cliquez sur le fichier HTML index pour le visualiser dans votre navigateur web (ou utilisez live-server sur Visual Studio Code, par exemple).

4. Pour effectuer des modifications, éditez les fichiers HTML, CSS ou JS à l'aide d'un éditeur de texte et enregistrez le fichier. Actualisez la page web dans votre navigateur pour voir la version mise à jour.

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Bootstrap](https://getbootstrap.com/) - Collection d'outils utiles à la création du design de sites et d'applications web
-   [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript) - Langage de programmation
-   [Google Fonts](https://fonts.google.com/) - Service d’hébergement de polices d’écritures pour le Web
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [Validateur W3C](https://validator.w3.org/) - Outils de détection des erreurs dans le code HTML et CSS
-   [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) - Outil d'évaluation des bonnes pratiques d'accessibilité
-   [AChecker](https://achecker.ca) - Outil d'évaluation des erreurs, performances et bonnes pratiques d'accessibilité

## Auteur :

**Selsabil Miladi** : [**GitHub**](https://github.com/miladi-selsabil) 

## Maquettes :

Lien des maquettes : https://www.figma.com/design/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0-1&node-type=canvas&t=HTirGGZVYMSzrca3-0

---

## EN Description:

This is a project carried out as part of the Front-End JavaScript React Developer training program at [OpenClassrooms](https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react).

> Create an accessible website for a platform of photographers
>
> #### Evaluated skills:
>
> -   Develop a modular web application with design patterns 🛠️
> -   Ensure website accessibility ♿
> -   Write maintainable JavaScript code 🧹
> -   Manage events on a website with JavaScript 🚀

### Project (fictional) situation:

Junior developer at a consulting firm specializing in web development and mobile applications.

The company wants to embark on a new project with a new client: a website allowing independent photographers to present their work, with a priority on accessibility to allow the site to be used by as many people as possible.

My role was to develop the entire front-end aspect of the site from approved mock-ups by the designer and to emphasize accessibility.

### Specifications:

#### Home page:

-   List of all photographers with their name, slogan, location, price/hour, tags, and a thumbnail image of their choice.
-   When clicking on a tag, the list of photographers is filtered.
-   When the user clicks on a photographer's thumbnail, they are taken to their page.

#### Photographers' Pages:

-   Display a gallery of the photographer's work.
-   Photographers can display both photos and videos.
    -   In the case of videos, show a thumbnail in the gallery.
-   Each media includes a title and a number of likes.
    -   When the user clicks on the "Like" icon, the displayed number of likes is incremented.
    -   The total number of likes for a photographer should correspond to the sum of the likes of each of their media.
-   Media can be sorted by popularity, date, or title.
-   When the user clicks on a media, it should open in a lightbox:
    -   When the lightbox is displayed, there is a cross in the corner to close the window.
    -   Navigation buttons allow switching from one media element to another.
-   Display a button to contact the photographer.
    -   The contact form is a modal that is displayed above the rest.
    -   It includes fields for names, email address, and message.
    -   Later, the contact button will send a message to the photographer.
        For now, display the contents of the three fields in the console logs.

#### Additional requirements:

-   The site must be responsive.
-   The site must be as accessible as possible:
    -   Use "semantic" HTML elements that describe their intention as much as possible.
    -   When using a custom element, use ARIA attributes if necessary.
    -   The code must pass AChecker tests without "known issues."
    -   All event handling must be configured.

## Installation:

1. Download the repository by clicking on the "Code" button on the repo page and selecting "Download ZIP."

2. Extract the contents of the ZIP file to a folder on your computer.

3. Open the folder and double-click on the index HTML file to view it in your web browser (or use live-server on Visual Studio Code for example).

4. To make changes, edit the HTML, CSS or JS files using a text editor and save the file. Refresh the web page in your browser to see the updated version.

That's it!

## Built With:

-   [Visual Studio Code](https://code.visualstudio.com/) - Text editor
-   [Bootstrap](https://getbootstrap.com/) - Collection of tools useful for designing websites and web applications
-   [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript) - programming language
-   [Google Fonts](https://fonts.google.com/) - Web font hosting service
-   [GitHub](https://github.com/) - Version control tool
-   [W3C Validator](https://validator.w3.org/) - Tool for detecting errors in HTML and CSS code
-   [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) - Accessibility best practices evaluation tool
-   [AChecker](https://achecker.ca) - Tool for evaluating accessibility errors, performance, and best practices

## Author:

**Selsabil Miladi**: [**GitHub**](https://github.com/miladi-selsabil) 

## Mockups:

Link to mockups: https://www.figma.com/design/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0-1&node-type=canvas&t=HTirGGZVYMSzrca3-0
