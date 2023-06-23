/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import path from 'path';
import * as https from 'node:https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import '../database/models.js';
import { Review, User, Shop} from '../database/models.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
//all this work just for __dirname in es6
const app = express();

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

app.post('/register', async function(req, res) {
  const { username, email, phone } = req.body;

  try {
    const newUser = new User({
      name: username,
      email,
      phone,
    });

    await newUser.save();
    console.log('New user created!')
    res.status(200).send('User Created!')
  } catch(err) {
    console.log('Err creating new user', err);
    res.status(500).send('Server Err');
  }
})


app.get('/reviews', (req, res) => {
  const shop = req.body.shop;
  Review.find({shop: 0}).sort({createdAt: 'desc'})
  .then((results) => {
    console.log('results: ', results);
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
    console.log('inside: ', results);
    const picture = results[0].picture || 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1543&q=80';
    Review.create({shop: shop, username: results[0].name, profilePic: picture, rating: rating, drink: drink, comments: comments})
  })
  .then((results) => {
    console.log('finished posting: ', results);
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
  // Review.create({})
})

// eslint-disable-next-line no-undef
const port = process.env.PORT;
app.listen(port, () => {
  console.log('listening on port', port);
  console.log(`Go to http://localhost:${port} for more details`)
});

