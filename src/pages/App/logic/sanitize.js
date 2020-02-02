export const sanitize = val => {
  const valCleanString = val.replace(/[^0-9.]+/g, '');
  return parseFloat(valCleanString);
};
