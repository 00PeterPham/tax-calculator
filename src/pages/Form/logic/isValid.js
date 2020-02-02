export const isValid = val => {
  const isEmpty = val === '';
  const hasLettersOrSpecialChars = /^(?![0-9,.]*$)/.test(val);
  const numberOfDecimals = (val.match(/\./g) || []).length;
  const tooLarge = val >= 1e19;

  if (isEmpty || hasLettersOrSpecialChars || numberOfDecimals > 1 || tooLarge) {
    return false;
  }

  return true;
};

/*
  TODO:
  - show error if num is too large and uses scientific notation
*/
