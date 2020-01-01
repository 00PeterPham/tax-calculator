import formatNumber from '../formatNumber'

describe('formatNumber', () => {
  test('Takes a number add "thousands commas", sets number to 2 decimal places and converts to String', () => {
    expect(formatNumber(123456)).toBe('123,456.00');
  });
});