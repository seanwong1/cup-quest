import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { createUser } from './firebase/firebaseAuth';
import { saveProfilePicture } from './firebase/firebaseStorage';

export function NewUser() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    if (password !== confirmedPassword) {
      alert('Passwords do not match!');
      e.preventDefault();
      setPassword('');
      setConfirmedPassword('');
      return;
    }
    e.preventDefault();

    createUser(email, password)
      .then((data) => {
        if (profilePicture) {
          saveProfilePicture(email, profilePicture.name, profilePicture)
            .then((picture) => {
              console.log('Profile picture saved successfully', picture);
              axios.post('/register', {
                username,
                email,
                phone,
                picture
              })
                .then((response) => {
                  if (response.status === 200) {
                    navigate('/home');
                  } else {
                    navigate('/');
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log('Error saving profile picture:', err);
            });
        } else {

          // If there is no profile picture, simply make the POST request without the profilePictureUrl
          axios.post('/register', {
            username,
            email,
            phone
          })
            .then((response) => {
              if (response.status === 200) {
                navigate('/home');
              } else {
                navigate('/');
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <input
        type="text"
        value={username}
        onChange={newUsername}
        placeholder="Name"
      />
      <br />

      <input
        type="password"
        value={password}
        onChange={newPassword}
        placeholder="Password"
      />
      <br />

      <input
        type="password"
        value={confirmedPassword}
        onChange={newConfirmedPassword}
        placeholder="Confirm Password"
      />
      <br />

      <input
        type="text"
        value={email}
        onChange={newEmail}
        placeholder="Email"
      />
      <br />

      <input
        type="text"
        value={phone}
        onChange={newPhone}
        placeholder="Phone Number"
      />
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={handleProfilePictureChange}
      />
      <br />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
        <div style={{ margin: '0 10px' }}>|</div>
        <button type="submit">Register!</button>
      </div>
    </form>
  );
}