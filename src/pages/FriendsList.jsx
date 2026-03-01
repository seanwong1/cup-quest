import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { getFriendsForUser, getProfileByName, profiles, staticNotice } from '../devData/staticSiteData.js';

const FriendsList = () => {
  const { name } = useParams();
  const currentProfile = getProfileByName(name);
  const friends = getFriendsForUser(name);

  return (
    <div className="page-shell narrow-shell">
      <section className="card">
        <div className="top-nav">
          <div>
            <p className="eyebrow-copy">Friends</p>
            <h1>{currentProfile.name}</h1>
          </div>
          <Link to={`/user/${currentProfile.name}`}>
            <button className="ghost-button">Back</button>
          </Link>
        </div>
        <p className="notice-banner">{staticNotice}</p>
        <h2>Connected profiles</h2>
        {friends.map((friend) => (
          <article key={friend.id} className="friend-card">
            <img className="friend-avatar" src={friend.picture} alt={friend.name} />
            <div>
              <Link to={`/user/${friend.name}`}><strong>{friend.name}</strong></Link>
              <p>{friend.bio}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>All demo users</h2>
        {profiles.map((profile) => (
          <div key={profile.id} className="list-row">
            <Link to={`/user/${profile.name}`}>{profile.name}</Link>
            <span>{profile.favoriteOrder}</span>
          </div>
        ))}
      </section>

      <div className="button-row">
        <Link to='/home'>
          <button className="ghost-button">Home</button>
        </Link>
        <Link to='/chat'>
          <button className="primary-button">Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default FriendsList;
