import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NewUser } from "./pages/NewUser";
import { Home } from "./pages/Home";
import { SplashPage } from "./pages/SplashPage";
import { ShopOverview } from "./pages/ShopOverview";
import ChatMain from "./pages/ChatMain.jsx";
import UserProfile from "./lib/UserProfile.jsx";
import FriendsList from "./pages/FriendsList.jsx";
import { demoUser } from './devData/staticSiteData.js';

function App() {
  const [currentUser, setCurrentUser] = useState(demoUser);

  return (
    <Routes>
      <Route path="/" element={<SplashPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/newUser" element={<NewUser setCurrentUser={setCurrentUser} />} />
      <Route path="/home" element={<Home currentUser={currentUser} />} />
      <Route path="/overview" element={<ShopOverview currentUser={currentUser} />} />
      <Route path="/user/:name" element={<UserProfile currentUser={currentUser} />} />
      <Route path="/user/:name/friends" element={<FriendsList currentUser={currentUser} />} />
      <Route path="/chat" element={<ChatMain currentUser={currentUser} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App;
