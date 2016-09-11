'use strict';
angular.module('thisApp')
		
        .controller('IndexController', ['$scope','thisService', function($scope,thisService) {
            
            $scope.pois= {};
            
            thisService.getPois()
            .then(
                function(response) {
                    $scope.pois = response.data;
                },
                function(response) {
                    
                }
            );
            
            $scope.update = function(poi) {
                thisService.savePoi(poi);
                $scope.pois.push(poi);
                $scope.poi = {};
                $scope.user_form.$setPristine();
            };
        }])
 
        ;