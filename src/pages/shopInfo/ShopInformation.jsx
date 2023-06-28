/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopMenu from './ShopMenu.jsx';
import { shop } from './overview_mock';
import { menu } from '../../menu';
import latte1 from '../../assets/latte1.jpg';
import latte2 from '../../assets/latte2.jpg';
import latte3 from '../../assets/latte3.jpg';
import latte4 from '../../assets/latte4.jpg';

const ShopInformation = ({ shopID }) => {

  const [ photos, setPhotos ] = useState([]);

  // grab pictures on load
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `/shops/pictures/MTSW4McQd7CbVtyjqoe9mw`
    }
    axios(options)
      .then((info) => {
        setPhotos(info.data.photos);
      })
      .catch((err) => {
        console.log('error getting pictures', err);
      })
  }, []);

  // hours look like "9:0-17:0" --> if not 00, it says the whole minutes
  let dayKey = 100;
  const parseTotalHours = (hoursStr) => {
    let totalHours = [];
    let hours = hoursStr.split('-');
    for (var i = 0; i < hours.length; i++) {
      var currentHour = hours[i];
      var breakdown = currentHour.split(':');
      if (parseInt(breakdown[0]) > 12) {
        var converted = parseInt(breakdown[0]) - 12;
        if (breakdown[1] === '0') {
          totalHours.push(converted.toString() + ':00PM');
        } else {
          totalHours.push(`${converted.toString()}:${breakdown[1]}PM`);
        }
      } else if (breakdown[0] === '0') {
        if (breakdown[1] === '0') {
          totalHours.push('12:00AM');
        } else {
          totalHours.push(`${converted.toString()}:${breakdown[1]}`);
        }
      } else {
        if (breakdown[1] === '0') {
          totalHours.push(`${breakdown[0]}:00AM`)
        } else {
          totalHours.push(`${breakdown[0]}:${breakdown[1]}AM`);
        }
      }
    }
    return totalHours;
  }

  const daysOpen = Object.keys(shop.hours);


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
      <span className="overview_address">
        <div>
          {shop.address}
        </div>
        <div>
          {`${shop.city}, ${shop.state} ${shop.zip}`}
        </div>
      </span>
      <span className="overview_hours">
        {daysOpen.map((day) => {
          let dayHours = parseTotalHours(shop.hours[day]);
          return (<div key={day}>
            {`${day}: ${dayHours[0]} to ${dayHours[1]}`}
          </div>)
        })}
      </span>
      <h3 className="overview_menu--title">Menu Items & Ratings</h3>
      <ShopMenu menu={menu} />
    </div>
  )
}

export default ShopInformation;

// const parseDay = (dayAsNumber) => {
//   var daysAsWords = {
//     0: 'Monday',
//     1: 'Tuesday',
//     2: 'Wednesday',
//     3: 'Thursday',
//     4: 'Friday',
//     5: 'Saturday',
//     6: 'Sunday'
//   };
//   return daysAsWords[dayAsNumber];
// }
// const parseHours = (hourStr) => {
//   var int24 = parseInt(hourStr);
//   var tens = Math.floor(int24 / 100);
//   if (tens - 12 >= 0) {
//     return `${tens - 12}:${hourStr[2]}${hourStr[3]}PM`;
//   } else {
//     return `${tens}:${hourStr[2]}${hourStr[3]}AM`;
//   }
// }