var getBrowserInfo = require('./browser');
var numbers = require('./numbers');

function printMsg() {
  console.log("This is a message from the demo package");
}

module.exports = {
  getBrowserInfo: getBrowserInfo,
  printMsg: printMsg,
  numbers: numbers,
};