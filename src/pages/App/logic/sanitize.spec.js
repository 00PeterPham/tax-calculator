import { sanitize } from './sanitize';

describe('santize', () => {
  describe('Given valid number string', () => {
    test('Removes non-numeric and non-decimal values', () => {
      expect(sanitize('100,000.00')).toBe(100000);
    });
  });
  describe('Given invalid number string', () => {
    test('Return null if tax value is not a number', () => {
      expect(sanitize('one hundred')).toBe(NaN);
    });
  });
});
