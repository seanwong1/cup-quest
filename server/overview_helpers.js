import axios from 'axios';
import { Review, Shop} from '../database/models.js';
import 'dotenv/config';

export const getDrinkRatings = (req, res) => {
  // grab avg rating from yelp
  // search by shop
  // average the ratings by drinks
  // if no ratings
    // use yelp avg
}

export const getShopDetails = (req, res) => {
  Shop.findOne({ business_id: req.body.id })
    .then((shop) => {
      var shopData = {
        name: shop.name,
        address: shop.address,
        city: shop.city,
        zip: shop.zip,
        hours: shop.hours,
        averageRating: shop.stars,
      }
      res.status(200).send(shopData);
    })
    .catch((err) => {
      console.log(`error getting shop data for ${req.body.id}`, err);
      res.status(404).send(err);
    })
}

export const getShopPictures = (req, res) => {
  // send request to yelp
  const options = {
    headers: {
      Authorization: process.env.VITE_YELP_API_KEY
    },
    url: `https://api.yelp.com/v3/businesses/${req.params.id}`,
    method: 'GET',
  }
  axios(options)
    .then((shopData) => {
      res.status(200).send(shopData.data);
    })
    .catch((err) => {
      console.log('error getting shop pictures from Yelp', err);
    })
}

export const getShopData = (req, res) => {
  res.send('shop data endpoint hit');
}