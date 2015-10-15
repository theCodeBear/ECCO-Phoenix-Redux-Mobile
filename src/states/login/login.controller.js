'use strict';

angular.module('ecco')

.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', '$interval', 'User'];

function LoginCtrl($scope, $state, $interval, User) {

  let vmLogin = this;


// LOCAL VARIABLES
  let interval;

// VIEW-MODEL (SCOPE) VARIABLES


// FUNCTION ASSIGNMENTS
  vmLogin.enterAsGuest = enterAsGuest;
  vmLogin.loopMottos = loopMottos;


// CONTROLLER EXECUTION

  // starts motto looping when user enters view
  $scope.$on('$ionicView.enter', function(e) {
    vmLogin.loopMottos();  
  });

  // stop motto looping when user leaves view
  $scope.$on('$ionicView.leave', function(e) {
    $interval.cancel(interval);
  });

  




// FUNCTION DELCARATIONS

  function enterAsGuest() {
    User.storeAsGuest();
    console.log('user:', User.get());
    $state.go('app.events');
  }

  function loopMottos() {
    let mottos = ['Be Social', 'Meet People', 'Get Hired', 'Make Friends'];
    vmLogin.motto = mottos[0];
    let count = 1;
    interval = $interval(() => {
      if (count >= mottos.length) count = 0;
      vmLogin.motto = mottos[count++];
    }, 3000);
  }

}