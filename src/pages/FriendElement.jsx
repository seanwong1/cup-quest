import React, { useState, useEffect } from 'react';

import ProfileLink from '../lib/ProfileLink.jsx';

const FriendElement = ({ friend }) => {

  return (
    // TODO: onClick function to send user to friends profile

    <div className="friend">
      <div className="friend-profile-pic"></div>
      <ProfileLink name={friend.name} />
    </div>
  )
}



export default FriendElement;