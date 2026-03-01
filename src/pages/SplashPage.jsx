/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { demoUser, staticNotice } from '../devData/staticSiteData.js';

const logoUrl = `${import.meta.env.BASE_URL}logo-no-background.svg`;

export function SplashPage({ setCurrentUser }) {
  const navigate = useNavigate();

  const slogans = [
    "Your guide to caffeine happiness",
    "Discover a brew near you",
    "Finding your perfect cup, one shop at a time",
    "Uncover the best brews in town",
    "Savor the flavor of local coffee spots",
    "Coffee shops found in a snap",
    "One stop for the top coffee spots",
    "Tailoring your coffee trail",
    "Navigate the coffee landscape with ease",
    "Turning coffee dreams into reality",
    "Finding your coffee haven, one tap at a time",
    "Coffee discovery, simplified",
    "Where every search leads to a great cup",
    "Meet your matcha... and latte, and more",
    "Roam the city, sip the best",
    "Craft your coffee experience",
    "Explore. Sip. Enjoy",
    "Your companion in coffee exploration",
    "Find the buzz you'll love"
  ];

  const [randomSlogan, setRandomSlogan] = useState('');
  const [email, setEmail] = useState(demoUser.email);
  const [password, setPassword] = useState('');

  const loginEmail = (e) => {
    setEmail(e.target.value);
  };
  const loginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    setCurrentUser({
      ...demoUser,
      email: email || demoUser.email,
    });
    navigate('/home');
  };

  const handleNewUserClick = (e) => {
    e.preventDefault()
    navigate('/newUser')
  }

  useEffect(() => {
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    setRandomSlogan(slogan);
  }, [])

  return (
    <div className="page-shell splash-shell">
      <section className="hero-panel">
        <div className="eyebrow-row">
          <span className="eyebrow-pill">Static Demo</span>
          <span className="eyebrow-copy">{staticNotice}</span>
        </div>
        <img src={logoUrl} alt="CupQuest Logo" className="logo" />
        <h1>CupQuest</h1>
        <p className="hero-copy">{randomSlogan}</p>
        <p className="support-copy">
          This deploy-friendly version keeps the coffee discovery flow intact using local placeholder content only.
        </p>
        <form onSubmit={handleLoginFormSubmit} className="card form-card">
          <label className="field-label" htmlFor="email">Demo email</label>
          <input
            id="email"
            className="text-input"
            type="text"
            value={email}
            onChange={loginEmail}
            placeholder="Email"
          />
          <label className="field-label" htmlFor="password">Password</label>
          <input
            id="password"
            className="text-input"
            type="password"
            value={password}
            onChange={loginPassword}
            placeholder="Password"
          />
          <div className="button-row">
            <button type="submit" className="primary-button">Enter Demo</button>
            <Link to="/newUser">
              <button onClick={handleNewUserClick} type="button" className="ghost-button">New User</button>
            </Link>
          </div>
        </form>
      </section>

      <section className="card info-card">
        <h2>What stays in this static cut</h2>
        <ul className="feature-list">
          <li>Curated coffee shop list and detail pages</li>
          <li>Sample reviews, friends, and chat threads</li>
          <li>Hash-based routing that works on GitHub Pages</li>
        </ul>
        <h2>What is intentionally mocked</h2>
        <ul className="feature-list">
          <li>Firebase sign-in and account creation</li>
          <li>Maps, Yelp, MongoDB, and Socket.IO calls</li>
          <li>Any persistent writes such as reactions or reviews</li>
        </ul>
      </section>
    </div>
  )
}
