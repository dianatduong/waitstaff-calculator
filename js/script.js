var app = angular.module('myApp', ['ngMessages'])
	app.controller('CalculatorController', function(){

    this.mealPrice = 0;
    this.mealTax = 0;
    this.mealTip = 0;
    this.earningsTipTotal = 0;
    this.customerSubtotal = 0;
    this.customerTotalTip = 0;
    this.customerTotalCharge = 0;
    this.mealCount = 0;
    this.avgTip = 0;

    //submitted forms empty array
   	this.submittedMealData = [];

    // function to submit the form after all validation has occurred
    this.submitForm = function(isValid){
      //if form is valid
      if (isValid){

        this.mealCount++;
        //push users input into the array
        this.submittedMealData.push()
         
        //multiplying price and tip to get a dollar amount
        this.customerTotalTip = this.mealPrice * (this.mealTip / 100);

        //multiplying price to tax to get the totalTax and then add to price
        this.customerSubtotal = (this.mealPrice * (this.mealTax / 100)) + this.mealPrice

        // multiplyin the subtotal to the tip to get the totalTip and add to the subtotal to get the customerTotalCharge
        this.customerTotalCharge = this.customerSubtotal + this.customerTotalTip;

        this.tipTotal()
        this.averageTip()
        
      
        this.mealPrice = 0;
        this.mealTax = 0;
        this.mealTip = 0;
      }
    }
  
    //function to calculate the average tip per meal count
    this.averageTip = function(){
      this.avgTip = this.earningsTipTotal / this.mealCount;
    }

    //function to calulate overall total custoer tips
    this.tipTotal = function(){
      this.earningsTipTotal += this.customerTotalTip;
    }

    // function to cancel meal details input
    this.cancelForm = function(){
      this.mealPrice = 0;
      this.mealTax = 0;
      this.mealTip = 0;
    }

    // function to reset all fields
    this.resetForm = function(){
      this.mealPrice = 0;
      this.mealTax = 0;
      this.mealTip = 0;
      this.earningsTipTotal = 0;
      this.customerSubtotal = 0;
      this.customerTotalTip = 0;
      this.customerTotalCharge = 0;
      this.mealCount = 0;
      this.avgTip = 0;
    }

	})