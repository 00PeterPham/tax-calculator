import { sanitize } from './sanitize';

describe('santize', () => {
  test('Removes non-numeric and non-decimal values', () => {
    expect(sanitize('100,000.00')).toBe(100000.0);
  });
  test('Return null if tax value is not a number', () => {
    expect(sanitize('one hundred')).toBe(NaN);
  });
});
