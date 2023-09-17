import React, { useState, useEffect } from 'react';
import { WiRainMix, WiThermometer } from "react-icons/wi";
import { IoExpandOutline } from "react-icons/io5";
// import { IoWaterOutline } from "react-icons/io5";
// import { WiRain } from "react-icons/wi";
// import { PiWindThin } from "react-icons/pi";
import WeatherWidget from './WeatherWidget';
import "./index.css";


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
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    locale: 'pt-BR'
  };

  const cardDate = {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    locale: 'pt-BR'
  };

  const formatedCardDate = currentDate.toLocaleDateString(undefined, cardDate).replace(' de', '').replace('.', '');

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
        <div className='centeredTextIcon'><p className='climaDia'>Chuvoso <WiRainMix size={30} className='WiRainMix'/></p></div>
      </div>
      <div className="conteiner">
        <div onClick={() => setActive("DetailedWidget")}>
          <p className='temperaturaDia'>42</p>
          <div><WiThermometer className="WiThermometer" size={50} /></div>
        </div>
      </div>
      <div className="conteiner">
        {active === "DetailedWidget" && <WeatherWidget/>}
      </div>
      <div className="conteiner">
        <div className='cardsPrevisaoSemana'>
          <div className='centered-label'><p className='previsaoDaSemana'>Previsão da Semana <IoExpandOutline size={20} className='IoExpandOutline'/></p></div>
          <div className='cardtestConteiner'>
            <div>
              <p className='temperaturaDiaCard'>20</p>
              <p className='iconeClimaDiaCard'><WiRainMix size={40} style={{ background: 'transparent' }} /></p>
              <p className='dataMesCard'>{formatedCardDate}</p>
            </div>
            <div>
              <p className='temperaturaDiaCard'>20</p>
              <p className='iconeClimaDiaCard'><WiRainMix size={40} style={{ background: 'transparent' }} /></p>
              <p className='dataMesCard'>{formatedCardDate}</p>
            </div>
            <div>
              <p className='temperaturaDiaCard'>20</p>
              <p className='iconeClimaDiaCard'><WiRainMix size={40} style={{ background: 'transparent' }} /></p>
              <p className='dataMesCard'>{formatedCardDate}</p>
            </div>
            <div>
              <p className='temperaturaDiaCard'>20</p>
              <p className='iconeClimaDiaCard'><WiRainMix size={40} style={{ background: 'transparent' }} /></p>
              <p className='dataMesCard'>{formatedCardDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
