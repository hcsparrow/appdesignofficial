var name = ["red", "orange", "yellow", "green", "blue", "pink", "purple", "brown", "black"];
var color = ["#ff0000", "#ff6600", "#ffff00", "#33cc33", "#0000ff", "#ff33cc", "#990099", "#663300", "#000000"];
var limit = 14;
var interval;
var time = 0;
var firstName;
var bool = true;


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
				$("#incorrectMessage").html('Your answer is correct.');
				firstName = a;
				$("#displayColorName").html(a);
				$("#displayColorName").css("color", b);
				$("#exampleInputColor").val("");
				limit--;
			}
		}
		else
		{
			bool = false;
			$("#gameOver").html('You have finished the game. Your time is ' + time + " seconds");
		}

	}
})

function braction(){
	if(bool)
	{
		time++;
	}
}

Template.colorGame.rendered = function(){
		limit = 14;

		interval = Meteor.setInterval(braction, 1000);

		var n = Math.floor(Math.random() * 8);
		var c = Math.floor(Math.random() * 8);

		firstName = name[n];
		var b = color[c];

		$("#displayColorName").html(firstName);
		$("#displayColorName").css("color", b);

		var userInput = $("#exampleInputColor").val();

}