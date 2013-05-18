'use strict';

angular.module('ngViewAnimateApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
          templateUrl:'views/main.html',
          controller:'MainCtrl'
        })
            .when('/one', {
          templateUrl:'views/one.html',
          controller:'PageOneCtrl'
        })
            .when('/two', {
          templateUrl:'views/two.html',
          controller:'PageTwoCtrl'
        })
            .otherwise({
          redirectTo:'/'
        });
      });
