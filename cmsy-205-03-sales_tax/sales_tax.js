"use strict";
var $ = function (id) {
  return document.getElementById(id); 
}
//Directions: If you haven’t already done so, add data validation to this application. The subtotal entry should be a valid, positive number that’s less than 10,000. The tax rate should be a valid, positive number that’s less than 12. The error messages should be displayed in the span elements to the right of the text boxes, and the error messages should be:
//Must be a positive number less than $10,000
//Must be a positive number less than 12
 
//Directions: Add JavaScript code that moves the cursor to the Subtotal field when the application starts and when the user clicks on the Calculate button.
//global variables being used

var total, sales_tax
var calculate_click = function () {
//convert variables from input
	var subtotal = parseFloat( $("subtotal").value );
    var tax_rate  = parseFloat( $("tax_rate").value );
    //make sure numbers are numbers 
       // if (isNaN(subtotal) || isNaN(tax_rate)) {
            //they are not numbers, send message
           // alert("Please use numbers."); } 
        if  (subtotal <= 0 || subtotal > 10000) {
            //check subtotal to be positive number thats less than 10,000
            $("subtotal_message").innerHTML = "Must be a positive number less than $10,000";
               }
          if  (tax_rate <= 0 || tax_rate > 12)  {
            //check tax rate to be positive number less than 12
             $("tax_rate_message").innerHTML = "Must be a positive number less than 12";
               }
    else {
     //calculate subtotal tax_rate
        sales_tax = (subtotal * tax_rate) / 100;
        total = subtotal + sales_tax;
        
    // place the value in the form
    document.getElementById("sales_tax").value = sales_tax;
    document.getElementById("total").value = total; 
	}
}
 
//Directions: Add the JavaScript event handler for the click event of the Clear button. This should clear all text boxes, restore the starting messages, and move the cursor to the Subtotal field.
//Directions: Add JavaScript event handlers for the click events of the Subtotal and Tax Rate text boxes. Each handler should clear the data from the text box.  
var clear_click = function () {
document.getElementById('subtotal').value = ' ';
document.getElementById('tax_rate').value = ' ';
document.getElementById('total').value = ' ';
document.getElementById('sales_tax').value = ' ';
    //author's own questions: why doesn't document.getelementbyid clear the two ID's below this comment? but this does.. ? 
$("subtotal_message").innerHTML = 'Enter order subtotal'; 
$("tax_rate_message").innerHTML =  'Enter sales tax rate (99.9)'; 
//move the cursor to the Subtotal field.
document.getElementById('subtotal').focus();
}

//run the program on click
window.onload = function () {
    $("calculate").onclick = calculate_click;

}