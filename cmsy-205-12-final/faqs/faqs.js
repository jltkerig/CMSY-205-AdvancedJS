$(document).ready(function() {
	$("#faqs h2").first().addClass("minus");
	$("#faqs div").first().show();
	$("#faqs h2").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideToggle(1000);								
		}
    ); // end click
}); // end ready
