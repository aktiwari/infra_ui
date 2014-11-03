
angular.module('infraApp')
    .controller('MigrationtCtrl', ['$scope','$routeParams','$location', 'migrationService', 
        function ($scope, $routeParams,$location,migrationService) {

        $scope.status;
        $scope.migrations={};
        $scope.graphData = {data:[]};

}]);