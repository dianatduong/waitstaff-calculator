angular
  .module('myApp', ['ngRoute', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller :  'HomeCtrl as vm'
    })
    .when('/new-meal', {
      templateUrl : 'new-meal.html',
      controller : 'NewMealCtrl as vm'
    })
    .when('/my-earnings', {
      templateUrl : 'my-earnings.html',
      controller : 'MyEarningsCtrl as vm'
    })
  }])
  .controller('HomeCtrl', function(){
      var vm = this;
  })
  .controller('NewMealCtrl', function(){
      var vm = this;
      
  })
  .controller('MyEarningsCtrl', function(){
      var vm = this;
    
  })


