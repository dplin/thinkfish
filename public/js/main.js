(function(){
  'use strict';

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
  });

  // On refresh, set windows at top.
  $(window).on('load', function() {
      setTimeout(function(){
          $('html, body').scrollTop(0);
      }, 0);
  });

}());
