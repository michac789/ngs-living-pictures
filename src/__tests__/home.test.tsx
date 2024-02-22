import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';

test('Home page test', async () => {
  render(
    <HelmetProvider context={{}}>
      <Home />
    </HelmetProvider>
  );
  const messageElement = screen.getByText('Living Pictures');
  expect(messageElement).toBeInTheDocument();
});

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
  Helmet: () => jest.fn(),
  HelmetDispatcher: () => jest.fn(),
  HelmetProvider: () => jest.fn(),
}));
