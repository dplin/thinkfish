(function(){
    'use strict';

    function HomeController($rootScope, servicesService, worksService, aboutService, contactService) {
        var vm = this;
        $rootScope.page = 'pageHome';
        $rootScope.title = $rootScope.site_name + '';

        // Component Lifecycle Hooks
        // Note: This is where you load everything before component is rendered into viewport.
        vm.activate = ['servicesService', 'worksService', 'aboutService', 'contactService', function(servicesService, worksService, aboutService, contactService){
            // Initialize data store
            vm._init(servicesService, worksService, aboutService, contactService);
        }];

        // Private init() function
        vm._init = function(servicesService, worksService, aboutService, contactService){
            servicesService.query(function (res){
                vm.services = res;
            });
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
        .controller('HomeController', ['$rootScope', 'servicesService', 'worksService', 'aboutService', 'contactService', HomeController]);

}());


