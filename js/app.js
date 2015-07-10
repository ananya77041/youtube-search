$(function() {
	rows = 5; columns = 4;
	YOUTUBE_API_KEY = 'AIzaSyC0olpIT7VLMU4ERAk87VdIUQRGuFAloyI';
	url = 'https://www.googleapis.com/youtube/v3/search';
	$('button').on('click', function() {
		var params = {
			part: 'snippet',
			key: YOUTUBE_API_KEY,
			q: $('#query').val(),
			maxResults: 20
		};
		$.get(url, params, function(data) {
			displayResults(data.items);
		});
		return false;
	});

	function displayResults(results) {
		thumbs = []; ids = [];
		for (i=0;i<results.length;i++) {
			thumbs.push(results[i].snippet.thumbnails.default.url);
			ids.push("http://www.youtube.com/watch?v=" + results[i].id.videoId)
			$('.thumbnails').append(
				"<a href='" + ids[i] + "'><img src='" + thumbs[i] + "'></a>"
			).fadeIn(500);
		};
	};
});