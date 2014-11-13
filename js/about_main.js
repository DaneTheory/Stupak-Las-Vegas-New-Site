/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);


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


( function( $ ) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');


	function adjustWindow(){

		// Init Skrollr
		var s = skrollr.init({
		    render: function(data) {

		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});

		// Get window size
	    winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= '550' + 'px') {
			winH = '550' + 'px';
		}

	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);

	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));

	}


} )( jQuery );