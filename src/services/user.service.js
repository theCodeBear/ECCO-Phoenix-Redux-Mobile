'use strict';

angular.module('ecco')

.factory('User', User);

User.$inject = ['$http'];

function User($http) {

  let user = {};
  let guest = false;

  let service = {
    get: get,
    storeAsGuest: storeAsGuest,
    resetGuest: resetGuest,
    isUserGuest: isUserGuest
  };

  return service;


  function get() {
    return user;
  }

  function storeAsGuest() {
    guest = true;
  }

  function resetGuest() {
    guest = false;
  }

  function isUserGuest() {
    return guest;
  }

}