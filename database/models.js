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
})()

const shopSchema = new mongoose.Schema({
  name: String,
  hours: String,
  address1: String,
  address2: String,
  address3: String,
  city: String,
  state: String,
  zip: Number,
  longitude: String,
  latitude: String,
  phone: String,
});

const reviewSchema = new mongoose.Schema({
  shop: { type: Number, required: true },
  username: { type: String, required: true },
  profilePic: { type: String, required: true },
  rating: { type: Number, required: true },
  drink: { type: String, required: true },
  comments: { type: String },
  reported: { type: Boolean, default: false }
}, { timestamps: true })

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  picture: { type: String },
  friends: [{ type: mongoose.ObjectId, ref: 'User' }],
  // location: { type: String }
}, { timestamps: true });


const Shop = mongoose.model('Shop', shopSchema);
const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

export {
  Shop,
  Review,
  User,
}