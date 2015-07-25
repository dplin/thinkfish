(function(){
    'use strict';

    /* Button Click - Open or Close Navigation Menu */
    $('nav + button').on('click', function() {
        $('main').toggleClass('isOpen');
        $(this).toggleClass('active');
        $('span', this).toggleClass(function(){
            if ($(this).hasClass('lnr-menu')){
                // Disable ScrollMagic Scene when Navigation Menu is open
                sc_nav1.enabled(false);
                sc_nav2.enabled(false);
                sc_nav3.enabled(false);
                $(this).removeClass('lnr-menu');
                return 'lnr-cross';
            }else{
                // Enable ScrollMagic Scene when Navigation Menu is closed
                sc_nav1.enabled(true);
                sc_nav2.enabled(true);
                sc_nav3.enabled(true);
                $(this).removeClass('lnr-cross');
                return 'lnr-menu';
            }
        });
    });


    /************************************************************************* Preloader *************************************************************************/
    /* Note: Another alternative is html5loader by Gianluca Guarini: https://github.com/GianlucaGuarini/jquery.html5loader */
    var startVal = 0;
    var total_imgs = $('img').length;

    // Set initial text based loading progress.
    $('.progress-text').text(startVal + '/' + total_imgs);

    // Initialize Preloader
    var sc_preloader = new TimelineMax({onComplete: function(){
      setTimeout(function(){
         // Initialize plugin
        $('img').waitForImages({
            finished: function(){
                // buggy...doesn't seem to work.
            },
            each: function(loaded, count, success) {
                // Calculate increment value for progress bar
                var val = (1 / total_imgs).toFixed(3);

                // Text based loading progress
                $('.progress-text').text((loaded+1) + '/' + total_imgs);

                // Progress bar animation
                TweenMax.fromTo('.progress-bar', 0.5,{
                    // FROM
                    scaleX: startVal
                },
                {
                    // TO
                    scaleX: '+=' + val,
                    onComplete: function(){
                        // Workaround for "finished" callback.  Check and see if all images has been loaded.
                        if (total_imgs === loaded + 1){
                            // Animation to move progress bar to 100%.
                            TweenMax.to('.progress-bar', 0.1, {
                                scaleX: 1
                            });

                            /******** Setup Preloader Disappearing Animation ********/

                            // Get elements required for animation
                            var sc_ld1 = $('.sc_ld1');
                            var sc_ld2 = $('.sc_ld2');

                            // Wait 700ms and then fade out "preloader"
                            setTimeout(function(){
                              // Animation to make Preloader elements disappear
                              TweenMax.to(sc_ld1, 0.5, {yPercent: -100, ease:Cubic.easeIn});
                              TweenMax.to(sc_ld2, 0.5, {yPercent: 100, ease:Cubic.easeIn});

                              // Remove the progress bar
                              $('.progress-bar').remove();
                              $('.progress-text').remove();

                              // Animation to make the entire Preloader screen disappear
                              TweenMax.to('.preloader', 0.7, {
                                  delay: 0.3,
                                  opacity: 0,
                                  display: 'none',
                                  onComplete: grandEntrance
                              });
                            }, 700);
                        }
                    }
                }
            );

            // Increase progress bar starting value for the next animation
            startVal += val;

            },
            waitForAll: true
        });
      }, 1000);
    }});

    // Set stage for Preloader elements
    sc_preloader.set('.sc_ld1 > span', {yPercent: -100, autoAlpha: 0});
    sc_preloader.set('.sc_ld2 > span', {yPercent: 100, autoAlpha: 0});

    // Animation to show Preloader elements
    sc_preloader.to('.sc_ld1 > span', 0.5, {yPercent: 0, autoAlpha: 1}, 1, 'text')
        .to('.sc_ld2 > span', 0.5, {yPercent: 0, autoAlpha: 1}, 1, 'text');

    /* Front Page Animation After Preloader Disappears */

    // Get elements required for animation
    var sc_op1 = '.sc_op1';
    var sc_op2 = '.sc_op2';
    var sc_op3 = '.sc_op3';
    var sc_op4 = 'nav + button';

    // Create timeline
    var openingTimeline = new TimelineMax();

    // Set the stage first
    openingTimeline.set(sc_op1, {yPercent: -50, autoAlpha: 0});
    openingTimeline.set(sc_op2, {yPercent: 50, autoAlpha: 0});
    openingTimeline.set(sc_op3, {y: -50, autoAlpha: 0});
    openingTimeline.set(sc_op4, {x: 50, autoAlpha: 0});

    function grandEntrance(){
        // Remove the preloader from DOM completely.
        $('.preloader').remove();
        // Set animation
        openingTimeline.to(sc_op1, 0.5, {yPercent: 0, autoAlpha: 1}, 'text')
            .to(sc_op2, 0.5, {yPercent: 0, autoAlpha: 1}, 'text')
            .to(sc_op3, 0.3, {y:0, autoAlpha: 0.7})
            .to(sc_op4, 0.3, {x:0, autoAlpha: 1});
    }

    /*************************************************************** Main Page Animation With ScrollMagic ****************************************************************/

    // Main Controller
    var controller = new ScrollMagic.Controller();

    // Button Click Handler
    $(document).on('click', '.open_curtain button', function(e){
        var target = '.services';
        controller.scrollTo(target);
        e.preventDefault();
        //$('html').removeClass('hide-scrollbar');
    });
    $(document).on('click', '.navigation button', function(e){
        var target = $(e.target).attr('data-target');
        controller.scrollTo('.'+target);
        e.preventDefault();
    });

    // Set stage for Title/Description Animation.  This is global for every section that has this combination.
    var txt_title = $('header > h1');
    var txt_description = $('header > h1 + hr + p');

    for (var i = 0; i < txt_title.length; i++){
        TweenMax.set(txt_title[i], {yPercent:-100, autoAlpha:0});
        TweenMax.set(txt_description[i], {yPercent:150, autoAlpha:0});
    }

    // Navigation Menu Color Change Animation
    var nav_elements = 'nav + button > *';
    var tw_nav1 = TweenMax.to(nav_elements, 0.3, {color:'#555555'});    // Light to Dark
    var tw_nav2 = TweenMax.to(nav_elements, 0.3, {color:'#FFFFFF'});   // Dark to Light
    var tw_nav3 = TweenMax.to(nav_elements, 0.3, {color:'#555555'});    // Light to Dark

    var sc_nav1 = new ScrollMagic.Scene({triggerElement: '.services', triggerHook: 'onLeave', offset: -40})
        .setTween(tw_nav1);

    var sc_nav2 = new ScrollMagic.Scene({triggerElement: '.work', triggerHook: 'onLeave', offset: 230})
        .setTween(tw_nav2);

    var sc_nav3 = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: 'onLeave', offset: -40})
        .setTween(tw_nav3);

    controller.addScene(sc_nav1);
    controller.addScene(sc_nav2);
    controller.addScene(sc_nav3);

    // Splash Page Parallax
    new ScrollMagic.Scene({
                triggerElement: '.splash',
                triggerHook: 'onEnter',
                duration: '140%'
            })
            .setTween('.splash > div:first-child', {y: '80%', ease: Linear.easeNone})
            .addTo(controller);

    // Services
    var services_elements = '.services .row:eq(1) .columns';

    // Set stage for elements in Services
    TweenMax.set(services_elements, {yPercent: 20, autoAlpha: 0});

    // Set animation
    var tw_services = new TimelineMax()
        .add(TweenMax.to(['.services header > h1', '.services header > h1 + hr + p'], 0.5, {yPercent:0, autoAlpha:1}))
        .add(TweenMax.staggerTo(services_elements, 0.5, {
                            delay: 0.3,
                            yPercent: 0,
                            autoAlpha: 1,
                            onComplete: function(){
                                // No reverse animation
                                sc_services.reverse(false);
                            }
                        },0.1));


    // Set scene
    var sc_services = new ScrollMagic.Scene({
        triggerElement: '.services',
        triggerHook: 'onEnter',
        offset: 375
    })
    .setTween(tw_services)
    .addTo(controller);

    // Work
    var top_left = '.tpl';
    var top_right = '.tpr';
    var bottom_left = '.btl';
    var bottom_right = '.btr';

    // Set stage for elements in Work
    TweenMax.set(top_left, {right:0, top:0, width:10, height:10});
    TweenMax.set(top_right, {left:0, top:0, width:10, height:10});
    TweenMax.set(bottom_left, {right:0, top:0, width:10, height:10});
    TweenMax.set(bottom_right, {left:0, top:0, width:10, height:10});
    TweenMax.set('.work figure:even', {xPercent:-20});
    TweenMax.set('.work figure:odd', {xPercent:20});

    // Header Animation
    var tw_header = TweenMax.to(['.work header > h1', '.work header > h1 + hr + p'], 0.5, {yPercent:0, autoAlpha:1});
    var sc_header = new ScrollMagic.Scene({
        triggerElement: '.work',
        triggerHook: 'onEnter',
        offset: 375
    })
    .reverse(false)
    .setTween(tw_header)
    .addTo(controller);

    // Set animation
    $('.work .row:not(:first)').each(function(i){
        var colorBox = $('.columns > div', this);
        var image = $('.columns > figure', this);

        // Set animation.  Using TimelineMax instead of the usual TweenMax
        var tw_work = new TimelineMax()
            .add(TweenMax.to(colorBox, 0.5, {height: '100%'}))
            .add(TweenMax.to(colorBox, 0.5, {width: '100%',
                onComplete: function(){
                    var c1 = $(colorBox).first().css('background-color');
                    var c2 = $(colorBox).last().css('background-color');
                    $(colorBox).parents('div.columns').first().css('background-color', c2);
                    $(colorBox).parents('div.columns').last().css('background-color', c1);
                    $(colorBox).hide();
                }
            }))
            .add(TweenMax.fromTo(image, 0.5, {autoAlpha: 0}, {autoAlpha: 1, xPercent: 0,
                onComplete: function(){
                    // No reverse animation. In this case, no slide in and fade out when scrolling up.
                    sc_work.reverse(false);
                }
            }), '+=0.15');

        // Set scene
        var sc_work = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 'onEnter',
            offset: 400
        })
        .setTween(tw_work)
        .addTo(controller);
    });



    // About
    var about_elements = ['.about header > h1', '.about header > h1 + hr + p'];

    // Set animation
    var tw_about = TweenMax.to(about_elements, 0.5, {yPercent:0, autoAlpha:1});

    // Set scene
    var sc_about = new ScrollMagic.Scene({
        triggerElement: '.about',
        triggerHook: 'onEnter',
        offset: 375
    })
    .reverse(false)
    .setTween(tw_about)
    .addTo(controller);

    // Contact
    var menu_width = 260;                                                               // Optional. Depends on how you design the menu. 0 if you don't have an off screen menu.
    var startingX = Math.round($(window).width() / 2) + 30;
    var startingY = -400;
    var plane = 'i.fa-paper-plane-o';
    var points = [{'x':1000,'y':79},{'x':974,'y':322},{'x':977,'y':295},{'x':516,'y':74},{'x':461,'y':47},{'x':229,'y':-51},{'x':143,'y':71},{'x':67,'y':178},{'x':100,'y':282},{'x':170,'y':319},{'x':252,'y':362},{'x':350,'y':325},{'x':351,'y':210},{'x':352,'y':132},{'x':248,'y':96},{'x':200,'y':115},{'x':13,'y':191},{'x':30,'y':558},{'x':205,'y':596},{'x':353,'y':629},{'x':399,'y':570},{'x':387,'y':504},{'x':378,'y':454},{'x':309,'y':399},{'x':245,'y':462},{'x':206,'y':500},{'x':211,'y':554},{'x':247,'y':587},{'x':302,'y':638},{'x':404,'y':660},{'x':450,'y':653},{'x':625,'y':628},{'x':734,'y':488},{'x':894,'y':500}];
    var x_offset = 979 - startingX;     // Calculate x offset of bezier path relative to DOM element's current position
    var y_offset = 103 - startingY;     // Calculate y offset of bezier path relative to DOM element's current position
    var extra_width = Math.round($(window).width() * (1 - 979 / $(window).width()));

    // Re-calculating bezier path based on the current window width.  May upgrade the code with window.resize listener support.
    points[0].x = startingX + menu_width;
    points[0].y = startingY;
    for (var j = 1; j < points.length; j++){
        points[j].x = points[j].x  - x_offset - extra_width;
        points[j].y = points[j].y - y_offset;
    }
    points[points.length - 1].x = 0;
    points[points.length - 1].y = 0;

    // Set stage
    TweenMax.set(plane, {x: startingX + menu_width, y: startingY, rotation: 200});

    // Set animation
    var tw_contact = TweenMax.to('i.fa-paper-plane-o', 4.5, {
        bezier:{
            type: 'cubic',
            values: points,
            autoRotate: true
        },
        onComplete: function(){
            sc_contact.reverse(false);
        }
    });

    // Set scene
    var sc_contact = new ScrollMagic.Scene({
        triggerElement: '.contact',
        triggerHook: 'onEnter',
        offset: 300
    })
    .setTween(tw_contact)
    .addTo(controller);


    /************* Helper Function ***********/

    // Scrolling that utilize GSAP's scrollTo plugin
    controller.scrollTo(function(newpos){
        TweenMax.to(window, 0.8, {
            scrollTo: {y: newpos},
            onComplete: function(){
                //console.log('done');
            }
        });
    });
}());
