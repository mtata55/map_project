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



//initialise base map with markers
function initMap() {
        //constructor creates a new map - only center and zoom are required
        var map = new google.maps.Map(document.getElementById("map"),{
            center: {lat: 51.508914, lng: -0.111138},
            zoom:13
        });


/*

        var infowindow = new google.maps.InfoWindow({
            content: "first marker " + bigBen.lat + " "+bigBen.lng

        });

        marker.addListener("mouseover", function(){
            infowindow.open(map, marker);
        });

*/
        var geocoder = new google.maps.Geocoder();


        var marker_list = [];

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


    }
}

