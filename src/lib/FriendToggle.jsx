/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import requestHandler from './requestHandler.js';

const FriendToggle = (props) => {
  // TODO: ADD STATE TO CHANGE BUTTON TO ADD OR REMOVE FRIEND
  return (
    <div>
      <button className='add-remove-friend-button' onClick={() => {
      requestHandler('/user/Sean', {_id: props.id, state: 1}, 'put', (response) => {
        console.log(response);
      });
    }}>Add Friend</button>
    <button className='add-remove-friend-button' onClick={() => {
      requestHandler('/user/Sean', {_id: props.id, state: 0}, 'put', (response) => {
        console.log(response);
      });
    }}>Remove Friend</button>
    </div>
  );
};

export default FriendToggle;