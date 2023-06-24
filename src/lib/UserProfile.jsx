import React, { useState, useEffect } from 'react';

import UserHistoryList from './UserHistoryList.jsx';

const UserProfile = (props) => {
  const [profile, setProfile] = useState([]);

  // var button = <div></div>

  return (
    // only thing that is different between friend and user
    // profile is that user profile has edit profile button
    // whereas friend profile has add/remove friend button
    // accepts props.isUser and conditionally renders button

    <div className="profile">
      <div className='profile-info'>
        <div className='profile-picture'>
          <img alt=''></img>
        </div>
        <div className='profile-username'></div>
        <div className='profile-biography'></div>
        <div className='profile-button'></div>
      </div>
      <div className='profile-history'>
        <UserHistoryList />
      </div>
    </div>
  )
}

export default UserProfile;