'use strict';

angular.module('mean.testruns').
factory('Testruns',
    ['$resource',
    function($resource) {
        return $resource('testruns/:runId', {
            runId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);