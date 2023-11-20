import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import WeekPredictionPage from './WeekPredictionPage';

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('#searchButton');
  const searchInput = document.querySelector('#searchInput');

  console.log('Botão:', searchButton);
  console.log('Input:', searchInput);

  // Restante do código...
});


// Restante do código...


// document.addEventListener('DOMContentLoaded', () => {
//   const search = document.querySelector('#searchButton');

//   if (search) {
//     search.addEventListener('click', () => {
//       const APIKey = '52d00d043b05a31a967aaad360a28c91';
//       const city = document.querySelector('#searchInput').value;

//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {
//           const description = document.querySelector('.climaDia');
//           const dayTemperature = document.querySelector('.temperaturaDiaWidget');
//           const dayMaxTemperature = document.querySelector('.maxTemperature');
//           const dayMinTemperature = document.querySelector('.minTemperature');
//           const humidity = document.querySelector('.humidadePorcentagem');
//           const windSpeed = document.querySelector('.ventoValor');

//           dayTemperature.innerHTML = `${parseInt(json.main.temp)}`;
//           description.innerHTML = `${json.weather[0].description}`;
//           humidity.innerHTML = `${json.main.humidity}`;
//           windSpeed.innerHTML = `${parseInt(json.wind.speed)}`;
//           dayMaxTemperature.innerHTML = `${parseInt(json.main.temp_max)}`;
//           dayMinTemperature.innerHTML = `${parseInt(json.main.temp_min)}`;
//         });
//     });
//   } else {
//     console.error('Botão de pesquisa não encontrado.');
//   }
// });


const PageNotFound = () => {
  return <h1>404 - Página não encontrada</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/semana" element={<WeekPredictionPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();