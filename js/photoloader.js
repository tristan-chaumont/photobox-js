'use strict'

let serveur;
/*
* initialise la variable serveur avec l'adresse du serveur hébergeant l'api
*/
let init = (server_url) => {
    serveur = server_url;
}

/*
* méthode d'affichage d'une erreur
*/
let show_erreur()=>{
    console.log("Erreur de chargement");
}

/*
* charge la liste des images via l'uri fournie
*/
let loadObjects = (uri) => {
    return axios.get(serveur + uri, {
        responseType: 'json',
        withCredentials: true
    }).catch(show_erreur);
}

export default {
    init: init,
    loadObjects: loadObjects
};