import * as validator from "email-validator";
import * as async from "./async";

export const Greeter = (name: string) => `Hello ${name}`;

export const validateEmail = (email: string) => validator.validate(email);
export const asyncForEach = (array:Array<Object>, callback:Function) => async.asyncForEach(array, callback);

// var comparison = require('./comparison');
// var date= require('./date');
// var getBrowserInfo = require('./browser');
// var numbers = require('./numbers');
// var parse = require('./parse');
// var responses = require('./responses');
// var validation = require('./validation');
