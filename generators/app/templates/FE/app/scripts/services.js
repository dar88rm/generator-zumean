'use strict';

angular.module('thisApp')
.constant("baseURL","http://localhost:3000/")
       
       .service('thisService', ['$http', 'baseURL', function($http,baseURL) {
            
           this.getPois = function(){
                    return $http.get(baseURL+"pois");
            };

            this.savePoi = function(poiname){
                $http.post(baseURL+"addpoi", poiname);
            };
        }])

		;