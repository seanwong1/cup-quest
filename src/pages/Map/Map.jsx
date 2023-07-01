import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { testData } from './testData';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

const API = import.meta.env.VITE_MAP_API_KEY;

const Map = () => {
  const [lat, setLat] = useState(34.046);
  const [lng, setLng] = useState(-117.045);
  const [shops, setShops] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [markerClicked, setMarkerClicked] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setShops(testData.businesses);
        setSelectedShopId(null);
        setMarkerClicked(false);
      },
      (error) => {
        console.log("Error getting location: ", error.message)
      }
    )
  }, []);

  const handleAddressChange = (event) => {
    // Handle address change here
  };

  const handleSearch = () => {
    // Handle search button click here
  };

  const clickedOutside = (x, y, lat, lng, event) => {
    if (markerClicked) {
      setSelectedShopId(null);
      setMarkerClicked(false);
    } else {
      console.log("map clicked");
    }
  };

  const header = () => {
    return (
      <div style={{ marginBottom: 10 }}>
        <TextField
          label="Show me coffee shops in..."
          variant="outlined"
          style={{ width: "100%" }}
          onChange={handleAddressChange}
        />
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContect: "space-between",
          alignItems: "center"
        }}>
          <Typography>
            Distance:
          </Typography>
          <Slider style={{ width: "75%" }} />
        </div>
        <div>
          <Button
            variant="outlined"
            style={{
              width: "50%",
              color: "#542a1b"
            }}
          >
            <RestartAltIcon />
            Reset
          </Button>
          <Button
            variant="contained"
            style={{
              width: "50%",
              color: "#542a1b",
              backgroundColor: "#e6b17e"
            }}
          >
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>
    )
  };

  const map = () => {
    console.log(testData)
    const defaultProps = {
      center: {
        lat: 34.046,
        lng: -117.04
      },
      zoom: 13
    };
    return (
      <div
        style={{
          height: '40vh',
          width: '100%',
          display: "flex",
          alignItems: "center"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: lat,
            lng: lng
          }}
          onClick={clickedOutside}
        >
          {
            shops.map((shop) => (
              <LocalCafeTwoToneIcon
                key={shop.id}
                color={"brown"}
                lat={shop.coordinates.latitude}
                lng={shop.coordinates.longitude}
                onClick={() => {
                  setSelectedShopId(shop.id);
                  setMarkerClicked(true);
                }}
              />
            ))
          }
          {
            shops.map((shop) => {
              if (selectedShopId === shop.id) {
                return (
                  <div
                    key={shop.id}
                    lat={shop.coordinates.latitude}
                    lng={shop.coordinates.longitude}
                    style={{
                      backgroundColor: '#f1e6d0',
                      display: "inline-block",
                      padding: 2
                    }}
                  >
                    <Typography style={{ color: "#542a1b" }}>
                      {shop.name}
                    </Typography>
                  </div>
                )
              } else {
                return null
              }
            })
          }
        </GoogleMapReact>
      </div>
    )
  };

  return (
    <div>
      {header()}
      {map()}
    </div>
  );
};

export default Map;
