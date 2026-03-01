import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shops } from '../../devData/staticSiteData.js';

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShopId, setSelectedShopId] = useState(shops[0]?.id ?? null);

  const handleAddressChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const visibleShops = !searchQuery.trim()
    ? shops
    : shops.filter((shop) =>
        `${shop.name} ${shop.location.city} ${shop.vibe} ${shop.features.join(' ')}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

  return (
    <section className="map-shell">
      <div className="card">
        <h2>Curated Coffee Stops</h2>
        <p className="support-copy">
          Search is local-only in this deployable demo. It filters the placeholder shop list rather than calling maps or Yelp.
        </p>
        <input
          className="text-input"
          type="text"
          value={searchQuery}
          onChange={handleAddressChange}
          placeholder="Show me coffee shops in..."
        />
      </div>

      <div className="shop-grid">
        {visibleShops.map((shop) => (
          <article
            key={shop.id}
            className={`card shop-card${selectedShopId === shop.id ? ' shop-card-selected' : ''}`}
          >
            <img className="shop-image" src={shop.heroImage} alt={shop.name} />
            <div className="shop-copy">
              <div className="shop-row">
                <h3>{shop.name}</h3>
                <span className="rating-chip">{shop.rating.toFixed(1)} / 5</span>
              </div>
              <p>{shop.summary}</p>
              <p className="support-copy">
                {shop.location.display_address.join(', ')}
              </p>
              <div className="chip-row">
                {shop.features.map((feature) => (
                  <span key={feature} className="feature-chip">{feature}</span>
                ))}
              </div>
            </div>
            <div className="button-row">
              <button className="ghost-button" onClick={() => setSelectedShopId(shop.id)}>Preview</button>
              <Link to="/overview" state={{ shopId: shop.id }}>
                <button className="primary-button">Open Overview</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Map;
