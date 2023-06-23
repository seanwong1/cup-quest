import React, { useState, useEffect } from 'react';

const FriendElement = (props) => {
  const [friend, setFriend] = useState([]);

  return (
    // TODO: onClick function to send user to friends profile
    <div className="friend">
      <div className="friend-profile-pic"></div>
      <div className="friend-name"></div>
    </div>
  )
}

export default FriendElement;