angular
  .module('myApp', ['ngRoute', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller :  'HomeCtrl as home'
    })
    .when('/new-meal', {
      templateUrl : 'new-meal.html',
      controller : 'NewMealCtrl as meal'
    })
    .when('/my-earnings', {
      templateUrl : 'my-earnings.html',
      controller : 'MyEarningsCtrl as earnings'
    })
  }])
  .controller('HomeCtrl', function($scope){
      var vm = this;
  })
  .controller('NewMealCtrl', function($scope){
      var vm = this;
      
  })
  .controller('MyEarningsCtrl', function($scope){
      var vm = this;
    
  })


