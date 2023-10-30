import React, { useState, useEffect } from "react";
import { WiRainMix } from "react-icons/wi";
import { IoExpandOutline } from "react-icons/io5";
import WeatherWidget from "./WeatherWidget";
import GraphWidget from "./GraphWidget";
import "./index.css";
import { NavLink } from 'react-router-dom';

function App() {
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

  return (
    <div>
      <div className="conteiner">
        <div className="cidade">
          <h1>Florianópolis</h1>
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
            Chuvoso <WiRainMix size={30} className="WiRainMix" />
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

export default App;
