'use strict';

angular.module('ecco')

.controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = [];

function EventsCtrl() {

  let vmEvents = this;

// LOCAL VARIABLES


// VIEW-MODEL (SCOPE) VARIABLES
  vmEvents.fakeEventsData = [
    {
      title: 'Go Crazy in SF',
      description: 'Party downtown!',
      photo: 'http://www.sanfrancisco.travel/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg',
      type: 'Party',
      city: 'San Francisco',
      state: 'CA',
      dateStart: '10/23/15',
      timeStart: '7:00pm',
      peopleGoing: 21
    },
    {
      title: 'Get Down in Austin',
      description: "A music festival downtown that is gonna be off da hooooook ('em horns!)",
      photo: 'http://bentleyinsuranceagency.com/wp-content/uploads/2010/10/Austin.jpg',
      type: 'Music',
      city: 'Austin',
      state: 'TX',
      dateStart: '10/27/15',
      timeStart: '8:30pm',
      peopleGoing: 38
    }
  ];

// FUNCTION ASSIGNMENTS


// CONTROLLER EXECUTION




// FUNCTION DELCARATIONS

}