import { Link } from 'react-router-dom';
import React, { useMemo, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


const API = import.meta.env.VITE_MAP_API_KEY;

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export function Map(){
//   const defaultProps = {
//     center: {
//       lat: 34.04604480787482, 
//       lng: -117.046246505867
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '40vh', width: '90%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: API }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           // lat={10.99835602}
//           // lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }


export class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lat: 34.046, 
      lng: -117.045
    }
  }
  
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("position.coords===> ", position.coords)
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
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
        <div style={{ display: "flex", flexDirection: "row", justifyContect: "space-between", alignItems: "center" }}>
          <Typography>
            Distance: 
          </Typography>
          <Slider style={{ width: "75%" }}/>
        </div>
        <div>
          <Button 
            variant="outlined"
            style={{ width: "50%" }}
          >
            <RestartAltIcon />
            Reset
          </Button>
          <Button
            variant="contained"
            style={{ width: "50%" }}
          >
            <SearchIcon />
            Search
          </Button>
          
        </div>
      </div>
    )
  }
  
  
  
  map = () => {
    const defaultProps = {
      center: {
        lat: 34.046, 
        lng: -117.04
      },
      zoom: 11
    };
    return (
      <div style={{ height: '40vh', width: '100%', display: "flex", alignItems: "center"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        >
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

