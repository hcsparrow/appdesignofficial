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
            document.getElementById("startgame").disabled=true;
        responsetime=1000+Math.random()*5000; setTimeout(changecolor,responsetime); 
    	}
        else{running=false;$("#startgame").html("start!");
        var stoptime=(new Date()).getTime();
        var reactiontime= stoptime - starttime - responsetime
        console.log("rt="+reactiontime); 
        $("#time").html("rt="+Math.round(reactiontime)+" ms")
 
        if(reactiontime <= levels[level])
        {
            level++; 
            $("#timeReq").html(levels[level] + " is the max to go to the next level");
            Session.set("level",level);
        }
        else {level=0;Session.set("level",0);}
         
 
    }
    }
});
 
 
 
var starttime=0;
var responsetime=0;
var running=false;
function changecolor(){
    document.getElementById("startgame").disabled=false;
    $("#startgame").html("push me!");
    }