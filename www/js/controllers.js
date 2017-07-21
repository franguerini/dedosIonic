angular.module('starter.controllers', [])

.controller('HomeCtrl', ['$scope', function($scope) {
}])

.controller('lobbyCtrl', ['$scope', 'appServices', function($scope, appServices) {
	appServices.getGame().then(function(data){
		$scope.game = data;
	})
}])

.controller('juegoCtrl', ['$scope', '$interval', 'appServices', function($scope, $interval, appServices) {
	SocketService.on('start game', function(data){
		$scope.countDown = 5;
        var stop = $interval(function() {
            if($scope.countDown == 0){
            	$interval.cancel(stop);
            	endGame();
            }
            $scope.countDown--;
          }, 100);
        function endGame(){
			appServices.endGame();
        }
    });
}])

.controller('crearPartidaCtrl', ['$scope', 'appServices', '$state', function($scope, appServices, $state) {
	$scope.data = {};
	$scope.createGame = function(){
		appServices.createGame($scope.data.username, $scope.data.name).then(function(){
			$state.go("lobby");
		});
	}
}])


.controller('unirsePartidaCtrl', ['$scope', 'appServices','$state', function($scope, appServices, $state) {
	$scope.settings = {
		enableFriends: true
	};
	$scope.data = {};
	$scope.joinGame = function(){
		appServices.joinGame($scope.data.username, $scope.data.gameId).then(function(){
			$state.go("lobby");
		});
	}
}]);
