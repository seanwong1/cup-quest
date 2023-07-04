/* eslint-disable react/prop-types */
import { Link, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import react, { useState, useEffect } from 'react'
import axios from 'axios';

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";
import Map from './Map/Map.jsx'

import { logout, getCurrentUser } from './firebase/firebaseAuth';

export function Home({ loggedEmail, loggedName, setEmail, setName }) {

  const [currentUser, setCurrentUser] = useState({ email: '', name:'' })

  useEffect(() => {
    async function fetchUser() {
      const user = getCurrentUser();
      const response = await axios.get(`/userLogin/${user.email}`)
      setCurrentUser(response.data);
    }

    if (loggedEmail && loggedName) {
      setCurrentUser({ email: loggedEmail, name: loggedName })
    } else {
      fetchUser();
    }
  }, [])
  // console.log('current user useEffect: ', currentUser)

  const handleLogoutClick = (e) => {
    setEmail(null)
    setName(null)
    setCurrentUser({ })
    logout();
  }

  return (
    <>
      <Typography variant="h3">
        C u p Q u e s t
      </Typography>
      <Typography variant="subtitle1">
        Welcome, {currentUser.name}
      </Typography>
      <Link to='/'>
        <button onClick={handleLogoutClick}>Logout</button>
      </Link>
      <Link to='/user/Sean/friends' state={{ currentUser: currentUser }}>
        <button>Friends</button>
      </Link>
      <Link to={`/user/${currentUser.name}`} state={{ currentUser: currentUser }}>
        <button>User Profile</button>
      </Link>
    </>
  )
}