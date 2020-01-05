const isNum = (str) => {
  return /^[0-9,.]*$/.test(str);
}

export default isNum;