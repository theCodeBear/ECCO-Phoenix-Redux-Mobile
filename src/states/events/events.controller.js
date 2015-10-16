'use strict';

angular.module('ecco')

.controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = ['$scope', 'Event', 'User'];

function EventsCtrl($scope, Event, User) {

  let vmEvents = this;

// LOCAL VARIABLES


// VIEW-MODEL (SCOPE) VARIABLES
  vmEvents.fakeEventsData = Event.get();


// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION
$scope.$on('$ionicView.enter', function(e) {
  vmEvents.userNotGuest = userNotGuest();
});


// FUNCTION DEFINITIONS
  function userNotGuest() {
    return !User.isUserGuest();
  }

}