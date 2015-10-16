'use strict';

angular.module('ecco')

.controller('CreateEventCtrl', CreateEventCtrl);

CreateEventCtrl.$inject = [];

function CreateEventCtrl() {

  let vmCreateEv = this;

// LOCAL VARIABLES


// VIEW-MODEL (SCOPE) VARIABLES
  vmCreateEv.createEvent = createEvent;
  vmCreateEv.checkDates = checkDates;

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION


// FUNCTION DEFINITIONS
  function createEvent(event) {
    console.log(event);
  }

  function checkDates() {
    if (vmCreateEv.event.dateStart && vmCreateEv.event.dateEnd) {
      let datesAreGood = vmCreateEv.event.dateStart <= vmCreateEv.event.dateEnd;
      console.log('dates are good', datesAreGood);
    }
  }

}