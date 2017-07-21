angular.module('starter.services')
.factory('appServices', ['SocketService', function(SocketService) {
  function createGame(username, name){
    SocketService.emit('new game', {username: username, gamename: name});
  }
  return {
    createGame: function(username, name){
      return createGame(username, name);
    }
  };
}]);
