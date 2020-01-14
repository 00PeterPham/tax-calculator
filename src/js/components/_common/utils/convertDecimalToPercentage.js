const convertDecimalToPercentage = (num) => {
  //Converts a decimal value to percentage and rounds to 2 decimal place
  return (Math.round((num*100)*10)/10);
}
export default convertDecimalToPercentage;