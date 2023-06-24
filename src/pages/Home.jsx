import { Link, Routes, Route } from 'react-router-dom'

import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";

import { logout } from './firebase/firebaseAuth';

export function Home() {

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
      <Link to='/user'>
        <button>User Profile</button>
      </Link>
    </>
  )
}