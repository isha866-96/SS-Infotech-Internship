import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const API_KEY = "241a99a704a0a92f758e89b8c747bee1";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to fetch weather.");
        setWeather(null);
        return;
      }

      setWeather(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>🌤 Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchWeather();
              }
            }}
          />

          <button onClick={fetchWeather}>
            Search
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>
              {weather.name}, {weather.sys?.country}
            </h2>

            <h3>
              {weather.main?.temp !== undefined
                ? `${Math.round(weather.main.temp)}°C`
                : "--"}
            </h3>

            <p className="condition">
              {weather.weather?.[0]?.description}
            </p>

            <div className="details">
              <div className="detail-box">
                <p>{weather.main?.humidity ?? "--"}%</p>
                <small>Humidity</small>
              </div>

              <div className="detail-box">
                <p>{weather.wind?.speed ?? "--"} m/s</p>
                <small>Wind Speed</small>
              </div>

              <div className="detail-box">
                <p>
                  {weather.main?.feels_like !== undefined
                    ? `${Math.round(weather.main.feels_like)}°C`
                    : "--"}
                </p>
                <small>Feels Like</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;