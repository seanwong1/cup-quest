import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import UserHistoryList from './UserHistoryList.jsx';
import FriendToggle from './FriendToggle.jsx';
import ChatRoom from './ChatRoom.jsx';

import requestHandler from './requestHandler.js';

const UserProfile = (props) => {
  const [isUser, setIsUser] = useState(false);
  const [profile, setProfile] = useState({});
  const { name } = useParams();

  useEffect(() => {
    requestHandler(`/user/${name}`, null, 'get', (response) => {
      setProfile(response.data);
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
          <img className='profile-pic' src="https://cdn-icons-png.flaticon.com/512/847/847970.png?w=900&t=st=1687562010~exp=1687562610~hmac=e4506659b2805b2d2a3fce519290a0bd1ce6987de3562502be555b4b619c0d29" alt=''></img>
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
          <div>
            <FriendToggle id={profile._id} />
            <ChatRoom id={profile._id} />
          </div>
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