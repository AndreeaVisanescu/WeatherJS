const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.state);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
var modal = new bootstrap.Modal('#locModal');

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const state = document.getElementById('state').value;

    weather.changeLocation(state);
    storage.setLocationData(state);

    getWeather();
   
    modal.hide();

});

function getWeather(){
weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}