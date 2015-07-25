(function(){
    'use strict';

            function AppController($rootScope, $router){
                var vm = this;

                $router.config([
                    {path:'/', redirectTo: 'home'},
                    {path:'/home', component: 'home', as: 'home'}
                ]);

                $rootScope.site_name = 'Think Different';

                // Inject 'active' class into navigation menu
                vm.isActive = function(viewlocation){
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

            angular.module('core', [
               'ngNewRouter',
               'ngAnimate',
               'ngResource',
               'core.home',
               'core.filters',
               'core.services'
            ])
            .controller('AppController', ['$rootScope', '$router', AppController])
            .config(['$componentLoaderProvider', componentLoaderConfig]);
}());


