const options = {
   // dragging:false,
   // touchZoom:false,
    doubleClickZoom:false,
    //scrollWheelZoom:false,
    zoomControl:false,
}

const map = L.map('mapid', options).setView([-27.2137514, -49.6671641], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//icon
const icon = L.icon({
    iconUrl: './images/map-marker.svg',
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170, 2]
})
let marker;

//create maps//
map.on('click',(event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //guardar latitude e longitude
    document.querySelector('[name=lng]').value = lng
    document.querySelector('[name=lat]').value = lat

    // remove icon 
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// Adicionar Fotos//
function addPhotoField(){

    //pegar o container de Fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar.(".new-upload")
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verificar se campo vazio se sim, não adiconar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpar input 
    input.value=""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)

}
function deleteField(event){
    const span = event.currentTarget
   
   
    const fieldsContainer = document.querySelectorAll('.new-upload')
 
    if(fieldsContainer.length < 2){
       //limpar o valor do campo 
        //span.parentNode.children[0].value = ""
        return
     }

    //deletar campo 
    span.parentNode.remove();
}
function toggleSelect(event){
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')})
    //pegar o botão clicado//colocar a class active (dos botoes)
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com valor selecionar
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se é sim ou não tem
    input.value = button.dataset.value
    


   
}