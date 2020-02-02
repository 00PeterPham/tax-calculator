import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
  describe('given valid number', () => {
    test('Convert float to formatted number string', () => {
      expect(formatNumber(12500.67)).toBe('12,500.67');
    });
  });
  describe('given invalid number', () => {
    test('Return null if given string', () => {
      expect(formatNumber('12500.67')).toBe(null);
    });
  });
});
