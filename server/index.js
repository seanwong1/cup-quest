/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import path from 'path';
import * as https from 'node:https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import compression from 'compression';

// import '../database/models.js';
// import { Review, User, Shop} from '../database/models.js';

// EXPRESS ROUTES
import user from './routes/user.js';

// DATABASE
import '../database/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
//all this work just for __dirname in es6
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
})

app.get("/", function(req, res){
  const url = "https://media.tenor.com/4iqJFHzJIDsAAAAC/cat-scream.gif";
  res.write(`
  <!DOCTYPE html>
  <h1> SERVER IS SET UP!!!!</h1>
  <img src="${url}"></img>
  </html>`)
  res.end();
})

// routes go here

app.use('/user', user);

app.post('/register', async function(req, res) {
  const { username, email, phone, picture } = req.body;

  try {
    const newUser = new User({
      name: username,
      email,
      phone,
      picture,
    });

    await newUser.save();
    res.status(200).send('User Created!')
  } catch(err) {
    res.status(500).send('Server Err');
  }
})


app.get('/reviews', (req, res) => {
  const shop = req.body.shop;
  Review.find({shop: 0}).sort({createdAt: 'desc'})
  .then((results) => {
    res.status(200).send(results);
  })
})

app.post('/reviews', (req, res) => {
  const shop = req.body.shop;
  const userId = new mongoose.Types.ObjectId(req.body.userId);
  const rating = req.body.rating;
  const drink = req.body.drink;
  const comments = req.body.comments.length === 0 ? 'n/a' : req.body.comments;
  User.find({_id: userId})
  .then((results) => {
    const picture = results[0].picture || 'https://cdn-icons-png.flaticon.com/512/847/847970.png?w=900&t=st=1687562010~exp=1687562610~hmac=e4506659b2805b2d2a3fce519290a0bd1ce6987de3562502be555b4b619c0d29';
    Review.create({shop: shop, username: results[0].name, profilePic: picture, rating: rating, drink: drink, comments: comments})
  })
  .then((results) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
  // Review.create({})
})

app.get('/ratings', (req, res) => {
  getDrinkRatings(req, res);
});

app.get('/shops/pictures/:id', (req, res) => {
  getShopPictures(req, res);
})

// eslint-disable-next-line no-undef
const port = process.env.PORT;
app.listen(port, () => {
  console.log('listening on port', port);
  console.log(`Go to http://localhost:${port} for more details`)
});

