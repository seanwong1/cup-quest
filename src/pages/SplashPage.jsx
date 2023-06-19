import {Link} from 'react-router-dom'

export function SplashPage() {
  return (
    <>
    <h1>Splash Page</h1>
    <Link to='/home'>
      <button>Login</button>
    </Link>
    <Link to='/newUser'>
      <button>New User</button>
    </Link>
    </>
  )
}