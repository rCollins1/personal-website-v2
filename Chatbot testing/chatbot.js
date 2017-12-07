/* NOTE: MAKE FUNCTION TO REMOVE ALL OPTIONS SO I DON'T HAVE TO WRITE REMOVE OVER AND OVER! */

$(document).ready(function(){

	var study, coop = 0;
	var td, agf = 0;

		$("#messages").append("<li class='message-li'><div class='bot-message container'>Hi! I'm Rachelyn :)</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I'm a second-year student studying Systems Design Engineering at the University of Waterloo.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I alternate between study and co-op / work terms.</div></li>");
		$("#options").append("<li class='option' id='o-1a'><span>How's studying going?</span></li>");
		$("#options").append("<li class='option' id='o-1b'><span>How's co-op going?</span></li>");

	$(document).on('click', '#o-1a', function(){ /*How's studying going?*/
		study = 1;
		$("#o-1a").remove();
		$("#o-1b").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's studying going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Having completed 2 school terms, I've got some favourite courses already:</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Digital Systems (combinational logic and microcomputer interfacing),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Graphics (3D CAD and technical drawings),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>...and of course, Human Factors in Design (human-machine environments, ergonomic design and information processing).</div></li>");
		if (coop != 1){
			$("#options").append("<li class='option' id='o-2a'><span>Tell me about co-op.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2c'><span>But...what is Systems?</span></li>");
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
	});

 	$(document).on('click', '#o-1b', function(){ /*How's co-op going?*/
 		coop = 1;
 		$("#o-1a").remove();
 		$("#o-1b").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's co-op going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had two (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>For my first work term I was with TD Labs in Waterloo, and for my second term I was with AGF Management in downtown Toronto.</div></li>");
		$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
 	});

 	$(document).on('click', '#o-2a', function(){ /*Tell me about co-op.*/
 		coop = 1;
 		$("#o-2a").remove();
		$("#o-2b").remove();
		$("#o-2c").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Tell me about co-op.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had two (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>For my first work term I was with TD Labs in Waterloo, and for my second term I was with AGF Management in downtown Toronto.</div></li>");
		if (td != 1){
			$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		}
		if (agf !=1){
			$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
		}
	}); 

 	$(document).on('click', '#o-2b', function(){ /*Outside of school and work?*/
 		coop = 1;
 		$("#o-2a").remove();
		$("#o-2b").remove();
		$("#o-2c").remove();
		$("#o-4a").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Outside of school and work?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I'm a competitive dancer and hockey player!</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love psychology (thank goodness for electives!) which lends itself well to design thinking.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I'm also constantly reading, and Harry Potter will always have a place in my heart.</div></li>");
		$("#options").append("<li class='option' id='o-6a'><span>Let's chat</span></li>");
		$("#options").append("<li class='option' id='o-6b'><span>Brb</span></li>");
 	});

  	$(document).on('click', '#o-2c', function(){ /*But...what is Systems?*/
 		$("#o-2a").remove();
		$("#o-2b").remove();
		$("#o-2c").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>But...what is Systems?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>It seems like noone has a great definition...</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I like to think of it as an <em>engineering</em> degree with a focus on optimizing the <em>design</em> process and how complex parts can work together in a <em>system</em>.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>If you're still curious, here's <a href='https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering' target='_blank'>UW's best attempt</a> at explaining it.</div></li>");
		if (coop != 1){
			$("#options").append("<li class='option' id='o-2a'><span>Tell me about co-op.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-3a', function(){ /*How was TD Bank?*/
 		td = 1;
 		$("#o-3a").remove();
		$("#o-3b").remove();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How was TD Bank?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a UX designer at <a href='https://www.communitech.ca/how-we-help/innovation/corporate-innovation/td-bank-group/' target='_blank'>TD Labs</a>, where my team designed a new app to teach kids about financial literacy.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I like to think of it as an <em>engineering</em> degree with a focus on optimizing the <em>design</em> process and how complex parts can work together in a <em>system</em>.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-3b', function(){ /*What was AGF all about?*/
 	});

 	$(document).on('click', '#o-4a', function(){ /*Tell me about your courses.*/
 	});

 	$(document).on('click', '#o-4b', function(){ /*Tell me about your courses.*/
 	});

 	$(document).on('click', '#o-4c', function(){
 	});

 	$(document).on('click', '#o-5a', function(){
 	});

 	$(document).on('click', '#o-5b', function(){
 	});

 	$(document).on('click', '#o-5c', function(){
 	});

 	$(document).on('click', '#o-6a', function(){ /*Let's chat*/
 	});

 	$(document).on('click', '#o-6b', function(){ /*Brb*/
 	});

});