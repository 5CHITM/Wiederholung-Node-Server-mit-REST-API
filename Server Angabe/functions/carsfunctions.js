const cars = require('../model/cars.json');

function getCars() {
  return cars;
}

function getCar(carId) {
  return cars.find((el) => el.id === Number(carId));
}

function changeStatus(carId, newCarStatus) {
  const car = cars.find((el) => el.id === Number(carId));
  car.status = newCarStatus;
  return `Car status changed to ${newCarStatus}`;
}

function delCar(carId) {
  cars.splice(cars.map((el) => el.id).indexOf(parseInt(carId, 10)), 1);
  return 'Car deleted';
}

function insertCar(e) {
  const id = Math.max(...cars.map((el) => el.id)) + 1;
  const newCar = e;
  newCar.id = id;
  cars.push(newCar);
  return 'Created car';
}

module.exports = { getCars, getCar, changeStatus, delCar, insertCar };
