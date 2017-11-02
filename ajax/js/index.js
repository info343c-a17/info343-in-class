// @ts-check
"use strict";

const LOCATION_API = "https://freegeoip.net/json/";
//replace `{latitude}` and `{longitude}`
const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=c2072f8cb6d9c7971cff7c662c5940c6&lat={latitude}&lon={longitude}"
//replace {icon}
const ICON_URL = "http://openweathermap.org/img/w/{icon}.png"

const ERROR_ALERT = document.querySelector("#error-alert");

//TODO: fetch from Location API to get lat/lng
//and then fetch Weather API for that lat/lng.
//Render results to the page, or handle errors

// handle errors

function handleError(err) {
    console.log(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none");
}

// handle responses
function handleResponse(response) {
    console.log("got response", response);
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}

// fetch weather
function fetchWeather(data) {
    console.log(data);
    let latitude = data.latitude;
    let longitude = data.longitude;
    let url = WEATHER_API.replace("{latitude}",latitude)
        .replace("{longitude}", longitude);
    return fetch(url);
}

// render weather
function renderWeather(data) {
    console.log(data);
    document.querySelector("#temp")
        .textContent = data.main.temp;

    if (data.weather && data.weather[0]) {
        let conditions = data.weather[0];
        document.querySelector("#description")
            .textContent = conditions.description;
        let img = /** @type {HTMLImageElement} */ (document.querySelector("#weather-icon"));
        img.src = ICON_URL.replace("{icon}", conditions.icon);
        img.alt = conditions.description;
    }
}

fetch(LOCATION_API)
    .then(handleResponse)
    .then(fetchWeather)
    .then(handleResponse)
    .then(renderWeather)
    .catch(handleError);

console.log("next line after fetch executes immediately");
