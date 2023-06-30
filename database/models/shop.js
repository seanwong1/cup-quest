import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  name: String,
  hours: {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String
  },
  address: String,
  city: String,
  state: String,
  zip: String,
  longitude: Number,
  latitude: Number,
  stars: Number,
  categories: String,
  attributes: mongoose.Schema.Types.Mixed,
  review_count: Number,
});

const Shop = mongoose.model('Shop', shopSchema);

export { Shop };