var gameOver=false;
var interval;
var random;
var time = 0;

Template.numberGuess.events({

	"submit #formEnter": function(event){
	event.preventDefault();
		var number = $("#number").val();


		if(number.length==0){
			alert("please enter a number" + number);
		}
		else{
			var number2= parseInt(number);

			if(number2 == random){
				gameOver = true;
				$("#message").html(number+" is correct!");
				$("#number").val("");
				$("#endGame").html("You have finished the game. Your time is " + time + " seconds.");
			}
			else if(number2 < random){
				$("#message").html("higher than "+number);
				$("#number").val("");
			}
			else if(number2 < 0 || number2 > 100){
				$("#message").html(number+" is not between 0 and 100");
				$("#number").val("");
			}
			else{
				$("#message").html("lower than "+number);
				$("#number").val("");
			}
	

		}

	}


})

function braction(){
	
	if(!gameOver){
	time = time + 1;
	}
}


Template.numberGuess.rendered = function(){
		interval=Meteor.setInterval(braction, 1000);
		random=Math.floor((Math.random() * 100) + 1);
		$("#test").html(random);

};