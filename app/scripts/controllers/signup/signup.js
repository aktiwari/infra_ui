angular.module('infraApp').controller('SignupCtrl',['$q','$scope','$routeParams','$location', 'userService', 
	function ($q, $scope,  $routeParams,$location, userService) {
		var id = $routeParams.id;
        $scope.loading = false;
        $scope.submitForm = function(isValid){
            if(isValid){
                console.log("valid user",$scope.user);
                if($scope.user){
                    $scope.loading = true;
                userService.signupuser($scope.user)
                    .success(function (data) {
                        console.log("After save response::",data)
                        $scope.status = 'Inserted user! Refreshing user list.';
                        $location.path('/user-edit/'+data.id);
                    }).
                    error(function(error) {
                        $scope.status = 'Unable to insert user: ' + error.message;
                    }); 
                }
            }
            else{
                console.log("invalid data ",$scope.user);
            }
        
            
        };
    }
]);