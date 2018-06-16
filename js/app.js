
let myViewModel = {
	searchContent: ko.observable(''),
	locations: ko.observableArray(location_list),
	markers: ko.observableArray([])
};



function filter(){

	let filtered_locations = [];
	let search = myViewModel.searchContent().toString();
	//Loop over full location list

	for (i=0; i<location_list.length; i++)
	{
		let location = location_list[i];



	//If search string is in list, create new filtered list
	if (location.name.toLowerCase().includes(search.toLowerCase()))
	{

		let new_location = new Location(location.name, location.lat, location.lng)
		filtered_locations.push(new_location);

	}
	}

	//create markers for filtered locations
		//let markers_list = createMarkers(filtered_locations);
		myViewModel.locations(filtered_locations);

		//myViewModel.markers(markers_list);
		//createMarkers(filtered_locations);

		//console.log(myViewModel.markers());
		//console.log(markers_list);

		let markers_list = initMap();

		for (i=0; i<markers_list.length;i++)
		{


		if (markers_list[i].title.toLowerCase().indexOf(search.toLowerCase()) == -1)
		{
			markers_list[i].setVisible(false);

		}

	}
}

/*
function markerFilter(){
	let search = myViewModel.searchContent().toString();
	let markers_list = initMap();
	console.log(markers_list);


	for (i=0; i<markers_list.length;i++)
		{
			console.log(search.toLowerCase());
			console.log(markers_list[i].title.toLowerCase());
			console.log(markers_list[i].title.toLowerCase().indexOf(search.toLowerCase()));

		if (markers_list[i].title.toLowerCase().indexOf(search.toLowerCase()) == -1)
			{
				markers_list[i].setVisible(false);
				console.log('hidden');

			}
		else {
				markers_list[i].setVisible(true);
			}
		}

}

*/


function clickMarker (data, event){
	/*
	the event parameter allows access
	to knockout data on events (e.g. clicks)
	event.target.text used to get the text clicked
	*/
	let clicked_location = []
	let i = 0;
	let markers_list = initMap();
	let location = markers_list[i].title;
	while (location != event.target.text)
	{
		i++;
		location = markers_list[i].title;
	}

	google.maps.event.trigger(markers_list[i], 'click');


	//console.log('March found Iteration '+ i);
	//let new_location = new Location(location.name, location.lat, location.lng)
	//clicked_location.push(new_location);
	//createMarkers(clicked_location);
	//var markers = createMarkers(clicked_location);
	//createInfowindows(markers);
	//var infowindows = createInfowindows(markers);
	//openInfoWindows(infowindows);

	//$( "area[title='Big Ben']" ).click();
	//$( "area[title='Big Ben']" ).trigger("click");


	//console.log(`$( "area[title='${location.name}']" )`);

}



// Activates knockout.js
ko.applyBindings(myViewModel);

// function to initialise app
/*function AppViewModel() {
    var self = this;

    self.locations = ko.observableArray(location_list);
*/

/*
	var viewModel = {
		detailsEnabled: ko.observable(false),
		enableDetails: function(){
			this.detailsEnabled(true);
		},
		disableDetails: function(){
			this.detailsEnabled(false);
			console.log("It works");
		}
	};
*/

/*
function new_filter(){
	for (i=0; i<location_list.length; i++)
	{
	var name = location_list[i];
	if ($.inArray(myViewModel.searchContent(),name)>-1)
	{console.log(name.name);
		}
}
}
*/
//}
/*
$(document).ready(function()
	{
		$("#searchbar").change(filter);


	})

*/