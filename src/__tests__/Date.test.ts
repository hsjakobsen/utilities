import { getMonthAndDateFormatted, getTimestamp } from '../index';

// MonthAndDateFormatted tests
test('MonthAndDateFormatted Test 1', () => {
  expect(getMonthAndDateFormatted(new Date(1560848669049))).toBe('06.18');
});

test('MonthAndDateFormatted Test 2', () => {
  expect(getMonthAndDateFormatted(new Date(500000000000))).toBe('11.05');
});

// TodayDateFormatted tests
// This test changes for every day
// test('TodayDateFormatted Test 1', () => {
//   expect(getTodayDateFormatted()).toBe('18-06-2019');
// });

// Timestamp tests
test('TimeStamp Test 1', () => {
  expect(getTimestamp("1560848669049")).toBe('11:04:29');
});

test('TimeStamp Test 2', () => {
  expect(getTimestamp("500000000000")).toBe('01:53:20');
});
