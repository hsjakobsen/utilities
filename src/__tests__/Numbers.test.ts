import { numberWithCommas } from '../index';

test('NumberwithCommas 1', () => {
  expect(numberWithCommas('10000000')).toBe('10,000,000');
});

test('NumberwithCommas 2', () => {
  expect(numberWithCommas('1000')).toBe('1,000');
});

test('NumberwithCommas 3', () => {
  expect(numberWithCommas('100.2')).toBe('100.2');
});
