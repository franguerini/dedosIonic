angular.module('starter.controllers', [])

.controller('HomeCtrl', ['$scope', 'appServices', function($scope, appServices) {
}])

.controller('lobbyCtrl', function($scope) {})

.controller('juegoCtrl', function($scope) {
	$scope.fingerIsUp = function () {
		alert("the finger is up");
	}
})

.controller('crearPartidaCtrl', ['$scope', 'appServices', function($scope, appServices) {
	$scope.createGame = function(){
		appServices.createGame($scope.username, $scope.name);
	}
}])


.controller('unirsePartidaCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
