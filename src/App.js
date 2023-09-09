import React, { useState, useEffect } from 'react';
import { WiRainMix } from "react-icons/wi";
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
        <p className='climaDia'>Chuvoso <WiRainMix size={30}/></p>
      </div>
    </div>
  );
}

export default App;
