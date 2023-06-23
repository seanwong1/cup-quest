import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NewUser } from "./pages/NewUser";
import { Home } from "./pages/Home";
import { SplashPage } from "./pages/SplashPage";
import { ShopOverview } from "./pages/ShopOverview";

function App() {
  const [userId, setUserId] = useState('649512218eda7c4e347c61bf');
  return (
    <>
      {/* <h2>CupQuest</h2>
      <Link to='/NewUser'>
        <button>New User</button>
      </Link>

      <Link to='/home'>
        <button>Login</button>
      </Link> */}

      {/* <nav>
        <ul>
          <li>
            <Link to="/home">Login</Link>
          </li>
          <li>
            <Link to="/newUser">New User</Link>
          </li>
        </ul>
      </nav> */}

    <Routes>
      <Route path="/" element={<SplashPage userId={userId} setUserId={setUserId}/>} />
      <Route path="/newUser" element={<NewUser userId={userId} setUserId={setUserId}/>}/>
      <Route path="/home" element={<Home userId={userId} setUserId={setUserId}/>}/>
      <Route path="/overview" element={<ShopOverview userId={userId} setUserId={setUserId}/>}/>
    </Routes>
    </>
  )
}

export default App
