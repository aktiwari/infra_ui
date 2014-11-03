'use strict';
// diskService to acess the API
 angular.module('infraApp')
    .factory('diskService', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/disk';
    var diskService = {};

    diskService.listdisks = function () {
        return $http.get(urlBase);
    };

    return diskService;
}]);
