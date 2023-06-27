import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

import { SplashPage } from './pages/SplashPage';
import { NewUser } from './pages/NewUser';

describe('SplashPage Component', () => {
  test('renders the logo', () => {
    render(
      <MemoryRouter>
        <SplashPage />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('CupQuest Logo');
    expect(logo).toBeInTheDocument();
  });
});

describe('NewUser Component', () => {
  test('renders the logo', () => {
    render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('CupQuest Logo');
    expect(logo).toBeInTheDocument();
  });
});