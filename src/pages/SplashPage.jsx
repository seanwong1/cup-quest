import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function SplashPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Password:', password);

    navigate('/home');
  };
  const newUsername = (e) => {
    setUsername(e.target.value);
  };
  const newPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Splash Page</h1>
        <input
          type="text"
          value={username}
          onChange={newUsername}
          placeholder="Name"
        />
        <br />

        <input
          type="text"
          value={password}
          onChange={newPassword}
          placeholder="Password"
        />
        <br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button type="sumbit">Login</button>
          <div style={{ margin: '0 10px' }}>|</div>
          <Link to='/newUser'>
            <button>New User</button>
          </Link>
        </div>
      </form>
    </>
  )
}