
$(document).ready(function() {
	$("#showHome").addClass("active");
	$("#pizza-order").hide();
	$("#location").hide();
	$("#home").show();

	$("#showHome").click(function() {
		$("#pizza-order").hide();
		$("#location").hide();
		$("#home").show();
	});
	
	$("#showPizza").click(function() {
		$("#home").hide();
		$("#location").hide();
		$("#pizza-order").show();
	});
	
	$("#showLocation").click(function() {
		$("#home").hide();
		$("#location").show();
		$("#pizza-order").hide();
	});

	$(".navbar-nav li a").click(function() {
	  // remove classes from all
	  $(".navbar-nav li a").removeClass("active");
	  // add class to the one we clicked
	  $(this).addClass("active");
	  // stop the page from jumping to the top
	  return false;
	});
});