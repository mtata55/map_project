
//objects and data used by both knockout and google maps api
//Stored here to avoid duplication
//As long as this file is loaded first, other js files can access the data / functions defined

//function to create new location object
function Location(name, lat, lng){
	var self = this;
	self.name = name;
	self.lat = lat;
	self.lng = lng;
}

// Editable data for locations
var location_list = [
        new Location("Hyde Park London",51.5072682,-0.16573029999995015),
        new Location("10 Downing Street London",51.5033635,-0.12762480000003507),
        new Location("221B Baker Street London",51.523767,-0.15855569999996533),
        new Location("Big Ben",51.50072919999999,-0.12462540000001354),
        new Location("Tower of London",51.50811239999999,-0.07594930000004751),
        new Location("Madame Tussauds London",51.5230457,-0.15434529999993174),
        new Location("Wembley Stadium",51.5560208,-0.2795188000000053),
        new Location("Victoria and Albert Museum",51.4966392,-0.17218000000002576),
        new Location("Windsor Castle",51.483894,-0.6044027000000369),
        new Location("Buckingham Palace",51.501364,-0.1418899999999894),
        new Location("Mayfair London",51.5116269,-0.14780599999994593),
        new Location("London Eye",51.503324,-0.1195430000000215),
        new Location("Buckingham Palace",51.501364,-0.1418899999999894),
        new Location("Houses of Parliament", 51.5011, 0.012),
        new Location("Westminster Abbey",51.4992921,-0.12730970000006891),
        new Location("O2 Arena",51.503038,0.0031543000000056054),
        new Location("Shakespeare's Globe",51.508076,-0.09719399999994494),
        new Location("Houses of Parliament",51.4994794,-0.12480919999995876),
        new Location("Royal Observatory Greenwich",51.476853,-0.0005002000000331464),
        new Location("London Bridge",51.507842,-0.08769770000003518)
    ];

/*

*/



