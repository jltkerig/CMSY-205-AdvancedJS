 $(document).ready(function() {
 
	$("#arrival_date").focus;
	 
	$("#reservation_form").validate({// initialize the plugin on your form.
			   // rules, options, and/or callback function
		
				rules: {
					phone: {
						required: true,
						number: true,
                		phoneUS: true
            		},
					email:{
						required:true,
						email2:true
					},
					arrival_date:{
						required:true,
						number: true
						
					},
					
					nights:{required:true,
							number: true,
							 min: 1 },
				
					name:{required:true
						 },
					messages: {
						nights: {
							min: "Value must be greater than 0"	
					}
					}
			}//end rules
		}); //end rules//options area
	 
// trigger validity test of any element using the .valid() method.
    $('#reservation_form').valid();
 // the .valid() method also returns a boolean...
    if ($('#myform').valid()) {
        // something to do if form is valid
    }	 
});
//Add jQuery code that validates all the text boxes on the form using the validation and additional-methods plugins. x
//All of the text boxes require a value. x
//In addition, the arrival date, the email address, and phone number must be in valid formats,
//and the number of nights must be a positive integer.