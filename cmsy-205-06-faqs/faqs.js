/*window.onload = function () {
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var h2Node;
*/
/*This exercise has you make a minor modification to the FAQs application in chapter 6.  When you’re done, this application should work the same as before, except that only one answer can be displayed at a time.  In other words, when the user clicks on a heading to display the answer, the other answers must be hidden.  This takes just a few more lines of code, but you have to think it through.
 
Rewrite the code in the JavaScript file so only one answer can be displayed at a time.  Modify the FAQs application.

 
'this; refers to refers to that specific h2 object in the DOM
$ refers to the jQuery library. You can code selectors by using the CSS syntax within quotes/[arentheses $("faqs p');
i'm confused on what's being asked for -rewrite in Jquery? */
    
    
/*
 // attach event handler for each h2 tag - loop
 for (var i = 0; i < h2Elements.length; i++ ) {
  h2Node = h2Elements[i];
 
 // Attach event handler onclick to variable
   h2Node.onclick = function () {
            var h2 = this; // h2 is the current headingNode object - this variable equals this
            
             
			if (h2.hasAttribute("class")) {
				h2.removeAttribute("class");	
			}
			else {
				h2.setAttribute("class", "minus");
			}
            
            // toggle div visibility by adding or removing a class
			if (h2.nextElementSibling.hasAttribute("class")) {
				h2.nextElementSibling.removeAttribute("class");
			}
			else {
				h2.nextElementSibling.setAttribute("class", "open");
			}
		}
    }
    $("first_link").focus();
    
    $("#faqs h2").toggle(
        function() {
            $(this).addClass("minus");
            $(this).next().show();
        },
        function() {
            $(this).removeClass("minus");
            $(this).next().hide();
            
        }
    );
 
}
var $ = function (id) {
	return document.getElementById(id);
}
*/
//jquery only

$(document).ready(function(){
    $('#faqs h2').click(function(){
        $(this).next('.content').toggle();
    })
});