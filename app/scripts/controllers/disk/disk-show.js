angular.module('infraApp').controller('diskShowCtrl',['$scope','$routeParams', 'diskService', 
	function ($scope,  $routeParams, diskService) {
		id = $routeParams.id
    	$scope.disk ={};
    	$scope.loading = true;
    	diskService.getdisk(id)
    		.success(function(data){
    			$scope.loading = false;
    			$scope.disk =data 
    		}).error(function(error){
    			$scope.status = 'Unable to load disk data: ' + error.message;
    	});
}]);