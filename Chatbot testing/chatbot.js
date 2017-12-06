$(document).ready(function(){

	var o1, o2, o3, o4, o5, o6 = "";
	var study, coop = 0;

	$("#o-1a").click(function(){
		o1 = "a"; console.log(o1);
		study = 1; console.log("study: " + study);
		$("#u-1a, #b-2a, #b-2b, #b-2c, #b-2d").removeClass("hide");
		$("#o-1a, #o-1b").addClass("hide");
		if (coop != 1) {
			$("#o-2a").removeClass("hide");
		}
		$("#o-2c").removeClass("hide");
		$("#o-2b").removeClass("hide");
	});

 	$("#o-1b").click(function(){
 		o1 = "b"; console.log(o1);
 		coop = 1; console.log("coop: " + coop);
 	});

 	$("#o-2a").click(function(){
 		o2 = "a"; console.log(o2);
 	});

 	$("#o-2b").click(function(){
 		o2 = "b"; console.log(o2);
 	});

 	$("#o-3a").click(function(){
 		o3 = "a"; console.log(o3);
 	});

 	$("#o-3b").click(function(){
 		o3 = "b"; console.log(o3);
 	});

 	$("#o-4a").click(function(){
 		o4 = "a"; console.log(o4);
 	});

 	$("#o-4b").click(function(){
 		o4 = "b"; console.log(o4);
 	});

 	$("#o-4c").click(function(){
 		o4 = "c"; console.log(o4);
 	});

 	$("#o-5a").click(function(){
 		o5 = "a"; console.log(o5);
 	});

 	$("#o-5b").click(function(){
 		o5 = "b"; console.log(o5);
 	});

 	$("#o-5c").click(function(){
 		o5 = "c"; console.log(o5);
 	});

 	$("#o-6a").click(function(){
 		o6 = "a"; console.log(o6);
 	});

 	$("#o-6b").click(function(){
 		o6 = "b"; console.log(o6);
 	});

});