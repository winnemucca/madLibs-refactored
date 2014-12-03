var app = angular.module('myApp',['ngAnimate']).
controller('NamingController', function($scope) {
	// the empty bracket allows me to add values.  a hard coded string will cause errors
	$scope.customName =[];

	

	var original = $scope.customName;
	$scope.reset = function () {
		$scope.myForm.$setPristine()
		$scope.user = angular.copy(original);
		$scope.customName ="";

	};
	
});

