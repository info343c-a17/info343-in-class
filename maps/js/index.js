"use strict";

const seattleCoordinates = [-122.3321, 47.6062];
const seattlePoliceIncidentsAPI = "https://data.seattle.gov/resource/pu5n-trf4.json";

//API Key
mapboxgl.accessToken = 'pk.eyJ1IjoiamNibXJycyIsImEiOiJjamFtcm0zbHozNnE0MnFucW9kY3BwbHdoIn0.klsC45yTbrQXzmkhh8l6xg';

//Create the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: seattleCoordinates,
    zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuarcy: true, timeout: 30000}}));

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onCurrentPos, onErrorCurrentPos)
}

function onCurrentPos(position) {
    let lnglat = [position.coords.longitude, position.coords.latitude];

    map.flyTo({center: lnglat, zoom: 14});

    let div = document.createElement("div");
    div.className = "current-location-marker";
    let marker = new mapboxgl.Marker(div).setLngLat(lnglat).addTo(map);

    let popup = new mapboxgl.Popup()
    popup.setText("your current location");
    marker.setPopup(popup);
}

function onErrorCurrentPos(err) {
    console.log(err);
}

fetch(seattlePoliceIncidentsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(record => {
            let eventDate = new Date(record.event_clearance_date);
            let lnglat = [record.longitude, record.latitude];
            let elem = document.createElement("div");
            elem.className = "data-marker";
            let marker = new mapboxgl.Marker(elem).setLngLat(lnglat).addTo(map);
            let popup = new mapboxgl.Popup();
            popup.setText(record.event_clearance_description);
            marker.setPopup(popup);
        })
    })
    .catch(console.error);
