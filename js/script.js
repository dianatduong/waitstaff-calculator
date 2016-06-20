var app = angular.module('myApp', [])
	app.controller('CalculatorController', function(){

	//initializing the cost property
	// this.cost = {};
	// console.log(this.cost)

    //submitted forms empty array
   	this.submittedMealData = [];
   
   	// validates input is only numbers
   	this.onlyNumbers = /^\d+$/;

    // this.tax = '';
    // this.tip = '';
    // this.totalTip = '';

    this.mealCount = 0;

    this.earningsAvgTip = []
    // function to submit the form after all validation has occurred
    this.submitForm = function(isValid){
      //if form is valid
      if (isValid) {
        this.mealCount++;
        //push users input into the array
         this.submittedMealData.push()
         // // clear form
         // this.cost = {};
         // console.log(this.cost)
         
         //multiplying price and tip to get a dollar amount
         this.customerTotalTip = this.mealPrice * (this.mealTip / 100);

         //multiplying price to tax to get the totalTax and then add to price
         this.customerSubtotal = (this.mealPrice * (this.mealTax / 100)) + this.mealPrice

        // multiplyin the subtotal to the tip to get the totalTip and add to the subtotal to get the customerTotalCharge
        this.customerTotalCharge = this.customerSubtotal + this.customerTotalTip;


         // this.earningsAvgTip.push(this.customerTotalTip).reduce(add, 0);
         // function add(a, b) {
         //  return a+b;
         // }

      }
      else {
        // show error messages
        this.submitted = true;
       }
    }

	})