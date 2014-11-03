angular.module('infraApp').controller('DiskEditCtrl',['$q','$scope','$routeParams','$location', 'diskService', 
	function ($q, $scope,  $routeParams,$location, diskService) {
        
        
		var id = $routeParams.id;
    	$scope.disk ={};

        $scope.loading = true;
        $q.all([diskService.listAllManager(),diskService.getdisk(id)])
           .then(function(data){

                $scope.loading = false;
                $scope.managers = data[0].data;
                $scope.disk = data[1].data; 
                $scope.managers.every(function(emp){
                    if($scope.disk.manager){
                       if($scope.disk.manager._id==emp._id){
                            $scope.disk.manager = emp;
                            return false;
                        } 
                    } 

                    return true;
                });
                    
           });

        // update the disk details
        $scope.editForm = function(isValid){
            if(isValid){
                diskService.updatedisk($scope.disk)
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.status = data.message;
                        $location.path('/disk-list');
                    }).
                    error(function(error) {
                        $scope.loading = false;
                        $scope.status = 'Unable to insert disk: ' + error.message;
                    }); 
            }
            else{
                console.log("Invalid disk Object");
            }
        };
        
}]);