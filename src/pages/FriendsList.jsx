/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import FriendElement from './FriendElement.jsx';

import requestHandler from '../lib/requestHandler.js';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  // TESTING
  const [users, setUsers] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    requestHandler(`/user/${name}/friends`, null, 'get', (response) => {
      setFriends(response.data);
    });
  }, [name]);

  useEffect(() => {
    requestHandler('/user/all', null, 'get', (response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="friends">
      <h1>Friends</h1>
       {friends.map((friend) => {
          return (
            <FriendElement friend={friend} />
          )
        })}
      <h2>All Users</h2>
      {users.map((user) => {
        return (
          <FriendElement friend={user} />
        )
      })}
    </div>
  )
}

export default FriendsList;