import { calcTotalTax, taxCalculator } from './calculators';

describe('taxCalculator', () => {
  describe('given a valid salary', () => {
    test('Checks if correct taxResults is given for first tier at salary amount of 47600', () => {
      const salary = 47600;
      const taxRates = [
        {
          taxBracket: 1,
          taxRate: 0.15,
          baseAmount: 47630,
        }
      ]
      const expectedOutput = [
        {
          taxBracket: 1,
          tax: 7140, 
          taxRate: 0.15,
          baseAmount: 47600,
        }
      ]
      expect(taxCalculator(salary, taxRates)).toStrictEqual(expectedOutput);
    });
  });
  describe('given an invalid salary', () => {
    test('Returns null if salary is Negative', () => {
      const salary = -1;
      const taxRates = [
        {
          tier: 1,
          taxRate: 0.15,
          baseAmount: 47630,
        }
      ]
      expect(taxCalculator(salary, taxRates)).toBe(null);
    })
    test('Returns null if salary is string', () => {
      const salary = "one hundred";
      const taxRates = [
        {
          tier: 1,
          taxRate: 0.15,
          baseAmount: 47630,
        }
      ]
      expect(taxCalculator(salary, taxRates)).toBe(null);
    })
  });
});

describe('calcTotalTax', () => {
  describe('given valid tax amounts', () => {
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
  });
  describe('given invalid tax amounts', () => {
    test('Return null if tax value is not a number', () => {
      const taxesPerTier = [
        {tax: 1},
        {tax: "two"},
        {tax: 3},
        {tax: 4},
        {tax: 5}
      ]
      expect(calcTotalTax(taxesPerTier)).toBe(null);
    });
  });
})
