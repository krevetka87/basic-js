const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let newStr;
  let separator = options['separator'] || '+';
  let additionSeparator = options['additionSeparator'] || '|';
  let repeatTimes = options['repeatTimes'] || 1;
  let additionRepeatTimes = options['additionRepeatTimes'] || 1;
  if ('addition' in options){
     let addition = String(options['addition']);
     let newAdd = addition;
     newStr = `${str + addition.repeat(`${additionRepeatTimes}`).match(new RegExp('.{1,' + newAdd.length + '}', 'g')).join(`${additionSeparator}`)}`;
  }
  else {
    newStr = str;
  }
  let result = [];
  for(let i = 1; i <= repeatTimes; i++){
     result.push(newStr);
  }
  return result.join(`${separator}`);
 };
  