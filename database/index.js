/* eslint-disable no-undef */
import mongoose from 'mongoose';
import 'dotenv/config';

// const con = mongoose.connect(process.env.DATABASE);
// for local connect host

// const con = mongoose.connect(process.env.MONGO_URL);
// for running entire docker stack

(async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('Database successfully connected');
  } catch (err) {
    console.log('error: ' + err)
  }
})();