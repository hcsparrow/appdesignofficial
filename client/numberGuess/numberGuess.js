var random;
var timeBeg;
var timeEnd;

Template.numberGuess.events({

	"submit #formEnter": function(event){
	event.preventDefault();
		var number = $("#number").val();

		if(number.length==0){
			alert("please enter a number" + number);
		}
		else
		{
			var number2= parseInt(number);

			if(number2 == random){
				timeEnd=(new Date()).getTime();
				var time= (timeEnd - timeBeg)/1000;
				$("#message").html(number+" is correct!");
				$("#number").val("");
				$("#endGame").html("You have finished the game. Your time is " + time + " seconds.");
				$("#playAgain").attr("style", "display:inline");
				document.getElementById("guessButton").disabled=true;
				var leader = {user: Meteor.user().emails[0].address, time: time, game:"numberGuess", createdAt: new Date()};
				Leaders.insert(leader);
			}
			else if(number2 < random){
				$("#message").html("higher than "+number);
				$("#number").val("");
			}
			else if(number2 < 0 || number2 > 99){
				$("#message").html(number+" is not between 0 and 99");
				$("#number").val("");
			}
			else{
				$("#message").html("lower than "+number);
				$("#number").val("");
			}
		}
	}
})


Template.numberGuess.rendered = function(){
		timeBeg=(new Date()).getTime();
		random=Math.floor((Math.random() * 99) + 1);

};