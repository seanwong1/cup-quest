/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ChatSide from './ChatSide.jsx';
import ChatBody from './ChatBody.jsx';
import ChatFooter from './ChatFooter.jsx';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

const ChatMain = (props) => {
  console.log(props);
  return (
    <div className='chat'>
      <ChatSide socket={socket} />
      <div className='chat-main'>
        <ChatBody socket={socket} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  )
}

export default ChatMain;