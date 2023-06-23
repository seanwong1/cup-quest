import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyDX2-zHaA5vUz_dg6ft4bWsvMhWWOfQjm4",
  authDomain: "team-chatterbox-boc.firebaseapp.com",
  projectId: "team-chatterbox-boc",
  storageBucket: "team-chatterbox-boc.appspot.com",
  messagingSenderId: "769383883889",
  appId: "1:769383883889:web:3cb7018be7bbb42f4da7d0",
  measurementId: "G-QT1CQ6NSVQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function SplashPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginEmail = (e) => {
    setEmail(e.target.value);
  };
  const loginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {

      const userInfo = { email, password };
      console.log('userInfo: ', userInfo);
      navigate('/home');
    })
    .catch((err) => {
      setPassword('')
      console.log(err);
    });
  };

  const handleNewUserClick = (e) => {
    e.preventDefault()

    navigate('/newUser')
  }

  return (
    <>
      <h1>Splash Page</h1>
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

        <Link to={{
          pathname: '/overview',
          state: { userId: userId, setUserId: setUserId }
        }}>
          <button>Shop Overview</button>
        </Link>
        <Link to={{
          pathname: '/user',
          state: {userId: userId, setUserId: setUserId}
        }}>
          <button>User</button>
        </Link>
    </>
  )
}