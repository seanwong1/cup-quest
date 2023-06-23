import {Link} from 'react-router-dom';
import React, { useState } from 'react';

export function SplashPage() {
  return (
    <>
    <h1>Splash Page</h1>
    <Link to={{
      pathname: '/home',
    }}>
      <button>Login</button>
    </Link>
    <Link to={{
      pathname: '/newUser',
    }}>
      <button>New User</button>
    </Link>
    <Link to={{
      pathname: '/overview',
    }}>
      <button>Shop Overview</button>
    </Link>
    </>
  )
}