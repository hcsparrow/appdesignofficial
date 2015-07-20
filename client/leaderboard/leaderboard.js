Template.leaderboard.helpers({
	leaders: function() {
		return Leaders.find({game: "colorGame"}, {sort:{time:1}, limit:15})
	}
})