var app = angular.module('myApp', ['ngMessages'])
	app.controller('CalculatorController', function(){

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

    //submitted forms empty array
   	vm.submittedMealData = [];

    // function to submit the form after all validation has occurred
    vm.submitForm = function(isValid){
      //if form is valid
      if (isValid){

        vm.mealCount++;
        //push users input into the array
        vm.submittedMealData.push()
         
        //multiplying price and tip to get a dollar amount
        vm.customerTotalTip = vm.mealPrice * (vm.mealTip / 100);

        //multiplying price to tax to get the totalTax and then add to price
        vm.customerSubtotal = (vm.mealPrice * (vm.mealTax / 100)) + vm.mealPrice

        // multiplyin the subtotal to the tip to get the totalTip and add to the subtotal to get the customerTotalCharge
        vm.customerTotalCharge = vm.customerSubtotal + vm.customerTotalTip;

        vm.tipTotal()
        vm.averageTip()
      
        vm.mealPrice = 0;
        vm.mealTax = 0;
        vm.mealTip = 0;
      }
    }
  
    //function to calculate the average tip per meal count
    vm.averageTip = function(){
      vm.avgTip = vm.earningsTipTotal / vm.mealCount;
    }

    //function to calulate overall total custoer tips
    vm.tipTotal = function(){
      vm.earningsTipTotal += vm.customerTotalTip;
    }

    // function to cancel meal details input
    vm.cancelForm = function(){
      vm.mealPrice = 0;
      vm.mealTax = 0;
      vm.mealTip = 0;
    }

    // function to reset all fields
    vm.resetForm = function(){
      vm.mealPrice = 0;
      vm.mealTax = 0;
      vm.mealTip = 0;
      vm.earningsTipTotal = 0;
      vm.customerSubtotal = 0;
      vm.customerTotalTip = 0;
      vm.customerTotalCharge = 0;
      vm.mealCount = 0;
      vm.avgTip = 0;
    }

	})