$(document).ready(function() {
	$(":text").after("<span class='error'>*</span>");
	$("#arrival_date").focus;
		$("#reservation_form").validate({
			
				rules: {
					field: {
						required: true
					}
			}
}); 
});

//Add jQuery code that validates all the text boxes on the form using the validation and additional-methods plugins. 
//All of the text boxes require a value. 
//In addition, the arrival date, the email address, and phone number must be in valid formats,
//and the number of nights must be a positive integer.