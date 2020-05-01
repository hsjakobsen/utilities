import { stringifyAndParse } from '../parse';

const list = [
  {
    id: 3333,
    name: 'test',
    street: 'test',
  },
  {
    id: 2323,
    name: 'test2',
    street: 'test2',
  },
];

test('parseItem', () => {
  expect(stringifyAndParse(list)).toEqual(list);
});
