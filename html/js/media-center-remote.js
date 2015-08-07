angular.module('remote-control', ['ui.bootstrap'])

.controller('RemoteController', function ($scope) {	
	
	$scope.socket = io('http://192.168.1.65:2600');
	
	$scope.prev = function () {
		$scope.socket.emit("control-prev");
	};
	
	$scope.next = function () {
		$scope.socket.emit("control-next");
	};
	
	$scope.enter = function () {
		$scope.socket.emit("control-enter");
	};
	
	
});
