 
$(document).ready(function() {
    $("#faq_rollovers li").each(function() {
        
        $(this).mouseover(function() {
            $(this).find('.hidden').show();
        });// end function and mouseover

        $(this).mouseout(function() {
            $(this).find('.hidden').hide();
        }); // end function and mouseout

    });
});


 