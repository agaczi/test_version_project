/**
 * Created by Agata on 23.01.2016.
 */
//PARTNERS SECTION

var overlay = $('.overlay');
var gallery = $('.gallery');

overlay.hide();

function showShadow() {
    $(gallery).mouseenter(function () {
        $(this).next(overlay).show();
    });
    $(overlay).mouseleave(function () {
        overlay.hide();
    });
}

showShadow();