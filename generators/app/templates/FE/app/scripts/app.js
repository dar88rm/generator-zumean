'use strict';

angular.module('thisApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    
            /*.state('app.bla', {
                url:'bla',
                views: {
                    'content@': {
                        templateUrl: 'views/bla.html',
                        controller  : 'BlaController'    
                   }
                }
            })*/
            ;
    
            $urlRouterProvider.otherwise('/');
    });