import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, index: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String },
  picture: { type: String },
  friends: [{ type: mongoose.ObjectId, ref: 'User' }],
  // location: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export { User };