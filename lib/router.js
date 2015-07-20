Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});


Router.route('/colorGame', {name: 'colorGame'});
Router.route('/', {name: 'welcome'});
Router.route('/schedule', {name: 'schedule'});
Router.route('/leaderboard', {name: 'leaderboard'});
Router.route('/numberGuess', {name: 'numberGuess'});
Router.route('/numberGuess2', {name: 'numberGuess2'});
Router.route('/map', {name: 'map'});
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
