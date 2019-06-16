var validator = require("email-validator");

var getBrowserInfo = require('./browser');
var numbers = require('./numbers');
var async = require('./async');
var date= require('./date');
var parse = require('./parse');
var comparison = require('./comparison');
var responses = require('./responses');
var validation = require('./validation');

module.exports = {
  validator: validator,
  getBrowserInfo: getBrowserInfo,
  date: date,
  numbers: numbers,
  async: async,
  comparison: comparison,
  responses: responses,
  validation: validation,
  parse: parse,
};