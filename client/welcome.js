Template.welcome.events({

	"click #colorDiv": function(event){
		Router.go('colorGame');
	},

	"click #numberDiv": function(event){
		Router.go('numberGuess');
	},

	//"click #numberDiv2": function(event){
	//	Router.go('numberGuess2');
	//},

	"click #reactionDiv": function(event){
		Router.go('reactionTimer');
	},

})