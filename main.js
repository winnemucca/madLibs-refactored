var app = angular.module('myApp',[]).
controller('NamingController', function($scope) {
	// the empty bracket allows me to add values.  a hard coded string will cause errors
	$scope.customName =[];

	// $scope.update = function (customName) {
	// 	$scope.customName = angular.copy(customName);
	// };

	// $scope.reset = function () {
	// 	angular.copy($scope.customName);

	// };
	// $scope.reset();

	var original = $scope.customName;
	$scope.reset = function () {
		$scope.myForm.$setPristine()
		$scope.user = angular.copy(original);

	};

	// $scope.reset = function() {
	// $scope.myForm.$setPristine()
	// $scope.user = angular.copy($scope.customName);
	// // $scope.myForm.$setPristine()
	// };

});

// scope.myForm.$setPristine()