/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import FriendElement from './FriendElement.jsx';

import requestHandler from '../lib/requestHandler.js';

const ChatSide = ({ currentUser, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  // TESTING
  const [users, setUsers] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    requestHandler(`/user/${currentUser.name}/friends`, null, 'get', (response) => {
      setFriends(response.data);
    });
  }, [currentUser.name]);

  return (
    <div className='chat-side'>
      <h1>Friends</h1>
        {friends.map((friend) => {
          return (
            <div onClick={() => {
              setCurrentChat(friend.name);
            }}>{friend.name}</div>
          )
        })}
    </div>
  )
}

export default ChatSide;