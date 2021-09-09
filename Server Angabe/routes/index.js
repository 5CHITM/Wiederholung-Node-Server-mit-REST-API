const express = require('express');
const asyncHandler = require('express-async-handler');

const { getCars, getCar, changeStatus, delCar, insertCar } = require('../functions/carsfunctions.js');

const router = express.Router();

router.get(
  '/cars',
  asyncHandler(async (req, res) => {
    res.status(200).json(getCars());
  }),
);

router.get(
  '/car/:id',
  asyncHandler(async (req, res) => {
    res.status(200).send(getCar(req.params.id));
  }),
);

router.put(
  '/car/:id',
  asyncHandler(async (req, res) => {
    res.status(200).send(changeStatus(req.params.id, req.body.status));
  }),
);

router.delete(
  '/car/:id',
  asyncHandler(async (req, res) => {
    res.status(200).send(delCar(req.params.id));
  }),
);

router.post(
  '/car',
  asyncHandler(async (req, res) => {
    res.status(200).send(insertCar(req.body.car));
  }),
);

module.exports = router;
