'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoidHMzMTU1IiwiYSI6ImNrODh3enI0ajAweWIzbG12cHE0NGxyc2MifQ.0oMeDU5yxeGAedhyneECjQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ts3155/ck8iv48qo00o81jp36q4ljxd5',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})
// create a variable to keep track of the user's current location
// we're going to initialize it to the default center of the map
let current_location = [-73.96216, 40.80779]

// update the variable whenever a geolocation event fires
geolocate.on('geolocate', function(event) {
    current_location = [event.coords.longitude, event.coords.latitude]
    console.log('geolocated', current_location)   
})

// for testing purposes, also update the variable whenever you click on the map
map.on('click', function(event) {
    current_location = [event.lngLat.lng, event.lngLat.lat]
    console.log('clicked', current_location)        
})
// variable which references the HTML button element
let draw_btn = document.getElementById('draw_btn')

// a handler that is called when the button is clicked
draw_btn.addEventListener('click', function() {

    // print something in the console to test
    console.log('clicked draw_btn')                 

})
let active = false
let start_marker = new mapboxgl.Marker()    

function startDrawing() {

    active = true

    start_marker.setLngLat(current_location)
    start_marker.addTo(map)

}

function stopDrawing() {

    active = false

}
let active = false
let start_marker = new mapboxgl.Marker()    

function startDrawing() {

    active = true

    start_marker.setLngLat(current_location)
    start_marker.addTo(map)

    draw_btn.style['background-color'] = "red"         // make the button red
    draw_btn.style['color'] = "white"                  // make it's text white
    draw_btn.value = 'Stop and save'                   // change the text to the opposite state

}

function stopDrawing() {

    active = false

    draw_btn.style['background-color'] = "white"      // make the button white again
    draw_btn.style['color'] = "black"                 // make the text black
    draw_btn.value = 'Start'                          // change the text

}
