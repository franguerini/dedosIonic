angular.module('starter.controllers', [])

.controller('HomeCtrl', ['$scope', 'appServices', function($scope, appServices) {
	debugger
	$scope.createGame = function(){
		debugger
		appServices.createGame($scope.username, $scope.name);
	}
}])

.controller('lobbyCtrl', function($scope) {})

.controller('juegoCtrl', function($scope) {})

.controller('crearPartidaCtrl', function($scope) {

})


.controller('unirsePartidaCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
