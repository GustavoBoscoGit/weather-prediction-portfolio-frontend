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

  // const [city, setCity] = useState('');
  
  // const handleSearch = () => {
  //   const APIKey = '52d00d043b05a31a967aaad360a28c91';
    
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${APIKey}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       const description = document.querySelector('.climaDia');
  //       const dayTemperature = document.querySelector('.temperaturaDiaWidget');
  //       const dayMaxTemperature = document.querySelector('.maxTemperature');
  //       const dayMinTemperature = document.querySelector('.minTemperature');
  //       const humidity = document.querySelector('.humidadePorcentagem');
  //       const windSpeed = document.querySelector('.ventoValor');

  //       dayTemperature.innerHTML = `${(parseInt(json.main.temp) - 273)}º`;
  //       description.innerHTML = `${json.weather[0].description}`;
  //       humidity.innerHTML = `${json.main.humidity}%`;
  //       windSpeed.innerHTML = `${parseInt(json.wind.speed)}km/h`;
  //       dayMaxTemperature.innerHTML = `${(parseInt(json.main.temp_max) - 273)}º`;
  //       dayMinTemperature.innerHTML = `${(parseInt(json.main.temp_min) - 273)}º`;
  //     });
      
  //     const cardDate = {
  //       day: "2-digit",
  //       month: "short",
  //       timeZone: "UTC",
  //       locale: "pt-BR",
  //     };

  //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},BR&appid=${APIKey}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       const weekTemperature1 = document.querySelector('.temperaturaDiaCard1');
  //       const weekTemperature2 = document.querySelector('.temperaturaDiaCard2');
  //       const weekTemperature3 = document.querySelector('.temperaturaDiaCard3');
  //       const weekTemperature4 = document.querySelector('.temperaturaDiaCard4');

  //       weekTemperature1.innerHTML = `${(parseInt(json.list[5].main.temp) - 273)}º`;
  //       weekTemperature2.innerHTML = `${(parseInt(json.list[10].main.temp) - 273)}º`;
  //       weekTemperature3.innerHTML = `${(parseInt(json.list[20].main.temp) - 273)}º`;
  //       weekTemperature4.innerHTML = `${(parseInt(json.list[30].main.temp) - 273)}º`;
        
  //       const weekDay1 = document.querySelector('.dataMesCard1');
  //       const weekDay2 = document.querySelector('.dataMesCard2');
  //       const weekDay3 = document.querySelector('.dataMesCard3');
  //       const weekDay4 = document.querySelector('.dataMesCard4');

  //       weekDay1.innerHTML = new Date(`${json.list[5].dt_txt}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", "");
  //       weekDay2.innerHTML = new Date(`${json.list[10].dt_txt}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", "");
  //       weekDay3.innerHTML = new Date(`${json.list[20].dt_txt}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", "");
  //       weekDay4.innerHTML = new Date(`${json.list[30].dt_txt}`).toLocaleDateString(undefined, cardDate).replace(" de", "").replace(".", "");
  //     })
  // };

  const [city, setCity] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);

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

// os dados foram apresentados corretamente, porém ao mudar para a outra página os dados sumiram, em minha aplicação possuo as página "/" que é a página home e "/semana" que é uma página secundária. Quando clico para ir á página "/semana" e depois clico para voltar a página "/" os dados somem, como faço para corrigir isso?