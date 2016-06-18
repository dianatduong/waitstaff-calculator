var app = angular.module('myApp', [])
	app.controller('CalculatorController', function(){

	//initializing the cost property
	// this.cost = {};
	// console.log(this.cost)

    //submitted forms empty array
   	this.submittedData = [];
   
   	// validates input is only numbers
   	this.onlyNumbers = /^\d+$/;

    // this.tax = '';
    // this.tip = '';
    // this.totalTip = '';

    this.mealCount = 0;

    // function to submit the form after all validation has occurred
    this.submitForm = function(isValid){
      //if form is valid
      if (isValid) {
        this.mealCount++;
        //push users input into the array
         this.submittedData.push()
         // // clear form
         // this.cost = {};
         // console.log(this.cost)

         //converts tax to a decimal number
         this.totalTax = this.mealTax / 100;
         
         //converts tip to a decimal number
         this.customerTotalTip = this.mealTip / 100;

         //multiplying price to tax to get the totalTax and then add to price
         this.customerSubtotal = (this.mealPrice * this.totalTax) + this.mealPrice

        // multiplyin the subtotal to the tip to get the totalTip and add to the subtotal to get the customerTotalCharge
         this.customerTotalCharge = (this.customerSubtotal * this.customerTotalTip) + this.customerSubtotal

         
      }
      else {
        // show error messages
        this.submitted = true;
       }
    }

	})