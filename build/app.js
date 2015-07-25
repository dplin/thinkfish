(function(){
    'use strict';

            angular.module("core", [
               "ngNewRouter",
               "ngAnimate",
               "ngResource",
               "core.home",
               "core.filters",
               "core.services"
            ])
            .controller('AppController', ['$rootScope', '$router', AppController])
            .config(['$componentLoaderProvider', componentLoaderConfig]);

            function AppController($rootScope, $router){
                var vm = this;

                $router.config([
                    {path:"/", redirectTo: "home"},
                    {path:"/home", component: "home", as: "home"}
                ]);

                $rootScope.site_name = 'Think Different';

                // Inject 'active' class into navigation menu
                vm.isActive = function(viewlocation){
/*                    viewlocation = viewlocation.replace('#/', '')

                    if (/#\/$/.test(window.location.href) == true && viewlocation == ''){
                        return true;
                    }*/

                    return window.location.href.indexOf(viewlocation) > 0 ? true : false;
                };
            }

            // copied from router.es5.js
            function dashCase(str) {
                return str.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }

            // direct AngularJS to load from theme folder
            function componentLoaderConfig($componentLoaderProvider){
                $componentLoaderProvider.setTemplateMapping(function(name){
                    var dashName = dashCase(name);
                    // customized to use app prefix
                    return 'components/' + dashName + '/' + dashName + '.html';
                });
            }

}());



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



(function(){
    'use strict';

    angular.module('core.services', [])
        .service('servicesService', ['$resource', function($resource) {
            return $resource('/api/services/:id', { id: '@_id'}, {
                update: {
                    method: 'PUT' // this is to support UPDATE operation.
                }
            });
        }])
        .service('worksService', ['$resource', function($resource) {
            return $resource('/api/works/:id', { id: '@_id'}, {
                update: {
                    method: 'PUT' // this is to support UPDATE operation.
                }
            });
        }])
        .service('aboutService', ['$resource', function($resource) {
            return $resource('/api/about/:id', { id: '@_id'}, {
                update: {
                    method: 'PUT' // this is to support UPDATE operation.
                }
            });
        }])
        .service('contactService', ['$resource', function($resource) {
            return $resource('/api/contact/:id', { id: '@_id'}, {
                update: {
                    method: 'PUT' // this is to support UPDATE operation.
                }
            });
        }]);

}());

(function(){
    'use strict';

    angular.module('core.filters', [])
    .filter('unsafe', ['$sce', function($sce) { return $sce.trustAsHtml; }]);

}());
