import { trimStringAndCheckLength, validateEmail, verifyLoginCredentials } from '../validation';

test('Validate email 1', () => {
  expect(validateEmail('test@test.com')).toBe(true);
});

test('Validate email 2', () => {
  expect(validateEmail('badmail@')).toBe(false);
});

test('trimStringAndCheckLength', () => {
  expect(trimStringAndCheckLength(' My little pony ', 'Name', 3, false)).toEqual({
    feedback: '',
    result: 'My little pony',
    success: true,
  });
});

test('verifyLoginCredentials', () => {
  expect(verifyLoginCredentials('', 'test')).toEqual({
    message: 'Username cannot be empty',
    password: 'test',
    success: false,
    username: '',
  });
});

test('verifyLoginCredentials', () => {
  expect(verifyLoginCredentials('test', 'test')).toEqual({
    message: '',
    password: 'test',
    success: true,
    username: 'test',
  });
});
