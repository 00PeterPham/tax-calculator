import rndNumUpTwoDecimal from './rndNumUpTwoDecimal'

describe('rndNumUpTwoDecimal', () => {
  test('Rounds Numbers up to 2 decimal places', () => {
    expect(rndNumUpTwoDecimal(1.466)).toBe(1.47);
  });
});