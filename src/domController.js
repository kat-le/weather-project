import "./cards.css"
import { loadWeatherIcon } from "./weatherIcons.js";

export default function displayWeather(alerts, current, forecast, hours, unit) {
    renderAlerts(alerts)
    renderHourly(hours)
    renderForecast(forecast)
    renderCurrentWeather(current)
    displayUnit(unit)
}

function displayUnit(unit) {
    const deg = unit === "us" ? "F" : "C";

    for (const unitDiv of document.querySelectorAll(".unit")) {
        unitDiv.textContent = `\xB0${deg}`;
    }

    const speed = unit === "us" ? "mph" : "km/h"
    const unitSpeed = document.querySelector(".unit-speed")
    unitSpeed.textContent = ` ${speed} | `
}

function renderHourly(hours) {
    const container = document.querySelector(".hourly-container")
    container.innerHTML = ""

    hours.forEach(hour => {
        const card = document.createElement("div")
        card.className = "hour-card"
        const time = document.createElement("p")
        time.textContent = hour.datetime.slice(0,2)
        const icon = document.createElement("img")
        displayWeatherIcon(icon, hour.icon);
        const temp = document.createElement("p")
        temp.textContent = Math.floor(Number(hour.temp))
        const unit = document.createElement("span")
        unit.className = "unit"
        temp.append(unit)


        card.appendChild(time)
        card.appendChild(icon)
        card.appendChild(temp)
        container.appendChild(card)
    })
}

function renderForecast(forecast) {
    const container = document.querySelector(".forecast-container")
    container.innerHTML = ""

    forecast.forEach(day => {
        const card = document.createElement("div")
        card.className = "forecast-item"

        const dayName = document.createElement("p")
        dayName.textContent = day.datetime

        const icon = document.createElement("img")
        displayWeatherIcon(icon, day.icon);
        
        const minTemp = document.createElement("p")
        minTemp.textContent = Math.floor(Number(day.tempmin ))
        const minUnit = document.createElement("span")
        minUnit.className = "unit"
        minTemp.append(minUnit)

        const bar = document.createElement("div")
        bar.className = "bar"

        const maxTemp = document.createElement("p")
        maxTemp.textContent = Math.floor(Number(day.tempmax ))
        const maxUnit = document.createElement("span")
        maxUnit.className = "unit"
        maxTemp.append(maxUnit)

        card.appendChild(dayName)
        card.appendChild(icon)
        card.appendChild(minTemp)
        card.appendChild(bar)
        card.appendChild(maxTemp)
        container.appendChild(card)
    })
}


function renderCurrentWeather(current) {
    const temp = document.querySelector(".curr-temp")
    temp.textContent = Math.floor(Number(current.temp))
    
    const feelslike = document.querySelector(".feelslike")
    feelslike.textContent = "Feels like: " + current.feelslike 

    const currentIcon = document.querySelector(".weather-icon");
    displayWeatherIcon(currentIcon, current.icon);

    const address = document.querySelector(".location")
    address.textContent = current.address.toUpperCase()

    const timezone = document.querySelector(".timezone")
    timezone.textContent = current.timezone

    const wind = document.querySelector(".wind-speed")
    wind.textContent = "Wind speed: " + current.windspeed
    const speed = document.createElement("span")
    speed.className = "unit-speed"
    wind.append(speed)

    const humidity = document.querySelector(".humidity")
    humidity.textContent = "Humidity: " + current.humidity + "%"

    const sunrise = document.querySelector(".sunrise")
    sunrise.textContent = "Sunrise: " + current.sunrise

    const sunset = document.querySelector(".sunset")
    sunset.textContent = "Sunset: " + current.sunset

    const uv = document.querySelector(".uv-index")
    uv.textContent = "UV Index: " + current.uvindex

    const desc = document.querySelector(".desc")
    desc.textContent = current.description
}

function renderAlerts(alerts) {
    const alertDiv = document.querySelector(".alerts")
    alertDiv.innerHTML = ""

    alerts.forEach((alert) => {
        const event = document.createElement("p")
        event.textContent = "! " + alert.event
        const headline = document.createElement("p")
        headline.textContent = alert.headline
        alertDiv.appendChild(event)
        alertDiv.appendChild(headline)
    })
}

async function displayWeatherIcon(img, iconName) {
    const iconPath = await loadWeatherIcon(iconName);
    img.src = iconPath;
    img.alt = iconName;
}
