import { isValid } from './isValid';

describe('isInvalid', () => {
  describe('given valid number', () => {
    test('Checks if string consists of numbers, commas and a decimal', () => {
      expect(isValid('100,000.00')).toBe(true);
    });
  });
  describe('given invalid number', () => {
    test('Return false if string is empty', () => {
      expect(isValid('')).toBe(false);
    });
    test('Return false if string is not a number', () => {
      expect(isValid('AB100,000.00')).toBe(false);
    });
    test('Return false if string has more than 1 decimal', () => {
      expect(isValid('100.00.00')).toBe(false);
    });
    test('Return false if value is greater than 1e+19', () => {
      expect(isValid('99999999999999999999')).toBe(false);
    });
  });
});
