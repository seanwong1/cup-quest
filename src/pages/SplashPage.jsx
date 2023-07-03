/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleSignIn from './firebase/googleSignIn';
import Typography from '@mui/material/Typography';

import lightDarkToggle from '../lib/lightDarkToggle.js';

import { signIn } from './firebase/firebaseAuth';

export function SplashPage({ email, setEmail, setName }) {

  const navigate = useNavigate();

  const slogans = [
    "Your guide to caffeine happiness",
    "Discover a brew near you",
    "Finding your perfect cup, one shop at a time",
    "Uncover the best brews in town",
    "Savor the flavor of local coffee spots",
    "Coffee shops found in a snap",
    "One stop for the top coffee spots",
    "Tailoring your coffee trail",
    "Navigate the coffee landscape with ease",
    "Turning coffee dreams into reality",
    "Finding your coffee haven, one tap at a time",
    "Coffee discovery, simplified",
    "Where every search leads to a great cup",
    "Meet your matcha... and latte, espresso, and more",
    "Roam the city, sip the best",
    "Craft your coffee experience",
    "Explore. Sip. Enjoy",
    "Your companion in coffee exploration",
    "Find the buzz you'll love"
  ];

  const [randomSlogan, setRandomSlogan] = useState('');
  const [userId, setUserId] = useState(0);
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

  useEffect(() => {
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    setRandomSlogan(slogan);
  })

  return (
    <>
      <div className="splash-center">
        <img src="../logo-no-background.svg" alt="CupQuest Logo" className="logo" onClick={() => { setTheme(!theme) }} />
        <br />
        <Typography variant="subtitle1">
          {randomSlogan}
        </Typography>
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
        <GoogleSignIn setEmail={setEmail} setName={setName} />
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
          pathname: '/user',
          state: { userId: userId, setUserId: setUserId }
        }}>
          <button>User</button>
        </Link>
      </div>
    </>
  )
}