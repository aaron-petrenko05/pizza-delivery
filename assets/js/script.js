$(document).ready(function() {
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
});