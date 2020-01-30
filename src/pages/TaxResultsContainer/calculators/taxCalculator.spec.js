import taxCalculator from './taxCalculator';

describe('taxCalculator', () => {
  test('Checks if correct taxResults is given for first tier at salary amount of 47600', () => {
    const salary = 47600;
    const taxTiers = [
      {
        tier: 1,
        taxRate: 0.15,
        taxableAmount: 47630,
      }
    ]
    const expectedOutput = [
      {
        tax: 7140, 
        taxRate: 0.15,
        taxTier: 1,
        taxableAmount: 47600,
      }
    ]
    expect(taxCalculator(salary, taxTiers)).toStrictEqual(expectedOutput);
  });
  test('Returns error if salary is Negative', () => {
    const salary = -100;
    const taxTiers = [
      {
        tier: 1,
        taxRate: 0.15,
        taxableAmount: 47630,
      }
    ]
    expect(taxCalculator(salary, taxTiers)).toStrictEqual([]);
  })
});