import { useLocation, Link, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";

import { logout } from './firebase/firebaseAuth';
import {Map} from './Map'
export function Home() {
  const location = useLocation();
  const State = location.state;

  const handleLogoutClick = (e) => {
    logout();
  }

  return (
    <>
      <h1>Home!</h1>
      <Link to='/'>
        <button onClick={handleLogoutClick}>Logout</button>
      </Link>
      <Link to='/friends'>
        <button>Friends</button>
      </Link>
      <Link to={{
        pathname: `/user/${State.email}`,
        state: {name: State.name}
        }}>
        <button>User Profile</button>
      </Link>
    </>
  )
}