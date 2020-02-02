export const isValid = val => {
  const isEmpty = val === '';
  const hasLettersOrSpecialChars = /^(?![0-9,.]*$)/.test(val);
  const numberOfDecimals = (val.match(/\./g) || []).length;

  if (isEmpty || hasLettersOrSpecialChars || numberOfDecimals > 1) {
    return false;
  }

  return true;
};
