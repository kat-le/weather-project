import sampleData from "./sampleWeather.js"

 
//   async function getWeatherData(location) {
//     try {
//       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BTMS2DH3MC5HHK8DRPV3GK5RZ&include=alerts,current,hours`);

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status} Location not found. Try a city, ZIP code, or address.`);
//     }
//      const weatherData = await response.json();
//      return weatherData
//     } catch (error) {
//       console.error(error);
//     }
//   }

//for dev only, delete after
function getWeatherData() {
    const weatherData = sampleData
    return weatherData
}

  function processWeatherData(data) {
      const alerts = getAlert(data)
      const current = getCurrentWeather(data)
      const forecast = get10DayForecast(data)
      const hours = getHourlyForecast(data)
      console.log(alerts)
      console.log(current)
      console.log(forecast)
      console.log(hours)
      return { alerts, current, forecast, hours }
  }

  function getAlert(data) {
    const alert = data.alerts
    const alerts = []

    data.alerts.forEach(alert => {
        alerts.push({
            event: alert.event,
            headline: alert.headline
        })
    });
    return alerts
  }

  function getCurrentWeather(data) {
    const current = data.currentConditions

    return {
        temp: current.temp,
        feelslike: current.feelslike,
        humidity: current.humidity,
        windspeed: current.windspeed,
        sunrise: current.sunrise,
        sunset: current.sunset,
        uvindex: current.uvindex,
        icon: current.icon,
        description: data.days[0].description,
        timezone: data.timezone,
        address: data.resolvedAddress
    }
  }

  function get10DayForecast(data) {
    const forecast = data.days.slice(0, 10)
    const tenDays = []

    forecast.forEach(day => {
        tenDays.push({
            datetime: day.datetime,
            icon: day.icon,
            tempmin: day.tempmin,
            tempmax:day.tempmax
        })
    })
    return tenDays
   
  }

  function getHourlyForecast(data) {
    const currentHours = data.days[0].hours
    const hourlyData = []

    currentHours.forEach(hour => {
        hourlyData.push({
            datetime: hour.datetime,
            icon: hour.icon,
            temp: hour.temp
        })
    })
    return hourlyData
  }

  export { getWeatherData, processWeatherData};
 