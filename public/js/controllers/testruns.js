'use strict';

angular.module('mean.testruns').
controller('TestrunsController',
    ['$scope',
     '$stateParams',
     '$location',
     'Global',
     'Testruns',
    function($scope,
             $stateParams,
             $location,
             Global,
             Testruns){

        $scope.global = Global;

        $scope.find = function() {
            Testruns.query(function(testruns) {
                $scope.testruns = testruns;
            });
        };

        /*$scope.findOne = function() {
            Articles.get({
                articleId: $stateParams.articleId
            }, function(article) {
                $scope.article = article;
            });
        };*/
    }
]);