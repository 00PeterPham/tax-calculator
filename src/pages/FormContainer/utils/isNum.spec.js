import isNum from "./isNum";

describe('isNum', () => {
  test('Checks if string is number, and only contains digits, commas and decimals', () => {
    expect(isNum('123,456.00')).toBe(true);
  })
});