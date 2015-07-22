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
			$("#startgame").hide();
			document.getElementById("startgame").disabled=true;			
			waitingTime=1000+Math.random()*5000;
			setTimeout(enableButton,waitingTime); 
			starttime=(new Date()).getTime();
		}
		else{
			running=false;
			$("#startgame").html("start!");
			stoptime=(new Date()).getTime();
			var reactiontime = Math.round(stoptime - starttime - waitingTime);
			$("#time").html("rt="+reactiontime+" ms");
		

			if(reactiontime <= levels[level]){
				level++;
				Session.set("level",level);			
			}
			else
			{
				level = 0;
				Session.set("level",level);
			}
		}

	}
});



function enableButton(){
	$("#startgame").show();
	$("#startgame").html("push me!");
	running = true;
	document.getElementById("startgame").disabled=false;	
}