import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My Greeter 2', () => {
    expect(Greeter("Henrik")).toBe('Hello Henrik');
})