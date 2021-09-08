const express = require('express');
// const asyncHandler = require('express-async-handler');

const { getCars, getCar, changeStatus } = require('../functions/carsfunctions.js');

const router = express.Router();

router.get('/hello', (req, res) => res.send('Hello'));

router.get('/cars', (req, res) => res.status(200).json(getCars()));

router.get('/car/:id', (req, res) => res.status(200).send(getCar(req.params.id)));

router.put('/car/:id', (req, res) => res.status(200).send(changeStatus(req.params.id, req.body.status)));

module.exports = router;
