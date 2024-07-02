import React, { useState } from 'react'
import axios from 'axios'


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a32de4e7b4ad7cae32f2b186fa3111b&units=metric`)
      .then((response) => {
        console.log(response.data)
        setWeatherData(response.data)
        setCityName('')
      })
      .catch((error) => {
        console.log(error)
        alert('Failed to fetch weather data. Please try again.')
      })
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter city name" 
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary">Get Weather Data</button>
          </form>

          {weatherData && (
            <div className="mt-4">
              <h3>Weather in {weatherData.name}</h3>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weather
