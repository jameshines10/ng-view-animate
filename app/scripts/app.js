'use strict';

angular.module('ngViewAnimateApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
          templateUrl:'views/main.html',
          controller:'MainCtrl',
          activeItem: 'home'
        })
            .when('/one', {
          templateUrl:'views/one.html',
          controller:'PageOneCtrl',
          activeItem: 'one'
        })
            .when('/two', {
          templateUrl:'views/two.html',
          controller:'PageTwoCtrl',
          activeItem: 'two'
        })
            .otherwise({
          redirectTo:'/'
        });
      });
