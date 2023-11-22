import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import WeekPredictionPage from './WeekPredictionPage';
import { WeatherProvider } from './WeatherContext';


const PageNotFound = () => {
  return <h1>404 - Página não encontrada</h1>;
};

const App = () => {
  return (
    <WeatherProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/semana" element={<WeekPredictionPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </WeatherProvider>
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