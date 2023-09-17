import React from "react";
import { WiThermometer, WiRain } from "react-icons/wi";
import { IoWaterOutline } from "react-icons/io5";
import { PiWindThin } from "react-icons/pi";
import "./index.css";

function WeatherWidget() {
  return (
    <div className="conteiner">
      <table className="tableTesting">
        <tr className="rowTesting">
          <td className="temperaturaDiaWidget">
            27
            <WiThermometer className="WiThermometerWidget" size={30} />
          </td>
          <tr>
            <td>
              <p>Max: 30°</p>
            </td>
            <td>
              <p>Min: 15°</p>
            </td>
          </tr>
        </tr>
        <tr className="rowTesting2">
          <div className="dailyWeatheDetails">
            <td>
              <p className="humidadeIcon">
                <IoWaterOutline
                  size={30}
                  style={{ background: "transparent" }}
                />
              </p>
              <p className="humidadePorcentagem">48%</p>
              <p className="humidadeText">Humidade</p>
            </td>
            <td>
              <p className="ventoIcon">
                <PiWindThin size={30} style={{ background: "transparent" }} />
              </p>
              <p className="ventoValor">20km/h</p>
              <p className="ventoText">Vento</p>
            </td>
            <td>
              <p className="precipitacaoIcon">
                <WiRain size={30} style={{ background: "transparent" }} />
              </p>
              <p className="precipitacaoPorcentagem">50%</p>
              <p className="precipitacaoText">Precipitação</p>
            </td>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default WeatherWidget;
