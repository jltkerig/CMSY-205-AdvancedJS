$(document).ready(function() {
 $('article').slice(1).hide();
   
   $("#nav_list a").click(function(evt){
       $('article').hide();
      var id = $(this).attr('href') ;
      console.log(id,typeof(id));
       
      // var article = $(id).parent('article');
      var article = $(id).parent().closest("article").show();
      console.log(article);
      //$(id).html("lalala")
      evt.preventDefault();  
    });
}); // end ready