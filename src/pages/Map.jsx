import { Link } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import GoogleMapReact from 'google-map-react';


const API = import.meta.env.VITE_MAP_API_KEY;




export function Map() {
  
  console.log(API);
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      
    <GoogleMapReact
      bootstrapURLKeys={{ key: API }}
      // mapId="b1fa4e9516a5650d"
      defaultCenter={{
        lat: 33.81204097948217,
        lng: -117.91901038460358
      }}
      defaultZoom={15}
      mapId= "b1fa4e9516a5650d" 
    >
    </GoogleMapReact>
  </div>
  )
}
