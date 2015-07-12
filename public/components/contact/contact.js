(function(){
    'use strict';

    function ContactController($rootScope) {
        var vm = this;
        $rootScope.page = 'pageContact';
        $rootScope.title = $rootScope.site_name + ' | Contact';

        // Component Lifecycle Hooks
        // Note: This is where you load everything before component is rendered into viewport.
        vm.activate = ['pageService', function(pageService){
            // Initialize data store
            vm._init(pageService);
        }];

        // Private init() function
        vm._init = function(pageService){
            //pageService.loadPageData('contact');
            //vm.data = pageService.pagedata;
        };
    }

    angular
        .module('core.contact', [])
        .controller('ContactController', ['$rootScope', ContactController]);

}());
