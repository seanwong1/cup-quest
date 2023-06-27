import React, { useState, useEffect } from 'react';

import requestHandler from './requestHandler.js';

const FriendToggle = (props) => {
  // TODO: ADD STATE TO CHANGE BUTTON TO ADD OR REMOVE FRIEND
  return (
    <button className='add-remove-friend-button' onClick={() => {
      requestHandler('/user/Sean', {_id: props.id}, 'put', (response) => {
        console.log(response);
      });
    }}>Add Friend</button>
  );
};

export default FriendToggle;