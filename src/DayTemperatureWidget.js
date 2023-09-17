import React from "react";
import { WiThermometer } from "react-icons/wi";
import "./index.css";

function DayTemperatureWidget() {
    return(
        <div className="conteiner">
            <p className='temperaturaDia'>42</p>
            <div><WiThermometer className="WiThermometer" size={50} /></div>
        </div>
    );
}

export default DayTemperatureWidget;