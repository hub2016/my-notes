var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
	$scope.person = { name: "Ari Lerner" };
	var updateClock = function() {
		$scope.clock = new Date().toLocaleTimeString();
	};
	var timer = setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
});

app.controller('DemoController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; };
});