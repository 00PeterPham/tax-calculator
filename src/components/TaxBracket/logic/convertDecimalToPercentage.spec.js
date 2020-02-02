import { convertDecimalToPercentage } from './convertDecimalToPercentage';

describe('convertDecimalToPercentage', () => {
  describe('given valid decimal', () => {
    test('Converts decimal value to percentage', () => {
      expect(convertDecimalToPercentage(0.255)).toBe(25.5);
    });
  });
  describe('given invalid decimal', () => {
    test('Returns NaN if given string', () => {
      expect(convertDecimalToPercentage('0.255')).toBe(NaN);
    });
  });
});
