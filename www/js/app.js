// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  //set button at bottom
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
        
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.dash-detail', {
      url: '/dash/:dashId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-detail.html',
          controller: 'DashDetailCtrl'
        }
      }
    })

    .state('tab.find-order', {
      url: '/find/dash-order',
      views: {
        'tab-find': {
          templateUrl: 'templates/dash-order.html',
          controller: 'DashOrderCtrl'
        }
      }
    })

    .state('tab.find-detail', {
      url: '/find/:dashId',
      views: {
        'tab-find': {
          templateUrl: 'templates/find-detail.html',
          controller: 'DashDetailCtrl'
        }
      }
    })

    .state('tab.dash-order', {
      url: '/dash-order',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-order.html',
          controller: 'DashOrderCtrl'
        }
      }
    })

    .state('tab.dash-school', {
      url: '/dash-school',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-school.html'
        }
      }
    })
    .state('tab.dash-message', {
      url: '/dash-message',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-message.html',
          controller: 'DashMessageCtrl'
        }
      }
    })

  .state('tab.corporation', {
    url: '/corporation',
    views: {
      'tab-corporation': {
        templateUrl: 'templates/tab-corporation.html',
        controller: 'CorporationCtrl'
      }
    }
  })

  .state('tab.find', {
    url: '/find',
    views: {
      'tab-find': {
        templateUrl: 'templates/tab-find.html',
        controller: 'FindCtrl'
      }
    }
  })

  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('tab.mine', {
    url: '/mine',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        controller: 'MineCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
