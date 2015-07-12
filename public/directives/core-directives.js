/*
Code refactoring:
http://www.effectiveui.com/blog/2015/04/20/learned-ng-conf-write-angularjs-migration-mind/
*/
(function(){
    'use strict';

    angular.module('core.directives', []).directive('resize', ['$timeout', function($timeout) {
        return {
            restrict: 'EA',
            scope: {},
            controller: ['$attrs', '$scope', '$element', resizeController],
            controllerAs: 'resize',
            bindToController: {
                containerClass: '='
            }
        };

        function resizeController($attrs, $scope, $element) {
            // Get wrapper/container name
            var className = $attrs.containerClass;

            // Hide and wait until everything loaded
            $element.hide();

            $timeout(function() {
                // Show content after everything has been loaded
                $element.fadeIn(150, function(){
                    // WP Plugin "Contact Form 7" workaround if the form is loaded using AJAX.
                    if ($attrs.class == "pageContactus"){
                        // Manually initialize Contact Form 7 after the template is loaded into the ng-viewport.
                        $('div.wpcf7 > form').wpcf7InitForm();

                        // Change the ugly Contact Form 7 spinner.
                        $('.ajax-loader').attr('src', site.theme_url + '/assets/img/spinner.gif');
                    }
                });

                // Set main wrapper/container height
                //$('.' + className).css('height', $element.height() +  'px');
            },400);
        }
    }]);

}());
