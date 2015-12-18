$(document).ready(function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 37.752, lng: -122.402}
  });
  
  var polyCoords = [
    {lat: 37.7838, lng: -122.3944},
    {lat: 37.7749, lng: -122.4057},
    {lat: 37.7650, lng: -122.3933},
    {lat: 37.7500, lng: -122.3924},
    {lat: 37.7493, lng: -122.4032},
    {lat: 37.7351, lng: -122.4068},
    {lat: 37.7241, lng: -122.4015},
    {lat: 37.7235, lng: -122.4040},
    {lat: 37.7209, lng: -122.4030},
    {lat: 37.7192, lng: -122.4112},
    {lat: 37.7237, lng: -122.4130},
    {lat: 37.7230, lng: -122.4158},
    {lat: 37.7222, lng: -122.4155},
    {lat: 37.7221, lng: -122.4166},
    {lat: 37.7228, lng: -122.4169},
    {lat: 37.7226, lng: -122.4179},
    {lat: 37.7237, lng: -122.4184},
    {lat: 37.7234, lng: -122.4193},
    {lat: 37.7246, lng: -122.4198},
    {lat: 37.7236, lng: -122.4239},
    {lat: 37.7157, lng: -122.4272},
    {lat: 37.7166, lng: -122.4312},
    //{lat: 38.7132, lng: -122.4337}
  ];

  // Construct the polygon.
  var dist9 = new google.maps.Polygon({
    paths: polyCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  dist9.setMap(map);
}); 
