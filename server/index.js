/* eslint-disable no-undef */
import express from 'express';
import 'dotenv/config'
import path from 'path';
import * as https from 'node:https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import '../database/models.js';
import { User } from '../database/models.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
//all this work just for __dirname in es6
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  const { username, password, email, phone } = req.body;

  try {
    const newUser = new User({
      name: username,
      password,
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




// eslint-disable-next-line no-undef
const port = process.env.PORT;
app.listen(port, () => {
  console.log('listening on port', port);
  console.log(`Go to http://localhost:${port} for more details`)
});

