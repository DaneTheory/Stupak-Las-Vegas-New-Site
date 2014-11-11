//Menu Options
var meny = Meny.create({

    // The element that will be animated in from off screen
    menuElement: document.querySelector( '.stupakNav' ),

    // The contents that gets pushed aside while Meny is active
    contentsElement: document.querySelector( '.contents, #verold3d' ),
    //contentsElement: document.querySelector( '#verold3d' ),

    // The alignment of the menu
    position: 'left',

    // The width of the menu (when using left/right position)
    width: 260,

    // The mouse distance from menu position which can trigger menu to open.
    threshold: 65,

    // Width(in px) of the thin line you see on screen when menu is in closed position.
    overlap: 0,


    // Use mouse movement to automatically open/close
    mouse: true,

    // Use touch swipe events to open/close
    touch: true
});

//SVG Injection Script
var mySVGsToInject = document.querySelectorAll('img.svg-inject');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'images/png',
  each: function (svg) {
    // Callback after each SVG is injected
    console.log('SVG injected: ' + svg.getAttribute('id'));
  }
};

// Trigger the injection
SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});




$('#scotch-panel').scotchPanel({

        type: 'video',
        autoPlayVideo: true,
        youtubeID: 'AWuJnLbqAvw',
        youTubeTheme: 'light',
        useCSS: true,
        containerSelector: '.scotch-panel-wrapper',
        direction: 'right',
        duration: 500,
        transition: 'ease-in-out',
        clickSelector: '.toggle-panel, .toggle-panel2',
        distanceX: "100%",
        enableEscapeKey: true
    });


// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('.scotch-panel-wrapper').css({
    'width': winWidth,
    'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('.scotch-panel-wrapper').css({
    'width': winWidth,
    'height': winHeight,
});
});

// set initial div height / width
$('#scotch-panel').css({
    'width': winWidth,
    'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('#scotch-panel').css({
    'width': winWidth,
    'height': winHeight,
});
});

//The magic code to add show/hide custom event triggers
(function ($) {
      $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });
    })(jQuery);

//on Show button click; show the #foo div
$('.toggle-panel').click(function(){
   $('#text-toggle-exit').fadeIn('slow').show();
});

//on Hide button click; hide the #foo div
$('.toggle-panel').click(function(){
   $('#text-toggle-wrapper').fadeOut('fast').hide();
});

//on Show button click; show the #foo div
$('.toggle-panel2').click(function(){
   $('#text-toggle-wrapper').fadeIn('slow').show();
});

//on Hide button click; hide the #foo div
$('.toggle-panel2').click(function(){
   $('#text-toggle-exit').fadeOut('fast').hide();
});