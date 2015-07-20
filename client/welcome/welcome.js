Template.welcome.events({

	"click #colorDiv": function(event){
		Router.go('colorGame');
	},

	"click #numberDiv": function(event){
		Router.go('numberGuess');
	},

<<<<<<< HEAD:client/welcome.js
	"click #evenOddDiv": function(event){
		Router.go('evenOdd');
	},

=======
>>>>>>> origin/master:client/welcome/welcome.js
	"click #reactionDiv": function(event){
		Router.go('reactionTimer');
	},

})