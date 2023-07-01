/* eslint-disable react/prop-types */
import { Link, Routes, Route } from 'react-router-dom'
import react, { useState, useEffect } from 'react'

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";

import { logout, getCurrentUser } from './firebase/firebaseAuth';
import { Map } from './Map'

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
      <h1>Welcome!</h1>
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