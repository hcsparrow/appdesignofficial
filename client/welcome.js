Template.welcome.events({

	"click #colorDiv": function(event){
		Router.go('colorGame');
	},

	"click #numberDiv": function(event){
		Router.go('numberGuess');
	},

	"click #evenOdd": function(event){
		Router.go('evenOdd');
	},

	"click #reactionDiv": function(event){
		Router.go('reactionTimer');
	},

	

})