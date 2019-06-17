import { validateEmail } from '../index';

test('Validate email 1', () => {
  expect(validateEmail('test@test.com')).toBe(true);
});

test('Validate email 2', () => {
    expect(validateEmail("badmail@")).toBe(false);
})