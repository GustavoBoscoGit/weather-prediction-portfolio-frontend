import React from "react";
import { WiThermometer } from "react-icons/wi";
import "./index.css";

function GraphWidget() {
    return(
        <div className="conteiner">
            <p className='temperaturaDia'>42</p>
            <div><WiThermometer className="WiThermometer" size={50} /></div>
        </div>
    );
}

export default GraphWidget;