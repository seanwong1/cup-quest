import { User } from '../models/user.js';

import mongoose from 'mongoose';

export const getUser = async (user_name) => {
  return await User.findOne(user_name).exec();
};

export const getAllUsers = async () => {
  return await User.find().exec();
};

export const getFriends = async (user) => {
  return await User.aggregate([
    { "$match": { "name": user.name } },
    { "$lookup": {
      "from": User.collection.name,
      "let": { "friends": "$friends" },
      "pipeline": [
        { "$match": {
          "friends.status": 1,
        }},
        { "$project": {
            "name": 1,
            "email": 1,
            "avatar": 1
          }
        }
      ],
      "as": "friends"
    }},
  ])
}

export const addFriend = async (user, friend_id) => {
  return await User.findOneAndUpdate(
    {name: user.name},
    {$addToSet: {friends: [friend_id]}},
    {safe: true, upsert: true}
  ).exec();
}

export const removeFriend = async (user, friend_id) => {
  return await User.updateOne(
    {
      name: user.name,
      friends: {$elemMatch: {user: friend_id}}
    },
    {
      $pull: {friends: {user: friend_id, status: 1}}
    }
  ).exec();
}

// {'name': user.name, 'friends._id': friend._id},
//     // {$push: {'friends': {user: friend._id, status: 1}},
//     //   $setOnInsert: {'friends.$.status': 1}},
//     {$set: {'friends': { 'user': friend._id, 'status': 1 }}},
//     //{$addToSet: {'friends': {user: friend._id, status: 0}}},
//     options

// db.users.findAndModify({query: {'name': 'Sean', 'friends': {$elemMatch: {'user': '649a1a053387451d53444305'}}}, update: {$set: {'friends.$': {'user': '649a1a053387451d53444305', 'status': 1}}}})

// db.users.initializeUnorderedBulkOp().find({'name': 'Sean', 'friends': {$elemMatch: {'user': '649a1a053387451d53444305'}}})
// .upsert().update({$push: {'friends': {'user': '649a1a053387451d53444305', 'status': 0}}})