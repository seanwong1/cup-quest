import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, index: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String },
  picture: { type: String },
  friends: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: Number,
      enums: [
        0,
        1
      ]
    }
  }],
  // location: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export { User };