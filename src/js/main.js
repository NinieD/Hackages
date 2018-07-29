// SWIPER //

if (window.matchMedia("(min-width:900px)").matches){
    var swiper = new Swiper('.swiper-container', {
         slidesPerView: 3,
         spaceBetween: 30,
         freeMode: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
       });
} else if (window.matchMedia("(min-width:640px)").matches){
    var swiper = new Swiper('.swiper-container', {
         slidesPerView: 2,
         spaceBetween: 30,
         freeMode: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
       });
} else{
    var swiper = new Swiper('.swiper-container', {
         slidesPerView: 1,
         spaceBetween: 30,
         freeMode: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
       });
}
//////////////////////////////
////////  MODALE      ////////
//////////////////////////////

var $modale = $('.modale');
function closeMod(){
    $modale.fadeOut(500);
}
function openMod(){
    $modale.fadeIn(500);
}
//////////////////////////////
////////  BURGER      ////////
//////////////////////////////
var $burger = $('.burger');
function burger() {
    $burger.click(function(event) {
        $('.navigation').toggleClass('close');
        $('.navigation__container').toggleClass('closed');
        $('.bar--top').toggleClass('bar--top__close');
        $('.bar--mid').toggleClass('bar--mid__close');
        $('.bar--bot').toggleClass('bar--bot__close');
        if($('.navigation').hasClass('close')){
            $('.navigation').addClass('fixed');
        }else{
            $('.navigation').removeClass('fixed');
        }
    });

}
function colorBurger(){
    var posLarge = $('.events__large__text').offset().top;
    $(window).scroll(function(){
    if ($(this).scrollTop() > posLarge){
        $('.bar').css('background-color', '$blue');

    }

});
}
//////////////////////////////
////////SIZE FUNCTIONS////////
//////////////////////////////


// EVENTS SQUARE///
function heightsquare(){
	    $('.techno__container__item').each(function() {
	        var squareHeight = $(this).width();
	        $(this).css('height', squareHeight);
	    });
}





///DOCUMENT READY////
$(document).ready(function() {
    heightsquare();
    burger();
    colorBurger();

    $('.hero__links').click(function(event) {
        openMod();
        event.stopPropagation();
    });
    $(window).click(function() {
        closeMod();
    });
    var posLarge = $('.events__large__text').offset().top;
    $(window).scroll(function(){
        if ($(this).scrollTop() > posLarge){
            $('.bar').addClass('green');
            console.log('+grand');
        }else {
            $('.bar').removeClass('green');
        }
    });

});
