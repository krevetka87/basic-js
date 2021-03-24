const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = Number(sampleActivity) || null;
  if (typeof sampleActivity != 'number' || sampleActivity < 0 || sampleActivity === null) {
    return false;
  }
};
