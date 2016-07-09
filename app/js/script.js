angular
  .module('myApp', ['ngRoute', 'ngMessages', 'ngAnimate'])
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
  .factory('earningFactory', function() {
      var vm = this;

      vm.mealPrice = 0;
      vm.mealTax = 0;
      vm.mealTip = 0;
      
      vm.customerSubtotal = 0;
      vm.customerTotalTip = 0;
      vm.customerTotalCharge = 0;

      vm.earningsTipTotal = 0;
      vm.earningsMealCount = 0;
      vm.earningsAverageTip = 0;

      //Calculate the average tip per meal count
      vm.calcAvgTip = function(){
        vm.earningsAverageTip = vm.earningsTipTotal / vm.earningsMealCount
      }

      //Calulate overall total customer tips
      vm.calcTipTotal = function(){
        vm.earningsTipTotal += vm.customerTotalTip;
      }

      vm.charge = function(mealPrice, mealTip, mealTax){
        //Calculate Total Tip 
        vm.customerTotalTip = mealPrice * (mealTip / 100);
        //Calculate Subtotal (Meal plus tax)
        vm.customerSubtotal = (mealPrice * (mealTax / 100)) + mealPrice
        //Calculate total (subtotal plus tip)
        vm.customerTotalCharge = vm.customerSubtotal + vm.customerTotalTip;
        //increment meal count
        vm.earningsMealCount++;

        vm.calcTipTotal()
        vm.calcAvgTip()
      }

      vm.reset = function() {
          vm.mealPrice = 0;
          vm.mealTax = 0;
          vm.mealTip = 0;
          vm.customerSubtotal = 0;
          vm.customerTotalTip = 0;
          vm.customerTotalCharge = 0;
           vm.earningsTipTotal = 0;
          vm.earningsMealCount = 0;
          vm.earningsAverageTip = 0;
      }
      return vm;
      
  })
  .controller('HomeCtrl', function(){
      
  })
  .controller('NewMealCtrl', function(earningFactory){
       var vm = this;
        vm.earningFactory = earningFactory
        //submitted forms empty array
        vm.submittedMealData = [];
        // function to submit the form after all validation has occurred
        vm.submitForm = function(isValid){
          if (isValid){
            //push users input into the array
            vm.submittedMealData.push()

            vm.earningFactory.charge(vm.mealPrice, vm.mealTip, vm.mealTax)

            //clear input values
            vm.mealPrice = 0;
            vm.mealTax = 0;
            vm.mealTip = 0;
            vm.inputForm.$setPristine()
          }
        }
        // function to cancel meal details input
        vm.cancelForm = function(){
          vm.mealPrice = 0;
          vm.mealTax = 0;
          vm.mealTip = 0;
          vm.inputForm.$setPristine()
        }  
  })
  .controller('MyEarningsCtrl', function(earningFactory){
       var vm = this;
       vm.earningFactory = earningFactory
    
        // function to reset all fields
        vm.resetForm = function(){
          earningFactory.reset()
        }
})