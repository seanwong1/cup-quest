/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Map from './Map/Map.jsx'
import { staticNotice } from '../devData/staticSiteData.js';

export function Home({ currentUser }) {

  return (
    <div className="page-shell">
      <section className="card hero-card">
        <div className="top-nav">
          <div>
            <p className="eyebrow-copy">Welcome back</p>
            <h1>{currentUser.name}</h1>
          </div>
          <Link to="/">
            <button className="ghost-button">Exit Demo</button>
          </Link>
        </div>
        <p className="support-copy">
          {currentUser.bio}
        </p>
        <p className="notice-banner">{staticNotice}</p>
        <div className="button-row">
          <Link to={`/user/${currentUser.name}`}>
            <button className="primary-button">Profile</button>
          </Link>
          <Link to={`/user/${currentUser.name}/friends`}>
            <button className="ghost-button">Friends</button>
          </Link>
          <Link to="/chat">
            <button className="ghost-button">Chat</button>
          </Link>
        </div>
      </section>
      <Map />
    </div>
  )
}
