'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular module
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ecco', ['ionic'])

.run(($ionicPlatform) => {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'states/login/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/menu/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'states/events/events.html',
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.eventsAttended', {
      url: '/eventsAttended',
      views: {
        'menuContent': {
          templateUrl: 'states/eventsAttended/eventsAttended.html',
          controller: 'EventsAttendedCtrl'
        }
      }
    })
    .state('app.eventsCreated', {
      url: '/eventsCreated',
      views: {
        'menuContent': {
          templateUrl: 'states/eventsCreated/eventsCreated.html',
          controller: 'EventsCreatedCtrl'
        }
      }
    })

  .state('app.chats', {
    url: '/chats',
    views: {
      'menuContent': {
        templateUrl: 'states/chats/chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'states/settings/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'states/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'states/notifications/notifications.html',
        controller: 'NotificationsCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
