import { trimStringAndCheckLength, validateEmail, verifyLoginCredentials } from '../index';

test('Validate email 1', () => {
  expect(validateEmail('test@test.com')).toBe(true);
});

test('Validate email 2', () => {
  expect(validateEmail('badmail@')).toBe(false);
});

test('trimStringAndCheckLength', () => {
  expect(trimStringAndCheckLength(' My little pony ', 'Name', 3, false)).toEqual({
    success: true,
    result: 'My little pony',
    feedback: '',
  });
});

test('verifyLoginCredentials', () => {
  expect(verifyLoginCredentials('', 'test')).toEqual({
    success: false,
    message: 'Username cannot be empty',
  });
});

test('verifyLoginCredentials', () => {
  expect(verifyLoginCredentials('test', 'test')).toEqual({
    password: 'test',
    success: true,
    username: 'test',
  });
});
