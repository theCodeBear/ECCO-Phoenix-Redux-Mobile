'use strict';

angular.module('ecco')

.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope'];

function LoginCtrl($scope) {

  $scope.blah = 'toddie';
  
}