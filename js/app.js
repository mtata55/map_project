

// function to initialise app
function AppViewModel() {
    var self = this;

    self.locations = ko.observableArray(location_list);
}



// Activates knockout.js
ko.applyBindings(new AppViewModel());

