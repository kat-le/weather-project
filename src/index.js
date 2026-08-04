import { getWeatherData, processWeatherData } from "./weather";
import displayWeather from "./domController";
import "./styles.css"

//    const form = document.querySelector("#weather-form")
//     form.addEventListener("submit", (event) => {
//         event.preventDefault()
//         const location = document.querySelector(".city-input").value.trim()
//         console.log(location)
//         loadWeather(location)
//     })

//     async function loadWeather(location) {
//         const data = await getWeatherData(location)
//         const {alerts, current, forecast, hours} = processWeatherData(data)
//         displayWeather(alerts, current, forecast, hours)
//     }

//for dev only
const data = getWeatherData()
const {alerts, current, forecast, hours} =  processWeatherData(data)
displayWeather(alerts, current, forecast, hours)



