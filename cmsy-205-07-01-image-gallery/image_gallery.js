 /* 
1. Add an event handler for the ready event method.   $(document).ready(function()  ?

2. Use the each method to run a function for each <a> element in the unordered list of items. 

3. Then, add jQuery code that gets the URL and caption for each image and preloads the image. 
You can get the URL from the href attribute of the <a> element, and you can get the caption from the title attribute.

4. Add an event handler for the click event of each link. The function for this event handler should accept a parameter named evt. The jQuery code for this event handler should display the image and caption for the link that was clicked. In addition, it should use the evt parameter to cancel the default action of the link.

5. Add a jQuery statement that moves the focus to the first link on the page when the page is loaded.

https://dzone.com/articles/using-the-jquery-each-function
*/

 
$(document).ready(function() {  
 
 
    $( "#image_list a" ).each(function() { 
        var preload1 = new Image();                 // make var preload a new image
        preload1.src = $(this).attr("href");       //href desistation is set to var 
    });
    
    
    $("#image_list a").click(function(evt){ //on click, make function event apply to id image list 'a'
        evt.preventDefault();
        
        var newHREF = $(this).attr("href");                //set oldURL to current href
        $("#image").attr("src", newHREF);       // had to switch "href" to "src" for it to work
        
        var caption = $(this).attr("title");
        $("#caption").text(caption);
        
        
        
        }); //end click function
 //focus
  $("li:first-child a").focus();
 
});//end document ready