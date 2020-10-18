const weather = document.querySelector(".weather"),
    API_KEY = "663138525f1e4e1879997ffdb2aed765";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                const temp = json.main.temp,
                    location = json.name;
            weather.innerHTML = `${temp}℃ / ${location} / Openweathermap`;
            });
}

function saveCoords(coordsObj) {
    localStorage.setItem("COORDS", JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude,
        coordsObj = {
            latitude,
            longitude
        };
    saveCoords(coordsObj)
    getWeather(latitude, longitude);
}

function handleGeoFailed(position) {
    console.log("Failed")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem("COORDS")
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCoords();
}

init()