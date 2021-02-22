const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let x = {};
  x.turns = Math.pow(2, disksNumber) - 1;
  x.seconds = Math.floor(60 / turnsSpeed * x.turns * 60);
  return x;
};
