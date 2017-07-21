angular.module('starter.services')
.factory('appServices', ['SocketService', '$q', function(SocketService, $q) {
  var game = {};
  function getGame(){
    var deferer = $q.defer();
    deferer.resolve(game);
    return deferer.promise;
  }
  function createGame(username, name){
    var deferer = $q.defer();
    SocketService.emit('new game', {username: username, gamename: name});
    SocketService.on('new game', function(data){
        game.username = data.username;
        game.gamename = data.gamename;
        game.gameId = data.gameId;
        deferer.resolve(data);
    });
    return deferer.promise;
  }
  function joinGame(username, gameId){
    var deferer = $q.defer();
    SocketService.emit('join game', {username: username, gameId: gameId});
    SocketService.on('join game', function(data){
        game.username = data.username;
        game.gameId = data.gameId;
        deferer.resolve(data);
    });
    return deferer.promise;
  }
  function endGame(status){
    var deferer = $q.defer();
    SocketService.emit('finish game', {username: username, gameId: gameId});
    SocketService.on('finish game', function(data){
        deferer.resolve(data);
    });
    return deferer.promise;
  }
  return {
    createGame: function(username, name){
      return createGame(username, name);
    },
    getGame: function(){
      return getGame();
    },
    endGame: function(status){
      return endGame(status);
    },
    joinGame: function(username, gameId){
      return joinGame(username, gameId);
    }
  };
}]);
