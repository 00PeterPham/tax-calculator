import { isInvalid } from "./isInvalid";

describe('isInvalid', () => {
  describe('given valid number', () => {
    test('Checks if string consists of numbers, commas and a decimal', () => {
      expect(isInvalid("100,000.00")).toBe(true);
    });
  });
  describe('given invalid number', () => {
    test('Return null if tax value is not a number', () => {
      expect(isInvalid("AB100,000.00")).toBe(false);
    });
  });
})

//TO DO: Rework