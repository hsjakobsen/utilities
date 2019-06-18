import { compareStrings } from '../index';

test('Compare strings 1', () => {
  expect(compareStrings('Carl', 'Carl')).toBe(0);
});

test('Compare strings 2', () => {
  expect(compareStrings('carl', 'Carl')).toBe(1);
});

test('Compare strings 3', () => {
  expect(compareStrings('Flow', 'flow')).toBe(-1);
});
