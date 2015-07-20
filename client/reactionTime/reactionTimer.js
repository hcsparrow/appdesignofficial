var level=0;
var levels= [1000, 750, 600, 500, 450, 300, 275, 250, 200];
Template.reactionTimer.events({
	"click #startgame": function(event){

		if(!running){
		responsetime=1000+Math.random()*5000; setTimeout(changecolor,responsetime); console.log(responsetime);
		starttime=(new Date()).getTime()
		running=true;}
		else{running=false;$("#startgame").html("start!");
		var stoptime=(new Date()).getTime();
		var reactiontime= stoptime - starttime - responsetime
		console.log("rt="+reactiontime); 
		$("#time").html("rt="+(reactiontime))

		if(reactiontime <= levels[level]){
			level++;
			$("#timeReq").html(levels[level] + " is the max to go to the next level");
		}
		

	}
	}
});


//
Template.reactionTimer.rendered = function(){
	$("#timeReq").html(levels[level] + " is the max to go to the next level");
}

var starttime=0;
var responsetime=0;
var running=false;
function changecolor(){$("#startgame").html("push me!")}
