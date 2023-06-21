import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

export function SplashPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const newUsername = (e) => {
    setUsername(e.target.value);
  };
  const newPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, password };
    console.log('userInfo: ', userInfo)

    navigate('/home');
  }

  const handleNewUserClick = (e) => {
    e.preventDefault()

    navigate('/newUser')
  }

  return (
    <>
      <h1>Splash Page</h1>
      <form onSubmit={handleFormSubmit}>
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
    </>
  )
}