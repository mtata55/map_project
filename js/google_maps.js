/**
* @description Initialise map with markers and listeners
* @returns {array} markerList - Array containging list of
* markers for marker property manipulation.
*
*/

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.508914, lng: -0.111138 },
        zoom: 13
    });

    let markerList = [];
    let infowindows = [];

    for (i = 0; i < location_list.length; i++) {

//Create markers and add to marker list
        let lat_long = { lat: location_list[i].lat, lng: location_list[i].lng };
        let marker = new google.maps.Marker({
            position: lat_long,
            map: map,
            animation: null,
            title: location_list[i].name
        });

        markerList.push(marker);

//Add listeners to for infowindow function on click
        marker.addListener('click', (function(markercopy) {
            return function() {
                toggleBounce(markerList, markercopy);
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
    return markerList;
}

/**
* @description Closes infowindows
* @param {array} infowindows
*/
function closeInfoWindows(infowindows) {
    for (i = 0; i < infowindows.length; i++) {
        infowindows[i].close();
    }
}

/**
* @description Set animation to bounce for
* clicked marker temporarily. Set animation to
* null for all other markers.
* @param {array} markerList
* @param {object} markercopy
*/
function toggleBounce(markerList, markercopy) {

    for (i = 0; i < markerList.length; i++) {
        if (markerList[i].title == markercopy.title) {
            markerList[i].setAnimation(google.maps.Animation.BOUNCE);
            markerList[i].setAnimation(null);
        } else {
            markerList[i].setAnimation(null);


        }
    }
}

