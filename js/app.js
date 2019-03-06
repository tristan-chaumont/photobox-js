/* https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/doc */

import photoloader from './photoloader.js';
import galery from './gallery.js';

let load;

/*
* Méthode lancée lors du chargement de la page. Initialise l'adresse du serveur hébergeant l'api
* et charge la liste des objets de l'uri.
* Associe le click du bouton au chargement des images.
*/
export function start() {
    photoloader.init("https://webetu.iutnc.univ-lorraine.fr");
    photoloader.loadObjects("/www/canals5/photobox/photos/?offset=8&size=12");
    galery.init("1");
    galery.load();
    load = document.querySelector("#load_gallery");
    load.addEventListener("click", () => {
         
    });
    
}