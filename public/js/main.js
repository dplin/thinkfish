// executes as soon as DOM is ready
$(function(){



  // Smooth Scroll
  $(window).on('mousewheel DOMMouseScroll', function(e) {
    var dir,
        amt = 500;

    e.preventDefault();
    if(e.type === 'mousewheel') {
      dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
    }
    else {
      dir = e.originalEvent.detail < 0 ? '-=' : '+=';
    }

    $('html, body').stop().animate({
      scrollTop: dir + amt
    },500, 'linear');
  })

  // On refresh, set windows at top.
  $(window).on('load', function() {
      setTimeout(function(){
          $('html, body').scrollTop(0);
      }, 0);
  });
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

});


