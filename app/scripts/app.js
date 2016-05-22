angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../index.html',
            controller: 'AppCtrl'
        });
        // .state('signup', {
        //     url: '/signup',
        //     templateUrl: 'signup.html',
        //     controller: 'HomeCtrl'
        // });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
  })
    .run(function() {
      console.log('angular app running');
    });
