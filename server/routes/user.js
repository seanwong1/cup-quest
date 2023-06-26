import express from 'express';
const router = express.Router();

import { getUser } from '../../database/controllers/user.js';

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
})

export default router;