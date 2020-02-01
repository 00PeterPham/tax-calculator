import { isNum } from "./isNum";

describe('isNum', () => {
  describe('given valid number', () => {
    test('Checks if string consists of numbers, commas and a decimal', () => {
      expect(isNum("100,000.00")).toBe(true);
    });
  });
  describe('given invalid number', () => {
    test('Return null if tax value is not a number', () => {
      expect(isNum("AB100,000.00")).toBe(false);
    });
  });
})
