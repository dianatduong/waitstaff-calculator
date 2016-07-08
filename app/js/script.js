
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

 


      vm.reset = function() {
          vm.mealPrice = 0;
          vm.mealTax = 0;
          vm.mealTip = 0;
          vm.earningsTipTotal = 0;
          vm.customerSubtotal = 0;
          vm.customerTotalTip = 0;
          vm.customerTotalCharge = 0;
          vm.earningsMealCount = 0;
         
          vm.earningsAverageTip = 0;
      }
      return vm;
      
  })
  .controller('HomeCtrl', function(){
      
  })
  .controller('NewMealCtrl', function(earningFactory){

       var vm = this;

        //submitted forms empty array
        vm.submittedMealData = [];

        // function to submit the form after all validation has occurred
        vm.submitForm = function(isValid){
          if (isValid){
            //push users input into the array
            vm.submittedMealData.push()
            //Calculate Total Tip 
            vm.customerTotalTip = vm.mealPrice * (vm.mealTip / 100);
            //Calculate Subtotal (Meal plus tax)
            vm.customerSubtotal = (vm.mealPrice * (vm.mealTax / 100)) + vm.mealPrice
            //Calculate total (subtotal plus tip)
            vm.customerTotalCharge = vm.customerSubtotal + vm.customerTotalTip;
            //increment meal count
            earningFactory.earningsMealCount++;

            vm.calcTipTotal()
            vm.calcAvgTip()

            //clear input values
            vm.mealPrice = 0;
            vm.mealTax = 0;
            vm.mealTip = 0;
            vm.inputForm.$setPristine()
          }
        }
        //Calculate the average tip per meal count
        vm.calcAvgTip = function(){
          earningFactory.earningsAverageTip = earningFactory.earningsTipTotal / earningFactory.earningsMealCount
        }

        //Calulate overall total customer tips
        vm.calcTipTotal = function(){
          earningFactory.earningsTipTotal += vm.customerTotalTip;
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