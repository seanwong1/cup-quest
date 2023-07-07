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
import { Link, Routes, Route } from 'react-router-dom';
import { ShopOverview } from "../ShopOverview";



const API = import.meta.env.VITE_MAP_API_KEY;



const Map = () => {
  const [lat, setLat] = useState(34.03534719240222);
  const [lng, setLng] = useState(-117.04408209652723);
  const [shops, setShops] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [markerClicked, setMarkerClicked] = useState(false);
  
  const [userId, setUserId] = useState('649512218eda7c4e347c61bf');

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // setLat(position.coords.latitude);
        // setLng(position.coords.longitude);
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
    
    // const handleShopButtonClick = (shopId) => {
    //   setSelectedShopId(shopId);
    //   setMarkerClicked(true);
    // };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div
          style={{
            height: '40vh',
            width: '100%',
            marginBottom: '10px'
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
        <div
        style={{
          height: '40vh',
          width: '100%',
          overflowY: 'auto'
        }}
      >
        <ul>
          {shops.map((shop) => (
            <li
              key={shop.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px',
                marginBottom: '5px',
                backgroundColor: selectedShopId === shop.id ? '#f1e6d0' : 'inherit'
              }}
            >
              <Typography style={{ color: "#542a1b" }}>
                {shop.name}
              </Typography>
              {/* <Button
                variant="outlined"
                style={{
                  color: "#542a1b",
                  marginLeft: '10px'
                }}
                // onClick={() => handleShopButtonClick(shop.id)}
              >
                Click
              </Button> */}
              
              <Link 
                to={{
                pathname: '/overview',
                state: { 
                  userId: userId, 
                  setUserId: setUserId,
                  selectedShopId: selectedShopId //loading Link too fast before selectedShopId is loaded so therefore null
                }
              }}>
                <Button>
                  Click
                </Button>
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
      </div>
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
