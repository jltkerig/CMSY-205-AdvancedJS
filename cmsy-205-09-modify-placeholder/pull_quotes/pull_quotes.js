$(document).ready(function() {
 
$('span').each(function() {
    var quote = $(this).clone().wrap("<blockquote></blockquote>").parent();
 
   // $(quote).wrap("<blockquote></blockquote>").parent();
    console.log(quote);
    
    $(quote).insertAfter($(this).closest('p'));
 
    $(quote).css({"border-top":"1px solid grey", "border-bottom":"1px solid grey" , "margin": "10px 0", "padding": "10px", "font-size":"150%"});
    
    $(quote).text(function(_, txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      });
    
    
    
     
 
 }); // end each      
}); // end ready
 

//2. add a blockquote element for each quote that contains a <q> element with the quote. --- what q?

//3. the blockquote element should be added after the <p> element that contains the span element.

//4. Notice that the first pull quote starts with a lowercase letter. Then, use string manipulation to make sure that the first letter of each quote is uppercase.

//5. Code a statement that adds CSS properties to the blockquote element so the pull quotes look like the ones shown above.