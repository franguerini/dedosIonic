angular.module('starter.controllers', [])

.controller('HomeCtrl', ['$scope', function($scope) {
}])

.controller('lobbyCtrl', ['$scope', 'appServices', function($scope, appServices) {
	appServices.getGame().then(function(data){
		$scope.game = data;
	})
}])

.controller('juegoCtrl', function($scope) {})

.controller('crearPartidaCtrl', ['$scope', 'appServices', '$state', function($scope, appServices, $state) {
	$scope.createGame = function(){
		appServices.createGame($scope.username, $scope.name).then(function(){
			$state.go("lobby");
		});
	}
}])


.controller('unirsePartidaCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
