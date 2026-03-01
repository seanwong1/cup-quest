/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { conversations, getFriendsForUser, staticNotice } from '../devData/staticSiteData.js';

const ChatMain = ({ currentUser }) => {
  const friends = getFriendsForUser(currentUser.name);
  const [currentChat, setCurrentChat] = useState(friends[0]?.name ?? '');
  const [messages, setMessages] = useState(conversations);
  const [draft, setDraft] = useState('');

  const activeMessages = messages[currentChat] ?? [];

  const handleSend = (event) => {
    event.preventDefault();
    if (!draft.trim() || !currentChat) {
      return;
    }

    setMessages((existing) => ({
      ...existing,
      [currentChat]: [
        ...(existing[currentChat] ?? []),
        {
          sender: currentUser.name,
          body: draft.trim(),
          time: 'Now',
        },
      ],
    }));
    setDraft('');
  };

  return (
    <div className="page-shell">
      <section className="card">
        <div className="top-nav">
          <div>
            <p className="eyebrow-copy">Chat</p>
            <h1>Placeholder conversations</h1>
          </div>
          <Link to="/home">
            <button className="ghost-button">Back</button>
          </Link>
        </div>
        <p className="notice-banner">{staticNotice}</p>
      </section>

      <section className="chat-layout">
        <aside className="card">
          <h2>Friends</h2>
          {friends.map((friend) => (
            <button
              key={friend.id}
              className={`chat-friend${currentChat === friend.name ? ' chat-friend-active' : ''}`}
              onClick={() => setCurrentChat(friend.name)}
            >
              {friend.name}
            </button>
          ))}
        </aside>

        <div className="card">
          <h2>{currentChat || 'Select a friend'}</h2>
          <div className="message-list">
            {activeMessages.map((message, index) => (
              <article key={`${message.sender}-${message.time}-${index}`} className="message-card">
                <div className="shop-row">
                  <strong>{message.sender}</strong>
                  <span className="support-copy">{message.time}</span>
                </div>
                <p>{message.body}</p>
              </article>
            ))}
          </div>
          <form className="button-row" onSubmit={handleSend}>
            <input
              className="text-input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type a local-only message"
            />
            <button type="submit" className="primary-button">Send</button>
          </form>
        </div>
      </section>

      <div className="button-row">
        <Link to='/home'>
          <button className="ghost-button">Home</button>
        </Link>
        <Link to={`/user/${currentUser.name}`}>
          <button className="ghost-button">Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default ChatMain;
