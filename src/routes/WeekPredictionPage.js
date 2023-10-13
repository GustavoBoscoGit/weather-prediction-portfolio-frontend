import React from "react";
import "../index.css";
import { NavLink } from 'react-router-dom';

function WeekPredictionPage() {
    return(
        <div className="conteiner">
            <NavLink exact to="/">
                home
            </NavLink>
        </div>
    );
}

export default WeekPredictionPage;