/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopMenu from './ShopMenu.jsx';
import { testShop } from './overview_mock';
import { menu } from '../../menu';
import latte1 from '../../assets/latte1.jpg';
import latte2 from '../../assets/latte2.jpg';
import latte3 from '../../assets/latte3.jpg';
import latte4 from '../../assets/latte4.jpg';

const ShopInformation = ({ shopID }) => {

  const [ photos, setPhotos ] = useState([]);
  const [ shop, setShop ] = useState(testShop);

  // grab pictures on load
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `/shops/G2okUNH-Jeks8hqJvSilcw`
    }
    axios(options)
      .then((info) => {
        setPhotos(info.data.photos);
        setShop(info.data);
      })
      .catch((err) => {
        console.log('error getting pictures', err);
      })
  }, []);

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
        <div>
          MiniMap
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

export default ShopInformation;
