//initialise base map with markers
//constructor creates a new map - only center and zoom are required
//Loop over locations in input list
//Create markers and add to marker list
//Add listeners to for infowindow function on click
function initMap() {

    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.508914, lng: -0.111138 },
        zoom: 13
    });

    let marker_list = [];
    let infowindows = [];



    for (i = 0; i < location_list.length; i++) {


        let lat_long = { lat: location_list[i].lat, lng: location_list[i].lng };
        let marker = new google.maps.Marker({
            position: lat_long,
            map: map,
            animation: null,
            title: location_list[i].name
        });

        marker_list.push(marker);

        marker.addListener('click', (function(markercopy) {
            return function() {
                toggleBounce(marker_list, markercopy);
                let infowindow = new google.maps.InfoWindow({ maxWidth: 300 });
                let picture = getPhoto(markercopy.title);
                let text = getInfo(markercopy.title);
                let wikiurl = getUrl(markercopy.title);
                let contentString = `<h3>${markercopy.title}</h3>` +
                    `<img src="${picture}" alt="${markercopy.title}">` +
                    `<p>${text} ...` +
                    `<a href=${wikiurl}>Read more on wikipedia</a></p>`;
                closeInfoWindows(infowindows);
                infowindow.marker = markercopy;
                infowindow.setContent(contentString);
                infowindow.open(map, markercopy);
                infowindows.push(infowindow);;
            };
        })(marker));
    }
    return marker_list;
}


function openInfoWindows(infowindows, map) {
    for (i = 0; i < infowindows.length; i++) {
        infowindows[i].open();
    }
}

function closeInfoWindows(infowindows) {
    for (i = 0; i < infowindows.length; i++) {
        infowindows[i].close();
    }
}

function toggleBounce(marker_list, markercopy) {

    for (i = 0; i < marker_list.length; i++) {
        if (marker_list[i].title == markercopy.title) {
            marker_list[i].setAnimation(google.maps.Animation.BOUNCE);
            marker_list[i].setAnimation(null);
        } else {
            marker_list[i].setAnimation(null);


        }
    }
}

