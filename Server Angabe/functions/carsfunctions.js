const cars = require('../model/cars.json');

function getCars() {
  return cars;
}

function getCar(carId) {
  return cars.find((el) => el.id == carId);
}

function changeStatus(carId, newCarStatus) {
  const car = cars.find((el) => el.id == carId);
  car.status = newCarStatus;
  return `Car status changed to ${newCarStatus}`;
}

function delCar(carId) {
  cars.splice(cars.map(el=> {return el.id}).indexOf(parseInt(carId)), 1);
  return "Car deleted";
}

function insertCar(e) {
  cars.push(e);
  return "Created car";
}

module.exports = { getCars, getCar, changeStatus, delCar, insertCar };
