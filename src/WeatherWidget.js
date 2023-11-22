import React from "react";
import { WiThermometer, WiRain } from "react-icons/wi";
import { IoWaterOutline } from "react-icons/io5";
import { PiWindThin } from "react-icons/pi";
import "./index.css";

const WeatherWidget = ({ currentWeather }) => {
  return (
    <div className="conteiner">
      <table className="tableStyle">
        <tr className="rowStyle">
          {currentWeather &&(
          <td className="temperaturaDiaWidget">
            {currentWeather.temperature}
            <WiThermometer className="WiThermometerWidget" size={30}/>
          </td>
          )}
          <tr>
          {currentWeather &&(
            <td>
              <p className="maxTemperature">Max: {currentWeather.maxTemperature}°</p>
            </td>
            )}
            {currentWeather &&(
            <td>
              <p className="minTemperature">Min: {currentWeather.minTemperature}°</p>
            </td>
            )}
          </tr>
        </tr>
        <tr className="secondRowStyle">
          <div className="dailyWeatheDetails">
            {currentWeather &&(
            <td>
              <p className="humidadeIcon"><IoWaterOutline size={30} style={{ background: "transparent" }}/></p>
              <p className="humidadePorcentagem">{currentWeather.humidity}%</p>
              <p className="humidadeText">Humidade</p>
            </td>
            )}
            {currentWeather &&(
            <td>
              <p className="ventoIcon"><PiWindThin size={30} style={{ background: "transparent" }} /></p>
              <p className="ventoValor">{currentWeather.windSpeed}km/h</p>
              <p className="ventoText">Vento</p>
            </td>
            )}
            {currentWeather &&(
            <td>
              <p className="precipitacaoIcon"><WiRain size={30} style={{ background: "transparent" }} /></p>
              <p className="precipitacaoPorcentagem">50%</p>
              <p className="precipitacaoText">Precipitação</p>
            </td>
            )}
          </div>
        </tr>
      </table>
    </div>
  );
}

export default WeatherWidget;
