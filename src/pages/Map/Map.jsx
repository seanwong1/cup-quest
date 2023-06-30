import { Link } from 'react-router-dom';
import React, { useMemo, useState, useEffect } from 'react';
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

export class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lat: 34.046, 
      lng: -117.045,
      shops: [],
      selectedShopId: null
    }
  }
  
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log("position.coords===> ", position.coords)
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          shops: testData.businesses,
          selectedShopId: null,
          markerClicked: false
        })
      },
      (error) => {
        console.log("Error getting location: ", error.message)
      }
    )
  }
  
  
  header = () => {
    return (
      <div>
        {/* <Typography variant='h6=4'>
          S L I D E R
        </Typography> */}
        <TextField label="Search..."
          variant="outlined"
          style={{ width: "100%" }}
        />
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContect: "space-between",
          alignItems: "center"
          }}
        >
          <Typography>
            Distance: 
          </Typography>
          <Slider style={{ width: "75%" }}/>
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
  }
  
  
  
  map = () => {
    console.log(testData)
    const defaultProps = {
      center: {
        lat: 34.046, 
        lng: -117.04
      },
      zoom: 13
    };
    const clickedOutside = (x, y, lat, lng, event) => {
      if (this.state.markerClicked == true) {
        this.setState({
          selectedShopId: null,
          markerClicked: false
        })
      } else {
        console.log("map clicked")
      }
    }
    return (
      <div 
      style={{ 
        height: '40vh',
        width: '100%',
        display: "flex",
        alignItems: "center"
      }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          onClick={() => {clickedOutside()}}
        >
          {
            this.state.shops.map((shop) => {
              return (
                <LocalCafeTwoToneIcon 
                  key={shop.id}
                  color={"brown"}
                  lat={shop.coordinates.latitude}
                  lng={shop.coordinates.longitude}
                  onClick={() => {
                    this.setState({ 
                      selectedShopId: shop.id,
                      markerClicked: true
                    })}}
                />
              )
            })
          }
          {
            this.state.shops.map((shop) => {
              if (this.state.selectedShopId === shop.id) {
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
  }
  
  
  render() {
    return (
      <div>
        {this.header()}
        {this.map()}
      </div>
    )
  }
  
  
  
}

