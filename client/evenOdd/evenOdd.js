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
			document.getElementById("even").disabled=true;
			document.getElementById("odd").disabled=true;
			
			$("#message").html("You were wrong. But you answered "+totalGuesses+ " correctly");

			if (time>1.5)
			$("#message").html("You took "+time+" seconds, which is too long. But you answered "+totalGuesses+ " correctly!");
			var leader = {user: Meteor.user().emails[0].address, time: time, game:"evenOdd", createdAt: new Date()};
			Leaders.insert(leader);
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
			document.getElementById("even").disabled=true;
			document.getElementById("odd").disabled=true;

		$("#message").html("You were wrong. But you answered "+totalGuesses+ " correctly");
			
			if (time>1.5) 
			$("#message").html("You took "+time+" seconds, which is too long. But you answered "+totalGuesses+ " correctly!");
		}
	}
})


Template.evenOdd.rendered = function(){
		
	random=Math.floor((Math.random() * 100) + 1);
	$("#number").html(random);
	timeBeg=(new Date()).getTime();
};

