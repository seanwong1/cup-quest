import express from 'express';
const router = express.Router();

import { getUser } from '../../database/controllers/user.js';

router.get('/:name', async (req, res) => {
  var userInfo = await getUser(req.params);
  res.send(userInfo);
})

export default router;