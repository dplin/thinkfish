(function(){
    'use strict';

    function HomeController($rootScope, worksService, aboutService, contactService) {
        var vm = this;
        $rootScope.page = 'pageHome';
        $rootScope.title = $rootScope.site_name + '';

        // Component Lifecycle Hooks
        // Note: This is where you load everything before component is rendered into viewport.
        vm.activate = ['worksService', 'aboutService', 'contactService', function(worksService, aboutService, contactService){
            // Initialize data store
            vm._init(worksService, aboutService, contactService);
        }];

        // Private init() function
        vm._init = function(worksService, aboutService, contactService){
            worksService.query(function (res){
                vm.works = res;
            });
            aboutService.query(function (res){
                vm.about = res;
            });
            contactService.query(function (res){
                vm.contact = res;
            });
        };
    }

    angular
        .module('core.home', [])
        .controller('HomeController', ['$rootScope', 'worksService', 'aboutService', 'contactService', HomeController]);

}());


