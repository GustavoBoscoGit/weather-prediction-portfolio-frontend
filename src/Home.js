import React, { useState, useEffect } from "react";
import { WiRainMix } from "react-icons/wi";
import { IoExpandOutline } from "react-icons/io5";
import WeatherWidget from "./WeatherWidget";
import "./index.css";
import { NavLink } from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";


function Home() {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const [active] = useState("DetailedWidget");

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
    timeZone: "America/Sao_Paulo",
    locale: "pt-BR",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const [city, setCity] = useState(localStorage.getItem('lastSearchedCity') || '');

  const [currentWeatherData, setCurrentWeatherData] = useState(
    JSON.parse(localStorage.getItem('currentWeather')) || null
  );
  const [forecastWeatherData, setForecastWeatherData] = useState(
    JSON.parse(localStorage.getItem('forecastWeather')) || null
  );

  const [showSearchOnly, setShowSearchOnly] = useState(true);

  useEffect(() => {
    if (currentWeatherData && forecastWeatherData) {
      setShowSearchOnly(false);
    }
  }, [currentWeatherData, forecastWeatherData]);

  const handleSearch = () => {
    const APIKey = '52d00d043b05a31a967aaad360a28c91';
    const floripaAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0d2J1bmVkeW1pbmd5dm94ZndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MzkxODAsImV4cCI6MjAxNjUxNTE4MH0.c_JE6TVKXPe0Ezi00-QrdFF5G7-ZpkZ2tT_SJuIDyyQ';

    if(city !== 'floripa api'){
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
            humidity: json.list[index].main.humidity,
            windSpeed: parseInt(json.list[index].wind.speed),
            maxTemperature: parseInt(json.list[index].main.temp_max) - 273,
            minTemperature: parseInt(json.list[index].main.temp_min) - 273,
          });
        });

        localStorage.setItem('forecastWeather', JSON.stringify(forecastData))

        setForecastWeatherData(forecastData);
      });
    }else{
      fetch(`https://vtwbunedymingyvoxfwh.supabase.co/rest/v1/previsao_completa?select=*&apikey=${floripaAPIKey}`)
      .then(response => response.json())
      .then(json => {
        setCurrentWeatherData({
          temperature: parseInt(json[0]['temperatura']),
          humidity: json[0]['umidade'],
          windSpeed: parseInt(json[0]['velocidate_vento']),
          maxTemperature: parseInt(json[0]['temperatura_max']),
          minTemperature: parseInt(json[0]['temperatura_min']),
          precipitation: json[0]['precipitacao']
        });

        localStorage.setItem('currentWeather', JSON.stringify({
          temperature: parseInt(json[0]['temperatura']),
          humidity: json[0]['umidade'],
          windSpeed: parseInt(json[0]['velocidate_vento']),
          maxTemperature: parseInt(json[0]['temperatura_max']),
          minTemperature: parseInt(json[0]['temperatura_min']),
          precipitation: json[0]['precipitacao']
        }));
      });

      fetch(`https://vtwbunedymingyvoxfwh.supabase.co/rest/v1/previsao_completa?select=*&apikey=${floripaAPIKey}`)
      .then(response => response.json())
      .then(json => {
        
        const cardDate = {
          day: "2-digit",
          month: "short",
          timeZone: "UTC",
          locale: "pt-BR",
        };

        const forecastData = [];
        [307, 308, 309, 310].forEach(index => {
          forecastData.push({
            temperature: parseInt(json[index]['temperatura']),
            humidity: json[index]['umidade'],
            date: new Date(`${json[index]['Data']}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", ""),
            windSpeed: parseInt(json[index]['velocidate_vento']),
            maxTemperature: parseInt(json[index]['temperatura_max']),
            minTemperature: parseInt(json[index]['temperatura_min']),
            precipitation: json[index]['precipitacao']
          });
        });

        localStorage.setItem('forecastWeather', JSON.stringify(forecastData))

        setForecastWeatherData(forecastData);
      });
    }
  
    localStorage.setItem('lastSearchedCity', city);

  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <div>
      {showSearchOnly ?(
      <div className="conteiner">
        <div className="cidade-search">
          <input onKeyDown={handleKeyDown} type="text" placeholder="Pesquise a Cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
          <button onClick={handleSearch}> <FaSearchLocation size={20} className="FaSearchLocation"/></button>
        </div>
      </div>
      ) : (
        <>
          <div className="conteiner">
            <div className="cidade-search">
              <input onKeyDown={handleKeyDown} type="text" placeholder="Pesquise a Cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
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
              </p>
            )}
            </div>
          </div>
          <div className="conteiner">
            <div>
              {active === "DetailedWidget" && <WeatherWidget currentWeather={currentWeatherData} />}
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
                  <p className="temperaturaDiaCard1">{forecast.temperature}º</p>
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
        </>
      )}
    </div>
  );
}

export default Home;

