const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error;
	}
	let newArr = Array.from(arr);
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === `--discard-next`) {
			if (i === newArr.length - 1) {
				newArr.pop();
			}
			else if (newArr[i + 2] === '--discard-prev' || newArr[i + 2] === '--double-prev') {
				newArr.splice(i, 3);
			}
			else {
				newArr.splice(i, 2);
			}
		}
		if (newArr[i] === '--double-next') {
			if (i === newArr.length - 1) {
				newArr.pop();
			}
			else {
				newArr.splice(i, 1, newArr[i + 1])
			}
		}
		if (newArr[i] === '--discard-prev') {
			if (i === 0) {
				newArr.splice(i, 1)
			}
			else {
				newArr.splice(i - 1, 2)
			}
		}
		if (newArr[i] === '--double-prev') {
			if (i === 0) {
				newArr.splice(i, 1)
			}
			else {
				newArr.splice(i, 1, newArr[i - 1])
			}
		}
	}
	return newArr;

};

