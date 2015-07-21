var name = ["red", "orange", "yellow", "green", "blue", "pink", "purple", "brown", "black"];
var color = ["#ff0000", "#ff6600", "#ffff00", "#33cc33", "#0000ff", "#ff33cc", "#990099", "#663300", "#000000"];
var limit = 14;
var timeBeg;
var timeEnd;
var firstName;



Template.colorGame.events({
	"submit #formEnter": function(event){
		event.preventDefault();
		if(limit > 0)
		{
			var n = Math.floor(Math.random() * 8);
			var c = Math.floor(Math.random() * 8);

			var a = name[n];
			var b = color[c];

			var userInput = $("#exampleInputColor").val();

			if(firstName != userInput)
			{
				$("#incorrectMessage").html('Your answer is incorrect. Try again.');

			}
			else
			{
				$("#correctMessage").html('Your answer is correct.');
				firstName = name[c];
				$("#displayColorName").html(a);
				$("#displayColorName").css("color", b);
				$("#exampleInputColor").val("");
				limit--;
			}
		}
		else
		{
			timeEnd=(new Date()).getTime();
			var time= (timeEnd - timeBeg)/1000;
			$("#gameOver").html('You have finished the game. Your time is ' + time + " seconds");
			var leader = {user: Meteor.user().emails[0].address, time: time, game:"colorGame", createdAt: new Date()};
			Leaders.insert(leader);
		}

	}
})

Template.colorGame.rendered = function(){
		timeBeg=(new Date()).getTime();
		limit = 14;

		var n = Math.floor(Math.random() * 8);
		var c = Math.floor(Math.random() * 8);

		firstName = name[n];
		var b = color[c];

		$("#displayColorName").html(firstName);
		$("#displayColorName").css("color", b);

		firstName = name[c];

		var userInput = $("#exampleInputColor").val();

}