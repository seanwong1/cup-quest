/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

import ShopMenu from './ShopMenu.jsx';
import { testShop } from './overview_mock';
import { menu } from '../../menu';
const API = import.meta.env.VITE_MAP_API_KEY;
// import latte1 from '../../assets/latte1.jpg';
// import latte2 from '../../assets/latte2.jpg';
// import latte3 from '../../assets/latte3.jpg';
// import latte4 from '../../assets/latte4.jpg';

const ShopInformation = ({ shopId }) => {

  const [ photos, setPhotos ] = useState([]);
  const [ shop, setShop ] = useState(testShop);

  // grab pictures on load
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `/shops/${shopId}`
    }
    axios(options)
      .then((info) => {
        setPhotos(info.data.photos);
        setShop(info.data);
      })
      .catch((err) => {
        console.log('error getting pictures', err);
      })
  }, [shopId]);

  // hours look like "9:0-17:0" --> if not 00, it says the whole minutes
  let dayKey = 100;
  const parseDay = (dayAsNumber) => {
    var daysAsWords = {
      0: 'Monday',
      1: 'Tuesday',
      2: 'Wednesday',
      3: 'Thursday',
      4: 'Friday',
      5: 'Saturday',
      6: 'Sunday'
    };
    return daysAsWords[dayAsNumber];
  }
  const parseHours = (hourStr) => {
    var int24 = parseInt(hourStr);
    var tens = Math.floor(int24 / 100);
    if (tens - 12 > 0) {
      return `${tens - 12}:${hourStr[2]}${hourStr[3]}PM`;
    } else if (tens === 0) {
      return `12:00AM`
    } else {
      return `${tens}:${hourStr[2]}${hourStr[3]}AM`;
    }
  }

  if (shop.name === 'Atmalogy') {
    return (
      <div className="overview_info--loading">
        Loading...
      </div>
    )
  } else {
    return (
      <div className="overview_info">
        <div className="overview_pictures--container">
          <ol className="overview_picturesCarousel">
            {photos.map((photoUrl) => {
              dayKey++;
              return (
              <li key={dayKey}>
                <img src={photoUrl} className="overview_pictures--pic"/>
              </li>
              )
            })}
          </ol>
        </div>
        <h1 className="overview_title overview_title--scroll">{shop.name}</h1>
        <div className="overview_contact">
          <span className="overview_contact--address">
            {shop.location.display_address.map((addressLine) => {
              return (<div key={dayKey}>{addressLine}</div>)
            })}
          </span>
          <span className="overview_contact--phone">
            {shop.display_phone}
          </span>
          <div className="overview_map" style={{
            height: '20vh',
            width: '50%',
            marginBottom: '10px',
            float: 'right',
          }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: API }}
              defaultZoom={15}
              center={{
                lat: shop.coordinates.latitude,
                lng: shop.coordinates.longitude
              }}
            >
              <LocalCafeTwoToneIcon
                  key={shop.id}
                  color={"brown"}
                  lat={shop.coordinates.latitude}
                  lng={shop.coordinates.longitude}
                />
            </GoogleMapReact>
          </div>
        </div>
        <div className="overview_hours">
          {shop.hours[0].open.map((day) => {
            return (<div key={day.day}>
              {`${parseDay(day.day)}: ${parseHours(day.start)} to ${parseHours(day.end)}`}
            </div>)
          })}
        </div>
        <h3 className="overview_menu--title">Menu Items & Ratings</h3>
        <ShopMenu menu={menu} rating={shop.rating}/>
      </div>
    )
  }

}

export default ShopInformation;
