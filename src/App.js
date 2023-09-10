import React, { useState, useEffect } from 'react';
import { WiRainMix, WiThermometer } from "react-icons/wi";
import "./index.css";


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

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
        <p className='climaDia'>Chuvoso <WiRainMix size={30} /></p>
      </div>
      <div className="conteiner">
        <p className='temperaturaDia'>42</p>
        <div><WiThermometer className="WiThermometer" size={50} /></div>
      </div>
      <div className="conteiner">
        <div className='cardsPrevisaoSemana'>
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
