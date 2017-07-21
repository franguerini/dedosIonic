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
  function joinGame(username, groupId){
    var deferer = $q.defer();
    SocketService.emit('join game', {username: username, groupId: groupId});
    SocketService.on('join game', function(data){
        game.username = data.username;
        game.gameId = data.gameId;
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
    joinGame: function(username, groupId){
      return joinGame(username, groupId);
    }
  };
}]);
