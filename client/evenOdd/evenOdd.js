var random;
var timeBeg;
var timeEnd;
var totalGuesses = 0;


Template.evenOdd.events({

	"click #even": function(event){
		timeEnd=(new Date()).getTime();

		var time=(timeEnd-timeBeg)/1000;
		
		var remainder=random%2;


		if (remainder==0 && time<=1.5) {

			totalGuesses = totalGuesses+1;
			random=Math.floor((Math.random() * 100) + 1);
			$("#number").html(random);
			timeBeg=(new Date()).getTime();			
		}
		else {
			$("#even").css("disabled","disabled");
			$("#odd").css("disabled","disabled");
			$("#message").html("You lose. You answered "+totalGuesses+ " correctly");
		}
	},


	"click #odd": function(event){
		timeEnd=(new Date()).getTime();

		var time=(timeEnd-timeBeg)/1000;
		
		var remainder=random%2;

		if (remainder!=0 && time<=1.5) {
			totalGuesses = totalGuesses+1;
			random=Math.floor((Math.random() * 100) + 1);
			$("#number").html(random);
			timeBeg=(new Date()).getTime();			
		}

		else {
			$("#even").css("disabled","disabled");
			$("#odd").css("disabled","disabled");
			$("#message").html("You lose. You answered "+totalGuesses+ " correctly");
		}
	}
})


Template.evenOdd.rendered = function(){
		
	random=Math.floor((Math.random() * 100) + 1);
	$("#number").html(random);
	timeBeg=(new Date()).getTime();
};