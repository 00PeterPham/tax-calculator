import calcTotalTax from '../calcTotalTax'

describe('calcTotalTax', () => {
  test('Adds all of the calculated tax for each tier together', () => {
    const taxesPerTier = [
      {tax: 1},
      {tax: 2},
      {tax: 3},
      {tax: 4},
      {tax: 5}
    ]
    expect(calcTotalTax(taxesPerTier)).toBe(15);
  });
  test('', () => {
    const taxesPerTier = [
      {tax: 1},
      {tax: "two"},
      {tax: 3},
      {tax: 4},
      {tax: 5}
    ]
    expect(calcTotalTax(taxesPerTier)).toBe(15);
  });
})
