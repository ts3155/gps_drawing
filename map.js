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
