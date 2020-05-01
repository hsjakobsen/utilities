import { getBrowserInfo } from '../browser';

test('getBrowserInfo 1', () => {
  expect(
    getBrowserInfo(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0',
      'Netscape',
      '5.0 (Windows)',
    ),
  ).toEqual({
    name: 'Firefox',
    version: '67',
  });
});

test('getBrowserInfo 2', () => {
  expect(
    getBrowserInfo(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763',
      'Netscape',
      '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763',
    ),
  ).toEqual({
    name: 'Chrome',
    version: '64',
  });
});
