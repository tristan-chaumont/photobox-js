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
    promesse.then((rep) => insererDom(rep.data.photos));
}

/**
* Méthode privée permettant d'insérer les données dans le dom
*/
function insererDom(donnees){
    let  i = idGalerie*6-6;
    let gal = document.querySelector("#photobox-gallery");
    while(i<6*idGalerie && i < donnees.length){
        let image = donnees[i];
        console.log(image);
        let div = document.createElement("DIV");
        let divNom = document.createElement("DIV");
        let texte = document.createTextNode(""+image.photo.file);
        divNom.appendChild(texte);
        div.classList.add("vignette");
        let img  =document.createElement("IMG");
        img.setAttribute("data-img","https://webetu.iutnc.univ-lorraine.fr"+image.photo.original.href);
        img.setAttribute("data-uri","https://webetu.iutnc.univ-lorraine.fr"+image.links.self.href);
        console.log(image.photo.thumbnail.href);
        img.setAttribute("src","https://webetu.iutnc.univ-lorraine.fr"+image.photo.thumbnail.href);
        div.appendChild(img);
        div.appendChild(divNom);
        gal.appendChild(div);
        i++;
    }
}

export default{
    init : init,
    load : load
}