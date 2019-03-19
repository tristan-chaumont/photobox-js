/* https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/doc */

import photoloader from './photoloader.js';
import gallery from './gallery.js';

let load, isLoad = false;

/*
* Méthode lancée lors du chargement de la page. Initialise l'adresse du serveur hébergeant l'api
* et charge la liste des objets de l'uri.
* Associe le click du bouton au chargement des images.
*/
export function start() {
    photoloader.init("https://webetu.iutnc.univ-lorraine.fr");
    photoloader.loadObjects("/www/canals5/photobox/photos/?offset=8&size=12");
    load = document.querySelector("#load_gallery");
    load.addEventListener("click", () => {
        if(!isLoad) {
            gallery.init(1);
            gallery.load();
            isLoad = true;
        }
    });
    document.querySelector("#previous").addEventListener("click", () => {
       gallery.precedent(); 
    });
    document.querySelector("#next").addEventListener("click", () => {
       gallery.suivant(); 
    });
    
}