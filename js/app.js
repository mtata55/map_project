let myViewModel = {
    searchContent: ko.observable(''),
    locations: ko.observableArray(location_list),
    markers_list: ko.observableArray(initMap())
};


// Activate knockout.js
ko.applyBindings(myViewModel);


//If search string is in list, create new filtered list

function filter() {

    let filtered_locations = [];
    let search = myViewModel.searchContent().toString();


    for (i = 0; i < location_list.length; i++) {
        let location = location_list[i];

        if (location.name.toLowerCase().includes(search.toLowerCase())) {

            let new_location = new Location(location.name, location.lat, location.lng);
            filtered_locations.push(new_location);

        }
    }

    myViewModel.locations(filtered_locations);

    for (i = 0; i < myViewModel.markers_list().length; i++) {

        if (myViewModel.markers_list()[i].title.toLowerCase().indexOf(search.toLowerCase()) == -1) {
            myViewModel.markers_list()[i].setVisible(false);
        } else {
            myViewModel.markers_list()[i].setVisible(true);
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
    let location = myViewModel.markers_list()[i].title;
    while (location != event.target.text) {
        i++;
        location = myViewModel.markers_list()[i].title;
    }
    google.maps.event.trigger(myViewModel.markers_list()[i], 'click');
}


