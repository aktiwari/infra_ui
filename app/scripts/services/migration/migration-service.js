'use strict';
// migrationService to acess the API
 angular.module('infraApp')
    .factory('migrationService', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/migration/';
    var migrationService = {};

    migrationService.listmigrations = function () {
    	return migrationService;
       // return $http.get(urlBase);
    };

    return migrationService;
}]);
