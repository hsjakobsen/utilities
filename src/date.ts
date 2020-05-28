import * as moment from 'moment';

export const dateFormatYMD = 'YYYY-MM-DD';
export const dateFormatDMY = 'DD-MM-YYYY';
export const dateFormatMD = 'MM.DD';
export const timeFormatHMS = 'HH:mm:ss';
export const timeFormatHM = 'HH:mm';
export const verboseDateFormat = 'MMMM Do YYYY';

export const monthAndDateFormatted = (date: string) => {
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
