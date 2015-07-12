(function(){
    'use strict';

    angular.module('core.filters', [])
    .filter('unsafe', ['$sce', function($sce) { return $sce.trustAsHtml; }]);

}());
