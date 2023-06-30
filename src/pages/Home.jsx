import { Link, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import UserProfile from "../lib/UserProfile.jsx";
import FriendsList from "./FriendsList.jsx";
import { logout } from './firebase/firebaseAuth';
import { Map } from './Map/Map'

export function Home() {
  const handleLogoutClick = (e) => {
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
      <Link to='/user'>
        <button>User Profile</button>
      </Link>
      <Map />
    </>
  )
}