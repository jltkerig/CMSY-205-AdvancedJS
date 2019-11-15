/* 
1Code a statement that adds a span element with the class “error” and the value “*” after each text box.  

2Code a statement that moves the focus to the Arrival date text box.

3Code an event handler for the submit event of the form.

This event handler should validate the user entries and cancel the submission of the form if any of the entries are invalid.

The validation is as follows:

A value must be entered into each text box.

The number of nights must be numeric.

The email address must match the pattern that’s provided.
*/

$(document).ready(function() {
    $("#arrival_date").focus;
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$(":text").after("<span class='error' style='color:red;'>*</span>");
 
    
$("#reservation_form").submit(
		function(event) {
			var isValid = true;
			if ($("#arrival_date").val() == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");				
			}
 //
			if ($("#nights").val() == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN($("#nights").val())) {
				$("#nights").next().text("This field must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}	
    //
			var name = $("#name").val().trim();
        
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
						
			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 
			
			// phone number
			if ($("#phone").val() == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			}
			
			if (isValid == false) {
				event.preventDefault();				
			}
		}  
	); 
}); 