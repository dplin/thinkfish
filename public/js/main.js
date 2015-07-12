$(document).foundation();

// executes as soon as DOM is ready
$(function(){
    // Mobile Menu
/*    jQuery(".toggle-nav").on("click", function(event) {
        jQuery('.menu ul').toggleClass('active');
        return false;
    });
*/
    // Catch all clicks outside of Menu.
    // Note: Follow this guide for better handling of event bubbling.
    // Link: http://css-tricks.com/dangers-stopping-event-propagation/
/*    jQuery(document).on("click", function() {
        if (!$(event.target).closest('.toggle-nav').length) {
            // Hide the menus.
            jQuery('.menu ul').addClass('active');
        }
    });*/


});

// executes when complete page is fully loaded, including all frames, objects and images
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false,
      controlNav: false,
      animationSpeed: 350,
      slideshowSpeed: 8000,
      randomize:  true
    });
});


