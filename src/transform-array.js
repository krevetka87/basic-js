const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error;
  }
  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }
  let transform = [];
  
  for (let i = 0; i < arr.length; i++){
   if(arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev'){
     transform.push(arr[i]);
     if(arr[i+1] === '--double-prev' && arr[i-1] != '--discard-next' && arr[i] != undefined){
       transform.push(arr[i]);
     }
     if(arr[i+1] === '--discard-prev' && arr[i-1] != '--discard-next' && arr[i] != undefined){
       transform.pop();
     }
     if(arr[i-1] === '--double-next' && arr[i] != undefined){
       transform.push(arr[i]);
     }
     if(arr[i-1] === '--discard-next' && arr[i] != undefined){
       transform.pop();
     }
   }
    
}
return transform;
}