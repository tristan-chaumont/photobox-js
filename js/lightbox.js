/* Trop bien ce site internet regardez ca les sheguey pour avoir une belle lightbox
https://www.blogduwebdesign.com/Tutoriel-make-simple-lightbox-minimaliste-javascript-html5
*/
import loader from './photoloader.js';

let lightbox_overview = () => {
    $(".vignette").on("click", function($event) {
        let $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
        let $gallery = $('#gallery');
        let $node = ($event.target);
        requetes($gallery,$lightbox_container,$node,$($event.target).data("id"));
    });
}

function ajouterNextPrev($gallery,$lightbox_container,$id){
    $("#suivant").on("click",function(){
            if($id != 8){
                let $node =$(".vignette")[$id+1].firstChild;
                 requetes($gallery,$lightbox_container,$node,$id+1);
            }
        });
        $("#precedent").on("click",function(){
            if($id!= 0){
                let $node =$(".vignette")[$id-1].firstChild;
                requetes($gallery,$lightbox_container,$node,$id-1);
            }   
        });
}

function requetes($gallery,$lightbox_container,$node,$id){
     let promesse = loader.loadObjects($node.getAttributeNode("data-uri").value.substr(37));
                promesse.then((rep) => {
                    let promesse2 = loader.loadObjects(rep.data.links.comments.href);
                    promesse2.then((rep2) =>{
                        $($lightbox_container).remove();
                        $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
                        let photo = rep.data.photo;
                        $lightbox_container.append(donnerDiv($node.getAttributeNode("data-img").value,  $node.getAttributeNode("data-title").value,$(photo)[0],rep2.data.comments));
                        $gallery.append($lightbox_container);
                        $lightbox_container.fadeIn();
                        ajouterNextPrev($gallery,$lightbox_container,$id)
                        let $lightbox_close = $('#lightbox_close');
                        $lightbox_close.on("click", function() {
                            $lightbox_container.fadeOut(function() {
                                $($lightbox_container).remove();
                            })
                        });
                    });
                });
}

function donnerDiv ($image,$title,$photo,$comments){
    console.log($comments);
    let comm ="";
    $comments.forEach(function(element){
        comm+=`<div class="col-3"><p>${element.titre} par : ${element.pseudo}</p><p>${element.content}</p></div>`;
    });
    console.log(comm)
    let lightbox_div = `<div class="container w-100" id='lightbox'>
                                    <div class="row" id='lightbox-head'>
                                        <p class="col-1 btn btn-warning" id='lightbox_close'>X</p>
                                        <h1 class="col-8" id='lightbox_title'>${$title}</h1>
                                        <p class="col-2 mr-1 btn btn-primary">ajouterCommentaire</p>
                                    </div>
                                    <div class="row" id = "milieu">
                                        <p class="col-2 btn btn-info"id="precedent"><</p>
                                        <div class="col-8" id="lightbox-img">
                                            <img id='lightbox_full_img' src='${$image}'>
                                        </div>
                                        <p class="col-2 btn btn-info" id="suivant">></p>
                                    </div>
                                    <div class="row" id="bottom">
                                            <div class="col-4" id="infos">
                                            <h2><b>Informations supplémentaires</b></h2>
                                            <ul>
                                                <li><b>Description : </b> ${$photo.descr} </li>
                                                <li><b>Id / fichier : </b> ${$photo.id} / ${$photo.file} </li>
                                                <li><b>Format :</b> ${$photo.format} </li> 
                                                <li><b>Dimensions / Taille : </b>${$photo.width} * ${$photo.height} / ${$photo.size}</li>    
                                            </ul>
                                            </div>
                                            <div class="col-7" id="commentaires">
                                                <h2><b>Commentaires</b></h2>
                                                <div class="row">${comm}</div>
                                            </div>
                                    </div>
                                </div>`;

        return $(lightbox_div);
}

export default {
    lightbox_overview: lightbox_overview
}