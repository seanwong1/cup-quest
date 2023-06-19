import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function NewUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const newUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  };
  const newPassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  };
  const newEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  };
  const newPhone = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value);
  };

  return (
    <>
      <h1>Create Account</h1>
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
        <div style={{ margin: '0 10px' }}>|</div>
        <Link to='/'>
          <button>Register!</button>
        </Link>
      </div>
    </>
  )
}