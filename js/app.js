//Object literal for KO ViewModel
var myViewModel = {
    locations: ko.observableArray(location_list),
    markersList: ko.observableArray(initMap()),
    searchContent: ko.observable('')
};



/**
* @description Filters location list and markerList
*/
function filter() {

    let search = myViewModel.searchContent().toString();

    locationFilter(search)
    markerFilter(search);
}

/**
* @description Updates locations observable array based on
* search string.
* @param {string} search
*/

function locationFilter(search) {

    let filtered_locations = [];
        for (i = 0; i < location_list.length; i++) {
        let location = location_list[i];

        //If search string is in list, create new filtered list
        if (location.name.toLowerCase().includes(search.toLowerCase())) {

            let new_location = new Location(location.name, location.lat, location.lng);
            filtered_locations.push(new_location);
            myViewModel.locations(filtered_locations);

        }
    }
}

/**
* @description Updates markersList observable array visible property based on
* search string.
* @param {string} search
*/

function markerFilter(search) {

    for (i = 0; i < myViewModel.markersList().length; i++) {

        if (myViewModel.markersList()[i].title.toLowerCase().indexOf(search.toLowerCase()) == -1) {
            myViewModel.markersList()[i].setVisible(false);
        } else {
            myViewModel.markersList()[i].setVisible(true);
        }
    }
}




/**
* @description Simulate click event on marker when corresponding location item
* is clicked.
* @param {string} data - Allows access to knockout data (not used in function)
* @param {string} event - Allows access to knockout event data
*/
function clickMarker(data, event) {

//event.target.text used to get the text clicked

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
