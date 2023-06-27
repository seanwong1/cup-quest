import { Link } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const API = import.meta.env.VITE_MAP_API_KEY;

const containerStyle = {
  height: '50vh',
  width: '100%'
};

const center = {
  lat: 33.81204097948217,
  lng: -117.91901038460358
};



// export function Map() {
  
//   // console.log(API);
//   return (
//     <div style={{ height: '50vh', width: '100%' }}>
      
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: API }}
//       // mapId="b1fa4e9516a5650d"
//       defaultCenter={{
//         lat: 33.81204097948217,
//         lng: -117.91901038460358
//       }}
//       defaultZoom={15}
//       mapId= "b1fa4e9516a5650d" 
//     >
//     </GoogleMapReact>
//   </div>
//   )
// }

export function Map() {
  const { isLoaded } = useJsApiLoader({
//  mapId="b1fa4e9516a5650d"

    mapId: "google-map-script",
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

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map