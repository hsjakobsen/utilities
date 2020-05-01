import { formatNumberReadable, numberWithCommas } from '../numbers';

test('NumberwithCommas 1', () => {
  expect(numberWithCommas('10000000')).toBe('10,000,000');
});

test('NumberwithCommas 2', () => {
  expect(numberWithCommas('1000')).toBe('1,000');
});

test('NumberwithCommas 3', () => {
  expect(numberWithCommas('100.2')).toBe('100.2');
});

test('formatNumberReadable 1', () => {
  expect(formatNumberReadable(1000)).toBe('1,000');
});

test('formatNumberReadable 2', () => {
  expect(formatNumberReadable(23452040)).toBe('23,452,040');
});

test('formatNumberReadable 3', () => {
  expect(formatNumberReadable(23452040.45)).toBe('23,452,040.45');
});