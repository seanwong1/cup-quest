import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('updates the email state when email input changes', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SplashPage />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText('Email');

    fireEvent.change(emailInput, { target: { value: 'testEmail@test.com' } });
    expect(emailInput.value).toBe('testEmail@test.com');
  });

  it('updates the password state when password input changes', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SplashPage />
      </MemoryRouter>
    );

    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    expect(passwordInput.value).toBe('testPassword');
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

  it('should update the username when changed', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );
    const usernameInput = getByPlaceholderText('Username');

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });

    expect(usernameInput.value).toBe('testUser');
  });

  it('should update the password when changed', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    expect(passwordInput.value).toBe('testPassword');
  });

  // Similar tests for email, phone, confirmedPassword...

  it('should update the profile picture file when a file is selected', async () => {
    const { findByLabelText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );
    const fileInput = await findByLabelText('Profile Picture:');

    const file = new File(['Meow'], 'Kittens.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(fileInput.files[0]).toBe(file);
    expect(fileInput.files).toHaveLength(1);
  });
});
