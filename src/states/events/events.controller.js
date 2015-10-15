'use strict';

angular.module('ecco')

.controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = ['Event'];

function EventsCtrl(Event) {

  let vmEvents = this;

// LOCAL VARIABLES


// VIEW-MODEL (SCOPE) VARIABLES
  vmEvents.fakeEventsData = Event.get();

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION



// FUNCTION DEFINITIONS

}