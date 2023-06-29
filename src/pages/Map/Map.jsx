import { Link } from 'react-router-dom';
import React, { useMemo, useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'; 
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';



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
  const { isLoaded } = useLoadScript({
    // mapId: "google-map-script",
    googleMapsApiKey: API,
    libraries: ["places"]//pass in "places" library
  })
  const [map, setMap] = React.useState(null)


  const center =  useMemo(() => ({
    lat: 33.81204097948217,
    lng: -117.91901038460358
  }), []);

  const [selected, setSelected] = useState(null);


  const usePlacesAutocomplete = ({ setSelected }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
    
    return (
      <Combobox>
        <ComboboxInput value={value} onChange={e => setValue()} />
      </Combobox>
    )
    
  }

  return (isLoaded) ? (
    <>
      <div className="places-container">
        <usePlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  ) : <>Map Loading...</>
}



export default Map