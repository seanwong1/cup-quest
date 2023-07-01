/* eslint-disable react/prop-types */
import { Link, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import react, { useState, useEffect } from 'react'

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";
import { logout } from './firebase/firebaseAuth';
import Map from './Map/Map.jsx'

export function Home() {

import { logout, getCurrentUser } from './firebase/firebaseAuth';

export function Home({ loggedEmail, loggedName, setEmail, setName }) {
  const [currentUser, setCurrentUser] = useState({ email: '', name:'' })

  useEffect(() => {
    async function fetchUser() {
      const user = getCurrentUser();
      await setCurrentUser(user.email);
    }

    if (loggedEmail || loggedName) {
      setCurrentUser({ email: loggedEmail, name: loggedName })
    } else {
      fetchUser();
    }
  }, [])
  console.log('current user useEffect: ', currentUser)

  const handleLogoutClick = (e) => {
    setEmail(null)
    setName(null)
    setCurrentUser({ })
    logout();
  }

  return (
    <>
      {/* <h1>Home</h1> */}
      <Typography variant="h3">
        C u p Q u e s t
      </Typography>
      <Link to='/'>
        <button onClick={handleLogoutClick}>Logout</button>
      </Link>
      <Link to='/user/Sean/friends'>
        <button>Friends</button>
      </Link>
      <Link to='/user' state={{ currentUser: currentUser }}>
        <button>User Profile</button>
      </Link>
      <Map />
    </>
  )
}