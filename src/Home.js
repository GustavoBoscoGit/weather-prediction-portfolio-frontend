import React, { useState, useEffect } from "react";
import { WiRainMix } from "react-icons/wi";
import { IoExpandOutline } from "react-icons/io5";
import WeatherWidget from "./WeatherWidget";
import GraphWidget from "./GraphWidget";
import "./index.css";
import { NavLink } from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";


function Home() {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const [active, setActive] = useState("DetailedWidget");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    locale: "pt-BR",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const [city, setCity] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState(
    JSON.parse(localStorage.getItem('currentWeather')) || null
  );
  const [forecastWeatherData, setForecastWeatherData] = useState(
    JSON.parse(localStorage.getItem('forecastWeather')) || null
  );

  const handleSearch = () => {
    const APIKey = '52d00d043b05a31a967aaad360a28c91';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        setCurrentWeatherData({
          description: json.weather[0].description,
          temperature: parseInt(json.main.temp) - 273,
          humidity: json.main.humidity,
          windSpeed: parseInt(json.wind.speed),
          maxTemperature: parseInt(json.main.temp_max) - 273,
          minTemperature: parseInt(json.main.temp_min) - 273,
        });

        localStorage.setItem('currentWeather', JSON.stringify({
          description: json.weather[0].description,
          temperature: parseInt(json.main.temp) - 273,
          humidity: json.main.humidity,
          windSpeed: parseInt(json.wind.speed),
          maxTemperature: parseInt(json.main.temp_max) - 273,
          minTemperature: parseInt(json.main.temp_min) - 273,
        }));
      });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},BR&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        const cardDate = {
          day: "2-digit",
          month: "short",
          timeZone: "UTC",
          locale: "pt-BR",
        };
        
        const forecastData = [];
        [5, 10, 20, 30].forEach(index => {
          forecastData.push({
            temperature: parseInt(json.list[index].main.temp) - 273,
            date: new Date(`${json.list[index].dt_txt}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", ""),
          });
        });

        localStorage.setItem('forecastWeather', JSON.stringify(forecastData))

        setForecastWeatherData(forecastData);
      });
  };
  return (
    <div>
      <div className="conteiner">
        <div className="cidade-search">
          <input type="text" placeholder="Pesquise a Cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
          <button onClick={handleSearch}> <FaSearchLocation size={20} className="FaSearchLocation"/></button>
        </div>
      </div>
      <div className="conteiner">
        <div className="conteinerData">
          <p className="dataAtual">{formattedDate}</p>
        </div>
      </div>
      <div className="conteiner">
        <div className="centeredTextIcon">
        {currentWeatherData &&(
          <p className="climaDia">
            {currentWeatherData.description}
            <WiRainMix size={30} className="WiRainMix" />
          </p>
        )}
        </div>
      </div>
      <div className="conteiner">
        <div onClick={() => setActive("DetailedWidget")}>
          {active === "MainTemperatureWidget" && <GraphWidget />}
        </div>
      </div>
      <div className="conteiner">
        <div onClick={() => setActive("MainTemperatureWidget")}>
          {active === "DetailedWidget" && <WeatherWidget />}
        </div>
      </div>
      <div className="conteiner">
        <div className="cardsPrevisaoSemana">
          <div className="centered-label">
            <NavLink exact to="/semana"><p className="previsaoDaSemana">Previsão da Semana{" "}<IoExpandOutline size={20} className="IoExpandOutline" /></p></NavLink>
          </div>
          {forecastWeatherData && (
          <div className="cardtestConteiner">
            {forecastWeatherData.map((forecast, index) => (
            <div key={index}> 
              <p className="temperaturaDiaCard1">{forecast.temperature}</p>
              <p className="iconeClimaDiaCard">
                <WiRainMix size={40} style={{ background: "transparent" }} />
              </p>
              <p className="dataMesCard1">{forecast.date}</p>
            </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

