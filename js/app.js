/* https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/doc */

'use strict'

import * as photoloader from './photoloader.js';
import * as galery from './gallery.js';

/*
* méthode lancée lors du chargement de la page, initialise l'adresse du serveur hébergeant l'api
* et charge la liste des objets de l'uri
*/
export function start() {
    photoloader.init("https://webetu.iutnc.univ-lorraine.fr");
    photoloader.loadObjects("/www/canals5/photobox/photos/?offset=8&size=12");
}