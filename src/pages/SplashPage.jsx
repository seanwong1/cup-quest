import {Link} from 'react-router-dom';
import React, { useState } from 'react';

export function SplashPage() {
  const [userId, setUserId] = useState(0);
  return (
    <>
    <h1>Splash Page</h1>
    <Link to={{
      pathname: '/home',
      state: {userId: userId, setUserId: setUserId}
    }}>
      <button>Login</button>
    </Link>
    <Link to={{
      pathname: '/newUser',
      state: {userId: userId, setUserId: setUserId}
    }}>
      <button>New User</button>
    </Link>
    <Link to={{
      pathname: '/overview',
      state: {userId: userId, setUserId: setUserId}
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