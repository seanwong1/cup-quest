import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const API = import.meta.env.MAP_API_KEY;


export function Map() {
    console.log('this is getting rendered');
  
  return (
    <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API }}
      defaultCenter={{
        lat: 33.81204097948217,
        lng: -117.91901038460358
      }}
      defaultZoom={15}
    >
    </GoogleMapReact>
  </div>
  )
}
