import * as moment from 'moment';

export const dateFormatYMD: string = 'YYYY-MM-DD';
export const dateFormatDMY: string = 'DD-MM-YYYY';
export const dateFormatMD: string = 'MM.DD';
export const timeFormatHMS: string = 'HH:mm:ss';

export function monthAndDateFormatted(date: Date) {
  return moment(date).format(dateFormatMD);
}

export function getTodayDateFormatted() {
  return moment(new Date()).format(dateFormatDMY);
}

export function getTimestamp(date: Date) {
  return moment(date).format(timeFormatHMS);
}
