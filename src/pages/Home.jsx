import { Link } from 'react-router-dom'

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
    </>
  )
}