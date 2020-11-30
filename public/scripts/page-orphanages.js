
const map = L.map('mapid').setView([-27.2137514, -49.6671641], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//icon
const icon = L.icon({
    iconUrl: './images/map-marker.svg',
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[140, 2]
})
//edition database form
function addMarker({id, name, lat, lng}){
    

// create pop up
const popup = L.popup({
    closeButton:false,
    ClassName: 'map-popup',
    minHeight:240,
    minwidth:240
}).setContent(`${name}<a href="orphanage?id=${id}">
<img src="/images/arrow-white.svg"></a>`)


//create marker
L
    .marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})