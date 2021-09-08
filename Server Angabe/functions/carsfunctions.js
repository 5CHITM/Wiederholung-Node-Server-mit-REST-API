const cars = require('../model/cars.json');

function getCars() {
  return cars;
}

function getCar(carId) {
  return cars.find((el) => el.id == carId);
}

function changeStatus(carId, newCarStatus) {
  console.log(newCarStatus);
  let car = cars.find((el) => el.id == carId);
  car.status = newCarStatus;
  console.log(car);

  return `Car status changed to ${newCarStatus}`;
}

module.exports = { getCars, getCar, changeStatus };
