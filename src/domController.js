import "./cards.css"

export default function displayWeather(alerts, current, forecast, hours) {
    renderHourly(hours)
    renderForecast(forecast)
}

function renderHourly(hours) {
    const container = document.querySelector(".hourly-container")

    hours.forEach(hour => {
        const card = document.createElement("div")
        card.className = "hour-card"
        const time = document.createElement("p")
        time.textContent = hour.datetime.slice(0,2)
        const icon = document.createElement("img")
        icon.textContent = hour.icon
        const temp = document.createElement("p")
        temp.textContent = Math.floor(Number(hour.temp)) + `\xB0F`
        card.appendChild(time)
        card.appendChild(icon)
        card.appendChild(temp)
        container.appendChild(card)
    })
}

function renderForecast(forecast) {
    const container = document.querySelector(".forecast-container")

    forecast.forEach(day => {
        const card = document.createElement("div")
        card.className = "forecast-item"

        const dayName = document.createElement("p")
        dayName.textContent = day.datetime

        const icon = document.createElement("img")
        icon.textContent = day.icon
        
        const minTemp = document.createElement("p")
        minTemp.textContent = Math.floor(Number(day.tempmin )) + `\xB0F`

        const bar = document.createElement("div")
        bar.className = "bar"

        const maxTemp = document.createElement("p")
        maxTemp.textContent = Math.floor(Number(day.tempmax )) + `\xB0F`

        card.appendChild(dayName)
        card.appendChild(icon)
        card.appendChild(minTemp)
        card.appendChild(bar)
        card.appendChild(maxTemp)
        container.appendChild(card)
    })

}

