export const isInvalid = (val) => {
  const isEmpty = val === '';
  const hasLettersOrSpecialChars = /^(?![0-9,.]*$)/.test(val);
  const numberOfDecimals = (val.match(/\./g) || []).length;

  if(
      isEmpty || 
      hasLettersOrSpecialChars || 
      numberOfDecimals
  ){
    return true;
  }

  return false;
}