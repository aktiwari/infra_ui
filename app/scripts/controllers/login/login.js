angular.module('infraApp').controller('LoginCtrl',['$q','$scope','$routeParams','$location', 'userService', 
	function ($q, $scope,  $routeParams,$location, userService) {
        
        
		
        // update the user details
        $scope.submitForm = function(isValid){
            if(isValid){
                userService.getUser($scope.user)
                    .success(function (data) {
                        console.log('data',data);
                        $scope.loading = false;
                        $scope.status = data.message;
                        $location.path('/home');
                    }).
                    error(function(error) {
                        $scope.loading = false;
                        $scope.status = 'Unable to insert user: ' + error.message;
                    }); 
            }
            else{
                console.log("Invalid user Object");
            }
        };
        
}]);