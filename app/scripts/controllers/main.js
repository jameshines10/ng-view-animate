'use strict';

angular.module('ngViewAnimateApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location) {
        if($location.path() == '/'){
            $rootScope.homeActive = "active";
            $rootScope.oneActive = "";
            $rootScope.twoActive = "";
        }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
    .controller('PageOneCtrl', function($rootScope, $location){
        if($location.path() == '/one'){
            $rootScope.oneActive = "active";
            $rootScope.homeActive = "";
            $rootScope.twoActive = "";
        }
    })
    .controller('PageTwoCtrl', function($rootScope, $location){
        if($location.path() == '/two'){
            $rootScope.twoActive = "active";
            $rootScope.homeActive = "";
            $rootScope.oneActive = "";
        }
    });
