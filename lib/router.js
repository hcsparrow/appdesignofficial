Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});


Router.route('/colorGame', {name: 'colorGame'});
Router.route("leaderboard");
Router.route('/feedback', {name: 'feedback'});
Router.route('/reactionTimer', {name: 'reactionTimer'});
Router.route('/', {name: 'welcome'});
Router.route('/schedule', {name: 'schedule'});
Router.route('/numberGuess', {name: 'numberGuess'});
Router.route('/evenOdd', {name: 'evenOdd'});
Router.route('/about', {name: 'about'});
Router.route('/people',{name:'people'});
Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
