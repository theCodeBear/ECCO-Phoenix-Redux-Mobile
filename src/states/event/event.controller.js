'use strict';

angular.module('ecco')

.controller('EventCtrl', EventCtrl);

EventCtrl.$inject = ['$stateParams', 'Event'];

function EventCtrl($stateParams, Event) {

  let vmEvent = this;

// LOCAL VARIABLES


// VIEW-MODEL (SCOPE) VARIABLES
  vmEvent.event = Event.show($stateParams.eventId);

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION


// FUNCTION DEFINITIONS


}