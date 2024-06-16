import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import './style.css';
import sunIcon from '../../assets/weather-only-sun.png';
import cloudSun from "../../assets/cloud-sun.png";
import snow from "../../assets/cloud-with-snow.png";
import timeDate from "../../assets/date-and-time.png";
import Speed from "../../assets/wind-speed.png";

const API_KEY = '1e49ba12681304fbf76176dd82d99ee1'; // Replace with your OpenWeather API key

const Weather = ({ locations, removeLocation }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = locations.map((location) =>
        fetchWeatherData(location).catch((error) => ({ error }))
      );
      const results = await Promise.all(promises);
      setWeatherData(results);
    };

    fetchData();
  }, [locations]);

  const fetchWeatherData = async (location) => {
    let url;
    if (location.type === 'city') {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=${API_KEY}&units=metric`;
    } else if (location.type === 'coordinates') {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
    }

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return { error: 'Failed to fetch' };
    }
  };

  return (
    <div className="weather-container">
      {weatherData.map((data, index) => {
        if (data.error) {
          return (
            <div key={index} className="weather-card">
              <p>{data.error}</p>
              <button onClick={() => removeLocation(index)}>Remove</button>
            </div>
          );
        }

        const { name, main, wind, weather, dt } = data;
        const temperature = main.temp;
        const humidity = main.humidity;
        const windSpeed = wind.speed;
        const weatherDescription = weather[0].description;
        const dateTime = format(new Date(dt * 1000), 'PPPpp');

        return (
          <div key={index} className="weather-card">
            <h2>{name}</h2>
            <p>
              <img src={sunIcon} alt="sun"/>
              <span>Temperature:</span> {temperature}°C</p>
            <p>
              <img src={cloudSun} alt="cloud sun"/>
              <span>Humidity:</span> {humidity}%</p>
            <p>
              <img src={Speed} alt="wind"/>
              <span>Wind Speed:</span> {windSpeed} m/s</p>
            <p>
              <img src={snow} alt="snow"/>
              <span>Weather Description:</span> {weatherDescription}</p>
            <p>
              <img src={timeDate} alt="time"/>
              <span>Date & Time:</span> {dateTime}</p>
            <button className='remove-button' onClick={() => removeLocation(index)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
