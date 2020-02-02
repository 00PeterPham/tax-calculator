export const formatNumber = num => {
  if (typeof num === 'string') {
    console.error('Error: Cannot format string. Must be a number');
    return null;
  }
  return num
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
