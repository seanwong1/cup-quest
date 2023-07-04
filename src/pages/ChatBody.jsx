/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ChatMessage from './ChatMessage.jsx';

const ChatBody = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  socket.on('receive_message', (data) => {
    setMessages([...messages, data]);
  });

  return (
    <div className='chat-body'>
      {messages.map((message) => {
        return (
          <ChatMessage message={message} />
        )
      })}
    </div>
  )
}

export default ChatBody;