import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';

test('renders WeatherWidget with weather data', () => {
  const mockWeatherData = {
    temperature: 25,
    maxTemperature: 30,
    minTemperature: 20,
    humidity: 60,
    windSpeed: 10,
    precipitation: '10%',
  };

  render(<WeatherWidget currentWeather={mockWeatherData} />);

  const temperatureElement = screen.getByText('25');
  const maxTemperatureElement = screen.getByText('Max: 30°');
  const minTemperatureElement = screen.getByText('Min: 20°');
  const humidityElement = screen.getByText('60%');
  const windSpeedElement = screen.getByText('10km/h');
  const precipitationElement = screen.getByText('10%');

  expect(temperatureElement).toBeInTheDocument();
  expect(maxTemperatureElement).toBeInTheDocument();
  expect(minTemperatureElement).toBeInTheDocument();
  expect(humidityElement).toBeInTheDocument();
  expect(windSpeedElement).toBeInTheDocument();
  expect(precipitationElement).toBeInTheDocument();
});
