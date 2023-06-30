import React from 'react';
import App from './App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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

  it('navigates to /newUser when handleNewUserClick is called', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/initialRoute']}>
        <Routes>
          <Route path="/initialRoute" element={<SplashPage />} />
          <Route path="/newUser" element={<span>New User Page</span>} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(getByText(/New User/i));
    expect(getByText('New User Page')).toBeInTheDocument();
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

  it('updates the confirmed password state when confirmed password input changes', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );

    const confirmedPasswordInput = getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmedPasswordInput, { target: { value: 'testConfirmedPassword' } });

    expect(confirmedPasswordInput.value).toBe('testConfirmedPassword');
  });

  it('updates the email state when email input changes', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );

    const emailInput = getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'testEmail@test.com' } });

    expect(emailInput.value).toBe('testEmail@test.com');
  });

  it('updates the phone state when phone input changes', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <NewUser />
      </MemoryRouter>
    );

    const phoneInput = getByPlaceholderText('Phone Number');
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    expect(phoneInput.value).toBe('1234567890');
  });
});
