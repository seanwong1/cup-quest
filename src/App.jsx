import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

function App() {

  return (
    <>
      <h2>George has cleaned the files</h2>
      <Link to='/home'>
        <button>Login</button>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
