'use strict';
angular.module('thisApp')
		
        .controller('IndexController', ['$scope','thisService', function($scope,thisService) {
           
           $scope.bla =  {
                                    _id:0,
                                    name:'Bla',
                                    description:'Bla bla bla'
                                };
                                 
        }])
 
        ;