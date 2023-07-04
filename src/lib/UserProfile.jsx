import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import UserHistoryList from './UserHistoryList.jsx';
import FriendToggle from './FriendToggle.jsx';

import requestHandler from './requestHandler.js';

const UserProfile = (props) => {
  const [isUser, setIsUser] = useState(false);
  const [profile, setProfile] = useState({});
  const { name } = useParams();
  console.log('this name', name)

  useEffect(() => {
    requestHandler(`/user/:${name}`, null, 'get', (response) => {
      setProfile(response.data);
      console.log(response.data)
    });
  }, [name]);

  return (
    // only thing that is different between friend and user
    // profile is that user profile has edit profile button
    // whereas friend profile has add/remove friend button
    // accepts props.isUser and conditionally renders button
    <div className="profile">
      <img src="../logo-no-background.svg" alt="CupQuest Logo" className="profile-logo" ></img>
      <div className='profile-info'>
        <div className='profile-picture'>
          <img className='profile-pic' src={profile.picture} alt=''></img>
        </div>
        <div className="profile-text">
          <div className='profile-username'><h4>{profile.name}</h4></div>
          <div className='profile-biography'><p>I love coffee so much</p></div>
        </div>
      </div>
      <div className="buttons">
        <Link to={{
          pathname: `/user/${profile.name}/friends`,
        }}>
          <button className="friends-button" >Friends</button>
        </Link>
        {isUser ? <div className='edit-button' onClick={() => {console.log('hi')}}>Edit User</div> :
          <FriendToggle name={profile.name} />
        }
      </div>
      <div className='profile-history'>
      <div><h4>User History</h4></div>
        <UserHistoryList />
      </div>
    </div>
  )
}

export default UserProfile;