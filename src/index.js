console.log("hello");

//-----------------------------------------------

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZmZudXQiLCJhIjoiY2pyODg2bXc1MDA2NDQzbnZrbWZtMGFsayJ9.P4xMrKh3Gz6CiHN-9bnXIA';
var map = new mapboxgl.Map({
container: 'map',
center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
style: 'mapbox://styles/mapbox/streets-v11'
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);