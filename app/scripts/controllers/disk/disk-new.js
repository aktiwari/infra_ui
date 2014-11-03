angular.module('infraApp').controller('diskNewCtrl',['$scope','$routeParams','$location', 'diskService', 
	function ($scope, $routeParams,$location,diskService) {
        $scope.managers  = {};

        $scope.loading = true;
        getAllManager();
        function getAllManager() {
            diskService.listAllManager()
                .success(function (emps) {

                    $scope.loading = false;
                    $scope.managers = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load disk data: ' + error.message;
                });
        }
        
		$scope.submitForm = function(isValid){
            if(isValid){
                //console.log("valid disk",$scope.disk);
                if($scope.disk){
                diskService.insertdisk($scope.disk)
                    .success(function (data) {
                        $scope.loading = false;
                        //console.log("After save response::",data)
                        $location.path('/disk-list');
                        $scope.status = 'Inserted disk! Refreshing disk list.';
                    }).
                    error(function(error) {
                        $scope.status = 'Unable to insert disk: ' + error.message;
                    }); 
                }
            }
            else{
                console.log("invalid data ",$scope.disk);
                $scope.loading = false;
            }
        
            
    };
}]);