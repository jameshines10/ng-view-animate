'use strict';

angular.module('ngViewAnimateApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, $route) {
        $rootScope.viewAnimation = "{enter: 'view-enter', leave: 'view-leave'}";

        $rootScope.$route = $route;
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      })
    .controller('PageOneCtrl', function($rootScope, $location, $route){
        $rootScope.$route = $route;
      })
    .controller('PageTwoCtrl', function($rootScope, $location, $route){
        $rootScope.$route = $route;
      });
