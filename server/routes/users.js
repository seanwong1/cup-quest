import express from 'express';
const router = express.Router();

router.get('/:user_name', (req, res) => {
  console.log(req.params);
})

export default router;