const { replaceSetter } = require("sinon");
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'arr': [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '( )') {
    value = value + '';
    this.arr.push('( ' + value + ' )');
    return this;

  },
  removeLink(position) {
    position = +position;
    if (typeof position != 'number' || position < 1 || position > this.getLength()) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;

  }
};

module.exports = chainMaker;
