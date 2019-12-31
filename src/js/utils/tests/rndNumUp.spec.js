import rndNumUp from '../rndNumUp'

test('Rounds Numbers up to 2 decimal places', () => {
  expect(rndNumUp(1.466)).toBe(1.47);
});