(function(){
    'use strict';

    angular.module('core.services', [])
    .service('pageService', ['$http', function($http) {
        // Initialize empty object
        this.pagedata = {};

        this.loadPageData = function(page_name) {
            var that = this;
            $http.get('/wp-json/pages/' + page_name).then(
                function(response) {
                      angular.copy(response.data, that.pagedata);
                },
                function(error) {

                }
            );
        };

    }]);

}());
