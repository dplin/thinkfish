(function(){
    'use strict';

    function HomeController($rootScope, $resource) {
        var Work = $resource('/api/works');
        var About = $resource('/api/about');
        var Contact = $resource('/api/contact');
        var vm = this;
        $rootScope.page = 'pageHome';
        $rootScope.title = $rootScope.site_name + ' | Home';

        // Component Lifecycle Hooks
        // Note: This is where you load everything before component is rendered into viewport.
        vm.activate = ['pageService', function(pageService){
            // Initialize data store
            vm._init(pageService);
        }];

        // Private init() function
        vm._init = function(pageService){
            //pageService.loadPageData('about');
            //vm.data = pageService.pagedata;
            Work.query(function (res){
                vm.works = res;
            });
            About.query(function (res){
                vm.about = res;
            });
            Contact.query(function (res){
                vm.contact = res;
            });
        };
    }

    angular
        .module('core.home', [])
        .controller('HomeController', ['$rootScope', '$resource', HomeController]);

}());


