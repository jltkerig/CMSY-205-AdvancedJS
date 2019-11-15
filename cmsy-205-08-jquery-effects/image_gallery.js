$(document).ready(function() {
	$("#image_list a").each(function() {
		// get the image URL and caption for each image
		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

        
		// preload images - The Image() constructor creates a new HTMLImageElement instance. It is functionally equivalent to document.createElement('img').
		var galleryImage = new Image();
        
		galleryImage.src = imageURL;
        
      
		// set up the event handlers for each link
		$(this).click(function(evt) {
            $('#image').hide();
           
            $('#caption').hide();
           
            $("#image").attr("src", imageURL);

			$("#caption").text(caption);
                   $('#image').slideDown(2000);
            $('#caption').slideDown(2000);
			evt.preventDefault();
 
		}); 
	}); 

	$("#image_list:first-child:first-child").focus();
}); 

// $('#image').fadeOut(); 
// $(this).fadeIn();

//Modify the jQuery so that when a link is clicked, the current image is hidden using a sliding motion that takes two seconds.
//Modify the jQuery so that after the caption and URL are set for the new image, that image is displayed using a sliding motion that takes two seconds.

