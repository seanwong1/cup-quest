/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { activityByUser, getFriendsForUser, getProfileByName, shops, staticNotice } from '../devData/staticSiteData.js';

const UserProfile = ({ currentUser }) => {
  const { name } = useParams();
  const profile = getProfileByName(name);
  const isUser = profile.name === currentUser.name;
  const recentActivity = activityByUser[profile.name] ?? activityByUser[currentUser.name] ?? [];
  const suggestedShops = shops.slice(0, 3);
  const friends = getFriendsForUser(profile.name);

  return (
    <div className="page-shell narrow-shell">
      <section className="card">
        <div className="top-nav">
          <div>
            <p className="eyebrow-copy">{isUser ? 'Your profile' : 'Demo profile'}</p>
            <h1>{profile.name}</h1>
          </div>
          <Link to="/home">
            <button className="ghost-button">Back</button>
          </Link>
        </div>
        <p className="notice-banner">{staticNotice}</p>
        <div className="profile-header">
          <img className='profile-pic' src={profile.picture} alt={profile.name} />
          <div>
            <p>{profile.bio}</p>
            <p className="support-copy">{profile.city}</p>
            <p><strong>Favorite order:</strong> {profile.favoriteOrder}</p>
          </div>
        </div>
        <div className="chip-row">
          {profile.badges.map((badge) => (
            <span key={badge} className="feature-chip">{badge}</span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Recent activity</h2>
        {recentActivity.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="card">
        <h2>Friends</h2>
        {friends.map((friend) => (
          <div key={friend.id} className="list-row">
            <Link to={`/user/${friend.name}`}>{friend.name}</Link>
            <span>{friend.favoriteOrder}</span>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Suggested shops</h2>
        {suggestedShops.map((shop) => (
          <div key={shop.id} className="list-row">
            <span>{shop.name}</span>
            <Link to="/overview" state={{ shopId: shop.id }}>Open</Link>
          </div>
        ))}
      </section>

      <div className="button-row">
        <Link to='/home'>
          <button className="ghost-button">Home</button>
        </Link>
        <Link to={`/user/${profile.name}/friends`}>
          <button className="ghost-button">Friend List</button>
        </Link>
        <Link to='/chat'>
          <button className="primary-button">Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default UserProfile;
