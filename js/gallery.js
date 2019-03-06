'use strict'
import loader from './photoloader.js';
//id de la page de la galerie à partir de 1 
let idGalerie;

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
    let promesse = loader.loadObjects("/www/canals5/photobox/photos/?offset=8&size=12"); 
}

/**
* Méthode privée permettant d'insérer les données dans le dom
*/
function insererDom(donnees){
    
}

export default{
    init : init,
    load : load
}