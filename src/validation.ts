import * as validator from 'email-validator';
import { formatError, IResponse, formatResponse } from './responses';

export const validateEmail = (email: string) => validator.validate(email);

export function trimStringAndCheckLength(
  stringToCheck: string,
  field: string,
  lengthRequirement: number,
  matchLength: boolean,
) {
  const trimmedString = stringToCheck.trim();
  let response;

  const matchesRequirement =
    matchLength === true ? trimmedString.length !== lengthRequirement : trimmedString.length < lengthRequirement;
  const feedback = matchLength === true ? ' ' : ' at least ';

  if (matchesRequirement) {
    response = {
      feedback: field + ' must be' + feedback + lengthRequirement + ' characters.',
      result: trimmedString,
      success: false,
    };
  } else {
    response = {
      feedback: '',
      result: trimmedString,
      success: true,
    };
  }
  return response;
}

export interface IVerifiedLoginCredentials extends IResponse {
  username:string;
  password:string
}

export function verifyLoginCredentials(username: string, password: string):IVerifiedLoginCredentials {
  
  if (!username || username === '') {
    return {
      ...formatError('Username cannot be empty'), 
      password,
      username,
    };
  }
  if (!password || password === '') {    
    return {
      ...formatError('Username cannot be empty'), 
      password,
      username,
    };
  }

  return {
    ...formatResponse('Username cannot be empty', true),  
    password,
    username
  }
  
}
