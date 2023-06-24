import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import 'dotenv/config';

const API = process.env.MAP_API_KEY;


export const Map = () => {
  
  
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

