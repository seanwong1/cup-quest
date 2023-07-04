/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ChatMessage = ({ message }) => {
  console.log(message);
  return (
    <div className='chat-message'>
      <div className='chat-message-username'></div>
      <div className='chat-message-message'>{message.text}</div>
      <div className='chat-message-timestamp'>{message.timeStamp}</div>
    </div>
  )
}

export default ChatMessage;