import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import lightDarkToggle from '../lib/lightDarkToggle.js';

import { signIn } from './firebase/firebaseAuth';

export function SplashPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState(false);

  const loginEmail = (e) => {
    setEmail(e.target.value);
  };
  const loginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((data) => {
        navigate('/home');
      })
      .catch((err) => {
        setPassword('');
        console.log(err);
      });
  };

  const handleNewUserClick = (e) => {
    e.preventDefault()
    navigate('/newUser')
  }

  useEffect(() => {
    lightDarkToggle(theme);
  }, [theme]);

  return (
    <>
      <div className="splash-center">
        <img src="../logo-no-background.svg" alt="CupQuest Logo" className="logo" onClick={() => {setTheme(!theme)}} />
        <div className="splash-container">
          <form onSubmit={handleLoginFormSubmit} className="splash-form">
            <input className="splash-input-fields"
              type="text"
              value={email}
              onChange={loginEmail}
              placeholder="Email"
            />
            <br />

            <input className="splash-input-fields"
              type="password"
              value={password}
              onChange={loginPassword}
              placeholder="Password"
            />
            <br />

            <div className="splash-buttons-container">
              <input type="submit" value="Login" className="splash-button" />
              <div style={{ margin: '0 10px' }}>|</div>

              <Link to={{
                pathname: '/newUser',
                state: { userId: userId, setUserId: setUserId }
              }}>
                <button onClick={handleNewUserClick} className="splash-button" >New User</button>
              </Link>
            </div>
          </form>
        </div>
        <br />
        <Link to={{
          pathname: '/home',
          state: { userId: userId, setUserId: setUserId }
        }}>
          <button>Home</button>
        </Link>
        <Link to={{
          pathname: '/overview',
          state: { userId: userId, setUserId: setUserId }
        }}>
          <button>Shop Overview</button>
        </Link>
        <Link to={{
          pathname: `/user/${email}`,
          state: { email: email, setEmail: setEmail }
        }}>
          <button>User</button>
        </Link>
      </div>
    </>
  )
}