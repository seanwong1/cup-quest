import React, { useState, useEffect } from 'react';

const UserProfile = (props) => {
  const [profile, setProfile] = useState([]);

  var button = <div></div>

  return (
    // only thing that is different between friend and user
    // profile is that user profile has edit profile button
    // whereas friend profile has add/remove friend button
    // accepts props.isUser and conditionally renders button

    <div className="profile">
      <div className='profile-info'>

      </div>
      <div className='profile-history'>

      </div>
    </div>
  )
}

export default UserProfile;