(function(){
    'use strict';

    function WorkController($rootScope) {
        var vm = this;
        $rootScope.page = 'pageWork';
        $rootScope.title = $rootScope.site_name + ' | Work';

        // Component Lifecycle Hooks
        // Note: This is where you load everything before component is rendered into viewport.
        vm.activate = ['pageService', function(pageService){
            // Initialize data store
            vm._init(pageService);
        }];

        // Private init() function
        vm._init = function(pageService){
            //pageService.loadPageData('work');
            //vm.data = pageService.pagedata;
        };
    }

    angular
        .module('core.work', [])
        .controller('WorkController', ['$rootScope', WorkController]);

}());
