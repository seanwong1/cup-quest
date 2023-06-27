import React, { useState, useEffect } from 'react';

import UserHistoryElement from './UserHistoryElement.jsx';

import getHandler from './getHandler.js';

const UserHistoryList = (props) => {
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    // getHandler(props.userID)
    // pass in userID to get all user history
  });

  return (
    <div className='history-list'>
            <h3>No History Yet...</h3>
      {userHistory.map((historyElement) => {
        <UserHistoryElement historyElement={historyElement} />
      })}
    </div>
  );
};

export default UserHistoryList;