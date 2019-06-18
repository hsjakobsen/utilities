import * as utilsAsync from "./async";
import * as utilsBrowser from "./browser";
import * as utilsComparison from "./comparison";
import * as utilsDate from "./date";
import * as utilsNumber from "./numbers";
import * as utilsParse from "./parse";
import * as utilsResponse from "./responses";
import * as utilsValidation from "./validation";

export const asyncForEach = (array:Array<Object>, callback:Function) => utilsAsync.asyncForEach(array, callback);

export const compareStrings = (string1:string, string2:string) => utilsComparison.compareStrings(string1, string2);

export const getMonthAndDateFormatted = (date:Date) => utilsDate.monthAndDateFormatted(date);
export const getTodayDateFormatted = () => utilsDate.getTodayDateFormatted();
export const getTimestamp = (date:Date) => utilsDate.getTimestamp(date);
export const dateFormatYMD = utilsDate.dateFormatYMD;
export const dateFormatDMY = utilsDate.dateFormatDMY;
export const dateFormatMD = utilsDate.dateFormatMD;
export const timeFormatHMS = utilsDate.timeFormatHMS;

export const numberWithCommas = (numString:string) => utilsNumber.numberWithCommas(numString);

export const stringifyAndParse = (item:any) => utilsParse.stringifyAndParse(item);

export const getBrowserInfo = (userAgent:string, appName:string, appVersion:string) => utilsBrowser.getBrowserInfo(userAgent, appName, appVersion);

export const formatResponse = (response:any) => utilsResponse.formatResponse(response);
export const formatError = (response:any) => utilsResponse.formatError(response);

export const validateEmail = (email:string) => utilsValidation.validateEmail(email);
export const trimStringAndCheckLength = (stringToCheck:string, field:string, lengthRequirement:number, matchLength:boolean) => utilsValidation.trimStringAndCheckLength(stringToCheck, field, lengthRequirement, matchLength);
export const verifyLoginCredentials = (username:string, password:string) => utilsValidation.verifyLoginCredentials(username, password);