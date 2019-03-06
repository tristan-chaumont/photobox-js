'use strict'
import * as loader from './photoloader.js';
var idGalerie;

/**
* Méthode d'initialisation qui prend l'identifiant de la galerie
*/
let init = (id) => {
    idGalerie = id;
}

/**
* Méthode permettant de charger les données dans le dom
*/
let load = () => {
    
}

/**
* Méthode privée permettant d'insérer les données dans le dom
*/
function insererDom(donnees){
    
}

export default{
    init : init;
    init : load;
}