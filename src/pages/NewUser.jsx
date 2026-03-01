import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { demoUser } from '../devData/staticSiteData.js';

const logoUrl = `${import.meta.env.BASE_URL}logo-no-background.svg`;

export function NewUser({ setCurrentUser }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert('Passwords do not match!');
      setPassword('');
      setConfirmedPassword('');
      return;
    }

    setCurrentUser({
      ...demoUser,
      name: username || demoUser.name,
      email: email || demoUser.email,
      phone,
      picture: profilePicture ? URL.createObjectURL(profilePicture) : demoUser.picture,
    });

    navigate('/home');
  };

  const newUsername = (e) => {
    setUsername(e.target.value);
  };
  const newPassword = (e) => {
    setPassword(e.target.value);
  };
  const newConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
  };
  const newEmail = (e) => {
    setEmail(e.target.value);
  };
  const newPhone = (e) => {
    setPhone(e.target.value);
  };
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="page-shell narrow-shell">
      <section className="card form-card">
        <img src={logoUrl} alt="CupQuest Logo" className="logo" />
        <h1>Create Demo Account</h1>
        <p className="support-copy">
          This form only seeds local placeholder profile data for the static preview.
        </p>
        <form onSubmit={handleSubmit} className="stacked-form">
          <input
            className="text-input"
            type="text"
            value={username}
            onChange={newUsername}
            placeholder="Username"
          />

          <input
            className="text-input"
            type="password"
            value={password}
            onChange={newPassword}
            placeholder="Password"
          />

          <input
            className="text-input"
            type="password"
            value={confirmedPassword}
            onChange={newConfirmedPassword}
            placeholder="Confirm Password"
          />

          <input
            className="text-input"
            type="text"
            value={email}
            onChange={newEmail}
            placeholder="Email"
          />

          <input
            className="text-input"
            type="text"
            value={phone}
            onChange={newPhone}
            placeholder="Phone Number"
          />

          <div>
            <label htmlFor="profilePictureInput" className="field-label">
              Profile Picture:
            </label>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="text-input"
            />
          </div>

          <div className="button-row">
            <Link to="/">
              <button type="button" className="ghost-button">Cancel</button>
            </Link>
            <button type="submit" className="primary-button">Register</button>
          </div>
        </form>
      </section>
    </div>
  );

}
