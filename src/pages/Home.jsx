import { Link, Routes, Route } from 'react-router-dom'
import react, { useState, useEffect } from 'react'

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";

import { logout, getCurrentUser } from './firebase/firebaseAuth';
import { Map } from './Map'

export function Home() {
  const [currentUser, setCurrentUser] = useState({ email: '' })

  useEffect(() => {
    async function fetchUser() {
      const user = getCurrentUser();
      await setCurrentUser({ email: user.email });
    }
    fetchUser();
  }, [])
  console.log('current user useEffect: ', currentUser)

  const handleLogoutClick = (e) => {
    logout();
  }

  return (
    <>
      <h1>Home!</h1>
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