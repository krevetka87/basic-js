const CustomError = require("../extensions/custom-error");
const checkElements = (arr) => arr.some(element => Array.isArray(element));
module.exports = class DepthCalculator {
  calculateDepth(arr){
    let countDepth = 1;
    if(checkElements(arr)){
      let arr2 = arr.flat();
      return countDepth + this.calculateDepth(arr2);
    }
    return countDepth;
  }
};