(function(){
    'use strict';

    angular.module('core.services', [])
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
