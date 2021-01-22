import dayjs from 'dayjs';

export const dateFormatYMD = 'YYYY-MM-DD';
export const dateFormatDMY = 'DD-MM-YYYY';
export const dateFormatMD = 'MM.DD';
export const timeFormatHMS = 'HH:mm:ss';
export const timeFormatHM = 'HH:mm';
export const verboseDateFormat = 'MMMM Do YYYY';

export const monthAndDateFormatted = (date: string): string => {
  return dayjs(date).format(dateFormatMD);
};

export const getTodayDateFormatted = (): string => {
  return dayjs(new Date()).format(dateFormatDMY);
};

export const getTimestamp = (date: Date): string => {
  return dayjs(date).format(timeFormatHMS);
};

export const getSignUpDateForDatabase = (): string => {
  return dayjs(new Date()).format(dateFormatYMD + ' ' + timeFormatHMS);
};
