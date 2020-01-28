import React, { useState } from "react";
import isNum from "./utils/isNum";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Error from "../../components/Error";

const FormContainer = ({ handleSubmit }) => {
  const [inputError, setInputError] = useState(false);

  const handleInputFocus = () => {
    setInputError(false);
  }

  const validationCheck = (evt) => {
    evt.preventDefault();
    const form_el = evt.target;
    const inputVal = form_el.salaryInput.value;
    const inputIsNum = isNum(inputVal);
    const inputIsNotEmpty = inputVal !== '';
  
    if(inputIsNum && inputIsNotEmpty){
      setInputError(false);
      handleSubmit(evt.target);
    }else {
      setInputError(true);
    }
  }

  return (
    <form className="salary-form" onSubmit={validationCheck} noValidate>
      <Input 
        label="Salary Input"
        text="Please enter your annual salary"
        type="text"
        name="salaryInput"
        handleInputFocus={handleInputFocus}
      />
      <Button 
        className="salary-form__button" 
        text="submit" 
      />
      {
        inputError && 
        <Error 
          className="salary-form__error-msg"
          text="Please enter a valid number format. It can contain numbers, commas, and a decimal. ie. 150,000.75"
        />
      }
    </form>
  )
};
export default FormContainer;