import { Link, useLocation } from 'react-router-dom'
import React from 'react';
import { getShopById, staticNotice } from '../devData/staticSiteData.js';
/* eslint-disable react/prop-types */

export const ShopOverview = () => {
  const location = useLocation()
  const shop = getShopById(location.state?.shopId);

  return (
    <div className="page-shell">
      <section className="card detail-card">
        <div className="top-nav">
          <div>
            <p className="eyebrow-copy">Shop overview</p>
            <h1>{shop.name}</h1>
          </div>
          <Link to="/home">
            <button className="ghost-button">Back</button>
          </Link>
        </div>
        <p className="notice-banner">{staticNotice}</p>
        <img src={shop.heroImage} alt={shop.name} className="detail-hero" />
        <p>{shop.summary}</p>
        <div className="info-grid">
          <div className="card inset-card">
            <h2>At a glance</h2>
            <p><strong>Vibe:</strong> {shop.vibe}</p>
            <p><strong>Price:</strong> {shop.price || 'Varies'}</p>
            <p><strong>Phone:</strong> {shop.display_phone || 'Placeholder only'}</p>
            <p><strong>Address:</strong> {shop.location.display_address.join(', ')}</p>
          </div>
          <div className="card inset-card">
            <h2>Hours</h2>
            {shop.hours.map((hours) => (
              <p key={hours}>{hours}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="info-grid">
        <div className="card">
          <h2>Menu pulse</h2>
          {shop.menuRatings.map((entry) => (
            <div key={entry.item} className="list-row">
              <span>{entry.item}</span>
              <span>{entry.rating}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Sample reviews</h2>
          {shop.reviewHighlights.map((review) => (
            <article key={`${review.author}-${review.text}`} className="review-card">
              <div className="shop-row">
                <strong>{review.author}</strong>
                <span className="rating-chip">{review.rating.toFixed(1)}</span>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Signature picks</h2>
        <div className="chip-row">
          {shop.signatureDrinks.map((drink) => (
            <span key={drink} className="feature-chip">{drink}</span>
          ))}
        </div>
      </section>
      <div className="button-row">
        <Link to='/home'>
          <button className="ghost-button">Home</button>
        </Link>
        <Link to='/chat'>
          <button className="primary-button">Open Demo Chat</button>
        </Link>
      </div>
    </div>
  )
}
