import { getWeatherData, processWeatherData } from "./weather";
import displayWeather from "./domController";
import "./styles.css"

let currentLocation = "";
let currentUnit = "us";

const fahrenheitRadio = document.querySelector('input[value="us"]');
fahrenheitRadio.checked = true;

const form = document.querySelector("#weather-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    currentLocation = document.querySelector(".city-input").value.trim()
    loadWeather(currentLocation)
})

const radios = document.querySelectorAll('input[name="unit"]');
radios.forEach((radio) => {
    radio.addEventListener("change", async (event) => {
        currentUnit = event.target.value;

        if (currentLocation) {
            console.log(currentLocation)
            await loadWeather(currentLocation);
        }
    });
});

async function loadWeather(location) {
    const data = await getWeatherData(location, currentUnit)
    const {alerts, current, forecast, hours} = processWeatherData(data)
    displayWeather(alerts, current, forecast, hours, currentUnit)
}


//for dev only
// const data = getWeatherData()
// const {alerts, current, forecast, hours} =  processWeatherData(data)
// displayWeather(alerts, current, forecast, hours)



