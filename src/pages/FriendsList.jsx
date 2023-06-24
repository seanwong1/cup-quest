import React, { useState, useEffect } from 'react';
import FriendElement from './FriendElement.jsx';

import getHandler from '../lib/getHandler.js';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // use getHandler to get user friends
    // getHandler('/users', PARAMETERS, (response) => {
      // setFriends
    // });
  }, [friends]);

  return (
    <div className="friends">
      <h1>Friends</h1>
       {friends.map((friend) => {
          <FriendElement friend={friend} />
        })}
    </div>
  )
}

export default FriendsList;