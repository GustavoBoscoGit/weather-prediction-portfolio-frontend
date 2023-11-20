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

  const cardDate = {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    locale: "pt-BR",
  };

  const formatedCardDate = currentDate
    .toLocaleDateString(undefined, cardDate)
    .replace(" de", "")
    .replace(".", "");

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const [city, setCity] = useState('');
  
  const handleSearch = () => {
    const APIKey = '52d00d043b05a31a967aaad360a28c91';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        const description = document.querySelector('.climaDia');
        const dayTemperature = document.querySelector('.temperaturaDiaWidget');
        const dayMaxTemperature = document.querySelector('.maxTemperature');
        const dayMinTemperature = document.querySelector('.minTemperature');
        const humidity = document.querySelector('.humidadePorcentagem');
        const windSpeed = document.querySelector('.ventoValor');

        dayTemperature.innerHTML = `${(parseInt(json.main.temp) - 273)}º`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        windSpeed.innerHTML = `${parseInt(json.wind.speed)}km/h`;
        dayMaxTemperature.innerHTML = `${(parseInt(json.main.temp_max) - 273)}º`;
        dayMinTemperature.innerHTML = `${(parseInt(json.main.temp_min) - 273)}º`;
      });
  };
  return (
    <div>
      <div className="conteiner">
        <div className="cidade-search">
          <input type="text" placeholder="Pesquise a Cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
          <button onClick={handleSearch}><FaSearchLocation size={20} className="FaSearchLocation"/></button>
        </div>
      </div>
      <div className="conteiner">
        <div className="conteinerData">
          <p className="dataAtual">{formattedDate}</p>
        </div>
      </div>
      <div className="conteiner">
        <div className="centeredTextIcon">
          <p className="climaDia">
            Chuvoso
            <WiRainMix size={30} className="WiRainMix" />
          </p>
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
          <div className="cardtestConteiner">
            <div>
              <p className="temperaturaDiaCard">20</p>
              <p className="iconeClimaDiaCard">
                <WiRainMix size={40} style={{ background: "transparent" }} />
              </p>
              <p className="dataMesCard">{formatedCardDate}</p>
            </div>
            <div>
              <p className="temperaturaDiaCard">20</p>
              <p className="iconeClimaDiaCard">
                <WiRainMix size={40} style={{ background: "transparent" }} />
              </p>
              <p className="dataMesCard">{formatedCardDate}</p>
            </div>
            <div>
              <p className="temperaturaDiaCard">20</p>
              <p className="iconeClimaDiaCard">
                <WiRainMix size={40} style={{ background: "transparent" }} />
              </p>
              <p className="dataMesCard">{formatedCardDate}</p>
            </div>
            <div>
              <p className="temperaturaDiaCard">20</p>
              <p className="iconeClimaDiaCard">
                <WiRainMix size={40} style={{ background: "transparent" }} />
              </p>
              <p className="dataMesCard">{formatedCardDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
