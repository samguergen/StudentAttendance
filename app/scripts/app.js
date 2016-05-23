angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = false;
      $stateProvider
        .state('home', {
            url: '/home',
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
    });
  });


