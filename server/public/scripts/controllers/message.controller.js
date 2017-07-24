myApp.controller('MessageController', ['$http', function($http) {
    var vm = this;
    vm.newMessage = {};

    // get the people data from the server and fill the DOM
    getMessage();

    vm.addMessage = function() {
      console.log('gonna make a new message', vm.newMessage);

      $http.post('/message', vm.newMessage)
        .then(function(response) {
          console.log('GOT ONE!', response);
          getMessage();
        });
    }

    // vm.updatePerson = function(id) {
    //   console.log('update person with id: ', id);
    //   var data = {location: 'Idaho'};
    //   $http.put('/person/' + id, data)
    //     .then(function(response) {
    //       getPeople();
    //     });
    // }

    // vm.addPoints = function(id, points){
    //   console.log('going to add 100 points');
    //   points += 100;
    //   var internetPoints = {internetPoints: points};
    //   $http.put('/person/addPoints/' + id, internetPoints)
    //     .then(function(response){
    //       getPeople();
    //     });
    // }

    vm.deleteMessage = function(id) {
      console.log('delete message with id: ', id);
      $http.delete('/message/' + id)
        .then(function(response) {
          getMessage();
        });
    }

    function getMessage() {
      $http.get('/message').then(function(response) {
        console.log('getting ALL DEM MESSAGES',response.data);
        vm.displayMessage = response.data;
      });
    }



}]);
