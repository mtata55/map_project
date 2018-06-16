
$(document).ready(function()
	{
		//Initialise markers on page load
		create_markers(location_list);

		//Run collapse function on pageload and resize. Checks for screensize
		//and adjust visibility of locations list
		$(window).resize(collapse);

	})


function collapse(){
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#collapseExample').removeClass('show');
	}
	else{
		$('#collapseExample').addClass('show');
	}
}


/*get photo function. Using .ajax to allow for non async request as
getting function return as undefined otherwise
*/
function getPhoto(title){
var url = `https://en.wikipedia.org/w/api.php?action=query&titles=`+title+
`&prop=pageimages&piprop=thumbnail&pithumbsize=200&format=json&formatversion=2&origin=*`

	$.ajax({
		dataType: "json",
		async: false,
		url: url,
		success: function(data){
			result = data.query.pages[0].thumbnail.source;
		}
	});
	return result;
}

/*get info function to return first 400 characters of wiki extract.
Using .ajax to allow for non async request as
getting function return as undefined otherwise
*/

function getInfo(title){
var url = `https://en.wikipedia.org/w/api.php?action=query&titles=`+title+
`&prop=extracts&exintro=&explaintext=&format=json&formatversion=2&origin=*`

	$.ajax({
		dataType: "json",
		async: false,
		url: url,
		success: function(data){
			result = data.query.pages[0].extract.slice(0,400);
		}
	});
	return result;

}

/*get Url function to return page id and generate wikipedia URL.
Using .ajax to allow for non async request as
getting function return as undefined otherwise
*/
function getUrl(title){
var url = `https://en.wikipedia.org/w/api.php?action=query&titles=`+title+
`&format=json&formatversion=2&origin=*`

	$.ajax({
		dataType: "json",
		async: false,
		url: url,
		success: function(data){
			result = data.query.pages[0].pageid;
			outputurl = `https://en.wikipedia.org/?curid=${result}`
		}
	});

	return outputurl;

}
