import { User } from '../models/user.js';

export const getUser = async (user_name) => {
  return await User.findOne(user_name).exec();
};

export const getAllUsers = async () => {
  return await User.find().exec();
};

export const addFriend = async (user, friend_id) => {
  return await User.updateOne(
    {
      name: user.name
    },
    {
      $addToSet: {friends: {user: friend_id, status: 1}}
    },
    {
      upsert: true
    }
  );
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