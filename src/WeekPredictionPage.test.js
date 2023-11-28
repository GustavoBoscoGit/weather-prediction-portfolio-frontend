import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 

import WeekCardComponent from './WeekPredictionPage';

describe('WeekCardComponent', () => {
  test('renders WeekCardComponent correctly', () => {
    const mockData = {
      dateOfTheDay: '2023-12-01',
      dayTemp: 20,
      dayMaxTemp: 25,
      dayMinTemp: 15,
      windSpeed: '10 km/h',
      humidityPercentage: '80%',
      preciptationPercentage: '50%',
    };

    render(
      <MemoryRouter> {}
        <WeekCardComponent
          dateOfTheDay={mockData.dateOfTheDay}
          dayTemp={mockData.dayTemp}
          dayMaxTemp={mockData.dayMaxTemp}
          dayMinTemp={mockData.dayMinTemp}
          windSpeed={mockData.windSpeed}
          humidityPercentage={mockData.humidityPercentage}
          preciptationPercentage={mockData.preciptationPercentage}
        />
      </MemoryRouter>
    );
  });
});
