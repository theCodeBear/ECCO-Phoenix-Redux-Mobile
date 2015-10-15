'use strict';

angular.module('ecco')

.factory('User', User);

User.$inject = ['$http'];

function User($http) {

  let user = {};

  let service = {
    get: get,
    storeAsGuest: storeAsGuest
  };

  return service;


  function get() {
    return user;
  }

  function storeAsGuest() {
    user = 'guest';
  }

}