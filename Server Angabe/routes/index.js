const express = require('express');
// const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/hello', (req, res) => res.send('Hello'));

module.exports = router;