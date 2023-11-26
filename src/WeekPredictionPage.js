import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { WiRain } from "react-icons/wi";
import { PiWindThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoWaterOutline } from "react-icons/io5";




const WeekCardComponent = ({ dateOfTheDay, dayTemp, dayMaxTemp, dayMinTemp, windSpeed, humidityPercentage, preciptationPercentage}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.section transition={{ layout: { duration: 1, type: "spring" } }} onClick={() => setIsActive(!isActive)} layout className="sectionStyle">
      <motion.div className="dateStyle">
        <p className="conteiner">{dateOfTheDay}</p>
      </motion.div>
      <motion.div className="card">
        <motion.table className="tablecard" layout="position">
            <motion.td className="temperaturaDiaCardSemana">{dayTemp}</motion.td>
            <motion.td className="temperaturaDiaMaxMinCardSemana">
              <motion.tr>Max: {dayMaxTemp}</motion.tr>
              <motion.tr>Min: {dayMinTemp}</motion.tr>
            </motion.td>
        </motion.table>
      </motion.div>
      {isActive && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="cardTransitionBody">
          <motion.table layout="position" className="cardTransitionBodyTable">
            <motion.tr className="previsaoCardSemanaStyle">
              <motion.td className="infoVentoCard">
                <motion.p className="ventoIcon">
                  <PiWindThin size={30} style={{ background: "transparent" }} />
                </motion.p>
                <motion.p className="ventoValor">{windSpeed}</motion.p>
                <motion.p className="ventoText">Vento</motion.p>
              </motion.td>
              <motion.td className="infoHumidadeCard">
                <motion.p className="humidadeIcon">
                  <IoWaterOutline
                    size={30}
                    style={{ background: "transparent" }}
                  />
                </motion.p>
                <motion.p className="humidadePorcentagem">
                  {humidityPercentage}
                </motion.p>
                <motion.p className="humidadeText">Humidade</motion.p>
              </motion.td>
              <motion.td className="infoPrecipitacaoCard">
                <motion.p className="precipitacaoIcon">
                  <WiRain size={30} style={{ background: "transparent" }} />
                </motion.p>
                <motion.p className="precipitacaoPorcentagem">
                  {preciptationPercentage}
                </motion.p>
                <motion.p className="precipitacaoText">Precipitação</motion.p>
              </motion.td>
            </motion.tr>
          </motion.table>
        </motion.div>
      )}
    </motion.section>
  );
}

const WeekPredictionPage = () => {

  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    // Recuperar os dados do localStorage
    const savedForecastWeather = JSON.parse(localStorage.getItem('forecastWeather'));

    if (savedForecastWeather) {
      setForecastWeather(savedForecastWeather);
    }
  }, []);

  return(
    <div>
      <div className="conteiner">
        <div className="closeIcon">
          <NavLink exact to="/">
            <IoClose size={30} className="IoClose" />
          </NavLink>
        </div>
      </div>
      <div className="conteiner">
        <div className="previsaoDaSemanaText">
          <p>Previsão da Semana</p>
        </div>
      </div>
      <div className="conteiner">
        <div className="cardsDaSemana">
          <div className="cardsSemanaConteiner">
          {forecastWeather.length > 0 ? (
            forecastWeather.map((forecastDay, index) => (
              <WeekCardComponent
                key={index}
                dateOfTheDay={forecastDay.date}
                dayTemp={forecastDay.temperature}
                dayMaxTemp={forecastDay.maxTemperature}
                dayMinTemp={forecastDay.minTemperature}
                windSpeed={forecastDay.windSpeed}
                humidityPercentage={forecastDay.humidity}
                preciptationPercentage={forecastDay.precipitation}
              />
            ))
          ) : (
            <p>Nenhuma previsão disponível</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekPredictionPage;
