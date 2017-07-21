angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    var myIoSocket = io.connect('http://localhost:8000');
})

.controller('lobbyCtrl', function($scope) {})

.controller('juegoCtrl', function($scope) {})

.controller('crearPartidaCtrl', function($scope, Chats) {


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('unirsePartidaCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
