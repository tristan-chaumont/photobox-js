'use strict'

var serveur;

let init = (server_url) => {
    serveur = server_url;
}

let show_erreur()=>{
    console.log("Erreur");
}

let loadObjects = (url) => {
    return axios.get(serveur+url).catch(show_erreur);
}

export default {
    init: init,
    loadObjects: loadObjects
};