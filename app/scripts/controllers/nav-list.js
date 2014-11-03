var navList = angular.module('navList', []);

navList.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'login';
        if (currentRoute.match('disk-list')){
        	currentRoute ='disk-list';
        }
        else if(currentRoute.match('migration')){

        	currentRoute ='migration';
        }
        else if(currentRoute.match('home')){

            currentRoute ='home';
        }

        return page === currentRoute ? 'active' : '';
    };        
}]);
