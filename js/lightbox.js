/* Trop bien ce site internet regardez ca les sheguey pour avoir une belle lightbox
https://www.blogduwebdesign.com/Tutoriel-make-simple-lightbox-minimaliste-javascript-html5
*/

let lightbox_overview = () => {
    $(".vignette").on("click", function($event) {
        let $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
        let $gallery = $('#gallery');
        $lightbox_container.append(donnerDiv($($event.target).data("img"),$($event.target).data("title")));
        $gallery.append($lightbox_container);
        $lightbox_container.fadeIn();
        //ajout listener pour partir
        let $lightbox_close = $('#lightbox_close');
        $lightbox_close.on("click", function() {
            $lightbox_container.fadeOut(function() {
                $($lightbox_container).remove();
            })
        });
        //ajout des listeners précédents et suivants
        ajouterNextPrev($gallery,$lightbox_container,$($event.target).data("id"));
    })
}

function ajouterNextPrev($gallery,$lightbox_container,$id){
    console.log($id)
    $("#suivant").on("click",function(){
            if($id != 8){
                let $node =$(".vignette")[$id+1].firstChild;
                $($lightbox_container).remove();
                $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
                $lightbox_container.append(donnerDiv($node.getAttributeNode("data-img").value,  $node.getAttributeNode("data-title").value));
                $gallery.append($lightbox_container);
                $lightbox_container.fadeIn();
                ajouterNextPrev($gallery,$lightbox_container,$id+1)
                console.log("cc");
            }
        });
        $("#precedent").on("click",function(){
            if($id!= 0){
                let $node =$(".vignette")[$id-1].firstChild;
                $($lightbox_container).remove();
                $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
                $lightbox_container.append(donnerDiv($node.getAttributeNode("data-img").value,  $node.getAttributeNode("data-title").value));
                $gallery.append($lightbox_container);
                $lightbox_container.fadeIn();
                ajouterNextPrev($gallery,$lightbox_container,$id-1)
            }   
        });
    let $lightbox_close = $('#lightbox_close');
        $lightbox_close.on("click", function() {
            $lightbox_container.fadeOut(function() {
                $($lightbox_container).remove();
            })
        });
}

function donnerDiv ($image,$title){ 
    console.log($image,$title)
        let lightbox_div = `<div class="container w-100" id='lightbox'>
                                <div class="row" id='lightbox-head'>
                                    <p class="col-1 btn btn-warning" id='lightbox_close'>X</p>
                                    <h1 class="col-11" id='lightbox_title'>${$title}</h1>
                                </div>
                                <div class="row" id = "milieu">
                                    <p class="col-2 btn btn-info"id="precedent"><</p>
                                    <div class="col-8" id="lightbox-img">
                                        <img id='lightbox_full_img' src='${$image}'>
                                    </div>
                                    <p class="col-2 btn btn-info" id="suivant">></p>
                                </div>
                                </div>
                            </div>`;
        
        return $(lightbox_div);
}

export default {
    lightbox_overview: lightbox_overview
}