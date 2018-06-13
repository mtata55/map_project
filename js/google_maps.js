
function initMap() {
        //constructor creates a new map - only center and zoom are required
        var map = new google.maps.Map(document.getElementById("map"),{
            center: {lat: 51.508914, lng: -0.111138},
            zoom:13
        });

        var bigBen = {lat: 51.500941, lng: -0.124528};
        var marker = new google.maps.Marker({
            position: bigBen,
            map: map,
            title: "Big Ben"

        });


        var infowindow = new google.maps.InfoWindow({
            content: "first marker " + bigBen.lat + " "+bigBen.lng

        });

        marker.addListener("mouseover", function(){
            infowindow.open(map, marker);
        });

    }
