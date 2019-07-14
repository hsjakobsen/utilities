import * as moment from 'moment';

export const dateFormatYMD: string = 'YYYY-MM-DD';
export const dateFormatDMY: string = 'DD-MM-YYYY';
export const dateFormatMD: string = 'MM.DD';
export const timeFormatHMS: string = 'HH:mm:ss';

export const monthAndDateFormatted = (date: Date) => {
  return moment(date).format(dateFormatMD);
};

export const getTodayDateFormatted = () => {
  return moment(new Date()).format(dateFormatDMY);
};

export const getTimestamp = (date: Date) => {
  return moment(date).format(timeFormatHMS);
};

export const getSignUpDateForDatabase = () => {
  return moment(new Date()).format(dateFormatYMD + ' ' + timeFormatHMS);
};
