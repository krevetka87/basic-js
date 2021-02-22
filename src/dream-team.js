const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.filter(e => typeof e === 'string').map(e => e.trim().charAt(0).toUpperCase()).sort().join('');
  }
  else {
    return false;
  }
};