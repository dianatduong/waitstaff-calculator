var app = angular.module('myApp', [])
	app.controller('CalculatorController', function(){

    //submitted forms empty array
   	this.submittedMealData = [];
   
   	// validates input is only numbers
   	this.onlyNumbers = /^\d+$/;

    this.mealCount = 0;

    this.earningsAvgTip = []


    // function to submit the form after all validation has occurred
    this.submitForm = function(isValid){
      //if form is valid
      if (isValid) {
        this.mealCount++;
        //push users input into the array
        this.submittedMealData.push()
         
        //multiplying price and tip to get a dollar amount
        this.customerTotalTip = this.mealPrice * (this.mealTip / 100);

        //multiplying price to tax to get the totalTax and then add to price
        this.customerSubtotal = (this.mealPrice * (this.mealTax / 100)) + this.mealPrice

        // multiplyin the subtotal to the tip to get the totalTip and add to the subtotal to get the customerTotalCharge
        this.customerTotalCharge = this.customerSubtotal + this.customerTotalTip;
      }
      else {
        // show error messages
        this.submitted = true;
       }
    }

  

    this.cancelForm = function(){
      this.mealPrice = '';
      this.mealTax = '';
      this.mealTip = '';
    }

    this.resetForm = function(){
      this.mealPrice = '';
      this.mealTax = '';
      this.mealTip = '';
      this.mealCount = '';
      this.customerSubtotal = '';
      this.customerTotalTip = '';
    }

	})