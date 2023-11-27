import React from 'react';
import { render, act } from '@testing-library/react';
import { WeatherProvider, useWeather } from './WeatherContext';

const TestComponent = () => {
  const { currentWeather, setCurrentWeather, forecastWeather, setForecastWeather } = useWeather();

  return (
    <div>
      <p data-testid="current-weather">{currentWeather}</p>
      <p data-testid="forecast-weather">{forecastWeather}</p>
      <button onClick={() => setCurrentWeather('Sunny')} data-testid="set-weather-btn">
        Set Weather
      </button>
    </div>
  );
};

test('WeatherProvider provides weather context values', () => {
  let rendered;

  act(() => {
    rendered = render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );
  });

  const { getByTestId } = rendered;

  expect(getByTestId('current-weather').textContent).toBe('');
  expect(getByTestId('forecast-weather').textContent).toBe('');

  act(() => {
    getByTestId('set-weather-btn').click();
  });

  expect(getByTestId('current-weather').textContent).toBe('Sunny');
});
