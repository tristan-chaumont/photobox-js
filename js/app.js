/* https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/doc */

'use strict'

import * as photoloader from './photoloader.js';

export function start() {
    photoloader.loadObjects("https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos/?offset=8&size=12");
}