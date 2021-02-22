const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.map(e => e.filter(e => e === '^^')).reduce((a, b) => a + b.length, 0);
};
