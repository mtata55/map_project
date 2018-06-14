
var myViewModel = {
	searchContent: ko.observable(''),
	locations: ko.observableArray(location_list)
};

$(document).ready(function()
	{
		$("#searchbar").change(filter);

	})



function filter(){

	var filtered_locations = [];

	for (i=0; i<location_list.length; i++)
	{
		var location = location_list[i];
		var search = myViewModel.searchContent().toString();

	if (location.name.toLowerCase().includes(search.toLowerCase()))
	{
		//console.log(name);
		var new_location = new Location(location.name, location.lat, location.lng)
		filtered_locations.push(new_location);
		//console.log(myViewModel.locations());
		//console.log(filtered_locations);
		//myViewModel.searchContent('');
	}
	}
		//myViewModel.locations([]);
		myViewModel.locations(filtered_locations);
		create_markers(filtered_locations);
		//console.log(myViewModel.locations());
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