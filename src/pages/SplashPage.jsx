import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import { signIn } from './firebase/firebaseAuth'

export function SplashPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
        navigate('/home', {state: {email: email, name: name}});
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

  return (
    <>
      <img src="../logo-no-background.svg" alt="CupQuest Logo" className="logo" />
      <div className="container-splash">
        <form onSubmit={handleLoginFormSubmit}>
          <input
            type="text"
            value={email}
            onChange={loginEmail}
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            value={password}
            onChange={loginPassword}
            placeholder="Password"
          />
          <br />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="submit" value="Login" />
            <div style={{ margin: '0 10px' }}>|</div>

            <Link to={{
              pathname: '/newUser',
              state: { userId: userId, setUserId: setUserId }
            }}>
              <button onClick={handleNewUserClick}>New User</button>
            </Link>
          </div>
        </form>
      </div>
        <br />
        <Link to={{
          pathname: '/overview',
          state: { userId: userId, setUserId: setUserId }
        }}>
          <button>Shop Overview</button>
        </Link>
        <Link to={{
          pathname: '/user',
          state: {email: email}
        }}>
          <button>User</button>
        </Link>
    </>
  )
}