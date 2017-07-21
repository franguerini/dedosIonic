(function(){
    angular.module('starter.services')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
        return socketFactory({
            ioSocket: io.connect('http://localhost:8000')
        });
    }
})();