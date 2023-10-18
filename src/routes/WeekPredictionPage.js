import React from "react";
import "../index.css";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useState } from "react";

function WeekPredictionPage() {
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
                        <motion.div className="card1">
                            <motion.h2 className="card1Title">Framer Animation Testing</motion.h2>
                            <motion.div className="card1Body">
                                <p>Test</p>
                            </motion.div>
                        </motion.div>
                        <motion.div></motion.div>
                        <motion.div></motion.div>
                        <motion.div></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeekPredictionPage;



