export const convertDecimalToPercentage = num => {
  if (typeof num === 'string') return NaN;
  return Math.round(num * 100 * 10) / 10;
};
