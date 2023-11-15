import React from "react";
import "./index.css";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoWaterOutline } from "react-icons/io5";

function WeekPredictionPage() {

    const [isOpen, setIsOpen] = useState(null);

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
                        <motion.section transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="sectionStyle">
                            <motion.div className="dateStyle">
                                <p className="conteiner">23</p>
                                <p className="conteiner">sex</p>
                            </motion.div>
                            <motion.div className="card1">
                                <motion.table className="tableCard1" layout="position">
                                    <motion.td className="temperaturaDiaCardSemana">23°</motion.td>
                                    <motion.td className="temperaturaDiaMaxMinCardSemana">
                                        <motion.tr>Max: 23°</motion.tr>
                                        <motion.tr>Min: 10°</motion.tr>
                                    </motion.td>
                                </motion.table>
                                {isOpen &&(
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="cardTransitionBody">
                                        <motion.table layout="position" className="cardTransitionBodyTable">
                                            <motion.tr>
                                                <motion.td>
                                                    <motion.p>Weather Text</motion.p>
                                                </motion.td>
                                                <motion.td className="infoHumidadeCard">
                                                    <motion.p className="humidadeIcon"><IoWaterOutline size={30} style={{ background: "transparent" }}/></motion.p>
                                                    <motion.p className="humidadePorcentagem">48%</motion.p>
                                                    <motion.p className="humidadeText">Humidade</motion.p>  
                                                </motion.td>
                                            </motion.tr>
                                            <motion.tr></motion.tr>
                                        </motion.table>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.section>
                        <motion.section transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="sectionStyle">
                            <motion.div className="dateStyle">
                                <p className="conteiner">23</p>
                                <p className="conteiner">sex</p>
                            </motion.div>
                            <motion.div className="card2">
                                <motion.table layout="position">
                                    <motion.td className="temperaturaDiaCardSemana">23°</motion.td>
                                    <motion.td className="temperaturaDiaCardSemana">
                                        <motion.tr>Max: 23°</motion.tr>
                                        <motion.tr>Min: 10°</motion.tr>
                                    </motion.td>
                                </motion.table>
                                {isOpen &&(
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="cardTransitionBody">
                                        <p>
                                            test test test test test test test test test test test test test test test test
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.section>
                        <motion.section transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="sectionStyle">
                            <motion.div className="dateStyle">
                                <p className="conteiner">23</p>
                                <p className="conteiner">sex</p>
                            </motion.div>
                            <motion.div className="card3">
                                <motion.table layout="position">
                                    <motion.td className="temperaturaDiaCardSemana">23°</motion.td>
                                    <motion.td className="temperaturaDiaCardSemana">
                                        <motion.tr>Max: 23°</motion.tr>
                                        <motion.tr>Min: 10°</motion.tr>
                                    </motion.td>
                                </motion.table>
                                {isOpen &&(
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="cardTransitionBody">
                                        <p>
                                            test test test test test test test test test test test test test test
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.section>
                        <motion.section transition={{ layout: { duration:1, type: "spring" }}} layout onClick={()=> setIsOpen(!isOpen)} className="sectionStyle">
                            <motion.div className="dateStyle">
                                <p className="conteiner">23</p>
                                <p className="conteiner">sex</p>
                            </motion.div>
                            <motion.div className="card4">
                                <motion.table layout="position">
                                    <motion.td className="temperaturaDiaCardSemana">23°</motion.td>
                                    <motion.td className="temperaturaDiaCardSemana">
                                        <motion.tr>Max: 23°</motion.tr>
                                        <motion.tr>Min: 10°</motion.tr>
                                    </motion.td>
                                </motion.table>
                                {isOpen &&(
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="cardTransitionBody">
                                        <p>
                                            test test test test test test test test test test test test test test
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeekPredictionPage;



