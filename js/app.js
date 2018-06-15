
var myViewModel = {
	searchContent: ko.observable(''),
	locations: ko.observableArray(location_list)
};

/*
$(document).ready(function()
	{
		$("#searchbar").change(filter);


	})

*/

function filter(){

	var filtered_locations = [];
	//Loop over full location list

	for (i=0; i<location_list.length; i++)
	{
		var location = location_list[i];
		var search = myViewModel.searchContent().toString();

	/*
	If search string is in list, create new filtered list
	and create markers for filtered locations
	*/
	if (location.name.toLowerCase().includes(search.toLowerCase()))
	{

		var new_location = new Location(location.name, location.lat, location.lng)
		filtered_locations.push(new_location);
	}
	}

		myViewModel.locations(filtered_locations);
		create_markers(filtered_locations);
	}


function zoomOnClick (data, event){
	/*
	the event variable allows access
	to knockout data on events (e.g. clicks)
	event.target.text used to get the text clicked
	*/
	var clicked_location = []
	for (i=0; i<location_list.length; i++)
	{
		var location = location_list[i];
		if (location.name == event.target.text)
		{
			var new_location = new Location(location.name, location.lat, location.lng)
			clicked_location.push(new_location);
			create_markers(clicked_location);
			setTimeout(function(){ $( "area[title='Big Ben']" ).click()}, 100);
			//$( "area[title='Big Ben']" ).click();
			//$( "area[title='Big Ben']" ).trigger("click");


			//console.log(`$( "area[title='${location.name}']" )`);



		}
	}
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