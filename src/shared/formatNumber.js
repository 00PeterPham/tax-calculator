export const formatNumber = num => {
  if (typeof num === 'string') {
    return null;
  }
  return num
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
