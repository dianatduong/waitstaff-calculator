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
      vm.earningsTipTotal = 0;
      vm.customerSubtotal = 0;
      vm.customerTotalTip = 0;
      vm.customerTotalCharge = 0;
      vm.mealCount = 0;
      vm.avgTip = 0;
      vm.averageTip = 0;

      vm.reset = function() {
          vm.mealPrice = 0;
          vm.mealTax = 0;
          vm.mealTip = 0;
          vm.earningsTipTotal = 0;
          vm.customerSubtotal = 0;
          vm.customerTotalTip = 0;
          vm.customerTotalCharge = 0;
          vm.mealCount = 0;
          vm.avgTip = 0;
          vm.averageTip = 0;
      }
      return vm;
      
  })
  .controller('HomeCtrl', function(){
      
  })
  .controller('NewMealCtrl', function(earningFactory){

       var vm = this;
        console.log(earningFactory)

        //submitted forms empty array
        vm.submittedMealData = [];
          vm.earningsTipTotal = 0;
          vm.mealCount = earningFactory.mealCount;

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
            earningFactory.mealCount++;

            //clear input values
            vm.mealPrice = 0;
            vm.mealTax = 0;
            vm.mealTip = 0;


            vm.tipTotal()
            vm.averageTip()
            vm.inputForm.$setPristine()
          }
        }
        //Calculate the average tip per meal count
        vm.averageTip = function(){
          vm.avgTip = earningFactory.earningsTipTotal / earningFactory.mealCount;
          earningFactory.averageTip = earningFactory.earningsTipTotal / earningFactory.mealCount
        }

        //Calulate overall total customer tips
        vm.tipTotal = function(){
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

     //   vm.earningsTipTotal = earningFactory.earningsTipTotal
     //  vm.mealCount = earningFactory.mealCount
     // vm.averageTip = earningFactory.averageTip

     vm.earningFactory = earningFactory
       console.log(earningFactory)

          // function to reset all fields
          vm.resetForm = function(){
            earningFactory.reset()
            console.log(earningFactory)
            // vm.earningsTipTotal = 0;
            // vm.customerSubtotal = 0;
            // vm.customerTotalTip = 0;
            // vm.customerTotalCharge = 0;
            // vm.mealCount = 0;
            // vm.avgTip = 0;
            // vm.inputForm.$setPristine()
          }
  })


