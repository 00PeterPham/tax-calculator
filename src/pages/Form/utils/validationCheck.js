import isNum from "./isNum";

const valdiationCheck = (evt, setInputError, handleSubmit) => {
  evt.preventDefault();
  const form_el = evt.target.parentNode;
  const inputVal = evt.target.parentNode.querySelector('input').value;
  const inputIsNum = isNum(inputVal);
  const inputIsNotEmpty = inputVal !== '';

  if(inputIsNum && inputIsNotEmpty){
    setInputError(false);
    handleSubmit(form_el);
  }else {
    setInputError(true);
  }
}

export default valdiationCheck;