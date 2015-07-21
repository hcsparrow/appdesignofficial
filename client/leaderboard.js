Template.leaderboard.helpers({
	leaders1: function() {
		return Leaders.find({game: "numberGuess"}, {sort:{time:1}, limit:15})
	}
})

Template.leaderboard.helpers({
	leaders2: function() {
		return Leaders.find({game: "colorGame"}, {sort:{time:1}, limit:15})
	}
})

Template.leaderboard.helpers({
	leaders3: function() {
		return Leaders.find({game: "evenOdd"}, {sort:{time:1}, limit:15})
	}
})