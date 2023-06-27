import express from 'express';
const router = express.Router();

import { getUser, getAllUsers, addFriend } from '../../database/controllers/user.js';

router.get('/all', async (req, res) => {
  return await getAllUsers()
    .then((result) => {
      if (result) {
        res.send(result);
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.get('/:name', async (req, res) => {
  return await getUser(req.params)
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.send('User not found');
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.put('/:name', async (req, res) => {
  return await addFriend(req.params, req.query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
})

export default router;