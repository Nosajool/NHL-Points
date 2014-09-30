App.controller('home', function (page) {
	$(document).ready(function(){
		API.grabData(function(data){
			var parsed = JSON.parse(data);
			var players = parsed.results.players;
			console.log(players);
			$("#player-list").empty();
			for(var i = 0; i < players.length; i++){
				$('#player-list').append('<li>' + players[i].Rank + '.' + ' ' + players[i].Team.text + ' ' + players[i].Name.text + ' ' + players[i].Goals + '-' + players[i].Assists + '-' + players[i].Points + '</li>');
			}
			$('#loading').hide();
		});
	});
});
