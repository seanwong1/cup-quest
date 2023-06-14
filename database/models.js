import mongoose from 'mongoose';
import process from 'dotenv';

const con = mongoose.connect(process.env.DATABASE);

const shopSchema = new mongoose.Schema({
  id: Number,
  name: String,
  hours: String,
  address: String,
  menu: [String],
  reviews: [{
    type: mongoose.ObjectId,
    ref: 'Review',
  }],
});

const reviewSchema = new mongoose.Schema({
  id: Number,
  shop: {
    type: mongoose.ObjectId,
    ref: 'Shop'
  },
  userId: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  body: String,
  createdAt: Date,

})

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  createdAt: Date,
  location: String,
})

const Shop = mongoose.model('Shop', shopSchema);
const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

export {
  Shop,
  Review,
  User,
}