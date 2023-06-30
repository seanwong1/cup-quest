import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NewUser } from "./pages/NewUser";
import { Home } from "./pages/Home";
import { SplashPage } from "./pages/SplashPage";
import { ShopOverview } from "./pages/ShopOverview";
import UserProfile from "./lib/UserProfile.jsx";
import FriendsList from "./pages/FriendsList.jsx";


function App() {
  const [userId, setUserId] = useState('649512218eda7c4e347c61bf');



  // window.onload = function () {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }
  //   );
  // }



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
        <Route path="/" element={<SplashPage />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<ShopOverview userId={userId} setUserId={setUserId} />} />
        <Route path="/user/:name" element={<UserProfile isUser={true} />} />
        <Route path="/user/:name/friends" element={<FriendsList />} />
      </Routes>
    </>
  )
}

export default App;