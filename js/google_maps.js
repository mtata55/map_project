

function initMap() {
        //initialise base map with markers
        //constructor creates a new map - only center and zoom are required
        let map = new google.maps.Map(document.getElementById("map"),{
            center: {lat: 51.508914, lng: -0.111138},
            zoom:13
        });

        let marker_list = [];
        let infowindows = [];

        //Loop over locations in input list

        for (i=0; i<location_list.length; i++)
        {

        //Create markers and add to marker list
        let lat_long = {lat: location_list[i].lat, lng: location_list[i].lng};
        let marker = new google.maps.Marker({
            position: lat_long,
            map: map,
            animation: null,
            title: location_list[i].name
            });

        marker_list.push(marker);
        //Add listeners to for infowindow function on click
        marker.addListener('click', (function(markercopy){
            return function(){
            toggleBounce(marker_list, markercopy);
            let infowindow = new google.maps.InfoWindow({maxWidth:300});
            let picture = getPhoto(markercopy.title);
            let text = getInfo(markercopy.title);
            let wikiurl = getUrl(markercopy.title);
            let contentString = `<h3>${markercopy.title}</h3>`+
            `<img src="${picture}" alt="${markercopy.title}">`+
            `<p>${text} ...`+`<a href=${wikiurl}>Read more on wikipedia</a></p>`;
            closeInfoWindows(infowindows);
            infowindow.marker = markercopy;
            infowindow.setContent(contentString);
            infowindow.open(map,markercopy);
            infowindows.push(infowindow);;

            };
        }) (marker));



}

return marker_list;
}



function openInfoWindows(infowindows, map){
    for (i=0; i<infowindows.length;i++){
        infowindows[i].open();
    }
}

function closeInfoWindows(infowindows){
    for (i=0; i<infowindows.length;i++){
        infowindows[i].close();
    }
}

function toggleBounce(marker_list, markercopy) {

        for (i=0; i<marker_list.length;i++){
        if (marker_list[i].title == markercopy.title)
            {
        marker_list[i].setAnimation(google.maps.Animation.BOUNCE);
        marker_list[i].setAnimation(null);
        }
        else
        {
        marker_list[i].setAnimation(null);


        }
        }
}


//create markers for filtered locations

function createMarkers(location_list) {

        //Define Map variable
        /*
        let map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: location_list[0].lat, lng: location_list[0].lng},
        zoom:13
        });
        */

        let staticmap = initMap();
        //Define variables to hold marker list and infowindows
        //list for iteration

        let marker_list = [];

        //Loop over locations in input list

        for (i=0; i<location_list.length; i++)
        {


        let lat_long = {lat: location_list[i].lat, lng: location_list[i].lng};
        let marker = new google.maps.Marker({
            position: lat_long,
            map: staticmap,
            title: location_list[i].name
            });


        marker_list.push(marker);

    }
return  marker_list;
}




/*
function populateInfoWindow(marker, infowindow){
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
        //Clear marker property on close
        infowindow.addListener('closeclick', function(){
            infoWindow.setMarker(null);
        });
    }
}
*/

//Used to extract geocoding data for selected locations
/*
function geocodeAddress(geocoder, address) {
        var map = new google.maps.Map(document.getElementById("map"),{
            center: {lat: 51.508914, lng: -0.111138},
            zoom:13
        });
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: address
            });
            console.log("(\""+ address +"\"," +results[0].geometry.location.lat()+"," + results[0].geometry.location.lng() + ")" , )
            console.log();
            console.log();
            ;

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
}
*/


        //used to extract geocoding data for selected locations
        //geocodeAddress(geocoder,location_list[i].name);

        //var geocoder = new google.maps.Geocoder();

/*
        var marker_list = [];
        var infowindows = [];

        for (i=0; i<location_list.length; i++)
        {

        var lat_long = {lat: location_list[i].lat, lng: location_list[i].lng};
        var marker = new google.maps.Marker({
            position: lat_long,
            map: map,
            title: location_list[i].name
            });
        //used to extract geocoding data for selected locations
        //geocodeAddress(geocoder,location_list[i].name);


        marker_list.push(marker);

        marker.addListener('click', (function(markercopy){
            return function(){
            var infowindow = new google.maps.InfoWindow();
            closeInfoWindows(infowindows);
            infowindow.marker = markercopy;
            infowindow.setContent(markercopy.title);
            infowindow.open(map,markercopy);
            infowindows.push(infowindow);


        };
        }) (marker));



    }
*/