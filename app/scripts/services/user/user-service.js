'use strict';
// userService to acess the API
 angular.module('infraApp')
    .factory('userService', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/user';
    var userService = {};

    userService.getUser = function () {
        //return $http.get(urlBase);
        return true;
    };

    return userService;
}]);
