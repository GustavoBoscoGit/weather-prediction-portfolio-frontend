import React from "react";
import "../index.css";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useState } from "react";

function WeekPredictionPage() {

    const [isOpen, setIsOpen] = useState(false);


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
                        <motion.div transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="card1">
                            <motion.h2 layout="position" className="card1Title">Framer Motion</motion.h2>
                            {isOpen &&(
                                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="card1Body">
                                    <p>
                                        test test test test test test test test test test test test test test
                                    </p>
                                    <p>
                                        test test test test test test test test test 
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.div transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="card2">
                            <motion.h2 layout="position" className="card2Title">Framer Motion</motion.h2>
                            {isOpen &&(
                                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="card2Body">
                                    <p>
                                        test test test test test test test test test test test test test test
                                    </p>
                                    <p>
                                        test test test test test test test test test 
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeekPredictionPage;



