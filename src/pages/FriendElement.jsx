/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import ProfileLink from '../lib/ProfileLink.jsx';

const FriendElement = ({ friend }) => {

  return (
    <div className="friend">
      <div className="friend-profile-pic"></div>
      <ProfileLink name={friend.name} />
    </div>
  )
}

export default FriendElement;