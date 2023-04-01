const express = require('express');
const router = express.Router();
const rollController = require('../controllers/rollController');

router.get('/:num', rollController.getRoll, (req, res) => {
  return res.status(200).json(res.locals.roll);
});

module.exports = router;
