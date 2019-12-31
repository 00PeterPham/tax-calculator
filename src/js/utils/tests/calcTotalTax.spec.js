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
  //Should not accept strings, change function to return error, null or false if argument val (arr.tax) is anything but a number
  // test('', () => {
  //   const taxesPerTier = [
  //     {tax: 1},
  //     {tax: "two"},
  //     {tax: 3},
  //     {tax: 4},
  //     {tax: 5}
  //   ]
  //   expect(calcTotalTax(taxesPerTier)).toBe(15);
  // });
})
