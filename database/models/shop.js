import mongoose from 'mongoose';

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

const Shop = mongoose.model('Shop', shopSchema);

export { Shop };