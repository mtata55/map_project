var myViewModel = {
    locations: ko.observableArray(location_list),
    markersList: ko.observableArray(initMap()),
    searchContent: ko.observable('')
};


//If search string is in list, create new filtered list

function filter() {

    let search = myViewModel.searchContent().toString();

    locationFilter(search)
    markerFilter(search);
}


function locationFilter(search) {

    let filtered_locations = [];
        for (i = 0; i < location_list.length; i++) {

        let location = location_list[i];

        if (location.name.toLowerCase().includes(search.toLowerCase())) {

            let new_location = new Location(location.name, location.lat, location.lng);
            filtered_locations.push(new_location);
            myViewModel.locations(filtered_locations);

        }
    }
}



function markerFilter(search) {

    for (i = 0; i < myViewModel.markersList().length; i++) {

        if (myViewModel.markersList()[i].title.toLowerCase().indexOf(search.toLowerCase()) == -1) {
            myViewModel.markersList()[i].setVisible(false);
        } else {
            myViewModel.markersList()[i].setVisible(true);
        }
    }
}



/*
the event parameter allows access
to knockout data on events (e.g. clicks)
event.target.text used to get the text clicked
*/
function clickMarker(data, event) {

    let clicked_location = [];
    let i = 0;
    let location = myViewModel.markersList()[i].title;
    while (location != event.target.text) {
        i++;
        location = myViewModel.markersList()[i].title;
    }
    google.maps.event.trigger(myViewModel.markersList()[i], 'click');
}


// Activate knockout.js
ko.applyBindings(myViewModel);
