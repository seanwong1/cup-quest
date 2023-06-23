import mongoose from 'mongoose';
import 'dotenv/config';

// const con = mongoose.connect(process.env.DATABASE);

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database successfully connected');
  } catch (err) {
    console.log('error: ' + err)
  }
})()

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
  rating: { type: Number, required: true },
  drink: { type: String, required: true },
  comments: { type: String },
  reported: { type: Boolean, default: false }
}, { timestamps: true })

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String }
}, { timestamps: true });


const Shop = mongoose.model('Shop', shopSchema);
const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

export {
  Shop,
  Review,
  User,
}