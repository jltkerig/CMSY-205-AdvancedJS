/*
In this exercise, you’ll develop an application that displays the first paragraph of text for three topics and then lets the user click a link to expand or collapse the text for each topic.
 

In the JavaScript file, add an event handler for the ready event method.

Within the function for the ready event handler, code an event handler for the toggle event method of the <a> elements.

The first time one of those elements is clicked, the event handler should display the text in the division above that element, and it should change the text for the link from “Show more” to “Show less”. The second time an <a> element is clicked, the event handler should hide the text in the division above that element, and it should change the text for the link from “Show less” to “Show more”. */

$(document).ready(function() {  
    
        $("#jdom a").click(function() {
        $(this).prev("div").toggle();
             if ($(this).prev("div").is(":visible")) {
                 $(this).text("Show less");
             } else {
                $(this).text("Show more");
        }//end ifelse
                
        })//end click function
 
    });//end document ready
 