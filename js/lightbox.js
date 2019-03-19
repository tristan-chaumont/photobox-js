/* Trop bien ce site internet regardez ca les sheguey pour avoir une belle lightbox
https://www.blogduwebdesign.com/Tutoriel-make-simple-lightbox-minimaliste-javascript-html5
*/

let lightbox_overview = () => {
    $(".vignette img").on("click", function() {
        let $gallery = $('#gallery');
        let $vignette = $(this);
        let $lightbox_container = $("<div id='lightbox_container'>").css("display", "none");
        let $image = $vignette.data("img");
        let $title = $vignette.data("titre")
        
        let lightbox_div = `<div id='lightbox'>
                                <div id='lightbox-head'>
                                    <p id='lightbox_close'>X</p>'
                                    <h1 id='lightbox_title'>${$title}</h1>
                                </div>
                                <div id="lightbox-img">
                                    <img id='lightbox_full_img' src='${$image}'>
                                </div>
                            </div>`;
        
        let $lightbox = $(lightbox_div);
        $lightbox_container.append($lightbox);
        
        $gallery.append($lightbox_container);
        $lightbox_container.fadeIn();
        
        let $lightbox_close = $('#lightbox_close');
        $lightbox_close.on("click", function() {
            $lightbox_container.fadeOut(function() {
                $lightbox_container.remove();
            })
        });        
    })
}

export default {
    lightbox_overview: lightbox_overview
}