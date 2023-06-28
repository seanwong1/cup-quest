import { Link } from 'react-router-dom';
import React, { useMemo, useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript, OverlayView, InfoWindow, LoadScript } from '@react-google-maps/api'; 

const API = import.meta.env.VITE_MAP_API_KEY;

const containerStyle = {
  height: '50vh',
  width: '100%'
};

const onClick = () => {
  console.info('I have been clicked!')
};

const divStyle = {
  background: 'white',
  border: '1px solid #ccc',
  padding: 15
};

export function Map() {
  
  ////YELP API///////////////////////////////////////////////////////////////////////////////
  // const [businesses, setBusinesses] = useState([]);
  // useEffect(() => {
  //   // Fetch Yelp API data and update the state
  //   const fetchBusinesses = async () => {
  //     try {
  //       const response = await fetch('https://api.yelp.com/v3/businesses/search');
  //       const data = await response.json();
  //       setBusinesses(data.businesses);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchBusinesses();
  // }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const { isLoaded } = useLoadScript({
    // mapId: "google-map-script",
    googleMapsApiKey: API
  })

  const [map, setMap] = React.useState(null)

  //new map instance
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


const center =  useMemo(() => ({
  lat: 33.81204097948217,
  lng: -117.91901038460358
}), []);

  return (isLoaded) ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      // onUnmount={onUnmount}
    >
      
    
    </GoogleMap>
  ) : <>Map Loading...</>
}

export default Map