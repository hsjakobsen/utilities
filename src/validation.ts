import * as validator from "email-validator";

import { formatError } from './responses';

export const validateEmail = (email:string) => validator.validate(email);

export function trimStringAndCheckLength(stringToCheck:string, field:string, lengthRequirement:number, matchLength:boolean) {
  var trimmedString = stringToCheck.trim();
  let response;

  var matchesRequirement =
    matchLength === true ? trimmedString.length != lengthRequirement : trimmedString.length < lengthRequirement;
  var feedback = matchLength === true ? ' ' : ' at least ';

  if (matchesRequirement) {
    response = {
      success: false,
      result: trimmedString,
      feedback: field + ' must be' + feedback + lengthRequirement + ' characters.',
    };
  } else {
    response = {
      success: true,
      result: trimmedString,
      feedback: '',
    };
  }
  return response;
}

export function verifyLoginCredentials(username:string, password:string) {
  if (!username || username === '') {
    return formatError('Username cannot be empty');
  }
  if (!password || password === '') {
    return formatError('Password cannot be empty');
  }

  return {
    username: username,
    password: password,
  };
}
