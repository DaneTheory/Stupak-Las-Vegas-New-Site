var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var fullSize = document.getElementById("preloader");

$(window).load(function() { // ensures window load before code fire
    $('#status').delay(2000).fadeOut('slow');// fadeout for loader
    $('#preloader').delay(2200).fadeOut('slow'); // fadeout for white div. page wide.
    //$('body').delay(2300).css({'overflow-y':'visible'});
    //$('section').delay(2300).show(1).fadeIn('fast'); //Footer is Display:none by Default. This Adds it back into the page after Preloader finishes
});

//Sidebar Menu Load
$(document).ready(function(){
$("#stupakNavBar").delay(2300).animate( { left: 0, opacity: 1 }, 1100 );
 });
