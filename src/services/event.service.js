'use strict';

angular.module('ecco')

.factory('Event', Event);

Event.$inject = ['$http', '_'];

function Event($http, _ ) {

  // let events = [];
  let events = [
    {
      _id: '001',
      title: 'Go Crazy in SF',
      description: 'Party downtown!',
      photo: 'http://www.sanfrancisco.travel/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg',
      type: 'Party',
      website: 'http://www.google.com',
      streetAddress: '45 Bonkers Rd',
      city: 'San Francisco',
      state: 'CA',
      zip: '19001',
      dateStart: '10/23',
      timeStart: '7:00pm',
      dateEnd: '10/23',
      timeEnd: '11:00pm',
      peopleGoing: 21,
      twitterHash: '#SFparty'
    },
    {
      _id: '002',
      title: 'Get Down in Austin',
      description: "A music festival downtown that is gonna be off da hooooook ('em horns!)",
      photo: 'http://bentleyinsuranceagency.com/wp-content/uploads/2010/10/Austin.jpg',
      type: 'Music',
      website: 'http://toddkronenberg.com',
      streetAddress: '123 MoPac Hwy',
      city: 'Austin',
      state: 'TX',
      zip: '78493',
      dateStart: '10/27',
      timeStart: '8:30pm',
      dateEnd: '10/28',
      timeEnd: '1:30am',
      peopleGoing: 38,
      twitterHash: '#ATXmuze'
    }
  ];

  let service = {
    get: get,
    show: show
  };

  return service;


  function get() {
    return events;
  }

  function show(eventId) {
    return _.find(events, {_id: eventId});
  }



}