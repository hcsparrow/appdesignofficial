var starttime;
var stoptime;
var waitingTime=0;
var running=false;
var level=0;
var levels= [1000, 750, 600, 500, 450, 300, 275, 250, 200];
Session.set("level",0);

Template.reactionTimer.helpers({
	level:function(){return Session.get("level")},
	maxlevel:function(){return levels[Session.get("level")]}
})

Template.reactionTimer.events({
	"click #startgame": function(event){

		if(!running){
			//document.getElementById("startgame").disabled=true;
			$("#startgame").fadeOut();
			waitingTime=1000+Math.random()*5000;
			setTimeout(enableButton,waitingTime); 
			starttime=(new Date()).getTime();
		}
		else{
			running=false;
			$("#startgame").html("start!");
			stoptime=(new Date()).getTime();
			var reactiontime= Math.round(stoptime - starttime - waitingTime);
			$("#time").html("rt="+reactiontime+" ms");
		}

		// if it is lower than 111 refresh page

		if(reactiontime <= levels[level]){
			level++;
			Session.set("level",level);
				

		document.getElementById("startgame").disabled=true;
		responsetime=1000+Math.random()*5000; setTimeout(changecolor,responsetime); 
	}
		else{running=false;$("#startgame").html("start!");
		var stoptime=(new Date()).getTime();
		var reactiontime= stoptime - starttime - responsetime
		$("#time").html("rt="+Math.round(reactiontime)+" ms")

		if(reactiontime <= levels[level]){
			level++; Session.set("level",level)
		}
		else{level=0;Session.set("level",0);}
		

	}

	}
});



function enableButton(){
	//document.getElementById("startgame").disabled=false;
	$("#startgame").fadeIn();
	$("#startgame").html("push me!");
	running = true;

var starttime=0;
var responsetime=0;
var running=false;
function changecolor(){
	document.getElementById("startgame").disabled=false;
	$("#startgame").html("push me!");

}
}