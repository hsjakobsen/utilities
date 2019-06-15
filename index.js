var getBrowserInfo = require('./browser');

function printMsg() {
  console.log("This is a message from the demo package");
}

module.exports = {
  getBrowserInfo: getBrowserInfo,
  printMsg: printMsg
};