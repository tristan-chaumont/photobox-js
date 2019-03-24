'use strict'
import loader from './photoloader.js';
import lightbox from './lightbox.js';
//id de la page de la galerie à partir de 1 
//let nombre d'images par page
let nbImage = 9;
let idGalerie;
let pageActu = "";
//pagePrecedente
let pagePrec="";
//pageSuivante
let pageSuiv = "";
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
    let promesse = "";
    if(pageActu == "") promesse = loader.loadObjects("/www/canals5/photobox/photos/?offset=0&size="+nbImage);
    else promesse = loader.loadObjects(pageActu);
    promesse.then((rep) => {
        pagePrec = rep.data.links.prev.href;
        pageSuiv = rep.data.links.next.href;
        insererDom(rep.data.photos);
    });
}

/**
* Supprimer les childs d'un éléments
*/
function deleteChild(elem){
    console.log(elem);
    elem.remove();
    let div = document.createElement("DIV");
    div.classList.add("gallery-container");
    div.id="photobox-gallery";
    document.querySelector("#gallery").appendChild(div);
    return elem;
}

/**
* Méthode privée permettant d'insérer les données dans le dom
*/
function insererDom(donnees){
    let  i = 0;
    deleteChild( document.querySelector("#photobox-gallery"));
    let gal = document.querySelector("#photobox-gallery");
    while(i<nbImage && i < donnees.length){
        let image = donnees[i];
        let div = document.createElement("DIV");
        let divNom = document.createElement("DIV");
        let texte = document.createTextNode(image.photo.titre);
        divNom.appendChild(texte);
        div.classList.add("vignette");
        let img  =document.createElement("IMG");
        img.setAttribute("data-img","https://webetu.iutnc.univ-lorraine.fr"+image.photo.original.href);
        img.setAttribute("data-uri","https://webetu.iutnc.univ-lorraine.fr"+image.links.self.href);
        img.setAttribute("data-title", image.photo.titre);
        img.setAttribute("src","https://webetu.iutnc.univ-lorraine.fr"+image.photo.thumbnail.href);
        img.setAttribute("data-id",i);
        //on donne l'id de la vignette
        div.appendChild(img);
        div.appendChild(divNom);
        gal.appendChild(div);
        i++;
    }
    //on ajoute le listener permettant de se mettre en plein écran (lightbox) aux différentes vignettes
    lightbox.lightbox_overview();
}
    
/**
* Methode permettant de passer à la page suivante
*/
let suivant = () => {
    idGalerie++;
    pageActu=pageSuiv;
    console.log(pageActu)
    load();
}   

let precedent = () =>{
    if(idGalerie !=0){
        idGalerie--;
       pageActu=pagePrec;
       load(); 
    }
}
    

export default{
    init : init,
    load : load,
    precedent : precedent,
    suivant : suivant
}