'use strict'

let init = (server_url) => {
    return axios.get(server_url);
}

let loadObjects = (url) => {
    let p = axios.get(url)
                 .then((data) => {
                     return data;
                 })
                 .catch((error) => {
                    console.log('data transfer error : ' + error);
                 });
}

export default {
    init: init,
    loadObjects: loadObjects
};