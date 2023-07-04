/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    if (text !== '') {
      const timeStamp = Date.now();
      e.preventDefault();
      socket.emit('send_message', { text, timeStamp });
      setText('');
    }
  }

  return (
    <div className='chat-footer'>
      <form className='chat-message-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Type message...'
          className='message'
          value={text}
          onChange={ (e) => setText(e.target.value) } />
        <button className='chat-message-send-button'>Send</button>
      </form>
    </div>
  )
}

export default ChatFooter;